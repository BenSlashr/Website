'use client';

import dynamic from 'next/dynamic';

const LiquidGradient = dynamic(() => import('../LiquidGradient'), { ssr: false });

interface ServiceHeroProps {
  tag: string;
  title: string;
  description: string;
}

const ServiceHero = ({ tag, title, description }: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[calc(70vh+100px)] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 rounded-b-[40px] overflow-hidden">
      {/* Animated Gradient Background */}
      <LiquidGradient className="rounded-b-[40px]" />

      {/* Content - above gradient */}
      <div className="relative z-10">
        {/* Tag */}
        <span className="text-xs tracking-[0.2em] text-white/60 uppercase mb-8 block">
          {tag}
        </span>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 max-w-4xl">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-10 mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-colors"
        >
          Découvrir notre méthode
        </a>
      </div>
    </section>
  );
};

export default ServiceHero;
