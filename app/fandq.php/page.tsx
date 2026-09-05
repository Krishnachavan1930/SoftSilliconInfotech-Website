"use client";

import React, { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const faqs = [
    {
      q: "What technologies does SiliconSoft Infotech LLP specialize in?",
      a: "Our core engineering team specializes in HTML, CSS, Tailwind CSS, core JavaScript, React, Next.js, Node.js, and PHP MySQL database management. We choose technologies that maximize loading speed and visual performance.",
    },
    {
      q: "How long does it take to design and launch a business website?",
      a: "For standard corporate or landing sites, it takes 7 to 15 business days. For customized web portals, ERP interfaces, or e-commerce stores, it takes 3 to 6 weeks, depending on database schemas and integrations.",
    },
    {
      q: "Do you provide hosting and domains directly?",
      a: "Yes, we are domain resellers and SSD Linux Hosting providers. We offer shared SSD plans, Linux reseller spaces, VPS platforms, dedicated servers, and custom corporate email hosting packages.",
    },
    {
      q: "What is covered under the Website Annual Maintenance Contract (AMC)?",
      a: "Our standard AMC covers monthly off-site dataset backups, security patches, framework version upgrades, simple graphic asset refreshes, page speed indexing checks, and 24/7 technical hotline troubleshooting.",
    },
    {
      q: "Can you recreate or redesign an existing legacy platform?",
      a: "Yes. If the original source code is lost, or if you want to transition your legacy portals to modern, high-performance web structures (such as Next.js/React), our developers will analyze the active pages and build them from scratch.",
    },
  ];

  return (
    <div className="space-y-0">
      <PageBanner title="Frequently Asked Questions" subtitle="Find Answers to Common Queries" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-100 bg-slate-50/50 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle size={20} className="text-primary shrink-0" />
                    <span className="font-bold text-slate-800 font-heading text-sm sm:text-base">
                      {faq.q}
                    </span>
                  </div>
                  <div>
                    {openAccordion === idx ? (
                      <ChevronUp size={18} className="text-slate-500" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-500" />
                    )}
                  </div>
                </button>

                {openAccordion === idx && (
                  <div className="p-6 border-t border-slate-100 bg-white text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
