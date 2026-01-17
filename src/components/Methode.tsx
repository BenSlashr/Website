interface MethodeItem {
  number: string;
  title: string;
  description: string;
}

interface MethodeProps {
  title: string;
  description: string;
  items: MethodeItem[];
  ctaText?: string;
  ctaHref?: string;
}

const Methode = ({
  title,
  description,
  items,
  ctaText = 'Discuter avec un expert',
  ctaHref = '/contact',
}: MethodeProps) => {
  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 lg:items-start">
          {/* Colonne gauche - Sticky */}
          <div className="lg:sticky lg:top-28 lg:w-[380px] xl:w-[420px] flex-shrink-0 self-start">
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

            <p
              className="text-white/70 mb-8"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '145%',
              }}
            >
              {description}
            </p>

            <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold text-[15px] leading-[145%] transition-colors"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Colonne droite - Liste numérotée */}
          <div className="flex-1 flex flex-col gap-4 lg:min-h-[800px]">
            {items.map((item, index) => (
              <div
                key={index}
                className="group rounded-[15px] p-[1px] bg-white/10 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300 cursor-default"
              >
                <div className="bg-[#2C2E34] rounded-[14px] p-6 sm:p-8 flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <span
                      className="bg-gradient-to-r from-[#E74601] to-[#CE08A9] bg-clip-text text-transparent font-bold flex-shrink-0"
                      style={{
                        fontSize: '20px',
                        lineHeight: '130%',
                      }}
                    >
                      {item.number}
                    </span>
                    <h3
                      className="text-white font-bold group-hover:text-white transition-colors"
                      style={{
                        fontSize: '20px',
                        lineHeight: '130%',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-white/70 group-hover:text-white/90 transition-colors"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '145%',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methode;
