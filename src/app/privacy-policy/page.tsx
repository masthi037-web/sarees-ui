"use client";

import { useCart } from "@/hooks/use-cart";

export default function PrivacyPolicy() {
    const { companyDetails } = useCart();
    const companyName = companyDetails?.companyName || 'Our Company';

    return (
        <div className="relative min-h-screen bg-dot-grid py-12 md:py-20">
            <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 right-0 w-[30rem] h-[30rem] bg-gradient-radial from-navy-800/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mb-6" />

                <h1 className="text-4xl md:text-5xl font-bold mb-10 font-headline text-gradient-gold">
                    Privacy Policy
                </h1>

                <div className="liquid-glass-strong rounded-2xl p-8 md:p-10 card-3d border-t-2 border-gold-500/20">
                    <div className="prose prose-stone dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                        <p>Last updated: 2/20/2026</p>

                        <p>
                            At {companyName}, accessible from our website and mobile application, one of our main priorities is the privacy of our visitors.
                            This Privacy Policy document contains types of information that is collected and recorded by {companyName} and how we use it.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us when you register for an account, make a purchase,
                            sign up for our newsletter, or communicate with us. This may include your name, email address, phone number,
                            shipping address, and payment information.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">How We Use Your Information</h2>
                        <p>
                            We use the information we collect in various ways, including to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, operate, and maintain our website/app</li>
                            <li>Improve, personalize, and expand our website/app</li>
                            <li>Understand and analyze how you use our website/app</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Process your transactions and manage your orders</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website/app, and for marketing and promotional purposes</li>
                            <li>Send you emails</li>
                            <li>Find and prevent fraud</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground font-headline">Log Files</h2>
                        <p>
                            {companyName} follows a standard procedure of using log files. These files log visitors when they visit websites.
                            All hosting companies do this and a part of hosting services' analytics. The information collected by log files include
                            internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages,
                            and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Cookies and Web Beacons</h2>
                        <p>
                            Like any other website, {companyName} uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences,
                            and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience
                            by customizing our web page content based on visitors&apos; browser type and/or other information.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Third Party Privacy Policies</h2>
                        <p>
                            {companyName}&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective
                            Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions
                            about how to opt-out of certain options.
                        </p>

                        <h2 className="text-xl font-bold text-foreground font-headline">Consent</h2>
                        <p>
                            By using our website/app, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
