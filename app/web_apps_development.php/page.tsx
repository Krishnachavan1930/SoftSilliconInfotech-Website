import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function WebAppsDevelopmentPage() {
  return (
    <ServiceDetailsPage
      title="Custom Web Application Development"
      bannerTitle="SiliconSoft Infotech LLP: Exceptional Web Applications in Nashik"
      subtitle="Robust backend scaling, interactive user modules, and dashboard configurations built from scratch."
      description="Web applications are crucial to automate customer inquiries, register users, process payments, and support internal business logic. We design secure backend portals using custom databases, REST APIs, and modern styling configurations. Our focus is to deliver zero-lag interfaces that make transaction steps simple and fast for your end customers."
      image="/assets/img/services-details-image/3.png"
      pointsTitle="Application Capabilities"
      points={[
        "Secure User Authentication",
        "Interactive Dashboards",
        "RESTful API Custom Integrations",
        "Role-Based User Permissions",
        "Real-Time Data Management",
        "Scalable Database Schemes",
      ]}
    />
  );
}
