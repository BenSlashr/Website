import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllPrestationSlugs,
  getPrestationBySlug,
} from "@/lib/prestationsWP";
import LogoBanner from "@/components/LogoBanner";
import CTA from "@/components/CTA";
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
} from "@/components/services";
import FAQ from "@/components/FAQ";

interface Props {
  params: Promise<{ slug: string }>;
}

// Génère toutes les pages de prestations au build (SSG)
export async function generateStaticParams() {
  const slugs = getAllPrestationSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Génère les métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prestation = getPrestationBySlug(slug);

  if (!prestation) {
    return {
      title: "Prestation non trouvée",
    };
  }

  return {
    title: prestation.metaTitle,
    description: prestation.metaDescription,
    alternates: {
      canonical: `/prestations/${slug}`,
    },
    openGraph: {
      title: prestation.metaTitle,
      description: prestation.metaDescription,
      url: `/prestations/${slug}`,
      type: "website",
    },
  };
}

export default async function PrestationPage({ params }: Props) {
  const { slug } = await params;
  const prestation = getPrestationBySlug(slug);

  if (!prestation) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
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
        category={prestation.category}
      />

      {/* FAQ */}
      {prestation.faqs && prestation.faqs.length > 0 && (
        <FAQ title="Vous nous demandez souvent" faqs={prestation.faqs} />
      )}

      {/* CTA */}
      <CTA />
    </main>
  );
}
