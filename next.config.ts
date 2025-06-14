import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
  output: 'export',
  distDir: 'docs'
};

export default nextConfig;
