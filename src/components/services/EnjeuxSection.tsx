import Link from 'next/link';

interface ExpertiseLink {
  text: string;
  href: string;
  highlight?: string;
}

interface EnjeuxSectionProps {
  tag?: string;
  title: string;
  intro: string;
  expertiseLinks: ExpertiseLink[];
  ctaText?: string;
  ctaHref?: string;
}

const EnjeuxSection = ({
  tag = "ENJEUX",
  title,
  intro,
  expertiseLinks,
  ctaText,
  ctaHref,
}: EnjeuxSectionProps) => {
  return (
    <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            {/* Tag */}
            <span className="inline-block text-xs tracking-[0.3em] text-orange-500 uppercase mb-4 font-medium">
              {tag}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>

            {/* Intro text */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {intro}
            </p>

            {/* CTA if provided */}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                {ctaText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>

          {/* Right side - Expertise cards */}
          <div className="space-y-4">
            {expertiseLinks.map((expertise, index) => (
              <Link
                key={index}
                href={expertise.href}
                className="group block relative bg-[#252525] rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Number indicator */}
                    <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-500 group-hover:text-orange-500 transition-colors font-mono text-sm">
                      0{index + 1}
                    </div>

                    {/* Text content */}
                    <div>
                      <p className="text-white group-hover:text-orange-400 transition-colors">
                        {expertise.text}
                        {expertise.highlight && (
                          <span className="text-orange-400 font-medium"> {expertise.highlight}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjeuxSection;
