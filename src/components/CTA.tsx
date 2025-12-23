const CTA = () => {
  return (
    <section className="relative pt-20 sm:pt-28 md:pt-36 pb-0 px-4 sm:px-6 overflow-hidden">
      {/* Gradient Background - full height behind everything */}
      <div
        className="absolute inset-0 top-0"
        style={{
          background: `
            linear-gradient(to bottom, #1a1a1a 0%, transparent 20%),
            radial-gradient(ellipse 100% 80% at 20% 100%, rgba(255, 120, 40, 1) 0%, rgba(255, 100, 30, 0.7) 25%, transparent 50%),
            radial-gradient(ellipse 80% 80% at 50% 100%, rgba(236, 72, 153, 1) 0%, rgba(200, 50, 150, 0.7) 25%, transparent 50%),
            radial-gradient(ellipse 100% 80% at 80% 100%, rgba(160, 50, 200, 1) 0%, rgba(140, 40, 180, 0.7) 25%, transparent 50%),
            #1a1a1a
          `,
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 italic">
          Et vous,
          <br />
          que cherchez-vous ?
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <button className="bg-[#252525] text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-[#353535] transition-colors">
            Demander une démo des outils
          </button>
          <button className="bg-transparent border border-gray-600 text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
            Nous briefer
          </button>
          <button className="bg-transparent border border-gray-600 text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            Prendre RDV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Spacer for gradient visibility */}
      <div className="h-[200px] sm:h-[280px] md:h-[350px]" />
    </section>
  );
};

export default CTA;
