/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side features
  serverComponents: false,
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 