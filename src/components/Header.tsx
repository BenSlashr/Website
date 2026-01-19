import HeaderClient from './HeaderClient';

// Données statiques - définies côté serveur pour éviter de les inclure dans le bundle client
const expertises = {
  seo: [
    { name: 'SEO', description: 'Référencement naturel', href: '/seo', icon: 'search' },
    { name: 'SEO E-commerce', description: 'Shopify, Prestashop, Magento...', href: '/seo/prestations/ecommerce', icon: 'cart' },
    { name: 'SEO Local', description: 'Google Business Profile', href: '/seo/prestations/local', icon: 'location' },
    { name: 'SEO International', description: 'Multilingue & Hreflang', href: '/seo/prestations/international', icon: 'globe' },
    { name: 'Migration SEO', description: 'Refonte sans perte de trafic', href: '/seo/prestations/refonte-migration', icon: 'ux' },
  ],
  geo: [
    { name: 'GEO', description: 'Référencement IA', href: '/seo/prestations/agence-geo', icon: 'ai' },
    { name: 'Audit GEO', description: 'Analyse visibilité IA', href: '/seo/prestations/audit-geo', icon: 'data' },
  ],
  ads: [
    { name: 'Ads', description: 'Publicité digitale', href: '/ads', icon: 'euro' },
    { name: 'SEA / Google Ads', description: 'Search, Shopping, Display', href: '/ads/sea', icon: 'search' },
    { name: 'Social Ads', description: 'Meta, LinkedIn, TikTok', href: '/ads/social', icon: 'social' },
  ],
  conseil: [
    { name: 'Formation SEO', href: '/seo/prestations/formation', icon: 'formation' },
  ],
};

const aboutPages = [
  { name: 'Qui sommes-nous', description: 'Notre histoire et notre équipe', href: '/qui-sommes-nous', icon: 'team' },
  { name: 'R&D', description: 'Nos innovations et recherches', href: '/r-and-d', icon: 'data' },
  { name: 'Blog', description: 'Actualités et ressources SEO', href: '/blog', icon: 'content' },
  { name: 'Recrutement', description: 'Rejoignez l\'équipe', href: '/recrutement', icon: 'career' },
  { name: 'Contact', description: 'Nous contacter', href: '/contact', icon: 'chat' },
];

// Server Component qui passe les données statiques au Client Component
const Header = () => {
  return <HeaderClient expertises={expertises} aboutPages={aboutPages} />;
};

export default Header;
