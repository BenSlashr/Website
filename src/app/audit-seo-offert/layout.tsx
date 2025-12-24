import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audit SEO Offert | Analyse Gratuite de Votre Site | Slashr',
  description:
    'Recevez un audit SEO gratuit et personnalisé de votre site web. Découvrez les opportunités pour améliorer votre visibilité sur Google. Sans engagement.',
  alternates: {
    canonical: '/audit-seo-offert',
  },
  openGraph: {
    title: 'Audit SEO Offert | Analyse Gratuite de Votre Site | Slashr',
    description:
      'Recevez un audit SEO gratuit et personnalisé de votre site web. Découvrez les opportunités pour améliorer votre visibilité sur Google.',
    type: 'website',
  },
};

export default function AuditSEOOffertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
