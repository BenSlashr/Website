'use client';

interface EngagementCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface EngagementsProps {
  tag?: string;
  title?: string;
  cards?: EngagementCard[];
}

const defaultCards: EngagementCard[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 2L9.586 9.586" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Un Account Manager senior pour piloter votre projet.',
    description: 'Le "SLASHR" pilote votre projet avec un subtil équilibre entre process (pour structurer) et agilité (pour s\'adapter et accélérer). Il anime les experts pour les faire avancer ensemble vers un même objectif, le vôtre.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2C2E34" strokeWidth="2"/>
        <path d="M12 12L12 8" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12L16 14" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 12H4M20 12H22M12 2V4M12 20V22" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Une approche multicanale du Search',
    description: 'Google, ChatGPT, TikTok, YouTube... Où qu\'ils cherchent, vos clients doivent tomber sur vous. Nous orchestrons votre présence sur tous les canaux de recherche pour maximiser votre visibilité.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#2C2E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Des experts SEO et un écosystème de partenaires',
    description: 'SLASHR s\'appuie sur des consultants spécialisés, des créateurs de contenu et de nombreux experts pour faire émerger votre marque sur le web. Un réseau de talents au service de votre croissance.',
  },
];

const Engagements = ({
  tag = 'Nos engagements',
  title = 'Pourquoi choisir Slashr ?',
  cards = defaultCards,
}: EngagementsProps) => {
  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-[45px] max-w-[1291px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[30px] w-full">
          {/* Tag */}
          <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider">
            {tag}
          </span>

          {/* Title */}
          <h2
            className="font-bold text-white text-center w-full"
            style={{
              fontSize: 'clamp(28px, 5vw, 45px)',
              lineHeight: '110%',
              letterSpacing: '-0.04em',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-8 sm:p-[60px_45px] gap-[37.5px] rounded-[15px] border border-white/10"
              style={{
                background: 'rgba(44, 46, 52, 0.5)',
                backdropFilter: 'blur(12.5px)',
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-[52px] h-[52px] bg-white rounded-[11.25px]">
                {card.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col items-start gap-[15px]">
                {/* Title */}
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

                {/* Description */}
                <p
                  className="text-white/70"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
