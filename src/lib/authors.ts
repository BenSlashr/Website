// Données des auteurs Slashr
export interface Author {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  achievements: string[];
  linkedIn?: string;
  twitter?: string;
}

// Liste des auteurs (données statiques car équipe fixe)
export const authors: Author[] = [
  {
    slug: 'benoit',
    name: 'Benoit Demonchaux',
    role: 'Co-fondateur & Consultant SEO',
    image: '/blog/images/2024/03/benoit-demonchaux-smx.jpeg',
    bio: 'Benoît Demonchaux est co-fondateur de Slashr, agence de référencement naturel basée à Lille et consultant SEO depuis 6 ans. Avant de créer Slashr, il a exercé en tant qu\'éditeur de sites et chef de projets dans une grande agence SEO.',
    achievements: [
      'Co-fondateur de Slashr (2020)',
      'Conférencier au SMX Paris 2024',
      'Ex-Chef de projets chez La Revanche Des Sites',
      '6+ ans d\'expérience en SEO',
    ],
    linkedIn: 'https://www.linkedin.com/in/benoit-demonchaux/',
  },
  {
    slug: 'anthony',
    name: 'Anthony Lecas',
    role: 'Co-fondateur & Consultant SEO',
    image: '/blog/images/2024/03/anthony-lecas.jpeg',
    bio: 'Co-fondateur de Slashr et consultant SEO depuis près de 5 ans. Anthony combine expertise technique et vision stratégique pour accompagner les entreprises dans leur croissance organique.',
    achievements: [
      'Co-fondateur de Slashr (2020)',
      'Conférencier au SEO Camp Lille 2020',
      'Ex-Chef de projets chez Qwamplify SEO / La Revanche Des Sites',
      '5+ ans d\'expérience en SEO',
    ],
    linkedIn: 'https://fr.linkedin.com/in/anthony-lecas-consultant-seo-formation-coaching',
  },
];

// Récupérer un auteur par son slug
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

// Récupérer tous les slugs des auteurs (pour generateStaticParams)
export function getAllAuthorSlugs(): string[] {
  return authors.map((author) => author.slug);
}

// Mapper un nom d'auteur WordPress vers un slug
export function getAuthorSlugFromName(name: string): string | undefined {
  const normalizedName = name.toLowerCase().trim();

  // Mapping des variations de noms vers les slugs
  const nameMapping: Record<string, string> = {
    'benoit demonchaux': 'benoit',
    'benoît demonchaux': 'benoit',
    'benoit': 'benoit',
    'anthony lecas': 'anthony',
    'anthony': 'anthony',
  };

  return nameMapping[normalizedName];
}
