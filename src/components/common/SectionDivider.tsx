"use client";

import React from "react";

export function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center my-8 md:my-12 px-4 max-w-[1440px] mx-auto opacity-90">
      {/* Left Hairline Gradient */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#CA8A04]/40 to-[#CA8A04]" />

      {/* Center Traditional Ornament Motif */}
      <div className="flex items-center gap-2.5 mx-4 select-none group">
        <span className="text-[10px] text-[#CA8A04]/60 transform rotate-45 transition-transform duration-500 group-hover:rotate-180">✦</span>
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 fill-[#CA8A04] text-[#CA8A04] transition-all duration-500 group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(202,138,4,0.5)]"
        >
          {/* A traditional Indian paisley/diamond motif */}
          <path d="M12,2 L15.5,7.5 L21,9 L16.5,13.5 L18,19.5 L12,16.5 L6,19.5 L7.5,13.5 L3,9 L8.5,7.5 Z" className="opacity-90" />
          <path d="M12,5 L14,9 L18,10 L15,13 L16,17.5 L12,15 L8,17.5 L9,13 L6,10 L10,9 Z" fill="#ffffff" />
          <circle cx="12" cy="12" r="2" />
        </svg>
        <span className="text-[10px] text-[#CA8A04]/60 transform rotate-45 transition-transform duration-500 group-hover:rotate-180">✦</span>
      </div>

      {/* Right Hairline Gradient */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#CA8A04]/40 to-[#CA8A04]" />
    </div>
  );
}
