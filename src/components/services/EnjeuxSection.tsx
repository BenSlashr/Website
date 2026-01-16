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
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E74601]/10 to-[#CE08A9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#8962FD]/10 to-[#E74601]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            {/* Tag */}
            <span className="inline-block text-xs tracking-[0.3em] text-[#E74601] uppercase mb-4 font-medium">
              {tag}
            </span>

            {/* Title */}
            <h2
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(28px, 5vw, 45px)',
                lineHeight: '110%',
                letterSpacing: '-0.04em',
              }}
            >
              {title}
            </h2>

            {/* Intro text */}
            <p
              className="text-white/70 mb-8"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '145%',
              }}
            >
              {intro}
            </p>

            {/* CTA if provided */}
            {ctaText && ctaHref && (
              <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold text-[15px] leading-[145%] transition-colors"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Right side - Expertise cards */}
          <div className="space-y-4">
            {expertiseLinks.map((expertise, index) => (
              <Link
                key={index}
                href={expertise.href}
                className="group block relative bg-[#2C2E34] rounded-2xl p-6 border border-gray-800 hover:border-[#E74601]/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#E74601]/0 to-[#CE08A9]/0 group-hover:from-[#E74601]/5 group-hover:to-[#CE08A9]/5 transition-all duration-300" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Number indicator */}
                    <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-500 group-hover:text-[#E74601] transition-colors font-mono text-sm">
                      0{index + 1}
                    </div>

                    {/* Text content */}
                    <div>
                      <p className="text-white group-hover:text-[#E74601] transition-colors">
                        {expertise.text}
                        {expertise.highlight && (
                          <span className="text-[#E74601] font-medium"> {expertise.highlight}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#E74601] transition-all duration-300">
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
