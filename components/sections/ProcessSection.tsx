import React from "react";
import { MessageSquareCode, Palette, Terminal, SearchCode, Rocket, HeartHandshake } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We work closely with you to map project scope, user demographics, business requirements, and operational goals.",
      icon: <MessageSquareCode size={24} className="text-primary" />,
    },
    {
      step: "02",
      title: "Wireframing & UI/UX Design",
      description: "Creating custom visual designs, high-fidelity prototypes, interactive user journeys, and component palettes.",
      icon: <Palette size={24} className="text-secondary" />,
    },
    {
      step: "03",
      title: "Coding & Development",
      description: "Writing strict, reusable code using premium tech structures (Next.js, TypeScript, React) to materialize the logic.",
      icon: <Terminal size={24} className="text-accent" />,
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Reviewing functionality, security audits, cross-device loading, SEO readiness, and visual pixel alignment.",
      icon: <SearchCode size={24} className="text-emerald-500" />,
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Configuring production hosting environments, SSL certs, nameservers, sitemaps, and indexing requests.",
      icon: <Rocket size={24} className="text-indigo-500" />,
    },
    {
      step: "06",
      title: "24/7 Support & AMC",
      description: "Continuous system updates, vulnerability fixes, monthly backups, page speed optimizations, and version upgrades.",
      icon: <HeartHandshake size={24} className="text-rose-500" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
            Our Development Process
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed">
            How we translate your requirements into fully optimized, production-ready enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow"
            >
              <div className="absolute top-6 right-8 text-slate-100 font-extrabold text-5xl font-heading group-hover:text-primary/10 transition-colors">
                {step.step}
              </div>
              <div className="p-4 bg-slate-50 w-fit rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
