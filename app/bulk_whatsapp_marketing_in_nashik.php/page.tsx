import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function BulkWhatsappMarketingPage() {
  return (
    <ServiceDetailsPage
      title="Official WhatsApp Business API & Marketing"
      bannerTitle="BEST BULK WHATSAPP SMS MARKETING"
      subtitle="Broadcast media cards, build customer triggers, configure custom chatbots, and manage API portals."
      description="WhatsApp messaging holds exceptional view rates compared to email. We set up official business APIs, build auto-response scripts, configure catalog systems, and create media template messages to assist clients in communicating."
      image="/assets/img/services-details-image/35.png"
      pointsTitle="WhatsApp Systems"
      points={[
        "Official Meta API Verification",
        "Visual Chatbot Auto-Responders",
        "Rich Media Postings (PDF, PNG, JPG)",
        "Catalog & Cart System Hooks",
        "Custom Template Forms Validation",
        "Bulk Broadcast Campaign Triggers",
      ]}
    />
  );
}
