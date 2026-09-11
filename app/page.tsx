"use client";

import React from "react";
import Link from "next/link";
import { Globe, Cpu, ArrowRight, HeartHandshake, Zap, Target, Flame, Headset, Code2, ShoppingBag, Cloud, GraduationCap, SearchCode, ShieldAlert, Smartphone, CheckCircle } from "lucide-react";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import BrandMarquee from "@/components/sections/BrandMarquee";
import { motion } from "framer-motion";

export default function HomePage() {
  const services = [
    {
      title: "Mobile App Development",
      description:
        "Build fast, reliable Android and iOS applications with React Native, Flutter, push notifications, device integrations, and offline data synchronization.",
      icon: <Smartphone className="w-8 h-8 text-emerald-500" />,
      href: "/mobile_app_development.php",
    },
    {
      title: "Web Application Development",
      description:
        "Develop secure, scalable web applications with authentication, dashboards, REST APIs, role-based access, real-time data, and reliable database architecture.",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      href: "/web_apps_development.php",
    },
    {
      title: "E-Commerce Development",
      description:
        "Create high-performance online stores with shopping carts, UPI and payment integrations, inventory management, order tracking, discounts, and sales analytics.",
      icon: <ShoppingBag className="w-8 h-8 text-secondary" />,
      href: "/e_commerce_development.php",
    },
    {
      title: "Enterprise Application Development",
      description:
        "Automate business operations through custom CRM, ERP, admission, HR, document, workflow, and role-based management systems.",
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      href: "/enterprise_application.php",
    },
    {
      title: "Corporate Website Design",
      description:
        "Build professional, responsive corporate websites with strong information architecture, lead capture, brand storytelling, performance, and cross-device support.",
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      href: "/corporate_website_design.php",
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Improve online visibility through SEO, social media management, Google listings, targeted campaigns, content planning, and performance-focused marketing.",
      icon: <SearchCode className="w-8 h-8 text-violet-500" />,
      href: "/social_media_marketing.php",
    },
    {
      title: "Cybersecurity & Hosting",
      description:
        "Protect websites and servers with SSL, backups, access controls, security monitoring, firewall configuration, and secure hosting environments.",
      icon: <ShieldAlert className="w-8 h-8 text-rose-500" />,
      href: "/privacy_policy_domain_hosting_data_security.php",
    },
    {
      title: "Cloud Computing & DevOps",
      description:
        "Deploy and maintain production infrastructure with VPS and dedicated servers, isolated resources, firewalls, monitoring, backups, and deployment automation.",
      icon: <Cloud className="w-8 h-8 text-amber-500" />,
      href: "/vps_dedicated_hosting_in_nashik.php",
    },
  ];

  const valueProps = [
    {
      title: "CLIENT FIRST",
      description: "We always start from where you are with your ideas and think from the viewpoint of your end users, formulating solutions that solve key pain points.",
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
    },
    {
      title: "ON TIME DELIVERY",
      description: "We do not over-promise, we over-deliver. Our set of internal frameworks and infrastructure helps us deliver solutions with superior quality on time.",
      icon: <Zap className="w-6 h-6 text-secondary" />,
    },
    {
      title: "RESULTS ORIENTED FOCUSED",
      description: "We create digitally adaptable products, not just features. These are real-world problems solved with futuristic and sustainable systems.",
      icon: <Target className="w-6 h-6 text-accent" />,
    },
    {
      title: "EFFECTIVE SYNERGY",
      description: "Communication solves real problems. Our development team remains in contact with clients through multiple channels to keep updates completely transparent.",
      icon: <Flame className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "STRONG EXPERTISE",
      description: "Our core developers stay at the cutting edge of modern frameworks, ensuring commitment and delivery in less time following best practices.",
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "TECHNOLOGY & SUPPORT",
      description: "Expect 24*7 support from our technical experts to ensure that your corporate platforms, sites, and systems are running smoothly without hiccups.",
      icon: <Headset className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden bg-slate-950 text-white pt-24 pb-20">
        <div
          className="absolute inset-0 bg-[url('/HomePg%20Bannar.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-slate-950/30 sm:bg-transparent"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-8"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary">
              Leading IT & Software Development Company
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-none">
              Softsilicon Infotech LLP Build Brands With <span className="text-primary font-bold">360° Solutions</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              We believe in Simple, Creative & Flexible Design and Development Standards. Creating world-class custom web portals, mobile apps, hosting, and marketing solutions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/about_np_it.php" className="btn bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 flex items-center justify-center space-x-2">
                <span>Know More</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contactus.php" className="btn border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-center">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Core Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Technology Services That Solve Business Needs
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              We combine design, development, infrastructure, security, and digital marketing to deliver practical technology solutions that match your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-slate-50 hover:bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100/50 shadow-sm w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <Link
                  href={svc.href}
                  className="inline-flex items-center text-sm font-semibold text-primary mt-8 hover:text-primary-dark"
                >
                  <span>Read More</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US ? */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/img/works-image/3.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Title / Pitch */}
            <div className="lg:sticky lg:top-28 h-fit space-y-6">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Values & Quality</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
                Why Choose SiliconSoft Infotech LLP?
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                We believe in establishing transparent, long-term partnerships built on results, high technical expertise, and top-tier customer satisfaction.
              </p>
              <div className="pt-4 border-t border-slate-800">
                <Link href="/contactus.php" className="inline-flex items-center text-primary hover:text-primary-light font-medium text-sm">
                  <span>Speak with our Consultants</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Grid of Values */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {valueProps.map((prop) => (
                <div
                  key={prop.title}
                  className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-slate-700 transition-colors"
                >
                  <div className="p-3 bg-slate-800 text-primary w-fit rounded-xl">
                    {prop.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Internship Opportunities Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Career Boost</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
                Internship Opportunities
              </h2>
            </div>
            
            <p className="text-slate-500 leading-relaxed">
              Kickstart your professional journey with hands-on practice, live industrial assignments, and close support from our expert developers. Expand your capabilities in real world domains:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "AI & Data Science", desc: "Machine learning datasets & analytics" },
                { title: "Cyber Security", desc: "Server protections & system audits" },
                { title: "IoT & Embedded", desc: "Firmware setups & diagnostic boards" },
              ].map((d) => (
                <div key={d.title} className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm">{d.title}</h4>
                  <p className="text-xs text-slate-500">{d.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Key Benefits:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Live Client Projects", "Experienced Mentors", "Team Collaborations", "Completion Certificate"].map((b) => (
                  <div key={b} className="flex items-center space-x-2 text-xs text-slate-600">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link href="/internship.php" className="btn bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 w-fit">
                <span>Apply Now</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Placeholder Graphic */}
          <div className="relative">
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/50 shadow-md flex items-center justify-center text-slate-400">
              <GraduationCap size={96} className="opacity-50 animate-pulse-subtle" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Brand Partners */}
      <BrandMarquee />
    </div>
  );
}
