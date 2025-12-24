import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recrutement - Rejoignez l\'équipe Slashr',
  description:
    'Vous êtes passionné(e) par le SEO ? Découvrez les opportunités chez Slashr, agence SEO à Lille. Candidatures spontanées bienvenues.',
  alternates: {
    canonical: '/recrutement',
  },
};

export default function RecrutementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
