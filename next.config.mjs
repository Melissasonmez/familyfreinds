import { cache } from "react";

/** @type {import('next').NextConfig} */
const nextConfig = {
  //cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
        //port: "",
        pathname: "/**",
        //search: "",
      },
    ],
  },
};

export default nextConfig;
