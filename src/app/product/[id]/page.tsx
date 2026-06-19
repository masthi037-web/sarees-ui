'use client';

import { useState, useEffect } from 'react';
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
import { cn } from '@/lib/utils';
import { ProductImageCarousel } from '@/components/products/ProductImageCarousel';
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

const getReviewStats = (reviews: any[]) => {
  if (!reviews || reviews.length === 0) return { average: 0, count: 0, distribution: [] };
  const count = reviews.length;
  const average = reviews.reduce((acc, r) => acc + r.rating, 0) / count;
  const distribution = [5, 4, 3, 2, 1].map(star => ({
    star,
    percentage: (reviews.filter(r => Math.floor(r.rating) === star).length / count) * 100
  }));
  return { average, count, distribution };
};

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

  const [selectedPricingId, setSelectedPricingId] = useState<string | null>(null);
  const [selectedSizeColourId, setSelectedSizeColourId] = useState<string | null>(null);
  const [selectedColourId, setSelectedColourId] = useState<string>("");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

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

      if (isMounted) {
        setProduct(foundProduct || null);

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

  const currentPricingOption = product.pricing?.find(p => p.id === selectedPricingId) || (product.pricing?.[0]);
  const availableSizeColours = currentPricingOption?.sizeColours || [];

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

  const finalPrice = effectiveBasePrice + sizeColoursPrice;
  const hasDiscount = effectiveBasePrice < originalPrice;

  const handleAddToCart = () => {
    const variantInfo = { ...selectedVariants };
    if (currentPricingOption) {
      variantInfo['Quantity'] = currentPricingOption.quantity;
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
      { ...product, price: effectiveBasePrice, productSizeId: selectedPricingId || undefined },
      variantInfo,
      sizeColourObjects,
      colourToAdd
    );
    setCartOpen(true);
  };

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="relative min-h-screen py-8">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-800/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="text-muted-foreground group hover:text-accent rounded-xl">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-secondary/5 border border-border/30 shadow-xl card-3d">
              {(() => {
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

                return <ProductImageCarousel images={imagesList} alt={product.name} />
              })()}

              {(product.productStatus === 'OUTOFSTOCK' || product.productStatus === 'INACTIVE') && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 backdrop-blur-[2px]">
                  <div className="relative overflow-hidden px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transform rotate-[-5deg] animate-in zoom-in duration-500">
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
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-gold" />
                  <span className={cn(
                    "text-[9px] font-bold tracking-[0.2em] uppercase",
                    tenant.id.toLowerCase().includes('anantha') ? "text-accent font-display tracking-[0.3em]" : "text-accent"
                  )}>
                    {companyDetails?.companyName || 'Tirumala Sarees'}
                  </span>
                </div>
                <h1 className={cn(
                  "text-3xl md:text-5xl font-headline font-bold text-foreground leading-[1.15] tracking-tight",
                  tenant.id.toLowerCase().includes('anantha') ? "font-headline uppercase" : ""
                )}>
                  {product.name}
                </h1>
              </div>

              <div className="flex items-baseline gap-3 mt-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-accent tracking-tight">
                  ₹{(finalPrice).toFixed(2)}
                </h2>
                {hasDiscount && (
                  <span className="text-base text-muted-foreground/60 line-through decoration-destructive/30 decoration-1">
                    ₹{(originalPrice + sizeColoursPrice).toFixed(2)}
                  </span>
                )}
                {hasDiscount && (
                  <span className="text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-400 px-3 py-1.5 rounded-full shadow-lg animate-in zoom-in ml-2">
                    {offerPercentage}% OFF
                  </span>
                )}
              </div>

              <p className="text-[11px] font-medium text-muted-foreground/60 mt-2 flex items-center gap-2">
                <Check className="w-3 h-3 text-accent" />
                Taxes included. {companyDetails?.freeDeliveryCost && `Free shipping on orders over ₹${companyDetails.freeDeliveryCost}`}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1">
                  {(() => {
                    const pid = Number(product.id) || product.id.toString().charCodeAt(0);
                    const randomRating = 4.1 + (pid % 6) * 0.1;
                    return [...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("h-4 w-4", i < Math.floor(randomRating) ? 'fill-accent text-accent' : 'text-muted-foreground/30 fill-muted-foreground/30')} />
                    ));
                  })()}
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  ({(() => {
                    const pid = Number(product.id) || product.id.toString().charCodeAt(0);
                    return (4.1 + (pid % 6) * 0.1).toFixed(1);
                  })()})
                </span>
                <span className="text-muted-foreground/40 text-sm">|</span>
                <span className="text-muted-foreground text-sm">{(product.reviews?.length || 0) + Math.floor(Math.random() * 50)} reviews</span>
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed text-base font-light">{product.description}</p>
            </div>

            {/* Metadata Grid */}
            {(product.ingredients || product.bestBefore) && (
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/30">
                {product.ingredients && (
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Ingredients</span>
                    <p className="text-sm font-medium">{product.ingredients}</p>
                  </div>
                )}
                {product.bestBefore && (
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Shelf Life</span>
                    <p className="text-sm font-medium">{product.bestBefore}</p>
                  </div>
                )}
              </div>
            )}

            {product.instructions && (
              <div className="rounded-2xl p-5 border border-border/30 bg-secondary/10">
                <p className="text-sm text-muted-foreground">{product.instructions}</p>
              </div>
            )}

            <div className="space-y-8">
              {/* Pricing Options */}
              {product.pricing && product.pricing.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/20 mb-4">
                    <label className="text-xs font-black text-muted-foreground uppercase tracking-[0.15em]">Select Option</label>
                    <span className="text-[9px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">REQUIRED</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
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
                              "relative flex flex-col items-center justify-center py-2 px-3 rounded-2xl border transition-all duration-300 h-14 card-3d",
                              isSelected && isActive
                                ? "border-accent bg-accent/[0.03] shadow-lg shadow-accent/10 scale-[1.03]"
                                : isActive
                                  ? "border-border/50 bg-background/50 hover:border-accent/20 hover:bg-accent/5"
                                  : "cursor-not-allowed bg-muted/10 border-border/30 opacity-50"
                            )}
                          >
                            {!isActive && (
                              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 rounded-2xl overflow-hidden">
                                <div className="relative overflow-hidden px-1.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm rotate-[-4deg]">
                                  <span className="relative z-10 text-[8px] font-black uppercase tracking-wider text-rose-500 drop-shadow-sm">
                                    Sold Out
                                  </span>
                                </div>
                              </div>
                            )}
                            {isSelected && isActive && (
                              <div className="absolute top-2 right-2 text-accent">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                              </div>
                            )}
                            <span className={cn(
                              "text-base font-bold transition-colors",
                              isSelected && isActive ? "text-accent" : "text-foreground",
                              !isActive && "line-through decoration-destructive/30 decoration-1"
                            )}>
                              <div className="font-medium text-center">
                                {option.quantity}
                                {option.price > 0 && !allPricesSame && isActive && <span className="ml-1 text-xs text-accent font-bold">+₹{option.price}</span>}
                              </div>
                            </span>
                          </button>
                        );
                      });
                    })()}
                  </div>
                </div>
              )}

              {/* Colour Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/20 mb-4">
                    <label className="text-xs font-black text-muted-foreground uppercase tracking-[0.15em]">Select Color</label>
                    <span className="text-[9px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">REQUIRED</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {product.colors.map((colour) => {
                      const isActive = colour.colourStatus !== 'INACTIVE' && colour.colourStatus !== 'OUTOFSTOCK';
                      const statusLabel = colour.colourStatus === 'OUTOFSTOCK' ? 'Sold Out' : (colour.colourStatus === 'INACTIVE' ? 'Unavailable' : undefined);

                      return (
                        <ColourCard
                          key={colour.id}
                          name={colour.name}
                          image={colour.image}
                          isSelected={selectedColourId === colour.id}
                          active={isActive}
                          statusLabel={statusLabel}
                          onClick={() => setSelectedColourId(colour.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SizeColours */}
              {availableSizeColours.length > 0 && (
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/20 mb-4">
                    <label className="text-xs font-black text-muted-foreground uppercase tracking-[0.15em]">Select Style</label>
                    <span className="text-[9px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">REQUIRED</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {availableSizeColours.map(sc => {
                      const isSelected = selectedSizeColourId === sc.id;
                      const isActive = sc.sizeColourStatus !== 'INACTIVE' && sc.sizeColourStatus !== 'OUTOFSTOCK';

                      return (
                        <button
                          key={sc.id}
                          onClick={() => isActive && setSelectedSizeColourId(sc.id)}
                          className={cn(
                            "relative flex flex-col items-center p-2 rounded-2xl border transition-all duration-300 h-[95px] card-3d",
                            isSelected && isActive
                              ? "border-accent bg-accent/[0.03] shadow-lg shadow-accent/10 scale-[1.03]"
                              : isActive
                                ? "border-border/30 bg-secondary/5 hover:border-accent/20 hover:bg-accent/5"
                                : "cursor-not-allowed bg-muted/10 border-border/20 opacity-50"
                          )}
                        >
                          {!isActive && (
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 rounded-2xl overflow-hidden">
                              <div className="relative overflow-hidden px-1.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm rotate-[-4deg]">
                                <span className="relative z-10 text-[8px] font-black uppercase tracking-wider text-rose-500 drop-shadow-sm">
                                  Sold Out
                                </span>
                              </div>
                            </div>
                          )}
                          {isSelected && isActive && (
                            <div className="absolute -top-2 -right-2 bg-accent text-navy-900 rounded-full p-1 shadow-lg z-10">
                              <Check className="w-3 h-3" strokeWidth={3} />
                            </div>
                          )}
                          <div className="relative w-11 h-11 mb-1.5 rounded-full overflow-hidden border-2 border-border/30 shadow-sm bg-white">
                            {sc.productPics ? (
                              <img src={sc.productPics} alt={sc.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-muted-foreground/50">
                                {sc.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <span className={cn(
                            "text-xs font-bold tracking-tight line-clamp-1 w-full text-center px-1 mb-0.5 transition-colors",
                            isSelected && isActive ? "text-accent" : "text-foreground",
                            !isActive && "line-through decoration-destructive/30 decoration-1"
                          )}>
                            {sc.name}
                          </span>
                          {isActive && (
                            <span className={cn("text-[10px] font-bold uppercase tracking-wider leading-none", isSelected ? "text-accent/80" : "text-muted-foreground")}>
                              {sc.price > 0 ? `+₹${sc.price}` : "Standard"}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="fixed bottom-[60px] left-0 right-0 p-5 bg-background/80 backdrop-blur-2xl border-t border-border/20 z-20 md:static md:p-0 md:bg-transparent md:border-0 shadow-[0_-20px_60px_rgba(0,0,0,0.1)]">
              <div className="container mx-auto md:px-0">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] mb-0.5">Estimated Total</p>
                    <h2 className="text-2xl md:text-3xl font-headline font-bold text-accent tracking-tight">₹{(finalPrice * quantity).toFixed(2)}</h2>
                  </div>
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
                          "flex-1 max-w-[280px] h-14 text-base font-bold rounded-2xl shadow-xl transition-all duration-300 active:scale-[0.98]",
                          isOutOfStock
                            ? "bg-muted text-muted-foreground cursor-not-allowed shadow-none"
                            : "bg-accent text-navy-900 hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
                        )}
                      >
                        {isOutOfStock ? "Out of Stock" : (
                          <>
                            Add to Cart
                            <Package className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    );
                  })()}
                </div>
              </div>
            </div>
            <div className="h-40 md:hidden"></div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, label: 'Free Delivery', desc: 'On orders above ₹499' },
            { icon: Shield, label: 'Secure Payment', desc: '100% secure checkout' },
            { icon: Package, label: 'Easy Returns', desc: '7-day return policy' },
            { icon: Star, label: 'Premium Quality', desc: 'Authentic products' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm hover:border-accent/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">Customer Reviews</h2>
          <p className="text-muted-foreground font-light mb-10">What our customers say about this product</p>
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex flex-col items-center justify-center rounded-2xl p-8 border border-border/30 bg-card/50 backdrop-blur-sm">
                {(() => {
                  const pid = Number(product.id) || product.id.toString().charCodeAt(0);
                  const randomRating = 4.1 + (pid % 6) * 0.1;
                  return (
                    <>
                      <p className="text-5xl font-headline font-bold text-foreground">{randomRating.toFixed(1)}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={cn("h-6 w-6", i < Math.floor(randomRating) ? 'fill-accent text-accent' : 'fill-muted-foreground/20 text-muted-foreground/20')} />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">Based on {product.reviews?.length || 0} reviews</p>
                    </>
                  );
                })()}
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="space-y-4">
                {(product.reviews || []).length > 0 ? (product.reviews || []).map((review) => (
                  <div key={review.id} className="flex gap-4 p-5 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm hover:border-border/40 transition-all">
                    <Avatar className="h-10 w-10 border-2 border-border/30">
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback className="bg-accent/10 text-accent text-xs">{review.author ? review.author.charAt(0) : 'U'}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-foreground">{review.author}</p>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={cn("h-3.5 w-3.5", i < review.rating ? 'fill-accent text-accent' : 'fill-muted-foreground/20 text-muted-foreground/20')} />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{review.date}</p>
                      <p className="mt-3 text-foreground/90 text-sm leading-relaxed">{review.text}</p>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-12 text-muted-foreground border border-dashed border-border/30 rounded-2xl">
                    <p className="font-light">No reviews yet. Be the first to review!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">You May Also Like</h2>
          <p className="text-muted-foreground font-light mb-8">Discover similar products</p>
          <Recommendations />
        </div>
      </div>
    </div>
  );
}
