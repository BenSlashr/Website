import { Metadata } from "next";
import Link from "next/link";
import { prestationsData as prestations } from "@/lib/prestationsWP";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";
import { ServiceHero } from "@/components/services";
import Breadcrumb from "@/components/Breadcrumb";

// Schema.org for ItemList
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nos Expertises SEO & Search Marketing",
  description:
    "Découvrez toutes nos expertises en SEO et Search Marketing : audit, stratégie, SEO technique, contenu, netlinking, SEO local, e-commerce et international.",
  url: "https://www.slashr.fr/prestations",
  numberOfItems: prestations.length,
  itemListElement: prestations.map((prestation, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: prestation.title,
    url: `https://www.slashr.fr/prestations/${prestation.slug}`,
  })),
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
      name: "Prestations",
      item: "https://www.slashr.fr/prestations",
    },
  ],
};

export const metadata: Metadata = {
  title: "Nos Expertises SEO & Search Marketing",
  description:
    "Découvrez toutes nos expertises en SEO et Search Marketing : audit, stratégie, SEO technique, contenu, netlinking, SEO local, e-commerce et international.",
  alternates: {
    canonical: "/prestations",
  },
};

export default function PrestationsPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section with Animation */}
      <ServiceHero
        title="Des experts à votre service"
        description="De l'audit à l'exécution, nous vous accompagnons sur tous les leviers du Search Marketing."
      />

      {/* Prestations Grid */}
      <section className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((prestation) => (
              <Link
                key={prestation.slug}
                href={`/prestations/${prestation.slug}`}
                className="group bg-[#2C2E34] rounded-2xl p-6 hover:bg-[#2C2E34] transition-all duration-300 border border-transparent hover:border-gray-700"
              >
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#E74601] transition-colors">
                  {prestation.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {prestation.metaDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[#E74601] group-hover:gap-3 transition-all">
                  En savoir plus
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fil d'Ariane */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Prestations' },
        ]}
      />

      <CTA />
      <Newsletter />
    </>
  );
}
