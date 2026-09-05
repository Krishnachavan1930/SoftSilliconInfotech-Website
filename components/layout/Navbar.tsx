"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// SPARK currently opens the project's SPARK page in a new tab.
type ServiceItem = { name: string; href: string };
type NavItem = {
  name: string;
  href: string;
  dropdown?: ServiceItem[];
};

const SPARK_PORTAL_URL = "/spark.php";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isSparkPage = pathname === "/spark.php" || pathname === "/spark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const serviceItems = [
    { name: "Mobile App Development", href: "/mobile_app_development.php" },
    { name: "Cybersecurity Solutions", href: "/privacy_policy_domain_hosting_data_security.php" },
    { name: "Enterprise Applications", href: "/enterprise_application.php" },
    { name: "Digital Marketing & SEO", href: "/social_media_marketing.php" },
    { name: "Corporate Website Design", href: "/corporate_website_design.php" },
    { name: "Web Application Development", href: "/web_apps_development.php" },
    { name: "E-Commerce Development", href: "/e_commerce_development.php" },
    { name: "Cloud & DevOps", href: "/vps_dedicated_hosting_in_nashik.php" },
    { name: "Website Maintenance", href: "/website_maintainance.php" },
  ];

  const mainNavLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about_np_it.php" },
    { name: "Services", href: "#", dropdown: serviceItems },
    { name: "Blogs", href: "/blogs.php" },
    { name: "Contact Us", href: "/contactus.php" },
  ];

  const sparkNavLinks: NavItem[] = [
    { name: "Our Courses", href: "/spark.php?section=courses" },
    { name: "Contact Us", href: "/spark.php?section=contact" },
    { name: "Blog", href: "/spark.php?section=blog" },
  ];

  const navLinks = isSparkPage ? sparkNavLinks : mainNavLinks;

  return (
    <>
      {/* Contact bar - visible on both the main website and SPARK */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-9 text-xs">
            <a
              href="tel:+919665819110"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-primary" />
              <span> +91 8411907864</span>
               
            </a>
            <a
              href="mailto:info@SiliconSoftsolutions.in"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-primary" />
              <span>info@SiliconSoftsolutions.in</span>
            </a>
          </div>
        </div>
      </div>

    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-2.5"
          : "bg-white py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[64px] items-center justify-between gap-6">
          {/* Single site logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Softsilicon Infotech home">
          <div className="relative h-14 w-52 sm:w-56 overflow-hidden bg-white">
  <Image
    src="/assets/SoftSillicon Logo.png"
    alt="Softsilicon Infotech LLP Logo"
    fill
    priority
    className="object-contain mix-blend-multiply"
  />
</div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {"dropdown" in link && link.dropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-200"
                      />
                    </button>

                    <div className="absolute top-full right-0 mt-3 w-[500px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 grid grid-cols-2 gap-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold hover:text-primary transition-colors",
                      pathname === link.href
                        ? "text-primary"
                        : "text-slate-700"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {isSparkPage ? (
              <a
                href="/spark.php?section=apply"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-md shadow-red-600/20 transition-all hover:scale-105"
              >
                Apply Now
              </a>
            ) : (
              <>
                <Link
                  href="/internship.php"
                  className="inline-flex items-center justify-center bg-[#0b5ed7] hover:bg-[#084298] text-white font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105"
                >
                  Internship
                </Link>
                <a
                  href={SPARK_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105"
                >
                  SPARK
                </a>
              </>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-slate-800 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-40 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white border-t border-slate-100 px-4 py-5 shadow-xl">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-100 pb-3">
                {"dropdown" in link && link.dropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex justify-between items-center w-full text-base font-semibold text-slate-800 py-1"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>

                    {activeDropdown === link.name && (
                      <div className="mt-2 pl-2 grid grid-cols-1 gap-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm font-medium text-slate-600 hover:text-primary py-1.5 px-2 rounded-lg hover:bg-slate-50"
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
                    className="block text-base font-semibold text-slate-800 py-1"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {isSparkPage ? (
              <a
                href="/spark.php?section=apply"
                className="block bg-red-600 hover:bg-red-700 text-white font-bold w-full text-center py-3 rounded-xl text-xs uppercase tracking-wider"
              >
                Apply Now
              </a>
            ) : (
              <div className="pt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/internship.php"
                  className="bg-[#0b5ed7] hover:bg-[#084298] text-white font-bold w-full text-center py-3 rounded-xl text-xs uppercase tracking-wider"
                >
                  Internship
                </Link>
                <a
                  href={SPARK_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold w-full text-center py-3 rounded-xl text-xs uppercase tracking-wider"
                >
                  SPARK
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
    </>
  );
}