/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://next-api-lihao-ng.vercel.app/api/:path*',
      },
    ]
  }
}

module.exports = nextConfig
