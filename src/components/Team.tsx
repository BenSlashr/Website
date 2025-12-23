'use client';

import { useState, MouseEvent } from 'react';
import Image from 'next/image';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const teamMembers = [
    {
      name: 'Lucas',
      role: 'GROWTH MANAGER',
      number: '01',
      image: 'https://agence-slashr.fr/wp-content/uploads/2024/03/lucas-150x150.png',
      stats: { exp: '5+', projects: '120+', rank: 'MVP' },
    },
    {
      name: 'Tom',
      role: 'SEO TACTICIEN',
      number: '07',
      image: null,
      stats: { exp: '4+', projects: '80+', rank: 'ALL-STAR' },
    },
    {
      name: 'Anthony',
      role: 'CONSULTING DIRECTOR',
      number: '23',
      image: null,
      stats: { exp: '8+', projects: '200+', rank: 'LEGEND' },
    },
    {
      name: 'Quentin',
      role: 'BUSINESS PARTNER',
      number: '10',
      image: null,
      stats: { exp: '6+', projects: '150+', rank: 'MVP' },
    },
    {
      name: 'Pierre-Antoine',
      role: 'SEO TACTICIEN',
      number: '33',
      image: null,
      stats: { exp: '3+', projects: '60+', rank: 'RISING' },
    },
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, teamMembers.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getCardTransform = (index: number) => {
    if (hoveredCard !== index) return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';

    const rotateY = (mousePos.x - 50) / 5;
    const rotateX = -(mousePos.y - 50) / 5;

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 uppercase tracking-wider">
          L'équipe
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 italic">
          Une équipe de stratèges.
          <br />
          Animée par la gagne.
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 md:mb-12 max-w-2xl">
          Les consultants SLASHR combinent une expertise technique SEO éprouvée et un mindset orienté business,
          acquis au contact des plus grands groupes comme des startups les plus performantes.
        </p>

        {/* Team Cards Carousel */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 px-4 sm:px-6 md:mx-0 md:px-0">
          <div
            className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-300 ease-out overflow-x-auto md:overflow-visible scrollbar-hide"
            style={{ transform: `translateX(-${currentIndex * (280 + 24)}px)` }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="flex-shrink-0 w-[200px] sm:w-[230px] md:w-[260px] lg:w-[280px] cursor-pointer"
                style={{
                  transform: getCardTransform(index),
                  transition: hoveredCard === index ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* NBA Card Container - Gradient border wrapper */}
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                  <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                    {/* Top Header Bar */}
                    <div className="relative bg-[#252525] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-gray-700/50">
                      <Image
                        src="https://agence-slashr.fr/wp-content/uploads/2024/03/logo-slashr-blanc.png"
                        alt="SLASHR"
                        width={50}
                        height={16}
                        className="h-3 sm:h-4 w-auto opacity-60"
                        unoptimized
                      />
                      <span className="text-white font-black text-xl sm:text-2xl">{member.number}</span>
                    </div>

                    {/* Main Image Area */}
                    <div className="relative h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden bg-gradient-to-b from-[#252525] to-[#1a1a1a]">
                      {/* Player photo or silhouette */}
                      <div className="absolute inset-0 flex items-end justify-center">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            unoptimized
                          />
                        ) : (
                          <svg className="w-40 h-40 text-gray-600/50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        )}
                      </div>

                      {/* Rank Badge */}
                      <div className="absolute top-3 right-3 z-20">
                        <span
                          className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#2a2a2a] border border-gray-600"
                          style={{
                            color: member.stats.rank === 'LEGEND'
                              ? '#ffd700'
                              : member.stats.rank === 'MVP'
                              ? '#f97316'
                              : member.stats.rank === 'ALL-STAR'
                              ? '#a855f7'
                              : '#22c55e',
                          }}
                        >
                          {member.stats.rank}
                        </span>
                      </div>

                      {/* Holographic overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
                        style={{
                          opacity: hoveredCard === index ? 1 : 0,
                          background: hoveredCard === index ? `
                            radial-gradient(
                              circle at ${mousePos.x}% ${mousePos.y}%,
                              rgba(255, 200, 100, 0.4) 0%,
                              rgba(255, 120, 40, 0.3) 20%,
                              rgba(180, 70, 230, 0.3) 40%,
                              rgba(100, 200, 255, 0.3) 60%,
                              rgba(236, 72, 153, 0.2) 80%,
                              transparent 100%
                            )
                          ` : 'none',
                          mixBlendMode: 'overlay',
                        }}
                      />

                      {/* Shine effect */}
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
                        style={{
                          opacity: hoveredCard === index ? 0.6 : 0,
                          background: `
                            linear-gradient(
                              ${105 + (mousePos.x - 50) * 0.5}deg,
                              transparent 0%,
                              rgba(255, 255, 255, 0.1) ${mousePos.x - 10}%,
                              rgba(255, 255, 255, 0.3) ${mousePos.x}%,
                              rgba(255, 255, 255, 0.1) ${mousePos.x + 10}%,
                              transparent 100%
                            )
                          `,
                        }}
                      />

                      {/* Rainbow bands */}
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
                        style={{
                          opacity: hoveredCard === index ? 0.5 : 0,
                          background: `
                            repeating-linear-gradient(
                              ${45 + (mousePos.x - 50) * 0.3}deg,
                              rgba(255, 100, 50, 0.1) 0px,
                              rgba(255, 200, 100, 0.15) 2px,
                              rgba(100, 255, 200, 0.1) 4px,
                              rgba(100, 150, 255, 0.15) 6px,
                              rgba(200, 100, 255, 0.1) 8px,
                              rgba(255, 100, 150, 0.15) 10px,
                              rgba(255, 100, 50, 0.1) 12px
                            )
                          `,
                          mixBlendMode: 'color-dodge',
                        }}
                      />
                    </div>

                    {/* Name Plate */}
                    <div className="relative bg-[#252525] px-3 sm:px-4 py-3 sm:py-4 border-t border-gray-700/50">
                      <h3 className="text-white font-bold text-base sm:text-lg text-center uppercase tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-center font-medium uppercase tracking-wider bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {member.role}
                      </p>
                    </div>

                    {/* Stats Bar */}
                    <div className="bg-[#1a1a1a] px-3 sm:px-4 py-2 sm:py-3 flex justify-around border-t border-gray-700/50">
                      <div className="text-center">
                        <span className="block text-white font-bold text-base sm:text-lg">{member.stats.exp}</span>
                        <span className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-wider">Ans XP</span>
                      </div>
                      <div className="w-px bg-gray-700" />
                      <div className="text-center">
                        <span className="block text-white font-bold text-base sm:text-lg">{member.stats.projects}</span>
                        <span className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-wider">Projets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-3 mt-8">
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
            disabled={currentIndex >= teamMembers.length - 4}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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

export default Team;
