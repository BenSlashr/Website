'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CALENDLY_URL = 'https://calendly.com/quentin-slashr/appel-de-decouverte-client-by-slashr?back=1';

const Header = () => {
  const [isExpertisesOpen, setIsExpertisesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCalendly = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  const expertises = {
    seo: [
      { name: 'SEO', description: 'Référencement naturel', href: '/seo', icon: 'search' },
      { name: 'SEO E-commerce', description: 'Shopify, Prestashop, Magento...', href: '/seo/prestations/ecommerce', icon: 'cart' },
      { name: 'SEO Local', description: 'Google Business Profile', href: '/seo/prestations/local', icon: 'location' },
      { name: 'SEO International', description: 'Multilingue & Hreflang', href: '/seo/prestations/international', icon: 'globe' },
      { name: 'Migration SEO', description: 'Refonte sans perte de trafic', href: '/seo/prestations/refonte-migration', icon: 'ux' },
    ],
    geo: [
      { name: 'GEO', description: 'Référencement IA', href: '/seo/prestations/agence-geo', icon: 'ai' },
    ],
    ads: [
      { name: 'Ads', description: 'Publicité digitale', href: '/ads', icon: 'euro' },
      { name: 'SEA / Google Ads', description: 'Search, Shopping, Display', href: '/ads/sea', icon: 'search' },
      { name: 'Social Ads', description: 'Meta, LinkedIn, TikTok', href: '/ads/social', icon: 'social' },
    ],
    conseil: [
      { name: 'Formation SEO', description: 'Montée en compétences', href: '/seo/prestations/formation', icon: 'formation' },
    ],
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'search':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'ai':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'social':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'euro':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'content':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        );
      case 'ux':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        );
      case 'cart':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'globe':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'data':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'formation':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-2xl px-4 md:px-6 py-3 shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://agence-slashr.fr/wp-content/uploads/2024/03/LOGO-SLASHR-NOIR.png"
            alt="SLASHR"
            width={100}
            height={32}
            className="h-7 sm:h-8 w-auto"
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setIsExpertisesOpen(!isExpertisesOpen)}
              onMouseEnter={() => setIsExpertisesOpen(true)}
              className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors text-sm"
            >
              Nos expertises
              <svg
                className={`w-4 h-4 transition-transform ${isExpertisesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <Link href="#agence" className="text-gray-600 hover:text-black transition-colors text-sm">
            L&apos;agence
          </Link>
          <Link href="#cas-clients" className="text-gray-600 hover:text-black transition-colors text-sm">
            Cas clients
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors text-sm">
            Blog
          </Link>
          <Link href="/r-and-d" className="text-gray-600 hover:text-black transition-colors text-sm">
            R&D
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* CTA Button - Desktop */}
        <button
          onClick={openCalendly}
          className="hidden md:flex items-center gap-2 bg-[#1a1a1a] hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
        >
          Prendre RDV
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </nav>

      {/* Mega Menu - Expertises */}
      {isExpertisesOpen && (
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-4xl"
          onMouseLeave={() => setIsExpertisesOpen(false)}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-3 gap-8">
              {/* SEO */}
              <div>
                <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">
                  SEO
                </h3>
                <div className="space-y-4">
                  {expertises.seo.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-3 group"
                      onClick={() => setIsExpertisesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-colors">
                        {getIcon(item.icon)}
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm group-hover:text-black">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="text-gray-500 text-xs">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* GEO & Ads */}
              <div>
                <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">
                  GEO & Publicité
                </h3>
                <div className="space-y-4">
                  {[...expertises.geo, ...expertises.ads].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-3 group"
                      onClick={() => setIsExpertisesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-colors">
                        {getIcon(item.icon)}
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm group-hover:text-black">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="text-gray-500 text-xs">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Conseil */}
              <div>
                <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">
                  Conseil
                </h3>
                <div className="space-y-4">
                  {expertises.conseil.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-3 group"
                      onClick={() => setIsExpertisesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-colors">
                        {getIcon(item.icon)}
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm group-hover:text-black">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl shadow-lg p-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {/* Expertises Section */}
            <div className="border-b border-gray-100 pb-3">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">SEO</p>
              {expertises.seo.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">GEO & Publicité</p>
              {[...expertises.geo, ...expertises.ads].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">Conseil</p>
              {expertises.conseil.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Other Links */}
            <Link href="#agence" className="text-gray-600 hover:text-black transition-colors text-base py-3 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              L&apos;agence
            </Link>
            <Link href="#cas-clients" className="text-gray-600 hover:text-black transition-colors text-base py-3 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Cas clients
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-black transition-colors text-base py-3 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/r-and-d" className="text-gray-600 hover:text-black transition-colors text-base py-3" onClick={() => setIsMobileMenuOpen(false)}>
              R&D
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openCalendly();
              }}
              className="flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-5 py-3.5 rounded-full text-base font-medium mt-4"
            >
              Prendre RDV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
