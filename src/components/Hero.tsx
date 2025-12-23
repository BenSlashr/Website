import dynamic from 'next/dynamic';

const LiquidGradient = dynamic(() => import('./LiquidGradient'), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 rounded-b-[40px] overflow-hidden">
      {/* Animated gradient background */}
      <LiquidGradient className="rounded-b-[40px]" />

      {/* Content - above the gradient */}
      <div className="relative z-10">
        {/* Tag */}
        <span className="text-[10px] sm:text-xs tracking-[0.2em] text-white/60 uppercase mb-6 sm:mb-8 block">
          Agence SEO & Search Marketing
        </span>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 sm:mb-8 max-w-5xl">
          Prenez le contrôle
          <br />
          du Search
        </h1>

        {/* Subtitle */}
        <div className="space-y-1 sm:space-y-2 mb-8 sm:mb-10 max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium">
            L&apos;agence des marques qui veulent gagner la bataille de l&apos;attention.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white/60">
            Google, ChatGPT, TikTok, YouTube...
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white/60">
            Où qu&apos;ils cherchent, vos clients doivent tomber sur vous.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-white/90 transition-colors inline-block"
        >
          Prenez l&apos;avantage maintenant
        </a>
      </div>
    </section>
  );
};

export default Hero;
