import { Metadata } from 'next';
import CTA from '@/components/CTA';
import Newsletter from '@/components/Newsletter';
import Team from '@/components/Team';

export const metadata: Metadata = {
  title: 'Agence SEO Lille - L\'équipe Slashr',
  description:
    'Rencontrez l\'équipe Slashr : consultants SEO expérimentés à Lille. Expertise terrain, approche ROI et accompagnement sur-mesure depuis 2020.',
  alternates: {
    canonical: '/qui-sommes-nous',
  },
};

const values = [
  {
    title: 'Expertise terrain',
    description:
      'Notre équipe continue d\'éditer des sites pour rester à jour sur les évolutions des algorithmes.',
    icon: 'practice',
  },
  {
    title: 'Pragmatisme',
    description:
      'Une approche axée ROI avec des recommandations actionnables et priorisées.',
    icon: 'target',
  },
  {
    title: 'Sur-mesure',
    description:
      'Un conseil personnalisé adapté à votre organisation interne et vos ressources.',
    icon: 'custom',
  },
];

const modes = [
  {
    title: 'Délégation totale',
    description: 'Nous prenons en charge l\'intégralité de votre stratégie SEO.',
  },
  {
    title: 'Conseils & suivi',
    description: 'Nous vous guidons et suivons la mise en œuvre par vos équipes.',
  },
  {
    title: 'Coaching SEO',
    description: 'Nous formons vos équipes pour les rendre autonomes.',
  },
];

function getIcon(type: string) {
  switch (type) {
    case 'practice':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'target':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'custom':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function QuiSommesNousPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-sm text-gray-300 mb-4 sm:mb-6">
            L&apos;agence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Slashr est une agence SEO basée à Lille proposant un accompagnement sur mesure
            pour répondre au mieux à vos enjeux de croissance.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#2C2E34]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#E74601]/20 rounded-full text-sm text-[#E74601] mb-4 sm:mb-6">
                Notre histoire
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Nés de l&apos;expérience terrain
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Créée par <strong className="text-white">Anthony Lecas</strong> et{' '}
                  <strong className="text-white">Benoît Demonchaux</strong> après 3 ans à La Revanche des Sites
                  (agence SEO lilloise), Slashr est née d&apos;une vision différente du consulting SEO.
                </p>
                <p>
                  Notre particularité ? Nous combinons le consulting SEO avec des expérimentations
                  sur nos propres sites. Ce modèle nous permet de fournir du{' '}
                  <strong className="text-white">consulting SEO pointu</strong> avec des{' '}
                  <strong className="text-white">recommandations actionnables</strong>.
                </p>
                <p>
                  Pas de théorie déconnectée du terrain. Chaque conseil que nous donnons, nous l&apos;avons
                  d&apos;abord testé sur nos propres projets.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#E74601]/20 to-[#CE08A9]/20 rounded-3xl p-1">
                <div className="bg-[#1a1a1a] rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-[#2C2E34] rounded-2xl p-6">
                      <p className="text-4xl font-bold text-white mb-2">2020</p>
                      <p className="text-gray-500 text-sm">Création</p>
                    </div>
                    <div className="bg-[#2C2E34] rounded-2xl p-6">
                      <p className="text-4xl font-bold text-white mb-2">5</p>
                      <p className="text-gray-500 text-sm">Experts SEO</p>
                    </div>
                    <div className="bg-[#2C2E34] rounded-2xl p-6">
                      <p className="text-4xl font-bold text-white mb-2">2</p>
                      <p className="text-gray-500 text-sm">Bureaux</p>
                    </div>
                    <div className="bg-[#2C2E34] rounded-2xl p-6">
                      <p className="text-4xl font-bold text-white mb-2">50+</p>
                      <p className="text-gray-500 text-sm">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-sm text-gray-300 mb-4 sm:mb-6">
              Nos valeurs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ce qui nous différencie
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#2C2E34] rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E74601] to-[#CE08A9] rounded-xl flex items-center justify-center text-white mb-6">
                  {getIcon(value.icon)}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#2C2E34]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-sm text-gray-300 mb-4 sm:mb-6">
              Modes opératoires
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Trois façons de travailler ensemble
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {modes.map((mode, index) => (
              <div
                key={mode.title}
                className="relative bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-[#E74601]/50 transition-colors"
              >
                <span className="absolute -top-4 left-6 px-3 py-1 bg-gradient-to-r from-[#E74601] to-[#CE08A9] text-white text-sm font-medium rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3 mt-2">{mode.title}</h3>
                <p className="text-gray-400">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <Team />

      {/* Location */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#2C2E34]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-sm text-gray-300 mb-4 sm:mb-6">
              Notre bureau
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Basés à Lille
            </h2>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <span className="inline-block px-4 py-2 bg-[#E74601]/20 text-[#E74601] text-sm font-medium rounded-full mb-6">
              Siège social
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">Lille</h3>
            <p className="text-gray-400 mb-6">
              165 avenue de Bretagne
              <br />
              59800 LILLE
            </p>
            <a
              href="https://maps.google.com/?q=165+avenue+de+Bretagne+59800+Lille"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E74601] hover:text-[#FF9011] transition-colors"
            >
              Voir sur Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
