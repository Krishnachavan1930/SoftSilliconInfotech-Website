import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function BulkSMSMarketingPage() {
  return (
    <ServiceDetailsPage
      title="Transactional & Promotional Bulk SMS"
      bannerTitle="BEST BULK SMS MARKETING"
      subtitle="Configure quick gateways, transactional API endpoints, DLT portals, and promotional loops."
      description="SMS campaigns keep buyers engaged instantly with notifications or OTP validations. We coordinate DLT registrations, setup REST API hooks for websites, manage contacts lists, and monitor delivery speeds to maximize results."
      image="/assets/img/services-details-image/35.png"
      pointsTitle="SMS Capabilities"
      points={[
        "Transactional OTP SMS APIs",
        "Promotional Broadcast Loops",
        "DLT Registration Assistance",
        "Excel Contact File Uploaders",
        "High Speed Delivery Channels",
        "Delivery Status Report (DSR) Logs",
      ]}
    />
  );
}
