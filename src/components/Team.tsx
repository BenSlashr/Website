'use client';

import { useRef } from 'react';
import Image from 'next/image';

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.querySelector('.flex-shrink-0')?.clientWidth || 270;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  const teamMembers = [
    {
      name: 'Lucas',
      role: 'ACCOUNT MANAGER',
      number: '01',
      image: '/blog/images/2024/03/lucas.png',
    },
    {
      name: 'Tom',
      role: 'SEO CONSULTANT',
      number: '07',
      image: '/blog/images/2024/03/tom-chemin.jpeg',
    },
    {
      name: 'Anthony',
      role: 'CONSULTING DIRECTOR',
      number: '23',
      image: '/blog/images/2024/03/anthony-lecas.jpeg',
    },
    {
      name: 'Quentin',
      role: 'BUSINESS PARTNER',
      number: '10',
      image: '/blog/images/2026/01/Capture-decran-2026-01-14-a-11.11.07-e1768387199199.png',
    },
    {
      name: 'Pierre-Antoine',
      role: 'SEO CONSULTANT',
      number: '33',
      image: '/blog/images/2024/03/pierre-antoine.jpeg',
    },
    {
      name: 'Benoit',
      role: 'SEO DIRECTOR',
      number: '99',
      image: '/blog/images/2024/03/benoit-demonchaux-smx-e1711037394539.jpeg',
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 uppercase tracking-wider">
          L'équipe
        </span>

        {/* Title */}
        <h2 className="font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>
          Une équipe de stratèges. Animée par la gagne.
        </h2>

        {/* Subtitle */}
        <p className="text-description text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-2xl">
          Les consultants SLASHR combinent une expertise technique SEO éprouvée et un mindset orienté business,
          acquis au contact des plus grands groupes comme des startups les plus performantes.
        </p>

        {/* Team Cards - Horizontal scroll with navigation */}
        <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6 md:mx-0 md:px-0">
          <div ref={scrollRef} className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex-shrink-0 w-[270px] group"
              >
                {/* Card Container - Gradient border wrapper */}
                <div
                  className="relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    width: '270px',
                    background: 'linear-gradient(360deg, #2C2E34 16.67%, #E74601 34.29%, #CE08A9 45.91%, #8962FD 66.67%, #AD21FE 83.33%)',
                    padding: '1px',
                  }}
                >
                  <div
                    className="rounded-lg"
                    style={{
                      background: '#2C2E34',
                      padding: '4px 4px 8px 4px',
                    }}
                  >
                    {/* Main Image Area */}
                    <div
                      className="relative overflow-hidden w-full"
                      style={{
                        height: '298px',
                        borderRadius: '4px',
                        background: 'linear-gradient(180.44deg, rgba(44, 46, 52, 0.75) -1.13%, rgba(217, 217, 217, 0.75) 99.62%)',
                      }}
                    >
                      {/* Player photo */}
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                          sizes="270px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-32 h-32 text-gray-600/50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                      )}

                      {/* Hover overlay effect - CSS only */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#E74601]/20 via-transparent to-[#8962FD]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Name Plate */}
                    <div className="px-3 pt-4 pb-2">
                      <h3 className="text-white font-bold text-lg text-center tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-sm text-center font-medium uppercase tracking-wider bg-gradient-to-r from-[#E74601] via-[#CE08A9] to-[#8962FD] bg-clip-text text-transparent">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={() => scroll('left')}
            className="flex w-12 h-12 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex w-12 h-12 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
