interface QualificationSectionProps {
  forYou?: string[];
  notForYou?: string[];
  forYouTitle?: string;
  notForYouTitle?: string;
}

const QualificationSection = ({
  forYou,
  notForYou,
  forYouTitle = "Cette prestation est faite pour vous si...",
  notForYouTitle = "En revanche, passez votre chemin si..."
}: QualificationSectionProps) => {
  if (!forYou && !notForYou) return null;

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Pour vous */}
          {forYou && forYou.length > 0 && (
            <div className="rounded-[15px] p-[1px] bg-gradient-to-r from-green-500/30 to-green-500/10">
              <div className="bg-[#2C2E34] rounded-[14px] p-6 sm:p-8 h-full">
                <h3
                  className="font-bold text-white mb-6"
                  style={{ fontSize: 'clamp(20px, 4vw, 24px)' }}
                >
                  {forYouTitle}
                </h3>
                <ul className="space-y-4">
                  {forYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
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
            </div>
          )}

          {/* Pas pour vous */}
          {notForYou && notForYou.length > 0 && (
            <div className="rounded-[15px] p-[1px] bg-gradient-to-r from-red-500/30 to-red-500/10">
              <div className="bg-[#2C2E34] rounded-[14px] p-6 sm:p-8 h-full">
                <h3
                  className="font-bold text-white mb-6"
                  style={{ fontSize: 'clamp(20px, 4vw, 24px)' }}
                >
                  {notForYouTitle}
                </h3>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
