import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProduction ? '/riderly-landing' : '',
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
