import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function VPSDedicatedHostingPage() {
  return (
    <ServiceDetailsPage
      title="VPS & Dedicated Server Hosting"
      bannerTitle="BEST VPS & DEDICATED HOSTING"
      subtitle="Dedicated CPU cores, root server log control, isolated datasets, and firewalls."
      description="Large-scale platforms require dedicated resources to handle bulk requests without slowdowns. We deploy custom Virtual Private Servers (VPS) and isolated Dedicated physical instances, configure hypervisor allocations, and check security rules."
      image="/assets/img/services-details-image/61.png"
      pointsTitle="Server Capabilities"
      points={[
        "Full Root Access & Admin Control",
        "Dedicated Intel/AMD CPU Cores",
        "Isolated NVMe/SSD Storage & RAM",
        "Configured Firewalls & DDoS Defense",
        "Custom OS Choice (Ubuntu, CentOS, etc.)",
        "Automated Server Health Metrics",
      ]}
    />
  );
}
