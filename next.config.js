/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    // Optimize module resolution
    config.resolve.modules = ['node_modules', ...config.resolve.modules]
    
    // Add source maps in development
    if (dev) {
      config.devtool = 'eval-source-map'
    }

    return config
  },
  // Optimize images
  images: {
    domains: ['durgafirecontrol.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
