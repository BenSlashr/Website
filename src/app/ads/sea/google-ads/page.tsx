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
  title: 'Agence Google Ads à Lille | Certifiée Google Partner | Slashr',
  description:
    'Agence Google Ads à Lille certifiée Google Partner. Gestion de campagnes Google Ads : Search, Shopping, Performance Max, Display. Optimisation et stratégie pour atteindre vos objectifs de croissance.',
  alternates: {
    canonical: '/ads/sea/google-ads',
  },
  openGraph: {
    title: 'Agence Google Ads à Lille | Certifiée Google Partner | Slashr',
    description:
      'Agence Google Ads à Lille : expertise en gestion de campagnes publicitaires pour maximiser votre retour sur investissement et générer des conversions.',
    type: 'website',
  },
};

const googleAdsPillars = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Campagnes Search',
    description: 'Annonces textuelles sur les résultats de recherche Google. Ciblage par mots clés pour capter une audience qualifiée avec une forte intention d\'achat.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Google Shopping',
    description: 'Campagnes Shopping pour les entreprises e-commerce. Annonces produits avec visuels et prix pour maximiser les conversions et le ROAS.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance Max',
    description: 'Campagnes Google Ads automatisées par l\'IA. Diffusion sur tous les canaux Google pour maximiser les résultats selon vos objectifs.',
  },
];

const methodologySteps = [
  {
    number: 1,
    title: 'Audit & Stratégie',
    description: 'Analyse de votre marché, de vos besoins et définition de la stratégie Google Ads. Étude des opportunités et du positionnement concurrentiel.',
  },
  {
    number: 2,
    title: 'Setup technique',
    description: 'Configuration du tracking sur votre site web (GA4, GTM), création des audiences et paramétrage des conversions pour une mesure efficace.',
  },
  {
    number: 3,
    title: 'Création des campagnes',
    description: 'Structure de compte optimisée, recherche de mots clés, rédaction des annonces et configuration des leviers d\'enchères.',
  },
  {
    number: 4,
    title: 'Gestion & Optimisation',
    description: 'Accompagnement continu, A/B testing, optimisation du Quality Score et ajustement des stratégies pour atteindre vos objectifs de croissance.',
  },
];

const faqs = [
  {
    question: 'Pourquoi choisir notre agence Google Ads à Lille ?',
    answer: `Notre agence Google Ads à Lille est certifiée Google Partner, ce qui garantit :

• Des experts formés et certifiés par Google
• Un accès aux dernières fonctionnalités en bêta
• Un support prioritaire de Google
• Le respect des bonnes pratiques recommandées

Cette certification atteste de notre expertise dans la gestion de campagnes Google Ads et de la qualité des résultats obtenus pour nos partenaires.`,
  },
  {
    question: 'Quel budget pour lancer une campagne Google Ads ?',
    answer: `Le budget dépend de votre secteur, de vos objectifs et du niveau de concurrence sur vos mots clés. Pour des résultats significatifs :

• Secteur peu concurrentiel : 500-1500€/mois
• Secteur concurrentiel : 1500-5000€/mois
• E-commerce : 2000-10000€/mois

Notre agence recommande de commencer avec un budget test puis d'augmenter progressivement selon les résultats et le retour sur investissement.`,
  },
  {
    question: 'Qu\'est-ce que le Quality Score et pourquoi est-il important ?',
    answer: `Le Quality Score est une note de 1 à 10 attribuée par Google à chaque mot clé. Il influence directement vos coûts par clic et votre positionnement.

Un QS élevé signifie :
• Des CPC plus bas pour votre budget
• De meilleures positions pour vos annonces
• Plus de clics et de conversions

Notre équipe optimise systématiquement le Quality Score de vos campagnes Google Ads pour maximiser vos performances.`,
  },
  {
    question: 'Quelle différence entre Search et Performance Max ?',
    answer: `Les campagnes Search ciblent des mots clés spécifiques sur le moteur de recherche Google. Vous avez un contrôle total sur le ciblage et les annonces.

Performance Max utilise l'IA de Google pour diffuser vos annonces sur tous les canaux (Search, Shopping, Display, YouTube, Gmail, Maps) automatiquement. C'est une solution efficace pour les entreprises e-commerce et la génération de prospects qualifiés.`,
  },
  {
    question: 'Comment mesurez-vous les résultats des campagnes ?',
    answer: `Notre agence met en place un tracking complet pour mesurer chaque action :

• Google Analytics 4 (GA4) sur votre site web
• Google Tag Manager pour le suivi des conversions
• Tracking des appels, formulaires et ventes
• Reporting mensuel avec KPIs clairs : CPA, ROAS, taux de conversion

Chaque lead et chaque vente est tracké pour mesurer précisément le retour sur investissement.`,
  },
  {
    question: 'Gérez-vous aussi Bing Ads et LinkedIn Ads ?',
    answer: 'Oui, notre agence gère également les campagnes Bing Ads (Microsoft Advertising) et LinkedIn Ads. Ces plateformes sont complémentaires à Google Ads et permettent d\'étendre votre visibilité sur d\'autres supports et d\'atteindre une audience différente.',
  },
];

const expertises = [
  { name: 'SEA', href: '/ads/sea' },
  { name: 'Social Ads', href: '/ads/social' },
  { name: 'Facebook Ads', href: '/ads/social' },
  { name: 'LinkedIn Ads', href: '/ads/social' },
  { name: 'Toutes nos expertises Ads', href: '/ads' },
];

const googleAdsBenefits: Benefit[] = [
  {
    icon: 'target',
    title: 'Ciblage par mots clés',
    description: 'Touchez les utilisateurs qui recherchent activement vos produits ou services sur Google. Un ciblage précis par mots clés pour capter une audience qualifiée avec une forte intention.',
    size: 'large',
    highlight: 'mots clés',
  },
  {
    icon: 'zap',
    title: 'Résultats immédiats',
    description: 'Contrairement au SEO, vos campagnes Google Ads génèrent du trafic et des conversions dès leur lancement sur le marché.',
    size: 'medium',
  },
  {
    icon: 'chart',
    title: 'Performance mesurable',
    description: 'Tracking complet des conversions pour mesurer précisément le retour sur investissement de chaque euro de votre budget.',
    size: 'medium',
  },
  {
    icon: 'shield',
    title: 'Budget maîtrisé',
    description: 'Vous définissez vos plafonds et ne payez que pour les clics réels. Une gestion efficace de votre investissement publicitaire.',
    size: 'medium',
  },
  {
    icon: 'rocket',
    title: 'Croissance scalable',
    description: 'Augmentez vos investissements proportionnellement à vos résultats et objectifs de croissance sur le digital.',
    size: 'medium',
  },
  {
    icon: 'globe',
    title: 'Multi-formats Google',
    description: 'Search, Shopping, Display, YouTube, Performance Max : tous les leviers Google Ads pour une stratégie marketing complète et atteindre vos objectifs.',
    size: 'large',
    highlight: 'Multi-formats',
  },
];

const vigilancePoints = [
  {
    title: 'Structure de compte non optimisée',
    description: 'Une mauvaise organisation des campagnes et groupes d\'annonces dilue la pertinence et dégrade le Quality Score. La structure est le fondement de toute stratégie Google Ads performante.',
  },
  {
    title: 'Mots clés trop génériques',
    description: 'Des mots clés larges attirent du trafic non qualifié et gaspillent votre budget. L\'optimisation des correspondances et des mots clés négatifs est essentielle pour des résultats efficaces.',
  },
  {
    title: 'Pages de destination non optimisées',
    description: 'Des annonces performantes qui mènent vers des pages lentes ou non pertinentes dégradent le Quality Score et le taux de conversion. L\'expérience sur le site web est critique.',
  },
  {
    title: 'Tracking des conversions incomplet',
    description: 'Sans mesure précise des conversions, impossible d\'optimiser les campagnes Google Ads. Le setup technique est un prérequis avant tout lancement de publicité.',
  },
  {
    title: 'Absence de tests A/B sur les annonces',
    description: 'Se fier à une seule version d\'annonce limite les performances. Les campagnes publicitaires efficaces nécessitent des tests constants sur les titres et descriptions.',
  },
];

// Schema.org structured data
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agence Google Ads à Lille',
  description: 'Agence certifiée Google Partner spécialisée dans la gestion de campagnes Google Ads : Search, Shopping, Performance Max, Display et YouTube.',
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
  serviceType: ['Google Ads', 'Google Shopping', 'Performance Max', 'Display Ads', 'YouTube Ads'],
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
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Google Ads',
      item: 'https://www.slashr.fr/ads/sea/google-ads',
    },
  ],
};

export default function GoogleAdsPage() {
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
        tag="Agence Google Ads à Lille"
        title="Votre expert Google Ads certifié Google Partner"
        description="Campagnes Google Ads Search, Shopping, Performance Max et Display. Notre agence Google Ads à Lille crée et gère vos campagnes publicitaires pour atteindre vos objectifs de croissance. Une stratégie marketing sur mesure pour maximiser votre retour sur investissement."
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
            Campagnes Google Ads gérées par des experts certifiés
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Slashr est une <strong className="text-white">agence Google Ads à Lille</strong> certifiée Google Partner, spécialisée dans la création et la gestion de campagnes publicitaires sur le moteur de recherche Google. Notre équipe d&apos;experts accompagne les entreprises dans leur <Link href="/ads/sea" className="text-orange-400 hover:text-orange-300 underline">stratégie SEA</Link> pour générer des prospects qualifiés et maximiser les conversions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre expertise en marketing digital nous permet de définir une <strong className="text-white">stratégie Google Ads personnalisée</strong> selon vos objectifs et vos besoins. Nous proposons également des campagnes <Link href="/ads/social" className="text-orange-400 hover:text-orange-300 underline">Social Ads</Link> pour une <Link href="/ads" className="text-orange-400 hover:text-orange-300 underline">stratégie publicitaire globale</Link>.
              </p>
            </div>

            <div className="bg-[#252525] rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-4">Pourquoi choisir notre agence Google Ads ?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Agence certifiée Google Partner
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
                  Mesure précise du ROI et reporting transparent
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Types de campagnes */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Nos expertises
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Types de campagnes Google Ads
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {googleAdsPillars.map((pillar, index) => (
              <div
                key={index}
                className="group text-center bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-orange-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formats Google Ads */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Tous les formats de publicité Google Ads
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Search Ads</h3>
              <p className="text-gray-400 text-sm">Annonces textuelles sur les résultats de recherche Google. Le levier principal pour capter une audience avec intention d&apos;achat.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Google Shopping</h3>
              <p className="text-gray-400 text-sm">Campagnes Shopping pour les entreprises e-commerce. Visuels produits optimisés pour maximiser les conversions.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Performance Max</h3>
              <p className="text-gray-400 text-sm">Campagnes IA Google diffusées sur tous les supports : Search, Display, YouTube, Gmail, Maps, Discover.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Display Ads</h3>
              <p className="text-gray-400 text-sm">Bannières visuelles sur le réseau de sites partenaires Google pour la visibilité et le remarketing.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">YouTube Ads</h3>
              <p className="text-gray-400 text-sm">Annonces vidéo pour la communication de marque et la génération de leads via la plateforme YouTube.</p>
            </div>
            <div className="bg-[#252525] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Remarketing</h3>
              <p className="text-gray-400 text-sm">Reciblage des visiteurs de votre site web pour maximiser les opportunités de conversion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Google Ads */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Pourquoi investir dans Google Ads ?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-5xl font-bold text-orange-400 mb-2">90%</p>
              <p className="text-gray-400 text-sm">Part de marché Google en France</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-400 mb-2">8.5Mds</p>
              <p className="text-gray-400 text-sm">Recherches Google par jour</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-400 mb-2">65%</p>
              <p className="text-gray-400 text-sm">Clics sur les 3 premiers résultats</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-400 mb-2">200%</p>
              <p className="text-gray-400 text-sm">ROI moyen des campagnes Google Ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages - Bento Grid */}
      <BenefitsSection
        title="Les avantages de Google Ads"
        subtitle="Pourquoi intégrer Google Ads dans votre stratégie marketing digital"
        benefits={googleAdsBenefits}
      />

      {/* Points de vigilance - Glass design */}
      <VigilanceSection
        title="Les points de vigilance sur Google Ads"
        points={vigilancePoints}
      />

      {/* Témoignages */}
      <Testimonials />

      {/* Méthodologie */}
      <MethodologySection
        title="Comment se déroule une collaboration Google Ads ?"
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
      <FAQ title="Questions fréquentes sur notre agence Google Ads à Lille" faqs={faqs} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Ads', href: '/ads' },
          { label: 'SEA', href: '/ads/sea' },
          { label: 'Google Ads' },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}
