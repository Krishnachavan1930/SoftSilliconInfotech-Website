import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function ECommerceDevelopmentPage() {
  return (
    <ServiceDetailsPage
      title="E-Commerce Stores & Online Applications"
      bannerTitle="E-COMMERCE APPLICATION DESIGN & DEVELOPMENT"
      subtitle="Expand your sales borders, manage digital inventory, and process transactions securely."
      description="E-Commerce platforms require high uptime, secure checkout flows, product inventory alerts, search filters, and mobile compatibility. At SiliconSoft Infotech LLP, we design custom Shopify, WooCommerce, and Next.js headless e-commerce systems that load fast and make searching for and purchasing items smooth for your end consumers."
      image="/assets/img/services-details-image/7.png"
      pointsTitle="E-Commerce Systems"
      points={[
        "Interactive Shopping Carts",
        "Secure Credit/Debit & UPI Portals",
        "Real-Time Stock Counters",
        "Promo Code & Discount Engines",
        "Order Shipping Tracker APIs",
        "Detailed Sales Analytics",
      ]}
    />
  );
}
