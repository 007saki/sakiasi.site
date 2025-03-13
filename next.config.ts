import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },

  experimental : {
    turbo:{
      resolveAlias: {
        canvas:'./empty-module.ts'
      }
    }
  }
  
};


export default nextConfig;
