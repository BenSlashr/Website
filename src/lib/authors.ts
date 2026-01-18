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
    role: 'Co-fondateur & SEO Director',
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
    role: 'Co-fondateur & Consulting Director',
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
  {
    slug: 'lucas',
    name: 'Lucas Colin',
    role: 'Account Manager',
    image: '/blog/images/2024/03/lucas.png',
    bio: 'Lucas accompagne les clients de Slashr dans le pilotage de leur stratégie SEO. Il assure le suivi des projets et la coordination entre les équipes pour garantir l\'atteinte des objectifs.',
    achievements: [
      'Account Manager chez Slashr',
      'Gestion de comptes grands comptes',
      'Expert en pilotage de projets SEO',
    ],
  },
  {
    slug: 'tom',
    name: 'Tom Chemin',
    role: 'SEO Consultant',
    image: '/blog/images/2024/03/tom-chemin.jpeg',
    bio: 'Tom est consultant SEO chez Slashr. Il accompagne les entreprises dans l\'optimisation de leur visibilité organique avec une approche technique et data-driven.',
    achievements: [
      'Consultant SEO chez Slashr',
      'Expert en SEO technique',
      'Spécialiste e-commerce',
    ],
  },
  {
    slug: 'pierre-antoine',
    name: 'Pierre-Antoine Henneau',
    role: 'SEO Consultant',
    image: '/blog/images/2024/03/pierre-antoine.jpeg',
    bio: 'Pierre-Antoine est consultant SEO chez Slashr. Il met son expertise au service des entreprises pour améliorer leur positionnement et leur trafic organique.',
    achievements: [
      'Consultant SEO chez Slashr',
      'Expert en stratégie de contenu',
      'Spécialiste SEO on-page',
    ],
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
    'lucas colin': 'lucas',
    'lucas': 'lucas',
    'tom chemin': 'tom',
    'tom': 'tom',
    'pierre-antoine henneau': 'pierre-antoine',
    'pierre antoine henneau': 'pierre-antoine',
    'pierre-antoine': 'pierre-antoine',
  };

  return nameMapping[normalizedName];
}
