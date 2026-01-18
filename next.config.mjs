/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agence-slashr.fr',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'wp.agence-slashr.fr',
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
    // Inline le CSS critique pour éviter les chaînes de requêtes
    optimizeCss: true,
  },

  // Optimisation du bundling
  modularizeImports: {
    // Tree-shaking automatique pour ces packages
    'geist': {
      transform: 'geist/{{member}}',
    },
  },

  // Rewrites pour garder les anciennes URLs d'images WordPress
  async rewrites() {
    return [
      // Rediriger les anciennes URLs WordPress vers les images locales
      {
        source: '/wp-content/uploads/:path*',
        destination: '/blog/images/:path*',
      },
    ];
  },

  // Redirections 301 pour les anciennes URLs
  async redirects() {
    return [
      // === SERVICES RENOMMÉS / SUPPRIMÉS ===
      // Pages qui n'existent plus - rediriger vers la page parente appropriée
      { source: '/ux-cro', destination: '/seo', permanent: true },
      { source: '/data-webanalytics', destination: '/seo', permanent: true },
      { source: '/sea', destination: '/ads/sea', permanent: true },
      { source: '/outils', destination: '/r-and-d', permanent: true },

      // === PRESTATIONS SEO - Anciens slugs WordPress ===
      { source: '/seo/prestations/google-ads', destination: '/ads/prestations/google-ads', permanent: true },
      { source: '/seo/prestations/social-search', destination: '/seo', permanent: true },
      { source: '/seo/prestations/refonte', destination: '/seo/prestations/refonte-migration', permanent: true },
      { source: '/seo/prestations/refonte-seo', destination: '/seo/prestations/refonte-migration', permanent: true },
      { source: '/seo/prestations/seo-technique', destination: '/seo', permanent: true },
      { source: '/seo/prestations/seo-international', destination: '/seo/prestations/international', permanent: true },
      { source: '/seo/prestations/agence-seo-wordpress', destination: '/seo/prestations/wordpress', permanent: true },
      { source: '/seo/prestations/agence-seo-drupal-2', destination: '/seo/prestations/drupal', permanent: true },
      { source: '/seo/prestations/devis', destination: '/prestations/devis', permanent: true },

      // === PRESTATIONS - Anciens slugs avec préfixe agence-seo- ===
      { source: '/prestations/agence-seo-magento', destination: '/prestations/magento', permanent: true },
      { source: '/prestations/agence-seo-wordpress', destination: '/prestations/wordpress', permanent: true },
      { source: '/prestations/agence-seo-drupal', destination: '/prestations/drupal', permanent: true },

      // === CAS CLIENTS - URLs sans /cas-clients/ ===
      { source: '/cas-client-tradesy-vestiaire-collective', destination: '/cas-clients/cas-client-tradesy-vestiaire-collective', permanent: true },
      { source: '/cas-client-fusion-de-yakarouler-et-carter-cash', destination: '/cas-clients/cas-client-fusion-de-yakarouler-et-carter-cash', permanent: true },
      { source: '/migration-tradesy-vc-seo', destination: '/cas-clients/cas-client-tradesy-vestiaire-collective', permanent: true },

      // === BLOG - Anciennes URLs sans /blog/ ===
      { source: '/courte-traine', destination: '/blog', permanent: true },
      { source: '/searchdexing', destination: '/blog', permanent: true },
      { source: '/guide-vseo', destination: '/blog', permanent: true },
      { source: '/migration-seo-guide', destination: '/blog/plan-de-redirection-seo-guide-etape-par-etape-pour-bien-le-realiser', permanent: true },
      { source: '/redirections-seo-guide-pratique', destination: '/blog/plan-de-redirection-seo-guide-etape-par-etape-pour-bien-le-realiser', permanent: true },
      { source: '/comment-gerer-robots-txt-seo', destination: '/blog', permanent: true },
      { source: '/comprendre-processus-crawling', destination: '/blog', permanent: true },
      { source: '/recherches-associees', destination: '/blog', permanent: true },

      // === BLOG - Articles renommés ou supprimés ===
      { source: '/blog/detecteur-cloaking', destination: '/blog', permanent: true },
      { source: '/blog/refonte-de-site-web-et-seo-comment-conserver-son-trafic', destination: '/blog/plan-de-redirection-seo-guide-etape-par-etape-pour-bien-le-realiser', permanent: true },
      { source: '/blog/optimiser-son-cms-pour-le-seo', destination: '/blog/cms-ecommerce', permanent: true },
      { source: '/blog/cocon-semantique', destination: '/blog', permanent: true },
      { source: '/blog/seo-technique', destination: '/blog', permanent: true },
      { source: '/blog/e-commerce-seo', destination: '/blog', permanent: true },
      { source: '/blog/indexation-seo', destination: '/blog', permanent: true },
      { source: '/blog/audit-seo', destination: '/blog', permanent: true },
    ];
  },

  // Headers de sécurité et cache
  async headers() {
    const securityHeaders = [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/:path*',
        headers: [
          ...securityHeaders,
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          ...securityHeaders,
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
