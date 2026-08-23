import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function ProductDesignPage() {
  return (
    <ServiceDetailsPage
      title="Software Product Design & UX Engineering"
      bannerTitle="BEST PRODUCT DESIGN COMPANY"
      subtitle="Wireframes, design systems, interactive prototypes, and usability testing."
      description="Visual aesthetics combined with interactive usability makes software successful. We design visual components, construct layouts on Figma, setup typography grids, and check user paths to build clean interfaces."
      image="/assets/img/services-details-image/50.png"
      pointsTitle="Design Deliverables"
      points={[
        "Figma Interactive Prototypes",
        "Visual Wireframes & User Flows",
        "Responsive Grid Components System",
        "Usability Audit Reports",
        "SVG Vectors & Layout Files",
        "HTML/CSS Component Specs",
      ]}
    />
  );
}
