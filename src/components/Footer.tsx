import Image from 'next/image';
import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/quentin-slashr/appel-de-decouverte-client-by-slashr?back=1';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] pt-12 sm:pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Project CTA */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight" style={{ fontSize: 'clamp(28px, 5vw, 45px)' }}>
            Vous avez un projet&nbsp;?
          </h2>
          <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1a1a1a] px-5 sm:px-6 md:px-8 py-3 rounded-full text-sm font-medium transition-colors min-h-[44px]"
            >
              Échanger avec des experts
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mb-12 sm:mb-16">
          {/* Mobile: Location card */}
          <div className="mb-8 sm:hidden">
            <div className="bg-[#2C2E34] rounded-xl p-4">
              <span className="inline-block text-[#E74601] text-xs font-bold mb-2 uppercase">
                Lille
              </span>
              <p className="text-gray-400 text-xs leading-relaxed">
                165 avenue de Bretagne,
                <br />
                59800 LILLE
              </p>
            </div>
          </div>

          {/* Mobile: Links in 2 columns */}
          <div className="grid grid-cols-2 gap-6 sm:hidden">
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">
                À Propos
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/qui-sommes-nous" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Qui sommes-nous&nbsp;?
                  </Link>
                </li>
                <li>
                  <Link href="/cas-clients" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Cas clients
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/recrutement" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Recrutement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">
                Ressources
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/blog" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/r-and-d" className="text-gray-400 text-sm hover:text-white transition-colors">
                    R&D & Outils
                  </Link>
                </li>
                <li>
                  <Link href="/seo/prestations" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Prestations SEO
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden sm:flex sm:justify-between gap-8">
            {/* Lille - Left */}
            <div>
              <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-3 py-1 rounded mb-3 uppercase">
                Lille
              </span>
              <p className="text-gray-400 text-sm">
                165 avenue de Bretagne,
                <br />
                59800 LILLE
              </p>
            </div>

            {/* Right columns container */}
            <div className="flex gap-16">
              {/* À Propos */}
              <div>
                <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-4">
                  À Propos
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/qui-sommes-nous" className="text-gray-400 text-sm hover:text-white transition-colors">
                      Qui sommes-nous&nbsp;?
                    </Link>
                  </li>
                  <li>
                    <Link href="/cas-clients" className="text-gray-400 text-sm hover:text-white transition-colors">
                      Cas clients
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/recrutement" className="text-gray-400 text-sm hover:text-white transition-colors">
                      Recrutement
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Ressources */}
              <div>
                <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-4">
                  Ressources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/blog" className="text-gray-400 text-sm hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/r-and-d" className="text-gray-400 text-sm hover:text-white transition-colors">
                      R&D & Outils
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo/prestations" className="text-gray-400 text-sm hover:text-white transition-colors">
                      Prestations SEO
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Social - Bottom */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-6 mb-8 sm:mb-12 pt-8 border-t border-gray-800 sm:border-0 sm:pt-0">
          {/* Logo */}
          <Image
            src="/blog/images/2024/03/LOGO-SLASHR-BLANC-1.png"
            alt="SLASHR"
            width={240}
            height={120}
            className="h-12 sm:h-12 w-auto"
            style={{ imageRendering: 'auto' }}
            unoptimized
          />

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/slashr-agence-seo-sem/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#2C2E34] rounded-full flex items-center justify-center text-white hover:bg-[#353535] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCM8aEtYLfrKODLZOcFkjG2g"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#2C2E34] rounded-full flex items-center justify-center text-white hover:bg-[#353535] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/mentions-legales" className="text-gray-500 text-xs hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-cookies-ue" className="text-gray-500 text-xs hover:text-white transition-colors">
              Politique de cookies (UE)
            </Link>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>Réalisé par l&apos;agence konfiture</span>
            <div className="w-5 h-5 bg-[#E74601] rounded-full flex items-center justify-center text-white text-xs font-bold">
              k
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
