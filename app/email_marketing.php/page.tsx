import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function EmailMarketingPage() {
  return (
    <ServiceDetailsPage
      title="Bulk Email Marketing & Newsletters"
      bannerTitle="BULK EMAIL MARKETING COMPANY IN NASHIK"
      subtitle="Engaging email structures, automated triggers, list segmentations, and analytics."
      description="Email campaigns deliver direct engagement with existing client lists. We design responsive HTML email templates, configure automated drip marketing paths, manage customer lists, and audit spam filters to maximize delivery rates."
      image="/assets/img/services-details-image/49.png"
      pointsTitle="Email Deliverables"
      points={[
        "Responsive HTML Templates",
        "Automated Marketing Funnels",
        "Newsletter Editorial Calendars",
        "List Validation & Cleaning",
        "Delivery & Open Rate Tracking",
        "A/B Headline Testing Checks",
      ]}
    />
  );
}
