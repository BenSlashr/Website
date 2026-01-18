import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Formatage du titre à partir du slug
  const formattedTitle = slug
    .replace('cas-client-', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} | Cas Client SEO | Slashr`,
    description: `Découvrez notre cas client SEO ${formattedTitle}. Résultats concrets, stratégie mise en place et témoignage client.`,
    alternates: {
      canonical: `/cas-clients/${slug}`,
    },
    openGraph: {
      title: `${formattedTitle} | Cas Client SEO | Slashr`,
      description: `Découvrez notre cas client SEO ${formattedTitle}.`,
      type: 'article',
    },
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
