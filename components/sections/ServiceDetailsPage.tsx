"use client";

import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import ProcessSection from "@/components/sections/ProcessSection";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetailsPageProps {
  title: string;
  bannerTitle: string;
  subtitle: string;
  description: string;
  image: string;
  pointsTitle?: string;
  points?: string[];
  processTitle?: string;
}

export default function ServiceDetailsPage({
  title,
  bannerTitle,
  subtitle,
  description,
  image,
  pointsTitle = "Key Service Benefits",
  points = [],
  processTitle = "Our Delivery Process",
}: ServiceDetailsPageProps) {
  return (
    <div className="space-y-0">
      <PageBanner title={bannerTitle} subtitle={subtitle} />

      {/* Main Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text details */}
            <div className="space-y-8">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Solution Brief
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
                  {title}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                {description}
              </p>

              {points.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {pointsTitle}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {points.map((pt, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Illustration/Image */}
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-w-7xl) 50vw, 100vw"
                onError={(e: any) => {
                  // Fallback to generic service graphic in case of mismatch
                  e.target.src = "/assets/img/services-details-image/4.png";
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Development / Marketing Process */}
      <ProcessSection />
    </div>
  );
}
