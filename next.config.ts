import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  //? swcMinify: true, this is always true in next.js 14
  poweredByHeader: false,
};

export default nextConfig;
