interface ComparisonSectionProps {
  title: string;
  withoutAgency: string[];
  withAgency: string[];
}

const ComparisonSection = ({ title, withoutAgency, withAgency }: ComparisonSectionProps) => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      {/* Gradient background */}
      <div
        className="absolute top-[40px] sm:top-[50px] md:top-[60px] left-0 right-0 h-[350px] sm:h-[400px] md:h-[500px] pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 30% 50% at 42% 50%, rgba(231, 70, 1, 1) 0%, transparent 70%),
            radial-gradient(ellipse 30% 50% at 58% 50%, rgba(137, 98, 253, 1) 0%, transparent 70%)
          `,
          filter: 'blur(30px)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <h2
          className="font-bold text-white text-center mb-10 sm:mb-12 md:mb-16"
          style={{
            fontSize: 'clamp(28px, 5vw, 45px)',
            lineHeight: '110%',
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </h2>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Without Agency */}
          <div className="bg-[#2C2E34] rounded-[15px] p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">Sans agence</h3>
            </div>
            <ul className="space-y-4">
              {withoutAgency.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  <span
                    className="text-white/70"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '145%',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Agency */}
          <div className="bg-[#2C2E34] rounded-[15px] p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2C2E34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">Avec Slashr</h3>
            </div>
            <ul className="space-y-4">
              {withAgency.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '145%',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
