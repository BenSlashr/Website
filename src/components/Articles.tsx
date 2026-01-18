import Link from "next/link";
import Image from "next/image";
import { getLatestArticlesFromWP, Article } from "@/lib/mdx";

interface ArticlesProps {
  title?: string;
  articles?: Article[]; // Si fourni, utilise ces articles ; sinon, fetch les derniers
}

const Articles = async ({ title = "Nos articles", articles: providedArticles }: ArticlesProps) => {
  // Si des articles sont fournis (via embedding), les utiliser ; sinon fetch les derniers
  const articles = providedArticles ?? await getLatestArticlesFromWP(3);

  if (articles.length === 0) {
    return null;
  }

  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2
            className="text-white font-medium leading-[110%] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}
          >
            {title}
          </h2>
          <Link
            href="/blog"
            className="flex items-center px-[30px] py-[15px] border border-white rounded-[37.5px] text-white font-semibold text-[15px] leading-[145%] hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Lire d&apos;autres articles
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* Featured Article - Left */}
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="flex flex-col md:flex-row bg-[#2C2E34] border border-white/15 rounded-[11.25px] overflow-hidden group w-full lg:w-[857px] lg:flex-shrink-0"
          >
            {/* Visual with gradient */}
            <div className="relative w-full md:w-[423px] h-[300px] md:h-auto md:self-stretch bg-[#383B45] overflow-hidden flex-shrink-0">
              {/* Gradient background - blurred layer */}
              <div
                className="absolute -inset-10"
                style={{
                  background: 'linear-gradient(180deg, #E74601 0%, #FF9011 25%, #CE08A9 50%, #CE16B5 70%, #8962FD 85%, #AD21FE 100%)',
                  filter: 'blur(22.5px)',
                }}
              />
              {/* Category tag centered */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="flex items-center gap-2.5 bg-[#2C2E34] rounded-[11.25px] px-[37.5px] py-[15px]">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  <span className="text-white font-bold text-[20px] leading-[135%] tracking-[-0.01em]">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-[30px] pr-[22.5px] pb-[22.5px] flex-grow">
              <div className="flex flex-col gap-5">
                {/* Category Tag */}
                <span className="inline-flex justify-center items-center self-start px-[11.25px] py-[7.5px] border border-white rounded-[3.5px] text-white font-bold text-[11.25px] leading-[140%] tracking-[-0.01em] uppercase">
                  {featuredArticle.category}
                </span>

                {/* Title */}
                <h3 className="text-white font-medium text-[22.5px] leading-[130%] tracking-[-0.01em] group-hover:text-[#E74601] transition-colors">
                  {featuredArticle.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white text-[15px] leading-[145%] line-clamp-5">
                  {featuredArticle.excerpt}
                </p>
              </div>

              {/* Author & Time */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-[7.5px]">
                  {featuredArticle.authorAvatar ? (
                    <Image
                      src={featuredArticle.authorAvatar}
                      alt={featuredArticle.author}
                      width={32}
                      height={32}
                      className="rounded-full border border-white/50"
                      unoptimized
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-[#E74601] to-[#CE08A9] rounded-full border border-white/50 flex items-center justify-center text-white font-medium text-xs">
                      {featuredArticle.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <span className="text-white text-[15px] leading-[145%]">{featuredArticle.author}</span>
                </div>
                <div className="flex items-center gap-[7.5px] opacity-50">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white text-[15px] leading-[145%]">{featuredArticle.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Side Articles - Right */}
          <div className="flex flex-col gap-[30px] flex-grow">
            {sideArticles.map((article: Article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="flex flex-col justify-between bg-[#2C2E34] border border-white/15 rounded-[11.25px] p-[30px] pb-[22.5px] group hover:border-[#E74601]/30 transition-all flex-1"
              >
                <div className="flex flex-col gap-[15px]">
                  {/* Category Tag */}
                  <span className="inline-flex justify-center items-center self-start px-[11.25px] py-[7.5px] border border-white rounded-[3.75px] text-white font-bold text-[11.25px] leading-[140%] tracking-[-0.01em] uppercase">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-medium text-[22.5px] leading-[130%] tracking-[-0.01em] group-hover:text-[#E74601] transition-colors">
                    {article.title}
                  </h3>
                </div>

                {/* Author & Time */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-[7.5px]">
                    {article.authorAvatar ? (
                      <Image
                        src={article.authorAvatar}
                        alt={article.author}
                        width={32}
                        height={32}
                        className="rounded-full border border-black/50"
                        unoptimized
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-[#E74601] to-[#CE08A9] rounded-full border border-black/50 flex items-center justify-center text-white font-medium text-xs">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <span className="text-white text-[15px] leading-[145%]">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-[7.5px] opacity-50">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-[15px] leading-[145%]">{article.readTime}</span>
                  </div>
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
