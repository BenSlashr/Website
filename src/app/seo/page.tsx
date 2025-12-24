import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LogoBanner from '@/components/LogoBanner';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import FAQ from '@/components/FAQ';
import { caseStudies } from '@/lib/caseStudiesWP';
import { getLatestArticlesFromWP } from '@/lib/wordpress';
import {
  ServiceHero,
  MethodologySection,
  OtherExpertisesSection,
} from '@/components/services';

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

const seoPillars = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'La technique',
    description: 'Mettre au carré son socle technique (rapidité du site, les balises, l\'arborescence)',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Le contenu',
    description: 'Choix des mots-clés et optimisation de la sémantique des contenus',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Le netlinking',
    description: 'Développer votre autorité aux yeux de Google en analysant des domaines référents thématiques',
  },
];

const methodologySteps = [
  {
    number: 1,
    title: 'Pré-audit gratuit',
    description: 'Nous analysons rapidement votre situation actuelle pour identifier les opportunités et les points bloquants.',
  },
  {
    number: 2,
    title: 'Devis personnalisé',
    description: 'Nous construisons une proposition adaptée à vos objectifs, votre budget et votre contexte.',
  },
  {
    number: 3,
    title: 'Audit SEO complet',
    description: 'Analyse technique, sémantique et netlinking pour identifier tous les leviers de croissance.',
  },
  {
    number: 4,
    title: 'Accompagnement stratégique',
    description: 'Mise en place des recommandations, suivi des performances et ajustements continus.',
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
  const latestArticles = await getLatestArticlesFromWP(3);

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />

      {/* Hero */}
      <ServiceHero
        tag="Agence SEO à Lille"
        title="Boostez votre visibilité sur Google"
        description="Vous êtes à la recherche de visibilité sur les moteurs de recherche ? Vous souhaitez être accompagné et coopérer avec un partenaire fiable, expérimenté et impliqué ? Découvrez SLASHR, notre agence lilloise à taille humaine."
      />

      {/* Logo Banner */}
      <LogoBanner />

      {/* Section À propos */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Notre agence
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Notre Agence de Référencement Naturel à Lille
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nos bureaux sont situés en plein cœur d&apos;Euratechnologies, le plus grand incubateur
                de startups en France. Lille est une des villes les plus dynamiques économiquement
                dans le nord de la France, et Euratechnologies accueille plus de 300 entreprises
                innovantes et startups.
              </p>
              <p className="text-gray-400 text-sm">
                Place de Saintignon, Bâtiment Lafont, Euratechnologies<br />
                165 Av. de Bretagne, 59000 Lille
              </p>
            </div>

            <div className="bg-[#252525] rounded-2xl overflow-hidden">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=Slashr%20-%20Agence%20SEO%20Lille&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                title="Slashr - Agence SEO Lille"
                aria-label="Slashr - Agence SEO Lille"
                className="w-full h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Philosophie */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Moins de BLABLA */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 relative overflow-hidden group">
              {/* Illustration - Documents barrés */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <svg className="w-24 h-24 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 16" className="text-red-500" />
                </svg>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Moins de BLABLA, Moins de PPT
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Vous n&apos;avez pas besoin d&apos;analyses interminables. Ni de centaines de slides
                insipides. Vous avez besoin de recommandations précises et priorisées.
              </p>
            </div>

            {/* Plus d'actions */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 relative overflow-hidden group">
              {/* Illustration - Fusée */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <svg className="w-24 h-24 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Plus d&apos;actions, Plus de perfs
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Vous avez peu de temps, de l&apos;énergie à partager entre de nombreuses tâches.
                Notre approche pragmatique vous permet de vous concentrer sur l&apos;essentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenaire Lillois */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Ancrage local
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Slashr, votre partenaire lillois
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Notre agence accompagne de nombreux clients en région lilloise. Que vous soyez
                une start-up en pleine croissance ou une entreprise établie, nous comprenons
                les enjeux locaux et les opportunités de votre marché.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Parmi nos clients lillois : <span className="text-white font-medium">Les Petites Billes</span>,{' '}
                <span className="text-white font-medium">COOP RH</span>,{' '}
                <span className="text-white font-medium">Carter-Cash</span> et bien d&apos;autres
                qui nous font confiance pour leur visibilité digitale.
              </p>
            </div>

            <div className="bg-[#252525] rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-4">Une agence fièrement lilloise</h3>
              <p className="text-gray-300 leading-relaxed">
                Du Vieux-Lille à la Citadelle, en passant par le Palais des Beaux-Arts,
                nous connaissons notre ville et son écosystème entrepreneurial.
                Notre présence locale est un atout pour des échanges réguliers et un suivi de proximité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Les 3 piliers du SEO */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Les trois piliers du SEO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {seoPillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <Testimonials />

      {/* Cas Clients */}
      <CaseStudies caseStudies={caseStudies} />

      {/* Méthodologie */}
      <MethodologySection
        title="Comment se déroule une prestation SEO ?"
        steps={methodologySteps}
      />

      {/* Charte de Confiance */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Nos engagements
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Notre charte de confiance
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Communication transparente</h3>
              <p className="text-gray-400 leading-relaxed">
                Nous partageons nos avancées, nos difficultés et nos réussites en toute transparence.
                Pas de zones d&apos;ombre, pas de jargon inutile.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Pédagogie avant tout</h3>
              <p className="text-gray-400 leading-relaxed">
                Nous vous expliquons nos actions et vous transmettons les bonnes pratiques.
                Notre objectif : vous rendre autonome sur le long terme.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Ça me parle, allons-y !
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Expertises / Services - Layout Sticky Scroll */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Colonne gauche - Sticky */}
            <div className="md:sticky md:top-32 md:h-fit">
              <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
                Nos services
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Nos expertises SEO
              </h2>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                De l&apos;audit technique à la formation de vos équipes, nous vous accompagnons
                sur tous les aspects du référencement naturel pour maximiser votre visibilité.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Discutons de votre projet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Colonne droite - Cards qui défilent */}
            <div className="space-y-6">
              {[
                {
                  title: 'Audit Technique',
                  description: 'Analyse approfondie de la structure technique de votre site pour identifier les freins au référencement. Vitesse, crawlabilité, indexation, Core Web Vitals.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                },
                {
                  title: 'Audit Popularité',
                  description: 'Évaluation de votre profil de liens et de votre autorité de domaine face à vos concurrents. Analyse du netlinking et opportunités de backlinks.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                },
                {
                  title: 'Audit Stratégique',
                  description: 'Définition de votre stratégie SEO alignée sur vos objectifs business. Analyse concurrentielle, recherche de mots-clés et priorisation des actions.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Accompagnement SEO',
                  description: 'Suivi régulier et mise en œuvre des recommandations pour une croissance SEO durable. Reporting mensuel et ajustements stratégiques continus.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Coaching SEO',
                  description: 'Sessions personnalisées pour monter en compétence sur le SEO et devenir autonome. Travail sur vos problématiques concrètes.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: 'Formation SEO',
                  description: 'Formations sur-mesure pour vos équipes marketing, techniques ou éditoriales. De l&apos;initiation aux techniques avancées.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group rounded-2xl p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500"
                >
                  <div className="bg-[#252525] rounded-2xl p-8 h-full">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités Sectorielles */}
      <section className="bg-[#252525] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Nos cibles
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
            Pour qui travaillons-nous ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">PME & Entreprises Locales</h3>
              <p className="text-gray-400 leading-relaxed">
                Vous souhaitez développer votre visibilité locale et attirer de nouveaux clients.
                Nous vous aidons à vous positionner sur les recherches locales pertinentes.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Start-ups</h3>
              <p className="text-gray-400 leading-relaxed">
                De 0 à 100, nous vous accompagnons dans votre croissance SEO dès le lancement.
                Stratégie agile, résultats rapides et scalabilité.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">Grands Comptes</h3>
              <p className="text-gray-400 leading-relaxed">
                Coordination avec vos équipes internes, gestion de projets complexes et
                accompagnement sur des sites à fort volume de pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Toutes nos expertises SEO */}
      <OtherExpertisesSection
        title="Toutes nos expertises SEO"
        subtitle="Découvrez l'ensemble de nos prestations en référencement naturel."
        currentSlug=""
        category="seo"
      />

      {/* Blog / Articles récents */}
      {latestArticles.length > 0 && (
        <section className="bg-[#252525] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="inline-block bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
                  Blog SEO
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Nos derniers articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
              >
                Voir tous les articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group rounded-2xl p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500"
                >
                  <article className="bg-[#1a1a1a] rounded-2xl p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <span className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
                        Lire l&apos;article →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQ title="Questions fréquentes" faqs={faqs} />

      {/* CTA */}
      <CTA />

      <Footer />
    </main>
  );
}
