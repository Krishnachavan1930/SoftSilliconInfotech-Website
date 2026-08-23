"use client";

import React from "react";
import Image from "next/image";

export default function BrandMarquee() {
  // We have partner-1.png to partner-18.png downloaded in public/assets/img/partner-img/
  const partners = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    src: `/assets/img/partner-img/partner-${i + 1}.png`,
    hoverSrc: `/assets/img/partner-img/partner-hover${i + 1}.png`,
  }));

  // Duplicate list to ensure seamless looping
  const doublePartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-white overflow-hidden border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Technologies & Partners We Work With
        </h3>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-infinite-scroll flex items-center space-x-12 whitespace-nowrap py-4">
          {doublePartners.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
            >
              <Image
                src={partner.src}
                alt={`Partner ${partner.id}`}
                fill
                style={{ objectFit: "contain" }}
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
