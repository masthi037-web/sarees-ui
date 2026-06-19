"use client";

import { useWishlist } from '@/hooks/use-wishlist';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Heart, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="relative min-h-screen py-8">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative text-center mb-12 space-y-4">
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
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-2">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent">{wishlist.length} items</span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            My Wishlist
          </h1>
          <p className="text-muted-foreground mt-2 text-lg font-light">
            Your curated collection of favorite items.
          </p>
        </div>
        
        {wishlist.length > 0 ? (
          <ProductGrid products={wishlist} />
        ) : (
          <div className="flex flex-col items-center justify-center gap-6 text-center mt-16 p-8 md:p-12 rounded-3xl border border-border/30 bg-card/50 backdrop-blur-sm max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="h-10 w-10 text-accent" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h2 className="font-headline text-2xl md:text-3xl font-bold">Your wishlist is waiting</h2>
              <p className="text-muted-foreground max-w-sm mx-auto font-light">
                Looks like you haven&apos;t added anything yet. Start exploring and save your favorites!
              </p>
            </div>
            <Button asChild size="lg" className="mt-4 bg-accent text-navy-900 hover:bg-accent/90 rounded-full shadow-lg shadow-accent/20">
              <Link href="/">
                Start Shopping
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
