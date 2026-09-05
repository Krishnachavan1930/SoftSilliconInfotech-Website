"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Code2,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
  Cloud,
  Palette,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Users,
  Send,
  Laptop,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import BlogsPage from "@/app/blogs.php/page";
import ContactPage from "@/app/contactus.php/page";

// Form validation schema using Zod
const applyFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  program: z.string().min(1, "Please select a program"),
  location: z.string().min(1, "Please select a location"),
  duration: z.string().min(1, "Please select a duration"),
  areaOfInterest: z.string().optional(),
});

type ApplyFormValues = z.infer<typeof applyFormSchema>;

interface Course {
  id: string;
  title: string;
  category: "web" | "ai" | "mobile" | "cloud" | "design";
  badge: string;
  duration: string;
  rating: string;
  description: string;
  skills: string[];
  projects: string;
  icon: React.ReactNode;
}

export default function SparkCoursesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // SPARK works like a tabbed page. Only the selected section is rendered.
  type SparkSection = "courses" | "blog" | "contact" | "apply";
  const [activeSparkSection, setActiveSparkSection] = useState<SparkSection>("courses");

  useEffect(() => {
    const validSections: SparkSection[] = ["courses", "blog", "contact", "apply"];
    const section = searchParams.get("section") as SparkSection | null;
    const nextSection = section && validSections.includes(section) ? section : "courses";

    // The URL is the single source of truth for the SPARK tab.
    // Next.js Link performs a client-side navigation, so useSearchParams
    // is required here instead of listening only for the browser popstate event.
    setActiveSparkSection(nextSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      program: "full-stack",
      location: "nashik",
      duration: "3-months",
      areaOfInterest: "",
    },
  });

  const courses: Course[] = [
    {
      id: "full-stack",
      title: "Full Stack Web Development (MERN / Next.js)",
      category: "web",
      badge: "Most Popular",
      duration: "3 - 6 Months",
      rating: "4.9/5.0",
      description:
        "Master frontend and backend engineering. Learn React, Next.js, Node.js, Express, MongoDB, REST APIs, and modern Tailwind CSS UI architecture.",
      skills: ["React 19 & Next.js", "Node.js & Express", "MongoDB & Prisma", "Tailwind CSS", "Git & CI/CD"],
      projects: "4 Live Production Web Apps",
      icon: <Code2 className="text-[#0b5ed7]" size={28} />,
    },
    {
      id: "ai-ml",
      title: "Python, Machine Learning & AI Engineering",
      category: "ai",
      badge: "High Demand",
      duration: "3 - 6 Months",
      rating: "4.9/5.0",
      description:
        "Build predictive intelligence models, neural networks, computer vision utilities, and generative AI integrations using Python and modern frameworks.",
      skills: ["Python for AI", "NumPy & Pandas", "TensorFlow / PyTorch", "LLM APIs & LangChain", "Scikit-Learn"],
      projects: "3 AI & Predictive Models",
      icon: <BrainCircuit className="text-purple-600" size={28} />,
    },
    {
      id: "react-next",
      title: "React.js & Next.js Advanced Architecture",
      category: "web",
      badge: "Fast Track",
      duration: "45 Days - 3 Months",
      rating: "4.8/5.0",
      description:
        "Deep dive into React Server Components, state management, SSR/SSG caching, performance optimization, and enterprise dashboard architecture.",
      skills: ["Next.js App Router", "TypeScript", "Zustand / Redux", "Server Actions", "Vercel Deployments"],
      projects: "2 Enterprise Portals",
      icon: <Code2 className="text-cyan-500" size={28} />,
    },
    {
      id: "mobile-apps",
      title: "Cross-Platform Mobile App Development",
      category: "mobile",
      badge: "Industry Certified",
      duration: "3 - 6 Months",
      rating: "4.8/5.0",
      description:
        "Design and compile scalable Android and iOS applications with Flutter & React Native, Firebase backend, and local database synchronizations.",
      skills: ["Flutter & Dart", "React Native", "Firebase Auth & DB", "Push Notifications", "Play Store Deploy"],
      projects: "3 Live Mobile Apps",
      icon: <Smartphone className="text-emerald-500" size={28} />,
    },
    {
      id: "cyber-security",
      title: "Cyber Security & Ethical Hacking",
      category: "cloud",
      badge: "Specialized",
      duration: "3 Months",
      rating: "4.9/5.0",
      description:
        "Learn vulnerability assessment, penetration testing, firewall rules, server hardening, SSL audit protocols, and defense against OWASP threats.",
      skills: ["Kali Linux & Tools", "OWASP Top 10", "Network Penetration", "Vulnerability Scanning", "Security Auditing"],
      projects: "Security Auditing Labs",
      icon: <ShieldCheck className="text-rose-500" size={28} />,
    },
    {
      id: "cloud-devops",
      title: "Cloud Computing & AWS / DevOps",
      category: "cloud",
      badge: "Career Booster",
      duration: "3 Months",
      rating: "4.8/5.0",
      description:
        "Deploy, monitor, and scale production systems on AWS Cloud. Master Docker containerization, Kubernetes orchestration, and CI/CD pipelines.",
      skills: ["AWS EC2, S3 & RDS", "Docker & Containers", "Kubernetes Basics", "GitHub Actions CI/CD", "Linux Server Mgmt"],
      projects: "Automated Cloud Pipelines",
      icon: <Cloud className="text-amber-500" size={28} />,
    },
    {
      id: "data-science",
      title: "Data Science & Business Intelligence",
      category: "ai",
      badge: "Analytical Track",
      duration: "3 - 6 Months",
      rating: "4.9/5.0",
      description:
        "Transform raw big data into actionable insights using SQL, Python, PowerBI dashboards, statistical modeling, and data pipelines.",
      skills: ["Advanced SQL", "PowerBI / Tableau", "Data Wrangling", "Exploratory Analytics", "Statistical Modeling"],
      projects: "3 Real BI Case Studies",
      icon: <Target className="text-indigo-500" size={28} />,
    },
    {
      id: "ui-ux",
      title: "UI/UX & Digital Product Design",
      category: "design",
      badge: "Creative Tech",
      duration: "45 Days - 3 Months",
      rating: "4.8/5.0",
      description:
        "Master Figma, user journey mapping, design systems, interactive prototypes, user usability tests, and seamless design-to-code handoffs.",
      skills: ["Figma Mastery", "Wireframing & Prototyping", "Design Systems", "User Research", "Responsive UI Design"],
      projects: "3 Full App Design Cases",
      icon: <Palette className="text-pink-500" size={28} />,
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const handleApplyClick = (courseId: string) => {
    setValue("program", courseId);
    const formSection = document.getElementById("apply-query-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToApply = () => {
    const formSection = document.getElementById("apply-query-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = async (data: ApplyFormValues) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "apply", data }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your application.");
      }

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your query. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      
      {/* Courses Section with Category Tabs */}
      {activeSparkSection === "courses" && (
      <section id="courses" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#0b5ed7] font-semibold text-xs tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
              Industry Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading tracking-tight">
              Our Professional Courses & Programs
            </h2>
            <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">
              Explore our structured career tracks designed in sync with current IT industry benchmarks.
            </p>
          </div>

          {/* Interactive Course Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Courses" },
              { id: "web", label: "Web & Full Stack" },
              { id: "ai", label: "AI & Data Science" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "cloud", label: "Cloud & Security" },
              { id: "design", label: "UI/UX & Design" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-red-300 transition-all group"
              >
                <div className="space-y-4">
                  {/* Top card header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-600 px-2.5 py-1 rounded-md">
                      {course.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-red-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Modules Covered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-white border border-slate-200 text-slate-700 text-[11px] px-2 py-0.5 rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration & Project Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200/60 text-xs text-slate-600">
                    <div className="flex items-center space-x-1.5">
                      <Clock size={14} className="text-[#0b5ed7]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Laptop size={14} className="text-emerald-600" />
                      <span>{course.projects}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-6">
                  <button
                    onClick={() => handleApplyClick(course.id)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all duration-150 flex items-center justify-center space-x-1.5 shadow-sm shadow-red-600/20 cursor-pointer"
                  >
                    <span>Apply for this Course</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 5. Integrated Apply Form Section */}
      {activeSparkSection === "apply" && (
      <section id="apply-query-section" className="py-24 bg-slate-50 relative border-t border-slate-200">
        
        {/* Banner Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="inline-flex items-center space-x-2 bg-[#0b5ed7] text-white px-5 py-2.5 rounded-lg shadow-sm">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading">
              Drop your queries, and we&apos;ll be in touch.
            </h2>
          </div>
        </div>

        {/* 2-Column Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-md relative">
              {submitSuccess && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-5 rounded-xl flex items-start space-x-3 mb-6 animate-fade-in-down">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-sm">Query Submitted Successfully!</h4>
                    <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                      Thank you for applying to the SiliconSoft SPARK Program. Our technical counselor will reach out to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-xs sm:text-sm mb-6">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-slate-700">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                    Name*
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Enter your name here"
                    className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="text-rose-500 text-xs font-semibold">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                    Email*
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-xs font-semibold">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Enter your number here"
                    className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all"
                  />
                  {errors.phone && (
                    <p className="text-rose-500 text-xs font-semibold">{errors.phone.message}</p>
                  )}
                </div>

                {/* Select Program */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                    Select Program*
                  </label>
                  <select
                    {...register("program")}
                    className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all cursor-pointer"
                  >
                    <option value="">Select Program</option>
                    <option value="full-stack">Full Stack Web Development (MERN / Next.js)</option>
                    <option value="ai-ml">Python, Machine Learning & AI Engineering</option>
                    <option value="react-next">React.js & Next.js Advanced Architecture</option>
                    <option value="mobile-apps">Mobile App Development (Flutter & React Native)</option>
                    <option value="cyber-security">Cyber Security & Ethical Hacking</option>
                    <option value="cloud-devops">Cloud Computing & AWS / DevOps</option>
                    <option value="data-science">Data Science & Predictive Analytics</option>
                    <option value="ui-ux">UI/UX & Digital Product Design</option>
                    <option value="spark-sep">SPARK - Student Fast-Track Bootcamp</option>
                  </select>
                  {errors.program && (
                    <p className="text-rose-500 text-xs font-semibold">{errors.program.message}</p>
                  )}
                </div>

                {/* Select Location */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                    Select Location*
                  </label>
                  <select
                    {...register("location")}
                    className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all cursor-pointer"
                  >
                    <option value="">Select Location</option>
                    <option value="nashik">Nashik Campus (Guru Gobind Singh College Rd)</option>
                    <option value="pune">Pune Tech Hub Center</option>
                    <option value="online">Online Live Interactive Classroom</option>
                    <option value="hybrid">Hybrid (Classroom + Remote Live Projects)</option>
                  </select>
                  {errors.location && (
                    <p className="text-rose-500 text-xs font-semibold">{errors.location.message}</p>
                  )}
                </div>

                {/* Select Duration */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                    Select Duration*
                  </label>
                  <select
                    {...register("duration")}
                    className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all cursor-pointer"
                  >
                    <option value="">Select Duration</option>
                    <option value="1-month">1 Month (Fast-Track Intensive Bootcamp)</option>
                    <option value="3-months">3 Months (Core Industry Certification)</option>
                    <option value="6-months">6 Months (Comprehensive Diploma + Live Internship)</option>
                    <option value="45-days">45 Days (SPARK Fast-Track Skill Program)</option>
                    <option value="weekend">Weekend Professional Batch</option>
                  </select>
                  {errors.duration && (
                    <p className="text-rose-500 text-xs font-semibold">{errors.duration.message}</p>
                  )}
                </div>

                {/* Area of Interest */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                    Area of Interest*
                  </label>
                  <textarea
                    rows={3}
                    {...register("areaOfInterest")}
                    placeholder="Enter your interest here"
                    className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-200 shadow-md shadow-red-600/25 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Query...</span>
                  ) : (
                    <>
                      <span>Apply Now & Submit Query</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Visual Artwork & Concentric Circles */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[480px]">
              <div className="relative w-full max-w-[480px] h-[480px] sm:h-[520px] flex items-center justify-center">
                {/* Concentric rings */}
                <div className="absolute w-[440px] h-[440px] rounded-full border-[18px] border-slate-300/40 bg-slate-200/20" />
                <div className="absolute w-[360px] h-[360px] rounded-full border-[20px] border-slate-400/40 bg-slate-700/30" />
                <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 shadow-2xl flex items-center justify-center" />

                {/* Graphic avatar container */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                  <div className="relative mb-4">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-red-600 via-red-700 to-slate-900 flex flex-col items-center justify-center relative">
                      <div className="relative z-10 flex flex-col items-center">
                        <GraduationCap className="text-white drop-shadow-md mb-1" size={44} />
                        <div className="bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-red-300/30">
                          Professional IT Training
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="absolute -bottom-2 -left-4 bg-white text-slate-900 border border-slate-200 px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 text-xs font-bold">
                      <Laptop size={14} className="text-[#0b5ed7]" />
                      <span>Live Production Work</span>
                    </div>

                    <div className="absolute -top-2 -right-4 bg-red-600 text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 text-xs font-bold">
                      <Award size={14} className="text-amber-300" />
                      <span>Industry Certified</span>
                    </div>
                  </div>

                  <div className="space-y-2 max-w-sm mt-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      Accelerate Your Tech Career
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Gain hands-on coding experience on commercial web & mobile frameworks with 1-on-1 expert developer guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      )}

      {/* =====================================================
          SPARK BLOG SECTION
          Only the Blog content is shown when Blog is selected.
      ===================================================== */}
      {activeSparkSection === "blog" && (
      <section id="spark-blog" className="scroll-mt-24 bg-white">
        <BlogsPage />
      </section>
      )}

      {/* =====================================================
          SPARK CONTACT SECTION
          Only the Contact content is shown when Contact is selected.
      ===================================================== */}
      {activeSparkSection === "contact" && (
      <section id="spark-contact" className="scroll-mt-24 bg-white">
        <ContactPage />
      </section>
      )}
    </div>
  );
}
