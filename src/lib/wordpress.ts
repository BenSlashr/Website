// WordPress API Configuration
const WP_API_URL = 'https://agence-slashr.fr/wp-json/wp/v2';

// Types pour l'API WordPress
interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  _embedded?: {
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
    'wp:term'?: Array<Array<{ name: string; taxonomy: string }>>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
  };
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_description?: string;
    author?: string;
    og_image?: Array<{ url: string; width: number; height: number }>;
    twitter_misc?: Record<string, string>;
    schema?: {
      '@graph'?: Array<{
        '@type': string;
        author?: { name: string };
        articleSection?: string[];
      }>;
    };
  };
}

// Fonction pour décoder les entités HTML
function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&apos;': "'",
    '&nbsp;': ' ',
    '&hellip;': '...',
    '&ndash;': '–',
    '&mdash;': '—',
    '&laquo;': '«',
    '&raquo;': '»',
    '&euro;': '€',
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™',
    '&lsquo;': "'",
    '&rsquo;': "'",
    '&ldquo;': '"',
    '&rdquo;': '"',
    '&bull;': '•',
    '&middot;': '·',
    '&deg;': '°',
    '&frac12;': '½',
    '&frac14;': '¼',
    '&frac34;': '¾',
    '&times;': '×',
    '&divide;': '÷',
    '&plusmn;': '±',
    '&sup2;': '²',
    '&sup3;': '³',
  };

  // Remplacer les entités nommées
  let result = text;
  for (const [entity, char] of Object.entries(entities)) {
    result = result.split(entity).join(char);
  }

  // Remplacer les entités numériques décimales (&#123;)
  result = result.replace(/&#(\d+);/g, (_, code) => {
    return String.fromCharCode(parseInt(code, 10));
  });

  // Remplacer les entités numériques hexadécimales (&#x1F4A1;)
  result = result.replace(/&#x([0-9a-fA-F]+);/g, (_, code) => {
    return String.fromCharCode(parseInt(code, 16));
  });

  return result;
}

// Fonction utilitaire pour nettoyer le HTML
function stripHtml(html: string): string {
  // Enlever les balises HTML puis décoder les entités
  const withoutTags = html.replace(/<[^>]*>/g, '');
  return decodeHtmlEntities(withoutTags).trim();
}

// Calcul du temps de lecture
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const text = stripHtml(content);
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

// Générer un ID slug à partir d'un titre
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Extraire les H2 du contenu pour la table des matières
export function extractHeadings(html: string): Array<{ id: string; title: string }> {
  const headings: Array<{ id: string; title: string }> = [];
  // Match tous les H2, avec contenu HTML potentiel à l'intérieur
  const regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const title = stripHtml(match[1]).trim();
    if (title && title.length > 0) {
      const id = generateSlug(title);
      headings.push({ id, title });
    }
  }

  return headings;
}

// Ajouter des IDs aux H2 dans le contenu HTML
export function addHeadingIds(html: string): string {
  return html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attrs, content) => {
      const cleanTitle = stripHtml(content).trim();
      if (!cleanTitle) return match;

      const id = generateSlug(cleanTitle);

      // Vérifier si un id existe déjà
      if (attrs.includes('id="')) {
        return match;
      }

      return `<h2 id="${id}"${attrs}>${content}</h2>`;
    }
  );
}

// Interface Article (compatible avec l'existant)
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  authorAvatar?: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  featuredImage?: string;
  featuredImageAlt?: string;
  headings?: Array<{ id: string; title: string }>;
}

// Transformer un post WordPress en Article
function transformWPPost(post: WPPost): Article {
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const tags = post._embedded?.['wp:term']?.[1] || [];

  // Récupérer l'auteur : d'abord depuis _embedded, sinon depuis Yoast
  let author = post._embedded?.author?.[0]?.name;
  if (!author || author === '') {
    author = post.yoast_head_json?.author || 'Slashr';
  }

  // Avatar de l'auteur
  const authorAvatar = post._embedded?.author?.[0]?.avatar_urls?.['96'];

  // Image mise en avant avec fallback sur différentes tailles
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const featuredImage =
    featuredMedia?.media_details?.sizes?.large?.source_url ||
    featuredMedia?.media_details?.sizes?.medium?.source_url ||
    featuredMedia?.source_url ||
    post.yoast_head_json?.og_image?.[0]?.url;
  const featuredImageAlt = featuredMedia?.alt_text || '';

  // Contenu avec IDs ajoutés aux H2
  const contentWithIds = addHeadingIds(post.content.rendered);

  // Extraire les headings pour la table des matières
  const headings = extractHeadings(post.content.rendered);

  // Temps de lecture depuis Yoast ou calculé
  const yoastReadTime = post.yoast_head_json?.twitter_misc?.['Durée de lecture estimée'];
  const readTime = yoastReadTime || calculateReadTime(post.content.rendered);

  return {
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    content: contentWithIds,
    metaTitle: post.yoast_head_json?.title || stripHtml(post.title.rendered),
    metaDescription:
      post.yoast_head_json?.og_description ||
      post.yoast_head_json?.description ||
      stripHtml(post.excerpt.rendered),
    author,
    authorAvatar,
    publishedAt: post.date.split('T')[0],
    updatedAt: post.modified.split('T')[0],
    category: categories[0]?.name || 'SEO',
    tags: tags.map((t: { name: string }) => t.name),
    readTime,
    featuredImage,
    featuredImageAlt,
    headings,
  };
}

// Récupérer tous les articles
export async function getArticlesFromWP(): Promise<Article[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 }, // Revalide toutes les 60 secondes
    });

    if (!res.ok) {
      console.error('Erreur WordPress API:', res.status);
      return [];
    }

    const posts: WPPost[] = await res.json();
    return posts.map(transformWPPost);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return [];
  }
}

// Récupérer un article par son slug
export async function getArticleBySlugFromWP(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    const posts: WPPost[] = await res.json();
    if (posts.length === 0) {
      return null;
    }

    return transformWPPost(posts[0]);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return null;
  }
}

// Récupérer tous les slugs (pour generateStaticParams)
export async function getAllSlugsFromWP(): Promise<string[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=100&_fields=slug`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return [];
    }

    const posts: Array<{ slug: string }> = await res.json();
    return posts.map((p) => p.slug);
  } catch (error) {
    console.error('Erreur lors de la récupération des slugs:', error);
    return [];
  }
}

// Récupérer les derniers articles (pour la HP)
export async function getLatestArticlesFromWP(count: number = 3): Promise<Article[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=${count}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Erreur WordPress API:', res.status);
      return [];
    }

    const posts: WPPost[] = await res.json();
    return posts.map(transformWPPost);
  } catch (error) {
    console.error('Erreur lors de la récupération des derniers articles:', error);
    return [];
  }
}

// Récupérer les catégories
export async function getCategoriesFromWP(): Promise<string[]> {
  try {
    const res = await fetch(`${WP_API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 }, // Cache 1h pour les catégories
    });

    if (!res.ok) {
      return [];
    }

    const categories: Array<{ name: string }> = await res.json();
    return categories.map((c) => c.name);
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    return [];
  }
}

// Récupérer les articles par nom d'auteur
export async function getArticlesByAuthorFromWP(authorName: string): Promise<Article[]> {
  try {
    // Récupérer tous les articles et filtrer par auteur côté client
    // (car l'API users de WordPress est protégée)
    const allArticles = await getArticlesFromWP();

    const normalizedAuthorName = authorName.toLowerCase().trim();

    return allArticles.filter((article) => {
      const articleAuthor = article.author.toLowerCase().trim();
      // Match partiel pour gérer les variations (Benoit vs Benoît)
      return articleAuthor.includes(normalizedAuthorName) ||
             normalizedAuthorName.includes(articleAuthor.split(' ')[0]);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des articles par auteur:', error);
    return [];
  }
}
