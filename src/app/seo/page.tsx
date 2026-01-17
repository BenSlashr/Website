import { Metadata } from 'next';
import LogoBanner from '@/components/LogoBanner';
import CTA from '@/components/CTA';
import Newsletter from '@/components/Newsletter';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Articles from '@/components/Articles';
import { caseStudies } from '@/lib/caseStudiesWP';
import {
  ServiceHero,
  MethodologySection,
  OtherExpertisesSection,
  IrritantSection,
  PrestationsSection,
} from '@/components/services';
import MaillagePrestation from '@/components/MaillagePrestation';
import Engagements from '@/components/Engagements';
import Methode from '@/components/Methode';
import ExpertisesGrid from '@/components/ExpertisesGrid';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Agence SEO à Lille | Référencement Naturel Google | Slashr',
  description:
    'Agence SEO à Lille spécialisée en référencement naturel. Boostez votre visibilité sur Google avec notre expertise. Audits SEO, stratégie de contenu, netlinking.',
  openGraph: {
    title: 'Agence SEO à Lille | Référencement Naturel Google | Slashr',
    description:
      'Agence SEO à Lille spécialisée en référencement naturel. Boostez votre visibilité sur Google.',
    type: 'website',
  },
};

const methodologySteps = [
  {
    number: 1,
    title: 'Découverte du besoin',
    description: 'Échange approfondi pour comprendre vos objectifs business, votre marché et vos enjeux de visibilité.',
  },
  {
    number: 2,
    title: 'Audit SEO & Quick wins',
    description: 'Diagnostic technique et sémantique complet pour identifier les opportunités immédiates de croissance.',
  },
  {
    number: 3,
    title: 'Définition de la stratégie SEO',
    description: 'Définition du plan d\'action : optimisations techniques, contenu éditorial et netlinking.',
  },
  {
    number: 4,
    title: 'Exécution du plan d\'action',
    description: 'Déploiement des recommandations avec priorisation selon l\'impact et les ressources disponibles.',
  },
  {
    number: 5,
    title: 'Reporting & ajustements',
    description: 'Suivi des performances, analyse des résultats et optimisation continue de la stratégie.',
  },
];

const faqs = [
  {
    question: 'Quels sont les piliers du SEO ?',
    answer: `Le Search Engine Optimisation (SEO) repose sur trois piliers fondamentaux :

• La technique : optimisation du code, de la vitesse, de l'architecture du site
• Le contenu : création et optimisation de contenus pertinents pour vos mots-clés cibles
• Le netlinking : acquisition de liens de qualité pour renforcer votre autorité

Le SEO est le processus d'obtenir du trafic à partir des résultats de recherche gratuits, organiques, éditoriaux ou naturels des moteurs de recherche.`,
  },
  {
    question: 'En combien de temps voit-on les résultats du SEO ?',
    answer: 'Les premiers résultats peuvent apparaître en 2 à 3 mois, mais une stratégie SEO efficace se construit sur le moyen/long terme. Les résultats les plus significatifs se mesurent généralement entre 6 et 12 mois.',
  },
  {
    question: 'Faites-vous du référencement IA (GEO) ?',
    answer: 'Oui ! Nous intégrons désormais le référencement IA dans nos prestations. Le GEO (Generative Engine Optimization) permet d\'optimiser vos contenus pour apparaître dans les réponses de ChatGPT, Bing Chat ou Perplexity.',
  },
  {
    question: 'Pourquoi choisir une agence SEO à Lille ?',
    answer: 'En choisissant une agence SEO à Lille comme Slashr, vous bénéficiez d\'une double expertise : une expertise technique SEO pointue, et l\'expertise locale de nos consultants basés à Lille. Nous connaissons le tissu économique local et pouvons vous rencontrer facilement.',
  },
  {
    question: 'Quels services propose votre agence SEO à Lille ?',
    answer: `Notre agence SEO propose une gamme complète de services :

• Audit SEO complet (technique, contenu, netlinking)
• Optimisation technique du site
• Stratégie de contenu et rédaction optimisée
• Netlinking et acquisition de backlinks
• Suivi de positionnement et reporting mensuel
• Accompagnement à la refonte/migration SEO`,
  },
  {
    question: 'Combien coûte une prestation SEO à Lille ?',
    answer: 'Les prestations SEO à Lille commencent à partir de 1500€ pour un audit, généralement suivi d\'un accompagnement à 700€ par jour en moyenne. Le budget dépend de la taille de votre site et de vos objectifs.',
  },
  {
    question: 'Comment se déroule une prestation SEO ?',
    answer: `Une prestation SEO se déroule généralement en 4 étapes :

1. Pré-audit gratuit pour comprendre votre situation
2. Devis personnalisé selon vos objectifs
3. Audit SEO complet et recommandations priorisées
4. Accompagnement stratégique et suivi des performances`,
  },
  {
    question: 'Sur quelles villes opérez-vous ?',
    answer: 'Notre agence intervient principalement sur Lille et sa métropole : Roubaix, Tourcoing, Villeneuve-d\'Ascq, Marcq-en-Barœul, Wattrelos, Lambersart, Armentières... Mais nous accompagnons aussi des clients partout en France et à l\'international.',
  },
  {
    question: 'Travaillez-vous uniquement avec des entreprises à Lille ?',
    answer: 'Non, notre agence SEO accompagne des clients partout en France et à l\'international (Suisse, Belgique). Notre bureau est à Lille, mais nous travaillons aussi à distance avec des clients dans toute la France.',
  },
];

export default async function SEOPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <ServiceHero
        title="Agence SEO First"
        description="Vous êtes à la recherche de visibilité sur les moteurs de recherche ? Vous souhaitez être accompagné et coopérer avec une agence seo fiable, expérimentée et impliquée ? Découvrez SLASHR, l'agence lilloise des marques qui veulent gagner la bataille de l'attention."
        ctaText="J'améliore mon référencement"
      />

      {/* Logo Banner */}
      <LogoBanner />

      {/* Section Notre Philosophie */}
      <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-3xl mx-auto">
          {/* Tag */}
          <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider">
            Notre philosophie
          </span>

          {/* Title */}
          <h2
            className="font-bold text-white text-center"
            style={{
              fontSize: 'clamp(28px, 5vw, 45px)',
              lineHeight: '110%',
              letterSpacing: '-0.04em',
            }}
          >
            Faire du SEO le levier central de votre stratégie d&apos;acquisition
          </h2>
        </div>
      </section>

      {/* Irritant Client */}
      <IrritantSection
        heading="Vous accompagner pour performer"
        cards={[
          {
            title: "Votre visibilité stagne ?",
            description: "Douloureux de voir ses concurrents progresser quand on est au point mort."
          },
          {
            title: "Vous n'avez pas de stratégie ?",
            description: "Difficile de passer à l'action quand on ne sait pas par où commencer."
          },
          {
            title: "Vous avez du mal à exécuter ?",
            description: "Mettre en place les recos SEO correctement, c'est un art que vous ne maîtrisez pas (encore)."
          }
        ]}
        ctaText="Passez à l'action maintenant"
        ctaHref="/contact"
      />

      {/* Expertise Section */}
      <Methode
        title="Les 6 piliers de notre approche SEO"
        description="Une méthodologie complète pour maximiser votre visibilité et vos performances sur les moteurs de recherche."
        items={[
          { number: '01', title: 'Analyser les intentions de recherche', description: 'Comprendre ce que vos cibles recherchent pour aligner votre stratégie de contenu.' },
          { number: '02', title: 'Architecture & technique', description: 'Optimiser la structure et les performances techniques de votre site.' },
          { number: '03', title: 'Création de contenu', description: 'Produire des contenus pertinents et optimisés pour le SEO.' },
          { number: '04', title: 'Autorité & signaux de confiance', description: 'Renforcer votre crédibilité avec une stratégie de netlinking qualitative.' },
          { number: '05', title: 'UX & Conversion', description: 'Améliorer l\'expérience utilisateur pour convertir votre trafic.' },
          { number: '06', title: 'Diffusion multicanal', description: 'Amplifier votre visibilité sur tous les points de contact digitaux.' },
        ]}
      />

      {/* Section Nos prestations */}
      <PrestationsSection
        title="Nos prestations"
        cards={[
          {
            title: "Audit SEO",
            description: "Réalisez un audit SEO complet pour déterminer les forces et faiblesses de votre site et construire une stratégie SEO efficace.",
            links: [
              { label: "Audit de positionnement", href: "/seo/prestations/audit-positionnement" },
              { label: "Audit technique", href: "/seo/prestations/audit-technique" },
              { label: "Audit sémantique", href: "/seo/prestations/audit-semantique" },
              { label: "Diagnostic de perte de trafic", href: "/seo/prestations/diagnostic-trafic" },
            ]
          },
          {
            title: "Stratégie SEO",
            description: "Définissez une feuille de route claire pour atteindre vos objectifs de visibilité.",
            links: [
              { label: "Stratégie de contenu SEO", href: "/seo/prestations/strategie-contenu" },
              { label: "Stratégie technique SEO", href: "/seo/prestations/strategie-technique" },
              { label: "Stratégie de popularité / netlinking", href: "/seo/prestations/strategie-netlinking" },
              { label: "Stratégie SEO globale / roadmap", href: "/seo/prestations/strategie-globale" },
            ]
          },
          {
            title: "Conseil et exécution SEO",
            description: "Bénéficiez d'un accompagnement expert pour mettre en œuvre vos actions SEO.",
            links: [
              { label: "Conseil & accompagnement SEO", href: "/seo/prestations/accompagnement" },
              { label: "Création & optimisation de contenus", href: "/seo/prestations/contenus" },
              { label: "Achat de liens & de mentions", href: "/seo/prestations/netlinking" },
              { label: "Coaching & Formation SEO", href: "/seo/prestations/coaching-formation" },
            ]
          },
          {
            title: "Refonte de sites",
            description: "Sécurisez vos projets techniques pour préserver votre référencement.",
            links: [
              { label: "Cahier des charges SEO (AMOA)", href: "/seo/prestations/cahier-des-charges" },
              { label: "Recette préprod SEO", href: "/seo/prestations/recette-preprod" },
              { label: "Recette prod SEO", href: "/seo/prestations/recette-prod" },
              { label: "Aide aux redirections", href: "/seo/prestations/redirections" },
            ]
          },
        ]}
      />

      {/* Cas Clients */}
      <CaseStudies caseStudies={caseStudies} />

      {/* Témoignages clients */}
      <Testimonials />

      {/* Méthodologie */}
      <MethodologySection
        title="Comment se déroule une prestation SEO ?"
        steps={methodologySteps}
      />

      {/* Nos Engagements */}
      <Engagements />

      {/* Synergies / Maillage Prestations */}
      <MaillagePrestation />

      {/* Notre savoir-faire SEO */}
      <ExpertisesGrid
        title="Notre savoir-faire SEO"
        description="Des stratégies SEO adaptées à vos enjeux business, que vous visiez l'international, le e-commerce ou le marché local."
        items={[
          { icon: 'globe', title: 'SEO International', description: 'Développez votre visibilité à l\'échelle mondiale avec une stratégie SEO multilingue et multi-pays.', href: '/seo/prestations/international' },
          { icon: 'chart', title: 'SEO E‑commerce', description: 'Optimisez votre boutique en ligne pour générer plus de trafic qualifié et augmenter vos ventes.', href: '/seo/prestations/ecommerce' },
          { icon: 'target', title: 'SEO Local', description: 'Dominez les recherches locales et attirez des clients près de chez vous.', href: '/seo/prestations/local' },
          { icon: 'code', title: 'SEO Technique', description: 'Optimisez les fondations techniques de votre site pour maximiser son crawl et son indexation.' },
          { icon: 'shield', title: 'Migration SEO', description: 'Sécurisez vos projets de refonte pour préserver et renforcer votre référencement.', href: '/seo/prestations/refonte-migration' },
          { icon: 'user', title: 'Formation SEO', description: 'Montez en compétences avec nos formations SEO adaptées à votre niveau et vos objectifs.', href: '/seo/prestations/formation' },
        ]}
        ctaText="Présentez nous votre projet"
      />

      {/* SEO par CMS / Technologie */}
      <OtherExpertisesSection
        title="Une expertise SEO adaptée à votre stack technique."
        subtitle=""
        expertises={[
          { name: 'WordPress', href: '/seo/prestations/wordpress' },
          { name: 'Shopify', href: '/seo/prestations/shopify' },
          { name: 'Prestashop', href: '/seo/prestations/prestashop' },
          { name: 'WooCommerce', href: '/seo/prestations/woocommerce' },
          { name: 'Magento', href: '/seo/prestations/magento' },
          { name: 'Webflow', href: '/seo/prestations/webflow' },
          { name: 'Drupal', href: '/seo/prestations/drupal' },
          { name: 'Framer', href: '/seo/prestations/framer' },
          { name: 'Salesforce', href: '/seo/prestations/salesforce' },
        ]}
      />

      {/* Section Notre Agence */}
      <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            {/* Left column - Text content */}
            <div className="flex flex-col gap-8 w-full md:w-1/2">
              <h2
                className="font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}
              >
                Se voir à Lille...<br />
                ou travailler à distance
              </h2>

              <div className="text-description text-white/70 space-y-4">
                <p>
                  Nos bureaux se situent en plein cœur d&apos;Euratechnologies : Place de Saintignon, Bâtiment Lafont, Euratechnologie, 165 Av. de Bretagne, 59000 Lille.
                </p>
                <p>
                  Lille, une des villes les plus dynamiques économiquement dans le nord de la France, s&apos;impose comme un véritable pôle de développement. Située à seulement 1 heure de Paris en TGV, cette préfecture du département du Nord brille par son essor économique et sa vitalité entrepreneuriale.
                </p>
                <p>
                  Par ailleurs, située au cœur de cette effervescence économique, Lille abrite Euratechnologies, un des principaux pôles d&apos;innovation en Europe. Avec plus de 300 entreprises innovantes et startups, EuraTechnologies est un véritable écosystème numérique en constante évolution.
                </p>
              </div>
            </div>

            {/* Right column - Map */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-[15px] overflow-hidden">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=Slashr%20-%20Agence%20SEO%20Lille&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                title="Slashr - Agence SEO Lille"
                aria-label="Slashr - Agence SEO Lille"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Articles récents */}
      <Articles title="Nos derniers articles SEO" />

      {/* FAQ */}
      <FAQ title="Questions fréquentes" faqs={faqs} />

      {/* Fil d'Ariane */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'SEO' },
        ]}
      />

      {/* CTA */}
      <CTA />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
