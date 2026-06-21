"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, User, ShoppingCart, Search, ShoppingBag, History, Home, Settings, ClipboardList } from 'lucide-react';
import { cn, slugify } from '@/lib/utils';
import { useWishlist } from '@/hooks/use-wishlist';
import { useCart } from '@/hooks/use-cart';
import { useRef, useState, useEffect } from 'react';
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

const Header = ({ companyName = "ManaBuy", fetchAllAtOnce = true }: { companyName?: string, fetchAllAtOnce?: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { wishlist } = useWishlist();
  const { cart, getCartItemsCount, companyDetails } = useCart();
  const cartItemCount = getCartItemsCount();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
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

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.slice(0, 5)); // Limit to 5 results
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

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
    router.push(`/product/${productId}`);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-[#f2f2f2] shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Row */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Top Left - Account info */}
          <div className="w-1/4 flex items-center justify-start">
            <ProfileSheet>
              <button className="text-[11px] md:text-xs uppercase tracking-widest text-[#1a1a1a] hover:text-primary transition-colors font-semibold flex items-center gap-1.5 whitespace-nowrap">
                <User className="h-4.5 w-4.5 stroke-[1.5]" />
                <span className="hidden sm:inline">My Account</span>
              </button>
            </ProfileSheet>
          </div>

          {/* Top Center - Logo & Name */}
          <div className="flex-1 flex items-center justify-center">
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
          <div className="w-1/3 flex items-center justify-end gap-3 md:gap-5">
            {/* Search Pill */}
            {!(pathname === '/' && !fetchAllAtOnce) && !pathname.startsWith('/product/') && (
              <div className="relative w-full max-w-[120px] xs:max-w-[180px] sm:max-w-[220px]" ref={searchRef}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#888]" />
                <Input
                  placeholder={text.searchPlaceholder || "Search here..."}
                  className="h-8 pl-8 pr-4 rounded-full bg-[#f2f2f2] border-transparent text-[#1a1a1a] text-xs placeholder:text-[#888] focus:bg-[#eaeaea] focus:border-transparent transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                />

                {/* Search Dropdown */}
                {showDropdown && (
                  <div className="absolute top-full right-0 w-[280px] md:w-[320px] mt-2 bg-white border border-[#f2f2f2] rounded-md shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    {searchResults.length > 0 ? (
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
                    ) : (
                      <div className="p-6 text-center text-muted-foreground text-xs">
                        <p>No results found for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
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

        {/* Bottom Row - Centered Navigation Menu */}
        <div className="border-t border-[#f2f2f2] h-11 flex items-center justify-center overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-6 md:gap-9 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a] whitespace-nowrap">
            <Link href="/" className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent", pathname === '/' && "text-primary border-primary")}>
              Home
            </Link>
            {mounted && categories.length > 0 ? (
              categories.map(category => {
                const catSlug = slugify(category.name);
                const isActive = pathname === `/category/${category.id}` || pathname === `/category/${catSlug}`;
                return (
                  <Link
                    key={category.id}
                    href={`/category/${catSlug}`}
                    className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent", isActive && "text-primary border-primary")}
                  >
                    {category.name}
                  </Link>
                );
              })
            ) : (
              <Link href="/category/sarees" className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent", pathname === '/category/sarees' && "text-primary border-primary")}>
                Sarees
              </Link>
            )}
            <Link href="/" className={cn("hover:text-primary transition-colors py-2.5 border-b-2 border-transparent")}>
              New Arrivals
            </Link>
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
