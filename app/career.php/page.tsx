"use client";

import React, { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import { Briefcase, MapPin, Calendar, Clock, ChevronDown, ChevronUp, FileText, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const careerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string().min(2, "Please choose a position"),
  experience: z.string().min(1, "Please specify your experience"),
  resumeLink: z.string().url("Please input a valid URL (e.g. Drive / Dropbox Link)"),
});

type CareerFormValues = z.infer<typeof careerSchema>;

export default function CareerPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerSchema),
  });

  const jobs = [
    {
      id: 1,
      title: "Web Developer",
      type: "Full Time / Internship",
      experience: "0 - 3 Years",
      location: "Nashik (On-site)",
      description:
        "We are looking for a passionate Web Developer who understands HTML, CSS, JavaScript, PHP, and database handling (MySql). Experience in modern React/Next.js frameworks is a huge plus. You will work on writing clean codes, debugging, designing dashboards, and optimizing speed metrics.",
      requirements: [
        "Strong understanding of core web languages & database systems",
        "Problem-solving mindset and capacity to write clean modular code",
        "Eagerness to learn modern frameworks like React, Next.js, and Node",
      ],
    },
    {
      id: 2,
      title: "Graphic Designer",
      type: "Full Time / Part Time",
      experience: "1 - 3 Years",
      location: "Nashik (On-site)",
      description:
        "Seeking a creative graphic artist who can conceptualize corporate branding, design custom company logos, create social media posters, and align user interface vectors. Familiarity with Figma, Adobe Illustrator, and Photoshop is mandatory.",
      requirements: [
        "Expertise in Photoshop, Illustrator, and UI tools like Figma",
        "A strong portfolio showcasing visual identity and corporate post layouts",
        "Good understanding of typographic grids and color schemes",
      ],
    },
    {
      id: 3,
      title: "Social Media Marketing Executive",
      type: "Full Time",
      experience: "0 - 2 Years",
      location: "Nashik (On-site)",
      description:
        "We are hiring an SMM executive to handle organic branding campaigns, optimize SEO settings, monitor Google My Business listings, and run targeted Facebook & Instagram ads for our global client base.",
      requirements: [
        "Good copy-writing and verbal communication skills",
        "Familiarity with Meta Ads Manager and Google Ads layouts",
        "Basic understanding of SEO analytics and search ranking variables",
      ],
    },
    {
      id: 4,
      title: "Sales Executive",
      type: "Full Time",
      experience: "1 - 4 Years",
      location: "Nashik (On-site)",
      description:
        "Looking for a goal-driven Sales Executive to pitch IT software services, connect with local/global businesses, manage CRM sales leads, and coordinate contracts for website and app development.",
      requirements: [
        "Proven experience in B2B service sales or IT software consulting",
        "Outstanding negotiation and relational capabilities",
        "Comfortable conducting cold calls and live demonstrations",
      ],
    },
  ];

  const onSubmit = async (data: CareerFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="space-y-0">
      <PageBanner
        title="Careers at SiliconSoft"
        subtitle="WE ARE HAPPY TO WELCOME YOU ONBOARD TO OUR TEAM"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            
            {/* Job Openings Accordion */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                Active Openings
              </h2>

              <div className="space-y-4">
                {jobs.map((job, idx) => (
                  <div
                    key={job.id}
                    className="border border-slate-100 bg-slate-50/50 rounded-2xl overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                      onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    >
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-slate-900 font-heading">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
                          <span className="flex items-center"><Briefcase size={12} className="mr-1.5" /> {job.type}</span>
                          <span className="flex items-center"><Clock size={12} className="mr-1.5" /> {job.experience}</span>
                          <span className="flex items-center"><MapPin size={12} className="mr-1.5" /> {job.location}</span>
                        </div>
                      </div>
                      <div>
                        {openAccordion === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </button>

                    {openAccordion === idx && (
                      <div className="p-6 border-t border-slate-100 bg-white space-y-4 text-sm leading-relaxed text-slate-600">
                        <p>{job.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-bold text-slate-800">Job Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.requirements.map((req, rIdx) => (
                              <li key={rIdx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Application Form */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-6">
                Quick Apply
              </h2>

              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-start space-x-2 mb-6">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs">
                    Application submitted successfully! Our HR team will evaluate your profile.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Krishna Chavan"
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg focus:border-primary focus:outline-none"
                  />
                  {errors.fullName && <p className="text-rose-500 font-medium">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="jane@example.com"
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg focus:border-primary focus:outline-none"
                  />
                  {errors.email && <p className="text-rose-500 font-medium">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+919284769125"
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg focus:border-primary focus:outline-none"
                  />
                  {errors.phone && <p className="text-rose-500 font-medium">{errors.phone.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-500 uppercase tracking-wider">Target Position</label>
                  <select
                    {...register("position")}
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="">Select Opening...</option>
                    <option value="web-dev">Web Developer</option>
                    <option value="graphic-design">Graphic Designer</option>
                    <option value="smm-exec">SMM Executive</option>
                    <option value="sales-exec">Sales Executive</option>
                  </select>
                  {errors.position && <p className="text-rose-500 font-medium">{errors.position.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-500 uppercase tracking-wider">Experience</label>
                  <input
                    type="text"
                    {...register("experience")}
                    placeholder="e.g. 1 Year / Fresher"
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg focus:border-primary focus:outline-none"
                  />
                  {errors.experience && <p className="text-rose-500 font-medium">{errors.experience.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-500 uppercase tracking-wider">Resume Link (GDrive/Dropbox)</label>
                  <input
                    type="text"
                    {...register("resumeLink")}
                    placeholder="https://drive.google.com/..."
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg focus:border-primary focus:outline-none"
                  />
                  {errors.resumeLink && <p className="text-rose-500 font-medium">{errors.resumeLink.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-primary text-white hover:bg-primary-dark w-full py-2.5 text-xs flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Apply Now</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
