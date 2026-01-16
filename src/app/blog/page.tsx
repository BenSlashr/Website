import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getArticles } from '@/lib/blog';
import Newsletter from '@/components/Newsletter';

const ARTICLES_PER_PAGE = 12;

// Revalide toutes les 60 secondes (ISR)
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog SEO & Search Marketing',
  description: 'Découvrez nos articles, guides et conseils SEO. Actualités, bonnes pratiques et stratégies pour améliorer votre référencement naturel.',
  alternates: {
    canonical: '/blog',
  },
};

// Icons for category pills
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'SEO Technique':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'E-commerce SEO':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'SEO Édito':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      );
    case 'Tendances':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
  }
};

// Generate gradient for article cards
const getCardGradient = (index: number) => {
  const gradients = [
    'linear-gradient(135deg, #FF7828 0%, #EC4899 35%, #A032C8 65%, #6496FF 100%)',
    'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
    'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)',
    'linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #EC4899 100%)',
    'linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #F97316 100%)',
    'linear-gradient(135deg, #14B8A6 0%, #6366F1 50%, #EC4899 100%)',
  ];
  return gradients[index % gradients.length];
};

export default async function BlogPage() {
  // Récupère les articles depuis WordPress
  const articles = await getArticles();

  const currentPage = 1;
  const featuredArticle = articles[0];
  const gridArticles = articles.slice(1);
  const totalPages = Math.ceil(gridArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = gridArticles.slice(0, ARTICLES_PER_PAGE);

  const filterButtons = ['TOUT', 'SEO TECHNIQUE', 'STRATÉGIE', 'POPULARITÉ'];

  return (
    <>
      {/* Blog Header */}
      <section className="bg-[#1a1a1a] pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white italic">
            Blog
          </h1>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="bg-[#1a1a1a] px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {filterButtons.map((filter, index) => (
              <span
                key={filter}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium min-h-[44px] flex items-center ${
                  index === 0
                    ? 'bg-white text-black'
                    : 'bg-transparent text-gray-400 border border-gray-600'
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="bg-[#1a1a1a] px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block bg-[#2C2E34] rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className="relative w-full md:w-1/2 min-h-[280px] md:min-h-[380px] flex items-center justify-center overflow-hidden"
                  style={{
                    background: featuredArticle.featuredImage
                      ? undefined
                      : 'linear-gradient(135deg, #FF7828 0%, #EC4899 35%, #A032C8 65%, #6496FF 100%)',
                  }}
                >
                  {featuredArticle.featuredImage && (
                    <Image
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.featuredImageAlt || featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="relative inline-flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full z-10">
                    {getCategoryIcon(featuredArticle.category)}
                    <span>{featuredArticle.category}</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#E74601] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-400 mb-5 sm:mb-8 text-sm sm:text-base leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E74601] to-[#CE08A9] flex items-center justify-center text-white font-medium text-sm">
                      {featuredArticle.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{featuredArticle.author}</p>
                      <p className="text-gray-500 text-sm">{featuredArticle.readTime} de lecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="bg-[#1a1a1a] px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block bg-[#2C2E34] rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-[#2C2E34] transition-colors"
              >
                <div
                  className="relative w-full h-48 flex items-center justify-center overflow-hidden"
                  style={{
                    background: article.featuredImage ? undefined : getCardGradient(index),
                  }}
                >
                  {article.featuredImage && (
                    <Image
                      src={article.featuredImage}
                      alt={article.featuredImageAlt || article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="relative inline-flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full z-10">
                    {getCategoryIcon(article.category)}
                    <span>{article.category}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-[#E74601] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E74601] to-[#CE08A9] flex items-center justify-center text-white font-medium text-xs">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{article.author}</p>
                      <p className="text-gray-500 text-xs">{article.readTime} de lecture</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="bg-[#1a1a1a] px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              {/* Previous button - disabled on page 1 */}
              <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Page précédente
              </span>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={page === 1 ? '/blog' : `/blog/page/${page}`}
                    className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center transition-colors ${
                      currentPage === page
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:bg-[#2C2E34] hover:text-white'
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {/* Next button */}
              {totalPages > 1 ? (
                <Link
                  href="/blog/page/2"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-[#2C2E34] transition-colors"
                >
                  Page suivante
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 cursor-not-allowed">
                  Page suivante
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              )}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
