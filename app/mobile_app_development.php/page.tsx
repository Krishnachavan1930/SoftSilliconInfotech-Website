import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function MobileAppDevelopmentPage() {
  return (
    <ServiceDetailsPage
      title="Android & iOS Mobile App Development"
      bannerTitle="MOBILE APPLICATION DEVELOPMENT COMPANY"
      subtitle="Native apps, clean layouts, and offline capabilities engineered for smartphones."
      description="Modern users interact with businesses primarily through smartphones. We build responsive native and cross-platform apps (using React Native, Flutter, and Android/iOS tools) that render layouts quickly, support push notifications, utilize device GPS, and process offline databases cleanly."
      image="/assets/img/services-details-image/8.png"
      pointsTitle="Mobile Features"
      points={[
        "iOS App Development",
        "Android App Development",
        "Native Device API Integrations",
        "Push Notification Pipelines",
        "Offline Database Synchronization",
        "App Store & Google Play Publishing",
      ]}
    />
  );
}
