export default function CancellationRefund() {
    return (
        <div className="relative min-h-screen bg-dot-grid py-12 md:py-20">
            <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-[26rem] h-[26rem] bg-gradient-radial from-navy-800/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-52 h-52 bg-gold-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mb-6" />

                <h1 className="text-4xl md:text-5xl font-bold mb-10 font-headline text-gradient-gold">
                    Cancellation and Refund Policy
                </h1>

                <div className="liquid-glass-strong rounded-2xl p-8 md:p-10 card-3d border-t-2 border-gold-500/20">
                    <div className="prose prose-stone dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Cancellation Policy</h2>
                        <p>
                            You may cancel your order within 24 hours of placing it, provided that the order has not yet been dispatched.
                            To cancel your order, please contact our customer support team immediately with your order details.
                            If the order has already been dispatched, it cannot be cancelled, but you may be eligible to return it under our Return Policy.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Refund Policy</h2>
                        <div className="liquid-glass rounded-lg p-4 my-4 border border-gold-500/20">
                            <p className="font-semibold text-foreground">We have 7 days return policy</p>
                            <p className="mt-1">
                                <strong>Replacement Time Frame:</strong> If replacements and exchange are accepted, then It will get delivered to you within 3-4 working days.
                            </p>
                        </div>
                        <p>
                            We strive to ensure you are satisfied with your purchase. However, if you receive a damaged or incorrect item, you may be eligible for a refund or replacement.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Eligibility:</strong> Refund requests must be made within 7 days of delivery. The item must be unused, in its original packaging, and in the same condition that you received it.
                            </li>
                            <li>
                                <strong>Process:</strong> To initiate a refund, please contact us with your order ID and photos of the issue. Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
                            </li>
                            <li>
                                <strong>Timeline:</strong> If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
                            </li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground font-headline">Late or Missing Refunds</h2>
                        <p>
                            If you haven&apos;t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.
                            Next, contact your bank. There is often some processing time before a refund is posted.
                            If you&apos;ve done all of this and you still have not received your refund yet, please contact us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
