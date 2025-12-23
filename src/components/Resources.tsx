const Resources = () => {
  const resources = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: 'Guides',
      description: 'Curabitur ac lorem Vivamus non justo in dui mattis posuere Etiam accumsan ligula id pede',
      cta: 'Suivre les guides',
      borderColor: 'border-gray-700',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      ),
      title: 'Vidéos',
      description: 'Curabitur ac lorem Vivamus non justo in dui mattis posuere Etiam accumsan ligula id pede',
      cta: 'Regarder les vidéos',
      borderColor: 'border-purple-500/50',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
        </svg>
      ),
      title: 'Outils',
      description: 'Curabitur ac lorem Vivamus non justo in dui mattis posuere Etiam accumsan ligula id pede',
      cta: 'Découvrir nos outils',
      borderColor: 'border-gray-700',
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 rounded-full uppercase tracking-wider">
            Ressources
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 italic">
          Apprenez grâce à des experts
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Social Media Card with gradient border */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-orange-500 via-purple-500 to-purple-600">
            <div className="bg-[#252525] rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center">
              <p className="text-white font-medium mb-6">
                Suivez-nous sur toutes
                <br />
                nos plateformes !
              </p>

              {/* Social Icons Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Spotify */}
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Resource Cards */}
          {resources.map((resource) => (
            <div
              key={resource.title}
              className={`bg-[#252525] rounded-2xl p-6 flex flex-col border ${resource.borderColor}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black mb-6">
                {resource.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-3">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {resource.description}
              </p>

              {/* CTA Button */}
              <button className="self-start bg-transparent border border-gray-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                {resource.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
