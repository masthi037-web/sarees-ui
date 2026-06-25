module.exports = [
"[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 5000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    setTimeout(()=>{
        dismiss();
    }, TOAST_REMOVE_DELAY - 500);
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
}),
"[project]/src/hooks/use-wishlist.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const EXPIRATION_TIME = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
const useWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        wishlist: [],
        timestamp: Date.now(),
        isWishlistOpen: false,
        addToWishlist: (product)=>{
            const { wishlist } = get();
            if (!wishlist.some((item)=>item.id === product.id)) {
                set({
                    wishlist: [
                        ...wishlist,
                        product
                    ],
                    timestamp: Date.now(),
                    isWishlistOpen: true // Open sidebar on add
                });
            }
        },
        removeFromWishlist: (productId)=>{
            set((state)=>({
                    wishlist: state.wishlist.filter((item)=>item.id !== productId)
                }));
        },
        toggleWishlist: (product)=>{
            const { isInWishlist, addToWishlist, removeFromWishlist } = get();
            if (isInWishlist(product.id)) {
                removeFromWishlist(product.id);
            } else {
                addToWishlist(product);
            }
        },
        isInWishlist: (productId)=>{
            return get().wishlist.some((item)=>item.id === productId);
        },
        setWishlistOpen: (isOpen)=>set({
                isWishlistOpen: isOpen
            }),
        syncWithServer: (latestProducts)=>{
            const { wishlist } = get();
            let hasChanges = false;
            const updatedWishlist = wishlist.map((item)=>{
                const fresh = latestProducts.find((p)=>p.id === item.id);
                if (fresh) {
                    if (fresh.price !== item.price || fresh.name !== item.name || fresh.imageUrl !== item.imageUrl) {
                        hasChanges = true;
                        return {
                            ...item,
                            ...fresh
                        };
                    }
                }
                return item;
            }).filter((item)=>{
                const exists = latestProducts.some((p)=>p.id === item.id);
                if (!exists) hasChanges = true;
                return exists;
            });
            if (hasChanges) {
                set({
                    wishlist: updatedWishlist,
                    timestamp: Date.now()
                });
            }
        },
        checkExpiration: ()=>{
            const { timestamp } = get();
            const now = Date.now();
            if (now - timestamp > EXPIRATION_TIME) {
                // Expired, clear wishlist
                set({
                    wishlist: [],
                    timestamp: now
                });
            }
        }
    }), {
    name: 'wishlist-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    onRehydrateStorage: ()=>(state)=>{
            // Check for expiration immediately upon hydration
            state?.checkExpiration();
        }
}));
}),
"[project]/src/hooks/use-cart.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const EXPIRATION_TIME = 10 * 60 * 60 * 1000; // 10 hours in milliseconds
const useCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        cart: [],
        companyDetails: null,
        timestamp: Date.now(),
        lastAddedItemId: null,
        addToCart: (product, selectedVariants, selectedSizeColours = [], selectedColour)=>{
            const currentCart = get().cart;
            // Helper to stringify variants consistently (sorted by keys)
            const stringifyVariants = (v)=>JSON.stringify(Object.keys(v).sort().reduce((obj, key)=>{
                    obj[key] = v[key];
                    return obj;
                }, {}));
            const newVariantString = stringifyVariants(selectedVariants);
            // We sort by ID to ensure order doesn't matter for comparison
            const newSizeColourIds = selectedSizeColours.map((a)=>a.id).sort().join(',');
            const newColourId = selectedColour?.id || '';
            const existingItemIndex = currentCart.findIndex((item)=>{
                const itemSizeColourIds = (item.selectedSizeColours || []).map((a)=>a.id).sort().join(',');
                const itemVariantString = stringifyVariants(item.selectedVariants);
                const itemColourId = item.selectedColour?.id || '';
                return item.id === product.id && itemVariantString === newVariantString && itemSizeColourIds === newSizeColourIds && itemColourId === newColourId;
            });
            let updatedCart;
            let newCartItemId;
            if (existingItemIndex > -1) {
                updatedCart = [
                    ...currentCart
                ];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    // Refresh details in case they changed (e.g. image, name, price)
                    name: product.name,
                    price: product.price,
                    priceAfterDiscount: product.priceAfterDiscount,
                    imageUrl: product.imageUrl,
                    images: product.images,
                    description: product.description,
                    productSizeId: product.productSizeId,
                    quantity: updatedCart[existingItemIndex].quantity + 1
                };
                newCartItemId = updatedCart[existingItemIndex].cartItemId;
            } else {
                newCartItemId = crypto.randomUUID();
                updatedCart = [
                    ...currentCart,
                    {
                        ...product,
                        cartItemId: newCartItemId,
                        quantity: 1,
                        selectedVariants,
                        selectedSizeColours,
                        productSizeColourId: selectedSizeColours && selectedSizeColours.length > 0 ? selectedSizeColours[0].id : undefined,
                        selectedColour
                    }
                ];
            }
            set({
                cart: updatedCart,
                timestamp: Date.now(),
                lastAddedItemId: newCartItemId
            });
            // Clear highlight after 3 seconds
            setTimeout(()=>set({
                    lastAddedItemId: null
                }), 3000);
        },
        removeFromCart: (cartItemId)=>{
            set((state)=>({
                    cart: state.cart.filter((item)=>item.cartItemId !== cartItemId),
                    timestamp: Date.now()
                }));
        },
        updateQuantity: (cartItemId, quantity)=>{
            if (quantity < 1) return;
            set((state)=>({
                    cart: state.cart.map((item)=>item.cartItemId === cartItemId ? {
                            ...item,
                            quantity
                        } : item),
                    timestamp: Date.now()
                }));
        },
        getCartTotal: ()=>{
            const cart = get().cart;
            // 1. Calculate Total Product Quantities and Rules
            const productQuantities = {};
            const productRules = {};
            const productMoreThanRules = {};
            cart.forEach((item)=>{
                productQuantities[item.id] = (productQuantities[item.id] || 0) + item.quantity;
                if (item.multipleSetDiscount) {
                    productRules[item.id] = String(item.multipleSetDiscount).trim();
                }
                if (item.multipleDiscountMoreThan) {
                    productMoreThanRules[item.id] = String(item.multipleDiscountMoreThan).trim();
                }
            });
            // 2. Iterate and Calculate Total
            // Removed old reduce block that was returning early
            // REWRITE: Calculate totals by Product ID first
            // REWRITE: Calculate totals by Product ID first
            let grandTotal = 0;
            const processedProductIds = new Set();
            cart.forEach((item)=>{
                const productId = item.id.toString();
                if (processedProductIds.has(productId)) return; // Already processed this product's total logic
                processedProductIds.add(productId);
                // Get all items for this product to handle variants/colour correctly
                const productItems = cart.filter((i)=>i.id.toString() === productId);
                const totalQty = productQuantities[productId];
                const ruleKey = productRules[productId];
                const moreThanRule = productMoreThanRules[productId];
                // 1. Calculate Base Total for this Product (including variants/sizeColours)
                // We need to apply discounts to the BASE PRICE of each specific item
                // Actually, `itemPrice` (base) is per item. 
                // We need to distribute the discount schedule [15, 15, 10, 0...] across the items.
                // Generate Distribution
                let distribution = new Array(totalQty).fill(0);
                let maxGreedyDiscount = 0;
                if (ruleKey) {
                    const segments = String(ruleKey).split('&&&');
                    const tiers = [];
                    segments.forEach((seg)=>{
                        const parts = String(seg).split('-');
                        if (parts.length === 2) {
                            tiers.push({
                                threshold: parseFloat(parts[0]),
                                percent: parseFloat(parts[1])
                            });
                        }
                    });
                    tiers.sort((a, b)=>b.threshold - a.threshold);
                    if (tiers.length > 0) maxGreedyDiscount = tiers[0].percent;
                    let remaining = totalQty;
                    const dist = [];
                    while(remaining > 0){
                        const bestTier = tiers.find((t)=>t.threshold <= remaining);
                        if (bestTier) {
                            for(let k = 0; k < bestTier.threshold; k++)dist.push(bestTier.percent);
                            remaining -= bestTier.threshold;
                        } else {
                            for(let k = 0; k < remaining; k++)dist.push(0);
                            remaining = 0;
                        }
                    }
                    distribution = dist;
                }
                // 'More Than' Override
                if (moreThanRule) {
                    const parts = String(moreThanRule).split('-');
                    if (parts.length === 2) {
                        const threshold = parseFloat(parts[0]);
                        const discount = parseFloat(parts[1]);
                        if (totalQty > threshold && discount > maxGreedyDiscount) {
                            distribution = new Array(totalQty).fill(discount);
                        }
                    }
                }
                // Apply Distribution to Items
                // We must map the distribution to the items in order (to match Cart Sheet visual)
                let distributionIndex = 0;
                productItems.forEach((pItem)=>{
                    const sizeColoursCost = (pItem.selectedSizeColours || []).reduce((acc, a)=>acc + a.price, 0);
                    // LOGGING FOR DEBUGGING
                    console.log(`Cart Calc: ID=${pItem.id}, Price=${pItem.price}, AfterDiscount=${pItem.priceAfterDiscount}`);
                    let basePrice = pItem.priceAfterDiscount && pItem.priceAfterDiscount > 0 ? pItem.priceAfterDiscount : pItem.price;
                    // Fallback if basePrice is still 0/undefined/null (shouldn't happen if price is set, but safety first)
                    if (!basePrice || basePrice <= 0) basePrice = pItem.price;
                    // Note: Discount applies to (Base + SizeColours)
                    // CartSheet logic: singleItemTotal = basePrice + sizeColoursCost; finalTotal = singleItemTotal * qty * (1 - discountPercent / 100);
                    // So it applies to the SUM.
                    const itemBaseTotal = basePrice + sizeColoursCost;
                    for(let q = 0; q < pItem.quantity; q++){
                        const discountPercent = distribution[distributionIndex] || 0;
                        const discountedPrice = itemBaseTotal * (1 - discountPercent / 100);
                        grandTotal += discountedPrice;
                        distributionIndex++;
                    }
                });
            });
            return grandTotal;
        },
        getCartItemsCount: ()=>{
            return get().cart.reduce((total, item)=>total + item.quantity, 0);
        },
        isCartOpen: false,
        setCartOpen: (isOpen)=>set({
                isCartOpen: isOpen
            }),
        setCompanyDetails: (details)=>set({
                companyDetails: details
            }),
        checkExpiration: ()=>{
            const { timestamp } = get();
            const now = Date.now();
            if (now - timestamp > EXPIRATION_TIME) {
                // Expired, clear cart
                set({
                    cart: [],
                    timestamp: now
                });
            }
        },
        setCart: (newCart)=>{
            console.log('useCart: setCart called with', newCart);
            set({
                cart: newCart,
                timestamp: Date.now()
            });
        },
        clearCart: ()=>set({
                cart: [],
                timestamp: Date.now()
            })
    }), {
    name: 'cart-storage',
    // Ensure storage is only accessed on client side
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : sessionStorage),
    onRehydrateStorage: ()=>(state)=>{
            state?.checkExpiration();
        }
}));
}),
"[project]/src/hooks/use-product.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProduct",
    ()=>useProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const EXPIRATION_TIME = 7 * 60 * 1000; // 7 minutes
const useProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        products: [],
        categories: [],
        selectedProduct: null,
        categoryTimestamps: {},
        setProducts: (products)=>set((state)=>({
                    products: typeof products === 'function' ? products(state.products) : products
                })),
        setCategories: (categories)=>set((state)=>{
                const nextCategories = typeof categories === 'function' ? categories(state.categories) : categories;
                const nextProducts = nextCategories.flatMap((cat)=>(cat.catalogs || []).flatMap((c)=>c.products || [])).map((p)=>({
                        ...p,
                        imageHint: "",
                        imageUrl: p.productImage || ""
                    }));
                return {
                    categories: nextCategories,
                    products: nextProducts
                };
            }),
        setSelectedProduct: (selectedProduct)=>set({
                selectedProduct
            }),
        syncProductGlobally: (freshProd)=>{
            const { products, categories } = get();
            // 1. Sync in flat list
            const updatedProducts = products.map((p)=>p.id === freshProd.id ? freshProd : p);
            // 2. Sync in deep categories structure
            const updatedCategories = categories.map((cat)=>({
                    ...cat,
                    catalogs: cat.catalogs.map((catalog)=>({
                            ...catalog,
                            products: catalog.products.map((p)=>p.id === freshProd.id ? freshProd : p)
                        }))
                }));
            set({
                products: updatedProducts,
                categories: updatedCategories
            });
        },
        markCategoryAsFetched: (categoryId)=>set((state)=>({
                    categoryTimestamps: {
                        ...state.categoryTimestamps || {},
                        [categoryId]: Date.now()
                    }
                })),
        isCategoryExpired: (categoryId)=>{
            const { categoryTimestamps } = get();
            // Handle missing map (migration from old state)
            if (!categoryTimestamps) return true;
            const timestamp = categoryTimestamps[categoryId];
            if (!timestamp) return true; // Never fetched = Expired
            return Date.now() - timestamp > EXPIRATION_TIME;
        },
        checkExpiration: ()=>{
        // Deprecated or can be used to clean up map, but for now logic moves to usage sites
        }
    }), {
    name: 'product-storage',
    version: 2,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    skipHydration: true
}));
}),
"[project]/src/hooks/use-razorpay.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRazorpay",
    ()=>useRazorpay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const RAZORPAY_SCRIPT_URL = "https://checkout.razorpay.com/v1/checkout.js";
const useRazorpay = ()=>{
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Just check status on mount, don't inject
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const loadRazorpay = ()=>{
        return new Promise((resolve)=>{
            // Check if already loaded
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Check if script exists
            if (document.querySelector(`script[src="${RAZORPAY_SCRIPT_URL}"]`)) {
                // If it exists but window.Razorpay isn't ready, we might need to wait or it's loading.
                // For simplicity, we assume if script tag is there, it's handling itself, 
                // but we can add an onload listener to the existing script if needed.
                // However, usually we can just append a new listener or poll. 
                // Let's just create it if not present to be safe, or just resolve true if we think it's done.
                // Better safety:
                const existingScript = document.querySelector(`script[src="${RAZORPAY_SCRIPT_URL}"]`);
                if (existingScript) {
                    existingScript.addEventListener('load', ()=>{
                        setIsLoaded(true);
                        resolve(true);
                    });
                    return;
                }
            }
            const script = document.createElement("script");
            script.src = RAZORPAY_SCRIPT_URL;
            script.async = true;
            script.onload = ()=>{
                setIsLoaded(true);
                resolve(true);
            };
            script.onerror = ()=>{
                setIsLoaded(false);
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };
    return {
        isLoaded,
        loadRazorpay
    };
};
}),
"[project]/src/hooks/use-mobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/src/hooks/use-sheet-back-handler.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSheetBackHandler",
    ()=>useSheetBackHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function useSheetBackHandler(isOpen, onOpenChange) {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run on mobile
        if (!isMobile) return;
        if (isOpen) {
            // When sheet opens, push a new state to history
            // This allows the back button to "close" the sheet by popping this state
            window.history.pushState({
                sheetOpen: true
            }, "", window.location.href);
            const handlePopState = (event)=>{
                // When back button is pressed (popstate), close the sheet
                onOpenChange(false);
            };
            window.addEventListener("popstate", handlePopState);
            return ()=>{
                window.removeEventListener("popstate", handlePopState);
            // If the component unmounts or closes normally, we might need to cleanup the history state
            // But simply removing the listener is the main part. 
            // Note: If user closes via X button, we might be left with an extra history entry, 
            // but trying to go back programmatically here can be flaky. 
            // The standard pattern is usually sufficient: User presses back -> popstate -> close.
            // If User presses X -> normal close. History remains "forward-able" but that's okay web behavior.
            // A more aggressive cleanup would be: if (isOpen) router.back() -- but that causes loops.
            };
        }
    }, [
        isOpen,
        isMobile,
        onOpenChange
    ]);
}
}),
"[project]/src/hooks/use-auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useAuth() {
    const [auth, setAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isLoggedIn: false,
        userRole: null
    });
    const checkAuth = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkAuth(); // Initial check
        window.addEventListener('storage', checkAuth);
        window.addEventListener('auth-change', checkAuth);
        return ()=>{
            window.removeEventListener('storage', checkAuth);
            window.removeEventListener('auth-change', checkAuth);
        };
    }, []);
    const isOwner = auth.userRole?.includes('OWNER') || false;
    const isCustomer = auth.userRole?.includes('CUSTOMER') || false;
    return {
        isLoggedIn: auth.isLoggedIn,
        userRole: auth.userRole,
        isOwner,
        isCustomer
    };
}
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "resolveImageUrl",
    ()=>resolveImageUrl,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
"[project]/src/lib/placeholder-images.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"product-1\",\"description\":\"A jar of mango pickle\",\"imageUrl\":\"https://images.unsplash.com/photo-1617854307432-13950e24ba07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtYW5nbyUyMHBpY2tsZXxlbnwwfHx8fDE3Njc1MzE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mango pickle\"},{\"id\":\"product-2\",\"description\":\"A jar of lime pickle\",\"imageUrl\":\"https://images.unsplash.com/photo-1508910238952-0dfebf373ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bGltZSUyMHBpY2tsZXxlbnwwfHx8fDE3Njc1MzE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"lime pickle\"},{\"id\":\"product-3\",\"description\":\"A bowl of sweet mango chutney\",\"imageUrl\":\"https://images.unsplash.com/photo-1591465619339-60fce055bc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtYW5nbyUyMGNodXRuZXl8ZW58MHx8fHwxNzY3NTMxODM0fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mango chutney\"},{\"id\":\"product-4\",\"description\":\"A pair of jhumka earrings\",\"imageUrl\":\"https://images.unsplash.com/photo-1644613537735-a0226e8f865d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxqaHVta2ElMjBlYXJyaW5nc3xlbnwwfHx8fDE3Njc1MzE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"jhumka earrings\"},{\"id\":\"product-5\",\"description\":\"A pair of stud earrings\",\"imageUrl\":\"https://images.unsplash.com/photo-1761479258392-011cb2090063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzdHVkJTIwZWFycmluZ3N8ZW58MHx8fHwxNzY3NTMxODM0fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"stud earrings\"},{\"id\":\"product-6\",\"description\":\"A kundan necklace set\",\"imageUrl\":\"https://images.unsplash.com/photo-1625916036111-ae7bd8b353c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxrdW5kYW4lMjBuZWNrbGFjZXxlbnwwfHx8fDE3Njc1MzE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"kundan necklace\"},{\"id\":\"product-7\",\"description\":\"An anarkali suit\",\"imageUrl\":\"https://picsum.photos/seed/suit1/600/400\",\"imageHint\":\"anarkali suit\"},{\"id\":\"product-8\",\"description\":\"A cotton saree\",\"imageUrl\":\"https://images.unsplash.com/photo-1707782438650-d324025da296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjb3R0b24lMjBzYXJlZXxlbnwwfHx8fDE3Njc1MzE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cotton saree\"},{\"id\":\"product-9\",\"description\":\"A kurta pyjama set\",\"imageUrl\":\"https://images.unsplash.com/photo-1602907021769-9f2eba51d061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxrdXJ0YSUyMHB5amFtYXxlbnwwfHx8fDE3Njc1MzE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"kurta pyjama\"},{\"id\":\"product-10\",\"description\":\"An electric kettle\",\"imageUrl\":\"https://images.unsplash.com/photo-1643114786355-ff9e52736eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGtldHRsZXxlbnwwfHx8fDE3Njc0NzU4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"electric kettle\"},{\"id\":\"product-11\",\"description\":\"A portable bluetooth speaker\",\"imageUrl\":\"https://images.unsplash.com/photo-1547052178-7f2c5a20c332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxibHVldG9vdGglMjBzcGVha2VyfGVufDB8fHx8MTc2NzQzMTIwMXww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bluetooth speaker\"},{\"id\":\"product-12\",\"description\":\"A minimalist backpack\",\"imageUrl\":\"https://images.unsplash.com/photo-1765872551254-5e7c7a9bcd1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtaW5pbWFsaXN0JTIwYmFja3BhY2t8ZW58MHx8fHwxNzY3NDc1ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"minimalist backpack\"},{\"id\":\"product-13\",\"description\":\"Spicy chicken pickle\",\"imageUrl\":\"https://images.unsplash.com/photo-1550850584-455a131629e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2hpY2tlbiUyMHBpY2tsZXxlbnwwfHx8fDE3Njc1MzIwODd8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"chicken pickle\"},{\"id\":\"product-14\",\"description\":\"Tangy and spicy prawn pickle\",\"imageUrl\":\"https://images.unsplash.com/photo-1531170858071-90621b6d369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcmF3biUyMHBpY2tsZXxlbnwwfHx8fDE3Njc1MzIwODd8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"prawn pickle\"},{\"id\":\"product-15\",\"description\":\"Flavorful garlic pickle\",\"imageUrl\":\"https://images.unsplash.com/photo-1602141901597-dd9e5e5ae5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Z2FybGljJTIwcGlja2xlfGVufDB8fHx8MTc2NzUzMjcwNnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"garlic pickle\"},{\"id\":\"product-16\",\"description\":\"A mix of seasonal vegetables\",\"imageUrl\":\"https://images.unsplash.com/photo-1737049994922-176fa32bdb8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtaXhlZCUyMHZlZ2V0YWJsZSUyMHBpY2tsZXxlbnwwfHx8fDE3Njc1MzI3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mixed vegetable pickle\"},{\"id\":\"product-17\",\"description\":\"Hot and spicy chilli pickle\",\"imageUrl\":\"https://images.unsplash.com/photo-1695835394238-d3367fa34b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGlsbGklMjBwaWNrbGV8ZW58MHx8fHwxNzY3NTMyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"chilli pickle\"},{\"id\":\"product-18\",\"description\":\"Rich and spicy mutton pickle\",\"imageUrl\":\"https://images.unsplash.com/photo-1543280207-5f62a4c20be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtdXR0b24lMjBwaWNrbGV8ZW58MHx8fHwxNzY3NTMyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mutton pickle\"},{\"id\":\"product-19\",\"description\":\"Tangy fish pickle with spices\",\"imageUrl\":\"https://images.unsplash.com/photo-1531170858071-90621b6d369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxmaXNoJTIwcGlja2xlfGVufDB8fHx8MTc2NzUzMjcwNnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"fish pickle\"},{\"id\":\"product-20\",\"description\":\"Fresh coriander and mint chutney\",\"imageUrl\":\"https://images.unsplash.com/photo-1720276363063-b2872feaed88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb3JpYW5kZXIlMjBjaHV0bmV5fGVufDB8fHx8MTc2NzUzMjcwNnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"coriander chutney\"},{\"id\":\"product-21\",\"description\":\"Sweet and tangy tamarind chutney\",\"imageUrl\":\"https://images.unsplash.com/photo-1570989132960-573d921c8de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx0YW1hcmluZCUyMGNodXRuZXl8ZW58MHx8fHwxNzY3NTMyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"tamarind chutney\"},{\"id\":\"product-22\",\"description\":\"Aromatic blend of ground spices\",\"imageUrl\":\"https://images.unsplash.com/photo-1757802261964-a8e03ed98981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxnYXJhbSUyMG1hc2FsYXxlbnwwfHx8fDE3Njc1MjU3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"garam masala\"},{\"id\":\"product-23\",\"description\":\"Pure and authentic turmeric powder\",\"imageUrl\":\"https://images.unsplash.com/photo-1633881614907-8587c9b93c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0dXJtZXJpYyUyMHBvd2RlcnxlbnwwfHx8fDE3Njc0MzU1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"turmeric powder\"},{\"id\":\"product-24\",\"description\":\"Spicy red chilli powder\",\"imageUrl\":\"https://images.unsplash.com/photo-1684253188181-eebebe802311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjaGlsbGklMjBwb3dkZXJ8ZW58MHx8fHwxNzY3NDM1NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"chilli powder\"}]}"));}),
"[project]/src/lib/placeholder-images.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaceHolderImages",
    ()=>PlaceHolderImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
}),
"[project]/src/services/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "apiClient",
    ()=>apiClient
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080/api/v1/manaBuy-services';
let isRefreshing = false;
let refreshPromise = null;
async function apiClient(endpoint, options = {}) {
    const { params, _retry, ...fetchOptions } = options;
    const url = new URL(`${API_BASE_URL}${endpoint}`);
    // Defensive: Clean up potential double '?' if endpoint had one and params are added, 
    // or if the URL construction created something weird like '.../get??categoryId=' (User report)
    // Although URL object handles standard cases, manual string concatenation or specific backend behaviors might vary.
    // We rely on URL object, but we can verify param appending logic.
    if (params) {
        // Sort keys to ensure consistent URL for caching
        const sortedKeys = Object.keys(params).sort();
        sortedKeys.forEach((key)=>{
            const value = params[key];
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value));
            }
        });
    }
    // DEBUG: Check Next.js Cache Config
    // TOKEN HANDLING:
    // Get token from localStorage if on client
    let token = '';
    // Skip token for auth endpoints explicitly
    const isAuthEndpoint = endpoint.startsWith('/auth/');
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const isFormData = fetchOptions.body instanceof FormData;
    const headers = {
        "Accept": "application/json",
        ...fetchOptions.headers
    };
    if (!isFormData) {
        headers["Content-Type"] = "application/json";
    }
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const startTime = performance.now();
    let res;
    try {
        res = await fetch(url.toString(), {
            // credentials: "include", // 🔥 REMOVED: Using Bearer Token
            ...fetchOptions,
            headers
        });
    } catch (error) {
        console.error(`[API FATAL] Network Error at ${endpoint}:`, error?.cause || error);
        throw error;
    }
    const duration = performance.now() - startTime;
    // ✅ 401 Handling with Refresh Token
    if (res.status === 401 && !_retry) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        throw new Error("Session expired");
    }
    if (!res.ok) {
        console.error(`API Error: ${res.status} ${res.statusText} at ${endpoint}`);
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }
    const text = await res.text();
    try {
        // Handle empty or text responses gracefully
        return text ? JSON.parse(text) : {};
    } catch  {
        // If allow text, return text, else warning
        console.warn(`[API Client] Failed to parse JSON, returning text.`);
        return text;
    }
}
}),
"[project]/src/services/mappers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/services/product.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api-client.ts [app-ssr] (ecmascript)");
// ... existing imports
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mappers.ts [app-ssr] (ecmascript)");
;
;
// Helper to centralize products-by-category logic
async function fetchCategoryProductsAPI(categoryId, forceFresh = false) {
    const catIdStr = String(categoryId);
    // Defensive check
    if (!catIdStr || catIdStr === 'undefined' || catIdStr === 'null') return null;
    try {
        const catData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/company/public/get-products-by-category/get', {
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
            const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/category/public/get-all-by-company', {
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
                    const mappedCats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapApiCategoriesToAppCategories"])(Array.isArray(catData) ? catData : [
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
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/company/public/category/catalogue/product/get', {
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapApiCategoriesToAppCategories"])(data.categories || [], deliveryTime);
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}
async function fetchProductsByCategory(categoryId, deliveryTime, forceFresh = false) {
    const catData = await fetchCategoryProductsAPI(categoryId, forceFresh);
    if (!catData) return null;
    const mappedCats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapApiCategoriesToAppCategories"])(Array.isArray(catData) ? catData : [
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
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])(`/product/details/get`, {
            params: {
                productId
            },
            next: {
                revalidate: 0
            } // No cache for checkout validation
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapApiProductToAppProduct"])(data);
    } catch (error) {
        console.error(`Error fetching product ${productId}:`, error);
        return null;
    }
}
async function validateCheckout(payload) {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/product/checkout/check', {
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
"[project]/src/services/customer.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customerService",
    ()=>customerService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api-client.ts [app-ssr] (ecmascript)");
;
const CACHE_KEY = 'customer_details_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 60 minutes
const customerService = {
    async getCustomerDetails (forceRefresh = false) {
        let customerId = '';
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!customerId) return null;
        // Localhost bypass check
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!forceRefresh) {
            try {
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { timestamp, data, id } = JSON.parse(cached);
                    const isValid = Date.now() - timestamp < CACHE_DURATION && id === customerId;
                    if (isValid) {
                        console.log('[CACHE HIT] Serving customer details from cache');
                        return data;
                    }
                }
            } catch (e) {
                console.warn('Failed to parse customer cache', e);
            }
        }
        console.log('[CACHE MISS] Fetching fresh customer details');
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/customer/get-customer-and-address', {
            params: {
                customerId
            }
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return data;
    },
    async updateCustomer (data) {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/customer/update', {
            method: 'PUT',
            body: JSON.stringify(data)
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response;
    },
    async createAddress (data) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/customer/address/create', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    async updateAddress (data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/customer/address/update', {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
};
}),
"[project]/src/services/order.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "orderService",
    ()=>orderService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api-client.ts [app-ssr] (ecmascript)");
;
const orderService = {
    initializePayment: async (data, razorpayKeyId, razorpayKeySecret)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/payment-initialise', {
            method: 'POST',
            body: JSON.stringify(data),
            params: {
                razorpayKeyId,
                razorpayKeySecret
            },
            // No cache for payment initialization
            next: {
                revalidate: 0
            }
        });
    },
    verifyPayment: async (data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/payments/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            next: {
                revalidate: 0
            }
        });
    },
    saveOrder: async (data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/create', {
            method: 'POST',
            body: JSON.stringify(data),
            next: {
                revalidate: 0
            }
        });
    },
    createForSmePay: async (data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/create-for-smePay', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    createForCashFree: async (data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/create-for-cash-free', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    getPaymentStatus: async (orderId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])(`/order/payment-status?orderId=${orderId}`, {
            method: 'GET',
            next: {
                revalidate: 0
            }
        });
    },
    getCustomerOrders: async (customerId, forceRefresh = false)=>{
        const CACHE_KEY = `orders_cache_${customerId}`;
        const TIMESTAMP_KEY = `orders_timestamp_${customerId}`;
        const CACHE_DURATION = 3 * 60 * 60 * 1000; // 3 hours
        // 1. Try Cache (if not forced)
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // 2. Fetch Fresh Data (still keeping the revalidate tag for server-side correctness just in case)
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/customer/get', {
            params: {
                customerId
            },
            next: {
                revalidate: 60,
                tags: [
                    'orders'
                ]
            }
        });
        // 3. Save to Cache
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return data;
    },
    getCompanyOrdersByDate: async (companyId, date, forceRefresh = false)=>{
        // date format: YYYY-MM-DD
        const CACHE_KEY = `company_orders_${companyId}_${date}`;
        const TIMESTAMP_KEY = `company_orders_timestamp_${companyId}_${date}`;
        const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
        // 1. Try Cache (if not forced)
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // 2. Fetch Fresh Data
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/company/get-by-date', {
            params: {
                companyId,
                date
            },
            next: {
                revalidate: 300
            } // 5 minutes cache
        });
        // 3. Save to Cache
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return data;
    },
    getCompanyOrdersByRange: async (companyId, fromDate, toDate, forceRefresh = false)=>{
        const CACHE_KEY = `company_orders_${companyId}_${fromDate}_${toDate}`;
        const TIMESTAMP_KEY = `company_orders_timestamp_${companyId}_${fromDate}_${toDate}`;
        const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
        // 1. Try Cache (if not forced)
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // 2. Fetch Fresh Data
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/company/get-by-range', {
            params: {
                companyId,
                fromDate,
                toDate
            },
            next: {
                revalidate: 300
            }
        });
        // 3. Save to Cache
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return data;
    },
    updateOrderStatus: async (orderId, status)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/status/update', {
            params: {
                orderId,
                status
            },
            next: {
                revalidate: 0
            }
        });
    },
    getOrderById: async (orderId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/order/get-by-order-id', {
            params: {
                orderId
            },
            next: {
                revalidate: 0
            }
        });
    }
};
}),
"[project]/src/services/company.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCompanyDetails",
    ()=>fetchCompanyDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api-client.ts [app-ssr] (ecmascript)");
;
;
const fetchCompanyDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cache"])(async (companyDomain)=>{
    try {
        const isLocalhost = "undefined" !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') || ("TURBOPACK compile-time value", "development") === 'development' || !companyDomain || companyDomain.includes('localhost') || companyDomain.includes('127.0.0.1');
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("Dev Mode: Returning mock company details for domain:", companyDomain);
            return {
                companyId: "mock-company-id",
                companyName: "Tirumala Sarees",
                companyDomain: companyDomain || "localhost",
                companyPhone: "9988776655",
                companyMessage: "Welcome to Tirumala Sarees",
                companyEmail: "support@tirumalasarees.com",
                gstNumber: "GST123456789",
                logo: "",
                banner: "",
                companyCoupon: "WELCOME10&&&10,FESTIVE20&&&20",
                ownerName: "Owner Name",
                ownerEmail: "owner@tirumalasarees.com",
                companyStatus: "ACTIVE",
                ownerPhone: "9988776655",
                companyAddress: "123 Saree Lane",
                companyCity: "Hyderabad",
                companyState: "Telangana",
                companyPinCode: "500033",
                companyFssAi: "",
                companyProductCategory: "Sarees",
                deliveryBetween: "3-5 Days",
                companyEstDate: "2020-01-01",
                averageRating: 4.8,
                totalRating: 5,
                noOfRatings: 100,
                minimumOrderCost: "0",
                freeDeliveryCost: "5000",
                deliveryCost: "100",
                socialMediaLink: null,
                about: "Premium silk sarees from Kanchipuram and Banaras.",
                razorpayKeyId: "rzp_test_mock",
                razorpayKeySecret: "mock_secret",
                razorpay: true,
                smePay: false,
                cashFree: false,
                companyRegisteredAt: "2020-01-01",
                updatedAt: "2020-01-01"
            };
        }
        //TURBOPACK unreachable
        ;
        const data = undefined;
    } catch (error) {
        console.error('Error fetching company details:', error);
        return null;
    }
});
}),
"[project]/src/services/auth.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api-client.ts [app-ssr] (ecmascript)");
;
const authService = {
    async sendOtp (phone, waConfig) {
        // The API now expects a JSON payload with phone and WhatsApp config
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/auth/send-otp', {
            method: 'POST',
            body: JSON.stringify({
                phone,
                waPhoneNumId: waConfig.waPhoneNumId,
                waToken: waConfig.waToken,
                waOtpTemplateName: waConfig.waOtpTemplateName,
                companyName: waConfig.companyName,
                manaBuyCredentials: waConfig.manaBuyCredentials ?? false
            })
        });
        console.log("Send OTP Response:", response);
    },
    async login (phone, otp, companyDomain, manaBuyCredentials) {
        // companyDomain passed from context
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                phone,
                otp,
                companyDomain,
                manaBuyCredentials: manaBuyCredentials ?? false
            })
        });
        // Store Token
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response;
    },
    async logout () {
        let refreshToken = '';
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])('/auth/logout', {
            method: 'POST',
            body: JSON.stringify({
                refreshToken
            })
        });
    }
};
}),
"[project]/src/config/tenant-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CONFIG",
    ()=>DEFAULT_CONFIG,
    "resolveTenantConfig",
    ()=>resolveTenantConfig
]);
const DEFAULT_CONFIG = {
    id: "default",
    domain: "babaihomefoods",
    name: "Digi Turu",
    theme: {
        colors: {
            primary: "180 80% 35%",
            primaryForeground: "210 40% 98%",
            secondary: "210 20% 94%",
            background: "210 20% 98%"
        },
        radius: "0.5rem",
        fontFamily: "var(--font-poppins)",
        productCard: {
            backgroundColor: "hsl(var(--card))",
            radius: "1.5rem",
            shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            border: "1px solid hsl(var(--border) / 0.5)"
        },
        categoryFrame: 'circle',
        catalogueFrame: 'circle',
        productFrame: 'normal'
    },
    // Default Advanced Configs
    motion: {
        cardHover: "translateY(-4px) scale(1.01)",
        buttonTap: "scale(0.96)",
        pageEnter: "fade-up",
        duration: "300ms",
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    typography: {
        heading: {
            weight: "700",
            letterSpacing: "-0.02em",
            transform: "none"
        },
        productName: {
            weight: "500",
            letterSpacing: "-0.01em"
        },
        price: {
            weight: "600",
            tracking: "tight"
        },
        button: {
            uppercase: false,
            weight: "600"
        }
    },
    layout: {
        density: "comfortable",
        maxWidth: "1280px",
        gridGap: "1.5rem",
        sectionSpacing: "4rem"
    },
    surface: {
        header: "glass",
        footer: "minimal",
        productCardStyle: "elevated"
    },
    brandTone: {
        mood: "calm",
        cornerStyle: "soft",
        animationSpeed: "normal"
    },
    features: {
        enableWishlist: true,
        enableratings: true,
        showStockCount: true,
        enableStorePickup: false
    },
    text: {
        checkoutButton: "Checkout securely",
        emptyCartParams: "Discover our best sellers!",
        quickAddButton: "Quick Add",
        searchPlaceholder: "Search products, brands, and more...",
        startsFrom: "Starts from",
        heroTitle: "Taste of",
        heroTitleHighlight: "Tradition",
        heroDescription: "Handcrafted with passion, delivering authentic flavors straight to your doorstep."
    },
    fetchAllAtOnce: true,
    maxImageSizeMB: 2,
    categoryPage: false
};
const TENANT_MAP = {
    "use1": {
        id: "sk-fashions",
        name: "SK Fashions",
        fetchAllAtOnce: false,
        theme: {
            colors: {
                primary: "346 84% 61%",
                primaryForeground: "0 0% 100%",
                secondary: "340 20% 96%",
                background: "340 10% 99%"
            },
            radius: "1rem",
            fontFamily: "var(--font-outfit)",
            productCard: {
                backgroundColor: "white",
                radius: "1rem",
                shadow: "0 10px 30px -10px rgb(225 29 72 / 0.15)",
                border: "1px solid rgb(225 29 72 / 0.1)"
            },
            categoryFrame: 'circle',
            catalogueFrame: 'circle',
            productFrame: 'normal'
        },
        brandTone: {
            mood: "premium",
            cornerStyle: "soft",
            animationSpeed: "slow"
        },
        surface: {
            header: "glass",
            footer: "branded",
            productCardStyle: "elevated"
        },
        text: {
            checkoutButton: "Place Order",
            emptyCartParams: "Your wardrobe implies it needs an update!",
            quickAddButton: "Add to Bag",
            searchPlaceholder: "Search for latest trends...",
            startsFrom: "Starts at",
            heroTitle: "Redefine Your",
            heroTitleHighlight: "Style",
            heroDescription: "Explore our exclusive collection of Menswear and Womenswear designed for the modern you."
        },
        featuresList: [
            {
                title: "Trendsetting Styles",
                description: "Curated for the fashion-forward",
                icon: "Star",
                color: "text-rose-600",
                bgColor: "bg-rose-50",
                iconColor: "text-rose-600"
            },
            {
                title: "Premium Fabric",
                description: "Quality you can feel",
                icon: "ShieldCheck",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
                iconColor: "text-indigo-600"
            },
            {
                title: "Express Shipping",
                description: "Get your look in no time",
                icon: "Truck",
                color: "text-teal-600",
                bgColor: "bg-teal-50",
                iconColor: "text-teal-600"
            }
        ]
    },
    // Yellow Fashions (Signature Yellow, Premium)
    "sandhyacollections": {
        id: "Sandhya Collections",
        name: "Sandhya Collections",
        fetchAllAtOnce: false,
        maxImageSizeMB: 2,
        categoryPage: false,
        theme: {
            colors: {
                primary: "45 92% 55%",
                primaryForeground: "0 0% 0%",
                secondary: "225 35% 15%",
                background: "225 45% 10%",
                foreground: "210 40% 98%"
            },
            radius: "1.25rem",
            fontFamily: "var(--font-outfit)",
            productCard: {
                backgroundColor: "hsl(225 40% 14%)",
                radius: "1.25rem",
                shadow: "0 15px 40px -10px rgb(0 0 0 / 0.5)",
                border: "1px solid rgb(234 179 8 / 0.2)"
            },
            categoryFrame: 'circle',
            catalogueFrame: 'circle',
            productFrame: 'round'
        },
        layout: {
            density: "luxury",
            maxWidth: "1440px",
            gridGap: "2.5rem",
            sectionSpacing: "8rem"
        },
        brandTone: {
            mood: "premium",
            cornerStyle: "soft",
            animationSpeed: "slow"
        },
        surface: {
            header: "glass",
            footer: "branded",
            productCardStyle: "elevated"
        },
        typography: {
            heading: {
                weight: "900",
                letterSpacing: "-0.05em",
                transform: "none"
            },
            productName: {
                weight: "500",
                letterSpacing: "-0.01em"
            },
            price: {
                weight: "800",
                tracking: "tight"
            },
            button: {
                uppercase: true,
                weight: "700"
            }
        },
        text: {
            checkoutButton: "Checkout Order",
            emptyCartParams: "Brighten up your wardrobe!",
            quickAddButton: "Add to Bag",
            searchPlaceholder: "Search the collection...",
            startsFrom: "Starts at",
            heroTitle: "Exquisite",
            heroTitleHighlight: "Collection",
            heroDescription: "Elevate your everyday look with our signature best-inspired luxury fashion pieces."
        },
        seo: {
            title: "Sandhya Collections | Luxury Designer Fashion & Boutiques",
            description: "Discover exquisite luxury fashion at Sandhya Collections. Explore our curated range of signature designer wear, boutique styles, and high-fashion accessories.",
            keywords: [
                "sandhya collections",
                "sandhya collections vizag",
                "luxury fashion",
                "designer boutique",
                "Sandhya Collections",
                "boutique wear",
                "exclusive fashion"
            ],
            googleVerification: "T9rDVvjti5Rs6KYiUD7eTB7Vn92jerBNIgcrAScUUWA"
        },
        featuresList: [
            {
                title: "Signature Design",
                description: "Unique pieces that stand out",
                icon: "Sparkles",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50",
                iconColor: "text-yellow-600"
            },
            {
                title: "Exceptional Quality",
                description: "Craftsmanship in every stitch",
                icon: "Gem",
                color: "text-amber-600",
                bgColor: "bg-amber-50",
                iconColor: "text-amber-600"
            },
            {
                title: "Global Delivery",
                description: "Fashion delivered anywhere",
                icon: "Globe",
                color: "text-slate-600",
                bgColor: "bg-slate-50",
                iconColor: "text-slate-600"
            }
        ]
    },
    "ananthajewellers": {
        id: "Anantha Jewellers",
        name: "Anantha Jewellers",
        fetchAllAtOnce: false,
        maxImageSizeMB: 2,
        categoryPage: true,
        theme: {
            colors: {
                primary: "46 65% 52%",
                primaryForeground: "0 0% 0%",
                secondary: "0 0% 10%",
                background: "0 0% 0%",
                foreground: "0 0% 100%"
            },
            radius: "0px",
            fontFamily: "var(--font-playfair)",
            productCard: {
                backgroundColor: "#000000",
                radius: "0px",
                shadow: "none",
                border: "1px solid #D4AF37"
            },
            categoryFrame: 'square',
            catalogueFrame: 'square',
            productFrame: 'square'
        },
        features: {
            enableWishlist: true,
            enableratings: true,
            showStockCount: true,
            enableStorePickup: true
        },
        brandTone: {
            mood: "premium",
            cornerStyle: "sharp",
            animationSpeed: "slow"
        },
        surface: {
            header: "glass",
            footer: "dark",
            productCardStyle: "glass"
        },
        typography: {
            heading: {
                weight: "600",
                letterSpacing: "0.02em",
                transform: "uppercase"
            },
            productName: {
                weight: "400",
                letterSpacing: "0"
            },
            price: {
                weight: "700",
                tracking: "wider"
            },
            button: {
                uppercase: true,
                weight: "600"
            }
        },
        motion: {
            cardHover: "translateY(-1px)",
            buttonTap: "scale(0.98)",
            duration: "500ms",
            easing: "ease-in-out",
            pageEnter: "fade-in"
        },
        text: {
            checkoutButton: "Secure Checkout",
            emptyCartParams: "Your jewelry box is empty.",
            quickAddButton: "Add to Bag",
            searchPlaceholder: "Search collections...",
            startsFrom: "Begins at",
            heroTitle: "Timeless",
            heroTitleHighlight: "Elegance",
            heroDescription: "Discover handcrafted purity and intricate heritage designs made for a lifetime of memories."
        },
        seo: {
            title: "Anantha Jewellers | Exquisite Gold & Heritage Jewelry",
            description: "Discover the finest handcrafted gold jewelry at Anantha Jewellers. Heirloom pieces, bridal collections, and master artisan designs since generations.",
            keywords: [
                "Anantha",
                "anantha jewellers narasaraopet",
                "gold jewelry",
                "anantha jewellers",
                "heritage jewelry",
                "Indian jewelry boutique",
                "handcrafted gold"
            ],
            googleVerification: "DnT_FmQE40jrJ-YeuK0YRe4FhQsANbvMbiB0WeiSqQs"
        },
        featuresList: [
            {
                title: "Latest Designs",
                description: "Picked Latest designs by experts",
                icon: "Gem",
                color: "text-amber-800",
                bgColor: "bg-amber-100",
                iconColor: "text-amber-800"
            },
            {
                title: "Heritage Craft",
                description: "Made by master artisans",
                icon: "Crown",
                color: "text-amber-800",
                bgColor: "bg-amber-100",
                iconColor: "text-amber-800"
            },
            {
                title: "Lifetime Care",
                description: "Complimentary maintenance",
                icon: "Heart",
                color: "text-rose-800",
                bgColor: "bg-rose-100",
                iconColor: "text-rose-800"
            }
        ]
    },
    // 2. Midnight Tech (Dark, Cyberpunk)
    "midnighttech.store": {
        id: "midnight-tech",
        name: "Midnight Tech",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "262 80% 50%",
                primaryForeground: "0 0% 100%",
                secondary: "240 10% 15%",
                background: "220 30% 12%",
                foreground: "0 0% 100%"
            },
            radius: "2px",
            fontFamily: "var(--font-inter)",
            productCard: {
                backgroundColor: "hsl(220 30% 16%)",
                radius: "4px",
                shadow: "0 0 15px rgb(124 58 237 / 0.2)",
                border: "1px solid rgb(124 58 237 / 0.5)"
            },
            categoryFrame: 'square',
            catalogueFrame: 'square',
            productFrame: 'square'
        },
        motion: {
            cardHover: "translateY(-2px) scale(1.02)",
            buttonTap: "scale(0.98)",
            pageEnter: "fade-in",
            duration: "150ms",
            easing: "steps(4)"
        },
        typography: {
            heading: {
                weight: "800",
                letterSpacing: "0.05em",
                transform: "uppercase"
            },
            productName: {
                weight: "600",
                letterSpacing: "0.02em"
            },
            price: {
                weight: "700",
                tracking: "widest"
            },
            button: {
                uppercase: true,
                weight: "700"
            }
        },
        surface: {
            header: "solid",
            footer: "dark",
            productCardStyle: "outlined"
        },
        text: {
            checkoutButton: "Secure Hardware",
            emptyCartParams: "System integrity: Empty.",
            quickAddButton: "Initialize",
            searchPlaceholder: "Command: Search...",
            startsFrom: "Base Model:"
        }
    },
    // 3. Sweet Treats (Pink, Playful)
    "intihomefoods": {
        id: "sweet-treats",
        name: "Sweet Treats",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "330 85% 60%",
                primaryForeground: "0 0% 100%",
                secondary: "330 100% 96%",
                background: "330 30% 98%"
            },
            radius: "1.5rem",
            fontFamily: "var(--font-poppins)",
            productCard: {
                backgroundColor: "white",
                radius: "2rem",
                shadow: "0 10px 15px -3px rgb(236 72 153 / 0.2)",
                border: "2px dashed rgb(236 72 153 / 0.5)"
            }
        },
        motion: {
            cardHover: "translateY(-8px) rotate(1deg)",
            buttonTap: "scale(0.9)",
            pageEnter: "fade-up",
            duration: "400ms",
            easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)" // Bouncy
        },
        layout: {
            density: "comfortable",
            maxWidth: "1200px",
            gridGap: "2rem",
            sectionSpacing: "5rem"
        },
        text: {
            checkoutButton: "Get My Goodies",
            emptyCartParams: "No treats yet? 🍬",
            quickAddButton: "Grab it!",
            searchPlaceholder: "Find your cravings...",
            startsFrom: "Treats from",
            heroTitle: "Taste of",
            heroTitleHighlight: "Tradition",
            heroDescription: "Handcrafted with passion, delivering authentic flavors straight to your doorstep."
        }
    },
    // 4. Urban Sneakers (Monochrome, Streetwear)
    "urbansneakers.com": {
        id: "urban-sneakers",
        name: "Urban Sneakers",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "0 0% 0%",
                primaryForeground: "0 0% 100%",
                secondary: "0 0% 93%",
                background: "0 0% 95%"
            },
            radius: "0px",
            fontFamily: "var(--font-inter)",
            productCard: {
                backgroundColor: "white",
                radius: "0px",
                shadow: "none",
                border: "1px solid black"
            }
        },
        layout: {
            density: "compact",
            maxWidth: "1600px",
            gridGap: "1rem",
            sectionSpacing: "2rem"
        },
        surface: {
            header: "solid",
            footer: "dark",
            productCardStyle: "flat"
        },
        text: {
            checkoutButton: "COP NOW",
            emptyCartParams: "Cart is empty.",
            quickAddButton: "ADD +",
            searchPlaceholder: "SEARCH DROPS",
            startsFrom: "MIN:"
        }
    },
    // 5. Royal Gold (Luxury, Serif)
    "royalgold.jewelry": {
        id: "royal-gold",
        name: "Royal Gold",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "45 90% 45%",
                primaryForeground: "0 0% 100%",
                secondary: "45 20% 90%",
                background: "40 20% 97%"
            },
            radius: "2px",
            fontFamily: "var(--font-playfair)",
            productCard: {
                backgroundColor: "white",
                radius: "2px",
                shadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
                border: "none"
            }
        },
        layout: {
            density: "luxury",
            maxWidth: "1100px",
            gridGap: "3rem",
            sectionSpacing: "6rem"
        },
        motion: {
            duration: "600ms",
            easing: "ease-out",
            cardHover: "translateY(-2px)",
            buttonTap: "scale(0.99)",
            pageEnter: "fade-in"
        },
        features: {
            enableWishlist: true,
            enableratings: false,
            showStockCount: false
        },
        text: {
            checkoutButton: "Request Consultation",
            emptyCartParams: "Your selection is empty.",
            quickAddButton: "Select",
            searchPlaceholder: "Search collection...",
            startsFrom: "Beginning at"
        }
    },
    // 6. Spicy Bites (Red, Food)
    "spicybites.food": {
        id: "spicy-bites",
        name: "Spicy Bites",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "10 80% 50%",
                primaryForeground: "0 0% 100%",
                secondary: "20 50% 96%",
                background: "15 30% 98%"
            },
            radius: "0.75rem",
            fontFamily: "var(--font-poppins)",
            productCard: {
                backgroundColor: "white",
                radius: "1rem",
                shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                border: "none"
            }
        },
        text: {
            checkoutButton: "Order Now",
            emptyCartParams: "Hungry? Add something tasty!",
            quickAddButton: "Add +",
            searchPlaceholder: "Search menu...",
            startsFrom: "From"
        }
    },
    // 7. Ocean Blue (Calm, Water)
    "oceanblue.water": {
        id: "ocean-blue",
        name: "Ocean Blue",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "200 90% 40%",
                primaryForeground: "0 0% 100%",
                secondary: "200 50% 96%",
                background: "200 30% 96%"
            },
            radius: "1.2rem",
            fontFamily: "var(--font-poppins)",
            productCard: {
                backgroundColor: "white",
                radius: "1.2rem",
                shadow: "0 4px 6px -1px rgb(56 189 248 / 0.2)",
                border: "1px solid rgb(56 189 248 / 0.2)"
            }
        },
        text: {
            checkoutButton: "Get Hydrated",
            emptyCartParams: "Please add items.",
            quickAddButton: "Add",
            searchPlaceholder: "Search catalog...",
            startsFrom: "From"
        }
    },
    // 8. Minimalist Home (Gray, Clean)
    "minimalhome.decor": {
        id: "minimal-home",
        name: "Minimal Home",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "0 0% 40%",
                primaryForeground: "0 0% 100%",
                secondary: "0 0% 95%",
                background: "0 0% 98%"
            },
            radius: "4px",
            fontFamily: "var(--font-inter)",
            productCard: {
                backgroundColor: "#ffffff",
                radius: "4px",
                shadow: "none",
                border: "none"
            }
        },
        layout: {
            density: "luxury",
            maxWidth: "1400px",
            gridGap: "4rem",
            sectionSpacing: "4rem"
        },
        text: {
            checkoutButton: "Purchase",
            emptyCartParams: "Space available.",
            quickAddButton: "Add",
            searchPlaceholder: "Search...",
            startsFrom: "Start:"
        }
    },
    // 9. Kids Zone (Purple/Yellow, Fun)
    "kidzone.toys": {
        id: "kid-zone",
        name: "Kid Zone",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "270 90% 60%",
                primaryForeground: "0 0% 100%",
                secondary: "50 90% 60%",
                background: "50 100% 96%"
            },
            radius: "1.5rem",
            fontFamily: "var(--font-poppins)",
            productCard: {
                backgroundColor: "white",
                radius: "2rem",
                shadow: "4px 4px 0px 0px #FCD34D",
                border: "2px solid #FCD34D"
            }
        },
        motion: {
            cardHover: "rotate(2deg) scale(1.05)",
            buttonTap: "scale(0.9) rotate(-2deg)",
            duration: "300ms",
            easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            pageEnter: "zoom-in"
        },
        text: {
            checkoutButton: "Let's Play!",
            emptyCartParams: "Toy box is empty!",
            quickAddButton: "I want this!",
            searchPlaceholder: "Search for toys...",
            startsFrom: "Just"
        }
    },
    // 10. Classic Books (Brown, Serif)
    "classicbooks.read": {
        id: "classic-books",
        name: "Classic Books",
        fetchAllAtOnce: true,
        theme: {
            colors: {
                primary: "25 30% 30%",
                primaryForeground: "0 0% 100%",
                secondary: "35 30% 90%",
                background: "35 25% 94%"
            },
            radius: "4px",
            fontFamily: "var(--font-playfair)",
            productCard: {
                backgroundColor: "#fffdf5",
                radius: "2px",
                shadow: "0 2px 4px rgb(0 0 0 / 0.1)",
                border: "1px solid #e5e5e5"
            }
        },
        typography: {
            heading: {
                weight: "600",
                letterSpacing: "0",
                transform: "none"
            },
            productName: {
                weight: "700",
                letterSpacing: "0"
            },
            price: {
                weight: "400",
                tracking: "normal"
            },
            button: {
                uppercase: true,
                weight: "500"
            }
        },
        text: {
            checkoutButton: "Checkout",
            emptyCartParams: "Your reading list is empty.",
            quickAddButton: "Add to Shelf",
            searchPlaceholder: "Search titles...",
            startsFrom: "Price:"
        }
    },
    // Existing Clients
    "skfashions": {
        id: "skfashions",
        name: "SK Fashions",
        fetchAllAtOnce: true,
        maxImageSizeMB: 2,
        theme: {
            colors: {
                primary: "180 80% 35%",
                primaryForeground: "210 40% 98%",
                secondary: "210 20% 94%",
                background: "210 20% 98%"
            },
            categoryFrame: 'circle',
            catalogueFrame: 'circle',
            productFrame: 'round',
            radius: "0.5rem",
            fontFamily: "var(--font-poppins)",
            productCard: {
                backgroundColor: "hsl(var(--card))",
                radius: "1.5rem",
                shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                border: "1px solid hsl(var(--border) / 0.5)"
            }
        },
        text: {
            checkoutButton: "Checkout securely",
            emptyCartParams: "Discover our best sellers!",
            quickAddButton: "Quick Add",
            searchPlaceholder: "Search products, brands, and more...",
            startsFrom: "Starts from"
        }
    },
    // Tirumala Sarees
    "tirumalasarees": {
        id: "Tirumala Sarees",
        name: "Tirumala Sarees",
        fetchAllAtOnce: false,
        maxImageSizeMB: 2,
        categoryPage: false,
        theme: {
            colors: {
                primary: "350 90% 30%",
                primaryForeground: "0 0% 100%",
                secondary: "0 0% 95%",
                background: "0 0% 100%",
                foreground: "0 0% 10%"
            },
            radius: "0px",
            fontFamily: "font-body",
            productCard: {
                backgroundColor: "white",
                radius: "0px",
                shadow: "none",
                border: "1px solid #f2f2f2"
            },
            categoryFrame: 'square',
            catalogueFrame: 'square',
            productFrame: 'square'
        },
        layout: {
            density: "comfortable",
            maxWidth: "1440px",
            gridGap: "1.5rem",
            sectionSpacing: "4rem"
        },
        brandTone: {
            mood: "premium",
            cornerStyle: "sharp",
            animationSpeed: "normal"
        },
        surface: {
            header: "solid",
            footer: "branded",
            productCardStyle: "flat",
            productCardLayout: "saree"
        },
        typography: {
            heading: {
                weight: "700",
                letterSpacing: "0.02em",
                transform: "none"
            },
            productName: {
                weight: "700",
                letterSpacing: "0.02em"
            },
            price: {
                weight: "700",
                tracking: "normal"
            },
            button: {
                uppercase: true,
                weight: "600"
            }
        },
        text: {
            checkoutButton: "BUY NOW",
            emptyCartParams: "Find your perfect saree.",
            quickAddButton: "SHOP NOW",
            searchPlaceholder: "Search here...",
            startsFrom: "Price:",
            heroTitle: "Celebrating",
            heroTitleHighlight: "Timeless Heritage",
            heroDescription: "Discover the luxury of handcrafted heritage weaves, curated for modern elegance."
        }
    },
    // 12. Localhost
    "localhost:3000": {
        fetchAllAtOnce: true
    }
};
function resolveTenantConfig(domain) {
    const normalizedDomain = domain === 'localhost' || domain === 'bavahomefoods' || domain === 'babaihomefoods' || domain === 'default' || domain === 'sareescollections' ? 'tirumalasarees' : domain;
    const specificConfig = TENANT_MAP[normalizedDomain] || {};
    const baseTheme = {
        ...DEFAULT_CONFIG.theme,
        ...specificConfig.theme || {},
        colors: {
            ...DEFAULT_CONFIG.theme.colors,
            ...specificConfig.theme?.colors || {}
        },
        productCard: {
            ...DEFAULT_CONFIG.theme.productCard,
            ...specificConfig.theme?.productCard || {}
        }
    };
    // Recursive merge for deep objects (simplified for now, assuming 1-level deep overrides or replace)
    // For advanced properties, spreading is usually safer for granular overrides if implemented deeply.
    // For now, simple spread works if tenants provide full objects or we accept replacing the whole block.
    // To allow partial overrides, we should do:
    const resolveMotion = {
        ...DEFAULT_CONFIG.motion,
        ...specificConfig.motion || {}
    };
    const resolveTypography = {
        ...DEFAULT_CONFIG.typography,
        ...specificConfig.typography,
        heading: {
            ...DEFAULT_CONFIG.typography?.heading,
            ...specificConfig.typography?.heading
        },
        productName: {
            ...DEFAULT_CONFIG.typography?.productName,
            ...specificConfig.typography?.productName
        },
        price: {
            ...DEFAULT_CONFIG.typography?.price,
            ...specificConfig.typography?.price
        },
        button: {
            ...DEFAULT_CONFIG.typography?.button,
            ...specificConfig.typography?.button
        }
    };
    const resolveLayout = {
        ...DEFAULT_CONFIG.layout,
        ...specificConfig.layout || {}
    };
    const resolveSurface = {
        ...DEFAULT_CONFIG.surface,
        ...specificConfig.surface || {}
    };
    const resolveBrandTone = {
        ...DEFAULT_CONFIG.brandTone,
        ...specificConfig.brandTone || {}
    };
    return {
        ...DEFAULT_CONFIG,
        ...specificConfig,
        domain,
        theme: baseTheme,
        motion: resolveMotion,
        typography: resolveTypography,
        layout: resolveLayout,
        surface: resolveSurface,
        brandTone: resolveBrandTone,
        features: {
            ...DEFAULT_CONFIG.features,
            ...specificConfig.features || {}
        },
        featuresList: specificConfig.featuresList,
        text: {
            ...DEFAULT_CONFIG.text,
            ...specificConfig.text || {}
        },
        categoryPage: specificConfig.categoryPage !== undefined ? specificConfig.categoryPage : DEFAULT_CONFIG.categoryPage
    };
}
}),
"[project]/src/providers/QueryProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function QueryProvider({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    staleTime: 10 * 60 * 1000,
                    gcTime: 15 * 60 * 1000
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/QueryProvider.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_0ed060e7._.js.map