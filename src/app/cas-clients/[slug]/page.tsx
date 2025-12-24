'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { getCaseStudyBySlug, getOtherCaseStudies, CaseStudy, CaseStudyCard } from '@/lib/caseStudiesWP';

const CALENDLY_URL = 'https://calendly.com/quentin-slashr/appel-de-decouverte-client-by-slashr?back=1';

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const [caseStudyData, setCaseStudyData] = useState<CaseStudy | null>(null);
  const [otherCaseStudies, setOtherCaseStudies] = useState<CaseStudyCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const openCalendly = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  // Charger les données depuis WordPress
  useEffect(() => {
    async function loadData() {
      try {
        const [caseStudy, others] = await Promise.all([
          getCaseStudyBySlug(slug),
          getOtherCaseStudies(slug),
        ]);
        setCaseStudyData(caseStudy);
        setOtherCaseStudies(others);
      } catch (error) {
        console.error('Erreur chargement cas client:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [slug]);

  const nextSlide = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, Math.max(0, otherCaseStudies.length - 3)));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };

  // Loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-48 h-8 bg-[#252525] rounded mb-4 mx-auto" />
          <div className="w-32 h-4 bg-[#252525] rounded mx-auto" />
        </div>
      </main>
    );
  }

  // Si le cas client n'existe pas
  if (!caseStudyData) {
    return (
      <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Cas client non trouvé</h1>
          <Link href="/cas-clients" className="text-orange-500 hover:underline">
            Retour aux cas clients
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section - Dark */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        {/* Background Glow */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 70% 50%, rgba(255, 100, 50, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 90% 60%, rgba(140, 50, 200, 0.4) 0%, transparent 50%)
            `,
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span className="text-gray-600">&gt;</span>
            <Link href="/cas-clients" className="hover:text-white transition-colors">
              Cas clients
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic leading-tight">
                {caseStudyData.title}
              </h1>

              <p className="text-gray-400 text-lg mb-10 max-w-xl">
                {caseStudyData.description}
              </p>

              {/* Stats Cards */}
              <div className="flex gap-3">
                {caseStudyData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 flex-1 relative overflow-hidden"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-1">{stat.value}</p>
                    <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
                    {/* Bottom gradient line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Logo Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/3] bg-[#252525] rounded-3xl flex items-center justify-center overflow-hidden">
                {/* Glow effect */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse 50% 80% at 30% 100%, rgba(255, 100, 50, 0.6) 0%, transparent 60%),
                      radial-gradient(ellipse 50% 80% at 70% 100%, rgba(140, 50, 200, 0.6) 0%, transparent 60%)
                    `,
                    filter: 'blur(30px)',
                  }}
                />
                {caseStudyData.logoImage ? (
                  <Image
                    src={caseStudyData.logoImage}
                    alt={caseStudyData.logo}
                    width={300}
                    height={120}
                    className="relative z-10 object-contain max-w-[80%]"
                  />
                ) : (
                  <span className="relative z-10 text-white text-3xl md:text-4xl font-serif italic font-bold">
                    {caseStudyData.logo}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - White Background */}
      <section className="bg-white rounded-t-[40px] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              {/* Expertises Card */}
              <div className="bg-gray-100 rounded-2xl p-6 mb-6">
                <h3 className="text-[#1a1a1a] font-bold text-lg mb-4">Expertises sollicitées</h3>
                <div className="space-y-2">
                  {caseStudyData.expertises.map((expertise, index) => (
                    <p key={index} className="text-[#1a1a1a] underline cursor-pointer hover:no-underline">
                      {expertise}
                    </p>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-[#1a1a1a] font-bold text-lg mb-4">Vous avez un projet ?</h3>
                <button
                  onClick={openCalendly}
                  className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
                >
                  Prendre RDV
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Context Section */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 italic">
                  {caseStudyData.context.title}
                </h2>
                {caseStudyData.context.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 text-lg mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Results Section */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 italic">
                  {caseStudyData.results.title}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {caseStudyData.results.description}
                </p>

                {/* Stats Cards - Repeated in white section */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {caseStudyData.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-2xl p-6 min-w-[180px] relative overflow-hidden"
                    >
                      <p className="text-3xl font-bold text-[#1a1a1a] mb-1">{stat.value}</p>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                      {/* Bottom gradient line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                      />
                    </div>
                  ))}
                </div>

                {/* CTA Banner */}
                <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-white text-xl font-semibold italic">
                    Je veux les mêmes résultats !
                  </p>
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
                  >
                    Prendre RDV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image 1 */}
              <div className="mb-16">
                {caseStudyData.images?.content?.[0] ? (
                  <div className="w-full rounded-2xl overflow-hidden">
                    <Image
                      src={caseStudyData.images.content[0]}
                      alt={`${caseStudyData.logo} - Illustration`}
                      width={1024}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-400">Image</span>
                  </div>
                )}
              </div>

              {/* Client Needs Section */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 italic">
                  {caseStudyData.needs.title}
                </h2>
                {caseStudyData.needs.sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-[#1a1a1a] font-bold text-lg mb-2">{section.subtitle}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>

              {/* Technical Challenges Section */}
              {caseStudyData.challenges && (
                <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 italic">
                    {caseStudyData.challenges.title}
                  </h2>
                  <ul className="space-y-4">
                    {caseStudyData.challenges.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </span>
                        <p className="text-gray-600 text-lg">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Image 2 */}
              <div className="mb-16">
                {caseStudyData.images?.content?.[1] ? (
                  <div className="w-full rounded-2xl overflow-hidden">
                    <Image
                      src={caseStudyData.images.content[1]}
                      alt={`${caseStudyData.logo} - Résultats`}
                      width={1024}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-400">Image</span>
                  </div>
                )}
              </div>

              {/* Tools CTA Banner */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
                <p className="text-white text-xl font-semibold italic">
                  Vous souhaitez découvrir nos outils ?
                </p>
                <button className="flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Demander une démo
                </button>
              </div>

              {/* Action Plan Accordion */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 italic">
                  {caseStudyData.actionPlan.title}
                </h2>
                <div className="space-y-0">
                  {caseStudyData.actionPlan.steps.map((step) => (
                    <div key={step.number} className="border-b border-gray-200">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === step.number ? null : step.number)}
                        className="w-full flex items-center justify-between py-6 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-sm">
                            {step.number}
                          </span>
                          <span className="text-[#1a1a1a] font-semibold text-lg">{step.title}</span>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                            openAccordion === step.number ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openAccordion === step.number && (
                        <div className="pb-6 pl-14 pr-10">
                          <p className="text-gray-600">{step.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-28 bg-gray-300 rounded-lg overflow-hidden grayscale">
                      {caseStudyData.testimonial.avatar ? (
                        <Image
                          src={caseStudyData.testimonial.avatar}
                          alt={caseStudyData.testimonial.name}
                          width={96}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="flex-1">
                    <div className="relative">
                      <p className="text-[#1a1a1a] text-lg md:text-xl font-medium leading-relaxed pr-16">
                        {caseStudyData.testimonial.quote}
                      </p>
                      {/* Quote marks */}
                      <div className="absolute top-0 right-0 flex gap-1">
                        <span className="text-5xl text-orange-500 font-serif">&quot;</span>
                        <span className="text-5xl text-purple-400 font-serif">&quot;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-[#1a1a1a] font-bold">{caseStudyData.testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{caseStudyData.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies Section */}
      {otherCaseStudies.length > 0 && (
        <section className="bg-[#1a1a1a] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Tag */}
            <span className="inline-block bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 rounded-full mb-8 uppercase tracking-wider">
              Cas Clients
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 italic">
              Nos autres réussites
            </h2>

            {/* Header with Subtitle and Navigation */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <p className="text-gray-400 text-base max-w-xl mb-6 md:mb-0">
                SLASHR, c&apos;est surtout un travail en collaboration avec nos clients pour contribuer à leurs réussites & leur pérennité.
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  disabled={carouselIndex === 0}
                  className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Précédent"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  disabled={carouselIndex >= otherCaseStudies.length - 3}
                  className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Suivant"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden -mx-6 px-6">
              <div
                className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${carouselIndex * (100 / 3)}%)` }}
              >
                {otherCaseStudies.map((caseItem, index) => (
                  <Link
                    href={`/cas-clients/${caseItem.slug}`}
                    key={index}
                    className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] bg-[#252525] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredCardIndex(index)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                  >
                    {/* Card Header with Logo */}
                    <div className="relative h-40 sm:h-48 md:h-56 flex items-center justify-center overflow-hidden">
                      {/* Logo - always on top, moves up on hover */}
                      <span
                        className={`relative z-30 text-white text-2xl font-serif italic font-bold transition-transform duration-700 ease-out ${
                          hoveredCardIndex === index ? '-translate-y-6' : 'translate-y-0'
                        }`}
                      >
                        {caseItem.logo}
                      </span>

                      {/* Glow behind the planet - curved to follow planet shape */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full transition-all duration-700 ease-out ${
                          hoveredCardIndex === index ? 'opacity-100 bottom-[-800px]' : 'opacity-0 bottom-[-860px]'
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
                          hoveredCardIndex === index ? 'bottom-[-830px]' : 'bottom-[-870px]'
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
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
