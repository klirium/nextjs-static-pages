import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjs-static-pages",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
