/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: [
      'buckit-prod.s3.ap-northeast-2.amazonaws.com',
      'buckit-test.s3.ap-northeast-2.amazonaws.com',
      'buckit.me',
      'www.buckit.me',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    IMP_CERTIFICATION_CODE: process.env.IMP_CERTIFICATION_CODE,
    MERCHANT_UID: process.env.MERCHANT_UID,
    BASE_URL: process.env.BASE_URL,
    REFRESH_COOKIE_KEY: process.env.REFRESH_COOKIE_KEY,
    KAKAO_APP_KEY: process.env.KAKAO_APP_KEY,
    WEB_BASE_URL: process.env.WEB_BASE_URL,
    GTAG: process.env.GTAG,
  },
};

module.exports = nextConfig;
