import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function TravelTourismIndustryPage() {
  return (
    <ServiceDetailsPage
      title="Travel & Tourism Booking Platforms"
      bannerTitle="OUR EXPERTISE IN TRAVEL AND TOURISM"
      subtitle="Tour package displays, interactive flight/hotel booking API structures, and review guides."
      description="The travel industry thrives on visually rich layouts and effortless reservation flows. We build tour operator portal sites, booking APIs for hotels/vehicles, trip customizers, and user feedback cards to increase reservations and visitor trust."
      image="/assets/img/services-details-image/17.png"
      pointsTitle="Travel Solutions"
      points={[
        "Interactive Tour Package Catalogs",
        "Hotel & Vehicle Reservation APIs",
        "Itinerary Planners & Customizers",
        "Secure Payments & Deposits",
        "Review & Rating Feedback Forms",
        "Optimized Mobile Loading",
      ]}
    />
  );
}
