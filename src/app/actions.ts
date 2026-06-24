// import { getPersonalizedRecommendations } from "@/ai/flows/personalized-product-recommendations";
import { categories } from "@/data/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Product, ProductWithImage } from "@/lib/types";

export async function getRecommendationsAction(
  deliveryTime?: string,
  categoryId?: string,
  excludeProductId?: string
): Promise<ProductWithImage[]> {
  try {
    let targetCategories = categories;
    if (categoryId) {
      targetCategories = categories.filter(c => String(c.id) === String(categoryId));
      if (targetCategories.length === 0) {
        targetCategories = categories;
      }
    }

    let allProducts: Product[] = targetCategories.flatMap(category =>
      category.catalogs.flatMap(catalog => catalog.products)
    );

    if (excludeProductId) {
      allProducts = allProducts.filter(p => String(p.id) !== String(excludeProductId));
    }

    // Graceful fallback if no products found in target category
    if (allProducts.length === 0) {
      allProducts = categories.flatMap(category =>
        category.catalogs.flatMap(catalog => catalog.products)
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
