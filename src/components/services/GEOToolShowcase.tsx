'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Feature {
  id: string;
  title: string;
  description: string;
  highlight: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 'dashboard',
    title: 'Dashboard de présence de marque',
    description: 'Vue globale de votre visibilité IA : taux de mention, taux de liens, nombre de citations et position moyenne face à vos concurrents.',
    highlight: '22.4% visibilité moyenne',
    image: '/images/geo-tool/01-dashboard-presence.png',
  },
  {
    id: 'concurrence',
    title: 'Analyse de la concurrence',
    description: 'Comparez votre score de visibilité avec celui de vos concurrents directs. Identifiez les gaps et opportunités.',
    highlight: 'Benchmark en temps réel',
    image: '/images/geo-tool/02-visibilite-concurrence.png',
  },
  {
    id: 'modeles',
    title: 'Comparaison multi-modèles IA',
    description: 'Testez votre visibilité sur 6 modèles différents : ChatGPT-4o, GPT-3.5 Turbo, Claude 3 Haiku, Gemini 2.5 Flash, GPT-5 et GPT-4o Mini.',
    highlight: '6 modèles IA testés',
    image: '/images/geo-tool/03-comparaison-modeles.png',
  },
  {
    id: 'prompts',
    title: 'Tracking par prompt',
    description: 'Suivez votre visibilité sur des requêtes spécifiques. Tags personnalisés, modèles testés et actions de suivi.',
    highlight: 'Requêtes personnalisées',
    image: '/images/geo-tool/04-tracking-prompts.png',
  },
  {
    id: 'competitors',
    title: 'Veille concurrentielle',
    description: 'Identifiez vos concurrents directs dans les réponses IA. Share of Voice, nombre de mentions et providers utilisés.',
    highlight: 'Share of Voice détaillé',
    image: '/images/geo-tool/05-competitors.png',
  },
  {
    id: 'recherches',
    title: 'Query Fan-out Analysis',
    description: 'Visualisez les requêtes générées par les IA à partir de vos prompts. Comparez avec les SERP Google traditionnelles.',
    highlight: 'Similarité IA vs Google',
    image: '/images/geo-tool/06-prompts-recherches.png',
  },
  {
    id: 'sources',
    title: 'Top sources citées',
    description: 'Découvrez quels domaines sont les plus cités par les IA sur vos thématiques. Analysez votre écosystème concurrentiel.',
    highlight: 'Écosystème de citations',
    image: '/images/geo-tool/07-top-sources.png',
  },
  {
    id: 'pages',
    title: 'Vos pages citées',
    description: 'Identifiez précisément quelles pages de votre site sont citées par les IA, avec le taux de citation et la période.',
    highlight: 'Pages performantes',
    image: '/images/geo-tool/08-pages-citees.png',
  },
  {
    id: 'positions',
    title: 'Analyse des positions',
    description: 'Pour chaque requête, visualisez les concurrents positionnés et votre propre position. Identifiez les opportunités.',
    highlight: 'Gaps concurrentiels',
    image: '/images/geo-tool/09-requetes-concurrents.png',
  },
  {
    id: 'serp',
    title: 'Analyse SERP IA',
    description: 'Comparez les résultats IA avec les SERP traditionnels. Identifiez les différences de positionnement entre Google et les IA.',
    highlight: 'IA vs SERP classique',
    image: '/images/geo-tool/10-analyse-serp.png',
  },
];

const GEOToolShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                setActiveIndex(index);
              }
            });
          },
          {
            threshold: 0.5,
            rootMargin: '-20% 0px -20% 0px',
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs tracking-[0.3em] text-orange-500 uppercase mb-4 font-medium">
            OUTIL PROPRIÉTAIRE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Notre outil de tracking GEO
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mesurez votre visibilité dans les IA génératives avec notre plateforme développée en interne.
            Données exclusives, benchmark concurrentiel et suivi en temps réel.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#252525] rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">6</div>
            <div className="text-gray-400 text-sm">Modèles IA testés</div>
          </div>
          <div className="bg-[#252525] rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-pink-500 mb-1">350+</div>
            <div className="text-gray-400 text-sm">Analyses par projet</div>
          </div>
          <div className="bg-[#252525] rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-1">10+</div>
            <div className="text-gray-400 text-sm">Concurrents suivis</div>
          </div>
          <div className="bg-[#252525] rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Monitoring continu</div>
          </div>
        </div>

        {/* Scroll-sync layout */}
        <div ref={containerRef} className="relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left: Features list */}
            <div className="lg:w-2/5 space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  ref={(el) => { featureRefs.current[index] = el; }}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30'
                      : 'bg-[#252525] border border-transparent hover:border-gray-700'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        activeIndex === index
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500'
                          : 'bg-[#1a1a1a]'
                      }`}
                    >
                      <span className={`font-bold ${activeIndex === index ? 'text-white' : 'text-gray-500'}`}>
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg mb-2 ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm mb-3 ${activeIndex === index ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.description}
                      </p>
                      <span className={`inline-block text-xs px-3 py-1 rounded-full ${
                        activeIndex === index
                          ? 'bg-orange-500/20 text-orange-400'
                          : 'bg-[#1a1a1a] text-gray-500'
                      }`}>
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Sticky image */}
            <div className="lg:w-3/5 hidden lg:block">
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                  {/* Browser mockup header */}
                  <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="bg-[#1a1a1a] rounded-lg px-4 py-1.5 text-gray-500 text-sm">
                        app.slashr.fr/geo-tracker
                      </div>
                    </div>
                  </div>

                  {/* Screenshot with transition */}
                  <div className="relative aspect-[16/9] bg-white">
                    {features.map((feature, index) => (
                      <div
                        key={feature.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          activeIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature indicator */}
                <div className="flex justify-center mt-6 gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? 'bg-orange-500 w-6'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Show current image */}
          <div className="lg:hidden mt-8">
            <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-white">
              <div className="relative aspect-[16/9]">
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/prestations/devis"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Demander une démo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GEOToolShowcase;
