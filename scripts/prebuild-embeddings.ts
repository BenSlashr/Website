/**
 * Pre-build script to check if embeddings cache needs regeneration
 * Regenerates if cache is older than 1 month or doesn't exist
 * Run with: npx tsx scripts/prebuild-embeddings.ts
 */

import {
  loadEmbeddingsCache,
  isCacheExpired,
} from '../src/lib/internalLinking';

async function main() {
  console.log('🔍 Checking embeddings cache...\n');

  const cache = await loadEmbeddingsCache();

  if (!cache || !cache.generatedAt || cache.items.length === 0) {
    console.log('❌ No valid cache found.');
    console.log('➡️  Run: npm run generate-embeddings\n');
    process.exit(0);
  }

  const generatedDate = new Date(cache.generatedAt);
  const now = new Date();
  const ageInDays = Math.floor((now.getTime() - generatedDate.getTime()) / (24 * 60 * 60 * 1000));

  console.log(`📅 Cache generated: ${generatedDate.toLocaleDateString('fr-FR')}`);
  console.log(`📊 Cache age: ${ageInDays} days`);
  console.log(`📦 Items in cache: ${cache.items.length}`);

  if (isCacheExpired(cache)) {
    console.log('\n⚠️  Cache is older than 30 days!');
    console.log('🔄 Regenerating embeddings...\n');

    // Import and run the generation script
    const { exec } = await import('child_process');
    const { promisify } = await import('util');
    const execAsync = promisify(exec);

    try {
      const { stdout, stderr } = await execAsync('npx tsx scripts/generate-embeddings.ts', {
        cwd: process.cwd(),
        timeout: 300000, // 5 min timeout
      });
      console.log(stdout);
      if (stderr) console.error(stderr);
    } catch (error) {
      console.error('❌ Failed to regenerate embeddings:', error);
      // Don't fail the build, just warn
      console.log('⚠️  Continuing with existing cache...');
    }
  } else {
    console.log('\n✅ Cache is up to date. No regeneration needed.');
  }
}

main().catch((error) => {
  console.error('❌ Error checking cache:', error);
  // Don't fail the build
  process.exit(0);
});
