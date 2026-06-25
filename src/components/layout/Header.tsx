"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, User, ShoppingCart, Search, ShoppingBag, History, Home, Settings, ClipboardList, X } from 'lucide-react';
import { cn, slugify } from '@/lib/utils';
import { useWishlist } from '@/hooks/use-wishlist';
import { useCart } from '@/hooks/use-cart';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CartSheet } from '@/components/cart/CartSheet';
import { WishlistSheet } from '@/components/wishlist/WishlistSheet';
import { HistorySheet } from '@/components/history/HistorySheet';
import { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useProduct } from '@/hooks/use-product';
import { ProfileSheet } from '@/components/profile/ProfileSheet';
import { useTenant } from '@/components/providers/TenantContext';
import { AddressSheet } from '@/components/address/AddressSheet';
import { useAuth } from '@/hooks/use-auth';
import { CompanyOrdersSheet } from '@/components/admin/CompanyOrdersSheet';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/wishlist', label: 'Wishlist', icon: Heart },
  { href: '/cart', label: 'Cart', icon: ShoppingCart },
  { href: '/admin/orders', label: 'Company Orders', icon: ClipboardList },
  { href: '/admin/inventory', label: 'Admin', icon: Settings },
];

const glassHeader = "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full border border-[#fcd34d]/20 bg-black/45 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.35)] transition-all duration-300";

const EMPTY_PRODUCTS: Product[] = [];

const Header = ({ companyName = "ManaBuy", fetchAllAtOnce = true }: { companyName?: string, fetchAllAtOnce?: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { wishlist } = useWishlist();
  const { cart, getCartItemsCount, companyDetails } = useCart();
  const cartItemCount = getCartItemsCount();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { products: allProducts, categories } = useProduct();
  const { text } = useTenant();

  /* Hydration fix: Ensure client-only values match server on first render */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use shared auth hook
  const { isLoggedIn, userRole, isOwner } = useAuth();

  // Safe cart count
  const displayCartCount = mounted ? cartItemCount : 0;

  // Find current active category based on URL pathname
  const activeCategory = useMemo(() => {
    if (!categories || categories.length === 0) return null;
    
    if (pathname.startsWith('/category/')) {
      const pathParts = pathname.split('/');
      const slugOrId = pathParts[pathParts.length - 1];
      const found = categories.find(cat => 
        cat.id === slugOrId || slugify(cat.name) === slugOrId
      );
      if (found) return found;
    }
    
    // Default to the first category (Sarees) if on homepage or elsewhere
    return categories[0];
  }, [pathname, categories]);

  // Extract products belonging to the active category
  const categoryProducts = useMemo(() => {
    if (!activeCategory) return EMPTY_PRODUCTS;
    return activeCategory.catalogs.flatMap(catalog => catalog.products);
  }, [activeCategory]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = categoryProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const slicedResults = results.slice(0, 5);
      setSearchResults(prev => {
        const isSame = prev.length === slicedResults.length && prev.every((p, idx) => p.id === slicedResults[idx]?.id);
        return isSame ? prev : slicedResults;
      });
      setShowDropdown(prev => prev ? prev : true);
    } else {
      setSearchResults(prev => prev.length === 0 ? prev : EMPTY_PRODUCTS);
      setShowDropdown(prev => !prev ? prev : false);
    }
  }, [searchQuery, categoryProducts]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    const handleScroll = () => {
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProductClick = (productId: string) => {
    setShowDropdown(false);
    setSearchQuery('');
    setShowMobileSearch(false);
    router.push(`/product/${productId}`);
  };

  // Slides generation dynamically based on coupons & free shipping limit
  const announcementSlides = useMemo(() => {
    const slides: string[] = [];
    
    // Add free delivery slide if threshold exists
    const threshold = companyDetails?.freeDeliveryCost ? parseFloat(companyDetails.freeDeliveryCost) : 0;
    if (threshold > 0) {
      slides.push(`Free Shipping: On all orders above ₹${threshold}*`);
    }
    
    // Add coupon slides
    if (companyDetails?.companyCoupon) {
      String(companyDetails.companyCoupon).split(',').forEach(c => {
        const [code, discountStr] = String(c).split('&&&');
        const discount = parseFloat(discountStr || '0');
        if (code && discount > 0) {
          slides.push(`Special Offer: Get ${discount}% OFF using code ${code}`);
        }
      });
    }
    
    // Fallback if empty
    if (slides.length === 0) {
      slides.push("Welcome to Tirumala Sarees - Handcrafted Silk Creations");
    }
    
    return slides;
  }, [companyDetails]);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-[#f2f2f2] shadow-sm transition-all duration-300">
      {/* Top Announcement Bar - Scrolling Marquee */}
      {mounted && announcementSlides.length > 0 && (
        <div className="bg-[#fdf9f2] border-b border-[#f5eedc] py-2 px-4 overflow-hidden relative select-none w-full">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-flex;
              animation: marquee 25s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="animate-marquee whitespace-nowrap gap-12 text-[10px] sm:text-xs tracking-wide flex">
            {(announcementSlides.length > 1 
              ? [...announcementSlides, ...announcementSlides] 
              : [...announcementSlides, ...announcementSlides, ...announcementSlides, ...announcementSlides]
            ).map((slide, index) => {
              const colonIndex = slide.indexOf(':');
              const label = colonIndex !== -1 ? slide.substring(0, colonIndex + 1) : '';
              const value = colonIndex !== -1 ? slide.substring(colonIndex + 1) : slide;
              return (
                <div key={index} className="inline-flex items-center gap-1.5 mx-8 shrink-0">
                  {label ? (
                    <span className="font-bold text-foreground">{label}</span>
                  ) : null}
                  <span className="text-[#c2410c] font-semibold">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Row */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Top Left - Account info */}
          <div className="w-auto flex items-center justify-start shrink-0">
            <ProfileSheet>
              <button className="text-[11px] md:text-xs uppercase tracking-widest text-[#1a1a1a] hover:text-primary transition-colors font-semibold flex items-center gap-1.5 whitespace-nowrap">
                <User className="h-4.5 w-4.5 stroke-[1.5]" />
                <span className="hidden sm:inline">My Account</span>
              </button>
            </ProfileSheet>
          </div>

          {/* Top Center - Logo & Name */}
          <div className="flex-1 flex items-center justify-center min-w-0 mx-2">
            <Link href="/" className="flex items-center gap-2 group max-w-full">
              {companyDetails?.logo ? (
                <div className="relative h-9 w-9 rounded-full overflow-hidden border border-black/5 bg-white shrink-0">
                  <Image
                    src={companyDetails.logo}
                    alt={companyName}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground font-headline text-lg font-bold shrink-0">
                  T
                </div>
              )}
              <span className="font-headline text-lg md:text-2xl font-bold tracking-wide uppercase text-primary truncate">
                {companyName}
              </span>
            </Link>
          </div>

          {/* Top Right - Search, Wishlist, Cart */}
          <div className="w-auto flex items-center justify-end shrink-0 gap-2.5 sm:gap-4">
            {/* Search Pill for Desktop */}
            {!(pathname === '/' && !fetchAllAtOnce) && !pathname.startsWith('/product/') && (
              <div className="relative hidden md:block max-w-[220px]" ref={searchRef}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#888]" />
                <Input
                  placeholder={activeCategory ? `Search in ${activeCategory.name}...` : (text.searchPlaceholder || "Search here...")}
                  className="h-8 pl-8 pr-4 rounded-full bg-[#f2f2f2] border-transparent text-[#1a1a1a] text-xs placeholder:text-[#888] focus:bg-[#eaeaea] focus:border-transparent transition-all outline-none w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                />

                {/* Search Dropdown */}
                {showDropdown && (
                  <div className="absolute top-full right-0 w-[280px] md:w-[320px] mt-2 bg-white border border-[#f2f2f2] rounded-md shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="py-2">
                      <div className="px-4 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Products
                      </div>
                      {searchResults.map(product => {
                        const fallbackImage = PlaceHolderImages.find(i => i.id === product.imageId) || { imageUrl: '' };
                        const displayImage = product.productImage || (product.images && product.images.length > 0 ? product.images[0] : '') || fallbackImage.imageUrl || '';

                        return (
                          <div
                            key={product.id}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f9f6f0] cursor-pointer transition-colors"
                            onClick={() => handleProductClick(product.id)}
                          >
                            <div className="h-9 w-9 rounded bg-[#f2f2f2] relative overflow-hidden shrink-0">
                              <img src={displayImage} alt={product.name} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-semibold text-[#1a1a1a] line-clamp-1">{product.name}</h4>
                              <p className="text-[11px] text-primary font-bold">₹{product.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Search Toggle Button */}
            {!(pathname === '/' && !fetchAllAtOnce) && !pathname.startsWith('/product/') && (
              <button 
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="p-1.5 text-[#1a1a1a] hover:text-primary transition-colors shrink-0 md:hidden"
              >
                <Search className="h-5 w-5 stroke-[1.8]" />
              </button>
            )}

            {/* Wishlist */}
            <WishlistSheet>
              <button className="relative p-1.5 text-[#1a1a1a] hover:text-primary transition-colors shrink-0">
                <Heart className="h-5 w-5 stroke-[1.8]" />
                {mounted && wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white leading-none">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </WishlistSheet>

            {/* Cart */}
            <CartSheet>
              <button className="relative p-1.5 text-[#1a1a1a] hover:text-primary transition-colors shrink-0">
                <ShoppingBag className="h-5 w-5 stroke-[1.8]" />
                {mounted && displayCartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white leading-none">
                    {displayCartCount}
                  </span>
                )}
              </button>
            </CartSheet>
          </div>
        </div>

        {/* Mobile Search Bar Row (renders below top row when active) */}
        {showMobileSearch && !(pathname === '/' && !fetchAllAtOnce) && !pathname.startsWith('/product/') && (
          <div className="pb-3 md:hidden animate-in slide-in-from-top-2 duration-300 relative" ref={searchRef}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#888]" />
              <Input
                placeholder={activeCategory ? `Search in ${activeCategory.name}...` : (text.searchPlaceholder || "Search here...")}
                className="h-9 pl-9 pr-8 rounded-full bg-[#f2f2f2] border-transparent text-[#1a1a1a] text-xs focus:bg-[#eaeaea] outline-none w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                autoFocus
              />
              {searchQuery && (
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#1a1a1a]"
                  onClick={() => { setSearchQuery(''); setShowDropdown(false); }}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Mobile Search Dropdown */}
            {showDropdown && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-[#f2f2f2] rounded-md shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="py-2">
                  <div className="px-4 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Products
                  </div>
                  {searchResults.map(product => {
                    const fallbackImage = PlaceHolderImages.find(i => i.id === product.imageId) || { imageUrl: '' };
                    const displayImage = product.productImage || (product.images && product.images.length > 0 ? product.images[0] : '') || fallbackImage.imageUrl || '';

                    return (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f9f6f0] cursor-pointer transition-colors"
                        onClick={() => handleProductClick(product.id)}
                      >
                        <div className="h-9 w-9 rounded bg-[#f2f2f2] relative overflow-hidden shrink-0">
                          <img src={displayImage} alt={product.name} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-semibold text-[#1a1a1a] line-clamp-1">{product.name}</h4>
                          <p className="text-[11px] text-primary font-bold">₹{product.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Row - Centered Navigation Menu */}
        <div className="border-t border-[#f2f2f2] h-11 flex items-center justify-center overflow-x-auto md:overflow-visible no-scrollbar">
          <nav className="flex items-center gap-6 md:gap-9 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a] whitespace-nowrap overflow-visible">
            <Link href="/" className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent", pathname === '/' && "text-primary border-primary")}>
              Home
            </Link>
            {mounted && categories.length > 0 ? (
              categories.map(category => {
                const catSlug = slugify(category.name);
                const isActive = pathname === `/category/${category.id}` || pathname === `/category/${catSlug}`;
                return (
                  <div key={category.id} className="relative group/nav py-2.5 overflow-visible">
                    <Link
                      href={`/category/${catSlug}`}
                      className={cn("hover:text-primary transition-colors border-b-2 border-transparent pb-2.5", isActive && "text-primary border-primary")}
                    >
                      {category.name}
                    </Link>
                    {category.catalogs && category.catalogs.length > 0 && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover/nav:flex flex-col bg-white border border-[#f2f2f2] shadow-2xl rounded-2xl py-3 px-4 min-w-[200px] animate-in fade-in slide-in-from-top-2 duration-300 pointer-events-auto"
                        style={{ zIndex: 60 }}
                      >
                        <style>{`
                          .custom-hover-scrollbar::-webkit-scrollbar {
                            width: 4px;
                          }
                          .custom-hover-scrollbar::-webkit-scrollbar-track {
                            background: transparent;
                          }
                          .custom-hover-scrollbar::-webkit-scrollbar-thumb {
                            background-color: #e5e5e5;
                            border-radius: 4px;
                          }
                          .custom-hover-scrollbar::-webkit-scrollbar-thumb:hover {
                            background-color: #c2410c;
                          }
                        `}</style>
                        <div className="flex flex-col gap-1.5 max-h-[160px] overflow-y-auto pr-1.5 custom-hover-scrollbar">
                          {category.catalogs.map(catalog => {
                            const catalogSlug = slugify(catalog.name);
                            return (
                              <Link
                                key={catalog.id}
                                href={`/category/${catSlug}?catalogue=${catalogSlug}`}
                                className="text-left text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a] hover:text-primary hover:translate-x-1 transition-all py-1"
                              >
                                {catalog.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <Link href="/category/sarees" className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent", pathname === '/category/sarees' && "text-primary border-primary")}>
                Sarees
              </Link>
            )}
            {isLoggedIn && isOwner && (
              <>
                <Link href="/admin/orders" className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent", pathname === '/admin/orders' && "text-primary border-primary")}>
                  Orders
                </Link>
                <Link href="/admin/inventory" className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent", pathname === '/admin/inventory' && "text-primary border-primary")}>
                  Admin
                </Link>
              </>
            )}
            {isLoggedIn && userRole?.includes('CUSTOMER') && (
              <HistorySheet>
                <button className="hover:text-primary transition-colors py-2.5 border-b-2 border-transparent uppercase font-semibold">
                  History
                </button>
              </HistorySheet>
            )}
          </nav>
        </div>
      </div>
      <AddressSheet />
    </header>
  );
};

export default Header;
