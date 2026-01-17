import Image from "next/image";

const LogoBanner = () => {
  const logos = [
    {
      name: "Superprof",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/logo-superprof-rdfndjotqafe1ryrfxpuvculp7boqvaszixb6rpm9s.png",
    },
    {
      name: "Vestiaire Collective",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/logo-vestiaire-collective-rdfndjotqafe1ryrfxpuvculp7boqvaszixb6rpm9s.png",
    },
    {
      name: "NaturaBuy",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/naturabuy-modified-rdfnduyw0autx3idm2ldpa04tts3b8jl12r4y38w74.png",
    },
    {
      name: "La Gazette France",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/la-gazette-france-rdfndq9p24oeb1p7dik8ut6tuwf98r0xcfhpjpfv28.png",
    },
    {
      name: "SKEMA",
      url: "https://agence-slashr.fr/wp-content/uploads/2026/01/SKEMA_Business_Schools_logo-scaled.png",
    },
    {
      name: "Somfy",
      url: "https://agence-slashr.fr/wp-content/uploads/2026/01/Somfy_logo.svg_.png",
    },
    {
      name: "Agryco",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/agryco-1-reouo9p0g9radhajhn2ar7lh30jjgenap2vsy2iwow.png",
    },
    {
      name: "EPF",
      url: "https://agence-slashr.fr/wp-content/uploads/2026/01/EPF_logo_2021.png",
    },
    {
      name: "Colisee",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/colisee-reouobkotxtv0p7t6nvjw74e9sa9vsurdc6rwmg4cg.png",
    },
    {
      name: "Ennolys",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/ennolys-reouodgd7lwfnx52voot16nbgk10b7281lhqv6dc00.png",
    },
    {
      name: "Maison du Billard",
      url: "https://agence-slashr.fr/wp-content/uploads/2026/01/logo.png",
    },
    {
      name: "Les Petites Billes",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/Logo-LesPetitesBilles-rdfndmicasj90lunzgxqku4zhcxsdylzzwvrmllfr4.webp",
    },
    {
      name: "Usabilis",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/logo-colors-usabilis-reouofc1l9z0b52ckpi26668nbrqql9opusptqajnk.png",
    },
    {
      name: "Verisure",
      url: "https://agence-slashr.fr/wp-content/uploads/elementor/thumbs/Logo_of_Verisure-reouoi5k5s2v9yy948pxvngmfhdudokvq8r69k6d4w.png",
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
              className="object-contain max-h-[35px] sm:max-h-[40px] md:max-h-[50px] w-auto grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300"
              loading="lazy"
              // Optimisation : taille réduite et qualité optimisée pour les logos
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
