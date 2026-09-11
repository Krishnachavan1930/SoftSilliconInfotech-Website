"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  CheckCircle2,
  Send,
  Phone,
  MessageSquare,
  Youtube,
  GraduationCap,
  Sparkles,
  Award,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Code2,
} from "lucide-react";
import Link from "next/link";

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

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const programParam = searchParams.get("program") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      program: programParam || "",
      location: "",
      duration: "",
      areaOfInterest: "",
    },
  });

  useEffect(() => {
    if (programParam) {
      setValue("program", programParam);
    }
  }, [programParam, setValue]);

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
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { value: "full-stack", label: "Full Stack Web Development (MERN / Next.js)" },
    { value: "ai-ml", label: "Python, Machine Learning & AI Engineering" },
    { value: "react-next", label: "React.js & Next.js Advanced Architecture" },
    { value: "mobile-apps", label: "Mobile App Development (Flutter & React Native)" },
    { value: "cyber-security", label: "Cyber Security & Ethical Hacking" },
    { value: "cloud-devops", label: "Cloud Computing & AWS / DevOps" },
    { value: "data-science", label: "Data Science & Predictive Analytics" },
    { value: "ui-ux", label: "UI/UX & Digital Product Design" },
    { value: "digital-marketing", label: "Digital Marketing & Performance SEO" },
    { value: "spark-sep", label: "SPARK - Student Empowerment & Fast-Track Bootcamp" },
  ];

  const locations = [
    { value: "nashik", label: "Nashik Campus (Guru Gobind Singh College Rd)" },
    { value: "pune", label: "Pune Tech Hub Center" },
    { value: "online", label: "Online Live Interactive Classroom" },
    { value: "hybrid", label: "Hybrid (Classroom + Remote Live Projects)" },
  ];

  const durations = [
    { value: "1-month", label: "1 Month (Fast-Track Intensive Bootcamp)" },
    { value: "3-months", label: "3 Months (Core Industry Certification)" },
    { value: "6-months", label: "6 Months (Comprehensive Diploma + Live Internship)" },
    { value: "45-days", label: "45 Days (SPARK Fast-Track Skill Program)" },
    { value: "weekend", label: "Weekend Professional Batch" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative pb-20 pt-10">
      {/* Top Main Heading Banner (Matching User Reference Image) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <div className="inline-flex items-center space-x-2 bg-[#0b5ed7] text-white px-5 py-2.5 rounded-lg shadow-sm">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading">
              Drop your queries, and we&apos;ll be in touch.
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Main Grid: Form Left, Visual & Floating Social Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* Left Column: Form Card (Matching Image Structure) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-md relative"
          >
            {submitSuccess && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-5 rounded-xl flex items-start space-x-3 mb-6 animate-fade-in-down">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-sm">Query Submitted Successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                    Thank you for reaching out to SiliconSoft Infotech. Our admissions and career guidance team will get in touch with you shortly.
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
              {/* Name Field */}
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

              {/* Email Field */}
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

              {/* Phone Number Field */}
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

              {/* Select Program Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                  Select Program*
                </label>
                <select
                  {...register("program")}
                  className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Program</option>
                  {programs.map((prog) => (
                    <option key={prog.value} value={prog.value}>
                      {prog.label}
                    </option>
                  ))}
                </select>
                {errors.program && (
                  <p className="text-rose-500 text-xs font-semibold">{errors.program.message}</p>
                )}
              </div>

              {/* Select Location Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                  Select Location*
                </label>
                <select
                  {...register("location")}
                  className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Location</option>
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                {errors.location && (
                  <p className="text-rose-500 text-xs font-semibold">{errors.location.message}</p>
                )}
              </div>

              {/* Select Duration Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#0b5ed7] uppercase tracking-wider block">
                  Select Duration*
                </label>
                <select
                  {...register("duration")}
                  className="w-full bg-slate-50/70 border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Duration</option>
                  {durations.map((dur) => (
                    <option key={dur.value} value={dur.value}>
                      {dur.label}
                    </option>
                  ))}
                </select>
                {errors.duration && (
                  <p className="text-rose-500 text-xs font-semibold">{errors.duration.message}</p>
                )}
              </div>

              {/* Area of Interest Field */}
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
                className="w-full mt-2 bg-[#0b5ed7] hover:bg-[#084298] text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-200 shadow-md shadow-blue-500/25 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
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
          </motion.div>

          {/* Right Column: Visual Art & Floating Action Controls (Matching Image) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[480px]">
            
            {/* Concentric Circles & Illustrated Developer Visual (Styling matching reference image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full max-w-[480px] h-[480px] sm:h-[520px] flex items-center justify-center"
            >
              {/* Outer Layer Ring 1 */}
              <div className="absolute w-[440px] h-[440px] rounded-full border-[18px] border-slate-300/40 bg-slate-200/20" />
              
              {/* Middle Layer Ring 2 */}
              <div className="absolute w-[360px] h-[360px] rounded-full border-[20px] border-slate-400/40 bg-slate-700/30" />
              
              {/* Core Dark Layer Ring 3 */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 shadow-2xl flex items-center justify-center" />

              {/* Student / Developer Visual with Laptop Illustration */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                
                {/* Visual Avatar / Graphic */}
                <div className="relative mb-4">
                  <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-rose-600 via-rose-700 to-slate-900 flex flex-col items-center justify-center relative">
                    
                    {/* Stylized Silhouette with Laptop */}
                    <div className="relative z-10 flex flex-col items-center">
                      <GraduationCap className="text-white drop-shadow-md mb-1" size={44} />
                      <div className="bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-rose-300/30">
                        Professional IT Training
                      </div>
                    </div>

                    {/* Glowing highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Floating badge 1: Live Project */}
                  <div className="absolute -bottom-2 -left-4 bg-white text-slate-900 border border-slate-200 px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 text-xs font-bold">
                    <Laptop size={14} className="text-[#0b5ed7]" />
                    <span>Live Production Work</span>
                  </div>

                  {/* Floating badge 2: Certificate */}
                  <div className="absolute -top-2 -right-4 bg-[#0b5ed7] text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 text-xs font-bold">
                    <Award size={14} className="text-amber-300" />
                    <span>Industry Certified</span>
                  </div>
                </div>

                {/* Information cards */}
                <div className="space-y-2 max-w-sm mt-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Accelerate Your Tech Career
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Gain hands-on coding experience on commercial web & mobile frameworks with 1-on-1 expert developer guidance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-[#0b5ed7] font-semibold text-sm">Loading Apply Form...</div>
        </div>
      }
    >
      <ApplyFormContent />
    </Suspense>
  );
}
