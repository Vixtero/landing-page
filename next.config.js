/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  // Add this line:
  basePath: '/landing-page', // Match your repository name

  // // Configure images for static export
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
};

module.exports = nextConfig;