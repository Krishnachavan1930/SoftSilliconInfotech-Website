import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import { Compass, Target, Shield, HeartHandshake, Zap, Target as TargetIcon, Flame, Cpu, Headset } from "lucide-react";

export default function AboutPage() {
  const values = [
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
      icon: <TargetIcon className="w-6 h-6 text-accent" />,
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
      <PageBanner title="About Softsilicon Infotech LLP" subtitle="Who We Are?" />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Driving Success Through Collaboration and Innovation
              </h2>
              <p className="text-slate-600 leading-relaxed">
               Softsilicon Infotech LLP is a group of IT experts accompanied by a promise of conveying technology-enabled business solutions. We give world-class software and Web Development services that focus on assuming a supportive role to your business.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With a strong presence and trusted client partnerships worldwide, we excel in engineering custom software applications, premium website architectures, native mobile products, and result-oriented digital marketing configurations.
              </p>
            </div>

            {/* Vision / Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Our Vision</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  To formulate solutions that solve core industrial issues, helping your company grow and succeed in the long-term using futuristic tools.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="p-3 bg-secondary/10 text-secondary w-fit rounded-xl">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Our Mission</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  To build digitally adaptable systems with superior quality, delivering custom frameworks and 24*7 support to active business systems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Values Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Values</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Why Choose SoftSilicon Infotech LLP?
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              We stand out in the IT market because we always focus on our client's end-users, pain points, and commercial targets.
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
                <p className="text-sm text-slate-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
