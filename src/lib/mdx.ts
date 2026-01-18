import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// Répertoire des articles MDX
const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

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
  };

  let result = text;
  for (const [entity, char] of Object.entries(entities)) {
    result = result.split(entity).join(char);
  }

  result = result.replace(/&#(\d+);/g, (_, code) => {
    return String.fromCharCode(parseInt(code, 10));
  });

  result = result.replace(/&#x([0-9a-fA-F]+);/g, (_, code) => {
    return String.fromCharCode(parseInt(code, 16));
  });

  return result;
}

// Fonction utilitaire pour nettoyer le HTML
function stripHtml(html: string): string {
  const withoutTags = html.replace(/<[^>]*>/g, '');
  return decodeHtmlEntities(withoutTags).trim();
}

// Générer un ID slug à partir d'un titre
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Extraire les H2 du contenu pour la table des matières
export function extractHeadings(html: string): Array<{ id: string; title: string }> {
  const headings: Array<{ id: string; title: string }> = [];
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

      if (attrs.includes('id="')) {
        return match;
      }

      return `<h2 id="${id}"${attrs}>${content}</h2>`;
    }
  );
}

// Générer un extrait à partir du contenu
function generateExcerpt(content: string, maxLength: number = 160): string {
  const text = stripHtml(content);
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

// Lire un fichier MDX et le parser
function parseMDXFile(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  // Traiter le contenu HTML
  const contentWithIds = addHeadingIds(content);
  const headings = extractHeadings(content);

  // Calculer le temps de lecture
  const stats = readingTime(stripHtml(content));
  const readTime = `${Math.ceil(stats.minutes)} min`;

  // Générer l'extrait si non fourni
  const excerpt = frontmatter.excerpt || generateExcerpt(content);

  return {
    slug,
    title: decodeHtmlEntities(frontmatter.title || slug),
    excerpt: decodeHtmlEntities(excerpt),
    content: contentWithIds,
    metaTitle: frontmatter.seoTitle || frontmatter.title || slug,
    metaDescription: frontmatter.seoDescription || excerpt,
    author: frontmatter.author || 'Slashr',
    authorAvatar: frontmatter.authorAvatar,
    publishedAt: frontmatter.date ? frontmatter.date.split('T')[0] : new Date().toISOString().split('T')[0],
    updatedAt: frontmatter.modified?.split('T')[0],
    category: frontmatter.category || 'SEO',
    tags: frontmatter.tags || [frontmatter.category || 'SEO'],
    readTime,
    featured: frontmatter.featured || false,
    featuredImage: frontmatter.featuredImage,
    featuredImageAlt: frontmatter.featuredImageAlt || frontmatter.title,
    headings,
  };
}

// Récupérer tous les articles
export function getArticlesFromMDX(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.warn('Content directory not found:', CONTENT_DIR);
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const mdxFiles = files.filter(file => file.endsWith('.mdx') && !file.startsWith('_'));

  const articles: Article[] = [];

  for (const file of mdxFiles) {
    const slug = file.replace('.mdx', '');
    const article = parseMDXFile(slug);
    if (article) {
      articles.push(article);
    }
  }

  // Trier par date de publication (plus récent d'abord)
  articles.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return articles;
}

// Récupérer un article par son slug
export function getArticleBySlugFromMDX(slug: string): Article | null {
  return parseMDXFile(slug);
}

// Récupérer tous les slugs (pour generateStaticParams)
export function getAllSlugsFromMDX(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter(file => file.endsWith('.mdx') && !file.startsWith('_'))
    .map(file => file.replace('.mdx', ''));
}

// Récupérer les derniers articles
export function getLatestArticlesFromMDX(count: number = 3): Article[] {
  const articles = getArticlesFromMDX();
  return articles.slice(0, count);
}

// Récupérer les catégories uniques
export function getCategoriesFromMDX(): string[] {
  const articles = getArticlesFromMDX();
  const categories = new Set(articles.map(a => a.category));
  return Array.from(categories);
}

// Récupérer les articles par auteur
export function getArticlesByAuthorFromMDX(authorName: string): Article[] {
  const articles = getArticlesFromMDX();
  const normalizedAuthorName = authorName.toLowerCase().trim();

  return articles.filter((article) => {
    const articleAuthor = article.author.toLowerCase().trim();
    return articleAuthor.includes(normalizedAuthorName) ||
           normalizedAuthorName.includes(articleAuthor.split(' ')[0]);
  });
}

// Récupérer les articles liés (même catégorie)
export function getRelatedArticlesFromMDX(currentSlug: string, count: number = 3): Article[] {
  const currentArticle = parseMDXFile(currentSlug);
  if (!currentArticle) return [];

  const articles = getArticlesFromMDX();

  // Filtrer les articles de la même catégorie (sauf l'article courant)
  const related = articles.filter(
    a => a.slug !== currentSlug && a.category === currentArticle.category
  );

  // Si pas assez d'articles dans la même catégorie, ajouter d'autres articles
  if (related.length < count) {
    const others = articles.filter(
      a => a.slug !== currentSlug && a.category !== currentArticle.category
    );
    related.push(...others.slice(0, count - related.length));
  }

  return related.slice(0, count);
}

// ============================================
// EXPORTS COMPATIBLES AVEC L'ANCIEN WORDPRESS
// ============================================

// Alias pour compatibilité avec l'ancien code
export const getArticlesFromWP = getArticlesFromMDX;
export const getArticleBySlugFromWP = getArticleBySlugFromMDX;
export const getAllSlugsFromWP = getAllSlugsFromMDX;
export const getLatestArticlesFromWP = getLatestArticlesFromMDX;
export const getCategoriesFromWP = getCategoriesFromMDX;
export const getArticlesByAuthorFromWP = getArticlesByAuthorFromMDX;

// Export par défaut pour les fonctions async (même interface)
export async function getArticles(): Promise<Article[]> {
  return getArticlesFromMDX();
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return getArticleBySlugFromMDX(slug);
}

export async function getAllSlugs(): Promise<string[]> {
  return getAllSlugsFromMDX();
}

export async function getLatestArticles(count: number = 3): Promise<Article[]> {
  return getLatestArticlesFromMDX(count);
}

export async function getCategories(): Promise<string[]> {
  return getCategoriesFromMDX();
}
