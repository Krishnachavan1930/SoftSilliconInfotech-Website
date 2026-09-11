import React from "react";
import PageBanner from "@/components/ui/PageBanner";

export default function DomainHostingPrivacyPage() {
  return (
    <div className="space-y-0">
      <PageBanner title="Domain & Hosting Security" subtitle="Data Security & Registry Protections" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 text-sm leading-relaxed space-y-6">
          <p>
            This section outlines the specific safety practices, SSL encryption guidelines, database logs, and registry protections associated with SSD Linux Hosting, reseller spaces, dedicated servers, and domain purchases managed by SiliconSoft Infotech LLP.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Data Security & Backups</h2>
          <p>
            All website data hosted on our SSD servers are subject to standard monthly data backup schemas. We execute automatic backups to keep customer datasets insulated from hardware failures.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">SSL Encryption</h2>
          <p>
            We require all client websites to deploy standard Secure Sockets Layer (SSL) certificates to encrypt credit card inputs, user passwords, and feedback query forms. This ensures that the data transit is fully insulated from external injection attacks.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Server Integrity Monitoring</h2>
          <p>
            We implement constant system logs, block unauthorized script executions, scan files for code injections, and block brute-force SSH logins. Any platform anomalies trigger immediate alerts to our operations desk.
          </p>
        </div>
      </section>
    </div>
  );
}
