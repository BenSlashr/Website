const Tools = () => {
  const tools = [
    { name: 'Robots.txt checker', icon: 'robot', angle: 0 },
    { name: 'Analyse SERP', icon: 'grid', angle: 45 },
    { name: 'Knowledge Graph Explorer', icon: 'graph', angle: 90 },
    { name: 'Site Radius', icon: 'radar', angle: 135 },
    { name: 'Content Writer', icon: 'edit', angle: 180 },
    { name: 'Tracking GEO', icon: 'location', angle: 225 },
    { name: 'Analyse sémantique', icon: 'target', angle: 270 },
    { name: 'Redirection', icon: 'redirect', angle: 315 },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'robot':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'grid':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
      case 'graph':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'radar':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'redirect':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'target':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'edit':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative mt-6 md:mt-10 mb-2 md:mb-6">
      {/* Mobile Layout - Clean card design */}
      <div className="md:hidden bg-[#1a1a1a] py-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Tag */}
          <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-4 py-2 rounded-full mb-8 uppercase tracking-wider">
            Nos outils
          </span>

          {/* Title */}
          <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(28px, 6vw, 36px)' }}>
            Des outils conçus pour ce nouveau Search
          </h2>

          {/* Description */}
          <p className="text-description text-white/70 mb-2">
            Les outils traditionnels ne suffisent plus.
          </p>
          <p className="text-description text-white/70 mb-8">
            Nous avons développé notre propre stack pour aller plus vite, prioriser ce qui crée de la valeur et exécuter sans friction.
          </p>

          {/* Tools Grid - Mobile */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 text-white text-sm"
              >
                {getIcon(tool.icon)}
                <span className="text-left text-xs">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#outils"
            className="bg-white hover:bg-white/90 transition-colors inline-flex items-center justify-center"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '145%',
              color: '#2C2E34',
              padding: '15px 30px',
              borderRadius: '37.5px',
            }}
          >
            Découvrir nos outils
          </a>
        </div>
      </div>

      {/* Desktop Layout - Circle design with orbiting tools */}
      <div className="hidden md:block tools-gradient relative py-40 px-6 min-h-[900px] overflow-visible">
        {/* Orbiting container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible z-20">
          <div className="relative w-[1000px] h-[1000px] animate-orbit">
            {tools.map((tool) => {
              // Rayon de base: cercle noir = 260px de rayon, + 140px d'écart = 400px du centre
              const radius = 400;
              const angleRad = (tool.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <div
                  key={tool.name}
                  className="absolute bg-white/10 backdrop-blur-sm border border-white/50 rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-description whitespace-nowrap animate-counter-orbit"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {getIcon(tool.icon)}
                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gradient circle - positioned relative to center */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none z-10"
          style={{
            background: 'linear-gradient(90deg, #FF8025 2.17%, #FC5B5B 31.77%, #926BF4 75.57%, #7655EF 86.51%)',
            opacity: 0.65,
            filter: 'blur(80px)',
          }}
        />

        {/* Central Dark Circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[480px] h-[480px] lg:w-[520px] lg:h-[520px] bg-[#1a1a1a] rounded-full flex flex-col items-center justify-center text-center px-10 shadow-2xl">
          {/* Title */}
          <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: '36px' }}>
            Des outils conçus pour ce nouveau Search
          </h2>

          {/* Description */}
          <p className="text-description text-white/70 mb-1 text-center">
            Les outils traditionnels ne suffisent plus.
          </p>
          <p className="text-description text-white/70 mb-8 max-w-md text-center">
            Nous avons développé notre propre stack pour aller plus vite, prioriser ce qui crée de la valeur et exécuter sans friction.
          </p>

          {/* CTA Button */}
          <a
            href="#outils"
            className="bg-white hover:bg-white/90 transition-colors inline-flex items-center justify-center"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '145%',
              color: '#2C2E34',
              padding: '15px 30px',
              borderRadius: '37.5px',
            }}
          >
            Découvrir nos outils
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tools;
