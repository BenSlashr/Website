import { Metadata } from 'next';
import Link from 'next/link';
import LogoBanner from '@/components/LogoBanner';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ServiceHero,
  MethodologySection,
  BenefitsSection,
  VigilanceSection,
} from '@/components/services';
import { Benefit } from '@/lib/prestationsWP';

export const metadata: Metadata = {
  title: 'Agence SEA à Lille | Référencement Payant | Slashr',
  description:
    'Agence SEA à Lille spécialisée dans la gestion de campagnes Google Ads et Bing Ads. Search, Shopping, Performance Max : optimisation et stratégie pour atteindre vos objectifs de croissance.',
  alternates: {
    canonical: '/ads/sea',
  },
  openGraph: {
    title: 'Agence SEA à Lille | Référencement Payant | Slashr',
    description:
      'Agence SEA à Lille : expertise Google Ads et Bing Ads pour maximiser votre retour sur investissement et générer des leads qualifiés.',
    type: 'website',
  },
};

const seaPillars = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Search Ads',
    description: 'Annonces textuelles sur Google et Bing pour capter les recherches intentionnistes. Campagnes Google Ads optimisées pour la conversion.',
    href: '/ads/sea/google-ads',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Shopping & Performance Max',
    description: 'Campagnes Shopping et Performance Max pour les entreprises e-commerce. Catalogue produits optimisé pour maximiser le ROAS.',
    href: '/ads/sea/google-ads',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Optimisation & Mesure',
    description: 'Tracking des performances, optimisation du Quality Score et des enchères. Reporting transparent pour mesurer votre retour sur investissement.',
    href: '/ads/sea/google-ads',
  },
];

const methodologySteps = [
  {
    number: 1,
    title: 'Audit & Stratégie',
    description: 'Analyse de votre marché, de vos concurrents et définition de vos objectifs. Création d\'une stratégie SEA sur mesure pour votre entreprise.',
  },
  {
    number: 2,
    title: 'Setup technique',
    description: 'Configuration du tracking sur votre site web (GA4, conversions), création de la structure de compte et des audiences.',
  },
  {
    number: 3,
    title: 'Création des campagnes',
    description: 'Structure optimisée, rédaction d\'annonces percutantes avec extensions, sélection des mots-clés et paramétrage des enchères.',
  },
  {
    number: 4,
    title: 'Gestion & Optimisation',
    description: 'Accompagnement continu, A/B testing, optimisation du Quality Score et ajustement des stratégies pour atteindre vos objectifs de croissance.',
  },
];

const faqs = [
  {
    question: 'Qu\'est-ce que le SEA et pourquoi investir ?',
    answer: `Le SEA (Search Engine Advertising) désigne la publicité sur les moteurs de recherche comme Google et Bing. Ce sont les annonces qui apparaissent en haut des résultats de recherche.

Contrairement au SEO (référencement naturel), le SEA permet une visibilité immédiate sur vos mots-clés stratégiques. C'est un levier essentiel pour les entreprises qui souhaitent générer rapidement des leads et des ventes.`,
  },
  {
    question: 'Quelle est la différence entre Google Ads et Bing Ads ?',
    answer: `Google Ads est la plateforme dominante avec environ 90% de part de marché en France. Bing Ads (Microsoft Advertising) touche une audience plus restreinte mais souvent plus qualifiée (CSP+, B2B).

Notre agence SEA à Lille recommande généralement de commencer par des campagnes Google Ads, puis d'étendre sur Bing Ads pour maximiser votre visibilité et votre retour sur investissement.`,
  },
  {
    question: 'Quel budget pour des campagnes SEA efficaces ?',
    answer: `Le budget dépend de vos objectifs et de la concurrence sur vos mots-clés. Pour des résultats significatifs, notre équipe recommande :

• Campagnes Search : à partir de 1000€/mois de budget média
• Campagnes Shopping : à partir de 1500€/mois pour les e-commerces
• Stratégie multi-campagnes : à partir de 2500€/mois

Ces budgets permettent d'accumuler suffisamment de données pour optimiser les performances et mesurer le ROI.`,
  },
  {
    question: 'Qu\'est-ce que Performance Max ?',
    answer: 'Performance Max est le type de campagne Google Ads le plus avancé, utilisant l\'IA pour diffuser vos annonces sur tous les canaux Google : Search, Display, YouTube, Gmail, Maps et Discover. Notre expertise permet d\'optimiser ces campagnes publicitaires pour maximiser votre taux de conversion.',
  },
  {
    question: 'Comment améliorer le Quality Score de mes annonces ?',
    answer: `Le Quality Score impacte directement vos CPC et positions. Il dépend de trois facteurs :

• La pertinence des annonces par rapport aux mots-clés
• L'expérience sur la page de destination (site web optimisé)
• Le taux de clics attendu (CTR)

Notre agence optimise ces trois leviers pour réduire vos coûts et améliorer les performances de vos campagnes Google Ads.`,
  },
  {
    question: 'Êtes-vous certifiés Google Partner ?',
    answer: 'Oui, notre agence SEA à Lille dispose de consultants certifiés Google Ads. Cette certification Google Partner atteste de notre expertise dans la création et la gestion de campagnes publicitaires sur les réseaux de recherche.',
  },
];

const expertises = [
  { name: 'Google Ads', href: '/ads/sea/google-ads' },
  { name: 'Social Ads', href: '/ads/social' },
  { name: 'Facebook Ads', href: '/ads/social' },
  { name: 'LinkedIn Ads', href: '/ads/social' },
  { name: 'Toutes nos expertises Ads', href: '/ads' },
];

const seaBenefits: Benefit[] = [
  {
    icon: 'target',
    title: 'Audience intentionniste',
    description: 'Touchez les utilisateurs qui recherchent activement vos produits ou services sur Google et Bing. Une audience à fort potentiel de conversion pour votre entreprise.',
    size: 'large',
    highlight: 'intentionniste',
  },
  {
    icon: 'zap',
    title: 'Visibilité immédiate',
    description: 'Contrairement au SEO, vos campagnes Google Ads génèrent du trafic et des leads dès leur lancement.',
    size: 'medium',
  },
  {
    icon: 'chart',
    title: 'Performances mesurables',
    description: 'Tracking complet des conversions pour mesurer précisément le retour sur investissement de chaque euro.',
    size: 'medium',
  },
  {
    icon: 'shield',
    title: 'Budget 100% maîtrisé',
    description: 'Vous définissez vos plafonds quotidiens et ne payez que pour les clics réels. Aucune mauvaise surprise.',
    size: 'medium',
  },
  {
    icon: 'rocket',
    title: 'Croissance scalable',
    description: 'Augmentez vos investissements publicitaires proportionnellement à vos résultats et objectifs de croissance.',
    size: 'medium',
  },
  {
    icon: 'globe',
    title: 'Multi-plateformes Search',
    description: 'Google Ads et Bing Ads pour couvrir l\'ensemble des moteurs de recherche. Search, Shopping, Display, YouTube : une stratégie digitale complète.',
    size: 'large',
    highlight: 'Multi-plateformes',
  },
];

const vigilancePoints = [
  {
    title: 'Structure de compte mal organisée',
    description: 'Une mauvaise organisation des campagnes et groupes d\'annonces dilue la pertinence et dégrade le Quality Score. La structure est le fondement de toute stratégie SEA performante.',
  },
  {
    title: 'Mots-clés trop génériques',
    description: 'Des mots-clés larges attirent du trafic non qualifié et gaspillent votre budget. L\'optimisation des correspondances et des mots-clés négatifs est essentielle.',
  },
  {
    title: 'Pages de destination non optimisées',
    description: 'Des annonces performantes qui mènent vers des pages lentes ou non pertinentes dégradent le Quality Score et le taux de conversion. L\'expérience sur le site web est critique.',
  },
  {
    title: 'Tracking incomplet',
    description: 'Sans mesure précise des conversions, impossible d\'optimiser les campagnes Google Ads. Le setup technique (GA4, pixels) est un prérequis avant tout lancement.',
  },
  {
    title: 'Pas de tests A/B',
    description: 'Se fier à une seule version d\'annonce limite les performances. Les campagnes publicitaires efficaces nécessitent des tests constants sur les titres, descriptions et extensions.',
  },
];

// Schema.org structured data
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agence SEA à Lille',
  description: 'Agence spécialisée dans le référencement payant : création et gestion de campagnes Google Ads, Bing Ads, Shopping et Performance Max.',
  provider: {
    '@type': 'Organization',
    name: 'Slashr',
    url: 'https://www.slashr.fr',
    logo: 'https://www.slashr.fr/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lille',
      addressRegion: 'Hauts-de-France',
      addressCountry: 'FR',
    },
  },
  areaServed: {
    '@type': 'Place',
    name: 'Lille, Hauts-de-France',
  },
  serviceType: ['SEA', 'Google Ads', 'Bing Ads', 'Google Shopping', 'Performance Max'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer.replace(/\n/g, ' ').replace(/•/g, '-'),
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.slashr.fr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ads',
      item: 'https://www.slashr.fr/ads',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'SEA',
      item: 'https://www.slashr.fr/ads/sea',
    },
  ],
};

export default function SEAPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <ServiceHero
        tag="Agence SEA à Lille"
        title="Dominez les résultats de recherche avec Google Ads"
        description="Campagnes Google Ads, Bing Ads, Shopping et Performance Max. Notre agence SEA à Lille crée et gère vos campagnes publicitaires pour atteindre vos objectifs de croissance. Une stratégie sur mesure pour maximiser votre retour sur investissement."
      />

      {/* Logo Banner */}
      <LogoBanner />

      {/* Section Notre agence */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Notre expertise
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experts en référencement payant à Lille
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Slashr est une <strong className="text-white">agence SEA à Lille</strong> spécialisée dans la création et la gestion de campagnes sur les moteurs de recherche. Notre équipe accompagne les entreprises dans leur stratégie de référencement payant via <Link href="/ads/sea/google-ads" className="text-orange-400 hover:text-orange-300 underline">Google Ads</Link> et Bing Ads pour générer des leads qualifiés.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre expertise en marketing digital nous permet de définir une <strong className="text-white">stratégie SEA personnalisée</strong> selon vos objectifs : visibilité, acquisition de leads, e-commerce. Nous proposons également des campagnes <Link href="/ads/social" className="text-orange-400 hover:text-orange-300 underline">Social Ads</Link> pour une <Link href="/ads" className="text-orange-400 hover:text-orange-300 underline">stratégie publicitaire complète</Link>.
              </p>
            </div>

            <div className="bg-[#252525] rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-4">Pourquoi choisir notre agence SEA ?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consultants certifiés Google Partner
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Stratégie sur mesure selon vos objectifs
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Optimisation continue des performances
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reporting transparent et mesure du ROI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Les piliers SEA */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Nos expertises SEA
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Types de campagnes Google Ads
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {seaPillars.map((pillar, index) => (
              <Link
                key={index}
                href={pillar.href}
                className="group text-center bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-orange-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Plateformes */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Les plateformes SEA que nous maîtrisons
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Google Search</h3>
              <p className="text-gray-400 text-sm">Annonces textuelles sur les résultats de recherche Google. Le levier principal pour capter une audience intentionniste.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Google Shopping</h3>
              <p className="text-gray-400 text-sm">Campagnes Shopping pour les entreprises e-commerce. Catalogue produits optimisé pour maximiser les ventes.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Performance Max</h3>
              <p className="text-gray-400 text-sm">Campagnes IA Google Ads diffusées sur tous les canaux : Search, Display, YouTube, Gmail, Maps.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Bing Ads</h3>
              <p className="text-gray-400 text-sm">Microsoft Advertising pour compléter votre stratégie et toucher une audience complémentaire qualifiée.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Google Display</h3>
              <p className="text-gray-400 text-sm">Campagnes Display pour la visibilité de marque et le remarketing sur les sites partenaires Google.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">YouTube Ads</h3>
              <p className="text-gray-400 text-sm">Annonces vidéo pour la communication de marque et la génération de leads via YouTube.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages - Bento Grid */}
      <BenefitsSection
        title="Les avantages du SEA"
        subtitle="Pourquoi intégrer Google Ads dans votre stratégie digitale"
        benefits={seaBenefits}
      />

      {/* Points de vigilance - Glass design */}
      <VigilanceSection
        title="Les points de vigilance en SEA"
        points={vigilancePoints}
      />

      {/* Témoignages */}
      <Testimonials />

      {/* Méthodologie */}
      <MethodologySection
        title="Comment se déroule une collaboration SEA ?"
        steps={methodologySteps}
      />

      {/* Expertises */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Nos expertises Ads
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {expertises.map((expertise) => (
              <Link
                key={expertise.name}
                href={expertise.href}
                className="bg-[#252525] hover:bg-[#2a2a2a] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors hover:text-orange-400"
              >
                {expertise.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ title="Questions fréquentes sur notre agence SEA à Lille" faqs={faqs} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Ads', href: '/ads' },
          { label: 'SEA' },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}
