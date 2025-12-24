'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "En tant qu'agence search marketing, sur quels secteurs du digital est-ce que vous pouvez intervenir ?",
    answer: `En tant qu'agence SEM, nous pouvons intervenir sur les domaines du web suivant :

• SEO : c'est notre cœur de métier
• SEA : souvent lié au SEO, cela permet des synergies intéressantes
• Data : pour venir mesurer le ROI des autres leviers
• Création de contenu : Indispensable au SEO, nous utilisons des rédacteurs spécialisés comme de la rédaction IA via nos outils personnalisés
• Social Media Optimization : De plus en plus indispensable lors des campagnes SEO, le SMO vient se greffer à nos audits SEO

Pour tout ce qui est Email Marketing, Marketing d'influence, Display, création de sites web etc nous travaillons avec un réseau de partenaires.`,
  },
  {
    question: "Le Search Marketing se limite-t-il à Google ?",
    answer: `Le search marketing ne se limite plus à Google. On peut optimiser sa visibilité sur une multitude de plateformes où les utilisateurs effectuent des recherches, chacune avec ses propres règles et opportunités. Bien entendu, Google reste central (SEO/SEA, Google Shopping), mais des canaux comme YouTube, Amazon, Pinterest, ou TikTok sont devenus des moteurs de recherche à part entière.

Sur YouTube, il s'agit de SEO vidéo ; sur Amazon et les marketplaces, on parle de référencement produit avec un fort impact des conversions et des avis. Pinterest et TikTok jouent sur l'inspiration et l'engagement visuel. En B2B, LinkedIn devient aussi un terrain de jeu du search via l'optimisation des profils et des contenus. N'oublions pas les moteurs alternatifs comme Bing ou encore les app stores pour le SEO mobile (ASO). Depuis peu, les IA génératives comme ChatGPT, Gemini ou Perplexity introduisent une nouvelle forme de visibilité à gagner, en apparaissant dans les sources qu'elles utilisent pour formuler leurs réponses.`,
  },
  {
    question: "Faut-il une stratégie spécifique pour chaque moteur ?",
    answer: `Oui. Chaque moteur a ses règles, ses formats, ses intentions utilisateurs :

• Google → SEO technique + contenu + autorité
• Amazon → Taux de conversion, volume de ventes, avis clients
• TikTok / YouTube → Rétention, engagement, contenu natif
• Pinterest → Esthétique, mots-clés visuels, verticalité des contenus
• ChatGPT / LLMs → Présence dans des sources fiables, branding, logique de citation`,
  },
  {
    question: "Comment choisir son agence/prestataire de marketing digital ?",
    answer: `Il est souvent difficile de choisir son agence ou prestataire webmarketing, et de prendre sa décision avec le maximum de certitudes.

De nos expériences, voici quelques-uns de nos meilleurs conseils :

• Posez beaucoup de questions sur les méthodologies, leur manière de fonctionner, d'effectuer les prestations SEO.
• Tâchez de travailler avec un prestataire ayant des clients de votre même gabarit.
• Tentez d'analyser les business cases en profondeur, de vérifier les références et témoignages.
• Une relation Agence/Client est comme une association en entreprise. Posez les questions, demandez la vision/stratégie, faites confiance à votre feeling.
• Si vous n'êtes pas pleinement sûr, évitez les périodes d'engagement longue durée (9/12 mois). Cela vous permettra de confirmer ou d'infirmer la relation et les méthodes avec eux.

Enfin, nous sommes disponibles pour répondre à toutes vos questions, et répondre aux doutes ou réserves que vous pouvez avoir. Faites le choix d'une agence expérimentée avec Slashr.`,
  },
  {
    question: "Comment appliquez-vous vos tarifs ?",
    answer: `Les propositions se font généralement de deux manières différentes :

• Vous avez un budget max défini et nous tentons de définir la meilleure démarche à suivre.
• Vous avez un objectif précis et nous tentons de définir le budget le plus optimisé pour y parvenir.

Le budget total présenté comporte à la fois le TJM (le besoin en temps Homme) et le budget de créations (contenus ou liens).

Généralement, le temps Homme de consulting est divisé en trois grandes parties :

• Partie Analyse et stratégie
• Gestion de projet
• Mise en place et intégration

N'hésitez pas à nous poser toutes vos questions lors de nos rendez-vous. Vous pouvez également directement demander un devis SEO.`,
  },
  {
    question: "Faites-vous des propositions commerciales personnalisées ?",
    answer: `Chaque site a ses propres caractéristiques et opportunités. Vous avez des objectifs et un budget qui vous sont également propres.

Nos propositions commerciales sont donc adaptées à chaque client et à chaque situation.

Pour autant, notre expérience nous permet d'avoir une bonne estimation du temps à passer sur les différentes prestations, selon votre profil de sites web et votre problématique.

La construction de la Roadmap selon votre besoin, et notre expérience nous permettent de construire une proposition commerciale pointue.`,
  },
];

const FAQ = ({ title = "Questions fréquentes", faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const faqsToDisplay = faqs || defaultFaqs;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 italic font-serif">
          {title}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqsToDisplay.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'p-[1px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500'
                  : ''
              }`}
            >
              <div className={`bg-[#252525] rounded-2xl ${openIndex === index ? 'rounded-2xl' : ''}`}>
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
                >
                  <span className="text-white text-xs sm:text-sm md:text-base pr-3 sm:pr-4 font-medium">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[800px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
