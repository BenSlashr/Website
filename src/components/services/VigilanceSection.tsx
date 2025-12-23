interface VigilancePoint {
  title: string;
  description: string;
}

interface VigilanceSectionProps {
  title: string;
  points: VigilancePoint[];
}

const VigilanceSection = ({ title, points }: VigilanceSectionProps) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />

      {/* Decorative blurred circles for glass effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side - Sticky title */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-32">
              {/* Tag */}
              <span className="inline-block text-orange-400 text-sm font-medium uppercase tracking-wider mb-4">
                Vigilance
              </span>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>

              {/* Subtitle */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Des points d&apos;attention essentiels pour éviter les erreurs courantes et maximiser vos résultats.
              </p>

              {/* Decorative line */}
              <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full" />
            </div>
          </div>

          {/* Right side - Scrolling cards */}
          <div className="lg:w-3/5 space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glass card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Number indicator */}
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-500/30">
                    {index + 1}
                  </div>

                  {/* Warning icon */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-orange-300 transition-colors">
                        {point.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VigilanceSection;
