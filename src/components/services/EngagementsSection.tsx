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
  subtitle = "Pourquoi choisir Slashr ?",
  engagements
}: EngagementsSectionProps) => {
  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-lg">{subtitle}</p>
          )}
        </div>

        {/* Engagements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Number */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-xl mb-4">
                {engagement.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {engagement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementsSection;
