"use client";

import { useCart } from "@/hooks/use-cart";

export default function ShippingDelivery() {
    const { companyDetails } = useCart();
    const companyName = companyDetails?.companyName || 'Our Company';

    return (
        <div className="relative min-h-screen bg-dot-grid py-12 md:py-20">
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-[28rem] h-[28rem] bg-gradient-radial from-navy-800/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-2/3 left-1/4 w-56 h-56 bg-gold-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mb-6" />

                <h1 className="text-4xl md:text-5xl font-bold mb-10 font-headline text-gradient-gold">
                    Shipping and Delivery Policy
                </h1>

                <div className="liquid-glass-strong rounded-2xl p-8 md:p-10 card-3d border-t-2 border-gold-500/20">
                    <div className="prose prose-stone dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                        <p>Last updated: 2/20/2026</p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Shipping Policy</h2>
                        <p>
                            {companyName} is committed to delivering your orders accurately, in good condition, and always on time.
                            We partner with reputed courier agencies to ensure safe and timely delivery.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Shipping Charges</h2>
                        <p>
                            Shipping charges may vary based on your location and the total value of your order.
                            Specific shipping charges will be displayed at the time of checkout.
                            We may offer free shipping for orders above a certain value, which will also be clearly indicated on the website.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Delivery Timeline</h2>
                        <p>
                            We aim to dispatch all orders within 1-2 business days of order confirmation.
                            However, depending on your location, the delivery may take 3-7 business days from the date of dispatch.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Metro Cities:</strong> 2-4 business days</li>
                            <li><strong>Rest of India:</strong> 4-7 business days</li>
                        </ul>
                        <p>
                            Please note that delivery times are estimates and may be affected by unforeseen circumstances such as weather conditions,
                            strikes, or public holidays.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Order Tracking</h2>
                        <p>
                            Once your order is dispatched, you will receive a tracking number via email/SMS.
                            You can use this tracking number to track the status of your shipment on our courier partner&apos;s website.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">International Shipping</h2>
                        <p>
                            Currently, we do not ship outside of India. We are working on expanding our services and will update this policy once we begin international shipping.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
