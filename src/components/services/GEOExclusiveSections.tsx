'use client';

import { GEOExclusiveContent } from '@/lib/prestationsWP';
import GEOToolShowcase from './GEOToolShowcase';

interface GEOExclusiveSectionsProps {
  content: GEOExclusiveContent;
}

const GEOExclusiveSections = ({ content }: GEOExclusiveSectionsProps) => {
  return (
    <>
      {/* ============================================
          SECTION 1: Comment ChatGPT trouve vos contenus
          (Pédagogie AVANT l'outil)
          ============================================ */}
      {content.howChatGPTSearches && (
        <section className="bg-[#1a1a1a] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block text-xs tracking-[0.3em] text-orange-500 uppercase mb-4 font-medium">
              {content.howChatGPTSearches.tag}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {content.howChatGPTSearches.title}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl">
              {content.howChatGPTSearches.intro}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {content.howChatGPTSearches.points.map((point, index) => (
                <div
                  key={index}
                  className="group rounded-2xl p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500"
                >
                  <div className="bg-[#252525] rounded-2xl p-8 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                      {index === 0 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          SECTION 2: Query Fan-out (données exclusives)
          ============================================ */}
      {content.queryFanOut && (
        <section className="bg-[#252525] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block text-xs tracking-[0.3em] text-orange-500 uppercase mb-4 font-medium">
              {content.queryFanOut.tag}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {content.queryFanOut.title}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl">
              {content.queryFanOut.intro}
            </p>

            {/* Stats comparison - Perplexity vs ChatGPT */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {content.queryFanOut.stats.map((stat, index) => (
                <div key={index} className="bg-[#1a1a1a] rounded-2xl p-8">
                  <h3 className="text-white font-bold text-xl mb-4">{stat.label}</h3>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-orange-500">{stat.singleQuery}</div>
                      <div className="text-gray-400 text-sm">requête unique</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-pink-500">{stat.multiQuery}</div>
                      <div className="text-gray-400 text-sm">requêtes multiples</div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Trigger Words Table */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Mots-clés déclencheurs</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Mot-clé</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Requêtes moyennes</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.queryFanOut.triggerWords.map((word, index) => (
                      <tr key={index} className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white font-medium">{word.word}</td>
                        <td className="py-3 px-4">
                          <span className="text-orange-400 font-bold">{word.avgQueries}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            word.impact === 'Très élevé'
                              ? 'bg-orange-500/20 text-orange-400'
                              : word.impact === 'Élevé'
                                ? 'bg-pink-500/20 text-pink-400'
                                : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {word.impact}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl border border-orange-500/20">
                <p className="text-gray-300 text-sm">
                  <span className="text-orange-400 font-semibold">Insight :</span> {content.queryFanOut.insight}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          SECTION 3: Outil de tracking GEO (PREUVE)
          Maintenant que le visiteur comprend le GEO,
          on lui montre qu'on maîtrise le sujet
          ============================================ */}
      <GEOToolShowcase />
    </>
  );
};

export default GEOExclusiveSections;
