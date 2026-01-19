'use client';

interface IrritantCard {
  title: string;
  description: string;
}

interface IrritantSectionProps {
  heading?: string;
  cards: IrritantCard[];
  ctaText?: string;
  ctaHref?: string;
}

const IrritantSection = ({
  heading = "Vous accompagner pour performer",
  cards,
  ctaText,
  ctaHref = "/#contact"
}: IrritantSectionProps) => {
  return (
    <section className="bg-[#1a1a1a] py-16 md:py-20 px-6">
      <div className="max-w-[1291px] mx-auto flex flex-col gap-[45px]">
        {/* Heading - uses global h2 styles (Inter, font-weight 700) */}
        <h2
          className="text-white w-full font-bold"
          style={{
            fontSize: 'clamp(28px, 5vw, 45px)',
            lineHeight: '110%',
            letterSpacing: '-0.04em'
          }}
        >
          {heading}
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-[14px] w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-[15px] p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] flex-1"
            >
              <div
                className="flex flex-col items-center justify-center px-[45px] py-[60px] gap-[11.25px] h-full rounded-[14px] bg-[#2C2E34]"
                style={{
                  minHeight: '204.25px'
                }}
              >
                {/* Card Title - uses global h3 styles (Inter, font-weight 700) */}
                <h3
                  className="text-white text-center font-bold"
                  style={{
                    fontSize: '20px',
                    lineHeight: '130%',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description - Geist font */}
                <p
                  className="text-white/70 text-center w-full text-description"
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="flex justify-center">
            <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold text-[15px] leading-[145%] transition-colors"
              >
                {ctaText}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IrritantSection;
