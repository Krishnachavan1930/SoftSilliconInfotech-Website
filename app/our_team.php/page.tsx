"use client";

import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";
import { User } from "lucide-react";

export default function OurTeamPage() {
  const team = [
    {
      name: "Dr. Pramod Aswale",
      role: "Managing Director",
      image: "placeholder",
    },
    {
      name: "Mr. Chetan Ahire",
      role: "Technical Director (B.E Computer Engineering)",
      image: "placeholder",
    },
    {
      name: "Mr. Nandkishor Wagh",
      role: "Lead Systems Architect",
      image: "/assets/img/team-image/3.jpg",
    },
    {
      name: "Mr. Mohit Deore",
      role: "Senior Full Stack Developer",
      image: "/assets/img/team-image/4.jpg",
    },
    {
      name: "Mr. Rohit Rokade",
      role: "Mobile Apps Team Lead",
      image: "/assets/img/team-image/6.jpg",
    },
    {
      name: "Mr. Jitendra Patil",
      role: "Senior Graphic Designer",
      image: "/assets/img/team-image/7.jpg",
    },
    {
      name: "Ms. Shubhangi Khairnar",
      role: "UI/UX & Web Developer",
      image: "/assets/img/team-image/8.jpg",
    },
    {
      name: "Miss. Anuradha Kathe",
      role: "Social Media Executive",
      image: "/assets/img/team-image/team/1.jpg",
    },
    {
      name: "Mrs. Ravina Jadhav",
      role: "QA Engineer & Tester",
      image: "/assets/img/team-image/team/2.jpg",
    },
    {
      name: "Mrs. Priyanka Jadhav",
      role: "Project Manager",
      image: "/assets/img/team-image/team/3.jpg",
    },
    {
      name: "Mrs. Pooja Suryawanshi",
      role: "Business Developer",
      image: "/assets/img/team-image/team/4.jpg",
    },
    {
      name: "Miss. Kajal Mogal",
      role: "SEO & Digital Analyst",
      image: "/assets/img/team-image/team/6.jpg",
    },
  ];

  return (
    <div className="space-y-0">
      <PageBanner
        title="Our Team"
        subtitle="Our Team, Our Asset – Driving Success Through Collaboration and Innovation"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Specialists</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Meet Our Core Experts
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Our professional team of system architects, UI designers, software engineers, and digital consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[4/5] bg-slate-200 overflow-hidden flex items-center justify-center text-slate-400">
                  {member.image === "placeholder" ? (
                    <User size={64} className="opacity-60" />
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-500"
                      onError={(e: any) => {
                        // Fallback in case of missing download
                        e.target.src = "/assets/img/team-image/3.jpg";
                      }}
                    />
                  )}
                </div>

                {/* Details */}
                <div className="p-6 text-center space-y-1">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    {member.role}
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
