import { ShieldCheck, Truck, Star, LucideIcon, Zap, Heart, Award, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CompanyFeature } from '@/lib/api-types';

interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    iconColor: string;
}

const iconMap: Record<string, LucideIcon> = {
    'ShieldCheck': ShieldCheck,
    'Truck': Truck,
    'Star': Star,
    'Zap': Zap,
    'Heart': Heart,
    'Award': Award,
    'Gift': Gift
};

const defaultFeatures: FeatureItem[] = [
    {
        id: 1,
        title: "PURE COMFORT",
        description: "Handcrafted pure silk fabrics",
        icon: Heart,
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 2,
        title: "WORLDWIDE SHIPPING",
        description: "Delivering to your doorstep globally",
        icon: Truck,
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 3,
        title: "ASSURED QUALITY",
        description: "Rigorous quality checks for every weave",
        icon: ShieldCheck,
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 4,
        title: "FINEST THREADS",
        description: "Woven with premium zari & yarns",
        icon: Award,
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    },
    {
        id: 5,
        title: "HASSLE-FREE RETURNS",
        description: "Easy returns and exchange policy",
        icon: Gift,
        color: "text-[#c2410c]",
        bgColor: "bg-[#c2410c]/5",
        iconColor: "text-[#c2410c]"
    }
];

interface FeaturesCarouselProps {
    features?: CompanyFeature[];
}

export function FeaturesCarousel({ features }: FeaturesCarouselProps) {
    // Always use the custom features for Tirumala Sarees
    const displayFeatures: FeatureItem[] = defaultFeatures;

    // Duplicate the items to create a seamless loop
    const carouselItems = [...displayFeatures, ...displayFeatures, ...displayFeatures, ...displayFeatures];

    return (
        <div className="w-full overflow-hidden bg-[#fdf9f2] py-6 border-y border-[#f5eedc]">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="animate-marquee flex items-center justify-start [&_li]:mx-4 [&_img]:max-w-none">
                    {carouselItems.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex items-center gap-4 bg-white border border-[#f5eedc] rounded-none p-4 min-w-[280px] shadow-sm mx-3"
                        >
                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", item.bgColor)}>
                                <item.icon className={cn("w-5 h-5", item.iconColor)} />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-[#1a1a1a] text-xs tracking-wider leading-tight">{item.title}</h3>
                                <p className="text-[10px] text-muted-foreground mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

