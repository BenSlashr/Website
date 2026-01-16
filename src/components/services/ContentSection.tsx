interface ContentSectionProps {
  title: string;
  content: string | React.ReactNode;
  bulletPoints?: string[];
  className?: string;
}

const ContentSection = ({ title, content, bulletPoints, className = "" }: ContentSectionProps) => {
  return (
    <section className={`bg-[#1a1a1a] py-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2
          className="font-bold text-white mb-8"
          style={{
            fontSize: 'clamp(28px, 5vw, 45px)',
            lineHeight: '110%',
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </h2>

        {/* Content */}
        <div className="text-gray-300 text-base leading-relaxed space-y-4">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}
        </div>

        {/* Bullet Points */}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="mt-8 space-y-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-r from-[#E74601] to-[#CE08A9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
