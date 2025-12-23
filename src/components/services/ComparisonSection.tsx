interface ComparisonSectionProps {
  title: string;
  withoutAgency: string[];
  withAgency: string[];
}

const ComparisonSection = ({ title, withoutAgency, withAgency }: ComparisonSectionProps) => {
  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          {title}
        </h2>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Without Agency */}
          <div className="bg-[#252525] rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl">Sans agence</h3>
            </div>
            <ul className="space-y-4">
              {withoutAgency.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Agency */}
          <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-2xl p-8 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl">Avec Slashr</h3>
            </div>
            <ul className="space-y-4">
              {withAgency.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{item}</span>
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
