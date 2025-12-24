import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales - Slashr (SAS ETYB TDS)',
  description:
    'Informations légales de l\'agence Slashr : raison sociale, siège social, hébergeur, contacts et droits applicables.',
  alternates: {
    canonical: '/mentions-legales',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mentions Légales
          </h1>
          <p className="text-gray-400">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#252525] rounded-3xl p-8 md:p-12 space-y-12">
            {/* Éditeur */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Éditeur du site
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong className="text-white">Raison sociale :</strong> SAS ETYB TDS (SLASHR)
                </p>
                <p>
                  <strong className="text-white">Forme juridique :</strong> Société par Actions Simplifiée (SAS)
                </p>
                <p>
                  <strong className="text-white">Capital social :</strong> 1 000 €
                </p>
                <p>
                  <strong className="text-white">Numéro de TVA intracommunautaire :</strong> FR02905001590
                </p>
                <p>
                  <strong className="text-white">Représentant légal :</strong> Anthony Lecas
                </p>
              </div>
            </div>

            {/* Adresse */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Adresse
              </h2>
              <div className="bg-[#1a1a1a] rounded-2xl p-6">
                <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-4">
                  Siège social
                </span>
                <p className="text-gray-300">
                  165 avenue de Bretagne
                  <br />
                  59800 LILLE
                </p>
              </div>
            </div>

            {/* Contacts */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Contacts responsables
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong className="text-white">Responsable de la publication :</strong> Benoit Demonchaux
                  <br />
                  <a href="mailto:hello@slashr.fr" className="text-orange-400 hover:underline">
                    hello@slashr.fr
                  </a>
                </p>
                <p>
                  <strong className="text-white">Webmaster :</strong> Benoit Demonchaux
                  <br />
                  <a href="mailto:hello@slashr.fr" className="text-orange-400 hover:underline">
                    hello@slashr.fr
                  </a>
                </p>
                <p>
                  <strong className="text-white">Délégué à la protection des données (DPO) :</strong> Benoit Demonchaux
                  <br />
                  <a href="mailto:maintenance@slashr.fr" className="text-orange-400 hover:underline">
                    maintenance@slashr.fr
                  </a>
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Hébergement
              </h2>
              <div className="bg-[#1a1a1a] rounded-2xl p-6 space-y-3 text-gray-400">
                <p>
                  <strong className="text-white">Hébergeur :</strong> O2SWITCH
                </p>
                <p>
                  <strong className="text-white">Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand
                </p>
                <p>
                  <strong className="text-white">Téléphone :</strong> 04 44 44 60 40
                </p>
                <p>
                  <strong className="text-white">Conformité :</strong> RGPD (Union Européenne)
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Propriété intellectuelle
              </h2>
              <p className="text-gray-400 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est protégé par le droit d&apos;auteur et le droit des marques. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de SLASHR.
              </p>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Droit applicable et juridiction
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents de Paris seront seuls compétents.
              </p>
            </div>

            {/* Liens */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Voir aussi :{' '}
                <Link href="/politique-de-cookies-ue" className="text-orange-400 hover:underline">
                  Politique de cookies
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
