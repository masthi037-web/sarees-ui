(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/cart/CartSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartSheet",
    ()=>CartSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-product.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/product.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-cart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$customer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/customer.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/order.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$razorpay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-razorpay.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$company$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/company.service.ts [app-client] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cashfreepayments$2f$cashfree$2d$js$2f$dist$2f$script$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cashfreepayments/cashfree-js/dist/script.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/TenantContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sheet$2d$back$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-sheet-back-handler.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
;
;
;
;
const CheckoutProgressBar = (param)=>{
    let { currentView } = param;
    let stepIndex = 0;
    if (currentView === 'list' || currentView === 'add') {
        stepIndex = 1;
    } else if (currentView === 'payment') {
        stepIndex = 2;
    }
    // Determine position percentage of the truck
    const percentage = stepIndex === 0 ? 0 : stepIndex === 1 ? 50 : 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-6 py-4 bg-muted/20 border-b border-border/30 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-6 mt-1 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 right-0 h-1 bg-border/40 rounded-full border-t border-dashed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-accent transition-all duration-1000 ease-in-out rounded-full",
                        style: {
                            width: "".concat(percentage, "%")
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 -translate-x-1/2 flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10", stepIndex >= 0 ? "bg-background border-primary text-primary shadow-[0_0_12px_rgba(var(--primary),0.2)]" : "bg-background border-muted text-muted-foreground"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 113,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10", stepIndex >= 1 ? "bg-background border-primary text-primary shadow-[0_0_12px_rgba(var(--primary),0.2)]" : "bg-background border-muted text-muted-foreground"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 translate-x-1/2 flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10", stepIndex >= 2 ? "bg-background border-primary text-primary shadow-[0_0_12px_rgba(var(--primary),0.2)]" : "bg-background border-muted text-muted-foreground"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1.5 transition-all duration-1000 ease-in-out z-20",
                        style: {
                            left: "".concat(percentage, "%"),
                            transform: "translateX(-50%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary text-primary-foreground p-1.5 rounded-full shadow-lg border border-white/20 animate-bounce flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 142,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/CartSheet.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-3 text-[9px] font-black uppercase tracking-wider text-muted-foreground/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(stepIndex === 0 ? "text-primary font-black" : "text-muted-foreground/80"),
                        children: "Cart"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(stepIndex === 1 ? "text-primary font-black" : "text-muted-foreground/80"),
                        children: "Address"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(stepIndex === 2 ? "text-primary font-black" : "text-muted-foreground/80"),
                        children: "Payment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/CartSheet.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/CartSheet.tsx",
        lineNumber: 94,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CheckoutProgressBar;
function CartSheet(param) {
    let { children } = param;
    var _smePayData_intents, _smePayData_intents1, _smePayData_intents2;
    _s();
    const { cart, updateQuantity, removeFromCart, getCartTotal, getCartItemsCount, isCartOpen, setCartOpen, companyDetails, lastAddedItemId, clearCart, setCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { isLoaded: isRazorpayLoaded, loadRazorpay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$razorpay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRazorpay"])();
    // Handle back button on mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sheet$2d$back$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSheetBackHandler"])(isCartOpen, setCartOpen);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { text, theme, features } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [celebrated, setCelebrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bulkCelebrated, setBulkCelebrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFreeDeliveryPopup, setShowFreeDeliveryPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCouponPopup, setShowCouponPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQrPopup, setShowQrPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExitConfirmation, setShowExitConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [smePayData, setSmePayData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Timer Logic for QR
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(300); // 5 minutes
    const [isPolling, setIsPolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cashfree Polling State
    const [cashfreeOrderId, setCashfreeOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCashfreePolling, setIsCashfreePolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            let timer;
            if (showQrPopup && timeLeft > 0) {
                timer = setInterval({
                    "CartSheet.useEffect": ()=>{
                        setTimeLeft({
                            "CartSheet.useEffect": (prev)=>prev - 1
                        }["CartSheet.useEffect"]);
                    }
                }["CartSheet.useEffect"], 1000);
            } else if (showQrPopup && timeLeft === 0 && smePayData) {
                // Timeout reached!
                toast({
                    variant: "destructive",
                    title: "Payment Timeout",
                    description: "Payment time limit reached."
                });
                setShowQrPopup(false);
                setSmePayData(null);
                setView('failed');
                setTimeLeft(300);
                setIsPolling(false);
            } else if (!showQrPopup) {
                // Reset when closed
                setTimeLeft(300); // Reset to 5:00
                setIsPolling(false);
            }
            return ({
                "CartSheet.useEffect": ()=>clearInterval(timer)
            })["CartSheet.useEffect"];
        }
    }["CartSheet.useEffect"], [
        showQrPopup,
        timeLeft,
        smePayData,
        toast
    ]);
    const [isPickup, setIsPickup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [extraDiscount, setExtraDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const formatTime = (seconds)=>{
        const totalSeconds = Math.max(0, seconds);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return "".concat(mins, " : ").concat(secs.toString().padStart(2, '0'));
    };
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(amount);
    };
    // Track initial render to prevent confetti on reload
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    // Calculate Product Quantities (ID-based) and associate Rules
    const productQuantities = {};
    const productRules = {};
    cart.forEach((item)=>{
        productQuantities[item.id] = (productQuantities[item.id] || 0) + item.quantity;
        if (item.multipleSetDiscount) {
            productRules[item.id] = item.multipleSetDiscount.trim();
        }
    });
    // Pre-calculate Discount Distribution Map for each item UNIT
    // Key: CartItemId -> Value: Array of percentages for each unit in that item [15, 0]
    // We map by CartItemId to handle multiple variants of same product correctly
    const itemDiscountMap = {};
    Object.keys(productQuantities).forEach((productId)=>{
        const totalQty = productQuantities[productId];
        const ruleKey = productRules[productId];
        const productItemForRule = cart.find((i)=>i.id.toString() === productId);
        const moreThanRule = productItemForRule === null || productItemForRule === void 0 ? void 0 : productItemForRule.multipleDiscountMoreThan;
        let allUnits = [];
        cart.filter((i)=>i.id.toString() === productId).forEach((item)=>{
            for(let k = 0; k < item.quantity; k++){
                allUnits.push({
                    price: item.price,
                    cartItemId: item.cartItemId,
                    indexInItem: k
                });
            }
        });
        // 2. Sort Units by Price DESCENDING (User Request: Apply offer to max price items)
        allUnits.sort((a, b)=>b.price - a.price);
        // 3. Calculate Discount Tiers based on TOTAL quantity
        let discountsToApply = [];
        // Logic A: Tiers
        let greedyDiscounts = [];
        let maxGreedyDiscount = 0;
        if (ruleKey) {
            const segments = String(ruleKey).split('&&&');
            const tiers = [];
            segments.forEach((seg)=>{
                const parts = String(seg).split('-');
                if (parts.length === 2) {
                    const t = parseFloat(parts[0]);
                    const p = parseFloat(parts[1]);
                    if (!isNaN(t) && !isNaN(p)) {
                        tiers.push({
                            threshold: t,
                            percent: p
                        });
                    }
                }
            });
            tiers.sort((a, b)=>b.threshold - a.threshold);
            if (tiers.length > 0) maxGreedyDiscount = tiers[0].percent;
            let remaining = totalQty;
            while(remaining > 0){
                const bestTier = tiers.find((t)=>t.threshold <= remaining);
                if (bestTier) {
                    for(let k = 0; k < bestTier.threshold; k++){
                        greedyDiscounts.push(bestTier.percent);
                    }
                    remaining -= bestTier.threshold;
                } else {
                    for(let k = 0; k < remaining; k++){
                        greedyDiscounts.push(0);
                    }
                    remaining = 0;
                }
            }
        } else {
            greedyDiscounts = new Array(totalQty).fill(0);
        }
        // Logic B: More Than Override
        discountsToApply = greedyDiscounts;
        if (moreThanRule) {
            const parts = String(moreThanRule).split('-');
            if (parts.length === 2) {
                const threshold = parseFloat(parts[0]);
                const discount = parseFloat(parts[1]);
                if (!isNaN(threshold) && !isNaN(discount) && totalQty > threshold) {
                    if (discount > maxGreedyDiscount) {
                        discountsToApply = new Array(totalQty).fill(discount);
                    }
                }
            }
        }
        // 4. Assign calculated discounts to sorted units
        // Since both arrays are length = totalQty, index matching works
        allUnits.forEach((unit, idx)=>{
            const discountPercent = discountsToApply[idx] || 0;
            if (!itemDiscountMap[unit.cartItemId]) {
                itemDiscountMap[unit.cartItemId] = [];
            }
        // We can't just push because loop order might differ from original item indexing if we mixed items
        // But we stored cartItemId. We need to store it in a way that we can retrieve it by index.
        // Actually, itemDiscountMap needs to be sorted by indexInItem ultimately?
        // array[unit.indexInItem] = discount
        // Initialize if needed (though we might not know total size here efficiently without pre-alloc)
        // safer to push to a temp object keyed by "cartItemId-index"
        });
        // Re-map cleanly
        const tempMap = {};
        allUnits.forEach((unit, idx)=>{
            const discountPercent = discountsToApply[idx];
            if (!tempMap[unit.cartItemId]) tempMap[unit.cartItemId] = [];
            // We need to place it at the correct index for that item
            tempMap[unit.cartItemId][unit.indexInItem] = discountPercent;
        });
        // Merge to main map
        Object.keys(tempMap).forEach((k)=>{
            itemDiscountMap[k] = tempMap[k];
        });
    });
    const productDiscounts = itemDiscountMap; // Alias for compatibility with existing render logic
    // We used to assume distribution was uniform or order didn't matter per item.
    // NOW it matters per Item.
    // I will need to update the Consumer logic too.
    // Let's keep productDiscounts as is BUT... wait, the logic below (lines 183+) iterates cart items.
    // If I change the key to cartItemId, I need to update the consumption.
    // Let's check lines 868+ (in render).
    // It likely does: const discounts = productDiscounts[item.id];
    // If I have 2 different items (variants) of same product, they share the pool.
    // Previous logic: productDiscounts[item.id] returned an array of length TotalQty.
    // The render loop likely sliced this array based on index?
    // Let's check the render logic. I'll read the file around line 900-1100 to be safe.
    const hasBulkDiscount = Object.keys(productDiscounts).some((k)=>productDiscounts[k].some((p)=>p > 0));
    // Bulk Discount Celebration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            if (!isFirstRender.current && hasBulkDiscount && !bulkCelebrated && isCartOpen) {
                const end = Date.now() + 1500;
                const colors = [
                    '#059669',
                    '#34D399',
                    '#A7F3D0'
                ]; // Emerald/Green theme
                (function frame() {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 2,
                        angle: 60,
                        spread: 55,
                        origin: {
                            x: 0
                        },
                        colors: colors,
                        zIndex: 9999
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 2,
                        angle: 120,
                        spread: 55,
                        origin: {
                            x: 1
                        },
                        colors: colors,
                        zIndex: 9999
                    });
                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                })();
                setBulkCelebrated(true);
                toast({
                    title: "Bulk Discount Unlocked! 🎉",
                    description: "You've saved big with our bulk offers.",
                    className: "bg-primary/10 border-emerald-200 text-emerald-800"
                });
            }
        }
    }["CartSheet.useEffect"], [
        hasBulkDiscount,
        bulkCelebrated,
        isCartOpen
    ]);
    // Validation State
    const [isCheckingOut, setIsCheckingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showValidationPopup, setShowValidationPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validatedCart, setValidatedCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stockConflicts, setStockConflicts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showConflictPopup, setShowConflictPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let blockingChanges = false;
    const changes = [];
    const uniqueMessages = new Set();
    const pushChange = (msg, cartItemId)=>{
        if (!uniqueMessages.has(msg)) {
            uniqueMessages.add(msg);
            changes.push({
                message: msg,
                cartItemId
            });
        }
    };
    {}
    {
        showValidationPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-background w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 slide-in-from-bottom-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-500/10 p-6 flex flex-col items-center text-center border-b border-amber-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-3 text-amber-600 dark:text-amber-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 470,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 469,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-foreground",
                                children: "Cart Updated"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 472,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "Some items have changed since you added them."
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 473,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 468,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 max-h-[200px] overflow-y-auto pr-2",
                                children: validationErrors.map((err, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-sm border-l-2 border-amber-500 pl-3 py-1 text-muted-foreground flex items-start justify-between gap-2 bg-amber-50/50 dark:bg-amber-950/10 rounded-r-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: err.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 480,
                                                columnNumber: 37
                                            }, this),
                                            err.cartItemId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10 -mt-0.5 shrink-0",
                                                onClick: ()=>{
                                                    removeFromCart(err.cartItemId);
                                                    setValidationErrors((prev)=>prev.filter((_, idx)=>idx !== i));
                                                    // If no errors left, close popup (optional, or keep open to review others)
                                                    if (validationErrors.length <= 1) setShowValidationPopup(false);
                                                },
                                                title: "Remove item from cart",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 482,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 479,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 477,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full",
                                onClick: ()=>setShowValidationPopup(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "mr-2 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 502,
                                        columnNumber: 29
                                    }, this),
                                    "Review & Continue"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 501,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 476,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/CartSheet.tsx",
                lineNumber: 467,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/cart/CartSheet.tsx",
            lineNumber: 466,
            columnNumber: 13
        }, this);
    }
    const [couponCode, setCouponCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [itemToDelete, setItemToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Checkout / Address State
    // Views: 'cart' -> 'list' (Select Address) -> 'add' (New Address) -> 'payment' (Select Payment)
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('cart');
    const [successOrderData, setSuccessOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingAddresses, setLoadingAddresses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addresses, setAddresses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAddressId, setSelectedAddressId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ONLINE');
    const [isInitializingPayment, setIsInitializingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingAddress, setSavingAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Moved from line 214
    // Manual Payment State
    const [manualProof, setManualProof] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            let timer;
            // Check for strict false to enable manual mode (assuming true/undefined is default Razorpay)
            // Or if user wants strict toggle.
            // User request: "make razorpay to boolean... if yes show screen [Razorpay], if no show scanner".
            // boolean: true = Razorpay, false = Scanner.
            if (view === 'payment' && (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.razorpay) === false && !(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.smePay) && !(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.cashFree) && timeLeft > 0) {
                timer = setInterval({
                    "CartSheet.useEffect": ()=>{
                        setTimeLeft({
                            "CartSheet.useEffect": (prev)=>prev - 1
                        }["CartSheet.useEffect"]);
                    }
                }["CartSheet.useEffect"], 1000);
            }
            return ({
                "CartSheet.useEffect": ()=>clearInterval(timer)
            })["CartSheet.useEffect"];
        }
    }["CartSheet.useEffect"], [
        view,
        companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.razorpay,
        timeLeft
    ]);
    // Payment UI State
    const [paymentTab, setPaymentTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('qr');
    // Address Form State
    const [newAddress, setNewAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        addressName: 'Home',
        customerRoad: '',
        customerCity: '',
        customerState: '',
        customerPin: '',
        customerDrNum: '',
        customerCountry: 'India'
    });
    const [addressLabel, setAddressLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Home');
    const subtotal = getCartTotal();
    const handlePincodeChange = async (value)=>{
        setNewAddress((prev)=>({
                ...prev,
                customerPin: value
            }));
        if (value.length === 6) {
            try {
                const response = await fetch("https://api.postalpincode.in/pincode/".concat(value));
                const data = await response.json();
                if (data[0].Status === 'Success') {
                    const details = data[0].PostOffice[0];
                    setNewAddress((prev)=>({
                            ...prev,
                            customerPin: value,
                            customerCity: details.Division,
                            customerState: details.State,
                            customerCountry: 'India'
                        }));
                    toast({
                        description: "Location found: ".concat(details.Division, ", ").concat(details.State)
                    });
                } else {
                    toast({
                        variant: "destructive",
                        description: "Invalid Pincode"
                    });
                    setNewAddress((prev)=>({
                            ...prev,
                            customerCity: '',
                            customerState: ''
                        }));
                }
            } catch (error) {
                console.error("Pin code fetch error:", error);
            }
        }
    };
    // Helper to sync label changes
    const handleLabelChange = (label)=>{
        setAddressLabel(label);
        if (label !== 'Other') {
            setNewAddress((prev)=>({
                    ...prev,
                    addressName: label
                }));
        } else {
            setNewAddress((prev)=>({
                    ...prev,
                    addressName: ''
                })); // Clear for custom input
        }
    };
    const cartItemCount = getCartItemsCount();
    // Config Logic
    const minOrder = (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.minimumOrderCost) ? parseFloat(companyDetails.minimumOrderCost) : 0;
    const freeDeliveryThreshold = (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.freeDeliveryCost) ? parseFloat(companyDetails.freeDeliveryCost) : 0;
    // Auth State
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLoginPopup, setShowLoginPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingStockConflicts, setPendingStockConflicts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // "Chained Popup" buffer
    // SKIP VALIDATION LOGIC
    const [isValidated, setIsValidated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isInternalUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Reset validation if user changes quantity manually
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            if (isInternalUpdate.current) {
                isInternalUpdate.current = false; // Reset flag, keep validated
            } else {
                if (isValidated) {
                    setIsValidated(false);
                }
            }
        }
    }["CartSheet.useEffect"], [
        cart
    ]);
    const checkAuth = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            checkAuth();
            window.addEventListener('storage', checkAuth);
            window.addEventListener('auth-change', checkAuth);
            return ({
                "CartSheet.useEffect": ()=>{
                    window.removeEventListener('storage', checkAuth);
                    window.removeEventListener('auth-change', checkAuth);
                }
            })["CartSheet.useEffect"];
        }
    }["CartSheet.useEffect"], []);
    // Reset view on logout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            if (!isLoggedIn) {
                setView('cart');
                setSelectedAddressId(null);
                setCustomer(null);
            }
        }
    }["CartSheet.useEffect"], [
        isLoggedIn
    ]);
    // Status Logic
    const isFreeDelivery = freeDeliveryThreshold > 0 && subtotal >= freeDeliveryThreshold;
    const shipping = isPickup ? 0 : isFreeDelivery ? 0 : parseFloat((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.deliveryCost) || '0'); // Calculated at checkout
    const total = subtotal + shipping;
    const canCheckout = subtotal >= minOrder;
    const amountForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
    // Centralized Bill Calculation
    let discountAmount = 0;
    if (couponCode && (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyCoupon) && typeof companyDetails.companyCoupon === 'string') {
        const couponData = String(companyDetails.companyCoupon).split(',').find((c)=>c.startsWith(couponCode + '&&&'));
        if (couponData) {
            const [, discountStr, minOrderStr] = String(couponData).split('&&&');
            const discountPercent = parseFloat(discountStr || '0');
            const minCouponOrder = parseFloat(minOrderStr || '0');
            if (subtotal >= minCouponOrder) {
                discountAmount = subtotal * discountPercent / 100;
            }
        }
    }
    const finalTotal = Math.max(0, total - discountAmount);
    // Contact Info State
    const [contactInfo, setContactInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        mobile: ''
    });
    // Initial Mount Tracker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            // Small timeout to allow state calculations to settle before un-flagging
            const timer = setTimeout({
                "CartSheet.useEffect.timer": ()=>{
                    isFirstRender.current = false;
                }
            }["CartSheet.useEffect.timer"], 1000);
            return ({
                "CartSheet.useEffect": ()=>clearTimeout(timer)
            })["CartSheet.useEffect"];
        }
    }["CartSheet.useEffect"], []);
    // Initial Load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            if (isCartOpen && isLoggedIn) {
                loadCustomerData();
            }
        }
    }["CartSheet.useEffect"], [
        isCartOpen,
        isLoggedIn
    ]);
    const loadCustomerData = async function() {
        let forceRefresh = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        setLoadingAddresses(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$customer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customerService"].getCustomerDetails(forceRefresh); // use cache if available unless forced
            if (data) {
                var _data_customerAddress;
                setCustomer(data);
                setCustomer(data);
                // Auto-fill contact info if available (don't overwrite if user has typed something)
                setContactInfo((prev)=>({
                        name: data.customerName || prev.name || '',
                        email: data.customerEmailId || prev.email || '',
                        mobile: data.customerMobileNumber || prev.mobile || ''
                    }));
                setAddresses(data.customerAddress || []);
                // Auto-select first address if none selected and NOT saving (saving handles its own selection)
                if (!selectedAddressId && ((_data_customerAddress = data.customerAddress) === null || _data_customerAddress === void 0 ? void 0 : _data_customerAddress.length) > 0 && !savingAddress) {
                    setSelectedAddressId(data.customerAddress[0].customerAddressId);
                }
            }
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Failed to load addresses."
            });
        } finally{
            setLoadingAddresses(false);
        }
    };
    const handleSaveAddress = async ()=>{
        // Enforce name if Other
        if (addressLabel === 'Other' && !newAddress.addressName) {
            toast({
                variant: "destructive",
                description: "Please enter a name for this address."
            });
            return;
        }
        if (!newAddress.customerRoad || !newAddress.customerCity || !newAddress.customerPin) {
            toast({
                variant: "destructive",
                description: "Please fill in all required fields."
            });
            return;
        }
        setSavingAddress(true);
        try {
            // Must have customerId to create address linked to user
            if (!(customer === null || customer === void 0 ? void 0 : customer.customerId)) {
                toast({
                    variant: "destructive",
                    description: "User ID missing. Try logging in again."
                });
                return;
            }
            const createdAddress = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$customer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customerService"].createAddress({
                ...newAddress,
                customerDrNum: newAddress.customerRoad,
                customerId: customer.customerId
            });
            toast({
                description: "Address added successfully"
            });
            // Force refresh to get latest data from server
            await loadCustomerData(true);
            // Auto-select the newly created address
            if (createdAddress && createdAddress.customerAddressId) {
                setSelectedAddressId(createdAddress.customerAddressId);
            }
            setView('list'); // Go back
            // Reset form
            setNewAddress({
                addressName: 'Home',
                customerRoad: '',
                customerCity: '',
                customerState: '',
                customerPin: '',
                customerDrNum: '',
                customerCountry: 'India'
            });
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Failed to save address."
            });
        } finally{
            setSavingAddress(false);
        }
    };
    // SME Pay Polling Trigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            if (showQrPopup && smePayData && timeLeft <= 280 && !isPolling) {
                setIsPolling(true);
            } else if (!showQrPopup || !smePayData) {
                setIsPolling(false);
            }
        }
    }["CartSheet.useEffect"], [
        showQrPopup,
        smePayData,
        timeLeft,
        isPolling
    ]);
    // SME Pay Polling Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            let pollInterval;
            const checkStatus = {
                "CartSheet.useEffect.checkStatus": async ()=>{
                    if (!(smePayData === null || smePayData === void 0 ? void 0 : smePayData.order_id)) return;
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].getPaymentStatus(smePayData.order_id);
                        if (response === 'CONFIRMED' || (response === null || response === void 0 ? void 0 : response.status) === 'CONFIRMED') {
                            setSuccessOrderData({
                                success: true,
                                orderId: smePayData.order_id
                            });
                            if (customer === null || customer === void 0 ? void 0 : customer.customerId) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].getCustomerOrders(customer.customerId.toString(), true).catch({
                                    "CartSheet.useEffect.checkStatus": (err)=>console.error("Cache update failed", err)
                                }["CartSheet.useEffect.checkStatus"]);
                            }
                            clearCart();
                            setView('success');
                            setContactInfo({
                                name: '',
                                email: '',
                                mobile: ''
                            });
                            setSelectedAddressId(null);
                            setManualProof(null);
                            setSmePayData(null);
                            setShowQrPopup(false);
                            setIsPolling(false);
                        } else if (response === 'FAILED' || (response === null || response === void 0 ? void 0 : response.status) === 'FAILED') {
                            toast({
                                variant: "destructive",
                                title: "Payment Failed",
                                description: "Your payment was not successful."
                            });
                            setShowQrPopup(false);
                            setSmePayData(null);
                            setView('failed');
                            setTimeLeft(300);
                            setIsPolling(false);
                        }
                    } catch (error) {
                        console.error("Failed to poll SME Pay status", error);
                    }
                }
            }["CartSheet.useEffect.checkStatus"];
            if (isPolling) {
                checkStatus(); // Initial call
                pollInterval = setInterval(checkStatus, 5000);
            }
            return ({
                "CartSheet.useEffect": ()=>clearInterval(pollInterval)
            })["CartSheet.useEffect"];
        }
    }["CartSheet.useEffect"], [
        isPolling,
        smePayData,
        customer === null || customer === void 0 ? void 0 : customer.customerId,
        clearCart,
        toast
    ]);
    // Cashfree Polling Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            let pollInterval;
            let timeoutId;
            const checkStatus = {
                "CartSheet.useEffect.checkStatus": async ()=>{
                    if (!cashfreeOrderId) return;
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].getPaymentStatus(cashfreeOrderId);
                        if (response === 'CONFIRMED' || (response === null || response === void 0 ? void 0 : response.status) === 'CONFIRMED') {
                            // Forcefully remove/hide Cashfree iframe elements when polling confirms payment
                            document.body.style.pointerEvents = 'auto'; // ensure clickability is restored
                            try {
                                const iframes = document.querySelectorAll('iframe');
                                iframes.forEach({
                                    "CartSheet.useEffect.checkStatus": (iframe)=>{
                                        if (iframe.src.includes('cashfree') || iframe.name.includes('cashfree') || iframe.id.includes('cashfree')) {
                                            const container = iframe.closest('div');
                                            if (container && container.style.position === 'fixed') {
                                                container.style.display = 'none'; // hide the overlay container
                                            } else {
                                                iframe.style.display = 'none';
                                            }
                                        }
                                    }
                                }["CartSheet.useEffect.checkStatus"]);
                            } catch (e) {
                                console.error("Failed to clean up cashfree dom elements", e);
                            }
                            setSuccessOrderData({
                                success: true,
                                orderId: cashfreeOrderId
                            });
                            if (customer === null || customer === void 0 ? void 0 : customer.customerId) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].getCustomerOrders(customer.customerId.toString(), true).catch({
                                    "CartSheet.useEffect.checkStatus": (err)=>console.error("Cache update failed", err)
                                }["CartSheet.useEffect.checkStatus"]);
                            }
                            clearCart();
                            setView('success');
                            setContactInfo({
                                name: '',
                                email: '',
                                mobile: ''
                            });
                            setSelectedAddressId(null);
                            setManualProof(null);
                            setCashfreeOrderId(null);
                            setIsCashfreePolling(false);
                        } else if (response === 'FAILED' || (response === null || response === void 0 ? void 0 : response.status) === 'FAILED') {
                            toast({
                                variant: "destructive",
                                title: "Payment Failed",
                                description: "Your payment was not successful."
                            });
                            setCashfreeOrderId(null);
                            setView('failed');
                            setIsCashfreePolling(false);
                        }
                    } catch (error) {
                        console.error("Failed to poll Cashfree status", error);
                    }
                }
            }["CartSheet.useEffect.checkStatus"];
            if (isCashfreePolling && cashfreeOrderId) {
                checkStatus(); // Initial call
                pollInterval = setInterval(checkStatus, 5000);
                timeoutId = setTimeout({
                    "CartSheet.useEffect": ()=>{
                        if (isCashfreePolling) {
                            setIsCashfreePolling(false);
                            setCashfreeOrderId(null);
                            setView('failed');
                            toast({
                                variant: "destructive",
                                title: "Payment Timeout",
                                description: "Payment verification timed out."
                            });
                        }
                    }
                }["CartSheet.useEffect"], 300000); // 5 minutes
            }
            return ({
                "CartSheet.useEffect": ()=>{
                    clearInterval(pollInterval);
                    clearTimeout(timeoutId);
                }
            })["CartSheet.useEffect"];
        }
    }["CartSheet.useEffect"], [
        isCashfreePolling,
        cashfreeOrderId,
        customer === null || customer === void 0 ? void 0 : customer.customerId,
        clearCart,
        toast
    ]);
    const handleManualPayment = async ()=>{
        if (!selectedAddressId || !customer) {
            toast({
                variant: "destructive",
                description: "Please select an address first."
            });
            return;
        }
        // Cashfree Interception
        if (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.cashFree) {
            await executeSaveOrder(false, true);
            return;
        }
        // SME Pay Interception
        if (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.smePay) {
            await executeSaveOrder(true, false);
            return;
        }
        // QR Code Payment Interception
        if (!(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.razorpay)) {
            setShowQrPopup(true);
            return;
        }
        await executeSaveOrder();
    };
    const executeSaveOrder = async function() {
        let isSmePay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, isCashFree = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (!customer) return;
        setIsInitializingPayment(true);
        try {
            const minOrder = parseFloat((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.minimumOrderCost) || '0');
            const freeDeliveryThreshold = parseFloat((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.freeDeliveryCost) || '0');
            // 1. Calculate Raw Subtotal and Total Bulk Discount
            let totalBulkDiscount = 0;
            let rawSubtotal = 0;
            const processedItems = cart.map((item)=>{
                // 1. Identify Product Type & Variant IDs
                let sizeId = null;
                let sizeName = "";
                let sizePriceAfterDiscount = item.priceAfterDiscount || item.price;
                // Try to match Size Pricing ID
                let productSizePrice = null;
                if (item.pricing && item.pricing.length > 0) {
                    var _item_selectedVariants;
                    const quantityVariant = (_item_selectedVariants = item.selectedVariants) === null || _item_selectedVariants === void 0 ? void 0 : _item_selectedVariants['Quantity'];
                    if (quantityVariant) {
                        sizeName = quantityVariant;
                        const matchedPricing = item.pricing.find((p)=>p.quantity === quantityVariant);
                        if (matchedPricing) {
                            sizeId = parseInt(matchedPricing.id);
                            productSizePrice = matchedPricing.price;
                        }
                    }
                    if (!sizeId && item.pricing.length > 0) {
                        sizeId = parseInt(item.pricing[0].id);
                        sizeName = item.pricing[0].quantity;
                        productSizePrice = item.pricing[0].price;
                    }
                }
                // Calculate Item Price (Base + SizeColours)
                const sizeColoursCost = (item.selectedSizeColours || []).reduce((acc, a)=>acc + a.price, 0);
                const baseUnitPrice = item.priceAfterDiscount && item.priceAfterDiscount > 0 ? item.priceAfterDiscount : item.price;
                const finalUnitPrice = baseUnitPrice + sizeColoursCost;
                rawSubtotal += finalUnitPrice * item.quantity;
                // Calculate Bulk Discount for this specific item using pre-calculated distribution map
                let itemBulkDiscount = 0;
                const discounts = itemDiscountMap[item.cartItemId] || [];
                for(let q = 0; q < item.quantity; q++){
                    const discountPercent = discounts[q] || 0;
                    itemBulkDiscount += finalUnitPrice * (discountPercent / 100);
                }
                totalBulkDiscount += itemBulkDiscount;
                const baseItem = {
                    productId: parseInt(item.id),
                    productName: item.name,
                    productImage: item.images && item.images.length > 0 ? item.images[0] : item.imageUrl,
                    productPrice: item.price,
                    productPriceAfterDiscount: item.priceAfterDiscount || item.price,
                    quantity: item.quantity,
                    totalCost: finalUnitPrice * item.quantity - itemBulkDiscount,
                    extraDiscount: itemBulkDiscount // Store per-unit discount
                };
                // --- Variant Specifics ---
                const productSizeColourId = item.selectedSizeColours && item.selectedSizeColours.length > 0 ? parseInt(item.selectedSizeColours[0].id) : null;
                const productColourId = item.selectedColour ? parseInt(item.selectedColour.id) : null;
                if (productSizeColourId) {
                    const sc = item.selectedSizeColours[0];
                    baseItem.productSizeColourId = productSizeColourId;
                    baseItem.productSizeColourName = sc.name;
                    baseItem.productSizeColourImage = sc.productPics;
                    baseItem.productSizeColourExtraPrice = sc.price;
                    baseItem.productSizeId = sizeId;
                    baseItem.productSizeName = sizeName;
                    baseItem.productSizePrice = productSizePrice;
                    baseItem.productSizePriceAfterDiscount = sizePriceAfterDiscount;
                    baseItem.productImage = undefined;
                    baseItem.productPriceAfterDiscount = undefined;
                    if (sc.productPics) baseItem.productSizeColourImage = sc.productPics;
                } else if (sizeId) {
                    baseItem.productSizeId = sizeId;
                    baseItem.productSizeName = sizeName;
                    baseItem.productSizePrice = productSizePrice;
                    baseItem.productSizePriceAfterDiscount = sizePriceAfterDiscount;
                } else if (productColourId) {
                    baseItem.productColourId = productColourId;
                    baseItem.productColour = item.selectedColour.name;
                    baseItem.productColourImage = item.selectedColour.image;
                    if (item.selectedColour.image) baseItem.productImage = item.selectedColour.image;
                }
                return baseItem;
            });
            // Calculate Shipping
            const currentSubtotalWithBulk = rawSubtotal - totalBulkDiscount;
            const isFreeDelivery = freeDeliveryThreshold > 0 && currentSubtotalWithBulk >= freeDeliveryThreshold;
            const shipping = isFreeDelivery ? 0 : parseFloat((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.deliveryCost) || '0');
            // Calculate Coupon Discount
            let couponDiscountAmount = 0;
            if (couponCode && (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyCoupon) && typeof companyDetails.companyCoupon === 'string') {
                const couponData = String(companyDetails.companyCoupon).split(',').find((c)=>c.startsWith(couponCode + '&&&'));
                if (couponData) {
                    const [, discountStr, minOrderStr] = String(couponData).split('&&&');
                    const discountPercent = parseFloat(discountStr || '0');
                    const minCouponOrder = parseFloat(minOrderStr || '0');
                    if (currentSubtotalWithBulk >= minCouponOrder) {
                        couponDiscountAmount = currentSubtotalWithBulk * discountPercent / 100;
                    }
                }
            }
            const finalTotalAmount = rawSubtotal - totalBulkDiscount - couponDiscountAmount + shipping;
            const selectedAddress = addresses.find((a)=>a.customerAddressId === selectedAddressId);
            if (!selectedAddress) throw new Error("Address not found");
            const payload = {
                companyId: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyId) || '',
                companyDomain: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyDomain) || window.location.hostname,
                customerId: customer.customerId,
                customerName: contactInfo.name,
                customerPhone: contactInfo.mobile,
                deliveryRoad: [
                    selectedAddress.customerDrNum,
                    selectedAddress.customerRoad
                ].filter(Boolean).join(', '),
                deliveryPin: selectedAddress.customerPin || '',
                deliveryCity: selectedAddress.customerCity,
                deliveryState: selectedAddress.customerState,
                orderStatus: "CREATED",
                subTotal: rawSubtotal,
                allDiscount: couponCode && couponDiscountAmount > 0 ? "applied ".concat(couponCode, " changed ").concat(currentSubtotalWithBulk, " to ").concat(currentSubtotalWithBulk - couponDiscountAmount) : "",
                extraDiscount: totalBulkDiscount,
                deliveryCost: isPickup ? "pickup" : String(shipping),
                finalTotalAmount: finalTotalAmount,
                paymentPic: manualProof || null,
                items: processedItems,
                waPhoneNumId: companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.waPhoneNumId,
                waToken: companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.waToken,
                waOrderTemplateName: companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.waOrderTemplateName,
                companyName: companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyName,
                returnUrl: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable",
                manaBuyCredentials: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.manaBuyCredentials) || false
            };
            if (isSmePay) {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].createForSmePay(payload);
                setSmePayData(response);
                setShowQrPopup(true);
                return;
            }
            if (isCashFree) {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].createForCashFree(payload);
                if (response === null || response === void 0 ? void 0 : response.paymentSessionId) {
                    const cashfree = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cashfreepayments$2f$cashfree$2d$js$2f$dist$2f$script$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["load"])({
                        mode: "production"
                    });
                    const checkoutOptions = {
                        paymentSessionId: response.paymentSessionId,
                        redirectTarget: "_modal"
                    };
                    // Force pointer-events so Cashfree iframe is clickable despite Radix UI Sheet
                    const originalPointerEvents = document.body.style.pointerEvents;
                    document.body.style.setProperty('pointer-events', 'auto', 'important');
                    cashfree === null || cashfree === void 0 ? void 0 : cashfree.checkout(checkoutOptions).then((result)=>{
                        // Restore original pointer events
                        document.body.style.pointerEvents = originalPointerEvents;
                        if (result.error) {
                            console.error("Cashfree Payment Error", result.error);
                            toast({
                                variant: "destructive",
                                title: "Payment Error",
                                description: "Payment failed or was cancelled by user."
                            });
                            setIsCashfreePolling(false);
                            setCashfreeOrderId(null);
                            setView('failed');
                        }
                        if (result.paymentDetails) {
                            console.log("Cashfree Payment Success", result.paymentDetails);
                            toast({
                                description: "Verifying payment status..."
                            });
                        // Do not stop polling here; the background poll will catch the CONFIRMED status and redirect.
                        }
                    });
                    // Start background polling in case the modal doesn't capture the final event reliably
                    setCashfreeOrderId(response.orderId);
                    setIsCashfreePolling(true);
                }
                return;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].saveOrder(payload);
            // Set success data (use response if available, or just a flag)
            setSuccessOrderData(response || {
                success: true
            });
            // Prime the cache for customer orders
            if (customer === null || customer === void 0 ? void 0 : customer.customerId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].getCustomerOrders(customer.customerId.toString(), true).catch((err)=>console.error("Failed to cache orders", err));
            }
            // Clear cart and move to success view
            clearCart();
            setView('success');
            // Reset other states
            setContactInfo({
                name: '',
                email: '',
                mobile: ''
            });
            setSelectedAddressId(null);
            setManualProof(null);
        } catch (error) {
            console.error(error);
            setView('cart');
            setShowQrPopup(false);
            toast({
                variant: "destructive",
                title: "Order Failed",
                description: "Stock insufficient. Please re-try"
            });
        } finally{
            setIsInitializingPayment(false);
        }
    };
    const handlePaymentInitialize = async ()=>{
        if (!isPickup && !selectedAddressId || !customer || !companyDetails) {
            toast({
                variant: "destructive",
                description: "Please select an address first."
            });
            return;
        }
        // Localhost payment simulation bypass (only if mock keys or no keys are configured)
        const isLocalhost = "object" !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
        if (isLocalhost && (!(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.razorpayKeyId) || companyDetails.razorpayKeyId === 'rzp_test_mock')) {
            setIsInitializingPayment(true);
            console.log("Dev Mode: Simulating mock payment flow...");
            try {
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                toast({
                    title: "Payment Successful ✅ (Dev Mode)",
                    description: "Order Confirmed! Order ID: MOCK-ORDER-".concat(Date.now()),
                    className: "bg-green-50 border-green-200 text-green-800 animate-in fade-in duration-300"
                });
                // Clear cart and move to success view
                clearCart();
                setView('success');
                // Reset other states
                setContactInfo({
                    name: '',
                    email: '',
                    mobile: ''
                });
                setSelectedAddressId(null);
                setManualProof(null);
            } catch (error) {
                console.error(error);
            } finally{
                setIsInitializingPayment(false);
            }
            return;
        }
        const loaded = await loadRazorpay();
        if (!loaded) {
            toast({
                variant: "destructive",
                description: "Payment gateway not loaded. Please ensure you are online."
            });
            return;
        }
        setIsInitializingPayment(true);
        try {
            var _theme_colors;
            // Calculate Raw Subtotal and Total Bulk Discount
            let totalBulkDiscount = 0;
            let rawSubtotal = 0;
            const processedItems = cart.map((item)=>{
                let sizeId = null;
                let sizeName = "";
                let sizePriceAfterDiscount = item.priceAfterDiscount || item.price;
                let productSizePrice = null;
                if (item.pricing && item.pricing.length > 0) {
                    var _item_selectedVariants;
                    const quantityVariant = (_item_selectedVariants = item.selectedVariants) === null || _item_selectedVariants === void 0 ? void 0 : _item_selectedVariants['Quantity'];
                    if (quantityVariant) {
                        sizeName = quantityVariant;
                        const matchedPricing = item.pricing.find((p)=>p.quantity === quantityVariant);
                        if (matchedPricing) {
                            sizeId = parseInt(matchedPricing.id);
                            productSizePrice = matchedPricing.price;
                        }
                    }
                    if (!sizeId && item.pricing.length > 0) {
                        sizeId = parseInt(item.pricing[0].id);
                        sizeName = item.pricing[0].quantity;
                        productSizePrice = item.pricing[0].price;
                    }
                }
                const sizeColoursCost = (item.selectedSizeColours || []).reduce((acc, a)=>acc + a.price, 0);
                const baseUnitPrice = item.priceAfterDiscount && item.priceAfterDiscount > 0 ? item.priceAfterDiscount : item.price;
                const finalUnitPrice = baseUnitPrice + sizeColoursCost;
                rawSubtotal += finalUnitPrice * item.quantity;
                let itemBulkDiscount = 0;
                const discounts = itemDiscountMap[item.cartItemId] || [];
                for(let q = 0; q < item.quantity; q++){
                    const discountPercent = discounts[q] || 0;
                    itemBulkDiscount += finalUnitPrice * (discountPercent / 100);
                }
                totalBulkDiscount += itemBulkDiscount;
                const baseItem = {
                    productId: parseInt(item.id),
                    productName: item.name,
                    productImage: item.images && item.images.length > 0 ? item.images[0] : item.imageUrl,
                    productPrice: item.price,
                    productPriceAfterDiscount: item.priceAfterDiscount || item.price,
                    quantity: item.quantity,
                    totalCost: finalUnitPrice * item.quantity - itemBulkDiscount,
                    extraDiscount: itemBulkDiscount
                };
                const productSizeColourId = item.selectedSizeColours && item.selectedSizeColours.length > 0 ? parseInt(item.selectedSizeColours[0].id) : null;
                const productColourId = item.selectedColour ? parseInt(item.selectedColour.id) : null;
                if (productSizeColourId) {
                    const sc = item.selectedSizeColours[0];
                    baseItem.productSizeColourId = productSizeColourId;
                    baseItem.productSizeColourName = sc.name;
                    baseItem.productSizeColourImage = sc.productPics;
                    baseItem.productSizeColourExtraPrice = sc.price;
                    baseItem.productSizeId = sizeId;
                    baseItem.productSizeName = sizeName;
                    baseItem.productSizePrice = productSizePrice;
                    baseItem.productSizePriceAfterDiscount = sizePriceAfterDiscount;
                    baseItem.productImage = undefined;
                    baseItem.productPriceAfterDiscount = undefined;
                    if (sc.productPics) baseItem.productSizeColourImage = sc.productPics;
                } else if (sizeId) {
                    baseItem.productSizeId = sizeId;
                    baseItem.productSizeName = sizeName;
                    baseItem.productSizePrice = productSizePrice;
                    baseItem.productSizePriceAfterDiscount = sizePriceAfterDiscount;
                } else if (productColourId) {
                    baseItem.productColourId = productColourId;
                    baseItem.productColour = item.selectedColour.name;
                    baseItem.productColourImage = item.selectedColour.image;
                    if (item.selectedColour.image) baseItem.productImage = item.selectedColour.image;
                }
                return baseItem;
            });
            const freeDeliveryThreshold = parseFloat((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.freeDeliveryCost) || '0');
            const currentSubtotalWithBulk = rawSubtotal - totalBulkDiscount;
            const isFreeDelivery = freeDeliveryThreshold > 0 && currentSubtotalWithBulk >= freeDeliveryThreshold;
            const shipping = isFreeDelivery ? 0 : parseFloat((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.deliveryCost) || '0');
            let couponDiscountAmount = 0;
            if (couponCode && (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyCoupon) && typeof companyDetails.companyCoupon === 'string') {
                const couponData = String(companyDetails.companyCoupon).split(',').find((c)=>c.startsWith(couponCode + '&&&'));
                if (couponData) {
                    const [, discountStr, minOrderStr] = String(couponData).split('&&&');
                    const discountPercent = parseFloat(discountStr || '0');
                    const minCouponOrder = parseFloat(minOrderStr || '0');
                    if (currentSubtotalWithBulk >= minCouponOrder) {
                        couponDiscountAmount = currentSubtotalWithBulk * discountPercent / 100;
                    }
                }
            }
            const finalTotalAmount = rawSubtotal - totalBulkDiscount - couponDiscountAmount + shipping;
            const selectedAddress = addresses.find((a)=>a.customerAddressId === selectedAddressId);
            if (!selectedAddress && !isPickup) throw new Error("Address not found");
            const initData = {
                customerName: contactInfo.name || customer.customerName,
                customerPhoneNumber: contactInfo.mobile || customer.customerMobileNumber,
                customerEmailId: contactInfo.email || customer.customerEmailId,
                domainName: companyDetails.companyDomain || window.location.hostname,
                customerAddress: isPickup ? "Store Pickup" : "".concat((selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.customerDrNum) || '', ", ").concat((selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.customerRoad) || ''),
                customerCity: isPickup ? companyDetails.companyCity || "City" : (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.customerCity) || "",
                customerState: isPickup ? companyDetails.companyState || "State" : (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.customerState) || "",
                customerCountry: isPickup ? "India" : (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.customerCountry) || "India",
                addressName: isPickup ? "Pickup" : (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.addressName) || "",
                shipmentAmount: shipping,
                discount: couponCode && couponDiscountAmount > 0 ? "applied ".concat(couponCode, " changed ").concat(currentSubtotalWithBulk, " to ").concat(currentSubtotalWithBulk - couponDiscountAmount) : "0",
                discountName: couponCode || "",
                discountAmount: couponDiscountAmount,
                totalCost: finalTotalAmount,
                paymentMethod: "RAZORPAY",
                customerNote: "",
                items: processedItems.map((pi)=>{
                    var _pi_productSizeId, _pi_productSizeColourId;
                    return {
                        productId: pi.productId,
                        pricingId: (_pi_productSizeId = pi.productSizeId) !== null && _pi_productSizeId !== void 0 ? _pi_productSizeId : null,
                        productSizeColourId: (_pi_productSizeColourId = pi.productSizeColourId) !== null && _pi_productSizeColourId !== void 0 ? _pi_productSizeColourId : null,
                        quantity: pi.quantity
                    };
                })
            };
            const initResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].initializePayment(initData, companyDetails.razorpayKeyId, companyDetails.razorpayKeySecret);
            if (!initResponse || !initResponse.razorpayOrderId) {
                throw new Error("Failed to initialize payment.");
            }
            // Force pointer-events so Razorpay iframe is interactable on mobile inside radix sheet
            const originalPointerEvents = document.body.style.pointerEvents;
            document.body.style.setProperty('pointer-events', 'auto', 'important');
            const restorePointerEvents = ()=>{
                setTimeout(()=>{
                    document.body.style.pointerEvents = originalPointerEvents || '';
                }, 300);
            };
            // Open Razorpay options
            const options = {
                key: initResponse.razorpayKeyId,
                amount: initResponse.amountInPaise,
                currency: initResponse.currency,
                name: companyDetails.companyName,
                description: "Order Payment",
                order_id: initResponse.razorpayOrderId,
                handler: async function(response) {
                    restorePointerEvents();
                    try {
                        const verifyRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].verifyPayment({
                            razorpayOrderId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature
                        });
                        if (verifyRes.status === 'success') {
                            toast({
                                title: "Payment Successful ✅",
                                description: "Order Confirmed! Order ID: ".concat(verifyRes.orderId || 'N/A'),
                                className: "bg-green-50 border-green-200 text-green-800"
                            });
                            // Clear cart and move to success view
                            clearCart();
                            setView('success');
                            // Reset other states
                            setContactInfo({
                                name: '',
                                email: '',
                                mobile: ''
                            });
                            setSelectedAddressId(null);
                            setManualProof(null);
                        } else {
                            toast({
                                variant: "destructive",
                                title: "Verification Failed ❌",
                                description: verifyRes.message || "Payment verification failed."
                            });
                        }
                    } catch (err) {
                        console.error("Verification Error", err);
                        toast({
                            variant: "destructive",
                            title: "Error ❌",
                            description: "Failed to verify payment."
                        });
                    }
                },
                modal: {
                    ondismiss: function() {
                        restorePointerEvents();
                    }
                },
                prefill: {
                    name: contactInfo.name || customer.customerName,
                    email: contactInfo.email || customer.customerEmailId,
                    contact: contactInfo.mobile || customer.customerMobileNumber
                },
                theme: {
                    color: (theme === null || theme === void 0 ? void 0 : (_theme_colors = theme.colors) === null || _theme_colors === void 0 ? void 0 : _theme_colors.primary) ? "hsl(".concat(theme.colors.primary, ")") : "#3399cc"
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function(response) {
                restorePointerEvents();
                console.error("Razorpay Payment Error", response.error);
                toast({
                    variant: "destructive",
                    title: "Payment Error",
                    description: response.error.description || "Payment failed"
                });
                setView('failed');
            });
            rzp.open();
        } catch (error) {
            console.error("Payment Error", error);
            toast({
                variant: "destructive",
                description: "Payment initialization failed."
            });
        } finally{
            setIsInitializingPayment(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            if (!(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyCoupon)) return;
            const couponList = String(companyDetails.companyCoupon).split(',').map({
                "CartSheet.useEffect.couponList": (cStr)=>{
                    const [code, discountStr, minOrderStr] = String(cStr).split('&&&');
                    return {
                        code,
                        discount: parseFloat(discountStr || '0'),
                        minOrder: parseFloat(minOrderStr || '0')
                    };
                }
            }["CartSheet.useEffect.couponList"]);
            // Find eligible coupons
            const eligibleCoupons = couponList.filter({
                "CartSheet.useEffect.eligibleCoupons": (c)=>subtotal >= c.minOrder
            }["CartSheet.useEffect.eligibleCoupons"]);
            // Sort by discount descending
            eligibleCoupons.sort({
                "CartSheet.useEffect": (a, b)=>b.discount - a.discount
            }["CartSheet.useEffect"]);
            const bestCoupon = eligibleCoupons[0];
            if (bestCoupon) {
                // Only apply if it's different (avoids loops)
                if (couponCode !== bestCoupon.code) {
                    setCouponCode(bestCoupon.code);
                    // Trigger Celebration logic
                    if (!isFirstRender.current) {
                        // Small delay to ensure UI is ready
                        setTimeout({
                            "CartSheet.useEffect": ()=>{
                                const end = Date.now() + 1500;
                                const colors = [
                                    '#8b5cf6',
                                    '#d946ef',
                                    '#f43f5e',
                                    '#ec4899'
                                ]; // Pink/Purple theme
                                (function frame() {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                        particleCount: 2,
                                        angle: 60,
                                        spread: 55,
                                        origin: {
                                            x: 0
                                        },
                                        colors: colors,
                                        zIndex: 9999
                                    });
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                        particleCount: 2,
                                        angle: 120,
                                        spread: 55,
                                        origin: {
                                            x: 1
                                        },
                                        colors: colors,
                                        zIndex: 9999
                                    });
                                    if (Date.now() < end) {
                                        requestAnimationFrame(frame);
                                    }
                                })();
                                setShowCouponPopup(true);
                                setTimeout({
                                    "CartSheet.useEffect": ()=>setShowCouponPopup(false)
                                }["CartSheet.useEffect"], 1500);
                            }
                        }["CartSheet.useEffect"], 500);
                    }
                }
            } else {
                // If strictly enforced (no manual override allowed below threshold), clear it
                if (couponCode) {
                    setCouponCode('');
                }
            }
        }
    }["CartSheet.useEffect"], [
        subtotal,
        companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyCoupon,
        couponCode
    ]);
    // Confetti Effect for Order Success
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            if (view === 'success' && isCartOpen) {
                const duration = 10000; // Increased to 10s as payment redirect takes time
                const animationEnd = Date.now() + duration;
                const defaults = {
                    startVelocity: 30,
                    spread: 360,
                    ticks: 60,
                    zIndex: 9999
                };
                const randomInRange = {
                    "CartSheet.useEffect.randomInRange": (min, max)=>Math.random() * (max - min) + min
                }["CartSheet.useEffect.randomInRange"];
                const interval = setInterval({
                    "CartSheet.useEffect.interval": function() {
                        const timeLeft = animationEnd - Date.now();
                        if (timeLeft <= 0) {
                            return clearInterval(interval);
                        }
                        const particleCount = 50 * (timeLeft / duration);
                        // since particles fall down, start a bit higher than random
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                            ...defaults,
                            particleCount,
                            origin: {
                                x: randomInRange(0.1, 0.3),
                                y: Math.random() - 0.2
                            }
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                            ...defaults,
                            particleCount,
                            origin: {
                                x: randomInRange(0.7, 0.9),
                                y: Math.random() - 0.2
                            }
                        });
                    }
                }["CartSheet.useEffect.interval"], 250);
                return ({
                    "CartSheet.useEffect": ()=>clearInterval(interval)
                })["CartSheet.useEffect"];
            }
        }
    }["CartSheet.useEffect"], [
        view,
        isCartOpen
    ]);
    const handleCheckout = async ()=>{
        if (!isLoggedIn) {
            setShowLoginPopup(true);
            return;
        }
        setIsCheckingOut(true);
        // 0. SKIP VALIDATION CHECK
        if (isValidated) {
            loadCustomerData();
            setView('list');
            // If we have a pending stock conflict (from chained logic), show it now?
            // Actually, Review & Continue clears it. So we are good.
            setIsCheckingOut(false);
            return;
        }
        try {
            // 1. Get Customer Details (Phone, Name)
            const { customerService } = await __turbopack_context__.A("[project]/src/services/customer.service.ts [app-client] (ecmascript, async loader)");
            const customerData = await customerService.getCustomerDetails();
            if (!customerData) {
                toast({
                    variant: "destructive",
                    description: "Could not fetch user details. Please try again."
                });
                return;
            }
            // 2. Validate Company Details (Frontend Validation 1)
            const freshCompanyDetails = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$company$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCompanyDetails"])(companyDetails.companyDomain);
            if (!freshCompanyDetails) {
                toast({
                    variant: "destructive",
                    description: "Failed to validate company details. Please try again."
                });
                return;
            }
            // 3. Construct Payload (Direct Mapping 1-to-1)
            const validationPayload = cart.map((item)=>{
                var _item_selectedColour;
                let sizeId = null;
                if (item.pricing && item.pricing.length > 0) {
                    const quantityVariant = item.selectedVariants['Quantity'];
                    if (quantityVariant) {
                        const matchedPricing = item.pricing.find((p)=>p.quantity === quantityVariant);
                        if (matchedPricing) sizeId = parseInt(matchedPricing.id);
                    }
                    if (!sizeId && item.pricing.length > 0) sizeId = parseInt(item.pricing[0].id);
                }
                const productColourId = (_item_selectedColour = item.selectedColour) === null || _item_selectedColour === void 0 ? void 0 : _item_selectedColour.id;
                return {
                    productId: parseInt(item.id),
                    sizeId: sizeId,
                    productColourId: productColourId ? parseInt(productColourId) : null,
                    productSizeColourId: item.productSizeColourId ? parseInt(item.productSizeColourId) : null
                };
            });
            // 4. Call Validation API
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateCheckout"])({
                items: validationPayload
            });
            if (!response) {
                toast({
                    variant: "destructive",
                    description: "Validation failed. Please try again."
                });
                return;
            }
            // 5. Compare and Validate
            let blockingChanges = false;
            const changedProductIds = new Set();
            const changes = [];
            const uniqueMessages = new Set();
            const pushChange = (msg, cartItemId)=>{
                if (!uniqueMessages.has(msg)) {
                    uniqueMessages.add(msg);
                    changes.push({
                        message: msg,
                        cartItemId
                    });
                }
            };
            const newCart = cart.map((item)=>({
                    ...item,
                    selectedSizeColours: item.selectedSizeColours ? [
                        ...item.selectedSizeColours
                    ] : []
                }));
            // Handle wrapped response (server returns { productDetails: [...] }) or direct array
            const details = Array.isArray(response) ? response : response.productDetails || [];
            // --- PHASE 1: STANDARD VALIDATION (Item-level checks & Updates) ---
            // We run this FIRST so that even if stock conflicts exist (Phase 0), price updates/syncs are captured.
            // Track used stock across iterations to handle duplicate product entries sharing the same stock
            const stockUsageMap = new Map();
            // Stock tracking for Conflict Detection (Phase 0) - Built during Phase 1
            const stockGroups = new Map();
            const stockLimits = new Map();
            newCart.forEach((item, index)=>{
                var _item_selectedColour;
                const detail = details[index];
                if (!detail) return;
                // --- STOCK METADATA GATHERING (For Phase 0) ---
                // Determine Variant/Stock Key & Limit
                let sizeId = null;
                // Try to derive sizeId if missing (Fallback logic)
                if (item.productSizeId) {
                    sizeId = parseInt(item.productSizeId);
                } else if (item.pricing && item.pricing.length > 0) {
                    var _item_selectedVariants;
                    const quantityVariant = (_item_selectedVariants = item.selectedVariants) === null || _item_selectedVariants === void 0 ? void 0 : _item_selectedVariants['Quantity'];
                    if (quantityVariant) {
                        const matchedPricing = item.pricing.find((p)=>p.quantity === quantityVariant);
                        if (matchedPricing) sizeId = parseInt(matchedPricing.id);
                    }
                    if (!sizeId && item.pricing.length > 0) sizeId = parseInt(item.pricing[0].id);
                }
                let availableStock = 0;
                let stockKey = "";
                if (detail.productSizeColourId) {
                    availableStock = Number(detail.productSizeColourQuantity || 0);
                    stockKey = "".concat(detail.productId, "-sc-").concat(detail.productSizeColourId);
                } else if (sizeId) {
                    // Note: If sizeId was auto-corrected in Identity Check, we use the corrected one.
                    // But we haven't done Identity Check yet!
                    // Wait, we need to do Identity Check FIRST.
                    // Let's refine the order inside the loop.
                    availableStock = Number(detail.sizeQuantity || 0);
                    stockKey = "".concat(detail.productId, "-size-").concat(sizeId);
                } else if (detail.productColourId) {
                    availableStock = Number(detail.colourQuantityAvailable || 0);
                    stockKey = "".concat(detail.productId, "-col-").concat(detail.productColourId);
                } else {
                    availableStock = Number(detail.productQuantityAvailable || 0);
                    stockKey = "".concat(detail.productId, "-master");
                }
                if (isNaN(availableStock)) availableStock = 0;
                // Store limits for Phase 0 check later
                stockLimits.set(stockKey, {
                    limit: availableStock,
                    name: item.name
                });
                const group = stockGroups.get(stockKey) || [];
                group.push(item);
                stockGroups.set(stockKey, group);
                // --- 0. IDENTITY CHECK (Data Mismatch) ---
                // Re-derive keys to verify response matches request
                let checkSizeId = item.productSizeId ? parseInt(item.productSizeId) : null;
                if (!checkSizeId && item.pricing && item.pricing.length > 0) {
                    var _item_selectedVariants1;
                    // Same logic as above, just ensuring variable consistency
                    const quantityVariant = (_item_selectedVariants1 = item.selectedVariants) === null || _item_selectedVariants1 === void 0 ? void 0 : _item_selectedVariants1['Quantity'];
                    if (quantityVariant) {
                        const matchedPricing = item.pricing.find((p)=>p.quantity === quantityVariant);
                        if (matchedPricing) checkSizeId = parseInt(matchedPricing.id);
                    }
                    if (!checkSizeId && item.pricing.length > 0) checkSizeId = parseInt(item.pricing[0].id);
                }
                const productColourId = ((_item_selectedColour = item.selectedColour) === null || _item_selectedColour === void 0 ? void 0 : _item_selectedColour.id) ? parseInt(item.selectedColour.id) : null;
                // Verify IDs match (Server vs Client)
                let isIdMismatch = detail.productId !== parseInt(item.id) || detail.productColourId !== undefined && detail.productColourId !== productColourId;
                // Smart Check for Size ID Mismatch (Auto-Recover)
                if (detail.sizeId !== undefined && detail.sizeId !== checkSizeId) {
                    var _item_pricing;
                    const serverSizeExistsLocally = (_item_pricing = item.pricing) === null || _item_pricing === void 0 ? void 0 : _item_pricing.some((p)=>parseInt(p.id) === detail.sizeId);
                    if (serverSizeExistsLocally) {
                        // Auto-correcting size ID
                        item.productSizeId = detail.sizeId.toString();
                        checkSizeId = detail.sizeId; // Update local var
                    } else {
                        isIdMismatch = true;
                    }
                }
                if (isIdMismatch) {
                    blockingChanges = true;
                    changedProductIds.add(item.id);
                    pushChange('Critical: Data mismatch for "'.concat(item.name, '". Please refresh cart.'));
                    return; // Abort further checks for this item
                }
                // --- REFACTORED STRICT VALIDATION LOGIC ---
                // CASE 1: Size Colour Variant
                if (detail.productSizeColourId !== null && detail.productSizeColourId !== undefined) {
                    // 1. Validate sizeColourName
                    if (detail.sizeColourName && item.selectedSizeColours && item.selectedSizeColours.length > 0) {
                        const matchingSc = item.selectedSizeColours.find((sc)=>{
                            var _detail_productSizeColourId;
                            return sc.id === (((_detail_productSizeColourId = detail.productSizeColourId) === null || _detail_productSizeColourId === void 0 ? void 0 : _detail_productSizeColourId.toString()) || item.productSizeColourId);
                        });
                        if (matchingSc && matchingSc.name !== detail.sizeColourName) {
                            blockingChanges = true;
                            changedProductIds.add(item.id);
                            pushChange('Variant name for "'.concat(item.name, '" changed (Server: ').concat(detail.sizeColourName, ", Cart: ").concat(matchingSc.name, ")."));
                        }
                    }
                    // 2. Validate colourExtraPrice
                    if (detail.colourExtraPrice !== undefined && detail.colourExtraPrice !== null) {
                        if (item.selectedSizeColours) {
                            item.selectedSizeColours.forEach((sc)=>{
                                var _detail_productSizeColourId;
                                if (sc.id === (((_detail_productSizeColourId = detail.productSizeColourId) === null || _detail_productSizeColourId === void 0 ? void 0 : _detail_productSizeColourId.toString()) || item.productSizeColourId)) {
                                    if (sc.price !== detail.colourExtraPrice) {
                                        blockingChanges = true;
                                        changedProductIds.add(item.id);
                                        pushChange('Extra price for "'.concat(sc.name, '" updated from ₹').concat(sc.price, " to ₹").concat(detail.colourExtraPrice, "."), item.cartItemId);
                                        sc.price = detail.colourExtraPrice;
                                    }
                                }
                            });
                        }
                    }
                    // 1.5 Validate Prices (Base Size Price) for Complex Variant
                    // Complex items have a Base Price (Size) + Extra Price (Colour). This checks the Base Price.
                    let serverSizePrice = parseFloat((detail.productSizePrice || 0).toString());
                    let resolvedPrice = parseFloat((detail.productSizePriceAfterDiscount || 0).toString());
                    // Fallback to local pricing ONLY if server logic lacks data
                    if ((isNaN(serverSizePrice) || serverSizePrice <= 0) && item.pricing && item.pricing.length > 0) {
                        const matchedVariant = item.pricing.find((p)=>p.id === (item.productSizeId || (checkSizeId === null || checkSizeId === void 0 ? void 0 : checkSizeId.toString())));
                        if (matchedVariant) {
                            serverSizePrice = parseFloat(matchedVariant.price.toString());
                            resolvedPrice = parseFloat((matchedVariant.priceAfterDiscount || 0).toString());
                        }
                    }
                    // Fallback logic for discount
                    if ((isNaN(resolvedPrice) || resolvedPrice <= 0) && detail.productOffer && serverSizePrice > 0) {
                        const match = detail.productOffer.match(/(\d+)\s*%?|(\d+)\s*OFF/i);
                        if (match) {
                            const percent = parseFloat(match[1] || match[2]);
                            if (!isNaN(percent)) {
                                const discountVal = serverSizePrice * percent / 100;
                                resolvedPrice = Math.round(serverSizePrice - discountVal);
                            }
                        }
                    }
                    if (isNaN(resolvedPrice) || resolvedPrice <= 0) resolvedPrice = serverSizePrice;
                    if (resolvedPrice > 0) {
                        const previousEffective = item.priceAfterDiscount || item.price;
                        // Sync Base Price
                        if (serverSizePrice > 0 && item.price !== serverSizePrice) {
                            item.price = serverSizePrice;
                        }
                        // Sync Effective Price
                        if (item.priceAfterDiscount !== resolvedPrice) {
                            if (previousEffective !== resolvedPrice) {
                                blockingChanges = true;
                                changedProductIds.add(item.id);
                                pushChange('Price for "'.concat(item.name, '" (').concat(detail.productSize ? detail.productSize + ' - ' : '').concat(detail.sizeColourName, ") updated from ₹").concat(previousEffective, " to ₹").concat(resolvedPrice, "."), item.cartItemId);
                            }
                            item.priceAfterDiscount = resolvedPrice;
                        }
                    }
                    if (detail.productSizeColourQuantity !== null && detail.productSizeColourQuantity !== undefined) {
                        const scLimit = Number(detail.productSizeColourQuantity);
                        const scKey = "".concat(detail.productId, "-sc-").concat(detail.productSizeColourId);
                        const scConsumed = stockUsageMap.get(scKey) || 0;
                        const remainingSc = scLimit - scConsumed;
                        if (!isNaN(scLimit)) {
                            if (item.quantity > remainingSc) {
                                blockingChanges = true;
                                if (remainingSc <= 0) {
                                    changedProductIds.add(item.id);
                                    pushChange('"'.concat(item.name, '" (').concat(detail.productSize ? detail.productSize + ' - ' : '').concat(detail.sizeColourName, ") is out of stock and has been removed."));
                                    item.cartItemId = 'REMOVE_ME';
                                } else {
                                    pushChange('"'.concat(item.name, '" (').concat(detail.productSize ? detail.productSize + ' - ' : '').concat(detail.sizeColourName, ") quantity updated to available stock: ").concat(remainingSc, "."), item.cartItemId);
                                    item.quantity = remainingSc;
                                    stockUsageMap.set(scKey, scConsumed + item.quantity);
                                }
                            } else {
                                stockUsageMap.set(scKey, scConsumed + item.quantity);
                            }
                        }
                    }
                    // 4. Validate sizeColourStatus
                    if (detail.sizeColourStatus && detail.sizeColourStatus !== 'ACTIVE') {
                        blockingChanges = true;
                        changedProductIds.add(item.id);
                        pushChange('"'.concat(item.name, '" (').concat(detail.productSize ? detail.productSize + ' - ' : '').concat(detail.sizeColourName, ") is currently unavailable and has been removed."));
                        item.cartItemId = 'REMOVE_ME';
                        return;
                    }
                } else if (detail.sizeId !== null && detail.sizeId !== undefined && (detail.productSizeColourId === null || detail.productSizeColourId === undefined)) {
                    // 1. Validate sizeStatus
                    if (detail.sizeStatus && detail.sizeStatus !== 'ACTIVE') {
                        blockingChanges = true;
                        changedProductIds.add(item.id);
                        pushChange('"'.concat(item.name, '" (').concat(detail.productSize, ") is currently unavailable and has been removed."));
                        item.cartItemId = 'REMOVE_ME';
                        return;
                    }
                    // 2. Validate productSize (Name)
                    if (detail.productSize && item.selectedVariants && item.selectedVariants['Quantity']) {
                        const serverSize = detail.productSize.trim().toLowerCase();
                        const cartSize = item.selectedVariants['Quantity'].trim().toLowerCase();
                        if (serverSize !== cartSize && serverSize !== "" && cartSize !== "") {
                            blockingChanges = true;
                            changedProductIds.add(item.id);
                            pushChange('Size label mismatch for "'.concat(item.name, '" (Server: ').concat(detail.productSize, ", Cart: ").concat(item.selectedVariants['Quantity'], "). Removed."));
                            item.cartItemId = 'REMOVE_ME';
                            return;
                        }
                    }
                    // 3. Validate Prices (productSizePrice, productSizePriceAfterDiscount)
                    let serverSizePrice = parseFloat((detail.productSizePrice || 0).toString());
                    let resolvedPrice = parseFloat((detail.productSizePriceAfterDiscount || 0).toString());
                    // Fallback to local pricing ONLY if server logic lacks data (Server is Truth)
                    if ((isNaN(serverSizePrice) || serverSizePrice <= 0) && item.pricing && item.pricing.length > 0) {
                        const matchedVariant = item.pricing.find((p)=>p.id === (item.productSizeId || (checkSizeId === null || checkSizeId === void 0 ? void 0 : checkSizeId.toString())));
                        if (matchedVariant) {
                            serverSizePrice = parseFloat(matchedVariant.price.toString());
                            resolvedPrice = parseFloat((matchedVariant.priceAfterDiscount || 0).toString());
                        }
                    }
                    // Fallback logic for discount (only if resolvedPrice is still missing)
                    if ((isNaN(resolvedPrice) || resolvedPrice <= 0) && detail.productOffer && serverSizePrice > 0) {
                        const match = detail.productOffer.match(/(\d+)\s*%?|(\d+)\s*OFF/i);
                        if (match) {
                            const percent = parseFloat(match[1] || match[2]);
                            if (!isNaN(percent)) {
                                const discountVal = serverSizePrice * percent / 100;
                                resolvedPrice = Math.round(serverSizePrice - discountVal);
                            }
                        }
                    }
                    if (isNaN(resolvedPrice) || resolvedPrice <= 0) resolvedPrice = serverSizePrice;
                    // Log for debugging
                    // FORCE UPDATE Strict Validation
                    if (resolvedPrice > 0) {
                        const previousEffective = item.priceAfterDiscount || item.price;
                        // 1. Sync Base Price (Silent unless it creates a visual anomaly we handle elsewhere)
                        // This ensures the "strikethrough" price is correct.
                        if (serverSizePrice > 0 && item.price !== serverSizePrice) {
                            item.price = serverSizePrice;
                        }
                        // 2. Sync Effective Price (The Price User Pays)
                        // If item.priceAfterDiscount differs from resolvedPrice (or is missing), we MUST update it.
                        if (item.priceAfterDiscount !== resolvedPrice) {
                            // Only block/notify if the EFFECTIVE price changes for the user
                            if (previousEffective !== resolvedPrice) {
                                blockingChanges = true;
                                changedProductIds.add(item.id);
                                pushChange('Price for "'.concat(item.name, '" (').concat(detail.productSize, ") updated from ₹").concat(previousEffective, " to ₹").concat(resolvedPrice, "."), item.cartItemId);
                            } else {}
                            // Always apply the correct discount value
                            item.priceAfterDiscount = resolvedPrice;
                        }
                    }
                    // 4. Validate sizeQuantity (Stock)
                    if (detail.sizeQuantity !== null && detail.sizeQuantity !== undefined) {
                        const szLimit = Number(detail.sizeQuantity);
                        const szKey = "".concat(detail.productId, "-sz-").concat(detail.sizeId);
                        const szConsumed = stockUsageMap.get(szKey) || 0;
                        const remainingSz = szLimit - szConsumed;
                        if (!isNaN(szLimit)) {
                            if (item.quantity > remainingSz) {
                                blockingChanges = true;
                                if (remainingSz <= 0) {
                                    changedProductIds.add(item.id);
                                    pushChange('"'.concat(item.name, '" (').concat(detail.productSize, ") is out of stock and has been removed."));
                                    item.cartItemId = 'REMOVE_ME';
                                } else {
                                    pushChange('"'.concat(item.name, '" (').concat(detail.productSize, ") quantity updated to available stock: ").concat(remainingSz, "."), item.cartItemId);
                                    item.quantity = remainingSz;
                                    stockUsageMap.set(szKey, szConsumed + item.quantity);
                                }
                            } else {
                                stockUsageMap.set(szKey, szConsumed + item.quantity);
                            }
                        }
                    }
                } else if (detail.productColourId !== null && detail.productColourId !== undefined && (detail.sizeId === null || detail.sizeId === undefined)) {
                    var _item_selectedColour1;
                    // 1. Validate colourStatus
                    if (detail.colourStatus && detail.colourStatus !== 'ACTIVE') {
                        blockingChanges = true;
                        changedProductIds.add(item.id);
                        pushChange('"'.concat(item.name, '" (').concat(detail.colour, ") is currently unavailable and has been removed."));
                        item.cartItemId = 'REMOVE_ME';
                        return;
                    }
                    // 2. Validate colour (Name)
                    if (detail.colour && ((_item_selectedColour1 = item.selectedColour) === null || _item_selectedColour1 === void 0 ? void 0 : _item_selectedColour1.name)) {
                        const serverColor = detail.colour.trim().toLowerCase();
                        const cartColor = item.selectedColour.name.trim().toLowerCase();
                        if (serverColor !== cartColor) {
                            blockingChanges = true;
                            changedProductIds.add(item.id);
                            pushChange('Colour mismatch for "'.concat(item.name, '" (Server: ').concat(detail.colour, ", Cart: ").concat(item.selectedColour.name, "). Removed."));
                            item.cartItemId = 'REMOVE_ME';
                            return;
                        }
                    }
                    // 3. Validate Prices
                    const serverProdPrice = parseFloat((detail.productPrice || 0).toString());
                    let resolvedProdPrice = parseFloat((detail.productPriceAfterDiscount || 0).toString());
                    // Fallback logic for discount
                    if ((isNaN(resolvedProdPrice) || resolvedProdPrice <= 0) && detail.productOffer && serverProdPrice > 0) {
                        const match = detail.productOffer.match(/(\d+)\s*%?|(\d+)\s*OFF/i);
                        if (match) {
                            const percent = parseFloat(match[1] || match[2]);
                            if (!isNaN(percent)) {
                                const discountVal = serverProdPrice * percent / 100;
                                resolvedProdPrice = Math.round(serverProdPrice - discountVal);
                            }
                        }
                    }
                    if (isNaN(resolvedProdPrice) || resolvedProdPrice <= 0) resolvedProdPrice = serverProdPrice;
                    // Log for debugging
                    if (resolvedProdPrice > 0) {
                        const previousEffective = item.priceAfterDiscount || item.price;
                        // 1. Sync Base Price (Silent)
                        if (serverProdPrice > 0 && item.price !== serverProdPrice) {
                            item.price = serverProdPrice;
                        }
                        // 2. Sync Effective Price
                        if (item.priceAfterDiscount !== resolvedProdPrice) {
                            if (previousEffective !== resolvedProdPrice) {
                                blockingChanges = true;
                                changedProductIds.add(item.id);
                                pushChange('Price for "'.concat(item.name, '" (').concat(detail.colour, ") updated from ₹").concat(previousEffective, " to ₹").concat(resolvedProdPrice, "."), item.cartItemId);
                            } else {}
                            item.priceAfterDiscount = resolvedProdPrice;
                        }
                    }
                    // 4. Validate colourQuantityAvailable
                    if (detail.colourQuantityAvailable !== null && detail.colourQuantityAvailable !== undefined) {
                        const colLimit = Number(detail.colourQuantityAvailable);
                        const colKey = "".concat(detail.productId, "-col-").concat(detail.productColourId);
                        const colConsumed = stockUsageMap.get(colKey) || 0;
                        const remainingCol = colLimit - colConsumed;
                        if (!isNaN(colLimit)) {
                            if (item.quantity > remainingCol) {
                                blockingChanges = true;
                                if (remainingCol <= 0) {
                                    changedProductIds.add(item.id);
                                    pushChange('"'.concat(item.name, '" (').concat(detail.colour, ") is out of stock and has been removed."));
                                    item.cartItemId = 'REMOVE_ME';
                                } else {
                                    pushChange('"'.concat(item.name, '" (').concat(detail.colour, ") quantity updated to available stock: ").concat(remainingCol, "."), item.cartItemId);
                                    item.quantity = remainingCol;
                                    stockUsageMap.set(colKey, colConsumed + item.quantity);
                                }
                            } else {
                                stockUsageMap.set(colKey, colConsumed + item.quantity);
                            }
                        }
                    }
                } else if (detail.productId !== null && detail.productId !== undefined) {
                    // 1. Validate Prices
                    const serverProdPrice = parseFloat((detail.productPrice || 0).toString());
                    let resolvedProdPrice = parseFloat((detail.productPriceAfterDiscount || 0).toString());
                    if ((isNaN(resolvedProdPrice) || resolvedProdPrice <= 0) && detail.productOffer && serverProdPrice > 0) {
                        const match = detail.productOffer.match(/(\d+)\s*%?|(\d+)\s*OFF/i);
                        if (match) {
                            const percent = parseFloat(match[1] || match[2]);
                            if (!isNaN(percent)) {
                                const discountVal = serverProdPrice * percent / 100;
                                resolvedProdPrice = Math.round(serverProdPrice - discountVal);
                            }
                        }
                    }
                    if (isNaN(resolvedProdPrice) || resolvedProdPrice <= 0) resolvedProdPrice = serverProdPrice;
                    // Log for debugging
                    if (resolvedProdPrice > 0) {
                        const previousEffective = item.priceAfterDiscount || item.price;
                        // 1. Sync Base Price (Silent)
                        if (serverProdPrice > 0 && item.price !== serverProdPrice) {
                            item.price = serverProdPrice;
                        }
                        // 2. Sync Effective Price
                        if (item.priceAfterDiscount !== resolvedProdPrice) {
                            if (previousEffective !== resolvedProdPrice) {
                                blockingChanges = true;
                                changedProductIds.add(item.id);
                                pushChange('Price for "'.concat(item.name, '" updated from ₹').concat(previousEffective, " to ₹").concat(resolvedProdPrice, "."), item.cartItemId);
                            } else {}
                            item.priceAfterDiscount = resolvedProdPrice;
                        }
                    }
                    // 2. Validate productQuantityAvailable
                    if (detail.productQuantityAvailable !== null && detail.productQuantityAvailable !== undefined) {
                        const prodLimit = Number(detail.productQuantityAvailable);
                        const prodKey = "".concat(detail.productId, "-master"); // Shared master stock
                        const prodConsumed = stockUsageMap.get(prodKey) || 0;
                        const remainingProd = prodLimit - prodConsumed;
                        if (!isNaN(prodLimit)) {
                            if (item.quantity > remainingProd) {
                                blockingChanges = true;
                                if (remainingProd <= 0) {
                                    changedProductIds.add(item.id);
                                    pushChange('"'.concat(item.name, '" is out of stock and has been removed.'));
                                    item.cartItemId = 'REMOVE_ME';
                                } else {
                                    pushChange('"'.concat(item.name, '" quantity updated to available stock: ').concat(remainingProd, "."), item.cartItemId);
                                    item.quantity = remainingProd;
                                    stockUsageMap.set(prodKey, prodConsumed + item.quantity);
                                }
                            } else {
                                stockUsageMap.set(prodKey, prodConsumed + item.quantity);
                            }
                        }
                    }
                }
                if (item.cartItemId === 'REMOVE_ME') return;
                // --- GLOBAL VALIDATIONS (ALL CASES) ---
                // 1. Validate productStatus
                if (detail.productStatus !== 'ACTIVE') {
                    blockingChanges = true;
                    changedProductIds.add(item.id);
                    pushChange('"'.concat(item.name, '" is currently unavailable (Product Inactive) and has been removed.'));
                    item.cartItemId = 'REMOVE_ME';
                    return;
                }
                // 2. Validate productOffer
                if (item.productOffer !== detail.productOffer) {
                    const oldOffer = item.productOffer;
                    item.productOffer = detail.productOffer;
                    if (oldOffer !== detail.productOffer) {
                        blockingChanges = true;
                        changedProductIds.add(item.id);
                        if (!detail.productOffer) {
                            pushChange('Sorry, the offer for "'.concat(item.name, '" has expired.'), item.cartItemId);
                        } else {
                            pushChange('Offer for "'.concat(item.name, '" updated: ').concat(detail.productOffer), item.cartItemId);
                        }
                    }
                }
                // 3. Validate multipleSetDiscount
                const normalizeDiscount = (s)=>{
                    if (!s) return "";
                    return String(s).split('&&&').sort().join('&&&');
                };
                const cartSetDiscount = normalizeDiscount(item.multipleSetDiscount);
                const serverSetDiscount = normalizeDiscount(detail.multipleSetDiscount);
                // Helper: Get description of the BEST rule currently active (Copied for scope)
                const getActiveRuleDescription = (rule, qty)=>{
                    if (!rule || qty <= 0) return null;
                    const segments = String(rule).split('&&&');
                    let bestParams = null;
                    for (const seg of segments){
                        const [thresholdStr, percentStr] = String(seg).split('-');
                        const threshold = parseFloat(thresholdStr);
                        const percent = parseFloat(percentStr);
                        if (!isNaN(threshold) && !isNaN(percent) && qty >= threshold) {
                            if (!bestParams || threshold > bestParams.t) {
                                bestParams = {
                                    t: threshold,
                                    p: percent
                                };
                            }
                        }
                    }
                    if (bestParams) return "Buy ".concat(bestParams.t, " Get ").concat(bestParams.p, "% Off");
                    return null;
                };
                if (cartSetDiscount !== serverSetDiscount) {
                    const totalQty = productQuantities[item.id] || item.quantity;
                    const activeRuleDesc = getActiveRuleDescription(item.multipleSetDiscount || "", totalQty);
                    const newActiveRuleDesc = getActiveRuleDescription(detail.multipleSetDiscount, totalQty);
                    if (activeRuleDesc) {
                        if (activeRuleDesc === newActiveRuleDesc) {
                        // Do nothing
                        } else {
                            blockingChanges = true;
                            changedProductIds.add(item.id);
                            pushChange("Selected discount (".concat(activeRuleDesc, ") is removed/updated."), item.cartItemId);
                        }
                    }
                    item.multipleSetDiscount = detail.multipleSetDiscount;
                }
                // 4. Validate multipleDiscountMoreThan
                const cartMoreThan = (item.multipleDiscountMoreThan || "").trim();
                const serverMoreThan = (detail.multipleDiscountMoreThan || "").trim();
                const isUsingMoreThan = (rule, qty)=>{
                    if (!rule || qty <= 0) return false;
                    const [thresholdStr] = String(rule).split('-');
                    const threshold = parseFloat(thresholdStr);
                    return !isNaN(threshold) && qty > threshold;
                };
                if (cartMoreThan !== serverMoreThan) {
                    const totalQty = productQuantities[item.id] || item.quantity;
                    const wasUsing = isUsingMoreThan(item.multipleDiscountMoreThan || "", totalQty);
                    if (wasUsing) {
                        blockingChanges = true;
                        changedProductIds.add(item.id);
                        if (!serverMoreThan) {
                            pushChange('Special bulk offer for "'.concat(item.name, '" has been removed.'), item.cartItemId);
                        } else {
                            pushChange('Special bulk offer for "'.concat(item.name, '" has been updated.'), item.cartItemId);
                        }
                    }
                    item.multipleDiscountMoreThan = detail.multipleDiscountMoreThan;
                }
            });
            // --- PHASE 0 CHECK: CONFLICT RESOLUTION ---
            // We do this AFTER Phase 1 so we have the updated stock limits and prices
            const currentConflicts = [];
            stockGroups.forEach((items, key)=>{
                const limitInfo = stockLimits.get(key);
                if (!limitInfo) return;
                const totalRequested = items.reduce((sum, it)=>sum + it.quantity, 0);
                // If total demand exceeds limit, this is a conflict user must resolve manually
                if (totalRequested > limitInfo.limit) {
                    // Create deep copies for popup editing
                    const itemCopies = items.map((i)=>({
                            ...i
                        }));
                    currentConflicts.push({
                        stockKey: key,
                        productName: limitInfo.name,
                        availableStock: limitInfo.limit,
                        items: itemCopies,
                        totalRequested: totalRequested
                    });
                }
            });
            if (currentConflicts.length > 0) {
                // CHAINED POPUP LOGIC:
                // If we also have Price Updates (blockingChanges), we prioritize showing the Price Popup first.
                // We defer the Stock Conflict popup to Step 2 (after user accepts price changes).
                if (blockingChanges) {
                    setPendingStockConflicts(currentConflicts);
                // We DO NOT return here. We allow the function to proceed to 'setValidationErrors' (Price Popup).
                } else {
                    // Only Stock Conflicts -> Show immediately
                    setStockConflicts(currentConflicts);
                    setShowConflictPopup(true);
                    setIsCheckingOut(false);
                    return; // HALT VALIDATION
                }
            }
            // --- PHASE 1.5: COUPON VALIDATION ---
            if (couponCode) {
                const couponsList = freshCompanyDetails.companyCoupon ? String(freshCompanyDetails.companyCoupon).split(',') : [];
                const isStillValid = couponsList.some((c)=>c.startsWith(couponCode + '&&&'));
                if (!isStillValid) {
                    blockingChanges = true;
                    pushChange('The coupon "'.concat(couponCode, '" is no longer available and has been removed from your order.'));
                    setCouponCode('');
                    if (typeof setExtraDiscount === 'function') setExtraDiscount(0);
                }
            }
            // --- PHASE 1.6: SHIPPING VALIDATION ---
            const oldThreshold = (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.freeDeliveryCost) ? parseFloat(companyDetails.freeDeliveryCost) : 0;
            const newThreshold = (freshCompanyDetails === null || freshCompanyDetails === void 0 ? void 0 : freshCompanyDetails.freeDeliveryCost) ? parseFloat(freshCompanyDetails.freeDeliveryCost) : 0;
            const wasEligible = oldThreshold > 0 && subtotal >= oldThreshold;
            const isNowEligible = newThreshold > 0 && subtotal >= newThreshold;
            if (wasEligible && !isNowEligible) {
                blockingChanges = true;
                const shippingCost = newThreshold <= 0 && (freshCompanyDetails === null || freshCompanyDetails === void 0 ? void 0 : freshCompanyDetails.deliveryCost) ? parseFloat(freshCompanyDetails.deliveryCost) : (freshCompanyDetails === null || freshCompanyDetails === void 0 ? void 0 : freshCompanyDetails.deliveryBetween) ? parseFloat(freshCompanyDetails.deliveryBetween) : 40;
                if (newThreshold <= 0) {
                    pushChange("Free delivery is no longer available. A shipping charge of ₹".concat(shippingCost, " has been added to your order."));
                } else {
                    pushChange("The free delivery threshold has increased to ₹".concat(newThreshold, ". A shipping charge of ₹").concat(shippingCost, " has been added to your order."));
                }
            }
            const finalCart = newCart.filter((item)=>item.cartItemId !== 'REMOVE_ME');
            // --- SYNC PRODUCTS GLOBALLY ---
            // ONLY sync products that actually had changes detected during validation
            const productsToSyncCount = changedProductIds.size;
            if (productsToSyncCount > 0) {
                Promise.all(Array.from(changedProductIds).map(async (pid)=>{
                    const freshProd = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductDetails"])(pid);
                    if (freshProd) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"].getState().syncProductGlobally(freshProd);
                    }
                })).catch((err)=>console.error("Global sync failed", err));
            }
            // Always update cart and company details to reflect latest server data (silent updates included)
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"].setState({
                cart: finalCart,
                companyDetails: freshCompanyDetails
            });
            if (blockingChanges && changes.length > 0) {
                setValidationErrors(changes);
                setValidatedCart(newCart);
                setShowValidationPopup(true);
            } else {
                // All Good -> Switch to Address Selection
                loadCustomerData();
                setView('list');
            }
        } catch (error) {
            console.error("Checkout validation failed", error);
            toast({
                variant: "destructive",
                description: "Something went wrong. Please try again.",
                duration: 2000
            });
        } finally{
            setIsCheckingOut(false);
        }
    };
    // Free Delivery Celebration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSheet.useEffect": ()=>{
            // If already eligible on first render, mark as celebrated silently
            if (isFreeDelivery && isFirstRender.current) {
                setCelebrated(true);
                return;
            }
            if (isFreeDelivery && !celebrated && isCartOpen && !isFirstRender.current) {
                const end = Date.now() + 1500;
                const colors = [
                    '#10B981',
                    '#34D399',
                    '#6EE7B7',
                    '#FFD700'
                ];
                (function frame() {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 2,
                        angle: 60,
                        spread: 55,
                        origin: {
                            x: 0
                        },
                        colors: colors,
                        zIndex: 9999
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 2,
                        angle: 120,
                        spread: 55,
                        origin: {
                            x: 1
                        },
                        colors: colors,
                        zIndex: 9999
                    });
                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                })();
                setCelebrated(true);
                setShowFreeDeliveryPopup(true);
                setTimeout({
                    "CartSheet.useEffect": ()=>setShowFreeDeliveryPopup(false)
                }["CartSheet.useEffect"], 1500);
            } else if (!isFreeDelivery && celebrated) {
                setCelebrated(false);
            }
        }
    }["CartSheet.useEffect"], [
        isFreeDelivery,
        celebrated,
        isCartOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
        open: isCartOpen,
        onOpenChange: (open)=>{
            setCartOpen(open);
            // If closing, reset view to cart after animation
            if (!open) {
                setTimeout(()=>setView('cart'), 300);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/cart/CartSheet.tsx",
                lineNumber: 2362,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                onInteractOutside: (e)=>{
                    // Prevent closing if we are in the payment screen
                    if (view === 'payment') {
                        e.preventDefault();
                    }
                },
                className: "w-full sm:max-w-md h-[100dvh] flex flex-col p-0 gap-0 border-l border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-2xl",
                children: [
                    showCouponPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-4 top-1/4 z-[100] animate-in zoom-in-95 fade-in slide-in-from-bottom-10 duration-500 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-violet-600 to-indigo-600 text-primary-foreground p-6 rounded-3xl shadow-2xl relative overflow-hidden border border-white/20 pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-background/20 rounded-full blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2379,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-black/10 rounded-full blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2380,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-14 h-14 bg-background/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                className: "w-7 h-7 text-primary-foreground animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2384,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2383,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-1 tracking-tight",
                                            children: "Coupon Applied!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2386,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-primary-foreground/90 text-sm font-medium",
                                            children: [
                                                "You saved money with ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold underline decoration-wavy decoration-white/50 underline-offset-4",
                                                    children: couponCode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2387,
                                                    columnNumber: 116
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2387,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2382,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "absolute top-2 right-2 text-primary-foreground/60 hover:text-primary-foreground hover:bg-background/10 rounded-full h-8 w-8",
                                    onClick: ()=>setShowCouponPopup(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 2396,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2390,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 2377,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 2376,
                        columnNumber: 21
                    }, this),
                    showQrPopup && !smePayData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-sm bg-background/90 backdrop-blur-2xl rounded-[32px] overflow-hidden shadow-2xl border border-white/50 relative animate-in zoom-in-95 slide-in-from-bottom-5 duration-500 my-auto max-h-[90vh] flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 inset-x-0 h-40 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-100 shadow-[inset_0_-40px_40px_-20px_rgba(255,255,255,0.1)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2408,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-background/20 rounded-full blur-3xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2409,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-24 left-0 -ml-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2410,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "absolute top-4 right-4 text-primary-foreground/90 hover:text-primary-foreground hover:bg-background/20 rounded-full z-30 backdrop-blur-md border border-white/10",
                                    onClick: ()=>setShowExitConfirmation(true),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 2418,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2412,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1 overflow-y-auto custom-scrollbar pt-8 pb-8 px-6 flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-6 w-full animate-in slide-in-from-top-4 duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center justify-center p-3 bg-indigo-50 rounded-full mb-3 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.logo) || "/placeholder.png",
                                                            alt: "Logo",
                                                            fill: true,
                                                            className: "object-cover rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2427,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2426,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2425,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-black text-foreground tracking-tight font-headline",
                                                    children: "Payment Options"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2435,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-medium text-muted-foreground/60 mt-1",
                                                    children: "Choose how you'd like to pay"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2438,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2424,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-secondary/30 border border-secondary/30 rounded-2xl p-4 mb-6 flex flex-col items-center justify-center shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-1",
                                                    children: "Total Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2445,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl font-black text-foreground font-headline",
                                                    children: formatCurrency(finalTotal - extraDiscount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2446,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2444,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground/60",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "relative flex h-2 w-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2458,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "relative inline-flex rounded-full h-2 w-2 bg-orange-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2459,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2457,
                                                                    columnNumber: 45
                                                                }, this),
                                                                "Expires in:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-orange-600 tabular-nums",
                                                                    children: formatTime(timeLeft)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2462,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2456,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-bold bg-secondary/50 text-muted-foreground/80 px-2 py-1 rounded-md border border-border",
                                                            children: [
                                                                "Total: ",
                                                                formatCurrency(finalTotal)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2464,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2455,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 p-1 bg-secondary/50/80 rounded-2xl border border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPaymentTab('qr'),
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2", paymentTab === 'qr' ? "bg-background text-foreground/90 shadow-sm ring-1 ring-black/5" : "text-muted-foreground/60 hover:text-muted-foreground"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 rounded-full border-2 border-current flex items-center justify-center",
                                                                    children: paymentTab === 'qr' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 rounded-full bg-current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 2481,
                                                                        columnNumber: 73
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2480,
                                                                    columnNumber: 45
                                                                }, this),
                                                                "Scanner"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2471,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPaymentTab('upi'),
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2", paymentTab === 'upi' ? "bg-background text-foreground/90 shadow-sm ring-1 ring-black/5" : "text-muted-foreground/60 hover:text-muted-foreground"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 rounded-full border-2 border-current flex items-center justify-center",
                                                                    children: paymentTab === 'upi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 rounded-full bg-current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 2495,
                                                                        columnNumber: 74
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2494,
                                                                    columnNumber: 45
                                                                }, this),
                                                                "UPI Apps"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2485,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2470,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-background rounded-3xl p-4 border border-secondary/30 shadow-xl shadow-slate-200/40 relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2505,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-0 left-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2506,
                                                            columnNumber: 41
                                                        }, this),
                                                        paymentTab === 'qr' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10 w-full flex flex-col items-center animate-in fade-in slide-in-from-left-4 duration-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative aspect-square w-48 overflow-hidden rounded-2xl bg-background border-4 border-slate-50 shadow-inner p-2 mb-4 group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.upiQrCode) || "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
                                                                            alt: "UPI QR Code",
                                                                            fill: true,
                                                                            className: "object-contain"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2513,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[scan_2s_ease-in-out_infinite] opacity-60"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2520,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2512,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 bg-secondary/30/80 backdrop-blur px-4 py-2 rounded-full border border-secondary/30 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2523,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-bold text-muted-foreground/80 tracking-wide select-all",
                                                                            children: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.upiId) || "No UPI ID"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2524,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2522,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground/40 font-medium",
                                                                    children: "Scan with any UPI App"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2528,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2511,
                                                            columnNumber: 45
                                                        }, this),
                                                        paymentTab === 'upi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10 w-full space-y-3 animate-in fade-in slide-in-from-right-4 duration-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-2 text-indigo-600",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                                className: "w-6 h-6"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2538,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2537,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-sm font-bold text-muted-foreground",
                                                                            children: "Pay via App"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2540,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-muted-foreground/40",
                                                                            children: "Select your preferred app"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2541,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2536,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "phonepe://pay?pa=".concat(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.upiId, "&pn=").concat(encodeURIComponent((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyName) || ''), "&am=").concat((finalTotal - extraDiscount).toFixed(2), "&tr=").concat(Date.now(), "&tn=Order-").concat(Date.now(), "&cu=INR"),
                                                                    className: "flex items-center gap-3 w-full bg-[#5f259f] hover:bg-[#5f259f]/90 text-primary-foreground p-3 rounded-2xl shadow-lg shadow-purple-200 transition-transform active:scale-95 relative overflow-hidden group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2548,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 bg-background rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#5f259f] font-bold text-xs",
                                                                                children: "Pe"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2550,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2549,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 text-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-sm font-bold",
                                                                                    children: "PhonePe"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 2553,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] opacity-80",
                                                                                    children: "Tap to pay"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 2554,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2552,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "w-4 h-4 opacity-60"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2556,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2544,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "tez://upi/pay?pa=".concat(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.upiId, "&pn=").concat(encodeURIComponent((companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyName) || ''), "&am=").concat((finalTotal - extraDiscount).toFixed(2), "&tr=").concat(Date.now(), "&tn=Order-").concat(Date.now(), "&cu=INR"),
                                                                    className: "flex items-center gap-3 w-full bg-background hover:bg-secondary/30 text-foreground/90 p-3 rounded-2xl shadow-lg shadow-slate-100 border border-secondary/30 transition-transform active:scale-95 group relative overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2563,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 bg-background border border-secondary/30 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground font-bold text-xs",
                                                                                children: "GPay"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2565,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2564,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 text-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-sm font-bold text-muted-foreground",
                                                                                    children: "Google Pay"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 2568,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-muted-foreground/40",
                                                                                    children: "Tap to pay"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 2569,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2567,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground/60"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2571,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2559,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2535,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2503,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-secondary/30/80 rounded-2xl p-4 border border-border/60 backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 2583,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        " UTR / Reference No"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2582,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-medium text-muted-foreground/40 bg-background border border-secondary/30 px-2 py-0.5 rounded-md shadow-sm",
                                                                    children: "Optional"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2585,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2581,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            placeholder: "Paste your UTR number after payment",
                                                            value: manualProof || '',
                                                            onChange: (e)=>setManualProof(e.target.value),
                                                            className: "bg-background border-border focus-visible:ring-indigo-500/50 rounded-xl h-11 text-sm shadow-sm transition-all focus:shadow-md"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2587,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2580,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>{
                                                        setShowQrPopup(false);
                                                        executeSaveOrder();
                                                    },
                                                    className: "w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-primary-foreground shadow-lg shadow-indigo-200 h-14 text-base font-bold tracking-wide transition-all active:scale-[0.98]",
                                                    style: {
                                                        backgroundColor: "hsl(".concat(theme.colors.primary, ")")
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drop-shadow-sm",
                                                            children: "Confirm Payment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2604,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-5 h-5 ml-2 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2605,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2596,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2452,
                                            columnNumber: 33
                                        }, this),
                                        showExitConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 rounded-[32px] animate-in fade-in duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-background items-center text-center p-6 rounded-3xl shadow-2xl w-full max-w-[280px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-bold text-gray-900 mb-2",
                                                        children: "Return to Cart?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2614,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-6",
                                                        children: "Payment process will be cancelled."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2615,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                className: "flex-1 rounded-xl",
                                                                onClick: ()=>setShowExitConfirmation(false),
                                                                children: "No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2617,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                className: "flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-primary-foreground",
                                                                onClick: ()=>{
                                                                    setShowExitConfirmation(false);
                                                                    setShowQrPopup(false);
                                                                    setSmePayData(null);
                                                                    setView('cart'); // Return specifically to cart view
                                                                    setTimeLeft(300); // Reset timer
                                                                },
                                                                children: "Yes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2624,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2616,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2613,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2612,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2421,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 2405,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 2404,
                        columnNumber: 21
                    }, this),
                    showQrPopup && smePayData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-sm bg-background/90 backdrop-blur-2xl rounded-[32px] overflow-hidden shadow-2xl border border-white/50 relative animate-in zoom-in-95 slide-in-from-bottom-5 duration-500 my-auto flex flex-col pt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#0a2e1d] p-5 pb-8 flex items-start justify-between text-white relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "absolute -top-1 -right-1 text-white/50 hover:text-white hover:bg-white/10 rounded-full z-30",
                                            onClick: ()=>setShowExitConfirmation(true),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2659,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2653,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1 pr-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-sm tracking-tight truncate max-w-[150px] uppercase",
                                                            children: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyName) || "STORE NAME"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2663,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-2.5 h-2.5 text-[#0a2e1d] stroke-[3]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2667,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2666,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2662,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-white/70 font-medium",
                                                    children: "SMEPay Trusted Business"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2670,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2661,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end gap-0.5 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-semibold text-white/90",
                                                    children: "Price Summary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2674,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold tracking-tight",
                                                    children: [
                                                        "₹",
                                                        (finalTotal - extraDiscount).toString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2675,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-white/50",
                                                    children: "Secured by SMEPay"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2676,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2673,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2652,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center p-6 bg-white border-b-2 border-slate-100 rounded-t-[32px] -mt-5 relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-base font-bold text-slate-800 mb-5 tracking-tight",
                                            children: "Scan to Pay"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2682,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-square w-48 overflow-hidden rounded-xl bg-white border shadow-sm p-1.5 mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: smePayData.qr_code,
                                                    alt: "SMEPay QR Code",
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2685,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-[scan_2s_ease-in-out_infinite] opacity-60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2692,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2684,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-red-500 font-bold text-lg mb-5 tabular-nums tracking-wider",
                                            children: formatTime(timeLeft)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2695,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold text-slate-500 mb-4 tracking-wide text-center",
                                            children: "Scan using any UPI app"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2699,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-4 w-full px-2 mb-2",
                                            children: [
                                                (smePayData === null || smePayData === void 0 ? void 0 : (_smePayData_intents = smePayData.intents) === null || _smePayData_intents === void 0 ? void 0 : _smePayData_intents.gpay) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: smePayData.intents.gpay,
                                                    className: "w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform border shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 48 48",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "#fbbc05",
                                                                d: "M10.5 45.3L6.9 28 32.7 7.6 36.3 25z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2705,
                                                                columnNumber: 128
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "#ea4335",
                                                                d: "M10.5 45.3L7 28l-5.6 2.5 9.1 14.8z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2705,
                                                                columnNumber: 191
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "#34a853",
                                                                d: "M37.8 28l-5.1-20.4L18 3.5l5.1 20.4z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2705,
                                                                columnNumber: 253
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "#4285f4",
                                                                d: "M37.8 28L41.3 45.3 26.6 30.5z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2705,
                                                                columnNumber: 316
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2705,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2704,
                                                    columnNumber: 41
                                                }, this),
                                                (smePayData === null || smePayData === void 0 ? void 0 : (_smePayData_intents1 = smePayData.intents) === null || _smePayData_intents1 === void 0 ? void 0 : _smePayData_intents1.phonepe) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: smePayData.intents.phonepe,
                                                    className: "w-10 h-10 bg-[#5f259f] rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold text-[10px] leading-none",
                                                        children: "Pe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2710,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2709,
                                                    columnNumber: 41
                                                }, this),
                                                (smePayData === null || smePayData === void 0 ? void 0 : (_smePayData_intents2 = smePayData.intents) === null || _smePayData_intents2 === void 0 ? void 0 : _smePayData_intents2.paytm) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: smePayData.intents.paytm,
                                                    className: "w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center border shadow-sm hover:scale-105 transition-transform",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#00B9F5] font-black text-[9px] leading-none tracking-tight",
                                                        children: "Paytm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2715,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2714,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2702,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold text-slate-400 mt-5",
                                            children: "Powered by SMEPay"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2720,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2681,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 p-4 border-t border-slate-100 flex flex-col gap-3 rounded-b-[32px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl p-3 border shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-[9px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 2728,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " UTR / Reference No"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2727,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-semibold text-slate-400 bg-slate-50 border px-1.5 py-0.5 rounded shadow-sm",
                                                            children: "Optional"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 2730,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2726,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Paste UTR after payment",
                                                    value: manualProof || '',
                                                    onChange: (e)=>setManualProof(e.target.value),
                                                    className: "bg-transparent border-slate-200 focus-visible:ring-emerald-500/30 rounded-lg h-9 text-xs shadow-none transition-all placeholder:text-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2732,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2725,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>{
                                                setShowQrPopup(false);
                                                setSuccessOrderData({
                                                    success: true,
                                                    orderId: smePayData.order_id
                                                });
                                                if (customer === null || customer === void 0 ? void 0 : customer.customerId) {
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$order$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderService"].getCustomerOrders(customer.customerId.toString(), true).catch((err)=>console.error("Cache update failed", err));
                                                }
                                                clearCart();
                                                setView('success');
                                                setContactInfo({
                                                    name: '',
                                                    email: '',
                                                    mobile: ''
                                                });
                                                setSelectedAddressId(null);
                                                setManualProof(null);
                                                setSmePayData(null);
                                            },
                                            className: "w-full rounded-xl bg-[#0a2e1d] hover:bg-[#061f12] text-white shadow h-11 text-sm font-bold tracking-wide transition-all",
                                            children: [
                                                "Confirm Payment",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4 ml-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2757,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2740,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2724,
                                    columnNumber: 29
                                }, this),
                                showExitConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 rounded-[32px] animate-in fade-in duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white items-center text-center p-6 rounded-3xl shadow-2xl w-full max-w-[280px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-slate-900 mb-2",
                                                children: "Cancel Payment?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2765,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-slate-500 mb-6",
                                                children: "Are you sure you want to go back?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2766,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        className: "flex-1 rounded-xl h-10 text-xs",
                                                        onClick: ()=>setShowExitConfirmation(false),
                                                        children: "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2768,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white h-10 text-xs shadow-sm",
                                                        onClick: ()=>{
                                                            setShowExitConfirmation(false);
                                                            setShowQrPopup(false);
                                                            setSmePayData(null);
                                                            setView('cart'); // Return specifically to cart view
                                                            setTimeLeft(300); // Reset timer
                                                        },
                                                        children: "Yes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2775,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2767,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 2764,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2763,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 2649,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 2648,
                        columnNumber: 21
                    }, this),
                    showFreeDeliveryPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-4 top-1/4 z-[100] animate-in zoom-in-95 fade-in slide-in-from-bottom-10 duration-500 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-3xl shadow-2xl relative overflow-hidden border border-white/20 pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-background/20 rounded-full blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2802,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-black/10 rounded-full blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2803,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-14 h-14 bg-background/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                className: "w-7 h-7 text-primary-foreground animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2807,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2806,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-1 tracking-tight",
                                            children: "Free Shipment!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2809,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-primary-foreground/90 text-sm font-medium",
                                            children: "You've unlocked free delivery for this order."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2810,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2805,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "absolute top-2 right-2 text-primary-foreground/60 hover:text-primary-foreground hover:bg-background/10 rounded-full h-8 w-8",
                                    onClick: ()=>setShowFreeDeliveryPopup(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 2819,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2813,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 2800,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 2799,
                        columnNumber: 25
                    }, this),
                    showConflictPopup && stockConflicts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[120] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 slide-in-from-bottom-5",
                            children: [
                                (()=>{
                                    const hasUnresolved = stockConflicts.some((c)=>c.items.reduce((s, i)=>s + i.quantity, 0) > c.availableStock);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 flex flex-col items-center text-center border-b transition-colors duration-300", hasUnresolved ? "bg-rose-500/10 border-rose-500/20" : "bg-primary/10 border-emerald-500/20"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-inner transition-colors duration-300", hasUnresolved ? "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-500" : "bg-emerald-100 dark:bg-emerald-900/30 text-primary dark:text-primary"),
                                                children: hasUnresolved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "w-7 h-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2844,
                                                    columnNumber: 66
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-7 h-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2844,
                                                    columnNumber: 106
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2838,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-foreground tracking-tight transition-all",
                                                children: hasUnresolved ? "Stock Limit Exceeded" : "Issues Resolved"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2846,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mt-2 px-4 leading-relaxed transition-all",
                                                children: hasUnresolved ? "You have requested more items than are currently available. Please adjust quantities below." : "All quantity issues have been resolved. You can now update your cart."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2849,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 2834,
                                        columnNumber: 41
                                    }, this);
                                })(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                    className: "max-h-[60vh]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 space-y-8",
                                        children: stockConflicts.map((conflict, idx)=>{
                                            const totalSelected = conflict.items.reduce((sum, i)=>sum + i.quantity, 0);
                                            const isOverLimit = totalSelected > conflict.availableStock;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between border-b pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-base",
                                                                children: conflict.productName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2867,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: isOverLimit ? "destructive" : "secondary",
                                                                className: "text-xs",
                                                                children: [
                                                                    "Limit: ",
                                                                    conflict.availableStock
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2868,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2866,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: conflict.items.map((item)=>{
                                                            var _item_selectedVariants, _item_selectedColour;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-secondary/30 p-3 rounded-xl",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-medium",
                                                                                children: item.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2877,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: ((_item_selectedVariants = item.selectedVariants) === null || _item_selectedVariants === void 0 ? void 0 : _item_selectedVariants['Quantity']) || ((_item_selectedColour = item.selectedColour) === null || _item_selectedColour === void 0 ? void 0 : _item_selectedColour.name) || "Standard Identity"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2878,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 2876,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 bg-background rounded-lg p-1 border shadow-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "h-7 w-7 rounded-md",
                                                                                onClick: ()=>{
                                                                                    const updatedItems = [
                                                                                        ...conflict.items
                                                                                    ];
                                                                                    const target = updatedItems.find((i)=>i.cartItemId === item.cartItemId);
                                                                                    if (target && target.quantity > 0) target.quantity--;
                                                                                    const newConflicts = [
                                                                                        ...stockConflicts
                                                                                    ];
                                                                                    newConflicts[idx].items = updatedItems;
                                                                                    setStockConflicts(newConflicts);
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 2898,
                                                                                    columnNumber: 73
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2884,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-bold w-4 text-center ".concat(item.quantity === 0 ? 'text-muted-foreground' : 'text-foreground'),
                                                                                children: item.quantity
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2900,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "h-7 w-7 rounded-md",
                                                                                onClick: ()=>{
                                                                                    const updatedItems = [
                                                                                        ...conflict.items
                                                                                    ];
                                                                                    const target = updatedItems.find((i)=>i.cartItemId === item.cartItemId);
                                                                                    if (target) target.quantity++;
                                                                                    const newConflicts = [
                                                                                        ...stockConflicts
                                                                                    ];
                                                                                    newConflicts[idx].items = updatedItems;
                                                                                    setStockConflicts(newConflicts);
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 2917,
                                                                                    columnNumber: 73
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 2903,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 2883,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, item.cartItemId, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2875,
                                                                columnNumber: 61
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2873,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-sm font-medium pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: "Total Selected:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2925,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: isOverLimit ? "text-rose-500 font-bold" : "text-primary font-bold",
                                                                children: [
                                                                    totalSelected,
                                                                    " / ",
                                                                    conflict.availableStock
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 2926,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2924,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2865,
                                                columnNumber: 49
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 2859,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2858,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 pt-0 bg-background/50 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full h-11 rounded-xl font-bold shadow-lg",
                                        disabled: stockConflicts.some((c)=>c.items.reduce((s, i)=>s + i.quantity, 0) > c.availableStock),
                                        onClick: ()=>{
                                            // Apply Resolved Changes to Main Cart
                                            const resolvedMap = new Map();
                                            stockConflicts.forEach((c)=>{
                                                c.items.forEach((i)=>resolvedMap.set(i.cartItemId, i.quantity));
                                            });
                                            const updatedCart = cart.map((item)=>{
                                                if (resolvedMap.has(item.cartItemId)) {
                                                    const newQty = resolvedMap.get(item.cartItemId);
                                                    return {
                                                        ...item,
                                                        quantity: newQty
                                                    };
                                                }
                                                return item;
                                            }).filter((i)=>i.quantity > 0);
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"].setState({
                                                cart: updatedCart
                                            });
                                            setCart(updatedCart); // Added this line as per instruction
                                            setStockConflicts([]);
                                            setShowConflictPopup(false);
                                        // Ideally, trigger checkout again or let user review
                                        },
                                        children: "Update Cart & Continue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 2937,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2936,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 2830,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 2829,
                        columnNumber: 25
                    }, this),
                    showValidationPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 slide-in-from-bottom-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-500/10 p-6 flex flex-col items-center text-center border-b border-amber-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-3 text-amber-600 dark:text-amber-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 2977,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2976,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-foreground",
                                            children: "Cart Updated"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2979,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mt-1",
                                            children: "Some items have changed since you added them."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2980,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2975,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar",
                                            children: validationErrors.map((err, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-sm border-l-2 border-amber-500 pl-3 py-1 text-muted-foreground flex items-start justify-between gap-2 bg-amber-50/50 dark:bg-amber-950/10 rounded-r-md",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-snug",
                                                        children: err.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 2987,
                                                        columnNumber: 49
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 2986,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2984,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full",
                                            onClick: ()=>{
                                                // Manual Review Logic:
                                                // 1. Mark this as an internal update so useEffect doesn't clear validation
                                                isInternalUpdate.current = true;
                                                // 2. Apply Changes
                                                if (validatedCart.length > 0) {
                                                    setCart(validatedCart);
                                                } else {
                                                    console.error('CartSheet: validatedCart is empty!');
                                                }
                                                setValidatedCart([]);
                                                setShowValidationPopup(false);
                                                // 3. Set Validated Flag
                                                setIsValidated(true);
                                                // CHAINED POPUP LOGIC:
                                                // Check if we deferred any stock conflicts
                                                if (pendingStockConflicts.length > 0) {
                                                    setStockConflicts(pendingStockConflicts);
                                                    setShowConflictPopup(true);
                                                    setPendingStockConflicts([]); // Clear buffer
                                                } else {
                                                // All Good -> Stay on Cart View (Manual Review Request)
                                                // We DO NOT auto-advance to 'list' view.
                                                // When user clicks "Checkout" again, handleCheckout will see isValidated=true and skip API.
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "mr-2 w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3025,
                                                    columnNumber: 41
                                                }, this),
                                                "Review & Continue"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 2993,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 2983,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 2974,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 2973,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                        open: !!itemToDelete,
                        onOpenChange: (open)=>!open && setItemToDelete(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                            className: "w-[90%] sm:max-w-[400px] border-none bg-background/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 gap-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center space-y-4 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-destructive/20 blur-xl rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3040,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center relative border border-destructive/20 shadow-inner group-hover:scale-105 transition-transform duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                        className: "w-7 h-7 text-destructive animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3042,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3041,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3039,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                    className: "text-xl font-bold tracking-tight",
                                                    children: "Remove Item?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3047,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                    className: "text-muted-foreground text-sm font-medium leading-relaxed max-w-[260px] mx-auto",
                                                    children: "Are you sure you want to remove this item from your cart? This action cannot be undone."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3048,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3046,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3037,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                    className: "grid grid-cols-2 gap-3 mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                            className: "rounded-xl h-11 border-border/50 bg-secondary/50 hover:bg-secondary hover:text-foreground font-semibold transition-all duration-200 mt-0",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3054,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                            onClick: ()=>{
                                                if (itemToDelete) {
                                                    removeFromCart(itemToDelete);
                                                    setItemToDelete(null);
                                                    toast({
                                                        description: "Item removed from cart",
                                                        className: "bg-background border-border"
                                                    });
                                                }
                                            },
                                            className: "rounded-xl h-11 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold shadow-lg shadow-destructive/20 transition-all duration-200 hover:shadow-destructive/40 hover:-translate-y-0.5",
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3057,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3053,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 3036,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 3035,
                        columnNumber: 17
                    }, this),
                    showLoginPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[120] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden border border-border/50 animate-in zoom-in-95 slide-in-from-bottom-5 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-secondary",
                                    onClick: ()=>setShowLoginPopup(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3088,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3082,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 flex flex-col items-center text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-6 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3094,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center relative border border-primary/20 shadow-inner",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500",
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3096,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3095,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm border border-border z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-rose-500 rounded-full animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3099,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3098,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3093,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold tracking-tight mb-2",
                                            children: "Login Required"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3103,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed text-sm mb-8",
                                            children: "Please log in to your account to verify your identity and secure your order."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3104,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-primary to-primary/90",
                                            onClick: ()=>{
                                                setShowLoginPopup(false); // Clear popup
                                                setCartOpen(false); // Close Cart Sidebar
                                                // Set flag to reopen cart after login
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    sessionStorage.setItem('loginRedirect', 'cart');
                                                }
                                                // Small timeout to allow cart close animation to start/finish
                                                setTimeout(()=>{
                                                    window.dispatchEvent(new Event('open-profile-sidebar'));
                                                }, 300);
                                            },
                                            children: "Log In / Sign Up"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3108,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-6",
                                            children: "Don't have an account? No problem, we'll create one for you instantly using your phone number."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3126,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3091,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 3080,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 3079,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "px-6 py-5 border-b border-border/40 bg-background/50 backdrop-blur-md sticky top-0 z-20",
                        children: view === 'cart' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetClose"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "-ml-2 h-8 w-8 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3145,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3140,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3139,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: "flex items-center gap-2.5 text-xl font-bold tracking-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group/icon",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    className: "w-5 h-5 text-primary group-hover/icon:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3150,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3151,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3152,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3149,
                                            columnNumber: 33
                                        }, this),
                                        "My Cart"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3148,
                                    columnNumber: 29
                                }, this),
                                cartItemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-secondary text-primary",
                                    children: [
                                        cartItemCount,
                                        " items"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3157,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 3138,
                            columnNumber: 25
                        }, this) : view === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                            className: "flex items-center gap-2.5 text-xl font-bold tracking-tight text-primary",
                            children: "Order Confirmed"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 3163,
                            columnNumber: 25
                        }, this) : view === 'failed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                            className: "flex items-center gap-2.5 text-xl font-bold tracking-tight text-rose-600",
                            children: "Action Required"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 3167,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "-ml-2 h-8 w-8 rounded-full",
                                    onClick: ()=>{
                                        if (view === 'add') setView('list');
                                        else if (view === 'payment') setView('list');
                                        else setView('cart');
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4 rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3182,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3172,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: "text-xl font-bold font-headline flex items-center gap-2",
                                    children: view === 'add' ? 'Add New Address' : view === 'payment' ? 'Verify Details' : 'Select Delivery Address'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3184,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                            lineNumber: 3171,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 3136,
                        columnNumber: 17
                    }, this),
                    view !== 'success' && view !== 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutProgressBar, {
                        currentView: view
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 3192,
                        columnNumber: 21
                    }, this),
                    view === 'cart' ? cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-primary/20 blur-2xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3200,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 bg-secondary/50 rounded-full flex items-center justify-center relative backdrop-blur-sm border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "w-10 h-10 text-muted-foreground/60"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3202,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3201,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 3199,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 max-w-[250px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-xl tracking-tight",
                                        children: "Your cart is empty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3206,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm leading-relaxed",
                                        children: "Looks like you haven't added anything yet. Discover our best sellers!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3207,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 3205,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetClose"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "rounded-full w-full max-w-[200px] h-11 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all",
                                    children: "Start Shopping"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3212,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 3211,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                        lineNumber: 3198,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "flex-1 px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "py-6 space-y-6",
                                        children: Array.from(new Set(cart.map((item)=>item.id))).sort((a, b)=>a.localeCompare(b)).map((productId, productIndex)=>{
                                            const groupItems = cart.filter((item)=>item.id === productId);
                                            // Get product-level info from the first item (since they are variants of same product)
                                            const representativeItem = groupItems[0];
                                            const ruleKey = productRules[productId] || "";
                                            const moreThanRule = representativeItem.multipleDiscountMoreThan || "";
                                            const totalQty = productQuantities[productId.toString()] || 0;
                                            // --- Upsell Calculation (Compact) ---
                                            let upsellNode = null;
                                            const cyclicTiers = [];
                                            const flatTiers = [];
                                            // 1. Parse Rule (Cyclic)
                                            if (ruleKey) {
                                                String(ruleKey).split('&&&').forEach((seg)=>{
                                                    const [t, p] = String(seg).split('-');
                                                    if (t && p) cyclicTiers.push({
                                                        threshold: parseFloat(t),
                                                        percent: parseFloat(p)
                                                    });
                                                });
                                            }
                                            // 2. Parse MoreThan (Flat)
                                            if (moreThanRule) {
                                                const [t, p] = String(moreThanRule).split('-');
                                                if (t && p) {
                                                    flatTiers.push({
                                                        threshold: parseFloat(t) + 1,
                                                        percent: parseFloat(p)
                                                    });
                                                }
                                            }
                                            // 3. Determine 'Remainder' for Cyclic Logic
                                            let remainder = totalQty;
                                            const sortedCyclic = [
                                                ...cyclicTiers
                                            ].sort((a, b)=>b.threshold - a.threshold);
                                            if (sortedCyclic.length > 0) {
                                                // Simulate greedy consumption
                                                while(remainder > 0){
                                                    const best = sortedCyclic.find((t)=>t.threshold <= remainder);
                                                    if (best) {
                                                        remainder -= best.threshold;
                                                    } else {
                                                        break; // No tier fits, remainder is pending
                                                    }
                                                }
                                            }
                                            // 4. Find Best Next Goal
                                            // Option A: Cyclic (Base on Remainder) - Only if we have a partial set started (>0)
                                            const cyclicGoals = remainder > 0 ? cyclicTiers.filter((t)=>t.threshold > remainder).map((t)=>({
                                                    needed: t.threshold - remainder,
                                                    percent: t.percent
                                                })) : [];
                                            // Option B: Flat (Base on Total)
                                            const flatGoals = flatTiers.filter((t)=>t.threshold > totalQty).map((t)=>({
                                                    needed: t.threshold - totalQty,
                                                    percent: t.percent
                                                }));
                                            // Combine and Pick Best (Shortest Path to Discount)
                                            const allGoals = [
                                                ...cyclicGoals,
                                                ...flatGoals
                                            ].sort((a, b)=>a.needed - b.needed);
                                            const bestGoal = allGoals[0];
                                            if (bestGoal) {
                                                upsellNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 animate-in slide-in-from-bottom-2 duration-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 cursor-default mx-auto w-fit",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                className: "w-4 h-4 text-primary-foreground fill-white/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3288,
                                                                columnNumber: 65
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-primary-foreground uppercase tracking-wide",
                                                                children: [
                                                                    "Add ",
                                                                    bestGoal.needed,
                                                                    " more to get ",
                                                                    bestGoal.percent,
                                                                    "% Off"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3289,
                                                                columnNumber: 65
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3287,
                                                        columnNumber: 61
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3286,
                                                    columnNumber: 57
                                                }, this);
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "bg-card border border-border/40 rounded-xl p-3 shadow-sm space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500",
                                                style: {
                                                    animationDelay: "".concat(productIndex * 50, "ms")
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: groupItems.map((item, itemIndex)=>{
                                                            const isNew = lastAddedItemId === item.cartItemId;
                                                            // Calculate Rendered Discount for this specific line item
                                                            // We now use the pre-calculated itemDiscountMap which honors price sorting
                                                            const distribution = productDiscounts[item.cartItemId] || [];
                                                            // The distribution array corresponds 1:1 to the units in this specific cart item
                                                            // So we don't need to slice based on group offset anymore, because the map is keyed by cartItemId.
                                                            let itemDiscounts = distribution; // It should already be length == item.quantity
                                                            // Fallback safety
                                                            if (!itemDiscounts || itemDiscounts.length !== item.quantity) {
                                                                // If mismatch (shouldn't happen with correct logic), fill 0 or trim
                                                                // console.warn("Discount mismatch for item", item.cartItemId);
                                                                itemDiscounts = itemDiscounts ? itemDiscounts.slice(0, item.quantity) : [];
                                                                while(itemDiscounts.length < item.quantity)itemDiscounts.push(0);
                                                            }
                                                            // Group by Discount Percentage
                                                            const groups = {};
                                                            itemDiscounts.forEach((d)=>groups[d] = (groups[d] || 0) + 1);
                                                            const distinctDiscounts = Object.keys(groups).map(Number).sort((a, b)=>b - a);
                                                            return distinctDiscounts.map((discountPercent, dIdx)=>{
                                                                var _item_selectedSizeColours, _item_selectedSizeColours_, _item_selectedSizeColours1, _item_selectedColour, _item_selectedSizeColours2;
                                                                const qty = groups[discountPercent];
                                                                const isDiscounted = discountPercent > 0;
                                                                const basePrice = item.priceAfterDiscount || item.price;
                                                                // Note: we don't have item-specific sizeColours easily here if splitting variants.
                                                                // Actually item is the cart item. SizeColours are on the item.
                                                                const sizeColoursCost = ((_item_selectedSizeColours = item.selectedSizeColours) === null || _item_selectedSizeColours === void 0 ? void 0 : _item_selectedSizeColours.reduce((acc, sc)=>acc + sc.price, 0)) || 0;
                                                                const singleItemTotal = basePrice + sizeColoursCost;
                                                                const finalTotal = singleItemTotal * qty * (1 - discountPercent / 100);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative group/item flex gap-4", isNew && "ring-2 ring-primary/20 rounded-xl p-2 -m-2 bg-primary/5 transition-all duration-1000"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-border/50 bg-secondary/30",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: ((_item_selectedSizeColours1 = item.selectedSizeColours) === null || _item_selectedSizeColours1 === void 0 ? void 0 : (_item_selectedSizeColours_ = _item_selectedSizeColours1[0]) === null || _item_selectedSizeColours_ === void 0 ? void 0 : _item_selectedSizeColours_.productPics) || ((_item_selectedColour = item.selectedColour) === null || _item_selectedColour === void 0 ? void 0 : _item_selectedColour.image) || (item.images && item.images.length > 0 ? item.images[0] : item.imageUrl),
                                                                                    alt: item.name,
                                                                                    fill: true,
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("object-cover", (item.productStatus === 'INACTIVE' || item.productStatus === 'OUTOFSTOCK') && "grayscale opacity-60")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3337,
                                                                                    columnNumber: 81
                                                                                }, this),
                                                                                (item.productStatus === 'INACTIVE' || item.productStatus === 'OUTOFSTOCK') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] font-bold text-primary-foreground bg-rose-500/90 px-1.5 py-0.5 rounded-full shadow-sm",
                                                                                        children: item.productStatus === 'OUTOFSTOCK' ? 'SOLD OUT' : 'UNAVAILABLE'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                        lineNumber: 3345,
                                                                                        columnNumber: 89
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3344,
                                                                                    columnNumber: 85
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3336,
                                                                            columnNumber: 77
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-1 flex-col justify-between py-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between items-start gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "space-y-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    href: "/product/".concat(item.id),
                                                                                                    className: "font-bold text-sm leading-tight hover:text-primary line-clamp-2",
                                                                                                    children: item.name
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                    lineNumber: 3355,
                                                                                                    columnNumber: 89
                                                                                                }, this),
                                                                                                (item.selectedVariants || item.selectedSizeColours || item.selectedColour) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex flex-wrap gap-1",
                                                                                                    children: [
                                                                                                        Object.values(item.selectedVariants || {}).map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-[10px] uppercase font-medium text-muted-foreground",
                                                                                                                children: v
                                                                                                            }, i, false, {
                                                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                                lineNumber: 3361,
                                                                                                                columnNumber: 101
                                                                                                            }, this)),
                                                                                                        (_item_selectedSizeColours2 = item.selectedSizeColours) === null || _item_selectedSizeColours2 === void 0 ? void 0 : _item_selectedSizeColours2.map((sc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "flex items-center px-2 py-0.5 bg-background border border-border/50 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-[10px] font-bold text-foreground tracking-tight leading-none",
                                                                                                                    children: sc.name
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                                    lineNumber: 3365,
                                                                                                                    columnNumber: 105
                                                                                                                }, this)
                                                                                                            }, sc.id, false, {
                                                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                                lineNumber: 3364,
                                                                                                                columnNumber: 101
                                                                                                            }, this)),
                                                                                                        item.selectedColour && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex items-center px-2 py-0.5 bg-background border border-border/50 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-[10px] font-bold text-foreground tracking-tight leading-none",
                                                                                                                children: item.selectedColour.name
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                                lineNumber: 3370,
                                                                                                                columnNumber: 105
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                            lineNumber: 3369,
                                                                                                            columnNumber: 101
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                    lineNumber: 3359,
                                                                                                    columnNumber: 93
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 3354,
                                                                                            columnNumber: 85
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-right",
                                                                                            children: isDiscounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex flex-col items-end",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-[10px] text-muted-foreground line-through",
                                                                                                        children: [
                                                                                                            "₹",
                                                                                                            (singleItemTotal * qty).toFixed(0)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                        lineNumber: 3379,
                                                                                                        columnNumber: 97
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "font-bold text-sm text-primary",
                                                                                                        children: [
                                                                                                            "₹",
                                                                                                            finalTotal.toFixed(0)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                        lineNumber: 3380,
                                                                                                        columnNumber: 97
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-[9px] font-bold text-primary-foreground bg-primary px-1.5 py-0.5 rounded-sm shadow-sm mt-0.5",
                                                                                                        children: [
                                                                                                            discountPercent,
                                                                                                            "% OFF"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                        lineNumber: 3381,
                                                                                                        columnNumber: 97
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                lineNumber: 3378,
                                                                                                columnNumber: 93
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-bold text-sm",
                                                                                                children: [
                                                                                                    "₹",
                                                                                                    finalTotal.toFixed(0)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                lineNumber: 3386,
                                                                                                columnNumber: 93
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 3376,
                                                                                            columnNumber: 85
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3353,
                                                                                    columnNumber: 81
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-between mt-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-1 bg-secondary/50 rounded-lg p-0.5 border border-border/50 h-7",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    variant: "ghost",
                                                                                                    className: "h-6 w-6 rounded-md hover:bg-background p-0",
                                                                                                    onClick: ()=>updateQuantity(item.cartItemId, Math.max(0, item.quantity - 1)),
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                                        className: "h-3 w-3"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                        lineNumber: 3395,
                                                                                                        columnNumber: 93
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                    lineNumber: 3393,
                                                                                                    columnNumber: 89
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "w-6 text-center text-xs font-bold tabular-nums",
                                                                                                    children: qty
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                    lineNumber: 3397,
                                                                                                    columnNumber: 89
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    variant: "ghost",
                                                                                                    className: "h-6 w-6 rounded-md hover:bg-background p-0",
                                                                                                    onClick: ()=>updateQuantity(item.cartItemId, item.quantity + 1),
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                                        className: "h-3 w-3"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                        lineNumber: 3400,
                                                                                                        columnNumber: 93
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                    lineNumber: 3398,
                                                                                                    columnNumber: 89
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 3392,
                                                                                            columnNumber: 85
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "ghost",
                                                                                            size: "icon",
                                                                                            className: "h-7 w-7 text-muted-foreground/50 hover:text-destructive hover:bg-destructive/10 rounded-lg",
                                                                                            onClick: ()=>{
                                                                                                if (qty < item.quantity) {
                                                                                                    updateQuantity(item.cartItemId, Math.max(0, item.quantity - qty));
                                                                                                } else {
                                                                                                    setItemToDelete(item.cartItemId);
                                                                                                }
                                                                                            },
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                className: "h-3.5 w-3.5"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                lineNumber: 3410,
                                                                                                columnNumber: 89
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 3403,
                                                                                            columnNumber: 85
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3391,
                                                                                    columnNumber: 81
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3352,
                                                                            columnNumber: 77
                                                                        }, this)
                                                                    ]
                                                                }, "".concat(item.cartItemId, "-").concat(discountPercent), true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3335,
                                                                    columnNumber: 73
                                                                }, this);
                                                            });
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3300,
                                                        columnNumber: 57
                                                    }, this),
                                                    upsellNode
                                                ]
                                            }, "group-".concat(productId), true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 3298,
                                                columnNumber: 53
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3220,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-6",
                                        children: [
                                            (()=>{
                                                const milestones = [];
                                                // Add Free Delivery Milestone
                                                if (freeDeliveryThreshold > 0) {
                                                    milestones.push({
                                                        type: 'delivery',
                                                        value: freeDeliveryThreshold,
                                                        label: 'Free Delivery',
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
                                                    });
                                                }
                                                // Add Coupon Milestones
                                                if (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyCoupon) {
                                                    String(companyDetails.companyCoupon).split(',').forEach((c)=>{
                                                        const [code, , minStr] = String(c).split('&&&');
                                                        const min = parseInt(minStr || '0');
                                                        if (code && min > 0) {
                                                            milestones.push({
                                                                type: 'coupon',
                                                                value: min,
                                                                label: "Unlock ".concat(code),
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"]
                                                            });
                                                        }
                                                    });
                                                }
                                                // Sort by value
                                                milestones.sort((a, b)=>a.value - b.value);
                                                // Find first unreached milestone
                                                const nextMilestone = milestones.find((m)=>subtotal < m.value);
                                                // If all unlocked (or no milestones), show generic success or nothing
                                                if (!nextMilestone) {
                                                    if (milestones.length > 0 && subtotal >= milestones[milestones.length - 1].value) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6 bg-primary/10 p-3 rounded-lg border border-primary/20 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-primary flex items-center justify-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                                        className: "w-3.5 h-3.5 fill-primary/60"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3471,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    "Awesome! All rewards unlocked on this order."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3470,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3469,
                                                            columnNumber: 57
                                                        }, this);
                                                    }
                                                    return null;
                                                }
                                                const amountNeeded = nextMilestone.value - subtotal;
                                                const progress = subtotal / nextMilestone.value * 100;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 bg-secondary/30 p-3 rounded-xl border border-border/60 shadow-sm relative overflow-hidden group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-shimmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3486,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-2 relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-foreground/80 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-primary/10 p-1 rounded-full text-primary",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(nextMilestone.icon, {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3491,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3490,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        "Add ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-primary text-sm font-extrabold",
                                                                            children: [
                                                                                "₹",
                                                                                amountNeeded.toFixed(0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3493,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        " for ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "uppercase",
                                                                            children: nextMilestone.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3493,
                                                                            columnNumber: 157
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3489,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-medium text-muted-foreground",
                                                                    children: [
                                                                        Math.round(progress),
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3495,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3488,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 w-full bg-background rounded-full overflow-hidden border border-border/50 relative z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full transition-all duration-700 ease-out", nextMilestone.type === 'delivery' ? "bg-primary" : "bg-primary"),
                                                                style: {
                                                                    width: "".concat(Math.min(100, progress), "%")
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3499,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3498,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3484,
                                                    columnNumber: 49
                                                }, this);
                                            })(),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6 space-y-3",
                                                children: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyCoupon) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 mt-2",
                                                    children: (()=>{
                                                        const coupons = String(companyDetails.companyCoupon).split(',').map((cStr, idx)=>{
                                                            const [code, discountStr, minOrderStr] = String(cStr).split('&&&');
                                                            const discount = parseFloat(discountStr || '0');
                                                            const minOrder = parseFloat(minOrderStr || '0');
                                                            if (!code) return null;
                                                            return {
                                                                code,
                                                                discount,
                                                                minOrder,
                                                                isEligible: subtotal >= minOrder,
                                                                idx
                                                            };
                                                        }).filter((c)=>c !== null);
                                                        coupons.sort((a, b)=>a.discount - b.discount);
                                                        const selectedCouponData = coupons.find((c)=>c.code === couponCode);
                                                        const hasActiveCoupon = !!selectedCouponData;
                                                        return coupons.map((coupon)=>{
                                                            const isBlocked = hasActiveCoupon && coupon.code !== couponCode;
                                                            const isDisabled = !coupon.isEligible || isBlocked;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    if (!isDisabled) {
                                                                        setCouponCode(coupon.code);
                                                                    }
                                                                },
                                                                disabled: isDisabled,
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex items-center justify-between px-3 py-2 rounded-xl border text-left transition-all duration-300 overflow-hidden", !isDisabled ? "bg-background border-primary/30 shadow-sm hover:border-primary hover:shadow-md cursor-pointer" : "bg-secondary/30 border-border cursor-not-allowed opacity-60"),
                                                                children: [
                                                                    couponCode === coupon.code && coupon.isEligible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-primary/5 animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3557,
                                                                        columnNumber: 73
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-black tracking-wide font-mono leading-none", coupon.isEligible ? "text-foreground" : "text-muted-foreground/40"),
                                                                                children: coupon.code
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3561,
                                                                                columnNumber: 73
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-medium text-muted-foreground leading-none mt-1",
                                                                                children: coupon.isEligible ? "Get ".concat(coupon.discount, "% OFF") : "".concat(coupon.discount, "% OFF • Orders above ₹").concat(coupon.minOrder)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3565,
                                                                                columnNumber: 73
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3560,
                                                                        columnNumber: 69
                                                                    }, this),
                                                                    couponCode === coupon.code && coupon.isEligible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-4 w-4 rounded-full bg-primary flex items-center justify-center shadow-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-1.5 w-1.5 bg-background rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3572,
                                                                            columnNumber: 77
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3571,
                                                                        columnNumber: 73
                                                                    }, this) : coupon.isEligible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-4 w-4 rounded-full border border-primary/30 group-hover:border-primary transition-colors"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3576,
                                                                        columnNumber: 77
                                                                    }, this)
                                                                ]
                                                            }, coupon.idx, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3541,
                                                                columnNumber: 65
                                                            }, this);
                                                        });
                                                    })()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3515,
                                                    columnNumber: 49
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-secondary/20 border border-border/40 rounded-xl text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed",
                                                        children: "No coupons available at this moment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3586,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3585,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 3512,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Subtotal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3595,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "₹",
                                                                    subtotal.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3596,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3594,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Shipping"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3599,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isFreeDelivery ? "text-green-600 font-medium" : ""),
                                                                children: isFreeDelivery ? "FREE" : "₹" + shipping.toFixed(2)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3600,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3598,
                                                        columnNumber: 45
                                                    }, this),
                                                    discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm text-primary font-medium animate-in slide-in-from-left-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Coupon (",
                                                                    couponCode,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3606,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "-₹",
                                                                    discountAmount.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3607,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3605,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px bg-gradient-to-r from-transparent via-border to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3610,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 3593,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3428,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 3219,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-background/80 backdrop-blur-xl border-t border-border/50 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] z-20",
                                children: [
                                    (features === null || features === void 0 ? void 0 : features.enableStorePickup) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 animate-in fade-in slide-in-from-top-2 duration-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsPickup(false),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all", !isPickup ? "bg-primary/10 border-primary shadow-sm ring-1 ring-primary/20" : "bg-transparent border-border hover:bg-secondary/20"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", !isPickup ? "text-primary" : "text-muted-foreground")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3628,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-bold uppercase tracking-tight", !isPickup ? "text-primary transition-colors" : "text-muted-foreground"),
                                                            children: "Delivery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3629,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3621,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsPickup(true),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all", isPickup ? "bg-primary/10 border-primary shadow-sm ring-1 ring-primary/20" : "bg-transparent border-border hover:bg-secondary/20"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isPickup ? "text-primary" : "text-muted-foreground")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3638,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-bold uppercase tracking-tight", isPickup ? "text-primary transition-colors" : "text-muted-foreground"),
                                                            children: "Pickup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3639,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3631,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3620,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3619,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-baseline mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-lg",
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 3645,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-2xl text-primary tracking-tight",
                                                children: [
                                                    "₹",
                                                    finalTotal.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 3646,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3644,
                                        columnNumber: 37
                                    }, this),
                                    !canCheckout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-destructive text-center mb-2 font-medium bg-destructive/10 py-1 px-2 rounded-lg",
                                        children: [
                                            "Minimum order amount is ₹",
                                            minOrder.toFixed(0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3650,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-12 rounded-full text-base font-bold shadow-lg transition-all duration-300", canCheckout ? "shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 bg-gradient-to-r from-primary to-primary/90" : "bg-muted text-muted-foreground shadow-none cursor-not-allowed"),
                                        disabled: !canCheckout || isCheckingOut,
                                        onClick: canCheckout ? handleCheckout : undefined,
                                        children: canCheckout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center w-full justify-center",
                                            children: isCheckingOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Validating ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "ml-2 w-4 h-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3668,
                                                        columnNumber: 66
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    " ",
                                                    text.checkoutButton || "Checkout securely",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ml-2 w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 3670,
                                                        columnNumber: 101
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3666,
                                            columnNumber: 45
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Checkout Disabled"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3674,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 3655,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 3616,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            view !== 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "flex-1 bg-secondary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 space-y-8",
                                    children: [
                                        view === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-bold text-muted-foreground uppercase tracking-wider pl-1",
                                                            children: "Contact Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3690,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-background p-5 rounded-2xl border shadow-sm space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "cName",
                                                                            children: [
                                                                                "Full Name ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-destructive",
                                                                                    children: "*"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3694,
                                                                                    columnNumber: 75
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3693,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "cName",
                                                                            placeholder: "John Doe",
                                                                            value: contactInfo.name,
                                                                            onChange: (e)=>setContactInfo({
                                                                                    ...contactInfo,
                                                                                    name: e.target.value
                                                                                }),
                                                                            className: "bg-secondary/20 border-transparent focus:bg-background focus:border-input rounded-xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3696,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3692,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "cPhone",
                                                                            children: "Phone Number"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3705,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "cPhone",
                                                                            placeholder: "9876543210",
                                                                            value: contactInfo.mobile,
                                                                            readOnly: true,
                                                                            className: "bg-secondary/10 border-transparent text-muted-foreground focus-visible:ring-0 cursor-not-allowed rounded-xl opacity-90 font-medium"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3706,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3704,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "cEmail",
                                                                            children: "Email Address"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3715,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "cEmail",
                                                                            placeholder: "john@example.com",
                                                                            value: contactInfo.email,
                                                                            onChange: (e)=>setContactInfo({
                                                                                    ...contactInfo,
                                                                                    email: e.target.value
                                                                                }),
                                                                            className: "bg-secondary/20 border-transparent focus:bg-background focus:border-input rounded-xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3718,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 mt-2 px-1 opacity-80",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                                    className: "w-3 h-3 text-primary animate-pulse"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3726,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] text-muted-foreground font-medium",
                                                                                    children: "Please enter correctly for order confirmation."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3727,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3725,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3714,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3691,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3689,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-bold text-muted-foreground uppercase tracking-wider pl-1",
                                                            children: "Saved Addresses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3737,
                                                            columnNumber: 53
                                                        }, this),
                                                        loadingAddresses ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center py-12 gap-3 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "w-8 h-8 animate-spin text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3741,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium",
                                                                    children: "Loading addresses..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3742,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3740,
                                                            columnNumber: 57
                                                        }, this) : addresses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center py-10 px-4 bg-background rounded-3xl border border-dashed border-border/60",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        className: "w-6 h-6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3747,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3746,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: "No addresses found"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3749,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    onClick: ()=>setView('add'),
                                                                    variant: "secondary",
                                                                    className: "mt-4 rounded-full",
                                                                    children: "Add First Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3750,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3745,
                                                            columnNumber: 57
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-4",
                                                            children: [
                                                                [
                                                                    ...addresses
                                                                ].sort((a, b)=>a.customerAddressId === selectedAddressId ? -1 : b.customerAddressId === selectedAddressId ? 1 : 0).map((addr)=>{
                                                                    const isSelected = selectedAddressId === addr.customerAddressId;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setSelectedAddressId(addr.customerAddressId),
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative group cursor-pointer p-4 rounded-2xl border transition-all duration-300", isSelected ? "bg-primary/5 border-primary shadow-sm" : "bg-background border-border hover:border-primary/30 hover:shadow-md"),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors", isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground group-hover:bg-secondary/80"),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                                                        className: "w-5 h-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                        lineNumber: 3774,
                                                                                        columnNumber: 81
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3770,
                                                                                    columnNumber: 77
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1 min-w-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between mb-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-base truncate", isSelected ? "text-primary" : "text-foreground"),
                                                                                                    children: addr.addressName
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                    lineNumber: 3778,
                                                                                                    columnNumber: 85
                                                                                                }, this),
                                                                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0 text-center rounded-full flex items-center gap-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                            className: "w-3 h-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                            lineNumber: 3786,
                                                                                                            columnNumber: 93
                                                                                                        }, this),
                                                                                                        " Selected"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                    lineNumber: 3785,
                                                                                                    columnNumber: 89
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 3777,
                                                                                            columnNumber: 81
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm text-muted-foreground leading-relaxed line-clamp-2",
                                                                                            children: [
                                                                                                addr.customerDrNum,
                                                                                                ", ",
                                                                                                addr.customerRoad,
                                                                                                ", ",
                                                                                                addr.customerCity,
                                                                                                " - ",
                                                                                                addr.customerPin
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 3790,
                                                                                            columnNumber: 81
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3776,
                                                                                    columnNumber: 77
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3769,
                                                                            columnNumber: 73
                                                                        }, this)
                                                                    }, addr.customerAddressId, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3759,
                                                                        columnNumber: 69
                                                                    }, this);
                                                                }),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setView('add'),
                                                                    className: "flex items-center justify-center gap-2 p-4 rounded-2xl border border-dashed border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3803,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3802,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold text-sm text-muted-foreground group-hover:text-primary",
                                                                            children: "Add New Address"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3805,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3798,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3755,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3736,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 sticky bottom-0 bg-background/95 backdrop-blur pb-6 mt-auto border-t space-y-4 px-4",
                                                    children: [
                                                        (features === null || features === void 0 ? void 0 : features.enableStorePickup) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "animate-in fade-in slide-in-from-bottom-2 duration-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setIsPickup(false),
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all", !isPickup ? "bg-primary/10 border-primary shadow-sm ring-1 ring-primary/20" : "bg-transparent border-border hover:bg-secondary/20"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", !isPickup ? "text-primary" : "text-muted-foreground")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3823,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-bold uppercase tracking-tight", !isPickup ? "text-primary transition-colors" : "text-muted-foreground"),
                                                                                children: "Delivery"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3824,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3816,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setIsPickup(true),
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all", isPickup ? "bg-primary/10 border-primary shadow-sm ring-1 ring-primary/20" : "bg-transparent border-border hover:bg-secondary/20"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isPickup ? "text-primary" : "text-muted-foreground")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3833,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-bold uppercase tracking-tight", isPickup ? "text-primary transition-colors" : "text-muted-foreground"),
                                                                                children: "Pickup"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 3834,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 3826,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3815,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3814,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all bg-gradient-to-r from-primary to-primary/90",
                                                            disabled: !isPickup && !selectedAddressId,
                                                            onClick: async ()=>{
                                                                if (!contactInfo.name) {
                                                                    toast({
                                                                        variant: "destructive",
                                                                        title: "Missing Details",
                                                                        description: "Please enter your Full Name."
                                                                    });
                                                                    return;
                                                                }
                                                                // Optional Email Validation
                                                                if (contactInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) {
                                                                    toast({
                                                                        variant: "destructive",
                                                                        title: "Invalid Email",
                                                                        description: "Please enter a valid email address."
                                                                    });
                                                                    return;
                                                                }
                                                                // Update customer details if changed
                                                                if (customer && (contactInfo.name !== customer.customerName || contactInfo.email !== customer.customerEmailId || contactInfo.mobile !== customer.customerMobileNumber)) {
                                                                    try {
                                                                        const updatedCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$customer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customerService"].updateCustomer({
                                                                            customerId: customer.customerId,
                                                                            companyId: customer.companyId || (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.companyId) || '',
                                                                            customerName: contactInfo.name,
                                                                            customerEmailId: contactInfo.email,
                                                                            customerMobileNumber: contactInfo.mobile,
                                                                            customerStatus: customer.customerStatus,
                                                                            createdAt: customer.createdAt,
                                                                            customerImage: customer.customerImage
                                                                        });
                                                                        // Update local state without fetching
                                                                        if (updatedCustomer) {
                                                                            setCustomer(updatedCustomer);
                                                                            // Notify other components with the NEW data
                                                                            window.dispatchEvent(new CustomEvent('profile-updated', {
                                                                                detail: updatedCustomer
                                                                            }));
                                                                            toast({
                                                                                description: "Profile details updated."
                                                                            });
                                                                        }
                                                                    } catch (error) {
                                                                        console.error("Failed to update profile", error);
                                                                    // We continue anyway so they can pay? Or stop? 
                                                                    // Let's continue but warn? Or maybe just log. User wants update, so best to try.
                                                                    }
                                                                }
                                                                setView('payment');
                                                            },
                                                            children: [
                                                                "Proceed to Payment ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-5 h-5 ml-2 Group-hover:translate-x-1 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3897,
                                                                    columnNumber: 76
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3839,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3811,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        view === 'add' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-in slide-in-from-right-8 fade-in duration-300 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 bg-background p-6 rounded-3xl border shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    children: "Address Label"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3908,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-3",
                                                                    children: [
                                                                        {
                                                                            id: 'Home',
                                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                                                                            label: 'Home'
                                                                        },
                                                                        {
                                                                            id: 'Work',
                                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                                                                            label: 'Work'
                                                                        },
                                                                        {
                                                                            id: 'Other',
                                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                                                            label: 'Other'
                                                                        }
                                                                    ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleLabelChange(type.id),
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-200 text-sm font-medium", addressLabel === type.id ? "bg-teal-600 text-primary-foreground border-teal-600 shadow-md shadow-teal-500/20" : "bg-background text-muted-foreground/80 border-border hover:border-teal-200 hover:bg-teal-50"),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(type.icon, {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", addressLabel === type.id ? "text-primary-foreground" : "text-muted-foreground/40")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3925,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                type.label
                                                                            ]
                                                                        }, type.id, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3915,
                                                                            columnNumber: 65
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3909,
                                                                    columnNumber: 57
                                                                }, this),
                                                                addressLabel === 'Other' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "animate-in fade-in slide-in-from-top-2 duration-300 mt-2 relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "customName",
                                                                            className: "sr-only",
                                                                            children: "Custom Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3933,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "customName",
                                                                            placeholder: "e.g. Grandma's House, My Office",
                                                                            className: "h-12 bg-secondary/30 border-transparent focus:border-primary focus:bg-background transition-all rounded-xl",
                                                                            value: newAddress.addressName === 'Other' ? '' : newAddress.addressName,
                                                                            onChange: (e)=>setNewAddress({
                                                                                    ...newAddress,
                                                                                    addressName: e.target.value
                                                                                }),
                                                                            autoFocus: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3934,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3932,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3907,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "road",
                                                                            children: "Street Address"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3948,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                    className: "absolute left-3 top-3.5 h-4 w-4 text-muted-foreground"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3950,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                    id: "road",
                                                                                    placeholder: "e.g. 123 Main St, Apt 4B",
                                                                                    className: "w-full min-h-[80px] pl-10 pt-3 rounded-xl border-transparent bg-secondary/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:bg-background focus:border-input",
                                                                                    value: newAddress.customerRoad,
                                                                                    onChange: (e)=>setNewAddress({
                                                                                            ...newAddress,
                                                                                            customerRoad: e.target.value
                                                                                        })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3951,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3949,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3947,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: "pincode",
                                                                                    children: "Pincode"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3962,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    id: "pincode",
                                                                                    placeholder: "560001",
                                                                                    value: newAddress.customerPin,
                                                                                    onChange: (e)=>handlePincodeChange(e.target.value),
                                                                                    className: "bg-secondary/20 border-transparent focus:bg-background focus:border-input rounded-xl"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3963,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3961,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: "city",
                                                                                    children: "City"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3972,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    id: "city",
                                                                                    placeholder: "City",
                                                                                    value: newAddress.customerCity,
                                                                                    readOnly: true,
                                                                                    className: "bg-secondary/10 border-transparent text-muted-foreground cursor-not-allowed rounded-xl"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 3973,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3971,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3960,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "state",
                                                                            children: "State"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3983,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "state",
                                                                            placeholder: "State",
                                                                            value: newAddress.customerState,
                                                                            readOnly: true,
                                                                            className: "bg-secondary/10 border-transparent text-muted-foreground cursor-not-allowed rounded-xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 3984,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 3982,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3946,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3906,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-50 text-blue-800 p-4 rounded-2xl text-xs font-medium leading-relaxed border border-blue-100 flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-blue-100 p-1.5 rounded-full h-fit",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 3998,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 3997,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Ensure your address details are accurate to avoid delivery delays. Pincode is crucial for serviceability checks."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4000,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 3996,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20",
                                                    onClick: handleSaveAddress,
                                                    disabled: savingAddress,
                                                    children: savingAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "mr-2 h-4 w-4 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 4010,
                                                                columnNumber: 61
                                                            }, this),
                                                            " Saving..."
                                                        ]
                                                    }, void 0, true) : "Save Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 4003,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 3905,
                                            columnNumber: 45
                                        }, this),
                                        view === 'payment' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-in slide-in-from-right-8 fade-in duration-500 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setSelectedPaymentMethod('ONLINE'),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden cursor-pointer p-6 rounded-3xl border transition-all duration-500 group", selectedPaymentMethod === 'ONLINE' ? "border-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-primary-foreground shadow-2xl shadow-slate-900/20" : "bg-background border-border hover:border-slate-300"),
                                                    children: [
                                                        selectedPaymentMethod === 'ONLINE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 opacity-20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] -mr-32 -mt-32"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4036,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] -ml-32 -mb-32"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4037,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4035,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10 flex items-start gap-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-lg", selectedPaymentMethod === 'ONLINE' ? "bg-background/10 backdrop-blur-md border border-white/10 text-primary-foreground" : "bg-secondary/50 text-muted-foreground/60"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                        className: "w-7 h-7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 4048,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4042,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-xl tracking-tight", selectedPaymentMethod === 'ONLINE' ? "text-primary-foreground" : "text-foreground"),
                                                                                    children: "Online Payment"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4053,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                selectedPaymentMethod === 'ONLINE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-6 w-6 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 scale-100 opacity-100 transition-all",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                        className: "w-3.5 h-3.5 text-primary-foreground stroke-[3]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                        lineNumber: 4061,
                                                                                        columnNumber: 73
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4060,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4052,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm leading-relaxed max-w-[90%]", selectedPaymentMethod === 'ONLINE' ? "text-muted-foreground/30" : "text-muted-foreground/60"),
                                                                            children: "Secure instant payment via UPI."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4066,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pt-3 flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider", selectedPaymentMethod === 'ONLINE' ? "bg-background/10 text-primary-foreground/90" : "bg-secondary/50 text-muted-foreground/80"),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                                            className: "w-3 h-3"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 4078,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        " 100% Secure"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4074,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-medium opacity-60", selectedPaymentMethod === 'ONLINE' ? "text-primary-foreground" : "text-muted-foreground/60")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4080,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4073,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4051,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4041,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 4024,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-background p-5 rounded-3xl border border-secondary/30 shadow-sm relative overflow-hidden group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4092,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xs font-bold text-muted-foreground/40 uppercase tracking-widest mb-4 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4095,
                                                                    columnNumber: 57
                                                                }, this),
                                                                " Delivery To"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4094,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-4 sticky z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full bg-secondary/30 border border-secondary/30 flex items-center justify-center shrink-0 text-muted-foreground/80",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 4100,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4099,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: (()=>{
                                                                        const addr = addresses.find((a)=>a.customerAddressId === selectedAddressId);
                                                                        return addr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-bold text-foreground",
                                                                                            children: contactInfo.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 4108,
                                                                                            columnNumber: 77
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] font-bold bg-secondary/50 px-2 py-0.5 rounded text-muted-foreground/80 uppercase tracking-wider",
                                                                                            children: addr.addressName || 'Home'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 4109,
                                                                                            columnNumber: 77
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4107,
                                                                                    columnNumber: 73
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-muted-foreground/60 leading-relaxed font-medium",
                                                                                    children: [
                                                                                        [
                                                                                            addr.customerDrNum,
                                                                                            addr.customerRoad,
                                                                                            addr.customerCity
                                                                                        ].filter(Boolean).join(', '),
                                                                                        " - ",
                                                                                        addr.customerPin
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4113,
                                                                                    columnNumber: 73
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-muted-foreground/40 font-medium",
                                                                                    children: contactInfo.mobile
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4116,
                                                                                    columnNumber: 73
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4106,
                                                                            columnNumber: 69
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-destructive",
                                                                            children: "No address selected"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4120,
                                                                            columnNumber: 69
                                                                        }, this);
                                                                    })()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4102,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    className: "h-8 text-xs font-bold text-primary hover:bg-primary/5 hover:text-primary rounded-full px-3",
                                                                    onClick: ()=>setView('list'),
                                                                    children: "Change"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4123,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4098,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 4091,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-background rounded-3xl border border-secondary/30 shadow-sm overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-5 border-b border-slate-50 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xs font-bold text-muted-foreground/40 uppercase tracking-widest flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4138,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        " Order Summary"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4137,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-foreground bg-secondary/30 px-2.5 py-1 rounded-full",
                                                                    children: [
                                                                        cartItemCount,
                                                                        " Items"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4140,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4136,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "max-h-[220px] overflow-y-auto p-2",
                                                            children: cart.map((item)=>{
                                                                var _item_selectedSizeColours_, _item_selectedSizeColours, _item_selectedColour;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-3 p-3 rounded-2xl hover:bg-secondary/30 transition-colors group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-12 w-12 rounded-lg bg-secondary/50 overflow-hidden shrink-0 relative",
                                                                            children: item.images && item.images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: item.images[0],
                                                                                alt: item.name,
                                                                                className: "h-full w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 4149,
                                                                                columnNumber: 73
                                                                            }, this) : item.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: item.imageUrl,
                                                                                alt: item.name,
                                                                                className: "h-full w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 4151,
                                                                                columnNumber: 73
                                                                            }, this) : null
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4147,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0 flex flex-col justify-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between items-start",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                            className: "font-bold text-sm text-foreground line-clamp-2 leading-tight flex-1 mr-2",
                                                                                            children: item.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 4157,
                                                                                            columnNumber: 73
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-right flex flex-col items-end shrink-0",
                                                                                            children: (()=>{
                                                                                                var _item_selectedSizeColours;
                                                                                                const sizeColoursCost = ((_item_selectedSizeColours = item.selectedSizeColours) === null || _item_selectedSizeColours === void 0 ? void 0 : _item_selectedSizeColours.reduce((acc, sc)=>acc + sc.price, 0)) || 0;
                                                                                                const basePrice = item.priceAfterDiscount || item.price;
                                                                                                const unitOriginal = item.price + sizeColoursCost;
                                                                                                // Calculate total using itemDiscountMap
                                                                                                const unitDiscounts = itemDiscountMap[item.cartItemId] || new Array(item.quantity).fill(0);
                                                                                                let finalItemTotal = 0;
                                                                                                unitDiscounts.forEach((d)=>{
                                                                                                    finalItemTotal += (basePrice + sizeColoursCost) * (1 - d / 100);
                                                                                                });
                                                                                                const hasDiscount = finalItemTotal < unitOriginal * item.quantity - 0.1; // Small epsilon for float comparison
                                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                                    children: [
                                                                                                        hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex items-center gap-1.5 mb-0.5",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-[10px] text-muted-foreground/40 line-through leading-none",
                                                                                                                    children: [
                                                                                                                        "₹",
                                                                                                                        (unitOriginal * item.quantity).toFixed(0)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                                    lineNumber: 4177,
                                                                                                                    columnNumber: 97
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-[9px] font-bold text-primary bg-primary/10 px-1 rounded-sm leading-tight border border-primary/20",
                                                                                                                    children: [
                                                                                                                        Math.round((unitOriginal * item.quantity - finalItemTotal) / (unitOriginal * item.quantity) * 100),
                                                                                                                        "% OFF"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                                    lineNumber: 4180,
                                                                                                                    columnNumber: 97
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                            lineNumber: 4176,
                                                                                                            columnNumber: 93
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "font-bold text-sm text-foreground leading-none",
                                                                                                            children: [
                                                                                                                "₹",
                                                                                                                finalItemTotal.toFixed(0)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                                            lineNumber: 4185,
                                                                                                            columnNumber: 89
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true);
                                                                                            })()
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                            lineNumber: 4158,
                                                                                            columnNumber: 73
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4156,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-muted-foreground/40 mt-0.5",
                                                                                    children: [
                                                                                        "Qty: ",
                                                                                        item.quantity,
                                                                                        " ",
                                                                                        Object.values(item.selectedVariants || {}).length > 0 && "• ".concat(Object.values(item.selectedVariants || {}).join(', ')),
                                                                                        ((_item_selectedSizeColours = item.selectedSizeColours) === null || _item_selectedSizeColours === void 0 ? void 0 : (_item_selectedSizeColours_ = _item_selectedSizeColours[0]) === null || _item_selectedSizeColours_ === void 0 ? void 0 : _item_selectedSizeColours_.name) && " ".concat(item.selectedSizeColours[0].name.toUpperCase()),
                                                                                        ((_item_selectedColour = item.selectedColour) === null || _item_selectedColour === void 0 ? void 0 : _item_selectedColour.name) && " ".concat(item.selectedColour.name.toUpperCase())
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                    lineNumber: 4193,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4155,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, item.cartItemId, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4145,
                                                                    columnNumber: 61
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4143,
                                                            columnNumber: 53
                                                        }, this),
                                                        (features === null || features === void 0 ? void 0 : features.enableStorePickup) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4 animate-in fade-in slide-in-from-top-2 duration-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setIsPickup(false),
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all", !isPickup ? "bg-primary/10 border-primary shadow-sm ring-1 ring-primary/20" : "bg-transparent border-border hover:bg-secondary/20"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", !isPickup ? "text-primary" : "text-muted-foreground")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 4215,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-bold uppercase tracking-tight", !isPickup ? "text-primary transition-colors" : "text-muted-foreground"),
                                                                                children: "Delivery"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 4216,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 4208,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setIsPickup(true),
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all", isPickup ? "bg-primary/10 border-primary shadow-sm ring-1 ring-primary/20" : "bg-transparent border-border hover:bg-secondary/20"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isPickup ? "text-primary" : "text-muted-foreground")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 4225,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-bold uppercase tracking-tight", isPickup ? "text-primary transition-colors" : "text-muted-foreground"),
                                                                                children: "Pickup"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                                lineNumber: 4226,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                        lineNumber: 4218,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                lineNumber: 4207,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4206,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-secondary/30/50 p-5 space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm text-muted-foreground/60",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Item Total"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4234,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium text-foreground",
                                                                            children: [
                                                                                "₹",
                                                                                subtotal.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4235,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4233,
                                                                    columnNumber: 57
                                                                }, this),
                                                                discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm text-primary font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Discount"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4239,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "-₹",
                                                                                discountAmount.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4240,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4238,
                                                                    columnNumber: 61
                                                                }, this),
                                                                extraDiscount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm text-rose-600 font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Extra Discount"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4245,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "-₹",
                                                                                extraDiscount.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4246,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4244,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm text-muted-foreground/60",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: isPickup ? 'Store Pickup' : 'Delivery'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4250,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: isFreeDelivery || isPickup ? "text-primary font-bold" : "text-foreground",
                                                                            children: isFreeDelivery || isPickup ? "FREE" : "₹" + shipping.toFixed(2)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4251,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4249,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-px bg-slate-200/60 my-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4255,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-end",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-base text-foreground",
                                                                            children: "To Pay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4257,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-black text-xl text-primary font-headline",
                                                                            children: [
                                                                                "₹",
                                                                                (finalTotal - extraDiscount).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                            lineNumber: 4258,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                                    lineNumber: 4256,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                            lineNumber: 4232,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 4135,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 4021,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                    lineNumber: 3683,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 3682,
                                columnNumber: 33
                            }, this),
                            view === 'payment' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-background pt-4 border-t border-border/50 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-14 rounded-2xl text-lg font-bold shadow-xl transition-all", (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.razorpay) === false || (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.smePay) || (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.cashFree) ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200" : "bg-primary hover:bg-primary/90 shadow-primary/30"),
                                        onClick: (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.razorpay) === false || (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.smePay) || (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.cashFree) ? handleManualPayment : handlePaymentInitialize,
                                        disabled: isInitializingPayment || (companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.razorpay) === false && !(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.smePay) && !(companyDetails === null || companyDetails === void 0 ? void 0 : companyDetails.cashFree) && timeLeft === 0,
                                        children: isInitializingPayment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 h-5 w-5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 4285,
                                                    columnNumber: 49
                                                }, this),
                                                " Processing..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "Place Order & Pay ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                    lineNumber: 4289,
                                                    columnNumber: 67
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 4288,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4272,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 mt-3 opacity-60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4294,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-medium",
                                                children: "Safe & Secure Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4295,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4293,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 4271,
                                columnNumber: 33
                            }, this),
                            view === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-full p-8 text-center animate-in fade-in zoom-in duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100/50 animate-bounce",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-12 h-12 text-green-600 stroke-[3]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 4304,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4303,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-black text-foreground mb-2 font-headline tracking-tight",
                                        children: "Order Placed!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4307,
                                        columnNumber: 37
                                    }, this),
                                    (successOrderData === null || successOrderData === void 0 ? void 0 : successOrderData.orderNumber) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 inline-block bg-secondary/50 px-3 py-1 rounded-lg border border-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-mono text-muted-foreground/60 font-medium tracking-wider",
                                            children: [
                                                "ORDER #",
                                                successOrderData.orderNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 4310,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4309,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground/60 mb-8 max-w-[280px] leading-relaxed",
                                        children: "Thank you for your purchase. Your order has been received and is confirmed."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4315,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-secondary/30 p-6 rounded-2xl border border-secondary/30 w-full max-w-sm mb-8 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-20 h-20 bg-blue-50/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4320,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground/60 font-medium",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 4322,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                        children: "CONFIRMED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 4323,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4321,
                                                columnNumber: 41
                                            }, this),
                                            (successOrderData === null || successOrderData === void 0 ? void 0 : successOrderData.finalTotalAmount) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground/60 font-medium",
                                                        children: "Total Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 4327,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-black text-foreground font-headline",
                                                        children: formatCurrency(successOrderData.finalTotalAmount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 4328,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4326,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-slate-200/60 my-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4333,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground/40 mt-2",
                                                children: "We'll send you delivery updates via WhatsApp/SMS."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4334,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4319,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30",
                                        onClick: ()=>{
                                            setCartOpen(false);
                                            // Reset view after closing so next open shows cart
                                            setTimeout(()=>setView('cart'), 300);
                                        },
                                        children: "Continue Shopping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4339,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 4302,
                                columnNumber: 33
                            }, this),
                            view === 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-full p-8 text-center animate-in fade-in zoom-in duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 bg-rose-100/80 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-rose-100/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                            className: "w-12 h-12 text-rose-600 stroke-[3]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/CartSheet.tsx",
                                            lineNumber: 4357,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4356,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-black text-foreground mb-2 font-headline tracking-tight",
                                        children: "Payment Failed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4360,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground/80 mb-8 max-w-[280px] leading-relaxed",
                                        children: "We couldn't process your payment. Please try again or use a different payment method."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4361,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-secondary/30 p-6 rounded-2xl border border-rose-100 w-full max-w-sm mb-8 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-20 h-20 bg-rose-50/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4366,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-foreground font-medium",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 4368,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                        children: "FAILED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                        lineNumber: 4369,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4367,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-slate-200/60 my-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4371,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground/60 mt-2 text-left",
                                                children: "Note: If money was deducted from your account, it will be refunded automatically by your bank within 3-5 business days."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                                lineNumber: 4372,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4365,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30 mb-3",
                                        onClick: ()=>{
                                            setView('payment');
                                        },
                                        children: "Try Again"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4377,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "lg",
                                        className: "w-full h-14 rounded-2xl text-base font-bold text-muted-foreground",
                                        onClick: ()=>setView('cart'),
                                        children: "Back to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/CartSheet.tsx",
                                        lineNumber: 4386,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/CartSheet.tsx",
                                lineNumber: 4355,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/CartSheet.tsx",
                lineNumber: 2365,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/CartSheet.tsx",
        lineNumber: 2355,
        columnNumber: 9
    }, this);
}
_s(CartSheet, "7wnvSuy9JRKxI93fk5sorzpinVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$razorpay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRazorpay"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sheet$2d$back$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSheetBackHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = CartSheet;
var _c, _c1;
__turbopack_context__.k.register(_c, "CheckoutProgressBar");
__turbopack_context__.k.register(_c1, "CartSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cart/AddToCartSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCartSheet",
    ()=>AddToCartSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-cart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sheet$2d$back$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-sheet-back-handler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/TenantContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
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
;
;
// --- styled components for the modern look ---
const OptionCard = (param)=>{
    let { label, subLabel, isSelected, active, statusLabel, onClick } = param;
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"])();
    const productCard = theme === null || theme === void 0 ? void 0 : theme.productCard;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: active ? onClick : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col items-center justify-center py-2.5 px-3 rounded-xl border-2 transition-all duration-300 ease-out", active ? "cursor-pointer hover:border-primary/30 hover:bg-secondary/30" : "cursor-not-allowed bg-muted/30 border-input grayscale-[0.5]", isSelected && active ? "bg-primary/5 shadow-md ring-0 scale-[1.02]" : !active ? "border-transparent opacity-80" : "border-transparent bg-secondary/30 text-muted-foreground"),
        style: {
            borderColor: isSelected && active ? 'hsl(var(--primary))' : 'transparent',
            borderStyle: isSelected && active ? 'solid' : 'none',
            borderWidth: isSelected && active ? '2px' : '0px',
            ...isSelected && active && (productCard === null || productCard === void 0 ? void 0 : productCard.border) ? {
                border: productCard.border
            } : {},
            borderRadius: (productCard === null || productCard === void 0 ? void 0 : productCard.radius) || '0.75rem'
        },
        children: [
            !active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 flex items-center justify-center bg-black/5 rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm rotate-[-4deg]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 text-[8px] font-black uppercase tracking-wider text-rose-500 drop-shadow-sm",
                            children: statusLabel || "Sold Out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSelected && active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground rounded-full p-0.5 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-2.5 h-2.5",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-bold tracking-tight", isSelected ? "text-primary" : "text-foreground", !active && "line-through decoration-destructive/30 decoration-1"),
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            subLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0.5", isSelected ? "text-primary/80" : "text-muted-foreground", !active && "opacity-50"),
                children: subLabel
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OptionCard, "T8CqjDOiu0Q0wBIsr65sZBIyREE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"]
    ];
});
_c = OptionCard;
const ColourCard = (param)=>{
    let { name, image, isSelected, active, statusLabel, onClick, extraPrice = 0 } = param;
    _s1();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"])();
    const productCard = theme === null || theme === void 0 ? void 0 : theme.productCard;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: active ? onClick : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col items-center justify-start p-2 rounded-xl border-2 transition-all duration-300 ease-out h-auto min-h-[88px]", active ? "cursor-pointer hover:border-primary/30 hover:bg-secondary/30" : "cursor-not-allowed bg-muted/30 border-input grayscale-[0.8]", isSelected && active ? "bg-primary/5 shadow-md ring-0 scale-[1.02]" : !active ? "border-transparent opacity-80" : "border-transparent bg-secondary/30 text-muted-foreground"),
        style: {
            borderColor: isSelected && active ? 'hsl(var(--primary))' : 'transparent',
            borderStyle: isSelected && active ? 'solid' : 'none',
            borderWidth: isSelected && active ? '2px' : '0px',
            ...isSelected && active && (productCard === null || productCard === void 0 ? void 0 : productCard.border) ? {
                border: productCard.border
            } : {},
            borderRadius: (productCard === null || productCard === void 0 ? void 0 : productCard.radius) || '0.75rem'
        },
        children: [
            !active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-20 flex items-center justify-center bg-black/5 rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm rotate-[-4deg]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 text-[8px] font-black uppercase tracking-wider text-rose-500 drop-shadow-sm",
                            children: statusLabel || "Sold Out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSelected && active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground rounded-full p-0.5 shadow-sm z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-2.5 h-2.5",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-10 h-10 mb-1.5 rounded-full overflow-hidden border border-border/50",
                children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: name,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground/50",
                    children: name.charAt(0)
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 158,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] leading-tight font-bold tracking-tight break-words whitespace-normal text-center px-1 mt-1 group-disabled:text-muted-foreground/50", isSelected ? "text-primary" : "text-foreground", !active && "line-through decoration-destructive/30 decoration-1"),
                children: [
                    name,
                    extraPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-0.5 text-[10px] text-primary font-extrabold",
                        children: [
                            "(+₹",
                            extraPrice,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                        lineNumber: 173,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 167,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ColourCard, "T8CqjDOiu0Q0wBIsr65sZBIyREE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"]
    ];
});
_c1 = ColourCard;
const SizeColourRow = (param)=>{
    let { sizeColour, isSelected, onToggle } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onToggle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer border border-transparent", "hover:bg-secondary/40", isSelected ? "bg-primary/5 border-primary/10 shadow-sm" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300", isSelected ? "bg-primary border-primary" : "border-muted-foreground/30 group-hover:border-primary/50"),
                        children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-primary-foreground shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 205,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                        lineNumber: 199,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    sizeColour.productPics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-md overflow-hidden border border-border/50 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: sizeColour.productPics,
                            alt: sizeColour.name,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium leading-none transition-colors", isSelected ? "text-foreground font-semibold" : "text-foreground/80"),
                            children: sizeColour.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 214,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 198,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold transition-colors", isSelected ? "text-primary" : "text-muted-foreground"),
                children: [
                    "+₹",
                    sizeColour.price
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 219,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
        lineNumber: 188,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = SizeColourRow;
const AddToCartContent = (param)=>{
    let { product, close, onAddToCart } = param;
    var _product_pricing;
    _s2();
    const { addToCart, setCartOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    console.log('AddToCartContent Product:', product);
    console.log('Colors:', product.colors);
    console.log('Pricing/SizeColours:', product.pricing);
    // -- State Logic --
    const [selectedVariants, setSelectedVariants] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "AddToCartContent.useState": ()=>{
            const initialState = {};
            if (product.variants) {
                product.variants.forEach({
                    "AddToCartContent.useState": (variant)=>{
                        initialState[variant.name] = variant.options[0];
                    }
                }["AddToCartContent.useState"]);
            }
            return initialState;
        }
    }["AddToCartContent.useState"]);
    const [selectedPricingId, setSelectedPricingId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](product.pricing && product.pricing.length > 0 ? product.pricing[0].id : "");
    const [selectedSizeColourIds, setSelectedSizeColourIds] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Set());
    const [selectedColourId, setSelectedColourId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](product.colors && product.colors.length > 0 ? product.colors[0].id : "");
    const selectedPricingOption = (_product_pricing = product.pricing) === null || _product_pricing === void 0 ? void 0 : _product_pricing.find((p)=>p.id === selectedPricingId);
    const availableSizeColours = (selectedPricingOption === null || selectedPricingOption === void 0 ? void 0 : selectedPricingOption.sizeColours) || [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AddToCartContent.useEffect": ()=>{
            // Default select the first size colour if available (Mandatory)
            if (availableSizeColours.length > 0) {
                setSelectedSizeColourIds(new Set([
                    availableSizeColours[0].id
                ]));
            } else {
                setSelectedSizeColourIds(new Set());
            }
        }
    }["AddToCartContent.useEffect"], [
        selectedPricingId,
        availableSizeColours.length
    ]); // Dependencies updated
    const basePrice = selectedPricingOption ? selectedPricingOption.price : product.price;
    const sizeColoursPrice = availableSizeColours.filter((sc)=>selectedSizeColourIds.has(sc.id)).reduce((acc, sc)=>acc + sc.price, 0);
    const currentPrice = basePrice + sizeColoursPrice;
    // -- Handlers --
    const handleVariantChange = (variantName, option)=>{
        setSelectedVariants((prev)=>({
                ...prev,
                [variantName]: option
            }));
    };
    const handleSizeColourToggle = (scId)=>{
        setSelectedSizeColourIds((prev)=>{
            // Single selection, mandatory (cannot deselect the only one, but clicking another switches)
            // Actually user says "mandatory to click on add to cart", implies we should just switch.
            // If we click the same one, do nothing or keep it selected.
            return new Set([
                scId
            ]);
        });
    };
    const handleAddToCart = ()=>{
        var _product_colors;
        const variantsToAdd = {
            ...selectedVariants
        };
        if (selectedPricingOption) {
            variantsToAdd['Quantity'] = selectedPricingOption.quantity;
        }
        const selectedSizeColoursList = availableSizeColours.filter((a)=>selectedSizeColourIds.has(a.id));
        // Calculate effective price: Mirror ProductCard logic (Calc Percentage -> PriceAfterDiscount -> Base)
        // 1. Resolve base price for this variant
        const variantPrice = selectedPricingOption ? selectedPricingOption.price : product.price;
        // 2. Resolve discount logic
        let effectiveBasePrice = variantPrice;
        const offerPercent = product.productOffer ? parseFloat(product.productOffer.toString().replace(/[^0-9.]/g, '')) : 0;
        // Condition A: Explicit Variant Discount (Priority 1)
        if (selectedPricingOption && selectedPricingOption.priceAfterDiscount && selectedPricingOption.priceAfterDiscount > 0) {
            effectiveBasePrice = selectedPricingOption.priceAfterDiscount;
        } else if (offerPercent > 0 && variantPrice === product.price) {
            const discountAmount = variantPrice * offerPercent / 100;
            effectiveBasePrice = Math.round(variantPrice - discountAmount);
        } else if (product.priceAfterDiscount && product.priceAfterDiscount > 0) {
            // Only apply if it makes sense (e.g. less than current variant price)
            if (product.priceAfterDiscount < variantPrice) {
                effectiveBasePrice = product.priceAfterDiscount;
            }
        }
        // Resolve selected colour object
        const selectedColour = (_product_colors = product.colors) === null || _product_colors === void 0 ? void 0 : _product_colors.find((c)=>c.id === selectedColourId);
        const colourToAdd = selectedColour ? {
            id: selectedColour.id,
            name: selectedColour.name,
            image: selectedColour.image || ''
        } : undefined;
        addToCart({
            ...product,
            price: variantPrice,
            priceAfterDiscount: effectiveBasePrice,
            productSizeId: selectedPricingId
        }, variantsToAdd, selectedSizeColoursList, colourToAdd);
        // Trigger success confetti
        const triggerConfetti = ()=>{
            const count = 200;
            const defaults = {
                origin: {
                    y: 0.7
                },
                colors: [
                    '#D4AF37',
                    '#FDE68A',
                    '#F59E0B',
                    '#B45309',
                    '#FEF3C7'
                ],
                zIndex: 9999
            };
            function fire(particleRatio, opts) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio)
                });
            }
            fire(0.25, {
                spread: 26,
                startVelocity: 55
            });
            fire(0.2, {
                spread: 60
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45
            });
        };
        triggerConfetti();
        close();
        // Small delay to ensure the AddToCartSheet closes completely before opening the CartSheet
        setTimeout(()=>{
            setCartOpen(true);
            if (onAddToCart) onAddToCart();
        }, 300);
    };
    const hasVariants = product.variants && product.variants.length > 0 || product.pricing && product.pricing.length > 0 || product.colors && product.colors.length > 0;
    // -- Render Content --
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-background relative group/sheet",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col p-5 pb-2 shrink-0 relative border-b border-border/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 pr-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold tracking-tight text-foreground",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground line-clamp-2 leading-relaxed",
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "absolute top-3 right-3 h-8 w-8 rounded-full hover:bg-secondary text-muted-foreground",
                            onClick: close,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-4 min-h-0 overflow-y-auto overscroll-contain pt-2 pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300",
                    children: [
                        product.pricing && product.pricing.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold",
                                            children: "Select Size/Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider",
                                            children: "Required"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: (()=>{
                                        const prices = product.pricing.map((p)=>p.price);
                                        // Check if all prices are the same (using a simple strict equality check against the first item)
                                        const allPricesSame = prices.every((p)=>p === prices[0]);
                                        return product.pricing.map((option)=>{
                                            // Logic: Mirror ProductCard logic for consistent display
                                            let finalOptionPrice = option.price;
                                            const offerPercent = product.productOffer ? parseFloat(product.productOffer.toString().replace(/[^0-9.]/g, '')) : 0;
                                            if (offerPercent > 0 && option.price === product.price) {
                                                const discountAmount = option.price * offerPercent / 100;
                                                finalOptionPrice = Math.round(option.price - discountAmount);
                                            } else if (option.priceAfterDiscount && option.priceAfterDiscount > 0) {
                                                finalOptionPrice = option.priceAfterDiscount;
                                            } else if (option.price === product.price && product.priceAfterDiscount && product.priceAfterDiscount > 0) {
                                                finalOptionPrice = product.priceAfterDiscount;
                                            }
                                            const hasOffer = finalOptionPrice < option.price;
                                            const isActive = option.sizeStatus !== 'INACTIVE' && option.sizeStatus !== 'OUTOFSTOCK';
                                            const statusLabel = option.sizeStatus === 'OUTOFSTOCK' ? 'Sold Out' : option.sizeStatus === 'INACTIVE' ? 'Unavailable' : undefined;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionCard, {
                                                label: option.quantity,
                                                active: isActive,
                                                statusLabel: statusLabel,
                                                subLabel: !allPricesSame && isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center leading-none",
                                                    children: [
                                                        hasOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] line-through opacity-70 mb-0.5",
                                                            children: [
                                                                "₹",
                                                                option.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 33
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-bold",
                                                            children: [
                                                                "₹",
                                                                finalOptionPrice.toFixed(0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 31
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 29
                                                }, void 0) : undefined,
                                                isSelected: selectedPricingId === option.id,
                                                onClick: ()=>setSelectedPricingId(option.id)
                                            }, option.id, false, {
                                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                                lineNumber: 447,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0));
                                        });
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 411,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        availableSizeColours.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold",
                                            children: "Select"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded",
                                            children: "Required"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-2",
                                    children: availableSizeColours.map((sc)=>{
                                        const isActive = sc.sizeColourStatus !== 'INACTIVE' && sc.sizeColourStatus !== 'OUTOFSTOCK';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColourCard, {
                                            name: sc.name,
                                            // @ts-ignore - Check for multiple possible image fields
                                            image: sc.productPics || sc.image,
                                            active: isActive,
                                            statusLabel: sc.sizeColourStatus === 'OUTOFSTOCK' ? 'Sold Out' : undefined,
                                            isSelected: selectedSizeColourIds.has(sc.id),
                                            onClick: ()=>handleSizeColourToggle(sc.id),
                                            extraPrice: sc.price
                                        }, sc.id, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 482,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        product.colors && product.colors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold",
                                        children: "Select"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-2",
                                    children: product.colors.map((colour)=>{
                                        const isActive = colour.colourStatus !== 'INACTIVE' && colour.colourStatus !== 'OUTOFSTOCK';
                                        const statusLabel = colour.colourStatus === 'OUTOFSTOCK' ? 'Sold Out' : colour.colourStatus === 'INACTIVE' ? 'Unavailable' : undefined;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColourCard, {
                                            name: colour.name,
                                            image: colour.image,
                                            active: isActive,
                                            statusLabel: statusLabel,
                                            isSelected: selectedColourId === colour.id,
                                            onClick: ()=>setSelectedColourId(colour.id)
                                        }, colour.id, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 512,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        product.variants && product.variants.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold",
                                        children: [
                                            "Select ",
                                            variant.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: variant.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: selectedVariants[variant.name] === option ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>handleVariantChange(variant.name, option),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-3 h-7 text-xs", selectedVariants[variant.name] === option ? "shadow-sm" : "bg-transparent"),
                                                children: option
                                            }, option, false, {
                                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                                lineNumber: 533,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, variant.name, true, {
                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        !hasVariants && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-8 text-center text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "No customization options available."
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                lineNumber: 552,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 551,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 p-4 bg-background border-t z-10 safe-area-inset-bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col min-w-[25%] shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5",
                                    children: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                (()=>{
                                    const variantPrice = selectedPricingOption ? selectedPricingOption.price : product.price;
                                    let effectiveBase = variantPrice;
                                    const offerPercent = product.productOffer ? parseFloat(product.productOffer.toString().replace(/[^0-9.]/g, '')) : 0;
                                    if (offerPercent > 0 && variantPrice === product.price) {
                                        const discountAmount = variantPrice * offerPercent / 100;
                                        effectiveBase = Math.round(variantPrice - discountAmount);
                                    } else if (selectedPricingOption && selectedPricingOption.priceAfterDiscount && selectedPricingOption.priceAfterDiscount > 0) {
                                        effectiveBase = selectedPricingOption.priceAfterDiscount;
                                    } else if (product.priceAfterDiscount && product.priceAfterDiscount > 0) {
                                        if (product.priceAfterDiscount < variantPrice) {
                                            effectiveBase = product.priceAfterDiscount;
                                        }
                                    }
                                    const finalPrice = effectiveBase + sizeColoursPrice;
                                    const hasOffer = finalPrice < currentPrice;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start leading-none",
                                        children: [
                                            hasOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-muted-foreground line-through font-medium mb-0.5",
                                                children: [
                                                    "₹",
                                                    currentPrice.toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                                lineNumber: 587,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-black text-primary leading-none tracking-tight",
                                                children: [
                                                    "₹",
                                                    finalPrice.toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                            lineNumber: 560,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        (()=>{
                            var _product_colors;
                            const selectedColour = (_product_colors = product.colors) === null || _product_colors === void 0 ? void 0 : _product_colors.find((c)=>c.id === selectedColourId);
                            const isSelectedColourOOS = selectedColour && (selectedColour.colourStatus === 'OUTOFSTOCK' || selectedColour.colourStatus === 'INACTIVE');
                            const selectedSizeColoursList = availableSizeColours.filter((a)=>selectedSizeColourIds.has(a.id));
                            const isSelectedSizeColourOOS = selectedSizeColoursList.some((sc)=>sc.sizeColourStatus === 'OUTOFSTOCK' || sc.sizeColourStatus === 'INACTIVE');
                            const isOutOfStock = product.productStatus === 'OUTOFSTOCK' || (selectedPricingOption === null || selectedPricingOption === void 0 ? void 0 : selectedPricingOption.sizeStatus) === 'OUTOFSTOCK' || (selectedPricingOption === null || selectedPricingOption === void 0 ? void 0 : selectedPricingOption.sizeStatus) === 'INACTIVE' || isSelectedColourOOS || isSelectedSizeColourOOS;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleAddToCart,
                                disabled: isOutOfStock,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-xl shadow-xl shadow-primary/10 text-sm font-bold h-12 transition-all duration-300 active:scale-95", isOutOfStock ? "bg-muted text-muted-foreground cursor-not-allowed shadow-none" : "bg-primary text-primary-foreground hover:bg-primary/90"),
                                children: isOutOfStock ? "Out of Stock" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 617,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "uppercase tracking-wider",
                                            children: "Add to Bag"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                            lineNumber: 618,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 616,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                lineNumber: 607,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 559,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(AddToCartContent, "01bElt+IQu6jaPgPrzWggGeJi4c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c3 = AddToCartContent;
function AddToCartSheet(param) {
    let { product, children, onAddToCart } = param;
    _s3();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { addToCart, setCartOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"])();
    const productCard = theme === null || theme === void 0 ? void 0 : theme.productCard;
    const hasVariants = product.variants && product.variants.length > 0 || product.pricing && product.pricing.length > 0 || product.colors && product.colors.length > 0;
    // Handle back button on mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sheet$2d$back$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSheetBackHandler"])(open, setOpen);
    const handleSimpleAddToCart = (e)=>{
        if (hasVariants) return;
        e.stopPropagation();
        e.preventDefault();
        // Calculate effective price for simple product
        let effectivePrice = product.price;
        // Priority 1: Explicit Price After Discount
        if (product.priceAfterDiscount && product.priceAfterDiscount > 0 && product.priceAfterDiscount < product.price) {
            effectivePrice = product.priceAfterDiscount;
        } else {
            const offerPercent = product.productOffer ? parseFloat(product.productOffer.toString().replace(/[^0-9.]/g, '')) : 0;
            if (offerPercent > 0) {
                const discountAmount = product.price * offerPercent / 100;
                effectivePrice = Math.round(product.price - discountAmount);
            }
        }
        if (product.productStatus === 'OUTOFSTOCK') {
            toast({
                title: "Out of Stock",
                description: "This product is currently unavailable.",
                variant: "destructive"
            });
            return;
        }
        addToCart({
            ...product,
            price: product.price,
            priceAfterDiscount: effectivePrice
        }, {});
        // Trigger success confetti
        const count = 200;
        const defaults = {
            origin: {
                y: 0.7
            },
            colors: [
                '#D4AF37',
                '#FDE68A',
                '#F59E0B',
                '#B45309',
                '#FEF3C7'
            ],
            zIndex: 9999
        };
        function fire(particleRatio, opts) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }
        fire(0.25, {
            spread: 26,
            startVelocity: 55
        });
        fire(0.2, {
            spread: 60
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45
        });
        // Small delay for smooth transition and ensuring state updates don't conflict
        setTimeout(()=>{
            setCartOpen(true);
            // Trigger optional callback
            if (onAddToCart) onAddToCart();
        }, 100);
    };
    const handleTriggerClick = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        setOpen(true);
    };
    if (!hasVariants) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: handleSimpleAddToCart,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
            lineNumber: 726,
            columnNumber: 12
        }, this);
    }
    const trigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
        onClick: handleTriggerClick
    });
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                trigger,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                    open: open,
                    onOpenChange: setOpen,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                                className: "fixed inset-0 z-[99] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                lineNumber: 737,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-[100] gap-0 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", "rounded-t-[24px] p-0 h-[85vh] md:h-auto flex flex-col overflow-hidden shadow-2xl [&>button]:hidden px-safe"),
                                style: {
                                    border: productCard === null || productCard === void 0 ? void 0 : productCard.border,
                                    borderBottom: 'none',
                                    borderRadius: "".concat((productCard === null || productCard === void 0 ? void 0 : productCard.radius) || '20px', " ").concat((productCard === null || productCard === void 0 ? void 0 : productCard.radius) || '20px', " 0 0")
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddToCartContent, {
                                        product: product,
                                        close: ()=>setOpen(false),
                                        onAddToCart: onAddToCart
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                        lineNumber: 753,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                    lineNumber: 752,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                                lineNumber: 740,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                        lineNumber: 736,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    // Desktop Popover - Beside the card
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        open: open,
        onOpenChange: setOpen,
        modal: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: trigger
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 765,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                side: "right",
                align: "center",
                sideOffset: 16,
                className: "w-[340px] p-0 overflow-hidden shadow-2xl shadow-black/20 h-[450px] flex flex-col bg-background",
                style: {
                    border: productCard === null || productCard === void 0 ? void 0 : productCard.border,
                    borderRadius: (productCard === null || productCard === void 0 ? void 0 : productCard.radius) || '1rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddToCartContent, {
                    product: product,
                    close: ()=>setOpen(false),
                    onAddToCart: onAddToCart
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                    lineNumber: 778,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
                lineNumber: 766,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/AddToCartSheet.tsx",
        lineNumber: 764,
        columnNumber: 5
    }, this);
}
_s3(AddToCartSheet, "32StoeM/H9Y1jlsTRA6xnX2bodk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$TenantContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sheet$2d$back$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSheetBackHandler"]
    ];
});
_c4 = AddToCartSheet;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "OptionCard");
__turbopack_context__.k.register(_c1, "ColourCard");
__turbopack_context__.k.register(_c2, "SizeColourRow");
__turbopack_context__.k.register(_c3, "AddToCartContent");
__turbopack_context__.k.register(_c4, "AddToCartSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_cart_2affedfc._.js.map