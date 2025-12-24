import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez Slashr - Agence SEO Lille',
  description:
    'Besoin d\'un accompagnement SEO ? Contactez l\'équipe Slashr par téléphone, email ou prenez RDV directement. Bureau à Lille.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
