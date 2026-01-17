import Link from 'next/link';
import { SimilarityResult } from '@/lib/internalLinking';

interface RelatedArticlesProps {
  articles: SimilarityResult[];
  title?: string;
}

// Gradient colors for cards
const getCardGradient = (index: number) => {
  const gradients = [
    'linear-gradient(135deg, #FF7828 0%, #EC4899 35%, #A032C8 65%, #6496FF 100%)',
    'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
    'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)',
  ];
  return gradients[index % gradients.length];
};

const RelatedArticles = ({
  articles,
  title = 'Articles similaires',
}: RelatedArticlesProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-16 mb-32">
      <h3 className="text-2xl font-bold text-white mb-8">
        {title}
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((result, index) => (
          <Link
            key={result.item.id}
            href={result.item.url}
            className="group block"
          >
            <article className="relative overflow-hidden rounded-2xl bg-[#2C2E34] h-full transition-all duration-300 hover:shadow-xl hover:shadow-[#E74601]/10 hover:-translate-y-1">
              {/* Gradient header */}
              <div
                className="h-3"
                style={{ background: getCardGradient(index) }}
              />

              <div className="p-6">
                {/* Category tag if available */}
                {result.item.category && (
                  <span className="inline-block bg-[#1a1a1a] text-gray-400 text-xs px-3 py-1 rounded-full mb-4">
                    {result.item.category}
                  </span>
                )}

                {/* Title */}
                <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-[#E74601] transition-colors line-clamp-2">
                  {result.item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                  {result.item.description}
                </p>

                {/* Read more */}
                <div className="flex items-center text-[#E74601] text-sm font-medium">
                  <span>Lire l&apos;article</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E74601]/0 to-[#8962FD]/0 group-hover:from-[#E74601]/5 group-hover:to-[#8962FD]/5 transition-all duration-300 pointer-events-none" />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
