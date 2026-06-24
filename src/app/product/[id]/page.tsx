'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ProductWithImage, ProductVariant, Category } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, Heart, Minus, Plus, ArrowLeft, Loader2, Search, Check, Package, Truck, Shield, Share2 } from 'lucide-react';
import { useWishlist } from '@/hooks/use-wishlist';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { cn, resolveImageUrl, slugify } from '@/lib/utils';
import Recommendations from '@/components/products/Recommendations';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useProduct } from '@/hooks/use-product';
import { useTenant } from '@/components/providers/TenantContext';
import { categories as mockCategories } from '@/data/products';
import { fetchCategories } from '@/services/product.service';

const VariantSelector = ({
  variant,
  selectedOption,
  onOptionChange,
}: {
  variant: ProductVariant;
  selectedOption: string;
  onOptionChange: (option: string) => void;
}) => (
  <div>
    <h3 className="text-sm font-medium text-foreground">{variant.name}</h3>
    <div className="flex flex-wrap gap-2 mt-2">
      {variant.options.map((option) => (
        <Button
          key={option}
          variant={selectedOption === option ? 'default' : 'outline'}
          onClick={() => onOptionChange(option)}
          className={cn(
            'rounded-full',
            selectedOption === option
              ? 'bg-navy-800 text-white hover:bg-navy-700'
              : 'bg-background text-foreground border-border/50'
          )}
        >
          {option}
        </Button>
      ))}
    </div>
  </div>
);

const ColourCard = ({
  name,
  image,
  isSelected,
  active = true,
  statusLabel,
  onClick,
}: {
  name: string;
  image?: string;
  isSelected: boolean;
  active?: boolean;
  statusLabel?: string;
  onClick: () => void;
}) => (
  <div
    onClick={active ? onClick : undefined}
    className={cn(
      "relative flex flex-col items-center justify-start p-2 rounded-2xl border transition-all duration-300 h-auto min-h-[90px]",
      active ? "cursor-pointer hover:border-accent/30 hover:bg-accent/5 card-3d" : "cursor-not-allowed bg-muted/20 border-border grayscale-[0.8]",
      isSelected && active
        ? "border-accent bg-accent/[0.03] shadow-lg shadow-accent/10 scale-[1.03]"
        : !active ? "border-transparent opacity-60" : "border-transparent bg-secondary/20 text-muted-foreground/80"
    )}
  >
    {!active && (
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 rounded-2xl overflow-hidden">
        <div className="relative overflow-hidden px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm rotate-[-4deg]">
          <span className="relative z-10 text-[8px] font-black uppercase tracking-wider text-rose-500 drop-shadow-sm">
            {statusLabel || "Sold Out"}
          </span>
        </div>
      </div>
    )}
    {isSelected && active && (
      <div className="absolute -top-2 -right-2 bg-accent text-navy-900 rounded-full p-1 shadow-lg z-10">
        <Check className="w-3 h-3" strokeWidth={3} />
      </div>
    )}
    <div className="relative w-11 h-11 mb-1.5 rounded-full overflow-hidden border-2 border-border/30 shadow-sm">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-secondary/50 flex items-center justify-center text-[9px] font-bold text-muted-foreground/40">
          {name.charAt(0)}
        </div>
      )}
    </div>
    <span className={cn(
      "text-[10px] leading-tight font-bold tracking-tight break-words whitespace-normal text-center px-1 mt-1",
      isSelected ? "text-accent" : "text-foreground",
      !active && "line-through decoration-destructive/30 decoration-1"
    )}>
      {name}
    </span>
  </div>
);



export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { addToCart, setCartOpen, companyDetails } = useCart();
  const { toast } = useToast();
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();
  const tenant = useTenant();

  const [product, setProduct] = useState<ProductWithImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [categoryId, setCategoryId] = useState<string | undefined>(undefined);

  const [selectedPricingId, setSelectedPricingId] = useState<string | null>(null);
  const [selectedSizeColourId, setSelectedSizeColourId] = useState<string | null>(null);
  const [selectedColourId, setSelectedColourId] = useState<string>("");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  // Image Magnifier & Gallery Zoom States
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const [lensStyle, setLensStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);
  const [customStitching, setCustomStitching] = useState(false);

  const mainImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProduct() {
      if (!id) return;

      setLoading(true);
      let foundProduct: ProductWithImage | undefined;

      const globalProducts = useProduct.getState().products;
      const selectedProduct = useProduct.getState().selectedProduct;

      let storeProduct: ProductWithImage | undefined;

      if (selectedProduct && String(selectedProduct.id) === String(id)) {
        const image = PlaceHolderImages.find(img => img.id === selectedProduct.imageId)
          || PlaceHolderImages.find(img => img.id === 'product-1');

        storeProduct = {
          ...selectedProduct,
          imageUrl: selectedProduct.imageUrl || image?.imageUrl || '',
          imageHint: (selectedProduct as any).imageHint || image?.imageHint || 'product image'
        };
      } else {
        storeProduct = globalProducts.find(p => String(p.id) === String(id)) as ProductWithImage | undefined;
      }

      if (storeProduct) {
        const image = PlaceHolderImages.find(img => img.id === storeProduct.imageId)
          || PlaceHolderImages.find(img => img.id === 'product-1');

        foundProduct = {
          ...storeProduct,
          imageUrl: storeProduct.imageUrl || image?.imageUrl || '',
          imageHint: storeProduct.imageHint || image?.imageHint || 'product image',
        };
      }

      if (!foundProduct && companyDetails?.companyId) {
        try {
          const fetchedCategories = await fetchCategories(companyDetails.companyId, companyDetails.deliveryBetween);
          const allApiProducts = fetchedCategories.flatMap(c => c.catalogs.flatMap(ca => ca.products));
          const apiProduct = allApiProducts.find(p => String(p.id) === String(id));

          if (apiProduct) {
            const image = PlaceHolderImages.find(img => img.id === apiProduct.imageId)
              || PlaceHolderImages.find(img => img.id === 'product-1');

            foundProduct = {
              ...apiProduct,
              id: String(apiProduct.id),
              imageUrl: apiProduct.imageUrl || image?.imageUrl || '',
              imageHint: image?.imageHint || 'product image',
            };
          }
        } catch (error) {
          console.error("Failed to fetch product from API", error);
        }
      }

      if (!foundProduct) {
        const allMockProducts = mockCategories.flatMap(c => c.catalogs.flatMap(ca => ca.products));
        const mockData = allMockProducts.find(p => String(p.id) === String(id));

        if (mockData) {
          const image = PlaceHolderImages.find(img => img.id === mockData.imageId);
          foundProduct = {
            ...mockData,
            imageUrl: image?.imageUrl || '',
            imageHint: image?.imageHint || 'product image',
          };
        }
      }

      let foundCategoryId: string | undefined;
      if (foundProduct) {
        // search mockCategories
        const mockCat = mockCategories.find(c =>
          c.catalogs.some(ca =>
            ca.products.some(p => String(p.id) === String(foundProduct!.id))
          )
        );
        if (mockCat) {
          foundCategoryId = mockCat.id;
        }

        // search API categories if present
        if (!foundCategoryId && companyDetails?.companyId) {
          try {
            const fetchedCategories = await fetchCategories(companyDetails.companyId, companyDetails.deliveryBetween);
            const apiCat = fetchedCategories.find(c =>
              c.catalogs.some(ca =>
                ca.products.some(p => String(p.id) === String(foundProduct!.id))
              )
            );
            if (apiCat) {
              foundCategoryId = String(apiCat.id);
            }
          } catch (e) {
            console.error("Error looking up API category", e);
          }
        }
      }

      if (isMounted) {
        setProduct(foundProduct || null);
        setCategoryId(foundCategoryId);

        if (foundProduct && foundProduct.pricing && foundProduct.pricing.length > 0) {
          const firstPricing = foundProduct.pricing.find(p => p.sizeStatus !== 'OUTOFSTOCK' && p.sizeStatus !== 'INACTIVE') || foundProduct.pricing[0];
          setSelectedPricingId(firstPricing.id);

          if (firstPricing.sizeColours && firstPricing.sizeColours.length > 0) {
            const firstActiveColour = firstPricing.sizeColours.find(sc => sc.sizeColourStatus !== 'OUTOFSTOCK' && sc.sizeColourStatus !== 'INACTIVE') || firstPricing.sizeColours[0];
            setSelectedSizeColourId(firstActiveColour.id);
          }
        }

        if (foundProduct && foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColourId(foundProduct.colors[0].id);
        }

        if (foundProduct?.variants) {
          const initialState: Record<string, string> = {};
          foundProduct.variants.forEach((variant) => {
            initialState[variant.name] = variant.options[0];
          });
          setSelectedVariants(initialState);
        }

        setLoading(false);
      }
    }

    loadProduct();

    return () => { isMounted = false; };
  }, [id, companyDetails]);

  const currentPricingOption = product?.pricing?.find(p => p.id === selectedPricingId) || (product?.pricing?.[0]);
  const availableSizeColours = currentPricingOption?.sizeColours || [];

  // Generate complete images list dynamically for gallery selection
  const productImages = useMemo(() => {
    if (!product) return [''];
    const imagesList: string[] = [];
    const isDummyImage = (src: string) => {
      if (!src) return true;
      return src.includes('images.unsplash.com') && src.includes('w=800&q=80');
    };

    if (selectedSizeColourId) {
      const sc = availableSizeColours.find(sc => sc.id === selectedSizeColourId);
      if (sc && sc.productPics && sc.productPics.trim() !== "") imagesList.push(sc.productPics);
    }

    if (product.colors && product.colors.length > 0) {
      const selected = product.colors.find(c => c.id === selectedColourId);
      if (selected && selected.image && selected.image.trim() !== "" && !imagesList.includes(selected.image)) {
        imagesList.push(selected.image);
      }
    }

    const hasVariantImages = imagesList.length > 0;

    if (product.images && product.images.length > 0) {
      product.images.forEach(img => {
        if (img && !imagesList.includes(img)) {
          if (!hasVariantImages || !isDummyImage(img)) {
            imagesList.push(img);
          }
        }
      });
    } else if (product.productImage && !imagesList.includes(product.productImage)) {
      if (!hasVariantImages || !isDummyImage(product.productImage)) {
        imagesList.push(product.productImage);
      }
    } else if (product.imageUrl && !imagesList.includes(product.imageUrl)) {
      if (!hasVariantImages) {
        imagesList.push(product.imageUrl);
      }
    }

    if (imagesList.length === 0) {
      imagesList.push(product.imageUrl || '');
    }

    return imagesList;
  }, [product, selectedSizeColourId, selectedColourId, availableSizeColours]);

  // Keep active index in range of variant image list updates
  useEffect(() => {
    if (activeImageIdx >= productImages.length) {
      setActiveImageIdx(0);
    }
  }, [productImages, activeImageIdx]);

  if (loading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Loader2 className="h-10 w-10 animate-spin text-accent" />
            <div className="absolute inset-0 h-10 w-10 rounded-full bg-accent/10 blur-xl animate-pulse" />
          </div>
          <p className="text-muted-foreground text-sm font-medium">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="relative min-h-screen py-12 md:py-24">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-[100px]" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto mb-24">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-2 animate-in zoom-in duration-500 liquid-glass">
              <div className="relative">
                <Search size={40} className="text-accent" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
                Product Not Found
              </h1>
              <p className="text-muted-foreground text-lg font-light">
                We couldn&apos;t locate the product you&apos;re looking for.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Button onClick={() => router.push('/')} size="lg" className="rounded-full px-8 gap-2 bg-accent text-navy-900 hover:bg-accent/90">
                <ArrowLeft size={16} /> Back to Home
              </Button>
              <Button variant="outline" size="lg" onClick={() => router.back()} className="rounded-full px-8 border-border/50">
                Go Back
              </Button>
            </div>
          </div>

          <Separator className="mb-12" />

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-headline font-bold mb-2">Explore Popular Items</h2>
              <p className="text-muted-foreground font-light">You might find something else you love</p>
            </div>
            <Recommendations />
          </div>
        </div>
      </div>
    );
  }

  const basePrice = currentPricingOption ? currentPricingOption.price : product.price;
  const sizeColoursPrice = availableSizeColours
    .filter(sc => sc.id === selectedSizeColourId)
    .reduce((sum, sc) => sum + sc.price, 0);

  let effectiveBasePrice = basePrice;
  let originalPrice = basePrice;
  let offerPercentage = 0;

  const offerPercent = product.productOffer ? parseFloat(product.productOffer.toString().replace(/[^0-9.]/g, '')) : 0;

  if (offerPercent > 0 && basePrice === product.price) {
    const discountAmount = (basePrice * offerPercent) / 100;
    effectiveBasePrice = Math.round(basePrice - discountAmount);
    offerPercentage = offerPercent;
  }
  else if (currentPricingOption && currentPricingOption.priceAfterDiscount && currentPricingOption.priceAfterDiscount > 0) {
    effectiveBasePrice = currentPricingOption.priceAfterDiscount;
    originalPrice = currentPricingOption.price;
    offerPercentage = Math.round(((originalPrice - effectiveBasePrice) / originalPrice) * 100);
  }
  else if (basePrice === product.price && product.priceAfterDiscount && product.priceAfterDiscount > 0) {
    effectiveBasePrice = product.priceAfterDiscount;
    originalPrice = product.price;
    offerPercentage = Math.round(((originalPrice - effectiveBasePrice) / originalPrice) * 100);
  }

  // Adjust total price based on optional custom stitching option
  const finalPrice = effectiveBasePrice + sizeColoursPrice + (customStitching ? 1500 : 0);
  const hasDiscount = effectiveBasePrice < originalPrice;

  const handleAddToCart = () => {
    const variantInfo = { ...selectedVariants };
    if (currentPricingOption) {
      variantInfo['Quantity'] = currentPricingOption.quantity;
    }
    if (customStitching) {
      variantInfo['Stitching'] = 'Custom Blouse Stitching (+₹1,500)';
    }

    const sizeColourObjects = availableSizeColours.filter(sc => sc.id === selectedSizeColourId);

    const selectedColour = product.colors?.find(c => c.id === selectedColourId);
    const colourToAdd = selectedColour ? {
      id: selectedColour.id,
      name: selectedColour.name,
      image: selectedColour.image || ''
    } : undefined;

    const isOutOfStock = product.productStatus === 'OUTOFSTOCK' ||
      (currentPricingOption?.sizeStatus === 'OUTOFSTOCK') ||
      (sizeColourObjects.some(sc => sc.sizeColourStatus === 'OUTOFSTOCK')) ||
      (selectedColour?.colourStatus === 'OUTOFSTOCK');

    if (isOutOfStock) {
      toast({
        title: "Out of Stock",
        description: "One of the selected options is currently unavailable.",
        variant: "destructive",
      });
      return;
    }

    addToCart(
      { ...product, price: finalPrice, productSizeId: selectedPricingId || undefined },
      variantInfo,
      sizeColourObjects,
      colourToAdd
    );
    setCartOpen(true);
  };

  const isWishlisted = isInWishlist(product.id);

  // Mouse move handler for the lens magnifier box
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    const elem = mainImageRef.current;
    const { top, left, width, height } = elem.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    // Lens parameters
    const lensW = 140;
    const lensH = 175;

    // Constrain magnifier box to main image boundaries
    let lx = x - lensW / 2;
    let ly = y - lensH / 2;

    if (lx < 0) lx = 0;
    if (ly < 0) ly = 0;
    if (lx > width - lensW) lx = width - lensW;
    if (ly > height - lensH) ly = height - lensH;

    const px = (lx / (width - lensW)) * 100;
    const py = (ly / (height - lensH)) * 100;

    setLensStyle({
      left: `${lx}px`,
      top: `${ly}px`,
      width: `${lensW}px`,
      height: `${lensH}px`,
    });

    const scale = width / lensW;
    const rx = 400 / width;
    const ry = 500 / height;
    setZoomStyle({
      transform: `scale(${scale}) translate(${-lx * rx}px, ${-ly * ry}px)`,
      transformOrigin: '0 0',
    });
  };

  return (
    <div className="relative min-h-screen py-8">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-800/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="text-muted-foreground group hover:text-[#c2410c] rounded-none">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>
        </div>

        {/* 3-Column Split Layout on Desktop: Thumbnails Gallery | Main Active Image | Product Details & Zoom Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1.1fr] gap-6 lg:gap-10 items-start">
          
          {/* Column 1: Vertical thumbnails list */}
          <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar order-2 lg:order-1 lg:max-h-[520px]">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImageIdx(idx)}
                onClick={() => setActiveImageIdx(idx)}
                className={cn(
                  "relative h-16 w-12 lg:h-20 lg:w-16 border rounded-none overflow-hidden shrink-0 transition-all duration-300 bg-white",
                  activeImageIdx === idx ? "border-[#c2410c] ring-1 ring-[#c2410c]" : "border-border/60 hover:border-primary/50"
                )}
              >
                <img src={img} alt={`${product.name} - ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Column 2: Main showcase active image with hover lens overlay */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={mainImageRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
              className="relative aspect-[4/5] w-full rounded-none overflow-hidden bg-[#f9f6f0] border border-border/30 cursor-crosshair select-none"
            >
              <img
                src={productImages[activeImageIdx]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Magnifier lens box overlay */}
              {isHovered && (
                <div
                  className="absolute border border-black/25 bg-black/15 shadow-sm pointer-events-none"
                  style={lensStyle}
                />
              )}

              {(product.productStatus === 'OUTOFSTOCK' || product.productStatus === 'INACTIVE') && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 backdrop-blur-[2px]">
                  <div className="relative overflow-hidden px-8 py-3 rounded-none bg-white/10 backdrop-blur-md border border-white/20 shadow-md rotate-[-5deg]">
                    <span className={cn(
                      "relative z-10 text-xl font-black uppercase tracking-[0.2em] drop-shadow-sm",
                      product.productStatus === 'OUTOFSTOCK' ? "text-rose-500" : "text-slate-400"
                    )}>
                      {product.productStatus === 'OUTOFSTOCK' ? "Sold Out" : "Unavailable"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Share / Wishlist floating buttons */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-md border-border/50 hover:bg-background shadow-lg"
                onClick={() => toggleWishlist(product)}
              >
                <Heart className={cn("h-4 w-4", isWishlisted ? "fill-red-500 text-red-500" : "")} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-md border-border/50 hover:bg-background shadow-lg"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast({ description: "Product link copied to clipboard!" });
                }}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Column 3: Product Details & Dynamic Zoom View Panel overlay */}
          <div className="order-3 lg:order-3 relative min-h-[520px]">
            {/* Zoom Display Window - Overlays details area when hovered */}
            {isHovered && (
              <div className="absolute top-0 left-0 w-[400px] h-[500px] bg-white border border-border/40 shadow-2xl z-30 overflow-hidden hidden lg:block">
                <img
                  src={productImages[activeImageIdx]}
                  alt={product.name}
                  className="w-full h-full object-cover animate-in fade-in duration-200"
                  style={zoomStyle}
                />
              </div>
            )}

            {/* Normal Details Container */}
            <div className="flex flex-col gap-5 text-[#1a1a1a]">
              {/* Brand Header */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 rounded-none border border-primary/20 bg-primary/5 px-3 py-1 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                    {companyDetails?.companyName || 'Tirumala Sarees'}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-headline font-bold text-foreground tracking-wide leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Pricing Details */}
              <div className="flex items-baseline gap-3">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-[#c2410c] tracking-tight">
                  ₹{(finalPrice).toFixed(2)}
                </h2>
                {hasDiscount && (
                  <span className="text-sm text-muted-foreground/60 line-through decoration-destructive/30 decoration-1">
                    ₹{(originalPrice + sizeColoursPrice + (customStitching ? 1500 : 0)).toFixed(2)}
                  </span>
                )}
                {hasDiscount && (
                  <span className="text-[10px] font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-none shadow-sm ml-2">
                    {offerPercentage}% OFF
                  </span>
                )}
              </div>

              <p className="text-[10px] font-semibold text-muted-foreground/60 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c2410c]" />
                Taxes included. {companyDetails?.freeDeliveryCost && `Free shipping on orders above ₹${companyDetails.freeDeliveryCost}`}
              </p>



              {/* Description */}
              <p className="text-xs text-[#555] font-light leading-relaxed">{product.description}</p>

              <Separator className="bg-border/20 my-2" />

              {/* Pricing Sizes Options */}
              {product.pricing && product.pricing.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">Select Option</label>
                    <span className="text-[8px] font-bold text-[#c2410c] bg-[#c2410c]/5 px-2 py-0.5 rounded-none border border-[#c2410c]/10">REQUIRED</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {(() => {
                      const prices = product.pricing.map(p => p.price);
                      const allPricesSame = prices.every(p => p === prices[0]);

                      return product.pricing.map((option) => {
                        const isActive = option.sizeStatus !== 'INACTIVE' && option.sizeStatus !== 'OUTOFSTOCK';
                        const isSelected = selectedPricingId === option.id;

                        return (
                          <button
                            key={option.id}
                            onClick={() => {
                              if (!isActive) return;
                              setSelectedPricingId(option.id);
                              if (option.sizeColours && option.sizeColours.length > 0) {
                                const firstActiveColour = option.sizeColours.find(sc => sc.sizeColourStatus !== 'OUTOFSTOCK' && sc.sizeColourStatus !== 'INACTIVE') || option.sizeColours[0];
                                setSelectedSizeColourId(firstActiveColour.id);
                              } else {
                                setSelectedSizeColourId(null);
                              }
                            }}
                            className={cn(
                              "relative flex flex-col items-center justify-center p-2 rounded-none border transition-all duration-300 h-12 text-xs",
                              isSelected && isActive
                                ? "border-primary bg-primary/5 font-semibold"
                                : isActive
                                  ? "border-border/60 bg-white hover:border-primary/50"
                                  : "cursor-not-allowed bg-muted/10 border-border/20 opacity-40"
                            )}
                          >
                            {!isActive && (
                              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 rounded-none overflow-hidden">
                                <span className="text-[8px] font-black uppercase text-rose-500">
                                  Sold Out
                                </span>
                              </div>
                            )}
                            <span>
                              {option.quantity}
                              {option.price > 0 && !allPricesSame && isActive && <span className="ml-1 text-[10px] text-[#c2410c] font-bold">+₹{option.price}</span>}
                            </span>
                          </button>
                        );
                      });
                    })()}
                  </div>
                </div>
              )}

              {/* Colors Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between pb-1">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">Select Color</label>
                    <span className="text-[8px] font-bold text-[#c2410c] bg-[#c2410c]/5 px-2 py-0.5 rounded-none border border-[#c2410c]/10">REQUIRED</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {product.colors.map((colour) => {
                      const isActive = colour.colourStatus !== 'INACTIVE' && colour.colourStatus !== 'OUTOFSTOCK';
                      const isSelected = selectedColourId === colour.id;

                      return (
                        <button
                          key={colour.id}
                          onClick={() => isActive && setSelectedColourId(colour.id)}
                          className={cn(
                            "relative flex flex-col items-center justify-center p-2 rounded-none border transition-all duration-300 h-16 text-center bg-white",
                            isSelected && isActive
                              ? "border-primary bg-primary/5 font-semibold"
                              : isActive
                                ? "border-border/30 bg-white hover:border-primary/50"
                                : "cursor-not-allowed bg-muted/10 border-border/20 opacity-40"
                          )}
                        >
                          {!isActive && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 rounded-none overflow-hidden">
                              <span className="text-[8px] font-black uppercase text-rose-500">Sold Out</span>
                            </div>
                          )}
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-border/30 bg-[#f9f6f0]">
                            {colour.image ? (
                              <img src={colour.image} alt={colour.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-[9px] text-muted-foreground">{colour.name.charAt(0)}</div>
                            )}
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-tight text-foreground truncate w-full mt-1.5 px-0.5">{colour.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Styles / SizeColours Selection */}
              {availableSizeColours.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between pb-1">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">Select Style</label>
                    <span className="text-[8px] font-bold text-[#c2410c] bg-[#c2410c]/5 px-2 py-0.5 rounded-none border border-[#c2410c]/10">REQUIRED</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {availableSizeColours.map(sc => {
                      const isSelected = selectedSizeColourId === sc.id;
                      const isActive = sc.sizeColourStatus !== 'INACTIVE' && sc.sizeColourStatus !== 'OUTOFSTOCK';

                      return (
                        <button
                          key={sc.id}
                          onClick={() => isActive && setSelectedSizeColourId(sc.id)}
                          className={cn(
                            "relative flex flex-col items-center justify-center p-2 border rounded-none transition-all duration-300 h-20 text-center bg-white",
                            isSelected && isActive
                              ? "border-primary bg-primary/5 font-semibold"
                              : isActive
                                ? "border-border/30 bg-white hover:border-primary/50"
                                : "cursor-not-allowed bg-muted/10 border-border/20 opacity-40"
                          )}
                        >
                          {!isActive && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 rounded-none overflow-hidden">
                              <span className="text-[8px] font-black uppercase text-rose-500">Sold Out</span>
                            </div>
                          )}
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-border/30 bg-white">
                            {sc.productPics ? (
                              <img src={sc.productPics} alt={sc.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-[9px] text-muted-foreground">{sc.name.charAt(0)}</div>
                            )}
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-tight text-foreground truncate w-full mt-1.5 px-0.5">{sc.name}</span>
                          {isActive && (
                            <span className="text-[8px] font-bold uppercase text-muted-foreground mt-0.5">
                              {sc.price > 0 ? `+₹${sc.price}` : "Standard"}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Blouse Stitching selection card */}
              <div className="space-y-3 pt-3 border-t border-border/10">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">Blouse Stitching Service</label>
                  <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-none border border-emerald-100 uppercase">OPTIONAL</span>
                </div>
                <button
                  onClick={() => setCustomStitching(!customStitching)}
                  className={cn(
                    "w-full flex items-center justify-between p-3.5 border transition-all duration-300 rounded-none text-left cursor-pointer",
                    customStitching
                      ? "border-[#c2410c] bg-[#c2410c]/5 shadow-sm"
                      : "border-border/40 bg-white hover:border-[#c2410c]/30"
                  )}
                >
                  <div className="pr-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1a1a1a]">Custom Blouse Stitching</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">Tailored to your body measurements by our expert master weavers</p>
                  </div>
                  <div className="text-right flex items-center gap-2.5 shrink-0">
                    <span className="text-xs font-bold text-[#c2410c]">+ ₹1,500</span>
                    <div className={cn(
                      "w-4 h-4 border flex items-center justify-center rounded-none transition-all duration-300",
                      customStitching ? "bg-[#c2410c] border-[#c2410c] text-white" : "border-border/60 bg-white"
                    )}>
                      {customStitching && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                </button>
              </div>

              <Separator className="bg-border/20 my-2" />

              {/* Quantity Counter & Checkout CTAs */}
              <div className="space-y-4 pt-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">Estimated Total</span>
                  <h2 className="text-2xl font-headline font-bold text-[#c2410c] tracking-tight">₹{(finalPrice * quantity).toFixed(2)}</h2>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-border/60 h-12 bg-white select-none">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-3.5 h-full hover:bg-[#f9f6f0] text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center justify-center border-r border-border/20"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-10 text-center font-bold text-xs text-[#1a1a1a]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-3.5 h-full hover:bg-[#f9f6f0] text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center justify-center border-l border-border/20"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  {(() => {
                    const selectedSizeColour = currentPricingOption?.sizeColours?.find(sc => sc.id === selectedSizeColourId);
                    const selectedColour = product.colors?.find(c => c.id === selectedColourId);
                    const isOutOfStock = product.productStatus === 'OUTOFSTOCK' ||
                      (currentPricingOption?.sizeStatus === 'OUTOFSTOCK') ||
                      (selectedSizeColour?.sizeColourStatus === 'OUTOFSTOCK') ||
                      (selectedColour?.colourStatus === 'OUTOFSTOCK') ||
                      (selectedColour?.colourStatus === 'INACTIVE');

                    return (
                      <Button
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        size="lg"
                        className={cn(
                          "flex-1 h-12 text-xs font-bold uppercase tracking-widest rounded-none shadow-sm transition-all duration-300",
                          isOutOfStock
                            ? "bg-muted text-muted-foreground cursor-not-allowed shadow-none"
                            : "bg-primary text-white hover:bg-primary/95 shadow-md"
                        )}
                      >
                        {isOutOfStock ? "Out of Stock" : (
                          <>
                            Add to Cart
                            <Package className="ml-2 w-3.5 h-3.5" />
                          </>
                        )}
                      </Button>
                    );
                  })()}
                </div>

                {/* Whatsapp Ordering button */}
                {companyDetails?.companyPhone && (
                  <a
                    href={`https://wa.me/${companyDetails.companyPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I want to order this product: ${product.name} (Price: ₹${finalPrice}). Link: ${window.location.href}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 bg-[#075e54] hover:bg-[#128c7e] text-white flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-20.372c-.224-.498-.46-.508-.673-.517-.215-.008-.46-.008-.705-.008-.246 0-.646.092-.983.46-.338.368-1.288 1.258-1.288 3.064 0 1.806 1.312 3.55 1.496 3.801.184.25 2.529 4.093 6.242 5.545.922.36 1.64.577 2.196.755.93.295 1.778.252 2.447.153.746-.109 2.29-.937 2.612-1.84.321-.904.321-1.68.225-1.84-.096-.16-.353-.25-.705-.43s-2.083-1.028-2.404-1.144c-.321-.117-.554-.175-.787.175-.233.35-.902 1.144-1.107 1.378-.205.234-.41.263-.762.088-.352-.175-1.488-.548-2.83-1.748-1.042-.93-1.746-2.078-1.951-2.43-.205-.353-.022-.544.154-.72.158-.158.352-.41.529-.615.176-.205.234-.35.352-.584.117-.234.059-.438-.03-.614-.088-.175-.673-1.68-.934-2.28z"/>
                    </svg>
                    Order on WhatsApp
                  </a>
                )}
              </div>

              {/* Specifications table */}
              <div className="pt-4 border-t border-border/10 space-y-3">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">Specifications</label>
                <div className="border border-border/40 overflow-hidden bg-white text-xs">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {[
                        { label: 'Color', value: selectedColourId ? (product.colors?.find(c => c.id === selectedColourId)?.name || 'Mustard Yellow') : 'Mustard Yellow' },
                        { label: 'Saree Fabric', value: product.name.includes('Organza') ? 'Pure Organza Silk' : (product.name.includes('Banarasi') ? 'Pure Banarasi Silk' : 'Kanchipuram Silk') },
                        { label: 'Zari Work Type', value: 'Fine Gold Zari Embroidered Borders' },
                        { label: 'Blouse Type', value: 'Unstitched Blouse Material Included' },
                        { label: 'Blouse Length', value: '80 Centimeters (0.8 Meters)' },
                        { label: 'Saree Length', value: '5.5 Meters' },
                        { label: 'Occasion', value: 'Bridal, Wedding, Festive Wear' },
                        { label: 'Care Instructions', value: 'Dry Clean Only' },
                      ].map((spec, idx) => (
                        <tr key={idx} className="border-b border-border/20 last:border-b-0 hover:bg-[#f9f6f0]/50 transition-colors">
                          <td className="py-2.5 px-4 font-bold text-muted-foreground uppercase tracking-wider text-[9px] w-1/3 bg-[#fdf9f2]/40 border-r border-border/20">{spec.label}</td>
                          <td className="py-2.5 px-4 text-[#1a1a1a] font-medium">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, label: 'Free Delivery', desc: 'On orders above ₹499' },
            { icon: Shield, label: 'Secure Payment', desc: '100% secure checkout' },
            { icon: Package, label: 'Easy Returns', desc: '7-day return policy' },
            { icon: Star, label: 'Premium Quality', desc: 'Authentic products' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 rounded-none border border-border/30 bg-card/50 backdrop-blur-sm hover:border-[#c2410c]/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-none bg-[#c2410c]/5 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-[#c2410c]" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">You May Also Like</h2>
          <p className="text-muted-foreground font-light mb-8">Discover similar products</p>
          <Recommendations categoryId={categoryId} currentProductId={product.id} />
        </div>
      </div>
    </div>
  );
}

