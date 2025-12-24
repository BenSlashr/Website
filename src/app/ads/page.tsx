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
  title: 'Agence Ads à Lille | Publicité Digitale | Slashr',
  description:
    'Agence Ads à Lille spécialisée en publicité digitale. Création et gestion de campagnes publicitaires pour maximiser votre retour sur investissement.',
  alternates: {
    canonical: '/ads',
  },
  openGraph: {
    title: 'Agence Ads à Lille | Publicité Digitale | Slashr',
    description:
      'Agence Ads à Lille : expertise en publicité digitale pour booster la visibilité de votre marque et atteindre vos objectifs de croissance.',
    type: 'website',
  },
};

const adsPillars = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Google Ads',
    description: 'Campagnes Google Ads (Search, Shopping, Display) et Bing Ads pour capter une audience intentionniste sur les moteurs de recherche.',
    href: '/ads/sea',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Social Ads',
    description: 'Stratégie Social Ads personnalisée sur Facebook Ads, LinkedIn Ads et TikTok pour toucher votre audience sur les réseaux sociaux.',
    href: '/ads/social',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Optimisation & Performance',
    description: 'Mesure des performances, optimisation du taux de conversion et reporting pour maximiser votre retour sur investissement.',
    href: '/ads/sea',
  },
];

const methodologySteps = [
  {
    number: 1,
    title: 'Audit & Stratégie',
    description: 'Analyse de votre marché, de vos concurrents et définition de vos objectifs. Création d\'une stratégie marketing digitale sur mesure.',
  },
  {
    number: 2,
    title: 'Setup technique',
    description: 'Configuration du tracking sur votre site web, des conversions et des audiences pour un pilotage optimal de vos campagnes.',
  },
  {
    number: 3,
    title: 'Création des campagnes',
    description: 'Structure de compte optimisée, création des annonces et visuels publicitaires adaptés à chaque plateforme.',
  },
  {
    number: 4,
    title: 'Gestion & Optimisation',
    description: 'Accompagnement continu, A/B testing et optimisation des performances pour atteindre vos objectifs de croissance.',
  },
];

const faqs = [
  {
    question: 'Quelle est la différence entre Google Ads et Social Ads ?',
    answer: `Google Ads (anciennement Google Adwords) cible des utilisateurs qui recherchent activement vos produits ou services. C'est une audience intentionniste avec un fort potentiel de conversion.

Les Social Ads (Facebook Ads, LinkedIn Ads, TikTok Ads) permettent de cibler des audiences sur les réseaux sociaux basées sur leurs centres d'intérêt, données démographiques et comportements. C'est idéal pour la visibilité de marque et la génération de leads.`,
  },
  {
    question: 'Quel budget pour des campagnes publicitaires efficaces ?',
    answer: `Le budget dépend de vos objectifs et de votre secteur. Pour démarrer, nous recommandons :

• Google Ads : à partir de 1000€/mois de budget média
• Social Ads (Facebook, LinkedIn) : à partir de 500€/mois
• Stratégie multi-plateformes : à partir de 2000€/mois

Cela permet d'avoir suffisamment de données pour optimiser les campagnes et mesurer les performances.`,
  },
  {
    question: 'Comment mesurez-vous les performances des campagnes ?',
    answer: `Notre équipe met en place un tracking complet pour mesurer chaque euro investi :

• Google Tag Manager et GA4 sur votre site web
• Suivi des conversions (leads, ventes, appels)
• Attribution multi-touch pour comprendre le parcours client
• Reporting mensuel avec KPIs clairs : CPA, ROAS, taux de conversion

Nous optimisons en continu pour améliorer votre retour sur investissement.`,
  },
  {
    question: 'Quelles plateformes publicitaires gérez-vous ?',
    answer: `Notre agence Ads à Lille dispose d'une expertise complète sur les principales plateformes :

• Google Ads (Search, Shopping, Display, YouTube, Performance Max)
• Bing Ads (Microsoft Advertising)
• Facebook Ads & Instagram Ads (Meta)
• LinkedIn Ads (B2B et recrutement)
• TikTok Ads

Nous définissons ensemble la stratégie adaptée à vos objectifs et votre audience cible.`,
  },
  {
    question: 'Travaillez-vous avec des entreprises e-commerce ?',
    answer: 'Oui ! Nous accompagnons de nombreuses entreprises e-commerce sur Google Shopping, Performance Max, et les catalogues produits Meta. Notre expertise nous permet d\'optimiser vos campagnes publicitaires pour maximiser le ROAS et la croissance de vos ventes.',
  },
  {
    question: 'Pouvez-vous reprendre la gestion de campagnes existantes ?',
    answer: 'Absolument. Notre collaboration commence toujours par un audit de vos campagnes existantes pour identifier les axes d\'amélioration. Nous reprenons ensuite la gestion en douceur pour éviter toute perte de performance et optimiser progressivement vos résultats.',
  },
  {
    question: 'Êtes-vous certifiés Google Partner ?',
    answer: 'Oui, notre agence dispose de consultants certifiés Google Ads. Cette certification atteste de notre expertise dans la gestion et l\'optimisation des campagnes Google Ads pour les entreprises.',
  },
];

const expertises = [
  { name: 'Google Ads', href: '/ads/sea/google-ads' },
  { name: 'SEA', href: '/ads/sea' },
  { name: 'Social Ads', href: '/ads/social' },
  { name: 'Facebook Ads', href: '/ads/social' },
  { name: 'LinkedIn Ads', href: '/ads/social' },
];

const adsBenefits: Benefit[] = [
  {
    icon: 'target',
    title: 'Ciblage ultra-précis',
    description: 'Touchez exactement les personnes qui recherchent vos produits ou services. Intention d\'achat, centres d\'intérêt, données démographiques : vous atteignez la bonne audience au bon moment.',
    size: 'large',
    highlight: 'ultra-précis',
  },
  {
    icon: 'zap',
    title: 'Résultats immédiats',
    description: 'Contrairement au SEO, les campagnes publicitaires génèrent du trafic et des conversions dès leur lancement.',
    size: 'medium',
  },
  {
    icon: 'chart',
    title: 'ROI mesurable',
    description: 'Chaque euro investi est tracké. Vous savez exactement combien vous coûte un lead ou une vente.',
    size: 'medium',
  },
  {
    icon: 'shield',
    title: 'Budget maîtrisé',
    description: 'Vous définissez vos plafonds et ne payez que pour les clics ou impressions réels. Aucune mauvaise surprise.',
    size: 'medium',
  },
  {
    icon: 'rocket',
    title: 'Scalabilité',
    description: 'Augmentez ou réduisez vos investissements publicitaires selon vos résultats et votre saisonnalité.',
    size: 'medium',
  },
  {
    icon: 'globe',
    title: 'Multi-plateformes',
    description: 'Google Ads, Facebook Ads, LinkedIn Ads, TikTok... Votre stratégie marketing couvre l\'ensemble des canaux où se trouve votre audience, sur les réseaux sociaux comme les moteurs de recherche.',
    size: 'large',
    highlight: 'Multi-plateformes',
  },
];

const vigilancePoints = [
  {
    title: 'Budget média insuffisant',
    description: 'Un budget trop faible ne permet pas d\'accumuler assez de données pour optimiser les campagnes. Mieux vaut se concentrer sur une plateforme avec un budget suffisant que disperser ses investissements.',
  },
  {
    title: 'Tracking non configuré',
    description: 'Sans tracking des conversions (GA4, pixels), impossible de mesurer le ROI et d\'optimiser les campagnes. Le setup technique est un prérequis indispensable avant tout lancement.',
  },
  {
    title: 'Landing pages non optimisées',
    description: 'Des annonces performantes qui mènent vers des pages lentes ou mal conçues gaspillent votre budget. L\'expérience post-clic est aussi importante que la publicité elle-même.',
  },
  {
    title: 'Ciblage trop large ou trop restreint',
    description: 'Un ciblage trop large dilue votre budget, un ciblage trop restreint limite votre volume. Trouver le bon équilibre nécessite des tests et une optimisation continue.',
  },
  {
    title: 'Absence de tests A/B',
    description: 'Se fier à une seule version d\'annonce ou de ciblage empêche l\'amélioration des performances. Les campagnes publicitaires performantes sont le fruit de tests constants.',
  },
];

// Schema.org structured data
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agence Ads à Lille',
  description: 'Agence spécialisée dans la création et la gestion de campagnes publicitaires digitales : Google Ads, Facebook Ads, LinkedIn Ads.',
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
  serviceType: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Social Ads', 'SEA'],
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
  ],
};

export default function AdsPage() {
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
        tag="Agence Ads à Lille"
        title="Boostez la visibilité de votre marque avec la publicité digitale"
        description="Google Ads, Facebook Ads, LinkedIn Ads... Notre agence à Lille crée et gère vos campagnes publicitaires pour atteindre vos objectifs de croissance. Une stratégie marketing sur mesure pour maximiser votre retour sur investissement."
      />

      {/* Logo Banner */}
      <LogoBanner />

      {/* Section Notre agence */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Notre agence
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Votre agence Google Ads et Social Ads à Lille
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Slashr est une <strong className="text-white">agence Ads à Lille</strong> spécialisée dans la création et la gestion de campagnes publicitaires digitales. Notre équipe accompagne les entreprises dans leur stratégie d&apos;acquisition sur <Link href="/ads/sea/google-ads" className="text-orange-400 hover:text-orange-300 underline">Google Ads</Link>, <Link href="/ads/social" className="text-orange-400 hover:text-orange-300 underline">Facebook Ads, LinkedIn Ads</Link> et les autres plateformes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre expertise en marketing digital nous permet de définir une <Link href="/ads/social" className="text-orange-400 hover:text-orange-300 underline">stratégie Social Ads</Link> personnalisée pour chaque projet, avec un objectif clair : <strong className="text-white">maximiser votre retour sur investissement</strong> et générer des leads qualifiés. Nous maîtrisons également le <Link href="/ads/sea" className="text-orange-400 hover:text-orange-300 underline">référencement payant (SEA)</Link> pour capter les recherches intentionnistes.
              </p>
            </div>

            <div className="bg-[#252525] rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-4">Pourquoi choisir notre agence ?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expertise Google Ads & Social Ads
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

      {/* Section Les piliers du Paid Media */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Nos expertises
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Nos leviers publicitaires
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {adsPillars.map((pillar, index) => (
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
            Les plateformes que nous maîtrisons
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Google Ads</h3>
              <p className="text-gray-400 text-sm">Search, Shopping, Display, YouTube, Performance Max. Campagnes Google Ads optimisées pour la conversion.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Facebook Ads</h3>
              <p className="text-gray-400 text-sm">Campagnes publicitaires sur Facebook et Instagram pour toucher votre audience sur les réseaux sociaux.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">LinkedIn Ads</h3>
              <p className="text-gray-400 text-sm">Publicité B2B pour cibler les décideurs et professionnels. Idéal pour la génération de leads qualifiés.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Bing Ads</h3>
              <p className="text-gray-400 text-sm">Microsoft Advertising pour compléter votre stratégie SEA et toucher une audience complémentaire.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">TikTok Ads</h3>
              <p className="text-gray-400 text-sm">Formats vidéo engageants pour la notoriété et la visibilité auprès des audiences jeunes.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Remarketing</h3>
              <p className="text-gray-400 text-sm">Reciblage cross-plateforme pour convertir les visiteurs de votre site web en clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages - Bento Grid */}
      <BenefitsSection
        title="Les avantages de la publicité digitale"
        subtitle="Pourquoi intégrer les Ads dans votre stratégie marketing"
        benefits={adsBenefits}
      />

      {/* Points de vigilance - Glass design */}
      <VigilanceSection
        title="Les points de vigilance en publicité digitale"
        points={vigilancePoints}
      />

      {/* Témoignages */}
      <Testimonials />

      {/* Méthodologie */}
      <MethodologySection
        title="Comment se déroule une collaboration ?"
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
      <FAQ title="Questions fréquentes sur notre agence Ads à Lille" faqs={faqs} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Ads' },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}
