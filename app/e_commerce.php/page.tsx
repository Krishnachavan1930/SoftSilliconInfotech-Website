import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function ECommerceIndustryPage() {
  return (
    <ServiceDetailsPage
      title="E-Commerce & Digital Storefronts"
      bannerTitle="OUR EXPERTISE IN E-COMMERCE INDUSTRY"
      subtitle="Scalable checkout funnels, product management boards, order monitoring, and vendor systems."
      description="In an active digital market, your store needs to process transactions cleanly, update inventory automatically, support secure cart actions, and load fast on mobile devices. We design custom e-commerce applications built on robust API architectures to secure user details and boost checkouts."
      image="/assets/img/services-details-image/15.png"
      pointsTitle="E-Commerce Industry Features"
      points={[
        "Secure Payments (Stripe, UPI, PayPal)",
        "Automated Sales Accounting",
        "Product Search & Smart Filters",
        "Discount & Gift Coupon Managers",
        "Multi-Vendor Marketplace Support",
        "Mobile Optimized Shopping Cart",
      ]}
    />
  );
}
