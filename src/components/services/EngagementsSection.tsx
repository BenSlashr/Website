interface Engagement {
  title: string;
  description: string;
}

interface EngagementsSectionProps {
  title?: string;
  subtitle?: string;
  engagements: Engagement[];
}

const EngagementsSection = ({
  title = "Nos 3 engagements",
  subtitle = "Pourquoi choisir Slashr\u00A0?",
  engagements
}: EngagementsSectionProps) => {
  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontSize: 'clamp(28px, 5vw, 45px)',
              lineHeight: '110%',
              letterSpacing: '-0.04em',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-white/70"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '145%',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Engagements Grid */}
        <div className="grid md:grid-cols-3 gap-[14px]">
          {engagements.map((engagement, index) => (
            <div
              key={index}
              className="group rounded-[15px] p-[1px] bg-white/10 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-colors duration-300"
            >
              <div className="flex flex-col items-center p-8 sm:p-[45px] gap-6 rounded-[14px] h-full bg-[#2C2E34] text-center">
                {/* Number */}
                <div className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center">
                  <span className="text-white text-xl font-medium">{index + 1}</span>
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-xl">
                  {engagement.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {engagement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementsSection;
