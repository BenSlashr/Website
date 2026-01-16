'use client';

interface PrestationLink {
  label: string;
  href: string;
}

interface PrestationCard {
  title: string;
  description: string;
  links: PrestationLink[];
}

interface PrestationsSectionProps {
  title?: string;
  cards: PrestationCard[];
}

const PrestationsSection = ({
  title = "Nos prestations",
  cards
}: PrestationsSectionProps) => {
  return (
    <section className="relative bg-[#1a1a1a] py-16 md:py-24 px-6 overflow-visible">
      {/* Gradient circle - same style as Tools component */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #FF8025 2.17%, #FC5B5B 31.77%, #926BF4 75.57%, #7655EF 86.51%)',
          opacity: 0.65,
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-[1072px] mx-auto flex flex-col items-center gap-[60px]">
        {/* Title */}
        <h2
          className="text-white text-center font-bold w-full"
          style={{
            fontSize: 'clamp(28px, 5vw, 45px)',
            lineHeight: '110%',
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-[37.5px_45px] gap-[37.5px] bg-[#2C2E34] rounded-[15px]"
            >
              {/* Card header */}
              <div className="flex flex-col items-start pt-[11.25px] gap-[11.25px] w-full">
                <h3
                  className="text-white font-bold"
                  style={{
                    fontSize: '20px',
                    lineHeight: '130%',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-white/70 w-full"
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '145%',
                  }}
                >
                  {card.description}
                </p>
              </div>

              {/* Links list */}
              <div className="flex flex-col items-start gap-[15px]">
                {card.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="flex items-center gap-[11px] group"
                  >
                    {/* Arrow circle */}
                    <div className="w-[21px] h-[21px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                        className="text-[#2C2E34]"
                      >
                        <path
                          d="M1 4H8M8 4L5 1M8 4L5 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Link text with underline */}
                    <span
                      className="text-white font-semibold border-b border-white transition-colors group-hover:text-white/80 group-hover:border-white/80"
                      style={{
                        fontSize: '15px',
                        lineHeight: '145%',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrestationsSection;
