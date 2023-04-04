/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ca.slack-edge.com", "media.licdn.com"],
  }
}

module.exports = nextConfig
