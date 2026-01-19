import Link from 'next/link';
import { getSEOPrestations, getAllAdsPrestations, PrestationCategory } from '@/lib/prestationsWP';

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
  // Déterminer le sous-titre par défaut selon la catégorie
  const isAdsCategory = 'category' in props && (props.category === 'ads' || props.category === 'social' || props.category === 'transverse');
  const defaultSubtitle = isAdsCategory
    ? "Découvrez l'ensemble de nos expertises en publicité digitale."
    : "Découvrez l'ensemble de nos expertises en référencement.";

  const {
    title = "Nos autres expertises",
    subtitle = defaultSubtitle,
  } = props;

  let expertisesToRender: { name: string; href: string; isActive?: boolean }[] = [];

  // Mode auto-génération par silo
  if ('category' in props && props.category && 'currentSlug' in props) {
    if (props.category === 'seo') {
      const prestations = getSEOPrestations();
      expertisesToRender = prestations
        .filter(p => p.slug !== props.currentSlug)
        .map(p => ({
          name: p.title.replace('Agence ', ''),
          href: `/seo/prestations/${p.slug}`,
          isActive: false,
        }));
    } else if (props.category === 'ads' || props.category === 'social' || props.category === 'transverse') {
      // Pour TOUTES les pages Ads (SEA, Social, Transverse) : afficher TOUTES les expertises Ads
      const allAdsPrestations = getAllAdsPrestations();
      expertisesToRender = allAdsPrestations
        .filter(p => p.slug !== props.currentSlug)
        .map(p => ({
          name: p.title.replace('Agence ', '').replace('Publicité ', ''),
          href: p.href,
          isActive: false,
        }));
    }
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
    <section className="bg-[#1a1a1a] py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
      </div>

      {/* Infinite scroll container - CSS animation */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-3 sm:gap-4 animate-infinite-scroll"
          style={{
            width: 'max-content',
          }}
        >
          {/* Repeat 4 times for seamless infinite loop */}
          {[...Array(4)].map((_, setIndex) => (
            expertisesToRender.map((expertise, index) => (
              <Link
                key={`set-${setIndex}-${expertise.name}-${index}`}
                href={expertise.href}
                className={`flex-shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  expertise.isActive
                    ? 'bg-gradient-to-r from-[#E74601] to-[#CE08A9] text-white'
                    : 'bg-[#2C2E34] text-white/90 hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                {expertise.name}
              </Link>
            ))
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherExpertisesSection;
