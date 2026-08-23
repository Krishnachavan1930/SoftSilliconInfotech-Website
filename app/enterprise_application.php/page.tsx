import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function EnterpriseApplicationPage() {
  return (
    <ServiceDetailsPage
      title="Enterprise Application Development"
      bannerTitle="ENTERPRISE APPLICATION DEVELOPMENT COMPANY"
      subtitle="Optimize company operations, coordinate datasets, and configure secure internal portals."
      description="Enterprise systems require a deep understanding of organizational workflows, multiple layers of authentication, high availability databases, and third-party API configurations. We build custom ERPs, CRMs, admission management portals, and HR boards that automate business tasks, minimize operational costs, and eliminate data redundancy."
      image="/assets/img/services-details-image/6.png"
      pointsTitle="Enterprise Modules"
      points={[
        "Custom CRM & ERP Modules",
        "Role-Based Organization Access",
        "Data Synchronization Systems",
        "Encrypted Document Management",
        "Legacy Code Refactoring",
        "Automated Business Workflows",
      ]}
    />
  );
}
