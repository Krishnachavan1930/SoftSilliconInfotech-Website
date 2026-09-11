import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function LinuxResellerHostingPage() {
  return (
    <ServiceDetailsPage
      title="Linux SSD Reseller Hosting Plans"
      bannerTitle="BEST LINUX RESELLER HOSTING"
      subtitle="WHM control boards, custom resource allocations, and white-labeled hosting solutions."
      description="Reseller packages enable agencies and IT consultants to start their own web hosting businesses under their own brands. We configure WebHostManager (WHM) controls, support creating individual cPanel logs, and allocate storage/bandwidth modules."
      image="/assets/img/services-details-image/56.png"
      pointsTitle="Reseller Capabilities"
      points={[
        "WHM (WebHostManager) Access Control",
        "White-Labeled Branding Setup",
        "Custom Storage Allocation Profiles",
        "Private Nameservers Configuration",
        "Client cPanel Account Managers",
        "Free Automated Account Migrations",
      ]}
    />
  );
}
