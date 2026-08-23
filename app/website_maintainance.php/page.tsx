import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function WebsiteMaintainancePage() {
  return (
    <ServiceDetailsPage
      title="Website Maintenance & Annual Contract (AMC)"
      bannerTitle="WEBSITE & WEB APPLICATION MAINTENANCE (AMC)"
      subtitle="Ensure 24/7 platform stability, compile security upgrades, and resolve unexpected server downtime."
      description="Web systems require constant optimization to protect user datasets, avoid injection attacks, upgrade package dependencies, and update business media assets. Under our AMC contracts, our engineers audit your databases, fix performance bugs, back up assets monthly, and optimize code files to keep your load times low."
      image="/assets/img/services-details-image/26.png"
      pointsTitle="AMC Deliverables"
      points={[
        "Monthly Off-Site Backups",
        "Vulnerability & Security Scans",
        "Framework Version Upgrades",
        "Content & Image Refreshing",
        "Server Health Monitoring",
        "Immediate Emergency Hot-Fixes",
      ]}
    />
  );
}
