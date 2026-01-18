import Image from 'next/image';

const Specialists = () => {
  const platforms = [
    { name: 'YouTube', image: '/blog/images/2026/01/1656504144youtube-logo-png-white-scaled.webp' },
    { name: 'Amazon', image: '/blog/images/2026/01/AMZN_BIG.D-8fb0be81.png' },
    { name: 'Google', image: '/blog/images/2026/01/Google_2015_logo.svg_.png' },
    { name: 'ChatGPT', image: '/blog/images/2026/01/new-ChatGPT-logo-white-png-large-size-1.png' },
    { name: 'TikTok', image: '/blog/images/2026/01/TikTok-LogomarkWordmark-White-Dark-Background-Logo.wine_.png' },
    { name: 'Instagram', image: '/blog/images/2026/01/1-13459_instagram-font-logo-white-png-instagram-white-text.png' },
  ];

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-[60px]">
        {/* Title + Description */}
        <div className="flex flex-col items-center gap-[22.5px] max-w-[674px]">
          {/* Title - Funnel Display as fallback for Mozaic HUM */}
          <h2 className="font-bold text-white text-center leading-tight" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>
            Nous sommes les spécialistes de la recherche.
          </h2>

          {/* Description - Geist 15px */}
          <p
            className="text-white/90 text-center"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(13px, 2vw, 15px)',
              lineHeight: '145%'
            }}
          >
            SEO, SEA, Social Search, IA Search...<br />
            SLASHR active les bons canaux, au bon moment, pour toucher la bonne audience
          </p>
        </div>

        {/* Platform Circles - 6 circles overlapping */}
        <div className="flex justify-center items-center w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <div className="flex items-center">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`relative flex items-center justify-center w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[283px] lg:h-[283px] flex-shrink-0 ${index > 0 ? '-ml-[20px] sm:-ml-[30px] md:-ml-[40px] lg:-ml-[50px]' : ''}`}
              >
                <div className="absolute inset-0 rounded-full border border-[#EEEEEE]/15" />
                <Image
                  src={platform.image}
                  alt={platform.name}
                  width={120}
                  height={40}
                  className="w-[70px] sm:w-[80px] md:w-[100px] h-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
