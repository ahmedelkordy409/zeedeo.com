import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "video-upload-test191.s3.eu-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
