import { Benefit } from '@/lib/prestationsWP';

interface BenefitsSectionProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

const getIcon = (iconName: string, size: 'small' | 'medium' | 'large') => {
  const iconClass = size === 'large' ? 'w-8 h-8' : 'w-6 h-6';

  switch (iconName) {
    case 'user':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'code':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'check':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'chart':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'target':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
        </svg>
      );
    case 'globe':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case 'zap':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      );
  }
};

// Fonction pour rendre le titre avec highlight
const renderTitle = (title: string, highlight?: string) => {
  if (!highlight) return title;

  const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === highlight.toLowerCase()
      ? <span key={i} className="text-orange-400">{part}</span>
      : part
  );
};

// Classes CSS pour les différentes tailles de cards
const getCardClasses = (size: 'small' | 'medium' | 'large', index: number) => {
  // Layout bento : alternance de tailles pour un effet visuel intéressant
  // Position 0: large (2 cols), Position 1: medium, Position 2: medium
  // Position 3: medium, Position 4: medium, Position 5: large (2 cols)
  const layouts: Record<number, string> = {
    0: 'md:col-span-2 md:row-span-1', // Large - première position
    1: 'md:col-span-1 md:row-span-1', // Medium
    2: 'md:col-span-1 md:row-span-1', // Medium
    3: 'md:col-span-1 md:row-span-1', // Medium
    4: 'md:col-span-1 md:row-span-1', // Medium
    5: 'md:col-span-2 md:row-span-1', // Large - dernière position
  };

  // Si on a des données size, on les utilise, sinon on utilise le layout par défaut
  if (size === 'large') return 'md:col-span-2 md:row-span-1';
  if (size === 'medium') return 'md:col-span-1 md:row-span-1';

  return layouts[index % 6] || 'md:col-span-1 md:row-span-1';
};

const BenefitsSection = ({ title, subtitle, benefits }: BenefitsSectionProps) => {
  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-400 text-sm font-medium uppercase tracking-wider mb-4">
            Avantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => {
            const isLarge = benefit.size === 'large' || index === 0 || index === 5;

            return (
              <div
                key={index}
                className={`
                  group relative overflow-hidden rounded-2xl
                  ${getCardClasses(benefit.size, index)}
                  ${isLarge ? 'p-8 md:p-10' : 'p-6 md:p-8'}
                  bg-gradient-to-br from-[#252525] to-[#1f1f1f]
                  border border-white/5
                  hover:border-orange-500/20
                  transition-all duration-300
                `}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

                {/* Decorative element for large cards */}
                {isLarge && (
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-300" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`
                    flex-shrink-0 rounded-xl flex items-center justify-center mb-5
                    ${isLarge ? 'w-14 h-14' : 'w-12 h-12'}
                    bg-gradient-to-br from-orange-500/10 to-orange-500/5
                    text-orange-400
                    group-hover:from-orange-500/20 group-hover:to-orange-500/10
                    transition-all duration-300
                  `}>
                    {getIcon(benefit.icon, benefit.size)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className={`
                      font-semibold text-white mb-3 leading-tight
                      ${isLarge ? 'text-xl md:text-2xl' : 'text-lg'}
                    `}>
                      {renderTitle(benefit.title, benefit.highlight)}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-gray-400 leading-relaxed
                      ${isLarge ? 'text-base' : 'text-sm'}
                    `}>
                      {benefit.description}
                    </p>
                  </div>

                  {/* Visual indicator for large cards */}
                  {isLarge && (
                    <div className="mt-6 flex items-center text-orange-400/60 group-hover:text-orange-400 transition-colors">
                      <div className="w-8 h-[2px] bg-current rounded-full" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
