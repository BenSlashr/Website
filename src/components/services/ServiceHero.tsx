interface ServiceHeroProps {
  title: string;
  description: string;
  ctaText?: string;
}

const ServiceHero = ({ title, description, ctaText = "Découvrir notre méthode" }: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[calc(70vh+100px)] flex flex-col justify-center px-6 pt-32 pb-16 rounded-b-[40px] sm:rounded-b-[75px] overflow-hidden service-hero-gradient">
      {/* Violet gradient layer */}
      <div className="service-hero-gradient-violet" />

      {/* Content - above gradient, aligned with sections (max-w-6xl mx-auto) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
        {/* Main Title */}
        <h1
          className="text-white leading-[1.1] mb-8 font-semibold"
          style={{
            fontFamily: '"Funnel Display", sans-serif',
            fontSize: 'clamp(36px, 7vw, 72px)',
            lineHeight: '95%',
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className="text-white/90 max-w-2xl mb-10"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: '145%',
          }}
        >
          {description}
        </p>

        {/* CTA Button */}
        <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold text-[15px] leading-[145%] transition-colors"
          >
            {ctaText}
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
