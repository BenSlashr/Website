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
      // Start when section enters viewport, complete when section is fully scrolled
      const startOffset = windowHeight * 0.6; // Start animation when section is 60% in view
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  // Calculate line progress percentage
  const lineProgress = Math.min(scrollProgress * 100, 100);

  return (
    <section ref={sectionRef} className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-20">
          {title}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line Background (gray) - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700/50" />

          {/* Vertical Line Progress (gradient) - hidden on mobile */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500 transition-all duration-150 ease-out"
            style={{ height: `${lineProgress}%` }}
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
                        <h3 className="text-white font-semibold text-xl mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
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
                        className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-md transition-opacity duration-500 ${
                          isActive ? 'opacity-50' : 'opacity-0'
                        }`}
                      />
                      {/* Pulse animation for currently animating step */}
                      {isCurrentlyAnimating && (
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-ping opacity-30" />
                      )}
                      {/* Number circle */}
                      <div
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white scale-110'
                            : 'bg-gray-700 text-gray-400 scale-100'
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Mobile: Title next to number */}
                    <h3 className={`md:hidden font-semibold text-lg transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-gray-500'
                    }`}>
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
                        <h3 className="text-white font-semibold text-xl mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile: Description below */}
                  <p className={`md:hidden text-sm leading-relaxed pl-16 transition-colors duration-500 ${
                    isActive ? 'text-gray-400' : 'text-gray-600'
                  }`}>
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
