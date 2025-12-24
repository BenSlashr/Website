import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getSEOPrestationSlugs,
  getSEOPrestationBySlug,
  Prestation,
} from "@/lib/prestationsWP";
import { caseStudies } from "@/lib/caseStudiesWP";
import { getArticleBySlugFromWP } from "@/lib/wordpress";
import {
  getRelatedArticlesForPrestation,
  EmbeddingsCache,
} from "@/lib/internalLinking";
import embeddingsCache from "@/data/embeddings-cache.json";
import LogoBanner from "@/components/LogoBanner";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import {
  ServiceHero,
  MethodologySection,
  BenefitsSection,
  ComparisonSection,
  EngagementsSection,
  ContentSection,
  VigilanceSection,
  OtherExpertisesSection,
  EnjeuxSection,
  GEOExclusiveSections,
} from "@/components/services";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

// Helper functions to generate Schema.org data
function generateServiceSchema(prestation: Prestation, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: prestation.metaTitle.split("|")[0].trim(),
    description: prestation.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Slashr",
      url: "https://www.slashr.fr",
      logo: "https://www.slashr.fr/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Lille, Hauts-de-France",
    },
    serviceType: prestation.tag,
    url: `https://www.slashr.fr/seo/prestations/${slug}`,
  };
}

function generateFAQSchema(prestation: Prestation) {
  if (!prestation.faqs || prestation.faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: prestation.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\n/g, " ").replace(/•/g, "-"),
      },
    })),
  };
}

function generateBreadcrumbSchema(prestation: Prestation, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.slashr.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO",
        item: "https://www.slashr.fr/seo",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Prestations",
        item: "https://www.slashr.fr/seo/prestations",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: prestation.tag,
        item: `https://www.slashr.fr/seo/prestations/${slug}`,
      },
    ],
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

// Génère toutes les pages de prestations SEO au build (SSG)
export async function generateStaticParams() {
  const slugs = getSEOPrestationSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Génère les métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prestation = getSEOPrestationBySlug(slug);

  if (!prestation) {
    return {
      title: "Prestation non trouvée",
    };
  }

  return {
    title: prestation.metaTitle,
    description: prestation.metaDescription,
    alternates: {
      canonical: `/seo/prestations/${slug}`,
    },
    openGraph: {
      title: prestation.metaTitle,
      description: prestation.metaDescription,
      url: `/seo/prestations/${slug}`,
      type: "website",
    },
  };
}

export default async function SEOPrestationPage({ params }: Props) {
  const { slug } = await params;
  const prestation = getSEOPrestationBySlug(slug);

  if (!prestation) {
    notFound();
  }

  // Generate Schema.org data
  const serviceSchema = generateServiceSchema(prestation, slug);
  const faqSchema = generateFAQSchema(prestation);
  const breadcrumbSchema = generateBreadcrumbSchema(prestation, slug);

  // Get related articles based on embeddings
  const relatedArticleSlugs = getRelatedArticlesForPrestation(
    slug,
    embeddingsCache as EmbeddingsCache,
    3
  );

  // Fetch full article data for related articles
  const relatedArticles = await Promise.all(
    relatedArticleSlugs.map(({ item }) => getArticleBySlugFromWP(item.slug))
  );
  const validRelatedArticles = relatedArticles.filter((article) => article !== null);

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <ServiceHero
        tag={prestation.tag}
        title={prestation.title}
        description={prestation.heroDescription}
      />

      {/* Logo Banner - Ils nous ont fait confiance */}
      <LogoBanner />

      {/* Section Contenu Principal */}
      {prestation.contentSection && (
        <ContentSection
          tag={prestation.contentSection.tag}
          title={prestation.contentSection.title}
          content={prestation.contentSection.content}
          bulletPoints={prestation.contentSection.bulletPoints}
        />
      )}

      {/* Section Enjeux */}
      {prestation.enjeux && (
        <EnjeuxSection
          tag={prestation.enjeux.tag}
          title={prestation.enjeux.title}
          intro={prestation.enjeux.intro}
          expertiseLinks={prestation.enjeux.expertiseLinks}
          ctaText={prestation.enjeux.ctaText}
          ctaHref={prestation.enjeux.ctaHref}
        />
      )}

      {/* Sections exclusives GEO (architecture ChatGPT, Query Fan-out, etc.) */}
      {prestation.geoExclusiveContent && (
        <GEOExclusiveSections content={prestation.geoExclusiveContent} />
      )}

      {/* Section - Pourquoi choisir Slashr */}
      {prestation.whyChooseUs && (
        <section className="bg-[#252525] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              {prestation.whyChooseUs.title}
            </h2>
            <p className="text-gray-400 text-center text-lg mb-12">
              {prestation.whyChooseUs.subtitle}
            </p>

            <div className="text-gray-300 mb-12 max-w-3xl mx-auto text-center">
              <p>{prestation.whyChooseUs.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {prestation.whyChooseUs.points.map((point, index) => (
                <div key={index} className="bg-[#1a1a1a] rounded-2xl p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    {index === 0 && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section - Cette prestation est faite pour vous si... */}
      {(prestation.forYou || prestation.notForYou) && (
        <section className="bg-[#1a1a1a] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Pour vous */}
              {prestation.forYou && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">
                    Cette prestation est faite pour vous si...
                  </h3>
                  <ul className="space-y-4">
                    {prestation.forYou.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pas pour vous */}
              {prestation.notForYou && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">
                    En revanche, passez votre chemin si...
                  </h3>
                  <ul className="space-y-4">
                    {prestation.notForYou.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Méthodologie */}
      {prestation.methodology && prestation.methodology.length > 0 && (
        <MethodologySection steps={prestation.methodology} />
      )}

      {/* Avantages */}
      {prestation.benefits && prestation.benefits.length > 0 && (
        <BenefitsSection
          title={`Les avantages de ${prestation.tag}`}
          benefits={prestation.benefits}
        />
      )}

      {/* Points de vigilance */}
      {prestation.vigilancePoints && prestation.vigilancePoints.length > 0 && (
        <VigilanceSection
          title={`Les points de vigilance sur ${prestation.tag}`}
          points={prestation.vigilancePoints}
        />
      )}

      {/* Comparaison Sans/Avec Agence */}
      {prestation.comparison && (
        <ComparisonSection
          title={prestation.comparison.title}
          withoutAgency={prestation.comparison.without}
          withAgency={prestation.comparison.with}
        />
      )}

      {/* Engagements */}
      {prestation.engagements && prestation.engagements.length > 0 && (
        <EngagementsSection engagements={prestation.engagements} />
      )}

      {/* Autres expertises */}
      <OtherExpertisesSection
        currentSlug={slug}
        category="seo"
      />

      {/* FAQ */}
      {prestation.faqs && prestation.faqs.length > 0 && (
        <FAQ title="Vous nous demandez souvent" faqs={prestation.faqs} />
      )}

      {/* Témoignages clients */}
      <Testimonials />

      {/* Cas clients */}
      <CaseStudies caseStudies={caseStudies} />

      {/* Articles liés basés sur les embeddings */}
      {validRelatedArticles.length > 0 && (
        <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white italic font-serif">
                Articles connexes
              </h2>
              <Link
                href="/blog"
                className="bg-transparent border border-gray-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Lire d&apos;autres articles
              </Link>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {validRelatedArticles.map((article) => (
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
                  <h3 className="text-white font-semibold text-lg mb-4 leading-tight group-hover:text-orange-400 transition-colors line-clamp-2">
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
        </section>
      )}

      {/* Fil d'Ariane */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'SEO', href: '/seo' },
          { label: 'Prestations', href: '/seo/prestations' },
          { label: prestation.tag },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}
