'use client';

import { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "SLASHR m'accompagne en SEO dans le cadre de notre fusion de sites : Roadmap, spec techniques, échanges internes, gestion des redirections entre autres. Je recommande cette agence SEO à taille humaine, disponible, réactive et réellement experte sur le sujet.",
      name: 'Antoine Thomas',
      role: 'Responsable SEO',
      company: 'Carter Cash',
      image: 'https://agence-slashr.fr/wp-content/uploads/2023/11/antoine-thomas-300x300.webp',
    },
    {
      quote: "Je recommande fortement Anthony. Il a accompagné des startups en SEO (super expertise, dixit une entrepreneuse déjà bien calée) et en positionnement de marque ! Excellent relationnel, expertise au top, qualité de suivi, je n'ai que des retours positifs !",
      name: 'Soizic Chevillotte',
      role: 'Retail & Ecommerce Program Manager',
      company: 'Euratechnologies',
      image: 'https://agence-slashr.fr/wp-content/uploads/2023/11/soizic-300x300.webp',
    },
    {
      quote: "Excellente agence que je recommande les yeux fermés. Equipe très très pro, réactive et à l'écoute. C'est précieux de trouver de telles valeurs...",
      name: 'Morgane Tardivel',
      role: 'Fondatrice',
      company: 'Les Petites Billes',
      image: 'https://agence-slashr.fr/wp-content/uploads/2023/11/morgane-lpb.png',
    },
    {
      quote: "J'ai fait appel à SLASHR pour m'épauler sur le développement de Vestiaire collective US... Une expertise sur le conseil et l'exécution SEO que je recommande à toutes les entreprises ambitieuses.",
      name: 'Jean-Éric Blas-Châtelain',
      role: 'Principal Engineer Buyer Experience (SEO and acquisition)',
      company: 'Vestiaire Collective',
      image: 'https://agence-slashr.fr/wp-content/uploads/2023/11/vestiaire-collective-jean-eric-blas-chatelain.webp',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, testimonials.length - 1)) % Math.max(1, testimonials.length - 1));
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      {/* Gradient background - centered between sections */}
      <div
        className="absolute top-[80px] sm:top-[100px] md:top-[120px] left-0 right-0 h-[400px] sm:h-[500px] md:h-[600px] pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 40% 60% at 35% 50%, rgba(255, 60, 10, 0.85) 0%, transparent 55%),
            radial-gradient(ellipse 40% 60% at 65% 50%, rgba(180, 40, 255, 0.85) 0%, transparent 55%)
          `,
          filter: 'blur(30px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-10 italic">
          Ils nous ont fait confiance
        </h2>

        {/* Google Rating Badge */}
        <div className="flex justify-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-[#252525] rounded-full px-5 sm:px-6 md:px-8 py-3 sm:py-4">
            <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">4.9</span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-xs">
                33 avis sur{' '}
                <span className="text-white">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 px-4 sm:px-6 md:mx-0 md:px-0">
          <div
            className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-300 ease-out overflow-x-auto md:overflow-visible scrollbar-hide"
            style={{ transform: `translateX(-${currentIndex * (50)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80vw] sm:w-[65vw] md:w-[calc(50%-12px)] bg-[#252525] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5"
              >
                {/* Avatar */}
                <div className="flex-shrink-0 hidden sm:block">
                  <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] rounded-lg overflow-hidden">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={96}
                        height={128}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative">
                    {/* Quote */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pr-6 sm:pr-8">
                      {testimonial.quote}
                    </p>
                    {/* Quote marks */}
                    <div className="absolute top-0 right-0 text-gray-600 text-4xl sm:text-5xl md:text-6xl font-serif leading-none">
                      "
                    </div>
                  </div>

                  {/* Author */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                    <p className="text-white font-semibold text-xs sm:text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex justify-center gap-3 mt-8 sm:mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
