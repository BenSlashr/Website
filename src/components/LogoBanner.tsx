import Image from "next/image";

const LogoBanner = () => {
  const logos = [
    {
      name: "Superprof",
      url: "/blog/images/2023/10/logo-superprof.png",
    },
    {
      name: "Vestiaire Collective",
      url: "/blog/images/2024/02/vestiaire-collectif-w.png",
    },
    {
      name: "NaturaBuy",
      url: "/blog/images/2024/06/naturabuy-modified.png",
    },
    {
      name: "La Gazette France",
      url: "/blog/images/2024/03/la-gazette-france.png",
    },
    {
      name: "SKEMA",
      url: "/blog/images/2026/01/SKEMA_Business_Schools_logo.png",
    },
    {
      name: "Somfy",
      url: "/blog/images/2025/11/SOMFY-Domotique.png",
    },
    {
      name: "Agryco",
      url: "/blog/images/2025/11/agryco-1.png",
    },
    {
      name: "EPF",
      url: "/blog/images/2026/01/EPF_logo_2021.png",
    },
    {
      name: "Colisee",
      url: "/blog/images/2025/11/colisee.png",
    },
    {
      name: "Ennolys",
      url: "/blog/images/2025/11/ennolys.png",
    },
    {
      name: "Les Petites Billes",
      url: "/blog/images/2024/03/Logo-LesPetitesBilles.webp",
    },
    {
      name: "Usabilis",
      url: "/blog/images/2025/11/logo-colors-usabilis.png",
    },
    {
      name: "Verisure",
      url: "/blog/images/2025/11/Logo_of_Verisure.png",
    },
    {
      name: "Carter Cash",
      url: "/blog/images/2023/10/logo-carter-cash.png",
      keepColor: true, // Logo rouge qui ne supporte pas le filtre invert
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-10 sm:py-14 overflow-hidden">
      <div className="flex animate-scroll">
        {/* Double the logos for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px] px-4 sm:px-6 md:px-8 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={logo.url}
              alt={logo.name}
              width={120}
              height={60}
              className={`object-contain max-h-[35px] sm:max-h-[40px] md:max-h-[50px] w-auto transition-all duration-300 ${
                logo.keepColor
                  ? 'opacity-80 hover:opacity-100'
                  : 'grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0'
              }`}
              loading="lazy"
              sizes="120px"
              quality={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
