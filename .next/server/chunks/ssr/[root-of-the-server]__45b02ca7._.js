module.exports = [
"[project]/src/services/mappers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapApiCatalogueToAppCatalog",
    ()=>mapApiCatalogueToAppCatalog,
    "mapApiCategoriesToAppCategories",
    ()=>mapApiCategoriesToAppCategories,
    "mapApiProductToAppProduct",
    ()=>mapApiProductToAppProduct
]);
function mapApiCategoriesToAppCategories(apiCategories, deliveryTime) {
    const categoryMap = new Map();
    apiCategories.forEach((item)=>{
        const catId = String(item.categoryId || item.id || item.category_id || '');
        if (!catId) return;
        // Ensure we have an entry in the map for this category
        if (!categoryMap.has(catId)) {
            categoryMap.set(catId, {
                id: catId,
                name: item.categoryName || item.name || '',
                catalogs: [],
                categoryImage: item.categoryImage || item.image || ''
            });
        }
        const appCat = categoryMap.get(catId);
        // 1. Handle Nested Catalogues (Bulk Fetch Style)
        const nestedCatalogues = item.catalogues || item.catalogueResponseList || item.catalogue_response_list || [];
        const productsAtCategoryLevel = item.products || item.productList || item.product_list || [];
        if (nestedCatalogues.length > 0) {
            const mappedCatalogs = nestedCatalogues.map((c)=>mapApiCatalogueToAppCatalog(c, deliveryTime));
            appCat.catalogs.push(...mappedCatalogs);
            // Prefer picking up name/image from the parent category object
            if (!appCat.name) appCat.name = item.categoryName || item.name || '';
            if (!appCat.categoryImage) appCat.categoryImage = item.categoryImage || item.image || '';
        } else if (item.catalogueId || item.catalogue_id) {
            appCat.catalogs.push(mapApiCatalogueToAppCatalog(item, deliveryTime));
        } else if (productsAtCategoryLevel.length > 0) {
            appCat.catalogs.push({
                id: `default-${catId}`,
                name: 'All Products',
                catalogueImage: item.categoryImage || item.image || '',
                products: productsAtCategoryLevel.map((p)=>mapApiProductToAppProduct(p, deliveryTime))
            });
        }
    });
    return Array.from(categoryMap.values());
}
function mapApiCatalogueToAppCatalog(apiCat, deliveryTime) {
    const catalogId = String(apiCat.catalogueId || apiCat.id || apiCat.catalogue_id || '');
    const products = apiCat.products || apiCat.productList || apiCat.product_list || [];
    return {
        id: catalogId,
        name: apiCat.catalogueName || apiCat.name || '',
        products: products.map((p)=>mapApiProductToAppProduct(p, deliveryTime)),
        catalogueImage: apiCat.catalogueImage || apiCat.image || ''
    };
}
function mapApiProductToAppProduct(apiProd, deliveryTime) {
    // Logic to determine price: use the first pricing option or default to 0
    const firstPricing = apiProd.productSize && apiProd.productSize.length > 0 ? apiProd.productSize[0] : null;
    // Logic to map variants from pricing if available
    const variants = [];
    // Image handling: parse &&& separated URLs
    const rawImageField = apiProd.productImage || apiProd.product_image || apiProd.productPics;
    let images = [];
    if (rawImageField) {
        images = String(rawImageField).split('&&&').filter((s)=>s.trim().length > 0 && s !== "https://cdn.example.com/products/default.jpg");
    }
    // Default main image (Take 1st ONE only, NO PICSUM FALLBACK)
    // If empty, it stays empty.
    const mainImage = images.length > 0 ? images[0] : '';
    // Calculate rating
    const rating = apiProd.productRatings && apiProd.productRatings.length > 0 ? apiProd.productRatings.reduce((acc, curr)=>acc + curr.productRating, 0) / apiProd.productRatings.length : 0; // Default to 0 or 4.5 based on preference, using 0 for now as 'no ratings'.
    // Map Reviews
    const reviews = apiProd.productRatings?.map((r)=>({
            id: String(r.productRatingId),
            author: "Verified User",
            rating: r.productRating,
            text: r.productReview,
            date: new Date(r.createdAt).toLocaleDateString()
        })) || [];
    // Pricing Options
    const pricingOptions = apiProd.productSize?.map((p)=>({
            id: String(p.productSizeId),
            price: p.productSizePrice || apiProd.productPrice || 0,
            priceAfterDiscount: p.productSizePriceAfterDiscount,
            quantity: p.size || '',
            sizeQuantity: Number(p.sizeQuantity) || 0,
            sizeStatus: p.sizeStatus,
            sizeColours: p.productSizeColours?.map((a)=>({
                    id: String(a.productSizeColourId),
                    name: a.colourName,
                    price: a.colourPrice,
                    productPics: a.productPics,
                    productSizeColourQuantity: Number(a.productSizeColourQuantity) || 0,
                    status: a.sizeColourStatus,
                    sizeColourStatus: a.sizeColourStatus
                }))
        })) || [];
    return {
        id: String(apiProd.productId),
        name: apiProd.productName,
        description: apiProd.productInfo || '',
        price: firstPricing ? Number(firstPricing.productSizePrice) : Number(apiProd.productPrice) || 0,
        priceAfterDiscount: apiProd.productPriceAfterDiscount,
        rating: rating,
        reviews: reviews,
        imageId: String(apiProd.productId),
        imageUrl: mainImage,
        images: images,
        famous: apiProd.famous || false,
        deliveryTime: deliveryTime || '2-3 Days',
        deliveryCost: Number(apiProd.productDeliveryCost) || 0,
        pricing: pricingOptions,
        variants: variants,
        productOffer: apiProd.productOffer || undefined,
        productPrice: Number(apiProd.productPrice) || 0,
        // Fields mapped from API specific fields
        productStatus: apiProd.productStatus,
        productType: apiProd.productType,
        ingredients: apiProd.productIng,
        bestBefore: apiProd.productBestBefore,
        instructions: apiProd.productInst,
        createdAt: apiProd.createdAt,
        updatedAt: apiProd.updatedAt,
        productQuantity: apiProd.productQuantity,
        multipleSetDiscount: apiProd.multipleSetDiscount,
        multipleDiscountMoreThan: apiProd.multipleDiscountMoreThan,
        colors: apiProd.productColour?.map((c)=>({
                id: String(c.productColourId),
                name: c.colour,
                image: c.productPics,
                status: c.colourStatus,
                colourStatus: c.colourStatus
            }))
    };
}
}),
"[project]/src/services/product.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCategories",
    ()=>fetchCategories,
    "fetchProductDetails",
    ()=>fetchProductDetails,
    "fetchProductsByCategory",
    ()=>fetchProductsByCategory,
    "validateCheckout",
    ()=>validateCheckout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api-client.ts [app-rsc] (ecmascript)");
// ... existing imports
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mappers.ts [app-rsc] (ecmascript)");
;
;
// Helper to centralize products-by-category logic
async function fetchCategoryProductsAPI(categoryId, forceFresh = false) {
    const catIdStr = String(categoryId);
    // Defensive check
    if (!catIdStr || catIdStr === 'undefined' || catIdStr === 'null') return null;
    try {
        const catData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiClient"])('/company/public/get-products-by-category/get', {
            params: {
                categoryId: catIdStr
            },
            next: {
                revalidate: forceFresh ? 0 : 420
            }
        });
        // Log brief summary instead of full dump
        return catData;
    } catch (e) {
        console.error(`Failed to fetch category ${catIdStr}`, e);
        return null; // Return null so callers handle it
    }
}
async function fetchCategories(companyId, deliveryTime, fetchAllAtOnce = true) {
    if (!companyId) return [];
    try {
        if (!fetchAllAtOnce) {
            const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiClient"])('/category/public/get-all-by-company', {
                params: {
                    companyId
                },
                next: {
                    revalidate: 420,
                    tags: [
                        'categories'
                    ]
                } // Cache the category list (7 mins)
            });
            if (!categories || categories.length === 0) {
                return [];
            }
            const firstCategory = categories[0];
            let firstCategoryData = null;
            if (firstCategory && firstCategory.categoryId) {
                // Initial Load always uses Cache (forceFresh=false)
                const catData = await fetchCategoryProductsAPI(firstCategory.categoryId, false);
                if (catData) {
                    const mappedCats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapApiCategoriesToAppCategories"])(Array.isArray(catData) ? catData : [
                        catData
                    ], deliveryTime);
                    firstCategoryData = mappedCats[0];
                }
            }
            return categories.map((cat, index)=>{
                if (index === 0 && firstCategoryData) {
                    return {
                        ...firstCategoryData,
                        id: String(cat.categoryId),
                        name: firstCategoryData.name || cat.categoryName,
                        categoryImage: firstCategoryData.categoryImage || cat.categoryImage
                    };
                }
                return {
                    id: String(cat.categoryId),
                    name: cat.categoryName,
                    categoryImage: cat.categoryImage || cat.image || cat.category_image || '',
                    catalogs: [] // Empty catalogs implies not loaded
                };
            });
        } else {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiClient"])('/company/public/category/catalogue/product/get', {
                params: {
                    companyId
                },
                next: {
                    revalidate: 420,
                    tags: [
                        'products'
                    ]
                } // 7 minutes cache
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapApiCategoriesToAppCategories"])(data.categories || [], deliveryTime);
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}
async function fetchProductsByCategory(categoryId, deliveryTime, forceFresh = false) {
    const catData = await fetchCategoryProductsAPI(categoryId, forceFresh);
    if (!catData) return null;
    const mappedCats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapApiCategoriesToAppCategories"])(Array.isArray(catData) ? catData : [
        catData
    ], deliveryTime);
    return mappedCats[0] || null;
}
async function fetchProductDetails(productId) {
    try {
        // Using the company-agnostic product get endpoint if available, or finding it in catalog
        // Assuming a standard endpoint for now based on user request "call get product details API"
        // We will guess '/company/public/product/get/{productId}' or similar. 
        // Given the user gave a specific JSON, let's assume valid response.
        // Actually, to be safe and use existing patterns, checking if there is a direct ID endpoint.
        // If not, we might need to rely on the user providing the endpoint or use a standard one.
        // I will use `params` structure similar to others.
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiClient"])(`/product/details/get`, {
            params: {
                productId
            },
            next: {
                revalidate: 0
            } // No cache for checkout validation
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapApiProductToAppProduct"])(data);
    } catch (error) {
        console.error(`Error fetching product ${productId}:`, error);
        return null;
    }
}
async function validateCheckout(payload) {
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiClient"])('/product/checkout/check', {
            method: 'POST',
            body: JSON.stringify(payload),
            next: {
                revalidate: 0
            } // No cache
        });
        return data.productDetails;
    } catch (error) {
        console.error('Checkout validation failed:', error);
        return null;
    }
}
}),
"[project]/src/actions/product.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6005ae63c6e32823d8bc24de3b7bd143c1f422a71f":"fetchProductsByCategoryAction"},"",""] */ __turbopack_context__.s([
    "fetchProductsByCategoryAction",
    ()=>fetchProductsByCategoryAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/product.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function fetchProductsByCategoryAction(categoryId, deliveryTime) {
    const catIdStr = String(categoryId);
    // Defensive check
    if (!catIdStr || catIdStr === 'undefined' || catIdStr === 'null') return null;
    console.log(`[ProductAction] Server Action Delegating to ProductService for category (${catIdStr})`);
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchProductsByCategory"])(catIdStr, deliveryTime, true);
    } catch (e) {
        console.error(`[ProductAction] Failed to fetch category ${catIdStr}`, e);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    fetchProductsByCategoryAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchProductsByCategoryAction, "6005ae63c6e32823d8bc24de3b7bd143c1f422a71f", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/product.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/product.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "6005ae63c6e32823d8bc24de3b7bd143c1f422a71f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchProductsByCategoryAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/product.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.actions.ts [app-rsc] (ecmascript)");
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/home/HomeClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/home/HomeClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/home/HomeClient.tsx <module evaluation>", "default");
}),
"[project]/src/components/home/HomeClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/home/HomeClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/home/HomeClient.tsx", "default");
}),
"[project]/src/components/home/HomeClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/home/HomeClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/home/HomeClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/home/OfferBannerSlider.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "OfferBannerSlider",
    ()=>OfferBannerSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const OfferBannerSlider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OfferBannerSlider() from the server but OfferBannerSlider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/home/OfferBannerSlider.tsx <module evaluation>", "OfferBannerSlider");
}),
"[project]/src/components/home/OfferBannerSlider.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "OfferBannerSlider",
    ()=>OfferBannerSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const OfferBannerSlider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OfferBannerSlider() from the server but OfferBannerSlider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/home/OfferBannerSlider.tsx", "OfferBannerSlider");
}),
"[project]/src/components/home/OfferBannerSlider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$OfferBannerSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/home/OfferBannerSlider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$OfferBannerSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/home/OfferBannerSlider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$OfferBannerSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/product.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$company$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/company.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/HomeClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tenant$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/tenant-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$OfferBannerSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/OfferBannerSlider.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function generateMetadata() {
    const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const headerDomain = headersList.get("x-company-domain");
    const companyDomain = headerDomain && headerDomain !== 'localhost' ? headerDomain : 'babaihomefoods';
    const tenantConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tenant$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTenantConfig"])(companyDomain);
    if (!tenantConfig.seo) {
        return {
            title: 'ManaBuy',
            description: 'A modern e-commerce experience.'
        };
    }
    return {
        title: tenantConfig.seo.title,
        description: tenantConfig.seo.description,
        keywords: tenantConfig.seo.keywords,
        verification: {
            google: tenantConfig.seo.googleVerification
        },
        openGraph: {
            title: tenantConfig.seo.title,
            description: tenantConfig.seo.description,
            images: tenantConfig.seo.ogImage ? [
                {
                    url: tenantConfig.seo.ogImage
                }
            ] : []
        }
    };
}
async function Home() {
    const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const headerDomain = headersList.get("x-company-domain");
    const companyDomain = headerDomain && headerDomain !== 'localhost' ? headerDomain : 'babaihomefoods';
    const company = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$company$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchCompanyDetails"])(companyDomain);
    const tenantConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tenant$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTenantConfig"])(companyDomain);
    const bannerContent = company?.banner ? company.banner.split('&&&') : [];
    const carouselMedia = bannerContent.map((url)=>{
        const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(url) || url.includes('video');
        return {
            url,
            type: isVideo ? 'video' : 'image'
        };
    });
    if (carouselMedia.length === 0) {
        carouselMedia.push({
            url: "https://picsum.photos/seed/homepage-banner/1920/1080",
            type: 'image'
        });
    }
    const categories = company && company.companyId ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchCategories"])(company.companyId, company.deliveryBetween, tenantConfig.fetchAllAtOnce ?? true) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$OfferBannerSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferBannerSlider"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full z-10 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[75vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-[45vh] md:h-full overflow-hidden bg-[#f2f2f2]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "/backgroudnd.png",
                                alt: "Saree Banner",
                                fill: true,
                                className: "object-cover object-center",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center bg-[#f9f6f0] px-6 py-12 md:px-12 lg:px-20 text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-xl space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-script text-3xl md:text-4xl text-primary block leading-none",
                                                children: tenantConfig.text.heroTitle || "Celebrating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-px bg-primary/45 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-headline text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-[#1a1a1a] leading-tight",
                                        children: tenantConfig.text.heroTitleHighlight || "Timeless Heritage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-xs md:text-sm text-[#555] font-light leading-relaxed max-w-md",
                                        children: tenantConfig.text.heroDescription || "Discover the luxury of handcrafted heritage weaves, curated for modern elegance."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#shop-now",
                                            className: "inline-flex items-center justify-center rounded-full px-8 py-3 bg-primary hover:bg-primary/95 text-white text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 duration-300 shadow-sm",
                                            children: "Shop Now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6 pt-6 border-t border-black/5",
                                        children: [
                                            {
                                                label: 'Premium Weaves',
                                                icon: '✦'
                                            },
                                            {
                                                label: 'Free Shipping',
                                                icon: '✧'
                                            },
                                            {
                                                label: 'Handcrafted Purity',
                                                icon: '✽'
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-[#555] text-[10px] uppercase tracking-wider font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary",
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.label
                                                ]
                                            }, item.label, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                initialCategories: categories,
                companyDetails: company,
                fetchAllAtOnce: tenantConfig.fetchAllAtOnce ?? true
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__45b02ca7._.js.map