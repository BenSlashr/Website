interface ContentSectionProps {
  tag?: string;
  title: string;
  content: string | React.ReactNode;
  bulletPoints?: string[];
  className?: string;
}

const ContentSection = ({ tag, title, content, bulletPoints, className = "" }: ContentSectionProps) => {
  return (
    <section className={`bg-[#1a1a1a] py-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Tag */}
        {tag && (
          <span className="text-xs tracking-[0.2em] text-orange-500 uppercase mb-4 block">
            {tag}
          </span>
        )}

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
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
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
