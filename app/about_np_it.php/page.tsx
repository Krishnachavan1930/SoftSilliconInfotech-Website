"use client";

import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";
import {
  Compass,
  Target,
  HeartHandshake,
  Zap,
  Target as TargetIcon,
  Flame,
  Cpu,
  Headset,
  User,
  Users,
  Sparkles,
  Award,
  Laptop,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "CLIENT FIRST",
      description:
        "We always start from where you are with your ideas and think from the viewpoint of your end users, formulating solutions that solve key pain points.",
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
    },
    {
      title: "ON TIME DELIVERY",
      description:
        "We do not over-promise, we over-deliver. Our set of internal frameworks and infrastructure helps us deliver solutions with superior quality on time.",
      icon: <Zap className="w-6 h-6 text-secondary" />,
    },
    {
      title: "RESULTS ORIENTED FOCUSED",
      description:
        "We create digitally adaptable products, not just features. These are real-world problems solved with futuristic and sustainable systems.",
      icon: <TargetIcon className="w-6 h-6 text-accent" />,
    },
    {
      title: "EFFECTIVE SYNERGY",
      description:
        "Communication solves real problems. Our development team remains in contact with clients through multiple channels to keep updates completely transparent.",
      icon: <Flame className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "STRONG EXPERTISE",
      description:
        "Our core developers stay at the cutting edge of modern frameworks, ensuring commitment and delivery in less time following best practices.",
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "TECHNOLOGY & SUPPORT",
      description:
        "Expect 24*7 support from our technical experts to ensure that your corporate platforms, sites, and systems are running smoothly without hiccups.",
      icon: <Headset className="w-6 h-6 text-emerald-500" />,
    },
  ];

  const team = [
    {
      name: "Ms. Neha Pramod Mane",
      role: "Founder",
      image: "placeholder",
    },
    {
      name: "Mr. Pramod S. Aswale",
      role: "CEO",
      image: "placeholder",
    },
  ];

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
      <PageBanner title="About Softsilicon Infotech LLP" subtitle="Who We Are?" />

      {/* 1. Main Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Description */}
            <div className="space-y-6">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
                Company Overview
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Driving Success Through Collaboration and Innovation
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Softsilicon Infotech LLP is a group of IT experts accompanied by a promise of conveying technology-enabled business solutions. We give world-class software and Web Development services that focus on assuming a supportive role to your business.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                With a strong presence and trusted client partnerships worldwide, we excel in engineering custom software applications, premium website architectures, native mobile products, and result-oriented digital marketing configurations.
              </p>

              <div className="pt-2 flex items-center space-x-4">
                <Link
                  href="/contactus.php"
                  className="btn bg-[#0b5ed7] hover:bg-[#084298] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg shadow-sm"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/spark.php"
                  className="btn bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase px-5 py-2.5 rounded-lg"
                >
                  Explore SPARK Program
                </Link>
              </div>
            </div>

            {/* Vision / Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl">
                  <Compass size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  To formulate solutions that solve core industrial issues, helping your company grow and succeed in the long-term using futuristic tools.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-secondary/10 text-secondary w-fit rounded-2xl">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  To build digitally adaptable systems with superior quality, delivering custom frameworks and 24*7 support to active business systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us Values Grid */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
              Our Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 font-heading tracking-tight">
              Why Choose SoftSilicon Infotech LLP?
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              We stand out in the IT market because we always focus on our client&apos;s end-users, pain points, and commercial targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white border border-slate-100 p-8 rounded-2xl space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-slate-50 text-primary w-fit rounded-xl">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership & Core Team */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading tracking-tight">
              Meet Our Core Leadership
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Our dedicated executive leadership driving innovative software solutions and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {team.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-6"
              >
                {/* Photo Placeholder / Avatar */}
                <div className="w-28 h-28 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-slate-400 mb-4 border-2 border-white shadow-sm">
                  <User size={52} className="opacity-60 text-slate-500" />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider">
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
