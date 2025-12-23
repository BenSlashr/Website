import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LogoBanner from '@/components/LogoBanner';
import CTA from '@/components/CTA';
import {
  ServiceHero,
  MethodologySection,
  BenefitsSection,
  ComparisonSection,
  EngagementsSection,
  ContentSection,
  VigilanceSection,
  OtherExpertisesSection,
} from '@/components/services';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Agence SEO Prestashop | Expert Référencement Naturel | Slashr',
  description:
    'Agence SEO spécialisée Prestashop. Optimisez votre boutique e-commerce pour les moteurs de recherche avec notre expertise. Méthode SLASHR, résultats mesurables.',
  openGraph: {
    title: 'Agence SEO Prestashop | Expert Référencement Naturel | Slashr',
    description:
      'Agence SEO spécialisée Prestashop. Optimisez votre boutique e-commerce pour les moteurs de recherche.',
    type: 'website',
  },
};

const methodologySteps = [
  {
    number: 1,
    title: 'Prise des besoins',
    description:
      'Généralement, nous avons déjà un cahier des charges SEO sur lequel se baser pour entamer des analyses exhaustives et poussées.',
  },
  {
    number: 2,
    title: 'Crawl & analyse',
    description:
      'Nous analysons votre environnement préprod ou prod, par le biais de vérifications manuelles et de nos outils. Nous priorisons chaque critère problématique pour arbitrer facilement les prises de décisions.',
  },
  {
    number: 3,
    title: 'Restitution des résultats',
    description:
      "Nous envoyons et restituons nos recommandations à votre équipe technique (interne ou externe) et échangeons avec elle pour éliminer les critères techniques.",
  },
  {
    number: 4,
    title: 'Contre-recettage',
    description:
      "L'équipe technique a pris en compte nos retours et les a mis en place. Nous allons donc contre-recetter à multiples reprises jusqu'à ce que tous les critères techniques aient été implémentés.",
  },
  {
    number: 5,
    title: 'Validation "go"',
    description:
      'Lorsque nous considérons que les correctifs sur la préprod ou la prod sont effectuées, nous donnons notre validation pour achever la prestation.',
  },
];

const prestashopBenefits = [
  {
    title: 'Approche personnalisée pour votre boutique',
    description: 'Chaque site Prestashop est unique. Nous adaptons notre stratégie SEO à votre secteur, votre catalogue et vos objectifs business.',
    highlight: 'personnalisée',
    icon: 'user' as const,
    size: 'large' as const,
  },
  {
    title: 'Expertise CMS Prestashop',
    description: 'Maîtrise complète des spécificités techniques et modules SEO de la plateforme.',
    highlight: 'Prestashop',
    icon: 'code' as const,
    size: 'medium' as const,
  },
  {
    title: 'Bonnes pratiques Google',
    description: 'Respect strict des guidelines pour une croissance durable et sans risque de pénalité.',
    icon: 'check' as const,
    size: 'medium' as const,
  },
  {
    title: 'Suivi & gestion de projet',
    description: 'Reporting régulier et coordination avec vos équipes techniques internes ou externes.',
    icon: 'clipboard' as const,
    size: 'medium' as const,
  },
  {
    title: 'Résultats mesurables',
    description: 'KPIs clairs : trafic organique, positions, conversions et chiffre d\'affaires généré.',
    highlight: 'mesurables',
    icon: 'chart' as const,
    size: 'medium' as const,
  },
  {
    title: 'Investissement rentable sur le long terme',
    description: 'Le SEO construit un actif digital durable. Contrairement aux Ads, le trafic organique continue sans budget publicitaire.',
    highlight: 'long terme',
    icon: 'rocket' as const,
    size: 'large' as const,
  },
];

const vigilancePoints = [
  {
    title: 'Optimisation des catégories',
    description:
      "Prestashop étant un CMS e-commerce, les spécificités de l'e-commerce s'appliquent. Les pages catégories sont généralement les pages qui attirent le plus de trafic sur une boutique en ligne. Pour les optimiser, à part la balise title, on ajoute souvent un texte descriptif de la catégorie. Il n'y a cependant pas nativement d'endroit pour placer un long texte descriptif, il faudra passer par un plugin ou un thème personnalisé qui comprend cette feature.",
  },
  {
    title: 'Optimisation des performances web',
    description:
      "Les sites PrestaShop sont souvent assez lents et de ce fait, ne passent souvent pas les Core Web Vitals. Cela est dû à deux éléments : les modules et le thème. On est souvent très tenté d'accumuler les modules pour personnaliser au maximum notre Prestashop : c'est une mauvaise idée, l'accumulation de plugins fait grandement ralentir le site. Concernant le thème, il est assez rare d'en trouver qui sont à la fois bon en UX, en SEO et en performance web, cela nécessite souvent du développement personnalisé.",
  },
  {
    title: 'Gestion des URLs dynamiques et optimisation des liens canoniques',
    description:
      "PrestaShop génère des URLs dynamiques qui peuvent poser des problèmes de duplication de contenu. L'optimisation des liens canoniques est essentielle pour éviter cette duplication et aider les moteurs de recherche à comprendre quelle version de la page indexer. Sans une gestion appropriée, cela peut entraîner une dilution de l'autorité de la page et des pertes de classement dans les SERP.",
  },
];

const comparisonWithout = [
  'Votre site reste invisible aux yeux de vos prospects',
  "Vous perdrez du temps, de l'énergie au quotidien",
  'Vous réduisez à néant vos chances de croître et vous perdez du terrain face à la concurrence',
];

const comparisonWith = [
  'Vous générez du trafic, de la notoriété et du CA plus rapidement',
  "Vous pouvez passer votre temps et votre énergie sur d'autres tâches capitales à votre activité",
  'Vous maîtrisez mieux votre mix acquisition, impactant directement la croissance de votre entreprise',
];

const engagements = [
  {
    title: 'Performance',
    description:
      'Nous faisons notre maximum pour réaliser vos objectifs. Nous restons 100% focus-SEO pour cette raison.',
  },
  {
    title: 'Confiance',
    description:
      'Nous travaillons pour gagner votre confiance et ainsi développer une relation de confiance & long terme ensemble.',
  },
  {
    title: 'Expérience',
    description:
      'Nous travaillons avec beaucoup de clients sur Prestashop et nous avons même nos propres sites Prestashop qui nous permettent de tester et de rester à jour sur les algorithmes de Google.',
  },
];

const faqs = [
  {
    question: "Qu'est-ce qu'une agence SEO Prestashop ?",
    answer:
      "Une agence SEO Prestashop est une agence SEO spécialisée dans l'optimisation du CMS Prestashop.",
  },
  {
    question:
      'Combien de temps faut-il pour voir des résultats suite à des modifications SEO sur Prestashop ?',
    answer:
      "Le fait d'être sur Prestashop ne change pas le temps nécessaire pour avoir des résultats en SEO, qui est généralement de 3 à 6 mois.",
  },
  {
    question: 'Quels sont les meilleurs modules SEO sur Prestashop ?',
    answer: `Les meilleurs modules SEO sur Prestashop sont :
• Advanced Search 5 : pour optimiser votre navigation à facette
• Prestablog : pour la gestion de votre blog sur Prestashop
• Redirection d'URL, Gérer 301, 302, 303, et 404 URL : Pour gérer les 404 et les redirections facilement
• Produit+Boutique Avis, Points fidélité, Google Snippets : Pour générer des rich snippets sur vos différentes pages`,
  },
  {
    question: 'Quels sont vos tarifs ?',
    answer:
      "Nous fonctionnons la plupart du temps avec un TJM (taux journalier moyen). Notre TJM dépend de la taille du projet, il est nécessaire de nous contacter pour que l'on puisse l'ajuster à vos besoins. Pour vous donner un ordre d'idée, le TJM d'une agence est souvent entre 600 et 800€ par jour. De même, le nombre de jours nécessaire dépendra de votre projet.",
  },
  {
    question: 'Intégrez-vous vos recommandations vous-même ?',
    answer:
      'Nous pouvons intégrer nos recommandations sur le contenu nous-même, nous ne pouvons en revanche pas intégrer les recommandations techniques qui nécessitent l\'expertise d\'un développeur.',
  },
  {
    question: 'Quels sont les avantages de Prestashop sur les autres CMS ?',
    answer: `Prestashop est un CMS très populaire en France (logique, c'est une entreprise française). Sa principale force est sa communauté, voici quelques chiffres :
• Plus de 300 000 sites e-commerce utilisent PrestaShop à travers le monde
• Prestashop est dans 60 langues et dans 200 pays
• 500+ fonctionnalités et 5 000+ modules et thèmes sont disponibles
• Sa communauté dépasse le million de membres, parfait pour répondre à vos questions / problématiques sur des forums par exemple.`,
  },
];

const otherExpertises = [
  { name: 'WooCommerce', href: '/seo/prestations/woocommerce' },
  { name: 'Shopify', href: '/seo/prestations/shopify' },
  { name: 'Magento', href: '/seo/prestations/magento' },
  { name: 'Prestashop', href: '/seo/prestations/prestashop' },
  { name: 'Webflow', href: '/seo/prestations/webflow' },
  { name: 'Framer', href: '/seo/prestations/framer' },
  { name: 'Salesforce', href: '/seo/prestations/salesforce' },
  { name: 'SAP Commerce Cloud', href: '/seo/prestations/sap-commerce' },
];

export default function PrestashopPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />

      {/* Hero */}
      <ServiceHero
        tag="Prestashop"
        title="Agence SEO Prestashop"
        description="Vous avez une boutique en ligne sous Prestashop et cherchez à renforcer sa présence en ligne ? Notre agence SEO spécialisée dans Prestashop est la réponse à vos besoins. Découvrez notre méthode SLASHR."
      />

      {/* Logo Banner - Ils nous ont fait confiance */}
      <LogoBanner />

      {/* Section Prestashop - Le bon choix e-commerce */}
      <ContentSection
        tag="Prestashop"
        title="Prestashop : Le bon choix E-commerce"
        content={
          <>
            <p>
              Lorsqu&apos;il s&apos;agit de choisir une plateforme pour votre boutique en ligne, il y
              a de nombreux facteurs à considérer. L&apos;un des plus importants est la capacité de
              la plateforme à être optimisée pour les moteurs de recherche.
            </p>
            <p>
              PrestaShop se distingue à cet égard, offrant une multitude de fonctionnalités qui en
              font une solution de choix pour le référencement e-commerce.
            </p>
          </>
        }
        bulletPoints={[
          'Architecture SEO-friendly : Dès le départ, PrestaShop a été conçu avec le SEO à l\'esprit. Sa structure permet une indexation facile par les moteurs de recherche.',
          'Gestion des balises méta : La plateforme offre une gestion simplifiée des balises méta, vous permettant d\'ajouter des titres, des descriptions et d\'autres méta-informations essentielles.',
          'Extensions et modules dédiés : La communauté PrestaShop a développé une multitude d\'extensions spécifiquement conçues pour améliorer le SEO.',
        ]}
      />

      {/* Section - Pourquoi choisir Slashr */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Ne rien laisser au hasard
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12">
            Opter pour nous, agence SEO experte Prestashop
          </p>

          <div className="text-gray-300 mb-12 max-w-3xl mx-auto text-center">
            <p>
              Chaque site web aspire à une visibilité optimale pour se distinguer. Pour les
              boutiques Prestashop, le référencement naturel est le levier principal pour rendre vos
              produits accessibles aux internautes. SLASHR, grâce à sa spécialisation en SEO
              Prestashop, maîtrise les subtilités de cette plateforme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Expertise garantie</h3>
              <p className="text-gray-400 text-sm">
                Avec Slashr, vous profitez des conseils d&apos;experts familiers avec Prestashop,
                prêts à vous orienter vers les solutions les plus adaptées.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Efficacité maximisée</h3>
              <p className="text-gray-400 text-sm">
                Le SEO est notre métier. Confiez-nous cette mission et concentrez-vous sur votre
                activité principale, tout en bénéficiant de notre savoir-faire.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Focus sur le ROI</h3>
              <p className="text-gray-400 text-sm">
                Investir dans notre prestation SEO, c&apos;est maximiser ses chances d&apos;être
                visible, de générer plus de trafic qualifié et de CA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Cette prestation est faite pour vous si... */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Pour vous */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Cette prestation est faite pour vous si...
              </h3>
              <ul className="space-y-4">
                {[
                  'Vous disposez d\'un site Prestashop sous-performant',
                  'Vous souhaitez générer du trafic, de la notoriété, du CA ou des leads',
                  'Vous souhaitez prendre un avantage concurrentiel en devenant plus visible que vos concurrents',
                ].map((item, index) => (
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

            {/* Pas pour vous */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                En revanche, passez votre chemin si...
              </h3>
              <ul className="space-y-4">
                {[
                  'Vous exigez des résultats en quelques mois',
                  'Vous n\'envisagez pas d\'attirer plus d\'internautes via les moteurs de recherche',
                  'Vous n\'avez pas la volonté d\'investir de manière durable',
                ].map((item, index) => (
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
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <MethodologySection steps={methodologySteps} />

      {/* Avantages de Prestashop */}
      <BenefitsSection
        title="Les avantages de Prestashop"
        benefits={prestashopBenefits}
      />

      {/* Points de vigilance */}
      <VigilanceSection
        title="Les points de vigilance sur Prestashop"
        points={vigilancePoints}
      />

      {/* Comparaison Sans/Avec Agence */}
      <ComparisonSection
        title="Comprendre l'intérêt d'une agence SEO Prestashop"
        withoutAgency={comparisonWithout}
        withAgency={comparisonWith}
      />

      {/* Engagements */}
      <EngagementsSection engagements={engagements} />

      {/* Autres expertises */}
      <OtherExpertisesSection
        expertises={otherExpertises}
        currentExpertise="Prestashop"
      />

      {/* FAQ */}
      <FAQ title="Vous nous demandez souvent" faqs={faqs} />

      {/* CTA */}
      <CTA />

      <Footer />
    </main>
  );
}
