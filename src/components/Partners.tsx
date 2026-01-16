'use client';

import { useState } from 'react';

interface Partner {
  name: string;
  type: string;
  metiers: string[];
  specialisation?: string;
}

const Partners = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const partners: Partner[] = [
    { name: 'Usabilis', type: 'Agence UI/UX', metiers: ['UI/UX'], specialisation: 'UX Design' },
    { name: 'Konfiture', type: 'Agence web', metiers: ['Création de site'] },
    { name: 'Les fabricants', type: 'Agence web', metiers: ['Création de site'] },
    { name: 'Cocoa', type: 'Agence web', metiers: ['Création de site', 'Branding'], specialisation: 'WordPress' },
    { name: 'OVM Communication', type: 'Agence web', metiers: ['Création de site'] },
    { name: 'OnCrawl', type: 'SaaS', metiers: ['SEO Tech'], specialisation: 'Crawler, logs' },
    { name: 'Lafoule', type: 'Agence Branding', metiers: ['Branding'] },
    { name: 'Fractory', type: 'Agence web', metiers: ['Création de site'], specialisation: 'E-commerce' },
    { name: 'Digiwiks', type: 'Indépendant', metiers: ['SEA / SMA', 'Data'] },
    { name: 'Maeven', type: 'Agence media', metiers: ['SEA / SMA'] },
    { name: 'Super8', type: 'Agence Branding', metiers: ['Branding', 'UI/UX'], specialisation: 'Brand, Design' },
    { name: 'Studio CAD', type: 'Agence web', metiers: ['Création de site', 'UI/UX'], specialisation: 'WordPress' },
    { name: 'Neoweb', type: 'Agence web', metiers: ['Création de site'], specialisation: 'WordPress' },
    { name: 'Panorama Prod', type: 'Agence', metiers: ['Contenu'] },
    { name: 'Pipo & Lola', type: 'Agence', metiers: ['Contenu'] },
    { name: 'Ocho Creative Studio', type: 'Agence', metiers: ['Contenu'] },
    { name: 'OP1C', type: 'Agence', metiers: ['SEA / SMA', 'Influence'] },
    { name: 'BASH/', type: 'Agence', metiers: ['Création de site', 'Contenu'] },
  ];

  const filters = ['Tous', 'Création de site', 'Contenu', 'UI/UX', 'Branding', 'SEA / SMA', 'Influence', 'Data', 'SEO Tech'];

  const filteredPartners = activeFilter === 'Tous'
    ? partners
    : partners.filter(p => p.metiers.includes(activeFilter));

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="font-bold text-white text-center mb-3 sm:mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>
          Une équipe All-star. Orchestrée
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          pour performer.
        </h2>

        {/* Subtitle */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-description text-white/70">
            UX, contenu, tracking, campagnes, branding...
          </p>
          <p className="text-description text-white/70">
            On réunit les meilleurs. Et on les fait jouer ensemble.
          </p>
        </div>

        {/* Filter Menu */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          {/* Desktop: inline filters */}
          <div className="hidden sm:flex justify-center">
            <div
              className="inline-flex bg-[#2C2E34] flex-nowrap"
              style={{
                padding: '7.5px 15px',
                borderRadius: '37.5px',
              }}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`transition-all duration-300 whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-white text-[#2C2E34]'
                      : 'text-white hover:text-white/80'
                  }`}
                  style={{
                    padding: '7.5px 22.5px',
                    borderRadius: '22.5px',
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 700,
                    fontSize: '11.25px',
                    lineHeight: '145%',
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                  }}
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
                className={`transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-[#2C2E34]'
                    : 'bg-[#2C2E34] text-white'
                }`}
                style={{
                  padding: '7.5px 15px',
                  borderRadius: '22.5px',
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 700,
                  fontSize: '10px',
                  lineHeight: '145%',
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid - Transparent pills with white border */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="group relative rounded-full cursor-default transition-all duration-300 p-[1px] bg-white/30 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD]"
            >
              <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-[#1a1a1a]">
                <span className="relative text-white/90 text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
