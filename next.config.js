const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default Image Optimization API since we're using Turbopack
  },
  experimental: {
    turbopack: {
      root: path.join(__dirname),
      resolveAlias: {
        // Add any necessary aliases here
      },
      debugIds: process.env.NODE_ENV === 'development',
    },
  }
}

module.exports = nextConfig
