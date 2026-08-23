"use client";

import React, { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Zharokha Sarees E-Commerce",
      category: "web",
      image: "/assets/img/works-image/1.jpg",
      description: "Custom storefront, payment processing, and stock dashboard.",
    },
    {
      title: "Bani Foundation NGO Portal",
      category: "marketing",
      image: "/assets/img/works-image/2.jpg",
      description: "Digital campaign layout and online fund-raising integrations.",
    },
    {
      title: "Engineering College Portal",
      category: "web",
      image: "/assets/img/works-image/3.jpg",
      description: "Admission database, online exam schedulers, and admin panel.",
    },
    {
      title: "Active Fit Mobile App",
      category: "mobile",
      image: "/assets/img/works-image/4.jpg",
      description: "Fitness activity logs, steps counter, and user profiles.",
    },
    {
      title: "Creative Branding Identity",
      category: "graphic",
      image: "/assets/img/works-image/5.jpg",
      description: "Custom SVG logotype design, packaging, and colors setup.",
    },
    {
      title: "School Admission System",
      category: "web",
      image: "/assets/img/works-image/1.jpg",
      description: "Fully automated admissions workflow & registration.",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="space-y-0">
      <PageBanner title="Our Portfolio" subtitle="Showcasing Our Latest Technology Deployments" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {["all", "web", "mobile", "marketing", "graphic"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white text-primary rounded-full shadow-md">
                      <ExternalLink size={20} />
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
