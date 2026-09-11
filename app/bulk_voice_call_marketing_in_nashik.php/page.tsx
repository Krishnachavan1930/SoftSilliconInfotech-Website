import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function BulkVoiceCallMarketingPage() {
  return (
    <ServiceDetailsPage
      title="Automated Bulk Voice Call & IVR Broadcasts"
      bannerTitle="BEST BULK VOICE CALL MARKETING"
      subtitle="Broadcast voice announcements, schedule phone listings, upload pre-recorded audio, and check delivery."
      description="Voice broadcasts provide a direct touch to client lists. We configure IVR panels, support custom MP3 uploads, setup text-to-speech triggers, schedule call loops, and output detailed call logs."
      image="/assets/img/services-details-image/35.png"
      pointsTitle="Voice Services"
      points={[
        "Pre-Recorded MP3 Broadcasts",
        "Text-to-Speech Voice Generators",
        "Dynamic IVR Key-Press Actions",
        "Scheduled Broadcast Loops",
        "Active Call Logs Dashboard",
        "Failed Call Auto-Retry Configs",
      ]}
    />
  );
}
