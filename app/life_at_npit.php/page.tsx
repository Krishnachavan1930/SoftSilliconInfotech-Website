"use client";

import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";

export default function LifeAtSiliconSoftPage() {
  // We have gallery-img/1.png to gallery-img/16.png and student-image/1.jpg to student-image/24.jpg
  const galleryItems = [
    { src: "/assets/img/gallery-img/1.png", title: "Project Milestones" },
    { src: "/assets/img/gallery-img/2.png", title: "Technical Briefings" },
    { src: "/assets/img/gallery-img/3.png", title: "Designing Mockups" },
    { src: "/assets/img/gallery-img/4.png", title: "Team Collaborations" },
    { src: "/assets/img/gallery-img/5.png", title: "Weekly Reviews" },
    { src: "/assets/img/gallery-img/6.png", title: "Birthday Celebrations" },
    { src: "/assets/img/student-image/1.jpg", title: "Developer Workspaces" },
    { src: "/assets/img/student-image/2.jpg", title: "Code Internships" },
    { src: "/assets/img/student-image/3.jpg", title: "System Debates" },
    { src: "/assets/img/student-image/4.jpg", title: "Training Seminars" },
    { src: "/assets/img/student-image/5.jpg", title: "Certificate Distributions" },
    { src: "/assets/img/student-image/6.jpg", title: "Office Outdoors" },
  ];

  return (
    <div className="space-y-0">
      <PageBanner
        title="Life at SiliconSoft"
        subtitle="Our Work Culture, Celebrations, Intern Training, & Team Outings"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Workspace Culture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Work Hard, Celebrate Harder
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Inside SiliconSoft Infotech LLP: a dynamic environment built on creative discussions, constant skill learning, and collaborative achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-7xl) 25vw, 100vw"
                  onError={(e: any) => {
                    // Fallback to works image
                    e.target.src = "/assets/img/works-image/1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-bold font-heading">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
