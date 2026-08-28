"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "#",
      dropdown: [
        { name: "About Softsilicon Infotech", href: "/about_np_it.php" },
        { name: "Our Team", href: "/our_team.php" },
      ],
    },
    {
      name: "Services",
      href: "#",
      dropdown: [
        {
          name: "Website Services",
          items: [
            { name: "Website Design & Development", href: "/website_design_development.php" },
            { name: "Corporate Website Design", href: "/corporate_website_design.php" },
            { name: "Web Apps Development", href: "/web_apps_development.php" },
            { name: "Enterprise Application", href: "/enterprise_application.php" },
            { name: "E-Commerce Development", href: "/e_commerce_development.php" },
            { name: "Website Maintenance (AMC)", href: "/website_maintainance.php" },
          ],
        },
        {
          name: "Mobile & Marketing",
          items: [
            { name: "Mobile App Development", href: "/mobile_app_development.php" },
            { name: "Social Media Marketing", href: "/social_media_marketing.php" },
            { name: "Search Engine Optimization", href: "/search_engine_optimization.php" },
            { name: "Google Listing", href: "/google_listing.php" },
            { name: "Pay Per Click (PPC)", href: "/pay_per_click.php" },
            { name: "Social Media Post Design", href: "/social_media_post_design.php" },
            { name: "Email Marketing", href: "/email_marketing.php" },
          ],
        },
        {
          name: "Design & Hosting",
          items: [
            { name: "Logo Design", href: "/logo_design_in_nashik.php" },
            { name: "Product Design", href: "/product_design_in_nashik.php" },
            { name: "Register Domain", href: "/register_domain_in_nashik.php" },
            { name: "Linux Shared SSD Hosting", href: "/linux_Shared_hosting_in_nashik.php" },
            { name: "Linux Reseller Hosting", href: "/linux_hosting_in_nashik.php" },
            { name: "VPS & Dedicated Hosting", href: "/vps_dedicated_hosting_in_nashik.php" },
            { name: "Email Hosting", href: "/email_hosting_in_nashik.php" },
          ],
        },
        {
          name: "Bulk Marketing",
          items: [
            { name: "Bulk SMS", href: "/bulk_sms_marketing_in_nashik.php" },
            { name: "Bulk Whatsapp API", href: "/bulk_whatsapp_marketing_in_nashik.php" },
            { name: "Bulk Voice Call", href: "/bulk_voice_call_marketing_in_nashik.php" },
          ],
        },
      ],
    },
    {
      name: "Industry",
      href: "#",
      dropdown: [
        { name: "Healthcare", href: "/healthcare.php" },
        { name: "Realestate", href: "/realestate.php" },
        { name: "Educational", href: "/educational.php" },
        { name: "E-Commerce", href: "/e_commerce.php" },
        { name: "Agriculture", href: "/agriculture.php" },
        { name: "Travel and Tourism", href: "/travel_tourism.php" },
      ],
    },
    { name: "Portfolio", href: "/portfolio.php" },
    { name: "Internships", href: "/internship.php" },
    { name: "Contact Us", href: "/contactus.php" },
  ];

  return (
    <>
      {/* Top bar info */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 py-2 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+919665819110" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone size={13} className="text-primary" />
              <span>+91 9665819110</span>
            </a>
            <a href="mailto:info@SiliconSoftsolutions.in" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail size={13} className="text-primary" />
              <span>info@SiliconSoftsolutions.in</span>
            </a>
          </div>
          <div>
            <span>ISO 9001:2015 Certified Company</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-56">
                {/* Fallback image check and rendering */}
                <Image
                  src="/assets/SoftSillicon Logo.jpeg"
                  alt="SiliconSoft Infotech LLP Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        className={cn(
                          "flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer",
                          scrolled ? "text-slate-700" : "text-slate-800"
                        )}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Mega Menu / Standard Dropdown */}
                      {link.name === "Services" ? (
                        <div className="absolute top-full -left-48 mt-2 w-[720px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 grid grid-cols-4 gap-6">
                          {link.dropdown.map((subCat: any) => (
                            <div key={subCat.name} className="space-y-3">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                {subCat.name}
                              </h4>
                              <ul className="space-y-2">
                                {subCat.items.map((item: any) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="block text-sm text-slate-600 hover:text-primary hover:translate-x-1 transition-all duration-150"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-100 py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                          {link.dropdown.map((item: any) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium hover:text-primary transition-colors",
                        pathname === link.href ? "text-primary" : (scrolled ? "text-slate-700" : "text-slate-800")
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Link
                href="/internship.php"
                className="hidden md:inline-flex btn-primary !px-5 !py-2 text-sm"
              >
                Internship
              </Link>
              
              <button
                className="lg:hidden text-slate-800 hover:text-primary transition-colors focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                type="button"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-40 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-white border-t border-slate-100 px-4 py-6 shadow-xl">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-100 pb-3 last:border-0">
                  {link.dropdown ? (
                    <div>
                      <button
                        className="flex justify-between items-center w-full text-base font-semibold text-slate-800 py-1"
                        onClick={() =>
                          setActiveDropdown(activeDropdown === link.name ? null : link.name)
                        }
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={cn(
                            "transition-transform",
                            activeDropdown === link.name ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {activeDropdown === link.name && (
                        <div className="mt-3 pl-4 space-y-2">
                          {link.name === "Services" ? (
                            link.dropdown.map((subCat: any) => (
                              <div key={subCat.name} className="space-y-2">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
                                  {subCat.name}
                                </div>
                                <div className="space-y-2 pl-2">
                                  {subCat.items.map((item: any) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block text-sm text-slate-600 hover:text-primary py-1"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            link.dropdown.map((item: any) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-sm text-slate-600 hover:text-primary py-1"
                              >
                                {item.name}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-base font-semibold text-slate-800 py-1"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="/internship.php"
                  className="btn-primary w-full text-center py-2.5"
                >
                  Internship
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <a href="tel:+919665819110" className="flex items-center space-x-2">
                    <Phone size={14} className="text-primary" />
                    <span>+91 8411907864</span>
                  </a>
                  <a href="mailto:info@SiliconSoftsolutions.in" className="flex items-center space-x-2">
                    <Mail size={14} className="text-primary" />
                    <span>info@softsiliconinfotech.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
