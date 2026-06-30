import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  // Add these if you have any dynamic routes (if so, static export won't work):
  // You'll need to use Vercel or another platform for dynamic content
}

export default nextConfig;