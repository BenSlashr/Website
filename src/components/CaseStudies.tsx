'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/lib/caseStudiesWP';

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

const CaseStudies = ({ caseStudies }: CaseStudiesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  // Limiter à 4 cas clients max pour la HP
  const displayedCases = caseStudies.slice(0, 4);

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 uppercase tracking-wider">
          Cas Clients
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 italic">
          Ils ont révélé leur plein potentiel
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 md:mb-12 max-w-xl">
          SLASHR, c&apos;est surtout un travail en collaboration avec nos clients pour contribuer à leurs réussites & leur pérennité.
        </p>

        {/* Carousel */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
          {displayedCases.map((caseItem, index) => (
            <Link
              key={caseItem.slug}
              href={`/cas-clients/${caseItem.slug}`}
              className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[350px] lg:w-[400px] bg-[#252525] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#2a2a2a] group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Header with Logo */}
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center overflow-hidden">
                {/* Logo - Image or Text */}
                <div className={`relative z-30 transition-transform duration-700 ease-out ${
                  hoveredIndex === index ? '-translate-y-6' : 'translate-y-0'
                }`}>
                  {caseItem.logoImage ? (
                    <Image
                      src={caseItem.logoImage}
                      alt={caseItem.logo}
                      width={180}
                      height={60}
                      className="object-contain max-h-16"
                      unoptimized
                    />
                  ) : (
                    <span className="text-white text-2xl font-serif italic font-bold">
                      {caseItem.logo}
                    </span>
                  )}
                </div>

                {/* Glow behind the planet - curved to follow planet shape */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full transition-all duration-700 ease-out ${
                    hoveredIndex === index ? 'opacity-100 bottom-[-800px]' : 'opacity-0 bottom-[-860px]'
                  }`}
                  style={{
                    background: `
                      radial-gradient(ellipse 35% 20% at 30% 0%, rgba(255, 100, 50, 1) 0%, transparent 70%),
                      radial-gradient(ellipse 35% 20% at 70% 0%, rgba(140, 80, 220, 1) 0%, transparent 70%)
                    `,
                    filter: 'blur(15px)',
                  }}
                />

                {/* Black planet (half circle) - on top of glow */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full transition-all duration-700 ease-out z-10 ${
                    hoveredIndex === index
                      ? 'bottom-[-830px]'
                      : 'bottom-[-870px]'
                  }`}
                  style={{
                    background: '#252525',
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 md:p-6">
                {/* Company Name */}
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-orange-400 transition-colors">
                  {caseItem.title.replace('Fusion SEO : ', '').replace('Accompagnement SEO : ', '').replace('Migration SEO : ', '')}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {caseItem.description}
                </p>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-600 mb-3 sm:mb-4" />

                {/* Stats - Afficher les 2 premiers KPIs */}
                <div className="space-y-1.5 sm:space-y-2">
                  {caseItem.stats.slice(0, 2).map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-baseline gap-2">
                      <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA View All */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/cas-clients"
            className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <span>Voir tous nos cas clients</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
