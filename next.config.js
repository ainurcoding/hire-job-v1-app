/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_BACKEND_URL: 'https://dark-rose-ox-cuff.cyclic.app',
  },
  images: {
    domains: ["res.cloudinary.com"],
  }
}

module.exports = nextConfig
