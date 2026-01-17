interface WhyChooseUsPoint {
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  title: string;
  description?: string;
  subtitle?: string; // Pour rétrocompatibilité
  points: WhyChooseUsPoint[];
}

const WhyChooseUsSection = ({ title, description, subtitle, points }: WhyChooseUsSectionProps) => {
  // Support subtitle pour rétrocompatibilité
  const displayDescription = description || subtitle;

  // Icônes par défaut selon l'index
  const icons = [
    // Shield/Security
    <svg key="shield" className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // Lightning/Speed
    <svg key="lightning" className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Chart/Growth
    <svg key="chart" className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    // Target
    <svg key="target" className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>,
    // Users/Team
    <svg key="users" className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    // Cog/Settings
    <svg key="cog" className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
  ];

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-10 sm:mb-12">
          <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider">
            Pourquoi SLASHR
          </span>
          <h2
            className="font-bold text-white text-center leading-tight"
            style={{
              fontSize: 'clamp(28px, 5vw, 45px)',
              lineHeight: '110%',
              letterSpacing: '-0.04em',
            }}
          >
            {title}
          </h2>
          {displayDescription && (
            <p
              className="text-white/70 text-center max-w-2xl"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '145%',
              }}
            >
              {displayDescription}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="group rounded-[15px] p-[1px] bg-white/10 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-colors duration-300"
            >
              <div className="bg-[#2C2E34] rounded-[14px] p-6 sm:p-8 h-full">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  {icons[index % icons.length]}
                </div>
                <h3
                  className="text-white font-bold mb-3"
                  style={{ fontSize: '18px', lineHeight: '130%' }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '145%',
                  }}
                >
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
