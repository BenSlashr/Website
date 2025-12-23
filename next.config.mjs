/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agence-slashr.fr',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
