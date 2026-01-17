const CALENDLY_URL = 'https://calendly.com/quentin-slashr/appel-de-decouverte-client-by-slashr?back=1';

const CTA = () => {
  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 pb-0 px-4 sm:px-6 overflow-hidden">
      {/* Gradient Background - Ellipse 38 centered, bottom half hidden */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] -bottom-[550px]"
        style={{
          background: 'linear-gradient(90deg, #E74601 0%, #FF9011 25%, #CE08A9 50%, #CE16B5 70%, #8962FD 85%, #AD21FE 100%)',
          filter: 'blur(87.5px)',
          borderRadius: '50%',
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="font-bold text-white mb-8 sm:mb-10 leading-tight" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>
          Et vous, que cherchez-vous&nbsp;?
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-[11.25px]">
          {/* Button Secondary - Demander une démo des outils */}
          <a
            href="/prestations/devis"
            className="flex items-center justify-center px-[30px] py-[15px] border border-white rounded-[37.5px] text-white font-semibold text-[15px] leading-[145%] hover:bg-white/10 transition-colors"
          >
            Demander une démo des outils
          </a>

          {/* Button Primary - Nous briefer */}
          <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
            <a
              href="/contact"
              className="flex items-center justify-center px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold text-[15px] leading-[145%] transition-colors"
            >
              Nous briefer
            </a>
          </div>

          {/* Button Primary - Prendre RDV with calendar icon */}
          <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[7.5px] px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold text-[15px] leading-[145%] transition-colors"
            >
              Prendre RDV
              <svg className="w-[13px] h-[13px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for gradient visibility */}
      <div className="h-[200px] sm:h-[280px] md:h-[350px]" />
    </section>
  );
};

export default CTA;
