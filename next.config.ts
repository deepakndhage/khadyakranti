import type { NextConfig } from "next";

const repoName = 'khadyakranti' // ← change this to match your GitHub repo name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
