import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function LinuxSharedHostingPage() {
  return (
    <ServiceDetailsPage
      title="High Speed Linux Shared SSD Hosting"
      bannerTitle="BEST LINUX SHARED SSD HOSTING"
      subtitle="Super-fast NVMe storage, cPanel administration dashboards, and free SSL installations."
      description="Shared web hosting is the most cost-effective solution for launching business sites, portfolios, and blogs. We provide stable Linux spaces featuring cPanel dashboards, Softaculous script installers, MySQL databases, and 99.9% uptime targets."
      image="/assets/img/services-details-image/56.png"
      pointsTitle="Hosting Features"
      points={[
        "High Performance SSD/NVMe Storage",
        "Free Let's Encrypt SSL Certificates",
        "cPanel Control Dashboard Access",
        "Unlimited MySQL Databases",
        "DDoS Prevention Firewalls",
        "1-Click WordPress Deployments",
      ]}
    />
  );
}
