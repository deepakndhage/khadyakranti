import type { NextConfig } from "next";

const repoName = 'khadyakranti'
// GITHUB_ACTIONS env var is set automatically on GitHub Actions runners
const basePath = process.env.GITHUB_ACTIONS === 'true' ? `/${repoName}` : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
