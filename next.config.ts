import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  output: 'export',
  basePath: "/porto",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
