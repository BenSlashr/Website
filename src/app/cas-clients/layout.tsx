import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cas Clients SEO | Nos Réussites | Slashr',
  description:
    'Découvrez nos cas clients SEO : migrations, fusions, croissance organique. Résultats concrets et témoignages de nos accompagnements SEO.',
  alternates: {
    canonical: '/cas-clients',
  },
  openGraph: {
    title: 'Cas Clients SEO | Nos Réussites | Slashr',
    description:
      'Découvrez nos cas clients SEO : migrations, fusions, croissance organique.',
    type: 'website',
  },
};

export default function CasClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
