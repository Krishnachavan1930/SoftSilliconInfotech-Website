import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "/about_np_it.php" },
    { name: "Website Design", href: "/website_design_development.php" },
    { name: "Mobile App. Development", href: "/mobile_app_development.php" },
    { name: "Google Listing", href: "/google_listing.php" },
    { name: "Social Media Marketing", href: "/social_media_marketing.php" },
    { name: "Logo Design", href: "/logo_design_in_nashik.php" },
    { name: "Linux Hosting", href: "/linux_Shared_hosting_in_nashik.php" },
    { name: "Bulk Whatsapp API", href: "/bulk_whatsapp_marketing_in_nashik.php" },
  ];

  const otherLinks = [
    { name: "Career", href: "/career.php" },
    { name: "Internships", href: "/internship.php" },
    { name: "Life at SiliconSoft", href: "/life_at_SiliconSoft.php" },
    { name: "FAQ's", href: "/fandq.php" },
    { name: "Privacy Policy", href: "/privacy_policy.php" },
    { name: "Domain Data Security", href: "/privacy_policy_domain_hosting_data_security.php" },
    { name: "Terms & Condition", href: "/terms_condition.php" },
  ];

  const offices = [
    {
         address: "410, 4th Floor, Silicon Business Center, Guru Gobind Singh College Road, Near Pathardi Gaon Circle, Nashik, Maharashtra 422010",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-950/20">
          
          {/* Company Brief */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/assets/img/logo.png"
                  alt="SiliconSoft Infotech LLP Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Softsilicon Infotech LLP is a group of IT experts, who accompanied a promise of conveying technology-enabled business solutions. We give world-class software and Web Development services.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            <div>
              <h3 className="text-white text-base font-semibold mb-6 uppercase tracking-wider text-xs">Company</h3>
              <ul className="space-y-3 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="flex items-center hover:text-white transition-colors group">
                      <ArrowRight size={12} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-base font-semibold mb-6 uppercase tracking-wider text-xs">Other Links</h3>
              <ul className="space-y-3 text-sm">
                {otherLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="flex items-center hover:text-white transition-colors group">
                      <ArrowRight size={12} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-semibold mb-6 uppercase tracking-wider text-xs">Get In Touch</h3>
            <div className="space-y-4 text-sm text-slate-500">
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-primary mt-1 shrink-0" />
                <div>
                  <a href="mailto:info@softsiliconinfotech.com" className="hover:text-white block">info@softsiliconinfotech.com</a>
                  <a href="mailto:softsiliconinfotech@gmail.com" className="hover:text-white block text-xs">softsiliconinfotech@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-primary mt-1 shrink-0" />
                <div>
                  <a href="tel:+918411907864" className="hover:text-white block">+91 8411907864</a>
                  <a href="tel:+919168066821" className="hover:text-white block">+91 9168066821</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-12 border-t border-slate-900 border-b">
          <h3 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office) => (
              <div key={office.city} className="space-y-2">
                <div className="flex items-center space-x-2 text-slate-300 font-medium">
                  <MapPin size={14} className="text-accent" />
                  <span>{office.city} Office</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Sitemap Tagging */}
        <div className="py-8 border-b border-slate-900 text-xs text-slate-600 space-y-4">
          <div>
            <strong className="text-slate-400 block mb-1">Website Development Services:</strong>
            Static Website Design | Dynamic Website Development | Business Websites | Hospital Website + Appointment System | School/College Website + Admin Panel | LMS Websites | E-Commerce Websites & Online Stores | Real Estate Websites (Listings, Maps, Filters) | Industrial & Corporate Websites | Portfolio & Personal Branding Websites | Multi-Vendor Platforms | SEO-Optimized Website Development | Hosting, Domain, SSL & AMC Services
          </div>
          <div>
            <strong className="text-slate-400 block mb-1">Digital Marketing Services:</strong>
            Social Media Management (SMM) | Social Media Post Designing | Facebook + Instagram Ads | Google Ads, YouTube Ads | Reels Editing, Posters, Banners | Political Campaign Management | Branding & Creative Designing | Digital Visiting Card | Lead Generation Campaigns | Business Automation Marketing | Performance Marketing
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Softsilicon Infotech Infotech LLP. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
}
