import { headers } from 'next/headers';
import Image from 'next/image';
import { Metadata } from 'next';
import { fetchCategories } from '@/services/product.service';
import { fetchCompanyDetails } from '@/services/company.service';
import HomeClient from '@/components/home/HomeClient';
import { ShopNowButton } from '@/components/home/ShopNowButton';
import { cn } from '@/lib/utils';
import { resolveTenantConfig } from '@/config/tenant-config';
import { OfferBannerSlider } from '@/components/home/OfferBannerSlider';
import { SectionDivider } from '@/components/common/SectionDivider';
import { Play } from 'lucide-react';
import { FeaturesCarousel } from '@/components/home/FeaturesCarousel';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const headerDomain = headersList.get("x-company-domain");
  const companyDomain = (headerDomain && headerDomain !== 'localhost') ? headerDomain : 'tirumalasarees';
  
  const tenantConfig = resolveTenantConfig(companyDomain);
  
  if (!tenantConfig.seo) {
    return {
      title: 'ManaBuy',
      description: 'A modern e-commerce experience.',
    };
  }

  return {
    title: tenantConfig.seo.title,
    description: tenantConfig.seo.description,
    keywords: tenantConfig.seo.keywords,
    verification: {
      google: tenantConfig.seo.googleVerification,
    },
    openGraph: {
      title: tenantConfig.seo.title,
      description: tenantConfig.seo.description,
      images: tenantConfig.seo.ogImage ? [{ url: tenantConfig.seo.ogImage }] : [],
    }
  };
}

export default async function Home() {
  const headersList = await headers();
  const headerDomain = headersList.get("x-company-domain");
  const companyDomain = (headerDomain && headerDomain !== 'localhost') ? headerDomain : 'tirumalasarees';

  const company = await fetchCompanyDetails(companyDomain);
  const tenantConfig = resolveTenantConfig(companyDomain);

  const bannerContent = company?.banner ? company.banner.split('&&&') : [];
  
  const carouselMedia: { url: string; type: 'image' | 'video' }[] = bannerContent.map(url => {
    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(url) || url.includes('video');
    return {
      url,
      type: isVideo ? 'video' as const : 'image' as const
    };
  });

  if (carouselMedia.length === 0) {
    carouselMedia.push({
      url: "https://picsum.photos/seed/homepage-banner/1920/1080",
      type: 'image'
    });
  }

  const categories = (company && company.companyId)
    ? await fetchCategories(company.companyId, company.deliveryBetween, tenantConfig.fetchAllAtOnce ?? true)
    : [];

  return (
    <div className="bg-transparent min-h-screen">
      {/* Slider right below navbar */}
      <OfferBannerSlider />

      {/* Scrolling features banner */}
      <FeaturesCarousel features={company?.features} />

      <SectionDivider />

      {/* Hero Section - Kalamandir Split Screen with YouTube Focus */}
      <section className="relative w-full z-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[75vh]">
          {/* Left Column - Video Playable Graphic */}
          <a
            href="https://www.youtube.com/@TirumalaSarees"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-[45vh] md:h-full overflow-hidden bg-[#f2f2f2] group cursor-pointer block"
          >
            <Image
              src="/youtube_hero_banner.png"
              alt="Saree YouTube Showcase"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Glassmorphism Play Button Overlay */}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/25 transition-all duration-500">
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg transform scale-95 group-hover:scale-110 transition-all duration-300">
                <Play className="h-7 w-7 text-white fill-white translate-x-0.5" />
              </div>
            </div>
            {/* YouTube Live Indicator Badge */}
            <div className="absolute bottom-4 left-4 bg-red-600 text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase shadow-md flex items-center gap-1.5 animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              YouTube Live
            </div>
          </a>

          {/* Right Column - Cream Text Card */}
          <div className="flex flex-col justify-center bg-[#f9f6f0] px-6 py-12 md:px-12 lg:px-20 text-left">
            <div className="max-w-xl space-y-6">
              {/* As Seen On YouTube Banner */}
              <div className="inline-flex items-center gap-2 rounded-none border border-red-600/20 bg-red-50/50 px-3.5 py-1 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-600">✦ As Seen On YouTube ✦</span>
              </div>

              {/* Eyebrow in Script font */}
              <div className="space-y-1">
                <span className="font-script text-3xl md:text-4xl text-primary block leading-none">
                  Trending Episodes Collection
                </span>
                <div className="w-12 h-px bg-primary/45 mt-1" />
              </div>

              {/* Main Heading */}
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-[#1a1a1a] leading-tight">
                Shop Our <span className="text-[#c2410c] font-semibold">Video Designs</span>
              </h1>

              {/* Description */}
              <p className="font-body text-xs md:text-sm text-[#555] font-light leading-relaxed max-w-md">
                Our custom heritage weaves, festive silk selections, and handloom masterpieces are showcased daily on our famous YouTube channel. Explore and shop the exact sarees featured in our latest videos.
              </p>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#shop-now"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-primary hover:bg-primary/95 text-white text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 duration-300 shadow-sm"
                >
                  Shop Video Sarees
                </a>
                <a
                  href="https://www.youtube.com/@TirumalaSarees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-red-600 text-red-600 hover:bg-red-50/80 text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 duration-300 shadow-sm gap-2"
                >
                  <Play className="h-3.5 w-3.5 fill-red-600 stroke-none" />
                  Watch on YouTube
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-black/5">
                {[
                  { label: 'Video Showcase', icon: '✦' },
                  { label: 'Daily Releases', icon: '✧' },
                  { label: '100% Pure Silk', icon: '✽' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5 text-[#555] text-[10px] uppercase tracking-wider font-semibold">
                    <span className="text-primary">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeClient
        initialCategories={categories}
        companyDetails={company}
        fetchAllAtOnce={tenantConfig.fetchAllAtOnce ?? true}
      />
    </div>
  );
}

