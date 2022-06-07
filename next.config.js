/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    domains: ['res.cloudinary.com']
  },
  reactStrictMode: true,
  i18n
};
