import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains:['i.imgur.com']
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