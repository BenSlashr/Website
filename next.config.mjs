/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agence-slashr.fr',
        pathname: '/wp-content/uploads/**',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compress: true,
  poweredByHeader: false,

  // Optimisations de performance
  experimental: {
    // Optimise le packaging des modules côté serveur
    optimizePackageImports: ['geist'],
  },

  // Optimisation du bundling
  modularizeImports: {
    // Tree-shaking automatique pour ces packages
    'geist': {
      transform: 'geist/{{member}}',
    },
  },

  // Headers de cache pour les assets statiques
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
