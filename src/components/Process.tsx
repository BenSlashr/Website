const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'La décision d\'achat se joue',
      subtitle: 'désormais avant le clic.',
    },
    {
      number: 2,
      title: 'L\'IA devient un prescripteur',
      subtitle: 'de marques.',
    },
    {
      number: 3,
      title: 'Prendre la parole sur le web',
      subtitle: 'n\'est plus une option.',
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="font-bold text-white mb-10 sm:mb-12 md:mb-16 leading-tight max-w-[66%]" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>
          Faites partie des marques qu&apos;on voit, qu&apos;on cite et qu&apos;on choisit.
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD]"
            >
              <div className="bg-[#2C2E34] rounded-2xl p-6 sm:p-8 py-8 sm:py-10 flex flex-col items-center text-center h-full">
                {/* Number Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-500 flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-white text-lg sm:text-xl font-medium">{step.number}</span>
                </div>

                {/* Text */}
                <p className="text-white font-semibold text-base sm:text-lg">
                  {step.title} {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
