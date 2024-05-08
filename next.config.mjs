/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
domains: ['gogocdn.net'],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
  },
};

export default nextConfig;
