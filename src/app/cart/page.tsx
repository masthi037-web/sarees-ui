'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  Heart,
  Tag,
  ArrowRight,
  X,
  Shield,
  Truck,
} from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useWishlist } from '@/hooks/use-wishlist';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

import { useTenant } from '@/components/providers/TenantContext';
import { CheckoutSheet } from '@/components/checkout/CheckoutSheet';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal, companyDetails } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const { toast } = useToast();
  const { text } = useTenant();

  if (cart.length === 0) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center text-center space-y-6 max-w-md animate-in fade-in zoom-in duration-500">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-2 liquid-glass">
                <ShoppingCart className="h-12 w-12 text-accent" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <span className="text-navy-900 text-xs font-bold">0</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">Your cart is empty</h2>
            <p className="text-muted-foreground text-lg font-light">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-bold shadow-xl hover:shadow-2xl transition-all bg-accent text-navy-900 hover:bg-accent/90">
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const minOrder = Number(companyDetails?.minimumOrderCost || 0);
  const freeDeliveryThreshold = Number(companyDetails?.freeDeliveryCost || 0);
  const isFreeDelivery = freeDeliveryThreshold > 0 && subtotal >= freeDeliveryThreshold;
  const shipping = isFreeDelivery ? 0 : parseFloat(companyDetails?.deliveryCost || '0');
  const total = subtotal + shipping;

  return (
    <div className="relative min-h-screen bg-background py-12">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-800/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Page Header */}
        <div className="relative text-center mb-16 space-y-3">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 border border-border/50 hover:bg-secondary/50 md:hidden"
          >
            <Link href="/">
              <X className="h-5 w-5" />
            </Link>
          </Button>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <ShoppingCart className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent">{cart.length} items</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-foreground">
            Shopping Cart
          </h1>
          <p className="text-lg text-muted-foreground/80 font-light max-w-md mx-auto">
            Review your items and proceed to checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="group relative p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:border-accent/20 transition-all duration-500 card-3d"
                >
                  {/* Product Image */}
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-2xl border border-border/30 bg-secondary/20 shadow-sm">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={item.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col w-full min-h-[8rem] justify-between gap-3">
                    <div className="flex justify-between items-start w-full">
                      <div className="space-y-2.5">
                        <Link href={`/product/${item.id}`} className="font-headline font-bold text-xl text-foreground hover:text-accent transition-colors line-clamp-1 block mr-4">
                          {item.name}
                        </Link>

                        <div className="flex flex-wrap gap-2 items-center">
                          {Object.entries(item.selectedVariants || {}).map(([key, value]) => (
                            <span key={key} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-navy-50 text-navy-700 border border-navy-100 dark:bg-navy-800 dark:text-navy-200 dark:border-navy-700">
                              {value}
                            </span>
                          ))}
                          {item.selectedSizeColours && item.selectedSizeColours.map((sc) => (
                            <span key={sc.id} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                              + {sc.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="font-bold text-xl tabular-nums whitespace-nowrap text-navy-800 dark:text-navy-200">
                        ₹{((item.price + (item.selectedSizeColours?.reduce((acc, sc) => acc + sc.price, 0) || 0)) * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-end justify-between mt-auto">
                      <div className="flex items-center bg-secondary/50 rounded-xl border border-border/50 p-0.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 rounded-xl hover:bg-background hover:text-destructive transition-all"
                          onClick={() => updateQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </Button>
                        <span className="w-10 text-center text-sm font-bold text-foreground">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 rounded-xl hover:bg-background hover:text-accent transition-all"
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className={cn(
                            "rounded-full h-10 w-10 text-muted-foreground hover:text-red-500 hover:bg-red-50/50 transition-all",
                            wishlist.some(i => i.id === item.id) && "text-red-500 bg-red-50/50"
                          )}
                          onClick={() => toggleWishlist(item)}
                        >
                          <Heart className={cn("h-4 w-4", wishlist.some(i => i.id === item.id) && "fill-current")} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full h-10 w-10 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                          onClick={() => {
                            removeFromCart(item.cartItemId);
                            toast({ description: `${item.name} removed from cart.` });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <div className="p-6 sm:p-8 rounded-3xl border border-border/40 bg-card/80 backdrop-blur-sm shadow-xl card-3d">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Tag className="w-4 h-4 text-accent" />
                  </div>
                  <h2 className="text-xl font-headline font-bold">Order Summary</h2>
                </div>

                {(() => {
                  const minOrder = Number(companyDetails?.minimumOrderCost || 0);
                  const freeDeliveryThreshold = Number(companyDetails?.freeDeliveryCost || 0);
                  const isFreeDelivery = freeDeliveryThreshold > 0 && subtotal >= freeDeliveryThreshold;
                  const shipping = isFreeDelivery ? 0 : parseFloat(companyDetails?.deliveryCost || '0');
                  const total = subtotal + shipping;
                  const canCheckout = subtotal >= minOrder;
                  const amountForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

                  return (
                    <>
                      {amountForFreeDelivery > 0 && freeDeliveryThreshold > 0 && (
                        <div className="mb-6 p-4 rounded-2xl bg-accent/5 border border-accent/20">
                          <p className="text-xs font-bold text-accent mb-3 flex items-center gap-2">
                            <Truck className="w-3.5 h-3.5" />
                            Add <span className="font-extrabold text-base mx-1">₹{amountForFreeDelivery.toFixed(0)}</span> more for free delivery
                          </p>
                          <div className="h-2 w-full bg-accent/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-accent to-yellow-400 rounded-full transition-all duration-700"
                              style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between text-muted-foreground">
                          <span>Subtotal</span>
                          <span className="font-medium text-foreground">₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Shipping</span>
                          <span className={cn(isFreeDelivery ? "text-accent font-semibold" : "")}>
                            {isFreeDelivery ? (
                              <span className="inline-flex items-center gap-1">
                                <Truck className="w-3 h-3" /> FREE
                              </span>
                            ) : `₹${shipping.toFixed(2)}`}
                          </span>
                        </div>

                        <Separator className="my-2" />

                        <div className="flex justify-between items-baseline">
                          <span className="text-base font-bold">Total</span>
                          <span className="text-2xl md:text-3xl font-headline font-bold text-accent">₹{total.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="mt-8 space-y-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                          <Tag className="w-4 h-4" />
                          <span>Apply Coupon</span>
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Enter code" className="bg-background/50 h-11 border-dashed focus-visible:ring-accent/20 rounded-xl" />
                          <Button variant="outline" className="h-11 px-5 font-semibold rounded-xl border-accent/30 text-accent hover:bg-accent/5">Apply</Button>
                        </div>
                      </div>

                      {!canCheckout && (
                        <p className="mt-4 text-xs text-destructive text-center font-medium bg-destructive/10 py-3 px-4 rounded-xl border border-destructive/20">
                          Minimum order amount is ₹{minOrder.toFixed(0)}
                        </p>
                      )}

                      <CheckoutSheet>
                        <Button
                          size="lg"
                          disabled={!canCheckout}
                          className={cn(
                            "w-full mt-6 h-14 text-base font-bold rounded-2xl transition-all duration-300",
                            canCheckout
                              ? "bg-accent text-navy-900 hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                              : "bg-muted text-muted-foreground shadow-none opacity-70"
                          )}
                        >
                          {canCheckout ? (
                            <>
                              {text.checkoutButton || "Checkout securely"}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </>
                          ) : (
                            "Checkout Disabled"
                          )}
                        </Button>
                      </CheckoutSheet>

                      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-accent" />
                          Secure Checkout
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Truck className="w-3.5 h-3.5 text-accent" />
                          Fast Delivery
                        </span>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
