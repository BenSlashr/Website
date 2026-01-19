const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 rounded-b-[40px] sm:rounded-b-[75px] overflow-hidden hero-gradient">
      {/* Violet gradient layer */}
      <div className="hero-gradient-violet" />

      {/* Content - above the gradients */}
      <div className="relative z-10 flex flex-col items-center gap-[60px] max-w-[952px] px-4">
        {/* Tag - Geist 11.25px bold */}
        <span
          className="uppercase text-white"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 700,
            fontSize: '11.25px',
            lineHeight: '140%',
            letterSpacing: '-0.01em'
          }}
        >
          Agence SEO & Search Marketing
        </span>

        {/* Main Title - Funnel Display 90px */}
        <h1
          className="text-white max-w-[818px] font-semibold text-center"
          style={{
            fontFamily: '"Funnel Display", sans-serif',
            fontSize: 'clamp(40px, 8vw, 90px)',
            lineHeight: '95%',
            letterSpacing: '-0.03em',
          }}
        >
          Prenez le contrôle
          <br />
          du Search
        </h1>

        {/* Subtitles container */}
        <div className="flex flex-col items-center gap-[30px] w-full">
          {/* Subtitle + Description */}
          <div className="flex flex-col items-center gap-[7.5px]">
            {/* Subtitle - Geist 18.75px semibold */}
            <p
              className="text-white"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(14px, 2.5vw, 18.75px)',
                lineHeight: '130%',
                letterSpacing: '-0.01em',
                textAlign: 'center'
              }}
            >
              L&apos;agence des marques qui veulent gagner la bataille de l&apos;attention.
            </p>

            {/* Description - Geist 15px regular */}
            <p
              className="text-white/90"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(13px, 2vw, 15px)',
                lineHeight: '145%',
                textAlign: 'center'
              }}
            >
              Google, ChatGPT, TikTok, YouTube...<br />
              Où qu&apos;ils cherchent, vos clients doivent tomber sur vous.
            </p>
          </div>

          {/* CTA Button - Geist 15px semibold */}
          <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold text-[15px] leading-[145%] transition-colors"
            >
              Prenez l&apos;avantage maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
