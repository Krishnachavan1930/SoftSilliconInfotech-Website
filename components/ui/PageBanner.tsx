import React from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="relative bg-slate-950 text-white py-24 overflow-hidden border-b border-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/assets/img/works-image/1.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
