'use client';

import Link from 'next/link';

interface PrestationCard {
  title: string;
  description: string;
  href: string;
}

interface MaillagePrestationProps {
  title?: string;
  cards?: PrestationCard[];
}

const defaultCards: PrestationCard[] = [
  {
    title: 'GEO',
    description: 'Le SEO sur les IA/LLM',
    href: '/seo/prestations/agence-geo',
  },
  {
    title: 'Paid Search',
    description: 'Générer du trafic payant',
    href: '/ads/sea',
  },
  {
    title: 'Google Ads',
    description: 'Campagnes publicitaires',
    href: '/ads/prestations/google-ads',
  },
  {
    title: 'R&D & Outils',
    description: 'Nos outils SEO internes',
    href: '/r-and-d',
  },
];

const MaillagePrestation = ({
  title = "Les synergies qui font performer votre SEO",
  cards = defaultCards,
}: MaillagePrestationProps) => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Gradient ellipse - wider than tall */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[150px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #FF8025 2.17%, #FC5B5B 31.77%, #926BF4 75.57%, #7655EF 86.51%)',
          opacity: 0.85,
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-[1072px] mx-auto flex flex-col items-center gap-[45px]">
        {/* Title */}
        <h2
          className="font-bold text-white text-center whitespace-pre-line leading-tight"
          style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}
        >
          {title}
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-[15px] w-full">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group flex flex-row justify-center items-center p-[22.5px] gap-[22.5px] w-full sm:w-[336px] h-auto sm:h-[94.75px] bg-[#2C2E34] border border-white/10 rounded-[11.25px] hover:border-white/20 transition-all duration-300"
            >
              {/* Text Content */}
              <div className="flex flex-col items-start gap-[3.75px] flex-1">
                <span
                  className="text-white font-semibold"
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: '18.75px',
                    lineHeight: '130%',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.title}
                </span>
                <span
                  className="text-white/70"
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '145%',
                  }}
                >
                  {card.description}
                </span>
              </div>

              {/* Arrow Button */}
              <div className="flex items-center justify-center w-[21px] h-[21px] bg-white rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4H8M8 4L5 1M8 4L5 7"
                    stroke="#2C2E34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaillagePrestation;
