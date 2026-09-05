import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function CorporateWebsiteDesignPage() {
  return (
    <ServiceDetailsPage
      title="Corporate Website Design & Development"
      bannerTitle="Elevate Your Brand with Corporate Website Design"
      subtitle="Establish authority, streamline corporate message, and design a premium global online presence."
      description="Corporate web design goes beyond colors and fonts—it requires building customer confidence and streamlining services. We focus on fast-loading layouts, clean typography, secure server setups, and structured information layouts. Our custom-designed portals enable smooth communication with your target audience, featuring direct query fields, newsletters, and services overviews."
      image="/assets/img/services-details-image/2.png"
      pointsTitle="Corporate Features"
      points={[
        "Modern Glassmorphic Visuals",
        "Lead Capture Configurations",
        "Interactive Brand Stories",
        "Cross-Device Adaptability",
        "Custom SVG Icon Sets",
        "High Performance & Low Latency",
      ]}
    />
  );
}
