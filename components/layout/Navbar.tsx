
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ServiceItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  dropdown?: ServiceItem[];
};

// ============================================================
// SPARK URL
// ============================================================

const SPARK_PORTAL_URL = "/spark.php";

// ============================================================
// NAVBAR
// ============================================================

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navbarRef = useRef<HTMLElement | null>(null);

  // ==========================================================
  // CHECK SPARK PAGE
  // ==========================================================

  const isSparkPage =
    pathname === "/spark.php" ||
    pathname === "/spark";

  // ==========================================================
  // SERVICES
  // ==========================================================

  const serviceItems: ServiceItem[] = [
    {
      name: "Mobile App Development",
      href: "/mobile_app_development.php",
    },
    {
      name: "Cybersecurity Solutions",
      href: "/privacy_policy_domain_hosting_data_security.php",
    },
    {
      name: "Enterprise Applications",
      href: "/enterprise_application.php",
    },
    {
      name: "Digital Marketing & SEO",
      href: "/social_media_marketing.php",
    },
    {
      name: "Corporate Website Design",
      href: "/corporate_website_design.php",
    },
    {
      name: "Web Application Development",
      href: "/web_apps_development.php",
    },
    {
      name: "E-Commerce Development",
      href: "/e_commerce_development.php",
    },
    {
      name: "Cloud & DevOps",
      href: "/vps_dedicated_hosting_in_nashik.php",
    },
    {
      name: "Website Maintenance",
      href: "/website_maintainance.php",
    },
  ];

  // ==========================================================
  // MAIN NAVIGATION
  // ==========================================================

  const mainNavLinks: NavItem[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about_np_it.php",
    },
    {
      name: "Services",
      href: "/services",
      dropdown: serviceItems,
    },
    {
      name: "Blogs",
      href: "/blogs.php",
    },
    {
      name: "Contact Us",
      href: "/contactus.php",
    },
  ];

  // ==========================================================
  // SPARK NAVIGATION
  // ==========================================================

  const sparkNavLinks: NavItem[] = [
    {
      name: "Our Courses",
      href: "/spark.php?section=courses",
    },
    {
      name: "Contact Us",
      href: "/spark.php?section=contact",
    },
    {
      name: "Blog",
      href: "/spark.php?section=blog",
    },
  ];

  const navLinks = isSparkPage ? sparkNavLinks : mainNavLinks;

  // ==========================================================
  // SCROLL EFFECT
  // ==========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================================
  // CLOSE MENUS WHEN ROUTE CHANGES
  // ==========================================================

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // ==========================================================
  // ESC KEY
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ==========================================================
  // CLICK OUTSIDE
  // ==========================================================

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ==========================================================
  // TOGGLE MOBILE MENU
  // ==========================================================

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previous) => !previous);

    // Close dropdown when opening/closing menu
    setActiveDropdown(null);
  };

  // ==========================================================
  // TOGGLE MOBILE DROPDOWN
  // ==========================================================

  const toggleDropdown = (name: string) => {
    setActiveDropdown((previous) =>
      previous === name ? null : name
    );
  };

  // ==========================================================
  // CLOSE MOBILE MENU
  // ==========================================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <>
      {/* ======================================================
          TOP CONTACT BAR
      ====================================================== */}

      <div className="bg-slate-900 text-slate-300 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-9 text-xs">

            {/* PHONE */}

            <a
              href="tel:+918411907864"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone
                size={13}
                className="text-primary"
              />

              <span>+91 8411907864</span>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:info@SiliconSoftsolutions.in"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail
                size={13}
                className="text-primary"
              />

              <span>
                info@SiliconSoftsolutions.in
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* ======================================================
          MAIN HEADER
      ====================================================== */}

      <header
        ref={navbarRef}
        className={cn(
          "sticky top-0 z-[100] w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-2.5"
            : "bg-white py-3"
        )}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex min-h-[64px] items-center justify-between gap-6">

            {/* ==================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center shrink-0"
              aria-label="Softsilicon Infotech home"
            >
              <div className="relative h-14 w-52 sm:w-56 overflow-hidden bg-white">

                <Image
                  src="/assets/SoftSillicon Logo.png"
                  alt="Softsilicon Infotech LLP Logo"
                  fill
                  priority
                  sizes="224px"
                  className="object-contain mix-blend-multiply"
                />

              </div>
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Desktop navigation"
            >

              {navLinks.map((link) => {

                const hasDropdown =
                  Boolean(link.dropdown && link.dropdown.length > 0);

                return (
                  <div
                    key={link.name}
                    className="relative"
                  >

                    {/* ========================================
                        DROPDOWN ITEM
                    ======================================== */}

                    {hasDropdown ? (
                      <div
                        className="relative group"
                        onMouseEnter={() =>
                          setActiveDropdown(link.name)
                        }
                        onMouseLeave={() =>
                          setActiveDropdown(null)
                        }
                      >

                        {/* SERVICES BUTTON */}

                        <button
                          type="button"
                          onClick={() =>
                            toggleDropdown(link.name)
                          }
                          aria-haspopup="menu"
                          aria-expanded={
                            activeDropdown === link.name
                          }
                          className={cn(
                            "flex items-center gap-1",
                            "text-sm font-semibold",
                            "text-slate-700",
                            "hover:text-primary",
                            "transition-colors",
                            "cursor-pointer",
                            "focus:outline-none",
                            "focus:ring-2",
                            "focus:ring-primary/30",
                            "rounded-md",
                            "px-1 py-1"
                          )}
                        >

                          <span>{link.name}</span>

                          <ChevronDown
                            size={14}
                            className={cn(
                              "transition-transform duration-200",
                              activeDropdown === link.name &&
                                "rotate-180"
                            )}
                          />

                        </button>

                        {/* ====================================
                            DESKTOP SERVICES DROPDOWN
                        ==================================== */}

                        <div
                          className={cn(
                            "absolute top-full right-0",
                            "pt-3",
                            "w-[520px]",
                            "z-[200]",
                            activeDropdown === link.name
                              ? "visible opacity-100 translate-y-0 pointer-events-auto"
                              : "invisible opacity-0 translate-y-2 pointer-events-none"
                          )}
                        >

                          {/* IMPORTANT:
                              pt-3 keeps dropdown connected to
                              button while still having spacing.
                          */}

                          <div
                            className="
                              bg-white
                              rounded-2xl
                              shadow-2xl
                              border
                              border-slate-100
                              p-4
                              grid
                              grid-cols-2
                              gap-2
                            "
                            role="menu"
                          >

                            {link.dropdown?.map((item) => (

                              <Link
                                key={item.name}
                                href={item.href}
                                role="menuitem"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setMobileMenuOpen(false);
                                }}
                                className="
                                  px-3
                                  py-3
                                  rounded-xl
                                  text-xs
                                  font-semibold
                                  text-slate-700
                                  hover:bg-blue-50
                                  hover:text-primary
                                  transition-all
                                  duration-200
                                  cursor-pointer
                                "
                              >
                                {item.name}
                              </Link>

                            ))}

                          </div>

                        </div>

                      </div>
                    ) : (

                      /* ======================================
                         NORMAL DESKTOP LINK
                      ====================================== */

                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm font-semibold",
                          "hover:text-primary",
                          "transition-colors",
                          "cursor-pointer",
                          pathname === link.href
                            ? "text-primary"
                            : "text-slate-700"
                        )}
                      >
                        {link.name}
                      </Link>

                    )}

                  </div>
                );
              })}

              {/* =================================================
                  RIGHT SIDE BUTTONS
              ================================================= */}

              {isSparkPage ? (

                <Link
                  href="/spark.php?section=apply"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-bold
                    px-5
                    py-2.5
                    rounded-lg
                    text-xs
                    uppercase
                    tracking-wider
                    shadow-md
                    shadow-red-600/20
                    transition-all
                    hover:scale-105
                    cursor-pointer
                  "
                >
                  Apply Now
                </Link>

              ) : (

                <>

                  <Link
                    href="/internship.php"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      bg-[#0b5ed7]
                      hover:bg-[#084298]
                      text-white
                      font-bold
                      px-4
                      py-2.5
                      rounded-lg
                      text-xs
                      uppercase
                      tracking-wider
                      shadow-sm
                      transition-all
                      hover:scale-105
                      cursor-pointer
                    "
                  >
                    Internship
                  </Link>

                  <a
                    href={SPARK_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      font-bold
                      px-4
                      py-2.5
                      rounded-lg
                      text-xs
                      uppercase
                      tracking-wider
                      shadow-sm
                      transition-all
                      hover:scale-105
                      cursor-pointer
                    "
                  >
                    SPARK
                  </a>

                </>

              )}

            </nav>

            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="
                lg:hidden
                inline-flex
                items-center
                justify-center
                w-11
                h-11
                rounded-lg
                text-slate-800
                hover:text-primary
                hover:bg-slate-100
                transition-colors
                focus:outline-none
                focus:ring-2
                focus:ring-primary/30
                cursor-pointer
                relative
                z-[300]
              "
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
            >

              {mobileMenuOpen ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}

            </button>

          </div>
        </div>

        {/* ======================================================
            MOBILE MENU
        ====================================================== */}

        {mobileMenuOpen && (

          <div
            className="
              lg:hidden
              absolute
              top-full
              left-0
              right-0
              z-[250]
              bg-white
              border-t
              border-slate-100
              shadow-2xl
              max-h-[calc(100dvh-5rem)]
              overflow-y-auto
            "
          >

            <div className="px-4 py-5">

              <div className="space-y-2">

                {navLinks.map((link) => {

                  const hasDropdown =
                    Boolean(
                      link.dropdown &&
                      link.dropdown.length > 0
                    );

                  return (
                    <div
                      key={link.name}
                      className="
                        border-b
                        border-slate-100
                        pb-2
                      "
                    >

                      {/* ========================================
                          MOBILE DROPDOWN
                      ======================================== */}

                      {hasDropdown ? (

                        <>

                          <button
                            type="button"
                            onClick={() =>
                              toggleDropdown(link.name)
                            }
                            className="
                              flex
                              justify-between
                              items-center
                              w-full
                              text-left
                              text-base
                              font-semibold
                              text-slate-800
                              hover:text-primary
                              py-3
                              px-2
                              rounded-lg
                              hover:bg-slate-50
                              transition-colors
                              cursor-pointer
                              focus:outline-none
                              focus:ring-2
                              focus:ring-primary/30
                            "
                            aria-expanded={
                              activeDropdown === link.name
                            }
                          >

                            <span>{link.name}</span>

                            <ChevronDown
                              size={19}
                              className={cn(
                                "transition-transform duration-200",
                                activeDropdown === link.name &&
                                  "rotate-180"
                              )}
                            />

                          </button>

                          {/* MOBILE SERVICE ITEMS */}

                          {activeDropdown === link.name && (

                            <div
                              className="
                                mt-1
                                ml-2
                                pl-3
                                border-l-2
                                border-blue-100
                                space-y-1
                              "
                            >

                              {link.dropdown?.map((item) => (

                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className="
                                    block
                                    text-sm
                                    font-medium
                                    text-slate-600
                                    hover:text-primary
                                    hover:bg-blue-50
                                    py-2.5
                                    px-3
                                    rounded-lg
                                    transition-colors
                                    cursor-pointer
                                  "
                                >
                                  {item.name}
                                </Link>

                              ))}

                            </div>

                          )}

                        </>

                      ) : (

                        /* ======================================
                           MOBILE NORMAL LINK
                        ====================================== */

                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="
                            block
                            text-base
                            font-semibold
                            text-slate-800
                            hover:text-primary
                            py-3
                            px-2
                            rounded-lg
                            hover:bg-slate-50
                            transition-colors
                            cursor-pointer
                          "
                        >
                          {link.name}
                        </Link>

                      )}

                    </div>
                  );
                })}

                {/* =================================================
                    MOBILE ACTION BUTTONS
                ================================================= */}

                {isSparkPage ? (

                  <div className="pt-3">

                    <Link
                      href="/spark.php?section=apply"
                      onClick={closeMobileMenu}
                      className="
                        block
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        font-bold
                        w-full
                        text-center
                        py-3
                        rounded-xl
                        text-xs
                        uppercase
                        tracking-wider
                        transition-colors
                        cursor-pointer
                      "
                    >
                      Apply Now
                    </Link>

                  </div>

                ) : (

                  <div
                    className="
                      pt-3
                      grid
                      grid-cols-2
                      gap-2
                    "
                  >

                    <Link
                      href="/internship.php"
                      onClick={closeMobileMenu}
                      className="
                        bg-[#0b5ed7]
                        hover:bg-[#084298]
                        text-white
                        font-bold
                        w-full
                        text-center
                        py-3
                        rounded-xl
                        text-xs
                        uppercase
                        tracking-wider
                        transition-colors
                        cursor-pointer
                      "
                    >
                      Internship
                    </Link>

                    <a
                      href={SPARK_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        font-bold
                        w-full
                        text-center
                        py-3
                        rounded-xl
                        text-xs
                        uppercase
                        tracking-wider
                        transition-colors
                        cursor-pointer
                      "
                    >
                      SPARK
                    </a>

                  </div>

                )}

              </div>
            </div>

          </div>

        )}

      </header>
    </>
  );
}

