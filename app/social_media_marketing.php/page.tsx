import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function SocialMediaMarketingPage() {
  return (
    <ServiceDetailsPage
      title="Organic & Paid Social Media Management"
      bannerTitle="BEST SOCIAL MEDIA MARKETING COMPANY"
      subtitle="Optimize Facebook, Instagram, and LinkedIn channels to drive organic brand engagement."
      description="Exposure is key for launching a new brand or keeping an existing one competitive. We coordinate social calendars, design visual posts, write captions, run targeted ads, and compile insights to boost page impressions and increase customer messages."
      image="/assets/img/services-details-image/35.png"
      pointsTitle="SMM Deliverables"
      points={[
        "Targeted Facebook & Instagram Ads",
        "Social Content Calendars",
        "Engaging Reels & Stories Edits",
        "Custom Visual Post Design",
        "Profile Audits & BIO Optimizations",
        "Monthly Engagement Metrics Analytics",
      ]}
    />
  );
}
