/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a production build run in its own folder (BUILD_DIR=.next-check) without disturbing `npm run dev`.
  distDir: process.env.BUILD_DIR || ".next",
  // The Our Work gallery now lives on /projects.
  async redirects() {
    return [{ source: "/work", destination: "/projects", permanent: true }];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

module.exports = nextConfig;
