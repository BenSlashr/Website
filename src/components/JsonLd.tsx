interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType: string;
  };
  sameAs?: string[];
}

interface LocalBusinessSchemaProps extends OrganizationSchemaProps {
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}

export function OrganizationSchema({
  name = "SLASHR",
  url = "https://agence-slashr.fr",
  logo = "https://agence-slashr.fr/logo.png",
  description = "Agence SEO & Search Marketing à Lille. L'agence des marques qui veulent gagner la bataille de l'attention.",
  address = {
    streetAddress: "165 Av. de Bretagne, Place de Saintignon, Bâtiment Lafont",
    addressLocality: "Lille",
    postalCode: "59000",
    addressCountry: "FR",
  },
  contactPoint = {
    email: "contact@slashr.fr",
    contactType: "customer service",
  },
  sameAs = [
    "https://www.linkedin.com/company/slashr-agency",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({
  name = "SLASHR - Agence SEO Lille",
  url = "https://agence-slashr.fr",
  logo = "https://agence-slashr.fr/logo.png",
  description = "Agence SEO & Search Marketing à Lille. Référencement naturel, SEA, GEO et accompagnement digital pour les marques ambitieuses.",
  address = {
    streetAddress: "165 Av. de Bretagne, Place de Saintignon, Bâtiment Lafont, Euratechnologies",
    addressLocality: "Lille",
    postalCode: "59000",
    addressCountry: "FR",
  },
  geo = {
    latitude: 50.6292,
    longitude: 3.0573,
  },
  contactPoint = {
    email: "contact@slashr.fr",
    contactType: "customer service",
  },
  openingHours = ["Mo-Fr 09:00-18:00"],
  priceRange = "€€€",
  sameAs = [
    "https://www.linkedin.com/company/slashr-agency",
  ],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name,
    url,
    logo,
    image: logo,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0].split("-").map((day) => {
        const days: Record<string, string> = {
          Mo: "Monday",
          Tu: "Tuesday",
          We: "Wednesday",
          Th: "Thursday",
          Fr: "Friday",
          Sa: "Saturday",
          Su: "Sunday",
        };
        return days[day] || day;
      }),
      opens: hours.split(" ")[1]?.split("-")[0],
      closes: hours.split(" ")[1]?.split("-")[1],
    })),
    priceRange,
    sameAs,
    areaServed: [
      {
        "@type": "City",
        name: "Lille",
      },
      {
        "@type": "Country",
        name: "France",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services SEO & Search Marketing",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audit SEO",
            description: "Audit technique, stratégique et de popularité",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accompagnement SEO",
            description: "Suivi et mise en œuvre des recommandations SEO",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GEO - Generative Engine Optimization",
            description: "Optimisation pour les moteurs de recherche IA",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher = {
    name: "SLASHR",
    logo: "https://agence-slashr.fr/logo.png",
  },
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      logo: {
        "@type": "ImageObject",
        url: publisher.logo,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
