import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'R&D & Outils SEO | Laboratoire Slashr',
  description:
    'Découvrez nos outils SEO et projets R&D : analyse sémantique, tracking GEO, embeddings, automatisation. 19 outils en production.',
  alternates: {
    canonical: '/r-and-d',
  },
  openGraph: {
    title: 'R&D & Outils SEO | Laboratoire Slashr',
    description:
      'Découvrez nos outils SEO et projets R&D : analyse sémantique, tracking GEO, embeddings.',
    type: 'website',
  },
};

export default function RAndDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
