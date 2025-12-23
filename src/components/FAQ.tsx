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
• SEA : souvent lié au SEO, cela permet des synergies intéressantes)
• Data : pour venir mesurer le ROI des autres leviers)
• Création de contenu : Indispensable au SEO, nous utilisons des rédacteurs spécialisés comme de la rédaction IA via nos outils personnalisés
• Social Media Optimization : De plus en plus indispensable lors des campagnes SEO, le SMO vient de greffer à nos audits SEO

Pour tout ce qui est Email Marketing, Marketing d'influence, Display, création de sites web etc nous travaillons avec un réseau de partenaires.`,
  },
  {
    question: "Quelle est la différence entre le SEO et le SEA ?",
    answer: `Le SEO (Search Engine Optimization) et le SEA (Search Engine Advertising) sont deux approches complémentaires :
• Le SEO est le référencement naturel : il s'agit d'optimiser votre site pour apparaître dans les résultats organiques de Google
• Le SEA est le référencement payant : vous payez pour apparaître en haut des résultats via Google Ads

Le SEO est un investissement long terme avec des résultats durables, tandis que le SEA offre des résultats immédiats mais temporaires.`,
  },
  {
    question: "Combien de temps faut-il pour voir les résultats du SEO ?",
    answer: `Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois, selon plusieurs facteurs :
• L'état actuel de votre site et son historique
• La concurrence sur vos mots-clés cibles
• Les ressources allouées à la stratégie SEO
• La fréquence des mises à jour de contenu

Le SEO est un marathon, pas un sprint. Les résultats les plus significatifs se construisent sur 12 à 24 mois.`,
  },
  {
    question: "Comment mesurez-vous le ROI de vos actions SEO ?",
    answer: `Nous utilisons plusieurs indicateurs clés pour mesurer le retour sur investissement :
• Évolution des positions sur les mots-clés stratégiques
• Croissance du trafic organique qualifié
• Taux de conversion et leads générés
• Chiffre d'affaires attribuable au SEO

Nous mettons en place un tracking complet dès le début de la collaboration pour suivre précisément l'impact de nos actions.`,
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
