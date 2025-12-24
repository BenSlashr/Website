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
    <section className="mt-16 mb-8">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </span>
        {title}
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((result, index) => (
          <Link
            key={result.item.id}
            href={result.item.url}
            className="group block"
          >
            <article className="relative overflow-hidden rounded-2xl bg-[#252525] h-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1">
              {/* Gradient header */}
              <div
                className="h-2"
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
                <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {result.item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                  {result.item.description}
                </p>

                {/* Read more */}
                <div className="flex items-center text-orange-400 text-sm font-medium">
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-purple-600/0 group-hover:from-orange-500/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
