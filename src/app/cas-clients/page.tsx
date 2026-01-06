'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCaseStudyCards, CaseStudyCard } from '@/lib/caseStudiesWP';

// Types pour les filtres
interface FilterOption {
  value: string;
  label: string;
}

const CasClientsPage = () => {
  // États pour les filtres
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [caseStudies, setCaseStudies] = useState<CaseStudyCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Charger les cas clients depuis WordPress
  useEffect(() => {
    async function loadCaseStudies() {
      try {
        const data = await getCaseStudyCards();
        setCaseStudies(data);
      } catch (error) {
        console.error('Erreur chargement cas clients:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadCaseStudies();
  }, []);

  // Options de filtres
  const filterCategories: { name: string; options: FilterOption[] }[] = [
    {
      name: 'Expertises',
      options: [
        { value: 'SEO', label: 'SEO' },
        { value: 'Migration SEO', label: 'Migration SEO' },
        { value: 'SEO E-commerce', label: 'SEO E-commerce' },
        { value: 'SEO International', label: 'SEO International' },
      ],
    },
    {
      name: 'Objectif',
      options: [
        { value: 'Fusion', label: 'Fusion' },
        { value: 'Migration', label: 'Migration' },
        { value: 'Croissance', label: 'Croissance' },
      ],
    },
  ];

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      removeFilter(filter);
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const resetFilters = () => {
    setActiveFilters([]);
  };

  // Filtrer les cas clients selon les filtres actifs
  const filteredCaseStudies = activeFilters.length === 0
    ? caseStudies
    : caseStudies.filter((cs) =>
        activeFilters.some(
          (filter) =>
            cs.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())) ||
            cs.title.toLowerCase().includes(filter.toLowerCase())
        )
      );

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <span className="text-gray-600">&gt;</span>
          <span className="text-white">Cas clients</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tag */}
          <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 uppercase tracking-wider">
            Cas Clients
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 italic">
            Nos réussites
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-12">
            Découvrez comment nous avons accompagné nos clients dans leurs projets SEO les plus ambitieux.
            Fusions, migrations, croissance organique : chaque défi est une opportunité de démontrer notre expertise.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {/* Filter Dropdowns */}
            {filterCategories.map((category) => (
              <div key={category.name} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === category.name ? null : category.name)}
                  className="flex items-center gap-2 bg-transparent border border-gray-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm hover:bg-white/5 transition-colors min-h-[44px]"
                >
                  {category.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {openDropdown === category.name && (
                  <div className="absolute top-full left-0 mt-2 bg-[#252525] border border-gray-700 rounded-xl py-2 min-w-[180px] z-50">
                    {category.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          toggleFilter(option.value);
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                          activeFilters.includes(option.value) ? 'text-orange-500' : 'text-white'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active Filters Tags */}
          <div className="flex flex-wrap items-center gap-3">
            {activeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => removeFilter(filter)}
                className="flex items-center gap-2 bg-[#2a2a2a] text-white px-4 py-2 rounded-full text-sm hover:bg-[#333] transition-colors"
              >
                {filter}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ))}

            {activeFilters.length > 0 && (
              <button
                onClick={resetFilters}
                className="text-white text-sm underline hover:no-underline transition-all"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#252525] rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 md:h-56 bg-[#2a2a2a]" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-[#2a2a2a] rounded w-3/4" />
                    <div className="h-4 bg-[#2a2a2a] rounded w-full" />
                    <div className="h-4 bg-[#2a2a2a] rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Aucun cas client ne correspond à vos critères.</p>
              <button
                onClick={resetFilters}
                className="mt-4 text-orange-500 hover:text-orange-400 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredCaseStudies.map((caseItem, index) => (
                <Link
                  href={`/cas-clients/${caseItem.slug}`}
                  key={caseItem.slug}
                  className="bg-[#252525] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card Header with Logo */}
                  <div className="relative h-48 md:h-56 flex items-center justify-center overflow-hidden">
                    {/* Logo - always on top, moves up on hover */}
                    <span
                      className={`relative z-30 text-white text-2xl font-serif italic font-bold transition-transform duration-700 ease-out ${
                        hoveredIndex === index ? '-translate-y-6' : 'translate-y-0'
                      }`}
                    >
                      {caseItem.logo}
                    </span>

                    {/* Glow behind the planet - curved to follow planet shape */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full transition-all duration-700 ease-out ${
                        hoveredIndex === index ? 'opacity-100 bottom-[-800px]' : 'opacity-0 bottom-[-860px]'
                      }`}
                      style={{
                        background: `
                          radial-gradient(ellipse 35% 20% at 30% 0%, rgba(255, 100, 50, 1) 0%, transparent 70%),
                          radial-gradient(ellipse 35% 20% at 70% 0%, rgba(140, 80, 220, 1) 0%, transparent 70%)
                        `,
                        filter: 'blur(15px)',
                      }}
                    />

                    {/* Black planet (half circle) - on top of glow */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full transition-all duration-700 ease-out z-10 ${
                        hoveredIndex === index ? 'bottom-[-830px]' : 'bottom-[-870px]'
                      }`}
                      style={{
                        background: '#252525',
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Company Name */}
                    <h3 className="text-white font-semibold text-lg mb-2">{caseItem.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{caseItem.description}</p>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-600 mb-4" />

                    {/* Stats */}
                    <div className="space-y-1">
                      {caseItem.stats.map((stat, statIndex) => (
                        <p key={statIndex} className="text-white text-sm">
                          {stat}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CasClientsPage;
