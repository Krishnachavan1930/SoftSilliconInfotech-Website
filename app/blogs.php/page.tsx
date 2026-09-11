"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  Sparkles,
  Tag,
  Share2,
  X,
  Code2,
  Laptop,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  category: "web" | "ai" | "cloud" | "career" | "seo";
  categoryLabel: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  content: string[];
  tags: string[];
}

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "modern-full-stack-trends-2026",
      title: "The Evolution of Full-Stack Architecture in 2026: Next.js, Server Actions & Micro-Frontends",
      category: "web",
      categoryLabel: "Web Development",
      readTime: "6 min read",
      date: "August 28, 2026",
      author: "SiliconSoft Tech Lead",
      image: "/assets/img/blog-image/1.jpg",
      summary:
        "Explore how modern full-stack web applications leverage Next.js App Router, streaming SSR, edge computing, and component state management for blazing fast user experiences.",
      tags: ["Next.js", "React 19", "Full Stack", "TypeScript", "Performance"],
      content: [
        "In the rapidly transforming realm of software engineering, full stack web development has moved past conventional monolithic architectures into composable, server-rendered applications.",
        "With Next.js App Router and React Server Components (RSC), developers can execute database queries directly on the server without shipping bulky JavaScript bundles to client browsers. This drastically decreases Time-To-Interactive (TTI) and First Contentful Paint (FCP).",
        "Key Architectural Takeaways:",
        "1. Server Actions simplify mutations, replacing repetitive API endpoints with type-safe server invocations.",
        "2. Optimistic UI updates with React Hooks give users instantaneous visual feedback while background validations execute.",
        "3. Composable micro-services enable engineering teams to decouple database pipelines and streamline deployment cadences.",
        "At SiliconSoft Infotech, our engineers utilize these exact modern frameworks to deliver mission-critical web applications for healthcare, real estate, and e-commerce enterprises.",
      ],
    },
    {
      id: "ai-machine-learning-enterprise-adoption",
      title: "Demystifying AI & LLM Integration: Practical Steps for Enterprise Web Applications",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      readTime: "7 min read",
      date: "August 20, 2026",
      author: "AI Research Team",
      image: "/assets/img/blog-image/2.jpg",
      summary:
        "How enterprises are moving from basic chat prototypes to secure, vectorized data pipelines, semantic search engines, and intelligent customer automation.",
      tags: ["AI/ML", "Python", "LLMs", "Vector DB", "Enterprise AI"],
      content: [
        "Artificial Intelligence has graduated from academic experiments to become the core engine of modern digital transformation.",
        "Organizations that implement AI-driven recommendation algorithms and automated document parsers experience up to 40% reduction in manual overhead.",
        "Key Integration Components:",
        "• Retrieval-Augmented Generation (RAG): Connecting foundational LLMs with private corporate vector databases to avoid hallucinations.",
        "• Semantic Search: Enabling natural language discovery across millions of product catalogs and medical records.",
        "• Edge Inference: Running quantized models on client devices for zero-latency user privacy and data security.",
        "Through our SPARK AI curriculum, students and interns gain hands-on training building production RAG systems, predictive neural networks, and Python-powered backend services.",
      ],
    },
    {
      id: "how-to-crack-it-internship-2026",
      title: "How to Land a High-Paying Software Internship & Developer Role in 2026",
      category: "career",
      categoryLabel: "Career & Growth",
      readTime: "5 min read",
      date: "August 15, 2026",
      author: "Career Placement Cell",
      image: "/assets/img/blog-image/3.jpg",
      summary:
        "A practical roadmap for engineering, MCA, and BCA students to build strong GitHub portfolios, master live project debugging, and ace tech interviews.",
      tags: ["Internship", "Career Guide", "Resume Tips", "Coding Interviews", "SPARK"],
      content: [
        "In today's competitive tech job market, theoretical degrees alone are no longer enough. Software companies look for candidates with demonstrated real-world building capabilities.",
        "Top Pillars of a Winning Portfolio:",
        "1. Live Deployed Projects: A GitHub repository with active URL deployments demonstrates that you understand the entire release cycle.",
        "2. Clean Code & Version Control: Writing descriptive commit messages, using pull requests, and following linting rules separates amateurs from professionals.",
        "3. Problem Solving Aptitude: Explaining how you resolved bottlenecks, memory leaks, and database latency during technical interviews.",
        "SiliconSoft's SPARK program is built specifically to bridge this gap by placing students directly in agile development teams where they work on live commercial software.",
      ],
    },
    {
      id: "cloud-devops-security-best-practices",
      title: "Cloud Infrastructure & CI/CD Pipelines: Ensuring 99.99% Uptime for Web Platforms",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      readTime: "6 min read",
      date: "August 10, 2026",
      author: "DevOps Architecture Desk",
      image: "/assets/img/blog-image/1.jpg",
      summary:
        "Best practices for automating code testing, Docker container deployments, automated SSL configurations, and database snapshot backups.",
      tags: ["Cloud", "DevOps", "AWS", "Docker", "Security"],
      content: [
        "Modern business websites and mobile backends require resilient, self-healing server infrastructure that can scale dynamically during peak traffic loads.",
        "Automated continuous integration and delivery (CI/CD) guarantees that every code push is automatically tested, containerized, and deployed with zero downtime.",
        "Essential Infrastructure Guidelines:",
        "• Containerization with Docker to ensure consistency between development, staging, and production environments.",
        "• Automated health check alarms and server load balancers to distribute spikes evenly.",
        "• Strict firewall rules, IP whitelisting, and encryption-at-rest for sensitive relational databases.",
      ],
    },
    {
      id: "seo-digital-marketing-growth-strategies",
      title: "Top Digital Marketing & Local SEO Strategies to Dominate Search Rankings in 2026",
      category: "seo",
      categoryLabel: "Digital Marketing & SEO",
      readTime: "5 min read",
      date: "August 04, 2026",
      author: "Digital Growth Specialist",
      image: "/assets/img/blog-image/2.jpg",
      summary:
        "How businesses can capitalize on Google Business Profile optimization, Core Web Vitals, high-converting social media funnels, and programmatic SEO.",
      tags: ["SEO", "Digital Marketing", "Google Listing", "Social Media", "Growth"],
      content: [
        "Generating organic leads requires an integrated approach that connects technical SEO, localized search optimization, and engaging social media content.",
        "With Google's emphasis on user experience and site speed (Core Web Vitals), having a lightning-fast responsive website is the primary foundation for high search rankings.",
        "Actionable Growth Tactics:",
        "1. Optimize Google Business Profile with verified categories, regular posts, and active customer reviews.",
        "2. Implement structured JSON-LD schema markup so search engines can index services, pricing, and FAQ items accurately.",
        "3. Combine search marketing with targeted social media ad funnels to capture prospective clients across every touchpoint.",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI & Data Science" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "career", label: "Career & Internships" },
    { id: "seo", label: "Digital Marketing" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white pt-32 pb-20 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0b5ed7]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0b5ed7]/20 border border-[#0b5ed7]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
            <Sparkles size={14} className="text-blue-400" />
            <span>SiliconSoft Tech Blog & Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight max-w-4xl mx-auto leading-tight">
            Engineering Articles, Tech Trends & <span className="text-[#0b5ed7]">Career Advice</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stay updated with modern web development frameworks, artificial intelligence pipelines, cloud architectures, and tips to accelerate your tech career.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, framework, or keyword..."
                className="w-full bg-slate-900 border border-slate-700/80 pl-11 pr-4 py-3 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Container */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#0b5ed7] text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Featured Hero Article (First Match) */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm mb-12 hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-3 text-xs">
                  <span className="bg-blue-50 text-[#0b5ed7] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {filteredPosts[0].categoryLabel}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Clock size={13} />
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Calendar size={13} />
                    <span>{filteredPosts[0].date}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight hover:text-[#0b5ed7] transition-colors cursor-pointer" onClick={() => setActivePost(filteredPosts[0])}>
                  {filteredPosts[0].title}
                </h2>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {filteredPosts[0].summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {filteredPosts[0].tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={() => setActivePost(filteredPosts[0])}
                    className="btn bg-[#0b5ed7] hover:bg-[#084298] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg flex items-center space-x-2 cursor-pointer shadow-sm shadow-blue-500/20"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </button>

                  <Link
                    href="/apply.php"
                    className="text-xs sm:text-sm font-semibold text-[#0b5ed7] hover:underline"
                  >
                    Apply for SPARK Program →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b5ed7]/40 via-purple-900/30 to-slate-950/80 z-10" />
                <div className="relative z-20 p-6 text-center space-y-2 text-white">
                  <BookOpen size={48} className="mx-auto text-blue-300 mb-2 animate-pulse-subtle" />
                  <div className="text-lg font-bold font-heading">SiliconSoft Technical Desk</div>
                  <p className="text-xs text-blue-200">Continuous Knowledge Sharing for Engineers & Students</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of Remaining Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-blue-50 text-[#0b5ed7] font-bold px-2 py-0.5 rounded-md text-[11px] uppercase tracking-wider">
                      {post.categoryLabel}
                    </span>
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => setActivePost(post)}
                    className="text-lg font-bold text-slate-900 font-heading leading-snug group-hover:text-[#0b5ed7] transition-colors cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[11px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-slate-100 mt-4 text-xs">
                  <span className="text-slate-400">{post.date}</span>
                  <button
                    onClick={() => setActivePost(post)}
                    className="font-bold text-[#0b5ed7] hover:text-[#084298] flex items-center space-x-1 group/btn cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <BookOpen size={40} className="mx-auto text-slate-300 mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search or category filter.</p>
            </div>
          )}

          {/* Bottom Career & SPARK Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-slate-950 via-[#0b5ed7] to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">
                Student & Professional Acceleration
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Ready to Build Live Software Projects?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Join our SPARK training bootcamps and internship batches. Learn direct from senior architects and secure your corporate placement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/apply.php"
                className="btn bg-white text-[#0b5ed7] hover:bg-slate-100 font-bold px-6 py-3 rounded-xl shadow-md text-sm"
              >
                Apply for SPARK / Courses
              </Link>
              <Link
                href="/internship.php"
                className="btn border border-white/40 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl text-sm"
              >
                Internship Details
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Article Detail Modal / Reader Drawer */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
            >
              {/* Modal Header Bar */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between relative">
                <div className="space-y-2 pr-6">
                  <div className="flex items-center space-x-3 text-xs text-blue-300">
                    <span className="bg-[#0b5ed7] text-white font-bold px-2.5 py-0.5 rounded text-[11px] uppercase">
                      {activePost.categoryLabel}
                    </span>
                    <span>{activePost.readTime}</span>
                    <span>•</span>
                    <span>{activePost.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white leading-tight">
                    {activePost.title}
                  </h2>
                </div>

                <button
                  onClick={() => setActivePost(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="bg-blue-50 border-l-4 border-[#0b5ed7] p-4 rounded-r-xl text-slate-700 text-sm">
                  <strong className="text-[#0b5ed7] block mb-1">Executive Summary:</strong>
                  {activePost.summary}
                </div>

                <div className="space-y-4 text-slate-600">
                  {activePost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {activePost.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Callout in Reader */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-white">Interested in mastering these technologies?</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Explore our SPARK professional training program.</p>
                  </div>
                  <Link
                    href="/apply.php"
                    className="btn bg-[#0b5ed7] hover:bg-[#084298] text-white text-xs font-bold px-4 py-2.5 rounded-lg whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
