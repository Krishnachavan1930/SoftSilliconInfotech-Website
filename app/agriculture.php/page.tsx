import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function AgricultureIndustryPage() {
  return (
    <ServiceDetailsPage
      title="Agri-Tech & Supply Chain Software"
      bannerTitle="OUR EXPERTISE IN AGRICULTURE INDUSTRY"
      subtitle="Digital inventories, logistics trackers, weather alerts, and farm management platforms."
      description="Agri-tech solutions simplify coordination between local growers, distributors, and logistics channels. We build crop yield trackers, supplier database portals, weather forecast alert integrations, and e-marketplaces for crops and supplies."
      image="/assets/img/services-details-image/16.png"
      pointsTitle="Agri-Tech Features"
      points={[
        "Crop Inventory & Storage Monitors",
        "Grower to Buyer E-Marketplace",
        "Supply Chain Logistics Trackers",
        "Automated Soil & Weather Dashboard",
        "Multi-lingual Regional Settings",
        "Offline Mobile Sync Capabilities",
      ]}
    />
  );
}
