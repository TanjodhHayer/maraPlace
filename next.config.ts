import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ enables static HTML export (creates /out folder on build)
  images: {
    unoptimized: true, // ✅ required for <Image /> to work with static export
  },
};

export default nextConfig;
