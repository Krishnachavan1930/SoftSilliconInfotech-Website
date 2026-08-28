"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Ms Bhaki Mapari",
      role: "Business Owner",
      content:
    "Working with Soft Silicon Infotech LLP to develop our website, primehomedecor.in, was a great experience. The team understood our business requirements very well and transformed our ideas into a modern, professional, and user-friendly website.
We especially appreciated their professionalism, creativity, timely communication, and attention to detail throughout the project. The website represents our brand beautifully and gives our customers a smooth online experience.
I highly recommend Soft Silicon Infotech LLP to anyone looking for a reliable and professional web development partner. Thank you to the entire team for their excellent work and support!”
",
    },
    {
      name: "Mr. Kalathanathan Sir",
      role: "Principal, Educational Academy",
      content:
        "SiliconSoft Infotech LLP has provided us with an exceptional school admission system automation portal. The interface is user-friendly and the system is easy to navigate. The automated process has greatly reduced the workload of our admission department and has made the process more efficient and streamlined. The team at SiliconSoft Infotech LLP was always available to answer any questions.",
    },
    {
      name: "Mr. Nanasaheb Patil",
      role: "Fitness Center Director",
      content:
        "I am beyond impressed with the fitness application that SiliconSoft Infotech LLP has developed for me. The team was professional, responsive, and truly listened to my needs and goals for the app. The end result exceeded my expectations and has helped me reach my fitness goals. The user interface is sleek and easy to navigate.",
    },
    {
      name: "S. BALBIR SINGH CHHABRA",
      role: "Engineering College Administrator",
      content:
        "I am extremely impressed with the work done by SiliconSoft Infotech LLP on our Engineering College website and applications. The team was incredibly professional and efficient throughout the entire process. They listened to our needs and were able to create a website and applications that exceeded our expectations.",
    },
    {
      name: "Mr. Sanjeev Heda",
      role: "Director of Digital Growth",
      content:
        "The results of their efforts have been fantastic - we've seen a significant increase in website traffic, engagement, and conversions. Our online presence has never been stronger, and we've received many compliments from our customers on the quality of our website and online content. Highly recommend SiliconSoft Infotech LLP.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
            What Our Clients Say About Us
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Read positive feedback from business owners, educational directors, and industrial partners globally.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="absolute top-8 left-8 text-primary/10">
            <Quote size={80} />
          </div>

          <div className="min-h-[220px] flex flex-col justify-between relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg text-slate-700 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div>
                  <h4 className="text-base font-bold text-slate-900 font-heading">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm font-semibold text-slate-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-end space-x-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
