"use client";

import React, { useEffect, useState, useRef } from "react";
import { Users, Layout, ShieldAlert, Award } from "lucide-react";

interface StatItemProps {
  label: string;
  target: number;
  suffix?: string;
  icon: React.ReactNode;
}

function StatItem({ label, target, suffix = "+", icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = target / (duration / 16); // ~60fps
    let timer: any;

    const run = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    };

    timer = setInterval(run, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div
      ref={elementRef}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
    >
      <div className="p-4 bg-primary/5 text-primary rounded-xl mb-6">
        {icon}
      </div>
      <div className="text-4xl font-extrabold text-slate-900 mb-2 font-heading tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-medium text-slate-500">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { label: "Active Client Base", target: 12, icon: <Users size={24} /> },
    { label: "Websites Developed", target: 15, icon: <Layout size={24} /> },
    { label: "Team Size", target: 16, icon: <Award size={24} /> },
    { label: "Educational Institutes Onboard", target: 4, icon: <ShieldAlert size={24} /> },
  ];

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Numbers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
            We Always Try to Understand Client Expectations
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Delivering quality IT services with proven milestones, standard deliverables, and direct client support across all project stages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              label={stat.label}
              target={stat.target}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
