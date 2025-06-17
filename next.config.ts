import type { NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    // Warning: This allows production builds to complete even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
};

console.log("Sanity project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("Sanity dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("Sanity API version:", process.env.NEXT_PUBLIC_SANITY_API_VERSION);

export default nextConfig;