'use client';

import Link from "next/link";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import LeadFormSEO from "@/components/LeadFormSEO";

const pricingFactors = [
  {
    title: "Taille du site",
    description:
      "Un site de 50 pages ne demande pas le même investissement qu'un site e-commerce de 10 000 références. L'audit, l'optimisation et le suivi seront proportionnels à la taille de votre projet.",
    icon: "layers",
  },
  {
    title: "Nature et technologie",
    description:
      "WordPress, Shopify, PrestaShop, Salesforce... Chaque CMS a ses spécificités SEO. Un site e-commerce nécessite généralement plus de travail qu'un site vitrine.",
    icon: "code",
  },
  {
    title: "Concurrence du marché",
    description:
      "Plus votre secteur est concurrentiel, plus les efforts SEO devront être soutenus pour vous démarquer et atteindre les premières positions.",
    icon: "target",
  },
  {
    title: "Services inclus",
    description:
      "Audit seul, stratégie complète, rédaction de contenu, netlinking... Le périmètre de la prestation influence directement le budget nécessaire.",
    icon: "package",
  },
  {
    title: "Durée d'accompagnement",
    description:
      "Un engagement sur le long terme permet souvent de négocier des tarifs dégressifs. Le SEO est un investissement qui s'inscrit dans la durée.",
    icon: "calendar",
  },
  {
    title: "Achats externes",
    description:
      "L'achat de contenu rédactionnel et de backlinks (netlinking) peut rapidement faire évoluer la tarification selon vos objectifs de visibilité.",
    icon: "cart",
  },
];

const faqItems = [
  {
    question: "Combien coûte une prestation de référencement naturel sur Google ?",
    answer: "Le coût d'une prestation SEO dépend d'énormément de facteurs : la taille de votre site, sa technologie, la concurrence sur votre marché, les prestations incluses et la durée d'accompagnement. Il n'existe pas de tarif unique, chaque devis est personnalisé selon vos besoins spécifiques.",
  },
  {
    question: "Quelle est la différence de prix entre un freelance et une agence SEO ?",
    answer: "Le TJM (taux journalier moyen) d'un consultant SEO freelance se situe entre 350 et 700€, tandis que celui d'une agence varie de 550 à 900€. Le prix peut donc doubler pour le même nombre de jours de travail. En contrepartie, une agence offre généralement plus de compétences variées, des outils plus puissants et une expérience plus large.",
  },
  {
    question: "Quels sont les avantages de travailler avec une agence SEO ?",
    answer: "Une agence comme Slashr vous apporte : une équipe pluridisciplinaire avec des compétences complémentaires, l'accès à des outils professionnels coûteux, une expérience multi-secteurs avec des problématiques similaires déjà résolues, et un support continu avec une méthodologie éprouvée.",
  },
  {
    question: "Quels sont les avantages de travailler avec un freelance SEO ?",
    answer: "Un freelance offre une relation de proximité plus forte, un interlocuteur unique très impliqué dans votre projet, des tarifs généralement plus accessibles et une plus grande flexibilité car il n'a pas de process rigides à respecter.",
  },
  {
    question: "Comment la taille de mon site impacte-t-elle le devis SEO ?",
    answer: "La taille du site change énormément la donne. Référencer un site d'une dizaine de pages ne nécessite pas le même budget qu'une boutique avec 100 000 produits et 2000 catégories. Plus le site est volumineux, plus le travail d'audit, d'optimisation et de suivi sera conséquent.",
  },
  {
    question: "Pourquoi la technologie de mon site influence-t-elle le prix ?",
    answer: "Chaque type de site implique son lot de challenges. Un site WordPress sous forme de blog nécessitera peu de modifications techniques, alors qu'une boutique en ligne sous Salesforce demandera du développement personnalisé et une haute expertise SEO spécialisée.",
  },
  {
    question: "La concurrence impacte-t-elle le coût du SEO ?",
    answer: "Absolument. Plus vous ciblez un marché ou des mots-clés concurrentiels, plus la prestation sera coûteuse. Il faut moins de budget pour être premier sur un mot-clé de niche que sur un terme très recherché comme \"assurance santé\" qui génère des millions de recherches.",
  },
  {
    question: "Comment obtenir un tarif avantageux pour mon accompagnement SEO ?",
    answer: "Plus vous optez pour une durée d'accompagnement longue, plus l'agence ou le freelance pourra vous proposer un tarif dégressif au mois. Le SEO étant un travail de long terme, s'engager sur la durée est souvent avantageux financièrement.",
  },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "layers":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "code":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "target":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "package":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "calendar":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "cart":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function DevisPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section with Form */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left side - Content */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block text-xs tracking-[0.3em] text-orange-400 uppercase mb-6 font-medium">
                DEVIS GRATUIT
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Obtenez votre devis SEO
                <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  en 2 minutes
                </span>
              </h1>

              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Configurez votre projet SEO et recevez une estimation personnalisée.
                Notre équipe vous recontacte sous 24h avec un devis détaillé.
              </p>

              {/* Trust indicators */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Devis personnalisé sous 24h</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>+50 clients accompagnés</span>
                </div>
              </div>

              {/* Logos */}
              <div className="hidden lg:block">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Ils nous font confiance</p>
                <div className="flex items-center gap-6 opacity-50">
                  <div className="text-white/60 text-sm font-medium">Vestiaire Collective</div>
                  <div className="text-white/60 text-sm font-medium">Carter Cash</div>
                  <div className="text-white/60 text-sm font-medium">Printemps</div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="lg:pt-8">
              <LeadFormSEO />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing factors Section */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-orange-500 uppercase mb-4 font-medium">
              COMPRENDRE NOS TARIFS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Qu&apos;est-ce qui influence le coût ?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Le coût d&apos;une prestation SEO dépend de plusieurs facteurs.
              Voici les éléments que nous prenons en compte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-[#252525] rounded-2xl p-8 hover:bg-[#2a2a2a] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 text-gray-400 group-hover:text-orange-500 transition-colors">
                  {factor.icon && getIcon(factor.icon)}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{factor.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance vs Agence */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Freelance vs Agence
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Le choix entre un freelance et une agence impacte directement le tarif
              de votre prestation SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Freelance */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-xl">Freelance</h3>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">
                    350 - 700€
                  </span>
                  <p className="text-gray-500 text-sm">TJM moyen</p>
                </div>
              </div>
              <ul className="space-y-3">
                {["Proximité relationnelle", "Tarifs plus accessibles", "Flexibilité", "Interlocuteur unique"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <svg
                        className="w-5 h-5 text-gray-500 flex-shrink-0"
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
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Agence */}
            <div className="relative bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-2xl p-8 border border-orange-500/30">
              <div className="absolute -top-3 left-6">
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  SLASHR
                </span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-xl">Agence</h3>
                <div className="text-right">
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    550 - 900€
                  </span>
                  <p className="text-gray-500 text-sm">TJM moyen</p>
                </div>
              </div>
              <ul className="space-y-3">
                {["Équipe pluridisciplinaire", "Outils professionnels", "Expérience multi-secteurs", "Support continu", "Méthodologie éprouvée"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <svg
                        className="w-5 h-5 text-orange-500 flex-shrink-0"
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
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title="Questions fréquentes sur nos tarifs" faqs={faqItems} />

      {/* Why Slashr */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pourquoi choisir Slashr ?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Nous proposons des devis transparents et adaptés à vos besoins.
            Pas de surprise, pas de frais cachés.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Transparence totale</h3>
              <p className="text-gray-400 text-sm">
                Devis détaillé avec répartition claire des coûts et du temps passé.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Focus ROI</h3>
              <p className="text-gray-400 text-sm">
                Chaque euro investi est tracké pour mesurer le retour sur investissement.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Réponse rapide</h3>
              <p className="text-gray-400 text-sm">
                Devis envoyé sous 24h après analyse de votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Découvrez nos prestations
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            Explorez nos différentes offres pour trouver celle qui correspond à vos besoins.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "SEO E-commerce", href: "/seo/prestations/ecommerce" },
              { name: "SEO Local", href: "/seo/prestations/local" },
              { name: "SEO International", href: "/seo/prestations/international" },
              { name: "Migration SEO", href: "/seo/prestations/refonte-migration" },
              { name: "SEO Prestashop", href: "/seo/prestations/prestashop" },
              { name: "SEO Shopify", href: "/seo/prestations/shopify" },
              { name: "SEO WooCommerce", href: "/seo/prestations/woocommerce" },
              { name: "Google Ads", href: "/ads/prestations/google-ads" },
            ].map((prestation) => (
              <Link
                key={prestation.name}
                href={prestation.href}
                className="px-6 py-3 rounded-full text-sm font-medium bg-[#252525] text-gray-300 hover:text-white hover:bg-[#2a2a2a] border border-gray-700 hover:border-orange-500/50 transition-all"
              >
                {prestation.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
