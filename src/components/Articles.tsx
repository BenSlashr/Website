import Link from "next/link";
import Image from "next/image";
import { getLatestArticlesFromWP, Article } from "@/lib/wordpress";

const Articles = async () => {
  const articles = await getLatestArticlesFromWP(3);

  if (articles.length === 0) {
    return null;
  }

  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white italic font-serif">
            Nos articles
          </h2>
          <Link
            href="/blog"
            className="bg-transparent border border-gray-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Lire d&apos;autres articles
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Article - Left */}
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="bg-[#252525] rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:bg-[#2a2a2a] transition-colors"
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[400px]">
              {featuredArticle.featuredImage ? (
                <Image
                  src={featuredArticle.featuredImage}
                  alt={featuredArticle.featuredImageAlt || featuredArticle.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(135deg,
                        rgba(255, 120, 40, 0.9) 0%,
                        rgba(236, 72, 153, 0.9) 35%,
                        rgba(160, 50, 200, 0.9) 65%,
                        rgba(100, 150, 255, 0.9) 100%
                      )
                    `,
                  }}
                />
              )}
              {/* Tag overlay */}
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 bg-[#252525]/90 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-6 flex flex-col">
              {/* Category Tag */}
              <span className="inline-block self-start bg-[#1a1a1a] text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                {featuredArticle.category}
              </span>

              {/* Title */}
              <h3 className="text-white font-semibold text-xl mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                {featuredArticle.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-auto line-clamp-4">
                {featuredArticle.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-3">
                  {featuredArticle.authorAvatar ? (
                    <Image
                      src={featuredArticle.authorAvatar}
                      alt={featuredArticle.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                      unoptimized
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                  <span className="text-white text-sm">{featuredArticle.author}</span>
                </div>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>
          </Link>

          {/* Side Articles - Right */}
          <div className="flex flex-col gap-4">
            {sideArticles.map((article: Article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-[#252525] rounded-2xl p-6 border border-gray-700/50 group hover:bg-[#2a2a2a] hover:border-orange-500/30 transition-all"
              >
                {/* Category Tag */}
                <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                  {article.title}
                </h3>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {article.authorAvatar ? (
                      <Image
                        src={article.authorAvatar}
                        alt={article.author}
                        width={32}
                        height={32}
                        className="rounded-full"
                        unoptimized
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                    <span className="text-white text-sm">{article.author}</span>
                  </div>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
