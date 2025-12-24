const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Comprendre qui cherche',
      subtitle: 'et pourquoi',
    },
    {
      number: 2,
      title: 'Créer des stratégies',
      subtitle: "qui captent l'attention",
    },
    {
      number: 3,
      title: 'Exécuter et optimiser',
      subtitle: 'en continu',
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-10 sm:mb-12 md:mb-16 italic leading-tight">
          De la recherche à la conversion.
          <br />
          Soyez la marque qu&apos;on clique,
          <br />
          qu&apos;on cite et qu&apos;on suit.
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500"
            >
              <div className="bg-[#252525] rounded-2xl p-6 sm:p-8 py-8 sm:py-10 flex flex-col items-center text-center h-full">
                {/* Number Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-500 flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-white text-lg sm:text-xl font-medium">{step.number}</span>
                </div>

                {/* Text */}
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
