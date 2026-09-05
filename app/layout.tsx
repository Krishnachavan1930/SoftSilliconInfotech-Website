import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./global.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Softsilicon Infotech LLP | Best Software Development & IT Services | Web, Mobile Apps & AI",
  description: "SoftSillicon Infotech LLP is a top-rated software development company... Infotech LLP provides industry-leading IT services, including Web & Mobile App Development, AI, Cloud Computing, and Custom Software Solutions for Healthcare, Real Estate, E-Commerce, Agri-Tech, and more.",
  keywords: ["Softsilicon Infotech LLP", "Software Development", "Website Design Nashik", "Digital Marketing Agency Nashik", "Web Developers Nashik", "App Developers Nashik"],
  openGraph: {
    title: "Softsilicon Infotech LLP | Best Software Development & IT Services",
    description: "Industry-leading IT services, including Web & Mobile App Development, AI, Cloud Computing, and Custom Software Solutions.",
    url: "https://softsiliconinfotech.com",
    siteName: "Softsilicon Infotech LLP",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
