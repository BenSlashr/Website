'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/lib/caseStudiesWP';

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
  title?: string;
}

const CaseStudies = ({ caseStudies, title = "Ils ont révélé leur plein potentiel" }: CaseStudiesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limiter à 4 cas clients max pour la HP
  const displayedCases = caseStudies.slice(0, 4);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, displayedCases.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 uppercase tracking-wider">
          Cas Clients
        </span>

        {/* Title */}
        <h2 className="font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-description text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-xl">
          SLASHR, c&apos;est surtout un travail en collaboration avec nos clients pour contribuer à leurs réussites & leur pérennité.
        </p>

        {/* Cards Carousel - extends to edges on mobile */}
        <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6 md:mx-0 md:px-0">
          <div
            className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible scrollbar-hide py-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * (420 + 24)}px)` }}
          >
          {displayedCases.map((caseItem, index) => (
            <Link
              key={caseItem.slug}
              href={`/cas-clients/${caseItem.slug}`}
              className="flex-shrink-0 flex flex-col w-[320px] sm:w-[360px] md:w-[400px] lg:w-[420px] border border-white/10 rounded-[15px] overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/20 group bg-[#25272E]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Header with Logo - Lighter background */}
              <div className="relative w-full h-[200px] sm:h-[210px] flex items-center justify-center overflow-hidden bg-[#2C2E34]">
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
                      radial-gradient(ellipse 35% 20% at 30% 0%, rgba(231, 70, 1, 1) 0%, transparent 70%),
                      radial-gradient(ellipse 35% 20% at 70% 0%, rgba(137, 98, 253, 1) 0%, transparent 70%)
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
                    background: '#2C2E34',
                  }}
                />
              </div>

              {/* Card Content - Darker background */}
              <div className="flex flex-col flex-1 px-[22.5px] py-[22.5px]">
                {/* Title and Description */}
                <div className="flex flex-col gap-[8px] mb-[22.5px]">
                  {/* Company Name */}
                  <h3
                    className="text-white font-semibold group-hover:text-[#E74601] transition-colors"
                    style={{ fontFamily: "'Geist', sans-serif", fontSize: '15px', lineHeight: '145%' }}
                  >
                    {caseItem.title.replace('Fusion SEO : ', '').replace('Accompagnement SEO : ', '').replace('Migration SEO : ', '')}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white line-clamp-3"
                    style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: '15px', lineHeight: '145%' }}
                  >
                    {caseItem.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-white/50 mb-[22.5px]" />

                {/* Stats */}
                <div className="flex flex-col gap-[4px]">
                  {caseItem.stats.slice(0, 2).map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center gap-[10px]"
                      style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: '15px', lineHeight: '145%' }}
                    >
                      <span className="text-white font-semibold">
                        {stat.value}
                      </span>
                      <span className="text-white">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>

        {/* Navigation and CTA - Centered */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= displayedCases.length - 1}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* CTA Button */}
          <Link
            href="/cas-clients"
            className="flex items-center justify-center px-[30px] py-[15px] border border-white rounded-[37.5px] text-white font-semibold text-[15px] leading-[145%] hover:bg-white/10 transition-colors"
          >
            Découvrir nos cas clients
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
