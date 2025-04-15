/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath: '/landing-page', // Keep this correctly set

  // Configure images for static export
  images: {
    // You can keep loader/path or remove them if unoptimized is true
    loader: 'akamai',
    path: '',

    // Add this line to disable optimization globally
    unoptimized: true,
  },
};

module.exports = nextConfig;