/**
 * Script to generate embeddings for all articles and prestations
 * Run with: npx tsx scripts/generate-embeddings.ts
 */

import {
  generateEmbeddings,
  articleToContentItem,
  prestationToContentItem,
  getTextForEmbedding,
  saveEmbeddingsCache,
  ContentItem,
  EmbeddingsCache,
} from '../src/lib/internalLinking';
import { getArticles } from '../src/lib/blog';
import { prestationsData } from '../src/lib/prestationsWP';

const BATCH_SIZE = 10; // Process embeddings in batches

async function main() {
  console.log('🚀 Starting embeddings generation...\n');

  // 1. Collect all content items
  console.log('📚 Fetching articles from WordPress...');
  const articles = await getArticles();
  console.log(`   Found ${articles.length} articles`);

  console.log('📦 Loading prestations...');
  console.log(`   Found ${prestationsData.length} prestations`);

  // 2. Convert to ContentItems
  const articleItems = articles.map(articleToContentItem);
  const prestationItems = prestationsData.map(prestationToContentItem);
  const allItems: ContentItem[] = [...articleItems, ...prestationItems];

  console.log(`\n📊 Total items to process: ${allItems.length}`);

  // 3. Generate embeddings in batches
  console.log('\n🔄 Generating embeddings...');

  const texts = allItems.map(getTextForEmbedding);
  const allEmbeddings: number[][] = [];

  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const batch = texts.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(texts.length / BATCH_SIZE);

    console.log(`   Batch ${batchNum}/${totalBatches} (${batch.length} items)...`);

    try {
      const embeddings = await generateEmbeddings(batch);
      allEmbeddings.push(...embeddings);
    } catch (error) {
      console.error(`   ❌ Error in batch ${batchNum}:`, error);
      throw error;
    }

    // Small delay to avoid rate limiting
    if (i + BATCH_SIZE < texts.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  // 4. Attach embeddings to items
  console.log('\n📎 Attaching embeddings to items...');
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].embedding = allEmbeddings[i];
  }

  // 5. Save cache
  console.log('\n💾 Saving cache...');
  const cache: EmbeddingsCache = {
    version: '1.0',
    generatedAt: new Date().toISOString(),
    items: allItems,
  };

  await saveEmbeddingsCache(cache);

  // 6. Summary
  console.log('\n✅ Done!');
  console.log(`   - ${articleItems.length} articles processed`);
  console.log(`   - ${prestationItems.length} prestations processed`);
  console.log(`   - Cache saved to src/data/embeddings-cache.json`);

  // 7. Show sample similarities
  console.log('\n📈 Sample similarity check (first article):');
  if (articleItems.length > 0 && allEmbeddings.length > 0) {
    const { getLinkingSuggestions } = await import('../src/lib/internalLinking');
    const suggestions = getLinkingSuggestions(
      articleItems[0].id,
      allEmbeddings[0],
      allItems,
      3,
      3
    );

    console.log(`\n   Article: "${articleItems[0].title}"`);
    console.log('\n   Related Articles:');
    suggestions.relatedArticles.forEach((r, i) => {
      console.log(`     ${i + 1}. ${r.item.title} (score: ${r.score.toFixed(3)})`);
    });

    console.log('\n   Related Services:');
    suggestions.relatedServices.forEach((r, i) => {
      console.log(`     ${i + 1}. ${r.item.title} (score: ${r.score.toFixed(3)})`);
    });
  }
}

main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
