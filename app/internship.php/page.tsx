"use client";

import React, { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  GraduationCap, 
  Briefcase, 
  UserCheck, 
  Award, 
  Settings, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Compass, 
  ArrowRight, 
  Users, 
  Clock, 
  FileCheck, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  HeartHandshake 
} from "lucide-react";

// Form validation schema using Zod
const internshipFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  collegeName: z.string().min(3, "College name must be at least 3 characters"),
  university: z.string().min(3, "University must be at least 3 characters"),
  course: z.string().min(2, "Please specify your course (e.g. B.Tech, MCA)"),
  year: z.string().min(1, "Please select your current year"),
  domain: z.string().min(2, "Please select an internship domain"),
  resumeLink: z.string().url("Please provide a valid resume URL link (e.g., GDrive)"),
  message: z.string().optional(),
});

type InternshipFormValues = z.infer<typeof internshipFormSchema>;

export default function InternshipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InternshipFormValues>({
    resolver: zodResolver(internshipFormSchema),
  });

  const onSubmit = async (data: InternshipFormValues) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "internship", data }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your application.");
      }

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyIntern = [
    {
      title: "Real-World Projects",
      desc: "Work on live projects and gain practical industry exposure.",
      icon: <Briefcase size={24} className="text-primary" />,
    },
    {
      title: "Mentorship & Guidance",
      desc: "Learn directly from experienced professionals and industry experts.",
      icon: <UserCheck size={24} className="text-secondary" />,
    },
    {
      title: "Skill Development",
      desc: "Enhance technical and professional skills through structured learning.",
      icon: <Settings size={24} className="text-accent" />,
    },
    {
      title: "Certificate of Completion",
      desc: "Receive an internship completion certificate after successful completion.",
      icon: <Award size={24} className="text-emerald-500" />,
    },
  ];

  const domains = [
    {
      title: "AI, ML & Data Science",
      desc: "Dive into analytics models, data regressions, neural networks, and Python-based predictive algorithms.",
      icon: <Database size={32} className="text-primary" />,
    },
    {
      title: "Cyber Security",
      desc: "Learn server vulnerability scans, network firewalls, system defense audits, and data protection setups.",
      icon: <ShieldCheck size={32} className="text-secondary" />,
    },
    {
      title: "IoT & Embedded Systems",
      desc: "Program microcontrollers, configure sensors, compile firmwares, and orchestrate hardware-to-cloud communications.",
      icon: <Cpu size={32} className="text-accent" />,
    },
  ];

  const eligibility = [
    "B.Tech / B.E (All streams)",
    "BCA (Bachelor of Computer Applications)",
    "MCA (Master of Computer Applications)",
    "B.Sc / M.Sc (Computer Science & Information Technology)",
    "Other related engineering and technical streams",
  ];

  const timelineSteps = [
    { step: "1", title: "Apply Online", desc: "Submit your basic details and resume link via our online form.", icon: <FileCheck size={20} /> },
    { step: "2", title: "Resume Screening", desc: "Our recruitment team audits applicant portfolios and academic credits.", icon: <Compass size={20} /> },
    { step: "3", title: "Technical Discussion", desc: "Quick call or dashboard task to map your coding or analytical aptitude.", icon: <Cpu size={20} /> },
    { step: "4", title: "Selection", desc: "Offer letter is shared with selected candidates detailing schedules.", icon: <Award size={20} /> },
    { step: "5", title: "Internship Begins", desc: "Onboard into active developer circles and kickstart live training.", icon: <RocketIcon size={20} /> },
  ];

  const benefits = [
    { title: "Industry Exposure", desc: "Experience commercial software development standards firsthand." },
    { title: "Live Projects", desc: "Write actual code that runs on live production systems." },
    { title: "Flexible Learning", desc: "Coordinate training tasks around your college timetables." },
    { title: "Experienced Mentors", desc: "Direct debugging support from senior framework developers." },
    { title: "Team Collaboration", desc: "Participate in agile review standups and group tasks." },
    { title: "Practical Assignments", desc: "Resolve actual issues, compile queries, and inspect code safety." },
    { title: "Career Guidance", desc: "Mock resume feedback, interviews coaching, and career maps." },
    { title: "Completion Certificate", desc: "Official verification credit detailing your milestones." },
  ];

  // Helper Rocket icon since we import Rocket Icon locally
  function RocketIcon(props: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
        <path d="M12 12c2-2 5-2 5-2s0 3-2 5-5 2-5 2z" />
        <path d="M9 15l3-3" />
        <path d="M14.5 9.5L17 7" />
        <path d="M19 5.5l.5-.5" />
        <path d="M12 5l-2.5 2.5-3.5-1L5 8l3 3-1.5 5.5 3-1.5 3.5 1.5 2.5-2.5z" />
      </svg>
    );
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white pt-32 pb-24 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                Internship Opportunities
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mt-2 leading-none">
                Learn. Build. Grow.
              </h1>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Kickstart your career with practical exposure, real-world projects, and mentorship from industry experts. Onboard as a coding specialist with SiliconSoft.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToForm}
                className="btn bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="/contactus.php"
                className="btn border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl">
              <GraduationCap size={120} className="text-primary opacity-80 animate-pulse-subtle" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Why Intern With Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Overview</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Why Intern With Us?
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              We structure our training paths to bridge the gap between classroom guidelines and real production releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyIntern.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-white w-fit rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Domains */}
      <section className="py-24 bg-slate-50/50 relative border-t border-slate-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Target Streams</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Available Internship Domains
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Choose your domain and develop expertise in complex enterprise technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {domains.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="p-4 bg-slate-50 w-fit rounded-2xl">
                    {d.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {d.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center text-sm font-semibold text-primary mt-8 hover:text-primary-dark cursor-pointer group"
                >
                  <span>Select Domain</span>
                  <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Eligibility</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Who Can Apply?
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We look for passionate candidates with a basic foundation in software architecture. If you are pursuing the following educational streams, you are eligible:
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-3xl space-y-4">
            {eligibility.map((el, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-700">{el}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Milestones</span>
            <h2 className="text-3xl font-extrabold font-heading tracking-tight mt-2">
              Application Process
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Five simple steps to onboard as an engineering intern.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 text-primary flex items-center justify-center font-bold text-xl relative group hover:border-primary transition-colors">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-base font-heading">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[180px] mx-auto">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Benefits */}
      <section className="py-24 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Rewards</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Internship Benefits
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Gain these key professional assets upon finishing your training sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-2 hover:border-slate-200 transition-colors"
              >
                <h4 className="font-bold text-slate-900 font-heading text-sm">{b.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Internship Application Form
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Submit your credentials and domain preferences to apply.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-start space-x-3 mb-8">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Application Submitted!</h4>
                  <p className="text-xs text-emerald-600 mt-1">
                    Thank you for applying for the SiliconSoft internship. Our recruiting desk will review your details and send you an email.
                  </p>
                </div>
              </div>
            ) : null}

            {submitError ? (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-2xl text-sm mb-8" role="alert">
                {submitError}
              </div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Krishna Chavan"
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-rose-500 text-xs font-semibold">{errors.fullName.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="jane@example.com"
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-rose-500 text-xs font-semibold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+919284769125"
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-rose-500 text-xs font-semibold">{errors.phone.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">College Name</label>
                  <input
                    type="text"
                    {...register("collegeName")}
                    placeholder="e.g. K.K. Wagh Institute"
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.collegeName && <p className="text-rose-500 text-xs font-semibold">{errors.collegeName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">University Name</label>
                  <input
                    type="text"
                    {...register("university")}
                    placeholder="e.g. SPPU University"
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.university && <p className="text-rose-500 text-xs font-semibold">{errors.university.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Course / Stream</label>
                  <input
                    type="text"
                    {...register("course")}
                    placeholder="e.g. B.Tech CS / MCA"
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.course && <p className="text-rose-500 text-xs font-semibold">{errors.course.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Year</label>
                  <select
                    {...register("year")}
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="">Select Year...</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                  {errors.year && <p className="text-rose-500 text-xs font-semibold">{errors.year.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Domain Interested In</label>
                  <select
                    {...register("domain")}
                    className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="">Select Domain...</option>
                    <option value="ai-ml">AI, ML & Data Science</option>
                    <option value="cyber-sec">Cyber Security</option>
                    <option value="iot">IoT & Embedded Systems</option>
                  </select>
                  {errors.domain && <p className="text-rose-500 text-xs font-semibold">{errors.domain.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Resume Link (GDrive / Dropbox)</label>
                <input
                  type="text"
                  {...register("resumeLink")}
                  placeholder="https://drive.google.com/file/d/..."
                  className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors"
                />
                {errors.resumeLink && <p className="text-rose-500 text-xs font-semibold">{errors.resumeLink.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cover Note / Message</label>
                <textarea
                  rows={4}
                  {...register("message")}
                  placeholder="Why do you want to intern with us?"
                  className="w-full bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn bg-primary text-white hover:bg-primary-dark w-full py-3 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Details...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
