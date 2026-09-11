import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function PayPerClickPage() {
  return (
    <ServiceDetailsPage
      title="Pay Per Click (PPC) Advertising"
      bannerTitle="PAGE PER CLICKS ADVERTISING"
      subtitle="Run target Google search campaigns, display ads, and remarketing lists."
      description="PPC ads offer direct customer reach with highly customizable budgets. We build Google Ads search flows, construct banner graphics, write conversion copy, optimize landing pages, and adjust bid ranges to maximize lead generation."
      image="/assets/img/services-details-image/40.png"
      pointsTitle="PPC Capabilities"
      points={[
        "Google Ads Search Campaigns",
        "Remarketing List Configurations",
        "Conversion Optimization Audits",
        "A/B Split Test Ad Copies",
        "Bid Range Adjustment Audits",
        "ROI & Conversion Tag Trackers",
      ]}
    />
  );
}
