"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { Category, Catalog, ProductWithImage } from '@/lib/types';
import { cn, resolveImageUrl, slugify } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sparkles, Settings, Loader2, Search } from 'lucide-react';
import CatalogGrid from '@/components/products/CatalogGrid';
import { ProductGrid } from '@/components/products/ProductGrid';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { fetchProductsByCategoryAction } from '@/actions/product.actions';
import { ProductCard } from '@/components/products/ProductCard';

import { CompanyDetails } from '@/lib/api-types';
import { ProductInitializer } from '@/components/providers/ProductInitializer';
import { useProduct } from '@/hooks/use-product';
import { useTenant } from '@/components/providers/TenantContext';
import { FeaturesCarousel } from '@/components/home/FeaturesCarousel';
import { CouponCarousel } from '@/components/home/CouponCarousel';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { SilkShowcaseCanvas } from '@/components/home/SilkShowcaseCanvas';

interface HomeClientProps {
    initialCategories: Category[];
    companyDetails: CompanyDetails | null;
    fetchAllAtOnce: boolean;
}

export default function HomeClient({ initialCategories, companyDetails, fetchAllAtOnce }: HomeClientProps) {
    const router = useRouter();

    const { categories, setCategories, isCategoryExpired, markCategoryAsFetched } = useProduct();
    const tenant = useTenant();
    const { theme, categoryPage, text, typography } = tenant;
    const categoryShape = theme?.categoryFrame || 'circle';

    const getShapeClass = (shape: string) => {
        switch (shape) {
            case 'square': return 'rounded-xl';
            case 'squircle': return 'rounded-[2rem]';
            default: return 'rounded-full';
        }
    };

    const shapeClass = getShapeClass(categoryShape);


    // Auth State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const checkAuth = () => {
            const storedLogin = localStorage.getItem('isLoggedIn') === 'true';
            const storedRole = localStorage.getItem('userRole');
            setIsLoggedIn(storedLogin);
            setUserRole(storedRole);
        };

        checkAuth();
        window.addEventListener('auth-change', checkAuth);
        return () => window.removeEventListener('auth-change', checkAuth);
    }, []);

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (categoryId: string) => {
        if (categoryPage) {
            const category = categories.find(c => c.id === categoryId);
            const urlSlug = category ? slugify(category.name) : categoryId;
            router.push(`/category/${urlSlug}`);
        } else {
            setSelectedCategory(categoryId);

            setTimeout(() => {
                const element = document.getElementById('first-category-products');
                if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    // --- Dynamic Category Product Grid Logic ---
    const firstCategoryId = categories.length > 0 ? categories[0].id : undefined;

    // If categoryPage is false, display the selected category. Otherwise, always display the first.
    const activeCategoryId = categoryPage ? firstCategoryId : (selectedCategory || firstCategoryId);
    const activeCategory = categories.find(c => c.id === activeCategoryId);

    const [isLoadingCategory, setIsLoadingCategory] = useState<Record<string, boolean>>({});
    const fetchingRef = useRef<Record<string, boolean>>({});
    const mountTime = useRef(Date.now());

    const loadCategoryData = useCallback(async (categoryId: string) => {
        if (!categoryId || categoryId === 'undefined' || categoryId === 'null') return;
        const currentCategories = useProduct.getState().categories;
        if (!currentCategories || currentCategories.length === 0) return;

        const category = currentCategories.find(c => c.id === categoryId);
        if (!category) return;

        const expired = isCategoryExpired(categoryId);
        const serverCat = initialCategories.find(ic => ic.id === categoryId);
        const hasServerCatalogs = serverCat && serverCat.catalogs.length > 0;
        const isPreLoaded = !!hasServerCatalogs;
        const state = useProduct.getState();
        const timestampExists = state.categoryTimestamps && !!state.categoryTimestamps[categoryId];
        const shouldSkipAsPreloaded = isPreLoaded && !timestampExists;

        const timeSinceMount = Date.now() - mountTime.current;
        const isFreshMount = timeSinceMount < 10000;

        if ((category.catalogs.length === 0 || expired) && !isLoadingCategory[categoryId] && !fetchingRef.current[categoryId] && !shouldSkipAsPreloaded) {
            if (isPreLoaded && isFreshMount) return;

            fetchingRef.current[categoryId] = true;
            setIsLoadingCategory(prev => ({ ...prev, [categoryId]: true }));
            try {
                const fetchedCategory = await fetchProductsByCategoryAction(categoryId, companyDetails?.deliveryBetween);
                if (fetchedCategory) {
                    setCategories(prev => prev.map(c => c.id === categoryId ? {
                        ...c,
                        ...fetchedCategory,
                        name: fetchedCategory.name || c.name,
                        categoryImage: fetchedCategory.categoryImage || c.categoryImage,
                        catalogs: fetchedCategory.catalogs
                    } : c));
                    markCategoryAsFetched(categoryId);
                    return fetchedCategory;
                }
            } catch (error) {
                console.error("Failed to load category", error);
            } finally {
                fetchingRef.current[categoryId] = false;
                setIsLoadingCategory(prev => ({ ...prev, [categoryId]: false }));
            }
        }
    }, [initialCategories, companyDetails?.deliveryBetween, isLoadingCategory, isCategoryExpired, markCategoryAsFetched, setCategories]);

    useEffect(() => {
        if (activeCategoryId) {
            loadCategoryData(activeCategoryId);
        }
    }, [activeCategoryId, categories.length > 0]);

    const catalogs: Catalog[] = activeCategory ? activeCategory.catalogs : [];
    const [selectedCatalogId, setSelectedCatalogId] = useState<string | null>(null);

    useEffect(() => {
        if (activeCategory && activeCategory.catalogs.length > 0) {
            if (!selectedCatalogId || !activeCategory.catalogs.some(c => c.id === selectedCatalogId)) {
                setSelectedCatalogId(activeCategory.catalogs[0].id);
            }
        }
    }, [activeCategory, selectedCatalogId]);

    const selectedCatalog = catalogs.find(c => c.id === selectedCatalogId);
    const imageMap = useMemo(() => new Map(PlaceHolderImages.map(img => [img.id, img])), []);

    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [searchDropdownResults, setSearchDropdownResults] = useState<ProductWithImage[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);

    const allCategoryProducts: ProductWithImage[] = useMemo(() => {
        return activeCategory ? activeCategory.catalogs.flatMap(catalog =>
            catalog.products.map(p => {
                const image = imageMap.get(p.imageId);
                return {
                    ...p,
                    imageHint: image?.imageHint || 'product image',
                    imageUrl: resolveImageUrl(p.productImage || (p.images && p.images.length > 0 ? p.images[0] : '') || '')
                };
            })
        ) : [];
    }, [activeCategory, imageMap]);

    const allNewArrivals: ProductWithImage[] = useMemo(() => {
        return activeCategory ? activeCategory.catalogs.flatMap(c => c.products)
            .filter(p => {
                const created = new Date(p.createdAt);
                const now = new Date();
                return (Math.abs(now.getTime() - created.getTime()) / (1000 * 60 * 60)) <= 48;
            })
            .map(p => {
                const image = imageMap.get(p.imageId);
                return {
                    ...p,
                    imageHint: image?.imageHint || 'product image',
                    imageUrl: resolveImageUrl(p.productImage || (p.images && p.images.length > 0 ? p.images[0] : '') || '')
                }
            })
            .sort((a, b) => new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime())
            : [];
    }, [activeCategory, imageMap]);
    const newArrivals = useMemo(() => allNewArrivals.slice(0, 5), [allNewArrivals]);

    const allFamousProducts: ProductWithImage[] = useMemo(() => {
        return activeCategory ? activeCategory.catalogs.flatMap(c => c.products)
            .filter(p => p.famous)
            .map(p => {
                const image = imageMap.get(p.imageId);
                return {
                    ...p,
                    imageHint: image?.imageHint || 'product image',
                    imageUrl: resolveImageUrl(p.productImage || (p.images && p.images.length > 0 ? p.images[0] : '') || '')
                }
            })
            .sort((a, b) => new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime())
            : [];
    }, [activeCategory, imageMap]);
    const famousProducts = useMemo(() => allFamousProducts.slice(0, 8), [allFamousProducts]);

    const baseProducts: ProductWithImage[] = useMemo(() => {
        if (selectedCatalog) {
            return selectedCatalog.products.map(p => {
                const image = imageMap.get(p.imageId);
                return {
                    ...p,
                    imageHint: image?.imageHint || 'product image',
                    imageUrl: resolveImageUrl(p.productImage || (p.images && p.images.length > 0 ? p.images[0] : '') || '')
                };
            });
        }
        if (activeCategory) {
            return activeCategory.catalogs.flatMap(catalog =>
                catalog.products.map(p => {
                    const image = imageMap.get(p.imageId);
                    return {
                        ...p,
                        imageHint: image?.imageHint || 'product image',
                        imageUrl: resolveImageUrl(p.productImage || (p.images && p.images.length > 0 ? p.images[0] : '') || '')
                    };
                })
            );
        }
        return [];
    }, [selectedCatalog, activeCategory, imageMap]);

    useEffect(() => {
        if (searchQuery.trim() && activeCategory) {
            const results = allCategoryProducts.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchDropdownResults(results);
            setShowSearchDropdown(true);
        } else {
            setSearchDropdownResults(prev => prev.length === 0 ? prev : []);
            setShowSearchDropdown(prev => prev === false ? prev : false);
        }
    }, [searchQuery, activeCategory, allCategoryProducts]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSearchDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchProductClick = (productId: string) => {
        setShowSearchDropdown(false);
        setSearchQuery('');
        router.push(`/product/${productId}`);
    };

    const visibleCategories = tenant.id.toLowerCase().includes('sandhya') ? categories.slice(0, 2) : categories;
    const spotlightProducts = baseProducts.slice(0, 4);
    const curatedProducts = famousProducts.length > 0 ? famousProducts.slice(0, 3) : baseProducts.slice(0, 3);
    const heroStats = [
        { label: 'Collections', value: String(visibleCategories.length).padStart(2, '0') },
        { label: 'Curated Pieces', value: String(baseProducts.length || allCategoryProducts.length).padStart(2, '0') },
        { label: 'New Arrivals', value: String(newArrivals.length).padStart(2, '0') },
    ];

    // --- End First Category Product Grid Logic ---

    if (userRole?.includes('OWNER')) {
        return (
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-dot-grid" />
                <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />
                <div className="liquid-glass p-8 rounded-3xl max-w-md mx-auto">
                    <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                        <Settings className="h-10 w-10 text-accent" />
                    </div>
                    <h1 className="text-2xl font-bold font-headline text-foreground">Admin Dashboard</h1>
                    <p className="text-muted-foreground mt-2 max-w-xs mx-auto font-light">
                        Please use the Profile Sidebar {'>'} Settings to access your admin controls.
                    </p>
                    <div className="mt-8 flex gap-4 justify-center">
                        <Button variant="outline" onClick={() => window.dispatchEvent(new Event('open-profile-sidebar'))} className="border-accent/30 text-accent hover:bg-accent/5 rounded-xl">
                            Open Sidebar
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            <div className="relative space-y-14 pb-20">

                {initialCategories.length > 0 && (
                    <ProductInitializer categories={initialCategories} companyDetails={companyDetails} />
                )}

                {isLoggedIn && userRole?.includes('CUSTOMER') && companyDetails?.companyPhone && (
                    <WhatsAppButton phoneNumber={companyDetails.companyPhone} companyName={companyDetails.companyName} />
                )}

                <CouponCarousel companyCoupon={companyDetails?.companyCoupon} />

                <div className="container mx-auto px-4 relative z-10 space-y-20">
                    <section id="shop-now" className="scroll-mt-24">
                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div className="bg-[#f9f6f0] relative border border-[#f2f2f2] p-6 md:p-8 rounded-none">
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                        <div className="max-w-2xl space-y-4">
                                            <div className="inline-flex items-center gap-2 rounded-none border border-primary/20 bg-primary/5 px-4 py-1.5">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Editorial Selection</span>
                                            </div>
                                            <h2
                                                className="max-w-3xl text-3xl md:text-5xl font-headline leading-tight text-[#1a1a1a]"
                                                style={{
                                                    fontWeight: '600',
                                                    letterSpacing: '0.02em'
                                                }}
                                            >
                                                Draped in heritage, <br />
                                                <span className="font-script text-primary text-3xl md:text-4xl capitalize tracking-normal block mt-2">styled like a modern boutique.</span>
                                            </h2>
                                            <p className="max-w-xl text-xs md:text-sm leading-relaxed text-[#555]">
                                                We reworked the storefront into a richer fashion editorial experience: deeper contrast, more dramatic product framing, curated rails, and premium browsing moments for every collection.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3 md:min-w-[260px]">
                                            {heroStats.map((stat) => (
                                                <div key={stat.label} className="rounded-none border border-[#f2f2f2] bg-white px-3 py-4 text-center">
                                                    <div className="font-headline text-3xl font-bold text-primary">{stat.value}</div>
                                                    <div className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                                        <div className="rounded-none border border-[#f2f2f2] bg-white px-5 py-6 text-[#1a1a1a]">
                                            <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/60 font-semibold mb-4">Category Atlas</div>
                                            <div className="flex flex-wrap gap-2.5">
                                                {visibleCategories.map((category) => {
                                                    const isActive = !categoryPage && (selectedCategory || firstCategoryId) === category.id;

                                                    return (
                                                        <button
                                                            key={category.id}
                                                            onClick={() => handleCategoryClick(category.id)}
                                                            className={cn(
                                                                "group flex items-center gap-3 rounded-none border px-3 py-2 transition-all duration-300",
                                                                isActive
                                                                    ? "border-primary bg-primary text-white"
                                                                    : "border-[#f2f2f2] bg-white hover:border-primary text-[#1a1a1a]"
                                                            )}
                                                        >
                                                            <div className="rounded-none h-9 w-9 overflow-hidden border border-[#f2f2f2] bg-white shrink-0">
                                                                {category.categoryImage ? (
                                                                    <img src={resolveImageUrl(category.categoryImage)} alt={category.name} className="h-full w-full object-cover" />
                                                                ) : (
                                                                    <div className="flex h-full w-full items-center justify-center text-primary">
                                                                        <Sparkles className="h-3 w-3" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <span className="text-left text-[10px] font-bold uppercase tracking-wider">{category.name}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {curatedProducts.map((product, index) => (
                                                <button
                                                    key={product.id}
                                                    onClick={() => handleSearchProductClick(product.id)}
                                                    className={cn(
                                                        "group relative overflow-hidden rounded-none border border-[#f2f2f2] bg-white p-3.5 text-left transition-all duration-300 hover:border-primary",
                                                        index === 0 && "sm:col-span-2"
                                                    )}
                                                >
                                                    <div className={cn("grid gap-3.5", index === 0 ? "sm:grid-cols-[1fr_0.85fr]" : "")}>
                                                        <div className="space-y-2 flex flex-col justify-between">
                                                            <div>
                                                                <div className="text-[9px] uppercase tracking-wider text-primary font-bold">Editor&apos;s pick</div>
                                                                <h3 className="font-headline text-lg font-bold leading-tight text-[#1a1a1a] mt-1">{product.name}</h3>
                                                                <p className="line-clamp-2 text-xs text-[#555] mt-1">{product.description}</p>
                                                            </div>
                                                            <div className="text-[10px] font-bold text-primary uppercase tracking-wider">Discover piece</div>
                                                        </div>
                                                        <div className={cn("relative overflow-hidden rounded-none bg-[#f2f2f2]", index === 0 ? "min-h-[160px]" : "min-h-[120px]") }>
                                                            <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                                <div className="rounded-none border border-[#f2f2f2] bg-white p-6">
                                    <div className="text-[10px] uppercase tracking-wider text-primary font-bold">House Codes</div>
                                    <div className="mt-4 space-y-4">
                                        {heroStats.map((stat, index) => (
                                            <div key={stat.label} className="flex items-center justify-between border-b border-[#f2f2f2] pb-4 last:border-b-0 last:pb-0">
                                                <div>
                                                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                                                    <div className="mt-0.5 text-xs text-[#1a1a1a] font-medium">Luxury-first browsing experience</div>
                                                </div>
                                                <div className="font-headline text-3xl text-primary/75">0{index + 1}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-none border border-[#f2f2f2] bg-[#f9f6f0] text-[#1a1a1a]">
                                    <div className="p-6">
                                        <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/60 font-semibold">Brand Promise</div>
                                        <h3 className="mt-3 font-headline text-2xl font-bold leading-tight">Crafted for premium discovery.</h3>
                                        <p className="mt-3 text-xs leading-relaxed text-[#555]">Each page is being reworked toward a richer fashion-commerce feel: mood, contrast, and product-first storytelling instead of basic marketplace blocks.</p>
                                    </div>
                                    <div className="grid grid-cols-3 border-t border-[#f2f2f2] text-center text-[10px] uppercase tracking-wider text-[#1a1a1a]/70 font-semibold bg-white">
                                        <div className="px-3 py-3.5">Luxury</div>
                                        <div className="border-x border-[#f2f2f2] px-3 py-3.5">Curated</div>
                                        <div className="px-3 py-3.5">Modern</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="animate-in fade-in slide-in-from-top-4 duration-700">
                        <FeaturesCarousel features={companyDetails?.features} />
                    </div>

                    {activeCategoryId && activeCategory && (
                        <section id="first-category-products" className="space-y-14 pb-24 scroll-mt-24">
                            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 rounded-none border border-primary/20 bg-primary/5 px-4 py-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Current Edit</span>
                                    </div>
                                    <h3 className="font-headline text-4xl leading-none text-foreground">{activeCategory.name} highlights</h3>
                                    <p className="max-w-md text-sm leading-7 text-muted-foreground">A more dramatic browse of standout styles, fast movers, and fresh drops from this category.</p>
                                </div>

                                {!fetchAllAtOnce && (
                                    <div className="relative w-full group justify-self-end max-w-xl" ref={searchRef}>
                                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder={`Search in ${activeCategory.name}...`}
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onFocus={() => searchQuery.trim() && setShowSearchDropdown(true)}
                                            className="w-full rounded-none border border-border/30 bg-card/80 py-4 pl-12 pr-4 text-base outline-none backdrop-blur-xl transition-all duration-300 focus:border-primary/30"
                                        />
                                        {showSearchDropdown && (
                                            <div className="absolute top-full left-0 z-50 mt-2 max-h-[60vh] w-full overflow-y-auto rounded-2xl border border-border/30 bg-card/95 shadow-xl backdrop-blur-xl">
                                                {searchDropdownResults.length > 0 ? (
                                                    <div className="py-2">
                                                        <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Products</div>
                                                        {searchDropdownResults.map(product => (
                                                            <div
                                                                key={product.id}
                                                                className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary/40"
                                                                onClick={() => handleSearchProductClick(product.id)}
                                                            >
                                                                <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-secondary">
                                                                    <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h4 className="line-clamp-2 text-sm font-semibold text-foreground">{product.name}</h4>
                                                                    <div className="mt-1 flex items-center gap-2">
                                                                        <p className="text-xs font-semibold text-foreground">₹{product.priceAfterDiscount && product.priceAfterDiscount < product.price ? product.priceAfterDiscount : product.price}</p>
                                                                        {product.priceAfterDiscount && product.priceAfterDiscount < product.price && (
                                                                            <p className="text-[10px] text-muted-foreground line-through">₹{product.price}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="p-8 text-center text-muted-foreground">No results found in "{activeCategory.name}"</div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {isLoadingCategory[activeCategoryId] ? (
                                <div className="flex items-center justify-center py-20 text-muted-foreground">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                    <span className="ml-3">Loading products...</span>
                                </div>
                            ) : (
                                <>
                                    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                                        <div className="rounded-none border border-[#f2f2f2] bg-white p-6">
                                            <div className="mb-6 flex items-center justify-between">
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-wider text-primary font-bold">Spotlight Rail</div>
                                                    <h4 className="mt-2 font-headline text-3xl font-bold text-[#1a1a1a]">Front-row picks</h4>
                                                </div>
                                            </div>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                {spotlightProducts.map((product) => (
                                                    <ProductCard key={product.id} product={product} hideDescription={true} />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="rounded-none border border-[#f2f2f2] bg-[#f9f6f0] p-6 text-[#1a1a1a]">
                                            <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/60 font-semibold">Collection Notes</div>
                                            <h4 className="mt-3 font-headline text-3xl font-bold leading-tight">Luxury layers, stronger hierarchy.</h4>
                                            <p className="mt-3 text-xs leading-relaxed text-[#555]">This section has been restructured into spotlight picks, curated rails, and a more cinematic grid so the homepage reads like a premium brand presentation.</p>
                                            <div className="mt-6 grid gap-3">
                                                {heroStats.map((stat) => (
                                                    <div key={stat.label} className="flex items-center justify-between rounded-none border border-[#f2f2f2] bg-white px-4 py-3">
                                                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</span>
                                                        <span className="font-headline text-3xl font-bold text-primary">{stat.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {newArrivals.length > 0 && (
                                        <div className="space-y-5">
                                            <div className="flex items-end justify-between gap-4">
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-wider text-primary font-bold">New arrival rail</div>
                                                    <h4 className="mt-2 font-headline text-3xl font-bold text-[#1a1a1a]">Freshly dropped</h4>
                                                </div>
                                                <p className="hidden text-sm text-muted-foreground md:block">A faster, magazine-like browse for the latest pieces.</p>
                                            </div>
                                            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 no-scrollbar">
                                                {newArrivals.map((product) => (
                                                    <div key={product.id} className="w-[290px] flex-shrink-0 snap-start">
                                                        <ProductCard product={product} hideDescription={true} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {famousProducts.length > 0 && (
                                        <div className="space-y-5">
                                            <div>
                                                <div className="text-[10px] uppercase tracking-wider text-primary font-bold">Bestseller rail</div>
                                                <h4 className="mt-2 font-headline text-3xl font-bold text-[#1a1a1a]">Signature selection</h4>
                                            </div>
                                            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 no-scrollbar">
                                                {famousProducts.map((product) => (
                                                    <div key={product.id} className="w-[290px] flex-shrink-0 snap-start">
                                                        <ProductCard product={product} hideDescription={true} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-8">
                                        <div className="flex items-end justify-between gap-4">
                                            <div>
                                                <div className="text-[10px] uppercase tracking-wider text-primary font-bold">Catalog explorer</div>
                                                <h4 className="mt-2 font-headline text-3xl font-bold text-[#1a1a1a]">Browse by story</h4>
                                            </div>
                                            <p className="hidden text-sm text-muted-foreground md:block">Choose a catalog, then dive into the full product selection below.</p>
                                        </div>

                                        <CatalogGrid
                                            catalogs={tenant.id.toLowerCase().includes('sandhya') ? catalogs.slice(0, 1) : catalogs}
                                            selectedCatalogId={selectedCatalogId}
                                            onSelectCatalog={(id) => {
                                                setSelectedCatalogId(id);
                                                if (tenant.id.toLowerCase().includes('sandhya')) {
                                                    setTimeout(() => {
                                                        const element = document.getElementById('catalog-products');
                                                        if (element) {
                                                            const yOffset = -100;
                                                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                                        }
                                                    }, 200);
                                                }
                                            }}
                                        />

                                        {baseProducts.length > 0 && (
                                            <div id="catalog-products" className="scroll-mt-24">
                                                <div className="mb-8 flex items-center justify-between">
                                                    <div>
                                                        <div className="inline-flex items-center gap-2 rounded-none border border-primary/20 bg-primary/5 px-3 py-1 mb-3">
                                                            <span className="text-[9px] font-bold uppercase tracking-wider text-primary">{baseProducts.length} items</span>
                                                        </div>
                                                        <h3 className="font-headline text-3xl font-bold text-[#1a1a1a]">{selectedCatalog?.name || `All Products in ${activeCategory?.name}`}</h3>
                                                        <p className="mt-1 text-sm text-muted-foreground">A denser premium grid replacing the old marketplace feel.</p>
                                                    </div>
                                                </div>
                                                <ProductGrid products={baseProducts} />
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
