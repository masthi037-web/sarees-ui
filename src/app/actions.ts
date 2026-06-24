// import { getPersonalizedRecommendations } from "@/ai/flows/personalized-product-recommendations";
import { categories } from "@/data/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Product, ProductWithImage } from "@/lib/types";
import { fetchCategories } from "@/services/product.service";

export async function getRecommendationsAction(
  deliveryTime?: string,
  categoryId?: string,
  excludeProductId?: string,
  companyId?: string
): Promise<ProductWithImage[]> {
  try {
    let targetCategories = categories;

    if (companyId) {
      const apiCategories = await fetchCategories(companyId, deliveryTime, true);
      if (apiCategories && apiCategories.length > 0) {
        targetCategories = apiCategories;
      }
    }

    if (categoryId) {
      const filtered = targetCategories.filter(c => String(c.id) === String(categoryId));
      if (filtered.length > 0) {
        targetCategories = filtered;
      }
    }

    let allProducts: Product[] = targetCategories.flatMap(category =>
      (category.catalogs || []).flatMap(catalog => catalog.products || [])
    );

    if (excludeProductId) {
      allProducts = allProducts.filter(p => String(p.id) !== String(excludeProductId));
    }

    // Graceful fallback if no products found in target category
    if (allProducts.length === 0) {
      const fallbackCategories = companyId 
        ? (await fetchCategories(companyId, deliveryTime, true) || []) 
        : categories;
      allProducts = fallbackCategories.flatMap(category =>
        (category.catalogs || []).flatMap(catalog => catalog.products || [])
      );
      if (excludeProductId) {
        allProducts = allProducts.filter(p => String(p.id) !== String(excludeProductId));
      }
    }

    // Shuffle array
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

    const recommendedProducts: ProductWithImage[] = selected
      .map(product => {
        const image = imageMap.get(product.imageId);
        return {
          ...product,
          imageUrl: product.imageUrl || image?.imageUrl || '',
          imageHint: image?.imageHint || 'product image',
          deliveryTime: deliveryTime || product.deliveryTime || '30-45 min'
        };
      })
      .filter((p): p is ProductWithImage => !!p);

    return recommendedProducts;

  } catch (error) {
    console.error("Error getting recommendations:", error);
    return [];
  }
}
