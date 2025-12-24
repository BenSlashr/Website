import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAuthorBySlug, getAllAuthorSlugs } from '@/lib/authors';
import { getArticlesByAuthorFromWP } from '@/lib/wordpress';

// Revalide toutes les 60 secondes (ISR)
export const revalidate = 60;

// Générer les params statiques pour tous les auteurs
export async function generateStaticParams() {
  const slugs = getAllAuthorSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Générer les métadonnées dynamiques
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: 'Auteur non trouvé',
    };
  }

  return {
    title: `${author.name} - ${author.role}`,
    description: author.bio,
    alternates: {
      canonical: `/blog/author/${slug}`,
    },
    openGraph: {
      title: `${author.name} - ${author.role} | SLASHR`,
      description: author.bio,
      images: [{ url: author.image, width: 400, height: 400 }],
    },
  };
}

// Icons pour les catégories (réutilisé du blog)
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
    default:
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
  }
};

// Gradients pour les cards sans image
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

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  // Récupérer les articles de cet auteur
  const articles = await getArticlesByAuthorFromWP(author.name.split(' ')[0]);

  // Schema.org Person
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://slashr.fr/blog/author/${slug}#person`,
    name: author.name,
    url: `https://slashr.fr/blog/author/${slug}`,
    image: author.image,
    jobTitle: author.role,
    description: author.bio,
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://slashr.fr/#organization',
      name: 'SLASHR',
      url: 'https://slashr.fr',
    },
    sameAs: [author.linkedIn, author.twitter].filter(Boolean),
  };

  // Schema.org CollectionPage pour la liste d'articles
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Articles de ${author.name}`,
    description: `Tous les articles SEO rédigés par ${author.name}, ${author.role} chez SLASHR.`,
    url: `https://slashr.fr/blog/author/${slug}`,
    author: {
      '@id': `https://slashr.fr/blog/author/${slug}#person`,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://slashr.fr/blog/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
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
              <li className="text-white">Auteur</li>
            </ol>
          </nav>

          {/* Author Card */}
          <div className="bg-[#252525] rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                  priority
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {author.name}
                </h1>
                <p className="text-orange-400 font-medium mb-4">{author.role}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{author.bio}</p>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  {author.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {achievement}
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {author.linkedIn && (
                    <a
                      href={author.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#353535] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {author.twitter && (
                    <a
                      href={author.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#353535] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-[#1a1a1a] px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Articles rédigés par {author.name.split(' ')[0]}
            <span className="text-gray-500 font-normal text-xl ml-3">
              ({articles.length})
            </span>
          </h2>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block bg-[#252525] rounded-3xl overflow-hidden hover:bg-[#2a2a2a] transition-colors"
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
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.readTime} de lecture</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#252525] rounded-3xl">
              <p className="text-gray-400">Aucun article pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
