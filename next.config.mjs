// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config
  outputFileTracingRoot: path.join(__dirname, './'),
};

module.exports = nextConfig;