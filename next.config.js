/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Configure images for static export
  images: {
    loader: 'akamai', // Use 'akamai' or 'imgix', 'cloudinary' if you use those services
    path: '', // Use empty string or the base URL if needed by loader/CDN
    // Ensure domains for external images are listed if necessary
    // domains: ['example.com'],
  },
};

module.exports = nextConfig; 