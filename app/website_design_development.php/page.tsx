import React from "react";
import ServiceDetailsPage from "@/components/sections/ServiceDetailsPage";

export default function WebsiteDesignDevelopmentPage() {
  return (
    <ServiceDetailsPage
      title="Innovative Web Design & Development"
      bannerTitle="SiliconSoft Infotech LLP - Your Gateway to Web Design & Development"
      subtitle="Exceptional Web Design That Captivates & Functionality That Enhances User Experience"
      description="A website has the power to draw visitors, genuinely impact them, and even persuade them to participate. At SiliconSoft Infotech LLP, we engineer custom web architectures, responsive corporate landing pages, high-conversion layouts, and SEO-oriented structures. Whether you require a static branding site, an active corporate blog, or a dynamic interface, our developers work tirelessly to deliver robust platforms that represent your brand values perfectly."
      image="/assets/img/services-details-image/4.png"
      pointsTitle="Web Services Include"
      points={[
        "Static Responsive Design",
        "Dynamic Custom CMS Portals",
        "E-Commerce Integration",
        "SEO Readiness & Sitemap Structuring",
        "Fast Page Speed Indexing",
        "Annual Maintenance Support (AMC)",
      ]}
    />
  );
}
