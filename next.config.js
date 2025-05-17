/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure webpack if needed
  webpack: (config, { isServer }) => {
    return config
  }
}

module.exports = nextConfig
