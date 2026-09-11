import React from "react";
import PageBanner from "@/components/ui/PageBanner";

export default function TermsConditionsPage() {
  return (
    <div className="space-y-0">
      <PageBanner title="Terms & Conditions" subtitle="Our Operational Guidelines & Contracts" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 text-sm leading-relaxed space-y-6">
          <p>
            Welcome to SiliconSoft Infotech LLP. These terms and conditions outline the rules and regulations for the use of SiliconSoft Infotech LLP' Website, located at https://SiliconSoftsolutions.in.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">B2B Service Contracts</h2>
          <p>
            All custom applications, web development projects, and design works are governed by individual scope agreements signed prior to starting coding steps. Timelines are subject to changes based on scope modifications or delayed asset delivery.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Hosting & AMC Renewal</h2>
          <p>
            Domain name renewals, SSL certificates, annual maintenance contracts (AMC), and Linux SSD Hosting spaces must be renewed before their yearly expiration date to prevent platform downtime and service deactivation.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Liability Disclaimers</h2>
          <p>
            SiliconSoft Infotech LLP is not responsible for any indirect damages, visual script errors caused by unauthorized client server configuration changes, third-party plugin downtime, or server anomalies occurring outside our hosted spaces.
          </p>
        </div>
      </section>
    </div>
  );
}
