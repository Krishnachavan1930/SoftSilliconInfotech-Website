"use client";

import React, { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "contact", data }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email Address",
      icon: <Mail size={24} className="text-primary" />,
      lines: ["info@SiliconSoftsolutions.in", "SiliconSoftsolutionsnashik@gmail.com"],
      href: "mailto:info@SiliconSoftsolutions.in",
    },
    {
      title: "Call Us",
      icon: <Phone size={24} className="text-secondary" />,
      lines: ["+91 9665819110", "+91 9665818381"],
      href: "tel:+919665819110",
    },
    {
      title: "Main Office",
      icon: <MapPin size={24} className="text-accent" />,
      lines: [
        "Office No 106, 2nd Floor, Abhonkar Lane,",
        "Raviwar Karanja, Panchavati, Nashik 422003",
      ],
      href: "#",
    },
  ];

  return (
    <div className="space-y-0">
      <PageBanner title="Contact Us" subtitle="Get In Touch With Us" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="bg-slate-50 border border-slate-100 hover:border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-sm transition-all"
              >
                <div className="p-4 bg-white rounded-full shadow-sm mb-6">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                  {info.title}
                </h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-sm text-slate-500">{line}</p>
                ))}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Form */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-8">
                Send Us a Message
              </h2>

              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-start space-x-3 mb-6">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Message Sent Successfully!</h4>
                    <p className="text-sm text-emerald-600 mt-1">
                      Thank you for contacting SiliconSoft Infotech LLP. Our consultants will get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : null}

              {submitError ? (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-2xl text-sm mb-6" role="alert">
                  {submitError}
                </div>
              ) : null}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Krishna Chavan"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:border-primary transition-colors focus:outline-none"
                    />
                    {errors.name && <p className="text-xs text-rose-500 font-medium">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:border-primary transition-colors focus:outline-none"
                    />
                    {errors.email && <p className="text-xs text-rose-500 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="+919284769125"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:border-primary transition-colors focus:outline-none"
                    />
                    {errors.phone && <p className="text-xs text-rose-500 font-medium">{errors.phone.message}</p>}
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="Web Development Quote"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:border-primary transition-colors focus:outline-none"
                    />
                    {errors.subject && <p className="text-xs text-rose-500 font-medium">{errors.subject.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="Hello, I would like to build a dynamic platform..."
                    className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:border-primary transition-colors focus:outline-none resize-none"
                  />
                  {errors.message && <p className="text-xs text-rose-500 font-medium">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-primary text-white hover:bg-primary-dark w-full flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map Placeholder or Visual info */}
            <div className="space-y-8">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Quick Details
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our core support team is active 24/7 to resolve hosting outages or code updates. For customized quotes and mock proposals, drop us an email or submit the contact form, and we will follow up in 24 hours.
                </p>
                <div className="border-t border-slate-200 pt-6 space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-500">Business Hours:</span>
                    <span className="text-slate-800">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-500">Support Hours:</span>
                    <span className="text-slate-800 font-semibold text-primary">24 / 7 Available</span>
                  </div>
                </div>
              </div>

              {/* Map box */}
              <div className="relative w-full h-[320px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m8!1m3!1d3749.030588636733!2d73.785055!3d20.007174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeedf0ffaaaaa%3A0xe6bf44b7d598285!2sNP%20IT%20SOLUTIONS%20-%20Best%20Software%20Development%20%26%20IT%20Services%20Nashik!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
