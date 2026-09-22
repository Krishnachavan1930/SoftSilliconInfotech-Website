"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export default function Testimonials() {
  const testimonial: Testimonial = {
    name: "Ms Bhaki Mapari",
    role: "Business Owner",
    content: `Working with Soft Silicon Infotech LLP to develop our website, primehomedecor.in, was a great experience. The team understood our business requirements very well and transformed our ideas into a modern, professional, and user-friendly website.

We especially appreciated their professionalism, creativity, timely communication, and attention to detail throughout the project. The website represents our brand beautifully and gives our customers a smooth online experience.

I highly recommend Soft Silicon Infotech LLP to anyone looking for a reliable and professional web development partner. Thank you to the entire team for their excellent work and support!`,
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
            What Our Client Says About Us
          </h2>

          <p className="text-slate-500 mt-4 leading-relaxed">
            Read feedback from our valued client.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-primary/10">
            <Quote size={80} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 relative z-10"
          >
            
            {/* Stars */}
            <div className="flex items-center space-x-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-lg text-slate-700 italic leading-relaxed whitespace-pre-line">
              &quot;{testimonial.content}&quot;
            </p>

            {/* Client Details */}
            <div>
              <h4 className="text-base font-bold text-slate-900 font-heading">
                {testimonial.name}
              </h4>

              <p className="text-sm font-semibold text-slate-500">
                {testimonial.role}
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}