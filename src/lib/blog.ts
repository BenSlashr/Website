import {
  getArticlesFromWP,
  getArticleBySlugFromWP,
  getAllSlugsFromWP,
  getCategoriesFromWP,
  Article,
} from './mdx';

// Re-export du type Article
export type { Article };

// Données statiques de fallback (utilisées si WordPress ne répond pas)
const fallbackArticles: Article[] = [
  {
    slug: "tiktok-seo",
    title: "TikTok SEO : le guide pour être visible et performant en 2025",
    excerpt: "TikTok n'est plus seulement une plateforme de divertissement : c'est devenu un véritable moteur de recherche visuel.",
    content: "Contenu de l'article...",
    metaTitle: "TikTok SEO : Guide Complet 2025",
    metaDescription: "Découvrez comment optimiser vos contenus TikTok pour le SEO et gagner en visibilité.",
    author: "Benoit Demonchaux",
    publishedAt: "2024-12-15",
    category: "SEO",
    tags: ["TikTok", "SEO", "Réseaux sociaux"],
    readTime: "10 min",
    featured: true,
  },
  {
    slug: "negative-seo",
    title: "Negative SEO : Comprendre, détecter et se protéger d'une attaque SEO malveillante",
    excerpt: "Le SEO négatif désigne l'ensemble des pratiques malveillantes utilisées pour nuire au référencement d'un site concurrent.",
    content: "Contenu de l'article...",
    metaTitle: "Negative SEO : Guide de Protection",
    metaDescription: "Apprenez à détecter et vous protéger des attaques SEO malveillantes.",
    author: "Benoit Demonchaux",
    publishedAt: "2024-12-10",
    category: "SEO Technique",
    tags: ["SEO", "Sécurité", "Negative SEO"],
    readTime: "12 min",
  },
  {
    slug: "effet-crocodile-seo",
    title: "L'effet crocodile en SEO : pourquoi vos clics chutent malgré une hausse des impressions",
    excerpt: "L'écart grandissant entre impressions et clics, symbole d'une visibilité sans engagement.",
    content: "Contenu de l'article...",
    metaTitle: "Effet Crocodile SEO : Comprendre la Baisse de Clics",
    metaDescription: "Pourquoi vos impressions augmentent mais vos clics diminuent ? Découvrez l'effet crocodile.",
    author: "Benoit Demonchaux",
    publishedAt: "2024-12-05",
    category: "Tendances",
    tags: ["SEO", "Google", "CTR", "IA"],
    readTime: "8 min",
  },
];

// Cache pour les articles (évite les appels multiples)
let articlesCache: Article[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 60000; // 1 minute

// Récupérer tous les articles (WordPress avec fallback)
export async function getArticles(): Promise<Article[]> {
  // Vérifier le cache
  const now = Date.now();
  if (articlesCache && now - cacheTimestamp < CACHE_DURATION) {
    return articlesCache;
  }

  try {
    const wpArticles = await getArticlesFromWP();
    if (wpArticles.length > 0) {
      articlesCache = wpArticles;
      cacheTimestamp = now;
      return wpArticles;
    }
  } catch (error) {
    console.error('Fallback sur les données statiques:', error);
  }

  return fallbackArticles;
}

// Export synchrone pour la compatibilité (utilise le cache ou fallback)
export const articles = fallbackArticles;

// Récupérer tous les slugs
export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const slugs = await getAllSlugsFromWP();
    if (slugs.length > 0) {
      return slugs;
    }
  } catch (error) {
    console.error('Fallback slugs:', error);
  }
  return fallbackArticles.map((a) => a.slug);
}

// Version synchrone pour compatibilité
export function getAllArticleSlugsSync(): string[] {
  return fallbackArticles.map((a) => a.slug);
}

// Récupérer un article par slug
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  try {
    const article = await getArticleBySlugFromWP(slug);
    if (article) {
      return article;
    }
  } catch (error) {
    console.error('Fallback article:', error);
  }
  return fallbackArticles.find((a) => a.slug === slug);
}

// Version synchrone pour compatibilité
export function getArticleBySlugSync(slug: string): Article | undefined {
  return fallbackArticles.find((a) => a.slug === slug);
}

// Récupérer les articles featured
export async function getFeaturedArticles(): Promise<Article[]> {
  const allArticles = await getArticles();
  const featured = allArticles.filter((a) => a.featured);
  // Si pas de featured, retourner le premier article
  return featured.length > 0 ? featured : allArticles.slice(0, 1);
}

// Récupérer les articles par catégorie
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const allArticles = await getArticles();
  return allArticles.filter((a) => a.category === category);
}

// Récupérer toutes les catégories
export async function getAllCategories(): Promise<string[]> {
  try {
    const categories = await getCategoriesFromWP();
    if (categories.length > 0) {
      return categories;
    }
  } catch (error) {
    console.error('Fallback categories:', error);
  }
  return Array.from(new Set(fallbackArticles.map((a) => a.category)));
}

// Version synchrone
export function getAllCategoriesSync(): string[] {
  return Array.from(new Set(fallbackArticles.map((a) => a.category)));
}
