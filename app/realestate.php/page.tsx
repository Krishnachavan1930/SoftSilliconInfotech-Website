import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function RealestateIndustryPage() {
  return (
    <ServiceDetailsPage
      title="Real Estate Digital Portals & CRM Software"
      bannerTitle="OUR EXPERTISE IN THE REAL ESTATE INDUSTRY"
      subtitle="Interactive listings, search filters, location mapping, and agent lead management tools."
      description="Real estate companies depend on displaying properties dynamically with high-definition photos, exact location markers, and robust filters (budget, BHK, area). We engineer custom real estate websites, CRM dashboards for property agents, lead collection forms, and customer notification systems."
      image="/assets/img/services-details-image/13.png"
      pointsTitle="Real Estate Solutions"
      points={[
        "Interactive Property Directories",
        "Budget & Dimension Filtering",
        "Google Maps API Coordinates",
        "Agent Dashboard Lead Monitors",
        "Inquiry Routing Automations",
        "Responsive Visual Media Galleries",
      ]}
    />
  );
}
