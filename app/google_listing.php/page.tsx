import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function GoogleListingPage() {
  return (
    <ServiceDetailsPage
      title="Google My Business Listing & Local SEO"
      bannerTitle="GOOGLE MY BUSINESS LISTING SERVICES"
      subtitle="Gain local business traction, display on Google Maps, and manage customer reviews."
      description="Optimizing your Google Business Profile helps local customers locate your address, phone numbers, and working hours instantly. We configure maps coordinates, manage reviews, post corporate updates, and monitor keyword queries to rank in local pack searches."
      image="/assets/img/services-details-image/37.png"
      pointsTitle="Listing Deliverables"
      points={[
        "Google My Business Setup & Verification",
        "Exact Maps Coordinates Configuration",
        "Working Hours & Service Listings",
        "Review Management & Automated Invites",
        "Weekly Updates & Image Postings",
        "Local Search Query Analytics",
      ]}
    />
  );
}
