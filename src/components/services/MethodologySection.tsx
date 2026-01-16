'use client';

import { useEffect, useRef, useState } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface MethodologySectionProps {
  title?: string;
  steps: Step[];
}

const MethodologySection = ({ title = "LA MÉTHODOLOGIE SLASHR", steps }: MethodologySectionProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const startOffset = windowHeight * 0.6;
      const scrolled = startOffset - sectionTop;
      const totalScrollable = sectionHeight - windowHeight * 0.2;

      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollProgress(progress);

      // Determine active step based on progress
      const stepProgress = progress * steps.length;
      const currentStep = Math.min(Math.floor(stepProgress), steps.length - 1);
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  const lineProgress = Math.min(scrollProgress * 100, 100);

  return (
    <section ref={sectionRef} className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2
          className="font-bold text-white text-center mb-12 sm:mb-16 md:mb-20"
          style={{
            fontSize: 'clamp(28px, 5vw, 45px)',
            lineHeight: '110%',
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line Background (gray) - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

          {/* Vertical Line Progress (gradient) - hidden on mobile */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-px transition-all duration-150 ease-out"
            style={{
              height: `${lineProgress}%`,
              background: 'linear-gradient(180deg, #E74601 0%, #CE08A9 50%, #8962FD 100%)',
            }}
          />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = index <= activeStep;
              const stepProgress = scrollProgress * steps.length;
              const isCurrentlyAnimating = index === Math.floor(stepProgress) && stepProgress % 1 > 0;

              return (
                <div
                  key={step.number}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className={`relative md:flex md:items-center transition-all duration-500 ${
                    index !== steps.length - 1 ? 'md:pb-16' : ''
                  }`}
                >
                  {/* Left Content (even steps on desktop) */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pr-12 md:opacity-0 md:pointer-events-none'}`}>
                    {isEven && (
                      <div
                        className={`hidden md:block transition-all duration-500 ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
                        }`}
                      >
                        <h3
                          className="text-white font-bold mb-2"
                          style={{
                            fontSize: '20px',
                            lineHeight: '130%',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-white/70"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '145%',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center: Number bubble */}
                  <div className="flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-4 md:gap-0 mb-4 md:mb-0">
                    <div className="relative">
                      {/* Glow effect - only visible when active */}
                      <div
                        className={`absolute inset-0 rounded-full blur-md transition-opacity duration-500 ${
                          isActive ? 'opacity-50' : 'opacity-0'
                        }`}
                        style={{
                          background: 'linear-gradient(90deg, #E74601, #CE08A9)',
                        }}
                      />
                      {/* Pulse animation for currently animating step */}
                      {isCurrentlyAnimating && (
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-30"
                          style={{
                            background: 'linear-gradient(90deg, #E74601, #CE08A9)',
                          }}
                        />
                      )}
                      {/* Number circle */}
                      <div
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-500 ${
                          isActive
                            ? 'text-white scale-110'
                            : 'bg-[#2C2E34] text-white/50 scale-100'
                        }`}
                        style={isActive ? {
                          background: 'linear-gradient(90deg, #E74601, #CE08A9)',
                        } : undefined}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Mobile: Title next to number */}
                    <h3
                      className={`md:hidden font-bold text-lg transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-white/50'
                      }`}
                      style={{
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Right Content (odd steps on desktop) */}
                  <div className={`md:w-1/2 ${!isEven ? 'md:pl-12' : 'md:pl-12 md:opacity-0 md:pointer-events-none'}`}>
                    {!isEven && (
                      <div
                        className={`hidden md:block transition-all duration-500 ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'
                        }`}
                      >
                        <h3
                          className="text-white font-bold mb-2"
                          style={{
                            fontSize: '20px',
                            lineHeight: '130%',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-white/70"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '145%',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile: Description below */}
                  <p
                    className={`md:hidden pl-16 transition-colors duration-500 ${
                      isActive ? 'text-white/70' : 'text-white/40'
                    }`}
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '145%',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
