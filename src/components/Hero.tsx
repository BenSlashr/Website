import dynamic from 'next/dynamic';

const LiquidGradient = dynamic(() => import('./LiquidGradient'), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24 pb-10 sm:pb-12 rounded-b-[32px] sm:rounded-b-[40px] overflow-hidden">
      {/* Animated gradient background */}
      <LiquidGradient className="rounded-b-[40px]" />

      {/* Content - above the gradient */}
      <div className="relative z-10">
        {/* Tag */}
        <span className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-white/60 uppercase mb-4 sm:mb-6 md:mb-8 block">
          Agence SEO & Search Marketing
        </span>

        {/* Main Title */}
        <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 md:mb-8 max-w-5xl">
          Prenez le contrôle
          <br />
          du Search
        </h1>

        {/* Subtitle */}
        <div className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-6 sm:mb-8 md:mb-10 max-w-[90%] sm:max-w-lg md:max-w-xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-white font-medium">
            L&apos;agence des marques qui veulent gagner la bataille de l&apos;attention.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/80">
            Google, ChatGPT, TikTok, YouTube...
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/80">
            Où qu&apos;ils cherchent, vos clients doivent tomber sur vous.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-white text-black px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-white/90 transition-colors inline-block min-h-[44px]"
        >
          Prenez l&apos;avantage maintenant
        </a>
      </div>
    </section>
  );
};

export default Hero;
