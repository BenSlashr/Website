import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getSocialPrestationSlugs,
  getSocialPrestationBySlug,
  Prestation,
} from "@/lib/prestationsWP";
import { caseStudies } from "@/lib/caseStudiesWP";
import { getArticleBySlugFromWP } from "@/lib/mdx";
import {
  getRelatedArticlesForPrestation,
  loadEmbeddingsCacheSync,
  EmbeddingsCache,
} from "@/lib/internalLinking";
import LogoBanner from "@/components/LogoBanner";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Articles from "@/components/Articles";

// Charger le cache des embeddings une seule fois
let embeddingsCache: EmbeddingsCache | null = null;
try {
  embeddingsCache = loadEmbeddingsCacheSync();
} catch {
  console.warn("Embeddings cache not available");
}
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
  WhyChooseUsSection,
  QualificationSection,
} from "@/components/services";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";
import MaillagePrestation from "@/components/MaillagePrestation";
import Engagements from "@/components/Engagements";

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
    url: `https://www.slashr.fr/ads/social/${slug}`,
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
        name: "Ads",
        item: "https://www.slashr.fr/ads",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Social Ads",
        item: "https://www.slashr.fr/ads/social",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: prestation.tag,
        item: `https://www.slashr.fr/ads/social/${slug}`,
      },
    ],
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

// Génère toutes les pages Social Ads au build (SSG)
export async function generateStaticParams() {
  const slugs = getSocialPrestationSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Génère les métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prestation = getSocialPrestationBySlug(slug);

  if (!prestation) {
    return {
      title: "Prestation non trouvée",
    };
  }

  return {
    title: prestation.metaTitle,
    description: prestation.metaDescription,
    alternates: {
      canonical: `/ads/social/${slug}`,
    },
    openGraph: {
      title: prestation.metaTitle,
      description: prestation.metaDescription,
      url: `/ads/social/${slug}`,
      type: "website",
    },
  };
}

export default async function SocialPrestationPage({ params }: Props) {
  const { slug } = await params;
  const prestation = getSocialPrestationBySlug(slug);

  if (!prestation) {
    notFound();
  }

  // Generate Schema.org data
  const serviceSchema = generateServiceSchema(prestation, slug);
  const faqSchema = generateFAQSchema(prestation);
  const breadcrumbSchema = generateBreadcrumbSchema(prestation, slug);

  // Récupérer les articles liés via embeddings (sémantiquement pertinents)
  let relatedArticles: Exclude<Awaited<ReturnType<typeof getArticleBySlugFromWP>>, null>[] = [];
  if (embeddingsCache) {
    const relatedResults = getRelatedArticlesForPrestation(slug, embeddingsCache, 3);
    const articlePromises = relatedResults.map((result) =>
      getArticleBySlugFromWP(result.item.slug)
    );
    const articles = await Promise.all(articlePromises);
    relatedArticles = articles.filter((a): a is Exclude<typeof a, null> => a !== null);
  }

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
        title={prestation.title}
        description={prestation.heroDescription}
      />

      {/* Logo Banner - Ils nous ont fait confiance */}
      <LogoBanner />

      {/* Section Contenu Principal */}
      {prestation.contentSection && (
        <ContentSection
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

      {/* Section - Pourquoi choisir Slashr */}
      {prestation.whyChooseUs && (
        <WhyChooseUsSection
          title={prestation.whyChooseUs.title}
          subtitle={prestation.whyChooseUs.subtitle}
          description={prestation.whyChooseUs.description}
          points={prestation.whyChooseUs.points}
        />
      )}

      {/* Section - Cette prestation est faite pour vous si... */}
      {(prestation.forYou || prestation.notForYou) && (
        <QualificationSection
          forYou={prestation.forYou}
          notForYou={prestation.notForYou}
        />
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
          title={`Les points de vigilance du ${prestation.tag}`}
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

      {/* Cas clients */}
      <CaseStudies caseStudies={caseStudies} />

      {/* Témoignages clients */}
      <Testimonials />

      {/* Nos Engagements globaux SLASHR */}
      <Engagements />

      {/* Synergies / Maillage Prestations */}
      <MaillagePrestation />

      {/* Autres expertises */}
      <OtherExpertisesSection
        currentSlug={slug}
        category="social"
      />

      {/* FAQ */}
      {prestation.faqs && prestation.faqs.length > 0 && (
        <FAQ title="Vous nous demandez souvent" faqs={prestation.faqs} />
      )}

      {/* Articles liés via embeddings (sémantiquement pertinents) */}
      <Articles
        title="Articles connexes"
        articles={relatedArticles.length > 0 ? relatedArticles : undefined}
      />

      {/* Fil d'Ariane */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Ads', href: '/ads' },
          { label: 'Social Ads', href: '/ads/social' },
          { label: prestation.tag },
        ]}
      />

      {/* CTA */}
      <CTA />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
