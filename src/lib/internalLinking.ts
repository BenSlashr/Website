/**
 * Internal Linking System
 * Uses embeddings to find semantically similar content
 */

import { Article } from './mdx';
import { Prestation, prestationsData } from './prestationsWP';

// Types
export interface ContentItem {
  id: string;
  type: 'article' | 'prestation';
  slug: string;
  title: string;
  description: string;
  url: string;
  category?: string;
  embedding?: number[];
}

export interface SimilarityResult {
  item: ContentItem;
  score: number;
}

export interface LinkingSuggestions {
  relatedArticles: SimilarityResult[];
  relatedServices: SimilarityResult[];
}

// Embedding API configuration
const EMBEDDING_API_URL = 'https://outils.agence-slashr.fr/embedding';

// Cache file path (relative to project root)
const CACHE_FILE = 'embeddings-cache.json';

/**
 * Generate embeddings for a list of texts
 */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  try {
    // API expects: { items: [{ type: "text", value: "..." }, ...] }
    const response = await fetch(`${EMBEDDING_API_URL}/embed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: texts.map((text) => ({
          type: 'text',
          value: text.slice(0, 50000), // Max 50000 chars per item
        })),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Embedding API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    // API returns { vectors: [[...], [...], ...], dimensions: 1024, normalized: true }
    return data.vectors;
  } catch (error) {
    console.error('Error generating embeddings:', error);
    throw error;
  }
}

/**
 * Generate embedding for a single text
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const embeddings = await generateEmbeddings([text]);
  return embeddings[0];
}

/**
 * Calculate cosine similarity between two vectors
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const magnitude = Math.sqrt(normA) * Math.sqrt(normB);
  return magnitude === 0 ? 0 : dotProduct / magnitude;
}

/**
 * Convert Article to ContentItem
 */
export function articleToContentItem(article: Article): ContentItem {
  return {
    id: `article-${article.slug}`,
    type: 'article',
    slug: article.slug,
    title: article.title,
    description: article.excerpt,
    url: `/blog/${article.slug}`,
    category: article.category,
  };
}

/**
 * Convert Prestation to ContentItem
 */
export function prestationToContentItem(prestation: Prestation): ContentItem {
  return {
    id: `prestation-${prestation.slug}`,
    type: 'prestation',
    slug: prestation.slug,
    title: prestation.title,
    description: prestation.heroDescription,
    url: `/seo/prestations/${prestation.slug}`,
    category: prestation.category,
  };
}

/**
 * Get text representation for embedding
 */
export function getTextForEmbedding(item: ContentItem): string {
  return `${item.title}. ${item.description}`;
}

/**
 * Find similar items based on embeddings
 */
export function findSimilarItems(
  targetEmbedding: number[],
  items: ContentItem[],
  excludeId: string,
  limit: number = 3
): SimilarityResult[] {
  const results: SimilarityResult[] = [];

  for (const item of items) {
    if (item.id === excludeId || !item.embedding) continue;

    const score = cosineSimilarity(targetEmbedding, item.embedding);
    results.push({ item, score });
  }

  // Sort by score descending and take top N
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/**
 * Get linking suggestions for an article
 */
export function getLinkingSuggestions(
  articleId: string,
  articleEmbedding: number[],
  allItems: ContentItem[],
  articlesLimit: number = 3,
  servicesLimit: number = 3
): LinkingSuggestions {
  const articles = allItems.filter((item) => item.type === 'article');
  const services = allItems.filter((item) => item.type === 'prestation');

  return {
    relatedArticles: findSimilarItems(articleEmbedding, articles, articleId, articlesLimit),
    relatedServices: findSimilarItems(articleEmbedding, services, articleId, servicesLimit),
  };
}

// ========================================
// Cache Management
// ========================================

export interface EmbeddingsCache {
  version: string;
  generatedAt: string;
  items: ContentItem[];
}

// Cache expiry duration (1 month in milliseconds)
const CACHE_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Check if the embeddings cache is expired (older than 1 month)
 */
export function isCacheExpired(cache: EmbeddingsCache | null): boolean {
  if (!cache || !cache.generatedAt) return true;

  const generatedDate = new Date(cache.generatedAt);
  const now = new Date();
  const ageMs = now.getTime() - generatedDate.getTime();

  return ageMs > CACHE_EXPIRY_MS;
}

/**
 * Load embeddings cache from file system (for use in scripts)
 */
export async function loadEmbeddingsCache(): Promise<EmbeddingsCache | null> {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const cachePath = path.join(process.cwd(), 'src', 'data', CACHE_FILE);

    const data = await fs.readFile(cachePath, 'utf-8');
    return JSON.parse(data) as EmbeddingsCache;
  } catch {
    return null;
  }
}

/**
 * Save embeddings cache to file system (for use in scripts)
 */
export async function saveEmbeddingsCache(cache: EmbeddingsCache): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');

  const dataDir = path.join(process.cwd(), 'src', 'data');
  const cachePath = path.join(dataDir, CACHE_FILE);

  // Ensure data directory exists
  await fs.mkdir(dataDir, { recursive: true });

  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2));
}

/**
 * Get all prestations as ContentItems
 */
export function getAllPrestationsAsContentItems(): ContentItem[] {
  return prestationsData.map(prestationToContentItem);
}

/**
 * Get cached suggestions for an article slug
 * Returns null if not in cache
 */
export async function getCachedSuggestions(
  articleSlug: string
): Promise<LinkingSuggestions | null> {
  const cache = await loadEmbeddingsCache();
  if (!cache) return null;

  const articleId = `article-${articleSlug}`;
  const articleItem = cache.items.find((item) => item.id === articleId);

  if (!articleItem || !articleItem.embedding) return null;

  return getLinkingSuggestions(
    articleId,
    articleItem.embedding,
    cache.items,
    3, // 3 articles
    3  // 3 services
  );
}

/**
 * Get suggestions synchronously from pre-computed cache
 * For use in React components
 */
export function getSuggestionsFromCache(
  articleSlug: string,
  cacheData: EmbeddingsCache
): LinkingSuggestions | null {
  const articleId = `article-${articleSlug}`;
  const articleItem = cacheData.items.find((item) => item.id === articleId);

  if (!articleItem || !articleItem.embedding) return null;

  return getLinkingSuggestions(
    articleId,
    articleItem.embedding,
    cacheData.items,
    3,
    3
  );
}

/**
 * Get related articles for a prestation based on embeddings
 */
export function getRelatedArticlesForPrestation(
  prestationSlug: string,
  cacheData: EmbeddingsCache,
  limit: number = 3
): SimilarityResult[] {
  const prestationId = `prestation-${prestationSlug}`;
  const prestationItem = cacheData.items.find((item) => item.id === prestationId);

  if (!prestationItem || !prestationItem.embedding) return [];

  const articles = cacheData.items.filter((item) => item.type === 'article');
  return findSimilarItems(prestationItem.embedding, articles, prestationId, limit);
}

/**
 * Load embeddings cache synchronously for build time
 * Uses require to avoid async issues during static generation
 */
export function loadEmbeddingsCacheSync(): EmbeddingsCache | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const cache = require('@/data/embeddings-cache.json');
    return cache as EmbeddingsCache;
  } catch {
    return null;
  }
}
