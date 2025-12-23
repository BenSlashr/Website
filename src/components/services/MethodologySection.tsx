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
  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-20">
          {title}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative md:flex md:items-center ${
                    index !== steps.length - 1 ? 'md:pb-16' : ''
                  }`}
                >
                  {/* Left Content (even steps on desktop) */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pr-12 md:opacity-0 md:pointer-events-none'}`}>
                    {isEven && (
                      <div className="hidden md:block">
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
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-md opacity-50" />
                      {/* Number circle */}
                      <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Mobile: Title next to number */}
                    <h3 className="md:hidden text-white font-semibold text-lg">
                      {step.title}
                    </h3>
                  </div>

                  {/* Right Content (odd steps on desktop) */}
                  <div className={`md:w-1/2 ${!isEven ? 'md:pl-12' : 'md:pl-12 md:opacity-0 md:pointer-events-none'}`}>
                    {!isEven && (
                      <div className="hidden md:block">
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
                  <p className="md:hidden text-gray-400 text-sm leading-relaxed pl-16">
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
