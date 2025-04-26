/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable turbopack overlay
    turbo: {
      loaders: {},
      showOverlay: false
    }
  },
  devIndicators: {
    appIsrStatus: false,
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};


export default nextConfig;
