import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/riderly-landing',
  compiler: {
    styledComponents: true,
  },
  images: {
    localPatterns: [
      {
        pathname: '/assets/imgs/**',
        search: ''
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;
