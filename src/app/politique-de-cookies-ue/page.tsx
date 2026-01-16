import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Cookies (RGPD) - Slashr',
  description:
    'Gestion des cookies sur slashr.fr : types de cookies utilisés, finalités, durée de conservation et vos droits RGPD.',
  alternates: {
    canonical: '/politique-de-cookies-ue',
  },
  robots: {
    index: false,
    follow: true,
  },
};

const cookieTypes = [
  {
    title: 'Cookies fonctionnels',
    description:
      'Ces cookies sont nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.',
    cookies: [
      { name: 'Session', purpose: 'Maintenir votre session de navigation', duration: 'Session' },
      { name: 'Préférences', purpose: 'Stocker vos préférences utilisateur', duration: '1 an' },
      { name: 'Consentement', purpose: 'Mémoriser vos choix de cookies', duration: '365 jours' },
    ],
    required: true,
  },
  {
    title: 'Cookies statistiques',
    description:
      'Ces cookies nous permettent de mesurer l\'audience du site et d\'améliorer son contenu.',
    cookies: [
      { name: '_ga', purpose: 'Identifier les utilisateurs uniques (Google Analytics)', duration: '2 ans' },
      { name: '_ga_*', purpose: 'Conserver l\'état de la session', duration: '2 ans' },
    ],
    required: false,
  },
];

const userRights = [
  {
    title: 'Droit d\'accès',
    description: 'Vous avez le droit d\'accéder à vos données personnelles.',
  },
  {
    title: 'Droit de rectification',
    description: 'Vous pouvez demander la correction de données inexactes.',
  },
  {
    title: 'Droit à l\'effacement',
    description: 'Vous pouvez demander la suppression de vos données.',
  },
  {
    title: 'Droit d\'opposition',
    description: 'Vous pouvez vous opposer au traitement de vos données.',
  },
  {
    title: 'Droit à la portabilité',
    description: 'Vous pouvez demander le transfert de vos données.',
  },
  {
    title: 'Droit de retrait du consentement',
    description: 'Vous pouvez retirer votre consentement à tout moment.',
  },
];

export default function PolitiqueCookiesPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Politique de Cookies
          </h1>
          <p className="text-gray-400">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="bg-[#2C2E34] rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d&apos;un site web. Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d&apos;autres paramètres.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Les cookies nous aident à améliorer votre expérience de navigation et à comprendre comment vous utilisez notre site.
            </p>
          </div>

          {/* Types de cookies */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white px-2">
              Types de cookies utilisés
            </h2>
            {cookieTypes.map((type) => (
              <div key={type.title} className="bg-[#2C2E34] rounded-3xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                  {type.required ? (
                    <span className="px-3 py-1 bg-[#E74601]/20 text-[#E74601] text-xs font-medium rounded-full">
                      Requis
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-white/10 text-gray-400 text-xs font-medium rounded-full">
                      Optionnel
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-gray-500 text-xs uppercase tracking-wider py-3 pr-4">
                          Cookie
                        </th>
                        <th className="text-left text-gray-500 text-xs uppercase tracking-wider py-3 pr-4">
                          Finalité
                        </th>
                        <th className="text-left text-gray-500 text-xs uppercase tracking-wider py-3">
                          Durée
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.cookies.map((cookie) => (
                        <tr key={cookie.name} className="border-b border-gray-800">
                          <td className="py-4 pr-4">
                            <code className="text-[#E74601] text-sm bg-[#E74601]/10 px-2 py-1 rounded">
                              {cookie.name}
                            </code>
                          </td>
                          <td className="py-4 pr-4 text-gray-400 text-sm">
                            {cookie.purpose}
                          </td>
                          <td className="py-4 text-gray-400 text-sm">
                            {cookie.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Gestion des cookies */}
          <div className="bg-[#2C2E34] rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Comment gérer vos cookies ?
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Vous pouvez à tout moment choisir de désactiver ces cookies. Votre navigateur peut également être paramétré pour vous signaler les cookies qui sont déposés dans votre terminal et vous demander de les accepter ou non.
              </p>
              <p>
                <strong className="text-white">Important :</strong> Nous attirons votre attention sur le fait que le refus de certains cookies est susceptible de dégrader votre expérience utilisateur et d&apos;empêcher l&apos;utilisation de certaines fonctionnalités du site.
              </p>
            </div>
          </div>

          {/* Droits des utilisateurs */}
          <div className="bg-[#2C2E34] rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Vos droits
            </h2>
            <p className="text-gray-400 mb-8">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {userRights.map((right) => (
                <div key={right.title} className="bg-[#1a1a1a] rounded-2xl p-6">
                  <h3 className="text-white font-medium mb-2">{right.title}</h3>
                  <p className="text-gray-500 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#E74601]/10 to-[#CE08A9]/10 rounded-3xl p-8 md:p-12 border border-[#E74601]/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Une question ?
            </h2>
            <p className="text-gray-400 mb-6">
              Pour exercer vos droits ou pour toute question relative à cette politique, contactez notre Délégué à la Protection des Données :
            </p>
            <div className="space-y-2">
              <p className="text-white">
                <strong>ETYB TDS (SLASHR)</strong>
              </p>
              <p className="text-gray-400">
                Email :{' '}
                <a href="mailto:hello@slashr.fr" className="text-[#E74601] hover:underline">
                  hello@slashr.fr
                </a>
              </p>
              <p className="text-gray-400">
                Téléphone :{' '}
                <a href="tel:+33658879065" className="text-[#E74601] hover:underline">
                  +33 6 58 87 90 65
                </a>
              </p>
            </div>
          </div>

          {/* Réclamation */}
          <div className="bg-[#2C2E34] rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Réclamation
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) ou de toute autre autorité de contrôle compétente.
            </p>
          </div>

          {/* Liens */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Voir aussi :{' '}
              <Link href="/mentions-legales" className="text-[#E74601] hover:underline">
                Mentions légales
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
