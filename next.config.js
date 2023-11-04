/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextConfig = {
  output: "export",
//   images: {
//     unoptimized: true,
//   },
};

module.exports = nextConfig;
