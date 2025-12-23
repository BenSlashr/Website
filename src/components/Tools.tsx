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
    <section className="tools-gradient relative py-20 md:py-36 px-6 min-h-[600px] md:min-h-[800px] overflow-hidden md:overflow-visible flex items-center justify-center mt-24 md:mt-40">
      {/* Orbiting container - hidden on mobile */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center overflow-visible">
        <div className="relative w-[1000px] h-[1000px] animate-orbit">
          {tools.map((tool) => {
            const radius = 455;
            const angleRad = (tool.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <div
                key={tool.name}
                className="absolute bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm whitespace-nowrap animate-counter-orbit"
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

      {/* Central Dark Circle */}
      <div className="relative z-10 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] bg-[#1f1f1f] rounded-full flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 shadow-2xl">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 italic leading-tight">
          Des outils faits-maison pour
          <br />
          vous accompagner.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-1">
          Notre accompagnement n'est pas qu'humain.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-md">
          Il s'accompagne d'outils développés spécialement pour vous aider à
          auditer, analyser, exécuter.
        </p>

        {/* CTA Button */}
        <a
          href="#outils"
          className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Découvrir nos outils
        </a>
      </div>
    </section>
  );
};

export default Tools;
