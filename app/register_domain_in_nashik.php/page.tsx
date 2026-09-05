import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function RegisterDomainPage() {
  return (
    <ServiceDetailsPage
      title="Domain Name Registrations & DNA Setups"
      bannerTitle="DOMAIN REGISTRATION COMPANY IN NASHIK"
      subtitle="Search domain availabilities, register TLDs (.com, .in, .net), and setup DNS records."
      description="A domain name is your brand's unique online address. We help clients search for brand names, purchase extensions, configure nameservers, link TXT/MX records for corporate email, and manage domain ownership transfer codes."
      image="/assets/img/services-details-image/54.png"
      pointsTitle="Domain Features"
      points={[
        "Worldwide Top Level Domains (.com, .org, .net)",
        "Regional Indian Extensions (.in, .co.in)",
        "DNS Nameservers Custom Configuration",
        "Domain Locks & Theft Protection",
        "MX & TXT Records Configuration for Email",
        "Auto-Renewal Alerts & Protection",
      ]}
    />
  );
}
