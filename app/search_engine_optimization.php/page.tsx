import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function SearchEngineOptimizationPage() {
  return (
    <ServiceDetailsPage
      title="Search Engine Optimization (SEO) Services"
      bannerTitle="OBTAINING THE BEST RESULTS IN SEO"
      subtitle="Rank higher on Google, capture organic search traffic, and optimize keywords."
      description="SEO is critical to guide customer traffic organically. We perform deep keyword research, optimize meta descriptions, write sitemaps, setup robots.txt configurations, accelerate page loads, and construct secure backlink maps to grow visibility."
      image="/assets/img/services-details-image/29.png"
      pointsTitle="SEO Activities"
      points={[
        "Keyword Identification & Mapping",
        "Meta Tags & Header Structures",
        "XML Sitemap & Robots.txt Custom Setup",
        "High Performance Speed Adjustments",
        "Google Search Console Integration",
        "Organic Traffic Dashboard Analytics",
      ]}
    />
  );
}
