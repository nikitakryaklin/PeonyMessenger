import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_ISHTTPS === "true" ? "https" : "http",
        hostname: `${process.env.NEXT_PUBLIC_API_HOST}`,
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
