/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Ready_App/' : '', // Corrected!
};

module.exports = nextConfig;