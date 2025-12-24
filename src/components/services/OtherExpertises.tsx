import Link from 'next/link';
import { getSEOPrestations, getAdsPrestations, PrestationCategory } from '@/lib/prestationsWP';

interface Expertise {
  name: string;
  href: string;
}

// Mode auto-génération par silo
interface AutoModeProps {
  title?: string;
  subtitle?: string;
  currentSlug: string;
  category: PrestationCategory;
  expertises?: never;
  currentExpertise?: never;
}

// Mode manuel avec expertises personnalisées
interface ManualModeProps {
  title?: string;
  subtitle?: string;
  expertises: Expertise[];
  currentExpertise?: string;
  currentSlug?: never;
  category?: never;
}

type OtherExpertisesSectionProps = AutoModeProps | ManualModeProps;

const OtherExpertisesSection = (props: OtherExpertisesSectionProps) => {
  const {
    title = "Nos autres expertises",
    subtitle = "Découvrez l'ensemble de nos expertises en référencement.",
  } = props;

  let expertisesToRender: { name: string; href: string; isActive?: boolean }[] = [];

  // Mode auto-génération par silo
  if ('category' in props && props.category && 'currentSlug' in props) {
    const prestations = props.category === 'seo'
      ? getSEOPrestations()
      : props.category === 'ads'
        ? getAdsPrestations()
        : [];

    const basePath = props.category === 'seo' ? '/seo/prestations' : '/ads/prestations';

    expertisesToRender = prestations
      .filter(p => p.slug !== props.currentSlug)
      .map(p => ({
        name: p.tag,
        href: `${basePath}/${p.slug}`,
        isActive: false,
      }));
  }
  // Mode manuel avec expertises personnalisées
  else if ('expertises' in props && props.expertises) {
    expertisesToRender = props.expertises.map(e => ({
      name: e.name,
      href: e.href,
      isActive: e.name.toLowerCase() === props.currentExpertise?.toLowerCase(),
    }));
  }

  if (expertisesToRender.length === 0) return null;

  return (
    <section className="bg-[#252525] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        {/* Expertises Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {expertisesToRender.map((expertise) => (
            <Link
              key={expertise.name}
              href={expertise.href}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                expertise.isActive
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-[#1a1a1a] text-gray-300 hover:text-white hover:bg-[#2a2a2a] border border-gray-700 hover:border-orange-500/50'
              }`}
            >
              {expertise.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherExpertisesSection;
