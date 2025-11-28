import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const repoName = "new-porto-web";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  output: 'export',
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  // env: {
  //   NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  // },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
