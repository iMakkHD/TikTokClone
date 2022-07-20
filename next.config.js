/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['wallpaperaccess.com'],
  }
}

module.exports = nextConfig
