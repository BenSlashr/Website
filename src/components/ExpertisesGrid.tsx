import { BenefitsSection } from '@/components/services';

interface ExpertiseItem {
  number?: string; // Deprecated, kept for backward compatibility
  icon?: 'user' | 'code' | 'check' | 'clipboard' | 'chart' | 'rocket' | 'shield' | 'target' | 'globe' | 'zap';
  title: string;
  description: string;
  href?: string;
}

interface ExpertisesGridProps {
  title: string;
  description: string;
  items: ExpertiseItem[];
  ctaText?: string;
  ctaHref?: string;
}

/**
 * ExpertisesGrid - Wrapper autour du composant BenefitsSection
 * Conserve la même interface pour la rétrocompatibilité
 * mais utilise le design unifié de BenefitsSection
 */
const ExpertisesGrid = ({
  title,
  description,
  items,
  ctaText,
  ctaHref = '/contact',
}: ExpertisesGridProps) => {
  // Convertit les items vers le format benefits de BenefitsSection
  // Utilise l'icône si fournie, sinon utilise une icône par défaut basée sur le titre
  const benefits = items.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon || 'check' as const,
    size: 'medium' as const,
  }));

  return (
    <BenefitsSection
      title={title}
      subtitle={description}
      benefits={benefits}
      ctaText={ctaText}
      ctaHref={ctaHref}
    />
  );
};

export default ExpertisesGrid;
