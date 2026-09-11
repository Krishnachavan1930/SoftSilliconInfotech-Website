import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For general static site output or simpler media management
  },
};

export default nextConfig;
