"use client";

import { useEffect, useState } from 'react';
import { getRecommendationsAction } from '@/app/actions';
import { ProductGrid } from './ProductGrid';
import { Skeleton } from '@/components/ui/skeleton';
import type { ProductWithImage } from '@/lib/types';

const RecommendationSkeleton = () => (
  <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="space-y-2">
        <Skeleton className="aspect-square w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-1/4" />
      </div>
    ))}
  </div>
);

import { useCart } from '@/hooks/use-cart';
import { useTenant } from '@/components/providers/TenantContext';

export default function Recommendations({
  categoryId,
  currentProductId,
}: {
  categoryId?: string;
  currentProductId?: string;
}) {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductWithImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { companyDetails } = useCart();
  const tenant = useTenant();

  const activeCompanyId = tenant.companyId || companyDetails?.companyId;

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      const products = await getRecommendationsAction(
        companyDetails?.deliveryBetween,
        categoryId,
        currentProductId,
        activeCompanyId
      );
      setRecommendedProducts(products);
      setLoading(false);
    };

    fetchRecommendations();
  }, [categoryId, currentProductId, companyDetails?.deliveryBetween, activeCompanyId]);

  if (loading) {
    return <RecommendationSkeleton />;
  }

  if (recommendedProducts.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No recommendations available at the moment.
      </div>
    );
  }

  return <ProductGrid products={recommendedProducts} />;
}
