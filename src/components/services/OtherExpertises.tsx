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
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-10 sm:mb-12">
          <h2
            className="font-bold text-white text-center"
            style={{
              fontSize: 'clamp(28px, 5vw, 45px)',
              lineHeight: '110%',
              letterSpacing: '-0.04em',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-white/70 text-center max-w-xl"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '145%',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Expertises Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {expertisesToRender.map((expertise) => (
            <Link
              key={expertise.name}
              href={expertise.href}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                expertise.isActive
                  ? 'bg-gradient-to-r from-[#E74601] to-[#CE08A9] text-white'
                  : 'bg-[#2C2E34] text-white/90 hover:text-white border border-white/10 hover:border-white/30'
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
