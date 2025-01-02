import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "bjj-life-bucket.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

export default withNextIntl(nextConfig);
