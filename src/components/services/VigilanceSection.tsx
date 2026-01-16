import Methode from '@/components/Methode';

interface VigilancePoint {
  title: string;
  description: string;
}

interface VigilanceSectionProps {
  title: string;
  points: VigilancePoint[];
}

/**
 * VigilanceSection - Wrapper autour du composant Methode
 * Conserve la même interface (title, points) pour la rétrocompatibilité
 * mais utilise le design unifié de Methode (layout 2 colonnes sticky)
 */
const VigilanceSection = ({ title, points }: VigilanceSectionProps) => {
  // Convertit les points vers le format items de Methode
  const items = points.map((point, index) => ({
    number: String(index + 1).padStart(2, '0'),
    title: point.title,
    description: point.description,
  }));

  return (
    <Methode
      title={title}
      description="Des points d'attention essentiels pour éviter les erreurs courantes et maximiser vos résultats."
      items={items}
      ctaText="Discuter avec un expert"
      ctaHref="/contact"
    />
  );
};

export default VigilanceSection;
