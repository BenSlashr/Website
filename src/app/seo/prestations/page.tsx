import { Metadata } from "next";
import Link from "next/link";
import LogoBanner from "@/components/LogoBanner";
import CTA from "@/components/CTA";
import Breadcrumb from "@/components/Breadcrumb";
import { ServiceHero } from "@/components/services";
import { getSEOPrestations } from "@/lib/prestationsWP";

export const metadata: Metadata = {
  title: "Agence SEO à Lille | Prestations et Services | Slashr",
  description:
    "Agence SEO à Lille : découvrez nos prestations de référencement naturel. Audit technique, stratégie SEO, accompagnement, formation. Experts SEO certifiés.",
  alternates: {
    canonical: "/seo/prestations",
  },
  openGraph: {
    title: "Agence SEO à Lille | Prestations et Services | Slashr",
    description:
      "Agence SEO à Lille : nos prestations de référencement naturel pour améliorer votre visibilité sur Google.",
    type: "website",
  },
};

// Schema.org structured data
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agence SEO à Lille - Prestations SEO",
  description:
    "Agence SEO à Lille proposant des prestations de référencement naturel : audit technique, stratégie SEO, accompagnement et formation.",
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
  serviceType: [
    "SEO Technique",
    "Audit SEO",
    "Stratégie SEO",
    "Accompagnement SEO",
    "Formation SEO",
  ],
};

const breadcrumbSchema = {
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
  ],
};

const services = [
  {
    title: "SEO Technique",
    description:
      "Optimisation des fondations techniques de votre site pour améliorer la performance, le crawl et l'indexation.",
    icon: "code",
  },
  {
    title: "Audit Popularité",
    description:
      "Analyse de votre autorité et de votre profil de liens pour définir une stratégie de netlinking efficace.",
    icon: "link",
  },
  {
    title: "Accompagnement",
    description:
      "Support collaboratif pour votre stratégie SEO, migrations et refontes de site.",
    icon: "users",
  },
  {
    title: "Audit Stratégique",
    description:
      "Ciblage des mots-clés et optimisation de vos pages pour maximiser votre visibilité.",
    icon: "target",
  },
  {
    title: "Coaching",
    description:
      "Accompagnement opérationnel pour monter en compétences et avancer concrètement.",
    icon: "rocket",
  },
  {
    title: "Formation",
    description:
      "Sessions de formation pour rendre vos équipes autonomes sur le SEO.",
    icon: "graduation",
  },
];

function getIcon(type: string) {
  switch (type) {
    case "code":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
    case "link":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "target":
      return (
        <svg
          className="w-6 h-6"
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
      );
    case "rocket":
      return (
        <svg
          className="w-6 h-6"
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
      );
    case "graduation":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function SEOPrestationsPage() {
  const prestations = getSEOPrestations();

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <ServiceHero
        tag="Agence SEO à Lille"
        title="Vos experts SEO pour booster votre visibilité"
        description="Agence SEO à Lille : découvrez nos prestations de référencement naturel. Audit, accompagnement, formation : nous adaptons notre offre à vos besoins pour améliorer votre positionnement sur Google."
      />

      {/* Logo Banner */}
      <LogoBanner />

      {/* Services Overview */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 mb-6">
              Nos services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Une approche sur-mesure du SEO
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nous proposons des prestations one-shot (audits, recherche de
              mots-clés) et un accompagnement SEO continu adapté à vos enjeux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#252525] rounded-2xl p-8 hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations List */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 mb-6">
              Expertises
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos expertises SEO
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explorez nos différentes spécialisations pour trouver
              l&apos;accompagnement adapté à votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prestations.map((prestation) => (
              <Link
                key={prestation.slug}
                href={`/seo/prestations/${prestation.slug}`}
                className="group bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#202020] transition-all border border-transparent hover:border-gray-700"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full text-sm text-orange-400 mb-4">
                      {prestation.tag}
                    </span>
                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-orange-400 transition-colors">
                      {prestation.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {prestation.heroDescription}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all ml-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Tarification sur-mesure
                </h2>
                <p className="text-gray-300 mb-6">
                  Nous travaillons au TJM (taux journalier moyen) adapté à
                  chaque client plutôt qu&apos;avec des forfaits figés. Cette
                  approche nous permet de nous adapter précisément à vos
                  besoins.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
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
                    Audits : 500€ - 2 500€
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
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
                    Accompagnement mensuel : 500€ - 5 000€+
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
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
                    Engagement : 6-12 mois minimum
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-[#1a1a1a] rounded-2xl p-8">
                  <p className="text-gray-400 text-sm mb-2">
                    Premiers résultats
                  </p>
                  <p className="text-4xl font-bold text-white mb-2">3-6 mois</p>
                  <p className="text-gray-500 text-sm">
                    Résultats significatifs : 6-12 mois
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "SEO", href: "/seo" },
          { label: "Prestations" },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}
