/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
      return [
        {
          source: '/',
          destination: '/home',
        },
      ]
    },
  images: {
    domains: ["static-00.iconduck.com"],
  },
};

module.exports = nextConfig;