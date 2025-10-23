// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any other configuration options here if you have them

  // This line explicitly tells Next.js where the project root is,
  // fixing the "workspace root" warning and helping Vercel trace files.
  outputFileTracingRoot: path.join(__dirname, './'),
};

module.exports = nextConfig;