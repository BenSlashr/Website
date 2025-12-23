const Specialists = () => {
  const platforms = [
    {
      name: 'amazon',
      logo: (
        <div className="text-white font-bold text-2xl tracking-tight">
          amazon
          <svg className="inline-block w-16 h-2 ml-0 -mt-1" viewBox="0 0 60 10">
            <path d="M0 8 Q30 0 60 8" stroke="#FF9900" strokeWidth="3" fill="none" />
          </svg>
        </div>
      ),
    },
    {
      name: 'google',
      logo: (
        <div className="text-2xl font-medium">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>
      ),
    },
    {
      name: 'openai',
      logo: (
        <div className="flex items-center gap-2 text-white">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
          </svg>
          <span className="font-medium text-xl">OpenAI</span>
        </div>
      ),
    },
    {
      name: 'tiktok',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="url(#tiktok-gradient)"/>
            <defs>
              <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#25F4EE"/>
                <stop offset="50%" stopColor="#FE2C55"/>
                <stop offset="100%" stopColor="#FE2C55"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-white font-bold text-xl">TikTok</span>
        </div>
      ),
    },
    {
      name: 'youtube',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-10 h-7" viewBox="0 0 90 20" fill="none">
            <rect x="0" y="2" width="28" height="16" rx="4" fill="#FF0000"/>
            <path d="M11 6l7 4-7 4V6z" fill="white"/>
          </svg>
          <span className="text-white font-medium text-xl">YouTube</span>
        </div>
      ),
    },
    {
      name: 'instagram',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            <defs>
              <radialGradient id="instagram-gradient" cx="30%" cy="107%" r="150%">
                <stop offset="0%" stopColor="#fdf497"/>
                <stop offset="10%" stopColor="#fd5949"/>
                <stop offset="50%" stopColor="#d6249f"/>
                <stop offset="100%" stopColor="#285AEB"/>
              </radialGradient>
            </defs>
          </svg>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 font-medium text-xl">Instagram</span>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-4 sm:px-6 overflow-visible">
      <div className="max-w-[1600px] mx-auto overflow-visible">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-4 sm:mb-6 italic leading-tight">
          Nous sommes des spécialistes de
          <br />
          la recherche.
        </h2>

        {/* Subtitles */}
        <div className="text-center space-y-1 sm:space-y-2 mb-12 sm:mb-16 md:mb-20 max-w-lg mx-auto">
          <p className="text-gray-400 text-sm sm:text-base">
            Une stratégie. Tous les leviers. Un seul pilote.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            SEO, SEA, Social Search, IA Search...
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            SLASHR active les bons canaux, au bon moment, pour la bonne audience
          </p>
        </div>

        {/* Platform Circles */}
        <div className="flex justify-center items-center overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 sm:-mx-6 md:mx-0 scrollbar-hide">
          <div className="flex items-center px-4 sm:px-6 md:px-0">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 flex-shrink-0"
                style={{ marginLeft: index > 0 ? '-12px' : '0' }}
              >
                {/* Circle border */}
                <div className="absolute inset-0 rounded-full border border-gray-700/50" />
                {/* Logo */}
                <div className="z-10 scale-50 sm:scale-75 md:scale-90 lg:scale-100">
                  {platform.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
