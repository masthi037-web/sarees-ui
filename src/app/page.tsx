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

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const headerDomain = headersList.get("x-company-domain");
  const companyDomain = (headerDomain && headerDomain !== 'localhost') ? headerDomain : 'babaihomefoods';
  
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
  const companyDomain = (headerDomain && headerDomain !== 'localhost') ? headerDomain : 'babaihomefoods';

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
    <div className="bg-background min-h-screen">
      {/* Slider right below navbar */}
      <OfferBannerSlider />

      <SectionDivider />

      {/* Hero Section - Kalamandir Split Screen */}
      <section className="relative w-full z-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[75vh]">
          {/* Left Column - Image */}
          <div className="relative w-full h-[45vh] md:h-full overflow-hidden bg-[#f2f2f2]">
            <Image
              src="/backgroudnd.png"
              alt="Saree Banner"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Column - Cream Text Card */}
          <div className="flex flex-col justify-center bg-[#f9f6f0] px-6 py-12 md:px-12 lg:px-20 text-left">
            <div className="max-w-xl space-y-6">
              {/* Eyebrow in Script font */}
              <div className="space-y-1">
                <span className="font-script text-3xl md:text-4xl text-primary block leading-none">
                  {tenantConfig.text.heroTitle || "Celebrating"}
                </span>
                <div className="w-12 h-px bg-primary/45 mt-1" />
              </div>

              {/* Main Heading */}
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-[#1a1a1a] leading-tight">
                {tenantConfig.text.heroTitleHighlight || "Timeless Heritage"}
              </h1>

              {/* Description */}
              <p className="font-body text-xs md:text-sm text-[#555] font-light leading-relaxed max-w-md">
                {tenantConfig.text.heroDescription || "Discover the luxury of handcrafted heritage weaves, curated for modern elegance."}
              </p>

              {/* Button */}
              <div className="pt-2">
                <a
                  href="#shop-now"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-primary hover:bg-primary/95 text-white text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 duration-300 shadow-sm"
                >
                  Shop Now
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-black/5">
                {[
                  { label: 'Premium Weaves', icon: '✦' },
                  { label: 'Free Shipping', icon: '✧' },
                  { label: 'Handcrafted Purity', icon: '✽' },
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
