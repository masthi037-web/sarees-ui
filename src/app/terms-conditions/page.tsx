"use client";

import { useCart } from "@/hooks/use-cart";

export default function TermsAndConditions() {
    const { companyDetails } = useCart();
    const companyName = companyDetails?.companyName || 'Our Company';

    return (
        <div className="relative min-h-screen bg-dot-grid py-12 md:py-20">
            <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-[25rem] h-[25rem] bg-gradient-radial from-navy-800/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mb-6" />

                <h1 className="text-4xl md:text-5xl font-bold mb-10 font-headline text-gradient-gold">
                    Terms and Conditions
                </h1>

                <div className="liquid-glass-strong rounded-2xl p-8 md:p-10 card-3d border-t-2 border-gold-500/20">
                    <div className="prose prose-stone dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                        <p>Last updated: 2/20/2026</p>

                        <p>
                            Welcome to {companyName}! These terms and conditions outline the rules and regulations for the use of {companyName}&apos;s Website and App.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">1. Introduction</h2>
                        <p>
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use {companyName} if you do not agree
                            to take all of the terms and conditions stated on this page.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">2. License</h2>
                        <p>
                            Unless otherwise stated, {companyName} and/or its licensors own the intellectual property rights for all material on {companyName}.
                            All intellectual property rights are reserved. You may access this from {companyName} for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">3. User Accounts</h2>
                        <p>
                            If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible
                            for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to,
                            monitor and review new accounts before you may sign in and start using the Service.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">4. Product Descriptions</h2>
                        <p>
                            We attempt to be as accurate as possible. However, {companyName} does not warrant that product descriptions or other content of this site
                            is accurate, complete, reliable, current, or error-free. If a product offered by {companyName} itself is not as described, your sole remedy
                            is to return it in unused condition.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">5. Pricing</h2>
                        <p>
                            All prices are subject to change without notice. We reserve the right to modify or discontinue the Service (or any part or content thereof)
                            at any time without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">6. Limitation of Liability</h2>
                        <p>
                            In no event shall {companyName}, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected
                            with your use of this Website whether such liability is under contract. {companyName}, including its officers, directors and employees shall not be held
                            liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">7. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
