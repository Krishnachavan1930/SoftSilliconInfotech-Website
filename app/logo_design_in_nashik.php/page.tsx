import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function LogoDesignPage() {
  return (
    <ServiceDetailsPage
      title="Creative Brand Logo Designing"
      bannerTitle="BEST LOGO DESIGNING COMPANY IN NASHIK"
      subtitle="Memorable visual logotypes, vector emblems, brand guidelines, and identity rules."
      description="A logo represents your company's core values. We sketch design options, create SVG vectors, build brand guidelines (colors, typography rules, logo placements), and export all files in print-ready and web-optimized resolutions."
      image="/assets/img/services-details-image/50.png"
      pointsTitle="Logo Services"
      points={[
        "Custom Logo Concepts",
        "High Definition SVG Vectors",
        "Corporate Brand Color Guidelines",
        "Business Cards & Letterhead Layouts",
        "Social Profile Assets Configurations",
        "Complete Copyright Transfer Files",
      ]}
    />
  );
}
