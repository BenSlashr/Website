const Newsletter = () => {
  return (
    <section className="relative px-4 sm:px-6 pt-0 pb-12 sm:pb-16 md:pb-20 -mt-[50px] sm:-mt-[60px] md:-mt-[75px] z-20">
      <div className="max-w-5xl mx-auto">
        {/* Newsletter Card */}
        <div className="bg-[#2C2E34] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Restez informés des tendances et des meilleures pratiques
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Vous avez besoin d&apos;un partenaire de confiance, pour développer votre trafic
              organique. Comme avec nos clients, faisons équipe pour vous accompagner
              avec efficacité, fiabilité et pragmatisme.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Email Input */}
            <div className="flex flex-col sm:flex-row mb-4 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-full sm:rounded-l-full sm:rounded-r-none px-5 sm:px-6 py-3 text-white text-base placeholder-gray-500 focus:outline-none focus:border-gray-500"
              />
              <button className="bg-white text-black px-5 sm:px-6 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap">
                S&apos;inscrire
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              {/* Avatars */}
              <div className="flex -space-x-2 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2C2E34]" style={{ background: 'linear-gradient(135deg, #E74601, #FF9011)' }} />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2C2E34]" style={{ background: 'linear-gradient(135deg, #CE08A9, #CE16B5)' }} />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2C2E34]" style={{ background: 'linear-gradient(135deg, #8962FD, #AD21FE)' }} />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <span className="text-white font-medium">+100 personnes</span> sont abonnés à notre newsletter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
