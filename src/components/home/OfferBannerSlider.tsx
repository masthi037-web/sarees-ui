"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Banner {
  url: string;
  link: string;
  alt: string;
}

const defaultBanners: Banner[] = [
  { url: '/offer_banner_1.png', link: '#shop-now', alt: 'Festival of Silks' },
  { url: '/offer_banner_2.png', link: '#shop-now', alt: 'The New Royal Heirlooms' },
  { url: '/offer_banner_3.png', link: '#shop-now', alt: 'Seasonal Luxury' },
];

export function OfferBannerSlider({ banners = defaultBanners }: { banners?: Banner[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4500); // Scroll automatically every 4.5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!banners || banners.length === 0) return null;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-8 md:pb-12">
      <div 
        className="relative w-full aspect-[16/7] md:aspect-[2.4/1] overflow-hidden bg-white border border-[#f2f2f2] rounded-lg shadow-sm"
      >
        {/* Slides Wrapper */}
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0 bg-white">
              <a href={banner.link} className="block relative w-full h-full">
                <Image
                  src={banner.url}
                  alt={banner.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        {banners.length > 1 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white border border-[#f2f2f2] text-[#1a1a1a] shadow-md hover:scale-105 transition-all duration-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2]" />
          </button>
        )}

        {/* Right Arrow Button */}
        {banners.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white border border-[#f2f2f2] text-[#1a1a1a] shadow-md hover:scale-105 transition-all duration-300"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5 stroke-[2]" />
          </button>
        )}

        {/* Navigation Indicators (Dots) */}
        {banners.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "w-6 bg-primary" 
                    : "w-2 bg-white/60 hover:bg-white border border-black/5"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
