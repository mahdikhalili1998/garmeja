import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.garmeja.com",
        pathname: "/assets/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
