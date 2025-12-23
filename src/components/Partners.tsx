'use client';

import { useState } from 'react';

interface Partner {
  name: string;
  type: string;
  metier: string;
  specialisation?: string;
}

const Partners = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const partners: Partner[] = [
    { name: 'Usabilis', type: 'Agence UI/UX', metier: 'UI/UX', specialisation: 'UX Design' },
    { name: 'Konfiture', type: 'Agence web', metier: 'Création de site' },
    { name: 'Les fabricants', type: 'Agence web', metier: 'Création de site' },
    { name: 'Cocoa', type: 'Agence web', metier: 'Création de site', specialisation: 'WordPress' },
    { name: 'OVM Communication', type: 'Agence web', metier: 'Création de site' },
    { name: 'OnCrawl', type: 'SaaS', metier: 'SEO Tech', specialisation: 'Crawler, logs' },
    { name: 'Lafoule', type: 'Agence Branding', metier: 'Branding' },
    { name: 'Fractory', type: 'Agence web', metier: 'Création de site', specialisation: 'E-commerce' },
    { name: 'Digiwiks', type: 'Indépendant', metier: 'SEA / SMA' },
    { name: 'Maeven', type: 'Agence media', metier: 'SEA / SMA' },
    { name: 'Super8', type: 'Agence Branding', metier: 'Branding', specialisation: 'Brand, Design' },
    { name: 'Studio CAD', type: 'Agence web', metier: 'Création de site', specialisation: 'WordPress' },
    { name: 'Neoweb', type: 'Agence web', metier: 'Création de site', specialisation: 'WordPress' },
  ];

  const filters = ['Tous', 'Création de site', 'UI/UX', 'Branding', 'SEA / SMA', 'SEO Tech'];

  const filteredPartners = activeFilter === 'Tous'
    ? partners
    : partners.filter(p => p.metier === activeFilter);

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4 italic leading-tight">
          Une équipe All-star. Orchestrée
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          pour performer.
        </h2>

        {/* Subtitle */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-gray-400 text-xs sm:text-sm">
            UX, contenu, tracking, campagnes, branding...
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            On réunit les meilleurs. Et on les fait jouer ensemble.
          </p>
        </div>

        {/* Filter Menu */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          {/* Desktop: inline filters */}
          <div className="hidden sm:flex justify-center">
            <div className="inline-flex bg-[#2a2a2a] rounded-full p-1 flex-nowrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 uppercase tracking-wider whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile: wrapped filters */}
          <div className="flex sm:hidden flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-medium transition-all duration-300 uppercase tracking-wider ${
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-[#2a2a2a] text-gray-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid - Glassmorphism pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="group relative px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full cursor-default transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Inner glow on hover */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(168,85,247,0.15) 100%)',
                }}
              />
              <span className="relative text-white/90 text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
