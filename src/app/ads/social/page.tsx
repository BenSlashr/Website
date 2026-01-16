import { Metadata } from 'next';
import Link from 'next/link';
import LogoBanner from '@/components/LogoBanner';
import CTA from '@/components/CTA';
import Newsletter from '@/components/Newsletter';
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
  title: 'Agence Social Ads à Lille | Réseaux Sociaux | Slashr',
  description:
    'Agence Social Ads à Lille spécialisée dans la création et gestion de campagnes publicitaires sur les réseaux sociaux. Meta Ads, LinkedIn Ads, TikTok Ads : stratégie social media sur mesure.',
  alternates: {
    canonical: '/ads/social',
  },
  openGraph: {
    title: 'Agence Social Ads à Lille | Réseaux Sociaux | Slashr',
    description:
      'Agence Social Ads à Lille : experts en campagnes publicitaires sur les réseaux sociaux pour booster votre visibilité et générer des leads qualifiés.',
    type: 'website',
  },
};

const socialPlatforms = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    name: 'Meta Ads',
    platforms: 'Facebook & Instagram',
    description: 'Touchez 40 millions d\'utilisateurs en France avec des formats variés : image, vidéo, carrousel, stories. Campagnes de notoriété, conversion et leads.',
    href: '/ads/social/meta-ads',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    name: 'LinkedIn Ads',
    platforms: 'LinkedIn',
    description: 'Ciblez les professionnels par fonction, secteur, entreprise. La plateforme idéale pour le B2B et la génération de leads qualifiés.',
    href: '/ads/social/linkedin-ads',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    name: 'TikTok Ads',
    platforms: 'TikTok',
    description: 'Touchez la Gen Z et les Millennials avec des formats vidéo natifs et engageants. Création de contenu viral et performances mesurables.',
    href: '/ads/social/tiktok-ads',
  },
];

const methodologySteps = [
  {
    number: 1,
    title: 'Audit & Stratégie Social Ads',
    description: 'Analyse de votre audience cible, définition des objectifs marketing et choix des plateformes adaptées à votre marque.',
  },
  {
    number: 2,
    title: 'Setup & Tracking',
    description: 'Configuration des pixels, API Conversions et audiences personnalisées pour une mesure précise des performances.',
  },
  {
    number: 3,
    title: 'Création des campagnes',
    description: 'Production du contenu publicitaire, rédaction des textes et paramétrage des ciblages sur les réseaux sociaux.',
  },
  {
    number: 4,
    title: 'Optimisation & Scaling',
    description: 'A/B testing, optimisation des audiences et montée en puissance progressive pour maximiser vos résultats.',
  },
];

const socialBenefits: Benefit[] = [
  {
    icon: 'target',
    title: 'Ciblage ultra-précis',
    description: 'Touchez votre audience idéale grâce aux données riches des réseaux sociaux : centres d\'intérêt, comportements, données démographiques, fonction professionnelle.',
    size: 'large',
    highlight: 'Ciblage',
  },
  {
    icon: 'user',
    title: 'Audiences personnalisées',
    description: 'Créez des audiences sur mesure à partir de vos clients existants, visiteurs du site web ou abonnés à vos réseaux sociaux.',
    size: 'medium',
  },
  {
    icon: 'rocket',
    title: 'Formats engageants',
    description: 'Vidéos, carrousels, stories, reels... Les formats natifs des réseaux sociaux permettent de créer du contenu publicitaire qui capte l\'attention.',
    size: 'medium',
  },
  {
    icon: 'chart',
    title: 'Mesure des performances',
    description: 'Suivi précis des conversions, analyse des résultats et optimisation continue pour atteindre vos objectifs de leads et de visibilité.',
    size: 'medium',
  },
  {
    icon: 'zap',
    title: 'Remarketing puissant',
    description: 'Reciblez les visiteurs de votre site, les paniers abandonnés, les leads non convertis pour maximiser vos conversions.',
    size: 'medium',
  },
  {
    icon: 'globe',
    title: 'Visibilité multi-plateforme',
    description: 'Déployez vos campagnes publicitaires sur l\'ensemble des réseaux sociaux pour toucher votre audience où qu\'elle se trouve.',
    size: 'large',
    highlight: 'multi-plateforme',
  },
];

const vigilancePoints = [
  {
    title: 'Ignorer la stratégie de contenu',
    description: 'Les Social Ads ne fonctionnent pas sans un contenu de qualité. La création de visuels et vidéos adaptés aux tendances de chaque plateforme est essentielle pour capter l\'attention.',
  },
  {
    title: 'Mauvaise définition de l\'audience',
    description: 'Un ciblage trop large dilue votre budget, un ciblage trop restreint limite votre volume. L\'analyse de votre audience et des tests sont nécessaires pour trouver le bon équilibre.',
  },
  {
    title: 'Tracking mal configuré',
    description: 'Sans mesure précise des conversions via les pixels et l\'API Conversions, impossible d\'optimiser les campagnes. Le setup technique est un prérequis avant tout lancement.',
  },
  {
    title: 'Pas de tests A/B sur le contenu',
    description: 'Se fier à une seule version de visuel ou de texte limite les performances. Les campagnes social ads efficaces nécessitent des tests constants.',
  },
  {
    title: 'Négliger le social media management',
    description: 'Les Social Ads et le social media management sont complémentaires. Une page inactive ou sans avis clients crédibilise moins votre marque auprès de l\'audience ciblée.',
  },
];

const faqs = [
  {
    question: 'Quelle plateforme choisir pour mes Social Ads ?',
    answer: `Le choix dépend de votre cible, de vos objectifs et de votre stratégie marketing :

• Meta Ads (Facebook/Instagram) : large audience, B2C, e-commerce, lead generation
• LinkedIn Ads : B2B, décideurs, recrutement, services aux entreprises
• TikTok Ads : Gen Z, Millennials, notoriété, engagement, tendances

Notre agence Social Ads à Lille vous conseille sur les plateformes les plus pertinentes pour votre activité et vos objectifs de communication digitale.`,
  },
  {
    question: 'Quel budget pour une campagne Social Ads ?',
    answer: `Les budgets varient selon la plateforme et les objectifs :

• Meta Ads : à partir de 500€/mois pour tester
• LinkedIn Ads : à partir de 1500€/mois (CPC plus élevé en B2B)
• TikTok Ads : à partir de 500€/mois

Notre stratégie : commencer petit, tester différentes audiences et contenus, puis scaler les campagnes qui performent pour maximiser votre retour sur investissement.`,
  },
  {
    question: 'Qu\'est-ce que l\'API Conversions (CAPI) ?',
    answer: 'L\'API Conversions permet d\'envoyer les données de conversion directement depuis votre serveur vers les plateformes publicitaires. C\'est devenu essentiel avec les restrictions de tracking iOS pour mesurer correctement les performances de vos campagnes social ads et optimiser les résultats.',
  },
  {
    question: 'Comment ciblez-vous les audiences sur les réseaux sociaux ?',
    answer: `Nous utilisons plusieurs types d'audiences pour atteindre vos objectifs :

• Audiences personnalisées : visiteurs du site web, clients existants, engagés sur vos contenus
• Audiences similaires (Lookalike) : prospects ressemblant à vos meilleurs clients
• Ciblage par centres d'intérêt, données démographiques et comportements

L'analyse des performances et les tests A/B permettent d'affiner les audiences selon les résultats.`,
  },
  {
    question: 'Créez-vous les visuels et contenus publicitaires ?',
    answer: 'Oui, notre agence propose la création de visuels statiques, carrousels et l\'adaptation de vidéos pour vos campagnes Social Ads. Notre expertise en production de contenu nous permet de vous conseiller sur les formats et tendances qui performent le mieux sur chaque plateforme.',
  },
  {
    question: 'Quelle différence entre Social Ads et influence marketing ?',
    answer: `Les Social Ads sont de la publicité payante sur les réseaux sociaux avec un ciblage précis, un contrôle total du message et une mesure des conversions.

Le marketing d'influence consiste à collaborer avec des créateurs de contenu pour promouvoir votre marque de manière plus authentique. Ces deux stratégies sont complémentaires.

Notre agence se concentre sur les Social Ads, mais nous pouvons vous orienter vers des partenaires pour l'influence.`,
  },
];

// Schema.org structured data
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agence Social Ads à Lille',
  description: 'Agence spécialisée dans la création et gestion de campagnes publicitaires sur les réseaux sociaux : Meta Ads, LinkedIn Ads, TikTok Ads.',
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
  serviceType: ['Social Ads', 'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads', 'Social Media Marketing'],
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
      name: 'Social Ads',
      item: 'https://www.slashr.fr/ads/social',
    },
  ],
};

export default function SocialAdsPage() {
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
        title="Boostez votre visibilité sur les réseaux sociaux"
        description="Meta Ads, LinkedIn Ads, TikTok Ads... Notre agence Social Ads à Lille crée et gère vos campagnes publicitaires sur les réseaux sociaux. Une stratégie social media sur mesure pour atteindre vos objectifs de leads et de notoriété."
      />

      {/* Logo Banner */}
      <LogoBanner />

      {/* Section Notre agence */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Notre expertise
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experts en Social Ads et marketing digital
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Slashr est une <strong className="text-white">agence Social Ads à Lille</strong> spécialisée dans la création et la gestion de campagnes publicitaires sur les réseaux sociaux. Notre équipe d&apos;experts accompagne les entreprises dans leur stratégie de communication digitale pour générer des leads qualifiés et développer leur visibilité.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre expertise en marketing digital nous permet de définir une <strong className="text-white">stratégie Social Ads personnalisée</strong> selon vos objectifs : notoriété de marque, acquisition de leads, conversion e-commerce. Nous proposons également des campagnes <Link href="/ads/sea" className="text-[#E74601] hover:text-[#FF9011] underline">SEA</Link> et <Link href="/ads/sea/google-ads" className="text-[#E74601] hover:text-[#FF9011] underline">Google Ads</Link> pour une <Link href="/ads" className="text-[#E74601] hover:text-[#FF9011] underline">stratégie publicitaire complète</Link>.
              </p>
            </div>

            <div className="bg-[#2C2E34] rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-4">Pourquoi choisir notre agence Social Ads ?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E74601] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experts certifiés sur toutes les plateformes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E74601] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Création de contenu publicitaire incluse</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E74601] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mesure précise des performances et résultats</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E74601] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suivi des tendances et optimisation continue</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E74601] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accompagnement stratégique et conseil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plateformes */}
      <section className="bg-[#2C2E34] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Plateformes
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Les réseaux sociaux que nous gérons
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-8 text-center hover:bg-[#1f1f1f] transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#E74601] to-[#CE08A9] rounded-2xl flex items-center justify-center">
                  {platform.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-1">
                  {platform.name}
                </h3>
                <p className="text-[#E74601] text-sm mb-4">{platform.platforms}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <BenefitsSection
        title="Les avantages des Social Ads"
        subtitle="Une stratégie social ads bien conçue offre des résultats mesurables pour votre entreprise."
        benefits={socialBenefits}
      />

      {/* Témoignages */}
      <Testimonials />

      {/* Vigilance */}
      <VigilanceSection
        title="Points de vigilance en Social Ads"
        points={vigilancePoints}
      />

      {/* Méthodologie */}
      <MethodologySection
        title="Notre méthodologie Social Ads"
        steps={methodologySteps}
      />

      {/* Services complémentaires */}
      <section className="bg-[#2C2E34] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Services complémentaires
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/ads/sea"
              className="group bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#1f1f1f] transition-colors"
            >
              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#E74601] transition-colors">
                SEA / Référencement payant
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Campagnes Google Ads et Bing Ads pour capter les recherches intentionnistes et générer des leads qualifiés.
              </p>
            </Link>

            <Link
              href="/ads/sea/google-ads"
              className="group bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#1f1f1f] transition-colors"
            >
              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#E74601] transition-colors">
                Google Ads
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Search, Shopping, Performance Max, Display et YouTube Ads pour maximiser votre visibilité web.
              </p>
            </Link>

            <Link
              href="/ads"
              className="group bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#1f1f1f] transition-colors"
            >
              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#E74601] transition-colors">
                Toutes nos solutions Ads
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Découvrez l&apos;ensemble de nos services de publicité digitale pour une stratégie marketing complète.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ title="Questions fréquentes sur notre agence Social Ads à Lille" faqs={faqs} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Ads', href: '/ads' },
          { label: 'Social Ads' },
        ]}
      />

      {/* CTA */}
      <CTA />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
