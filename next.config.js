/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo/' : '', 
  };
  
  module.exports = nextConfig;