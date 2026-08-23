import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function HealthcareIndustryPage() {
  return (
    <ServiceDetailsPage
      title="Healthcare & Medical Software Solutions"
      bannerTitle="OUR EXPERTISE IN THE HEALTH CARE INDUSTRY"
      subtitle="Engineered hospital management systems, patient logs, appointment schedulers, and clinical datasets."
      description="Healthcare platforms require high availability, secure patient data encryption, intuitive dashboards for clinical staff, and smooth mobile scheduling for patients. We design custom clinical portals, electronic health record modules (EHR), and automated SMS reminder alerts to optimize medical operations and patient care."
      image="/assets/img/services-details-image/9.png"
      pointsTitle="Healthcare Deliverables"
      points={[
        "Doctor Appointment Booking Systems",
        "EHR (Electronic Health Records) Vaults",
        "Clinical Billings & Invoicing Modules",
        "Patient OPD Queue Automations",
        "HIPAA-Compliant Security Outlines",
        "SMS/WhatsApp Automated Alerts",
      ]}
    />
  );
}
