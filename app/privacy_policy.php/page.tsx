import React from "react";
import PageBanner from "@/components/ui/PageBanner";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-0">
      <PageBanner title="Privacy Policy" subtitle="Your Privacy Matters to Us" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 text-sm leading-relaxed space-y-6">
          <p>
            At SiliconSoft Infotech LLP, accessible from https://SiliconSoftsolutions.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SiliconSoft Infotech LLP and how we use it.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Log Files</h2>
          <p>
            SiliconSoft Infotech LLP follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Cookies and Web Beacons</h2>
          <p>
            Like any other website, SiliconSoft Infotech LLP uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Privacy Policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of SiliconSoft Infotech LLP. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on SiliconSoft Infotech LLP, which are sent directly to users' browser.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-heading pt-4">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>
      </section>
    </div>
  );
}
