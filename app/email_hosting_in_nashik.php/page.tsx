import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function EmailHostingPage() {
  return (
    <ServiceDetailsPage
      title="Professional Business Email Hosting"
      bannerTitle="BEST EMAIL HOSTING COMPANY"
      subtitle="Custom corporate email matching your domain (e.g. sales@yourbrand.com), secure webmail, and spam filters."
      description="Business communication requires professional presentation. We set up custom email accounts linked to your domain, configure MX/TXT/SPF records, integrate secure webmail access (Roundcube), and setup IMAP/POP3 configs for Outlook and smartphones."
      image="/assets/img/services-details-image/63.png"
      pointsTitle="Email Features"
      points={[
        "Custom Business Address Matching Domain",
        "Roundcube Webmail Access Board",
        "Outlook & Smart Phone IMAP/POP3 Sync",
        "Anti-Spam & Anti-Phishing Filter Audits",
        "Custom Auto-Responders & Forwarders",
        "Secure SMTP Outbound Configurations",
      ]}
    />
  );
}
