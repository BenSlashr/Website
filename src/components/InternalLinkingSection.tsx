import { EmbeddingsCache, getSuggestionsFromCache } from '@/lib/internalLinking';
import RelatedServices from './RelatedServices';
import RelatedArticles from './RelatedArticles';

interface InternalLinkingSectionProps {
  articleSlug: string;
  cacheData: EmbeddingsCache | null;
  placement: 'sidebar' | 'footer';
}

/**
 * Client component that renders internal linking suggestions
 * based on pre-computed embeddings cache
 */
const InternalLinkingSection = ({
  articleSlug,
  cacheData,
  placement,
}: InternalLinkingSectionProps) => {
  if (!cacheData) return null;

  const suggestions = getSuggestionsFromCache(articleSlug, cacheData);
  if (!suggestions) return null;

  if (placement === 'sidebar') {
    // In sidebar: show related services
    return (
      <RelatedServices
        services={suggestions.relatedServices}
        title="Services associés"
      />
    );
  }

  // In footer: show related articles
  return (
    <RelatedArticles
      articles={suggestions.relatedArticles}
      title="Articles recommandés"
    />
  );
};

export default InternalLinkingSection;
