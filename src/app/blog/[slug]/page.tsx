import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllArticleSlugs, getArticleBySlug, getArticles } from "@/lib/blog";
import { getAuthorSlugFromName, getAuthorBySlug } from "@/lib/authors";
import { loadEmbeddingsCache, getSuggestionsFromCache } from "@/lib/internalLinking";
import Newsletter from "@/components/Newsletter";
import RelatedServices from "@/components/RelatedServices";
import RelatedArticles from "@/components/RelatedArticles";
import "./wordpress-content.css";

// Revalide toutes les 60 secondes (ISR)
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// Génère toutes les pages d'articles au build (SSG)
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Génère les métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

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

// Generate gradient for related articles
const getCardGradient = (index: number) => {
  const gradients = [
    'linear-gradient(135deg, #FF7828 0%, #EC4899 35%, #A032C8 65%, #6496FF 100%)',
    'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
    'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)',
  ];
  return gradients[index % gradients.length];
};


export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Récupère tous les articles pour les recommandations
  const allArticles = await getArticles();

  // Articles similaires (même catégorie, excluant l'article actuel)
  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  // Articles récents (excluant l'article actuel)
  const recentArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 4);

  // Charger le cache des embeddings pour les suggestions sémantiques
  const embeddingsCache = await loadEmbeddingsCache();
  const semanticSuggestions = embeddingsCache
    ? getSuggestionsFromCache(slug, embeddingsCache)
    : null;

  // Récupérer le slug et les infos de l'auteur
  const authorSlug = getAuthorSlugFromName(article.author);
  const authorInfo = authorSlug ? getAuthorBySlug(authorSlug) : null;

  // Estimation du nombre de mots (pour wordCount)
  const wordCount = article.content
    ? article.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length
    : 0;

  // Estimation du temps de lecture (200 mots/min)
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // Schema.org Article - Version avancée
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://slashr.fr/blog/${slug}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://slashr.fr/blog/${slug}`,
    },
    headline: article.title,
    description: article.excerpt || article.metaDescription,
    image: article.featuredImage
      ? {
          "@type": "ImageObject",
          url: article.featuredImage,
          width: 1200,
          height: 630,
        }
      : {
          "@type": "ImageObject",
          url: "https://slashr.fr/og-default.jpg",
          width: 1200,
          height: 630,
        },
    author: {
      "@type": "Person",
      name: article.author,
      url: authorSlug
        ? `https://slashr.fr/blog/author/${authorSlug}`
        : "https://slashr.fr/qui-sommes-nous",
      image: authorInfo?.image,
      jobTitle: authorInfo?.role,
      worksFor: {
        "@type": "Organization",
        name: "SLASHR",
      },
      sameAs: authorInfo?.linkedIn ? [authorInfo.linkedIn] : undefined,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    publisher: {
      "@type": "Organization",
      "@id": "https://slashr.fr/#organization",
      name: "SLASHR",
      url: "https://slashr.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://agence-slashr.fr/wp-content/uploads/2024/03/LOGO-SLASHR-NOIR.png",
        width: 200,
        height: 60,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "165 avenue de Bretagne",
        addressLocality: "Lille",
        postalCode: "59800",
        addressCountry: "FR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33-6-58-87-90-65",
        contactType: "customer service",
        availableLanguage: "French",
      },
      sameAs: [
        "https://www.linkedin.com/company/slashr-seo/",
      ],
    },
    articleSection: article.category,
    keywords: article.tags?.join(", ") || article.category,
    wordCount: wordCount,
    timeRequired: `PT${readingTimeMinutes}M`,
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "Blog",
      "@id": "https://slashr.fr/blog#blog",
      name: "Blog SLASHR",
      publisher: {
        "@id": "https://slashr.fr/#organization",
      },
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://slashr.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://slashr.fr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://slashr.fr/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="bg-[#1a1a1a]">
        {/* Breadcrumb */}
        <nav className="pt-28 px-6">
          <div className="max-w-6xl mx-auto">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-gray-400 truncate max-w-[200px]">
                {article.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Header with Featured Image or Gradient */}
        <header className="pt-8 pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Featured Image or Gradient Banner */}
            <div
              className="relative w-full h-64 md:h-80 rounded-3xl flex items-center justify-center mb-8 overflow-hidden"
              style={{
                background: article.featuredImage
                  ? undefined
                  : 'linear-gradient(135deg, #FF7828 0%, #EC4899 35%, #A032C8 65%, #6496FF 100%)',
              }}
            >
              {article.featuredImage && (
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt || article.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="relative inline-flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full z-10">
                {getCategoryIcon(article.category)}
                <span>{article.category}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                {authorSlug ? (
                  <Link href={`/blog/author/${authorSlug}`} className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    {authorInfo?.image ? (
                      <Image
                        src={authorInfo.image}
                        alt={article.author}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-medium text-sm">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </Link>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-medium text-sm">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  {authorSlug ? (
                    <Link href={`/blog/author/${authorSlug}`} className="text-white font-medium text-sm hover:text-orange-400 transition-colors">
                      {article.author}
                    </Link>
                  ) : (
                    <p className="text-white font-medium text-sm">{article.author}</p>
                  )}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Two Column Layout: Content + Sidebar */}
        <div className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Main Content */}
              <div className="flex-1 lg:max-w-[65%]">
                {/* Excerpt */}
                <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
                  {article.excerpt}
                </p>

                {/* Article Content - WordPress HTML */}
                <div
                  className="wp-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#252525] text-gray-400 text-sm px-4 py-2 rounded-full hover:bg-[#2a2a2a] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Box */}
                <div className="mt-12 bg-[#252525] rounded-3xl p-8">
                  <div className="flex items-start gap-4">
                    {authorSlug ? (
                      <Link href={`/blog/author/${authorSlug}`} className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        {authorInfo?.image ? (
                          <Image
                            src={authorInfo.image}
                            alt={article.author}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                            {article.author.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </Link>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div className="flex-1">
                      {authorSlug ? (
                        <Link href={`/blog/author/${authorSlug}`} className="text-white font-bold text-lg mb-1 hover:text-orange-400 transition-colors inline-block">
                          {article.author}
                        </Link>
                      ) : (
                        <h3 className="text-white font-bold text-lg mb-1">
                          {article.author}
                        </h3>
                      )}
                      <p className="text-orange-400 text-sm mb-3">
                        {authorInfo?.role || 'Expert SEO @ SLASHR'}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {authorInfo?.bio ||
                          'Passionné par le référencement naturel et les stratégies de croissance organique. Accompagne les entreprises dans leur visibilité sur les moteurs de recherche.'}
                      </p>
                      {authorSlug && (
                        <Link
                          href={`/blog/author/${authorSlug}`}
                          className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mt-4 hover:text-orange-300 transition-colors"
                        >
                          Voir tous ses articles
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:w-[320px] flex-shrink-0">
                <div className="lg:sticky lg:top-28 space-y-6">

                  {/* Table of Contents - Dynamic from WordPress H2s */}
                  {article.headings && article.headings.length > 0 && (
                    <div className="bg-[#252525] rounded-2xl p-6">
                      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        Sommaire
                      </h3>
                      <nav>
                        <ul className="space-y-2">
                          {article.headings.map((item, index) => (
                            <li key={item.id}>
                              <a
                                href={`#${item.id}`}
                                className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 py-1"
                              >
                                <span className="text-gray-600 text-xs">{String(index + 1).padStart(2, '0')}</span>
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  )}

                  {/* Newsletter CTA */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl p-6 border border-orange-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-white font-bold text-sm">Newsletter SEO</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Recevez nos meilleurs conseils SEO chaque semaine.
                    </p>
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 mb-3"
                    />
                    <button className="w-full bg-white text-black px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Je m'inscris
                    </button>
                  </div>

                  {/* Afterwork CTA */}
                  <div className="bg-[#252525] rounded-2xl p-6 relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: 'linear-gradient(135deg, #FF7828 0%, #EC4899 50%, #A032C8 100%)',
                      }}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-pink-400 text-xs font-medium uppercase tracking-wider">Prochain Event</span>
                      </div>
                      <h3 className="text-white font-bold mb-2">
                        Afterwork SEO Lille
                      </h3>
                      <p className="text-gray-400 text-sm mb-1">
                        Jeudi 25 janvier 2024
                      </p>
                      <p className="text-gray-500 text-sm mb-4">
                        19h00 - Lille
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-orange-400 transition-colors"
                      >
                        S'inscrire gratuitement
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Recent Articles */}
                  <div className="bg-[#252525] rounded-2xl p-6">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Articles récents
                    </h3>
                    <div className="space-y-4">
                      {recentArticles.map((recentArticle) => (
                        <Link
                          key={recentArticle.slug}
                          href={`/blog/${recentArticle.slug}`}
                          className="block group"
                        >
                          <h4 className="text-gray-300 text-sm font-medium group-hover:text-orange-400 transition-colors line-clamp-2 mb-1">
                            {recentArticle.title}
                          </h4>
                          <p className="text-gray-500 text-xs">
                            {recentArticle.readTime} de lecture
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Services associés (basé sur les embeddings) */}
                  {semanticSuggestions && semanticSuggestions.relatedServices.length > 0 && (
                    <RelatedServices
                      services={semanticSuggestions.relatedServices}
                      title="Services associés"
                    />
                  )}

                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Articles - Semantic suggestions prioritized, fallback to category-based */}
        {((semanticSuggestions?.relatedArticles?.length ?? 0) > 0 || relatedArticles.length > 0) && (
          <section className="px-6 pb-16">
            <div className="max-w-6xl mx-auto">
              {(semanticSuggestions?.relatedArticles?.length ?? 0) > 0 && semanticSuggestions?.relatedArticles ? (
                // Use semantic suggestions (embedding-based)
                <RelatedArticles
                  articles={semanticSuggestions.relatedArticles}
                  title="Articles recommandés"
                />
              ) : (
                // Fallback to category-based related articles
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 italic">
                    Articles similaires
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((related, index) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group block bg-[#252525] rounded-3xl overflow-hidden hover:bg-[#2a2a2a] transition-colors"
                      >
                        {/* Gradient header */}
                        <div
                          className="w-full h-40 flex items-center justify-center"
                          style={{
                            background: getCardGradient(index),
                          }}
                        >
                          <div className="inline-flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full">
                            {getCategoryIcon(related.category)}
                            <span>{related.category}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                            {related.excerpt}
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs">
                              {related.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-gray-500 text-xs">{related.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}
      </article>

      <Newsletter />
    </>
  );
}
