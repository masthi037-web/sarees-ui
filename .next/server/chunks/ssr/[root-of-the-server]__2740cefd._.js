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
            const mappedCatalogs = nestedCatalogues.map((c)=>mapApiCatalogueToAppCatalog(c, deliveryTime, catId));
            appCat.catalogs.push(...mappedCatalogs);
            // Prefer picking up name/image from the parent category object
            if (!appCat.name) appCat.name = item.categoryName || item.name || '';
            if (!appCat.categoryImage) appCat.categoryImage = item.categoryImage || item.image || '';
        } else if (item.catalogueId || item.catalogue_id) {
            appCat.catalogs.push(mapApiCatalogueToAppCatalog(item, deliveryTime, catId));
        } else if (productsAtCategoryLevel.length > 0) {
            appCat.catalogs.push({
                id: `default-${catId}`,
                name: 'All Products',
                catalogueImage: item.categoryImage || item.image || '',
                products: productsAtCategoryLevel.map((p)=>mapApiProductToAppProduct(p, deliveryTime, catId))
            });
        }
    });
    return Array.from(categoryMap.values());
}
function mapApiCatalogueToAppCatalog(apiCat, deliveryTime, categoryId) {
    const catalogId = String(apiCat.catalogueId || apiCat.id || apiCat.catalogue_id || '');
    const products = apiCat.products || apiCat.productList || apiCat.product_list || [];
    return {
        id: catalogId,
        name: apiCat.catalogueName || apiCat.name || '',
        products: products.map((p)=>mapApiProductToAppProduct(p, deliveryTime, categoryId)),
        catalogueImage: apiCat.catalogueImage || apiCat.image || ''
    };
}
function mapApiProductToAppProduct(apiProd, deliveryTime, categoryId) {
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
            })),
        categoryId: categoryId || (apiProd.catalogueId ? String(apiProd.catalogueId) : undefined),
        catalogueId: apiProd.catalogueId ? String(apiProd.catalogueId) : undefined
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
"[project]/src/components/common/SectionDivider.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "SectionDivider",
    ()=>SectionDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SectionDivider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SectionDivider() from the server but SectionDivider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/common/SectionDivider.tsx <module evaluation>", "SectionDivider");
}),
"[project]/src/components/common/SectionDivider.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "SectionDivider",
    ()=>SectionDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SectionDivider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SectionDivider() from the server but SectionDivider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/common/SectionDivider.tsx", "SectionDivider");
}),
"[project]/src/components/common/SectionDivider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SectionDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/common/SectionDivider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SectionDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/common/SectionDivider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SectionDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "resolveImageUrl",
    ()=>resolveImageUrl,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function resolveImageUrl(path) {
    if (!path) return '';
    // Handle multiple images joined by &&&
    const firstPath = path.split('&&&')[0];
    if (!firstPath) return '';
    if (firstPath.startsWith('http') || firstPath.startsWith('blob:')) return firstPath;
    // If it is a local public asset path (like /offer_banner_1.png)
    if (firstPath.startsWith('/') && !firstPath.startsWith('/uploads') && !firstPath.startsWith('/media')) {
        return firstPath;
    }
    // Ensure we don't double slash
    const cleanPath = firstPath.startsWith('/') ? firstPath.slice(1) : firstPath;
    return `https://api.manabuy.in/${cleanPath}`;
}
function slugify(text) {
    return text.toString().toLowerCase().trim().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}
}),
"[project]/src/components/home/FeaturesCarousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesCarousel",
    ()=>FeaturesCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-rsc] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-rsc] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-rsc] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-rsc] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-rsc] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const iconMap = {
    'ShieldCheck': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
    'Truck': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
    'Star': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
    'Zap': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    'Heart': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    'Award': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
    'Gift': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
};
const defaultFeatures = [
    {
        id: 1,
        title: "PURE COMFORT",
        description: "Handcrafted pure silk fabrics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 2,
        title: "WORLDWIDE SHIPPING",
        description: "Delivering to your doorstep globally",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 3,
        title: "ASSURED QUALITY",
        description: "Rigorous quality checks for every weave",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 4,
        title: "FINEST THREADS",
        description: "Woven with premium zari & yarns",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 5,
        title: "HASSLE-FREE RETURNS",
        description: "Easy returns and exchange policy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    }
];
function FeaturesCarousel({ features }) {
    // Always use the custom features for Tirumala Sarees
    const displayFeatures = defaultFeatures;
    // Duplicate the items to create a seamless loop
    const carouselItems = [
        ...displayFeatures,
        ...displayFeatures,
        ...displayFeatures,
        ...displayFeatures
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-hidden bg-[#fdf9f2] py-6 border-y border-[#f5eedc]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-marquee flex items-center justify-start [&_li]:mx-4 [&_img]:max-w-none",
                children: carouselItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 bg-white border border-[#f5eedc] rounded-none p-4 min-w-[280px] shadow-sm mx-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-full flex items-center justify-center shrink-0", item.bgColor),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", item.iconColor)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
                                    lineNumber: 94,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
                                lineNumber: 93,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[#1a1a1a] text-xs tracking-wider leading-tight",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground mt-1",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
                                lineNumber: 96,
                                columnNumber: 29
                            }, this)
                        ]
                    }, `${item.id}-${index}`, true, {
                        fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
                        lineNumber: 89,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
            lineNumber: 86,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/FeaturesCarousel.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SectionDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/SectionDivider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-rsc] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$FeaturesCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/FeaturesCarousel.tsx [app-rsc] (ecmascript)");
;
;
;
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
    const companyDomain = headerDomain && headerDomain !== 'localhost' ? headerDomain : 'tirumalasarees';
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
    const companyDomain = headerDomain && headerDomain !== 'localhost' ? headerDomain : 'tirumalasarees';
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
        className: "bg-transparent min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$OfferBannerSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferBannerSlider"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$FeaturesCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeaturesCarousel"], {
                features: company?.features
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SectionDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionDivider"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full z-10 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[75vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.youtube.com/@TirumalaSarees",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "relative w-full h-[45vh] md:h-full overflow-hidden bg-[#f2f2f2] group cursor-pointer block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/youtube_hero_banner.png",
                                    alt: "Saree YouTube Showcase",
                                    fill: true,
                                    className: "object-cover object-center transition-transform duration-1000 group-hover:scale-105",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/25 transition-all duration-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg transform scale-95 group-hover:scale-110 transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "h-7 w-7 text-white fill-white translate-x-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 left-4 bg-red-600 text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase shadow-md flex items-center gap-1.5 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1.5 w-1.5 rounded-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        "YouTube Live"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center bg-[#f9f6f0] px-6 py-12 md:px-12 lg:px-20 text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-xl space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 rounded-none border border-red-600/20 bg-red-50/50 px-3.5 py-1 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-bold uppercase tracking-[0.2em] text-red-600",
                                                children: "✦ As Seen On YouTube ✦"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-script text-3xl md:text-4xl text-primary block leading-none",
                                                children: "Trending Episodes Collection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-px bg-primary/45 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-headline text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-[#1a1a1a] leading-tight",
                                        children: [
                                            "Shop Our ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#c2410c] font-semibold",
                                                children: "Video Designs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-xs md:text-sm text-[#555] font-light leading-relaxed max-w-md",
                                        children: "Our custom heritage weaves, festive silk selections, and handloom masterpieces are showcased daily on our famous YouTube channel. Explore and shop the exact sarees featured in our latest videos."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 flex flex-col sm:flex-row gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#shop-now",
                                                className: "inline-flex items-center justify-center rounded-full px-8 py-3 bg-primary hover:bg-primary/95 text-white text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 duration-300 shadow-sm",
                                                children: "Shop Video Sarees"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.youtube.com/@TirumalaSarees",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center justify-center rounded-full px-8 py-3 border border-red-600 text-red-600 hover:bg-red-50/80 text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 duration-300 shadow-sm gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "h-3.5 w-3.5 fill-red-600 stroke-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Watch on YouTube"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6 pt-6 border-t border-black/5",
                                        children: [
                                            {
                                                label: 'Video Showcase',
                                                icon: '✦'
                                            },
                                            {
                                                label: 'Daily Releases',
                                                icon: '✧'
                                            },
                                            {
                                                label: '100% Pure Silk',
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
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.label
                                                ]
                                            }, item.label, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                initialCategories: categories,
                companyDetails: company,
                fetchAllAtOnce: tenantConfig.fetchAllAtOnce ?? true
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 74,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__2740cefd._.js.map