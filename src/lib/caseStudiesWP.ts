// WordPress API pour les Cas Clients
const WP_API_URL = 'https://agence-slashr.fr/wp-json/wp/v2';

// Interface pour les pages WordPress
interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_description?: string;
    og_image?: Array<{ url: string; width: number; height: number }>;
  };
}

// Interface CaseStudy (structure enrichie)
export interface CaseStudyStat {
  value: string;
  label: string;
  color: string;
}

export interface CaseStudySection {
  subtitle: string;
  text: string;
}

export interface CaseStudyStep {
  number: number;
  title: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  logo: string;
  logoImage?: string;
  images?: {
    hero?: string;
    content?: string[];
    testimonialAvatar?: string;
  };
  stats: CaseStudyStat[];
  expertises: string[];
  context: {
    title: string;
    paragraphs: string[];
  };
  results: {
    title: string;
    description: string;
  };
  needs: {
    title: string;
    sections: CaseStudySection[];
  };
  challenges?: {
    title: string;
    items: string[];
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
    avatar?: string;
  };
  actionPlan: {
    title: string;
    steps: CaseStudyStep[];
  };
}

// Fonction utilitaire pour nettoyer le HTML
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

// Extraire les métriques du contenu HTML
function extractMetrics(html: string): CaseStudyStat[] {
  const stats: CaseStudyStat[] = [];
  const colors = [
    'from-orange-500 to-orange-400',
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500',
  ];

  // Recherche simple des patterns courants
  const percentMatch = html.match(/\+\d+%/g);
  const millionMatch = html.match(/\+\d+,\d+M/g);
  const numberMatch = html.match(/\+\d{4,}/g);

  if (percentMatch) {
    stats.push({
      value: percentMatch[0],
      label: 'de trafic SEO',
      color: colors[0],
    });
  }
  if (millionMatch) {
    stats.push({
      value: millionMatch[0],
      label: 'mots-clés récupérés',
      color: colors[1],
    });
  }
  if (numberMatch) {
    stats.push({
      value: numberMatch[0],
      label: 'domaines référents',
      color: colors[2],
    });
  }

  return stats;
}

// Extraire les expertises du contenu
function extractExpertises(html: string): string[] {
  const expertises: string[] = [];
  const commonExpertises = [
    'Migration SEO',
    'SEO International',
    'SEO E-commerce',
    'Audit SEO',
    'Stratégie de redirection',
    'SEO Technique',
    'Netlinking',
  ];

  commonExpertises.forEach((exp) => {
    if (html.toLowerCase().includes(exp.toLowerCase())) {
      expertises.push(exp);
    }
  });

  return expertises.length > 0 ? expertises : ['SEO', 'Stratégie digitale'];
}

// Données de fallback enrichies (pour quand WordPress ne répond pas ou pour détails complets)
const fallbackCaseStudies: CaseStudy[] = [
  {
    slug: 'cas-client-tradesy-vestiaire-collective',
    title: 'Fusion SEO : Vestiaire Collective US x Tradesy US',
    description:
      "Le rachat d'une entreprise représente un moment charnière pour tout acquéreur. Au-delà des enjeux purement marketing et business, il représente un challenge pour le référencement naturel.",
    logo: 'Vestiaire Collective',
    logoImage: 'https://agence-slashr.fr/wp-content/uploads/2024/02/vestiaire-collectif-w.png',
    images: {
      hero: 'https://agence-slashr.fr/wp-content/uploads/2024/03/Vestiaire-CO-1024x732.jpeg',
      content: [
        'https://agence-slashr.fr/wp-content/uploads/2024/02/vestiaire-collectif-screen-1.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/02/vestiaire-collectif-screen-2.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/03/33912894-1024x770.webp',
      ],
      testimonialAvatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/vestiaire-collective-jean-eric-blas-chatelain.webp',
    },
    stats: [
      {
        value: '+162%',
        label: 'de trafic SEO après la fusion',
        color: 'from-orange-500 to-orange-400',
      },
      {
        value: '+1,6M',
        label: 'de mots-clés récupérés',
        color: 'from-blue-500 to-purple-500',
      },
      {
        value: '+10000',
        label: 'domaines référents récupérés',
        color: 'from-purple-500 to-pink-500',
      },
    ],
    expertises: ['Migration SEO', 'SEO International', 'SEO E-commerce', 'Audit SEO'],
    context: {
      title: 'Contexte',
      paragraphs: [
        "Vestiaire Collective, marketplace française de luxe de seconde main valorisée à 1,7 milliard d'euros, a acquis Tradesy, son équivalent américain, en mars 2022. Cette fusion stratégique visait à accélérer l'expansion de Vestiaire Collective sur le marché US.",
        "Tradesy US détenait environ 1,6 million de mots-clés positionnés (comparable aux 1,4 million de Decathlon.fr), nécessitant une stratégie de redirection sophistiquée pour plus de 10 millions d'URLs.",
      ],
    },
    results: {
      title: 'Les résultats obtenus',
      description:
        "Cette fusion a été réalisée dans les temps, en respectant les différents Milestones imposés. Elle a permis à Vestiaire Collective de consolider ses positions sur le marché américain tout en récupérant l'intégralité du trafic SEO de Tradesy.",
    },
    needs: {
      title: 'Besoins du client',
      sections: [
        {
          subtitle: 'Besoins entreprise',
          text: "La fusion entre Tradesy et Vestiaire Collective avait pour objectif de consolider leurs actifs SEO et business, nécessitant une exécution rapide et sûre pour minimiser les risques. Le but était de récupérer un maximum de valeur SEO de Tradesy, tout en évitant la cannibalisation de mots-clés entre produits similaires.",
        },
        {
          subtitle: 'Besoins interlocuteurs',
          text: "Jean-Éric Blas-Châtelain, Principal Engineer Buyer Experience (SEO & Acquisition), avait besoin d'une agence spécialisée capable de gérer le matching de 10 millions d'URLs dans des délais serrés, avec un risque minimal de perte de trafic.",
        },
      ],
    },
    challenges: {
      title: 'Les défis techniques',
      items: [
        'Volume massif de pages produits générées par les utilisateurs',
        'Risque de cannibalisation entre articles similaires',
        'Potentiel de boucles de redirection sur les listings éphémères',
        "Traitement manuel impossible : ~1 400 heures requises pour 10M d'URLs à 30s chacune",
      ],
    },
    testimonial: {
      quote:
        "SLASHR a su gérer cette migration complexe avec une méthodologie rigoureuse et des outils automatisés qui nous ont permis de respecter nos délais tout en minimisant les risques. Les résultats parlent d'eux-mêmes : +162% de trafic SEO.",
      name: 'Jean-Éric Blas-Châtelain',
      role: 'Principal Engineer Buyer Experience, Vestiaire Collective',
      avatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/vestiaire-collective-jean-eric-blas-chatelain.webp',
    },
    actionPlan: {
      title: "Notre plan d'action",
      steps: [
        {
          number: 1,
          title: 'Co-construction de la méthodologie',
          content:
            "Développement d'un framework hybride combinant automatisation et traitement manuel pour équilibrer vitesse d'exécution et gestion des risques. Collaboration étroite avec les équipes Vestiaire Collective pour définir les priorités.",
        },
        {
          number: 2,
          title: "Segmentation et priorisation d'URL",
          content:
            "Priorisation des pages par métriques de performance (clics, revenus, backlinks). Seuil de qualification : minimum 2 clics sur 16 mois pour bénéficier d'un traitement de redirection direct.",
        },
        {
          number: 3,
          title: 'Matching des URL',
          content:
            "Application de 5 techniques de matching : matching manuel pour les pages à haute valeur, matching par ID, corrélation de chemin d'URL, analyse du fil d'ariane, et pertinence sémantique.",
        },
        {
          number: 4,
          title: 'Monitoring et optimisation',
          content:
            "Vérification continue de la précision des redirections et de l'indexation Google post-lancement. Ajustements en temps réel pour maximiser la récupération de trafic.",
        },
      ],
    },
  },
  {
    slug: 'cas-client-fusion-de-yakarouler-et-carter-cash',
    title: 'Fusion SEO : Yakarouler x Carter Cash',
    description:
      'La fusion de Yakarouler vers Carter Cash a nécessité une stratégie de redirection complexe pour consolider les actifs SEO tout en maximisant les opportunités de ventes sur une plateforme unifiée.',
    logo: 'Carter Cash',
    images: {
      hero: 'https://agence-slashr.fr/wp-content/uploads/2024/03/Carter-Cash-magasin-1200x628-1-1024x536.jpeg',
      content: [
        'https://agence-slashr.fr/wp-content/uploads/2024/03/Photo-Officielle-Comptoir-Arras-1-1024x768.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/03/message-yakarouler-devient-carter-cash-1024x761.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/03/DSC05207.JPG-1024x557-1.jpg',
      ],
      testimonialAvatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/antoine-thomas.webp',
    },
    stats: [
      { value: '+37%', label: 'mots-clés Top 3', color: 'from-orange-500 to-orange-400' },
      { value: '+45%', label: 'mots-clés Top 4-10', color: 'from-blue-500 to-purple-500' },
      { value: '+35%', label: 'mots-clés Top 11-20', color: 'from-purple-500 to-pink-500' },
    ],
    expertises: ['Migration SEO', 'SEO E-commerce', 'Audit SEO', 'Stratégie de redirection'],
    context: {
      title: 'Contexte',
      paragraphs: [
        "Carter Cash, appartenant au groupe Mobivia (Norauto, Midas, etc), s'est forgée une solide réputation dans le secteur de la distribution de pièces détachées et accessoires automobiles.",
        "Avec une vision ambitieuse et stratégique, l'entreprise a orchestré l'acquisition des actifs de Yakarouler, un autre acteur significatif du marché, avec l'intention de fusionner et d'amplifier sa présence et sa puissance dans l'écosystème digital.",
      ],
    },
    results: {
      title: 'Les résultats obtenus',
      description:
        'Cette fusion a été réalisée dans les temps, en respectant les différents Milestones imposés. Elle a permis à Carter Cash de consolider ses positions sur le marché de la pièce auto tout en récupérant de nouvelles positions venant de Yakarouler.',
    },
    needs: {
      title: 'Besoins du client',
      sections: [
        {
          subtitle: 'Besoins entreprise',
          text: "La fusion entre Yakarouler et Carter Cash avait pour objectif de consolider leurs actifs SEO et business, nécessitant une exécution rapide et sûre pour minimiser les risques. Le but était de tirer un maximum de valeur de Yakarouler, tout en conservant les acquis de Carter Cash.",
        },
        {
          subtitle: 'Besoins interlocuteurs',
          text: "Face à l'ampleur de la tâche et sans équipe dédiée, Antoine et Dimitry se sont tournés vers une agence spécialisée pour co-gérer le projet, assurant ainsi une transition fluide tout en continuant à remplir leurs autres fonctions.",
        },
      ],
    },
    challenges: {
      title: 'Les défis techniques',
      items: [
        'Redirections ratées pouvant générer des erreurs 404',
        'Risque de perte de positionnement sur des mots-clés stratégiques',
        'Perte potentielle de backlinks pendant la migration',
        "Dégradation de l'expérience utilisateur avec une navigation cassée",
        "Impact direct sur le chiffre d'affaires via la réduction du trafic organique",
        "Architecture complexe : catégories, marques auto, modèles, cylindrées créant un volume d'URLs exponentiel",
      ],
    },
    testimonial: {
      quote:
        "SLASHR nous a accompagnés tout au long de cette fusion complexe. Leur méthodologie rigoureuse et leurs outils automatisés nous ont permis de respecter nos délais tout en minimisant les risques. Les gains de positionnement parlent d'eux-mêmes.",
      name: 'Antoine Thomas',
      role: 'SEO Manager, Carter Cash',
      avatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/antoine-thomas.webp',
    },
    actionPlan: {
      title: "Notre plan d'action",
      steps: [
        {
          number: 1,
          title: 'Développement de la méthodologie',
          content:
            'Face à la complexité du site, une solution automatisée et stratégique a été développée, dépassant le cadre des redirections manuelles classiques.',
        },
        {
          number: 2,
          title: "Segmentation et priorisation d'URL",
          content:
            "L'analyse a révélé qu'environ 30 000 URLs généraient l'essentiel du trafic. Priorisation par volume de trafic, génération de revenus, et tout URL recevant ≥1 clic annuel.",
        },
        {
          number: 3,
          title: 'Matching des URL',
          content:
            "Multiples stratégies de redirection : redirections manuelles pour les URLs top-performantes, matching par référence produit, script de similarité TF-IDF, redirections au niveau catégorie en fallback.",
        },
        {
          number: 4,
          title: 'Monitoring et next steps',
          content:
            "Vérification continue de la précision des redirections et de la réponse d'indexation de Google via la Search Console et l'analyse des logs.",
        },
      ],
    },
  },
  {
    slug: 'cas-client-les-petites-billes',
    title: 'Migration SEO : Les Petites Billes',
    description:
      "Revenir plus fort d'une migration loupée. Marque française E-commerce de linge pour bébé ayant perdu la moitié de son trafic suite à une migration WordPress vers Shopify mal gérée.",
    logo: 'Les Petites Billes',
    logoImage: 'https://agence-slashr.fr/wp-content/uploads/2024/03/Logo-LesPetitesBilles-1024x429-1.webp',
    images: {
      hero: 'https://agence-slashr.fr/wp-content/uploads/2024/03/les-petites-billes-1024x512.webp',
      content: [
        'https://agence-slashr.fr/wp-content/uploads/2024/03/Capture-decran-2024-03-22-a-17.05.13-1024x500.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/03/avis-les-petites-billes_unzvub.jpeg',
      ],
      testimonialAvatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/morgane-lpb.png',
    },
    stats: [
      { value: '+300', label: 'mots-clés en Top 3', color: 'from-orange-500 to-orange-400' },
      { value: '+230%', label: 'trafic SEO global', color: 'from-blue-500 to-purple-500' },
      { value: '+250%', label: 'trafic SEO pages transactionnelles', color: 'from-purple-500 to-pink-500' },
    ],
    expertises: ['Migration SEO', 'SEO E-commerce', 'Audit SEO'],
    context: {
      title: "Revenir plus fort d'une migration loupée",
      paragraphs: [
        "Créée en 2021, la marque Les Petites Billes profite d'un trafic SEO récurrent et pérenne. Innovante et curieuse, sa fondatrice cherche constamment à s'améliorer.",
        "En 2023, une agence Web lui propose de passer sur le CMS Shopify et ainsi d'améliorer son design et ses performances E-commerce. Le tout sans perte de trafic. Morgane accepte. Des mois de préparation s'ensuivent avant que la migration ne soit effectuée.",
        "Après la mise en ligne du nouveau site, le trafic et le CA se retrouvent divisés par 2. Elle nous contacte alors pour poser ses questions, trouver des réponses et des solutions. Au moment de notre rencontre, elle craint que cette migration ne mène à l'arrêt de son activité.",
      ],
    },
    results: {
      title: 'Un SEO remis sur les rails !',
      description:
        "La baisse de trafic initial a été un coup dur (et une sacrée peur) pour la marque française. Mais elle a aussi été l'opportunité de mettre sur le papier toutes les actions nécessaires pour pouvoir croître. Nous avons donc tiré parti de cet événement pour mettre en place une stratégie SEO la plus efficace possible. Aujourd'hui, Morgane mesure l'importance du SEO pour son activité et participe activement à la développer.",
    },
    needs: {
      title: 'Besoins du client',
      sections: [
        {
          subtitle: 'Besoins entreprise',
          text: "Comprendre la situation initiale, les URL impactées et les faits pouvant expliquer cette perte de trafic et de revenus. Répondre à la question délicate : Faut-il rester sur le CMS actuel (Shopify) ou revenir en arrière (Woocommerce) ? Exécuter le plan d'attaque le plus efficacement possible pour arranger la situation.",
        },
        {
          subtitle: 'Besoins interlocuteurs',
          text: "Morgane Tardivel, Fondatrice, nous a contactés pour poser ses questions, trouver des réponses et des solutions. Elle craignait que cette migration ne mène à l'arrêt de son activité. Elle avait besoin d'un partenaire capable de délivrer des résultats rapidement pour stabiliser l'entreprise rendue fragile par les pertes récentes.",
        },
      ],
    },
    challenges: {
      title: 'Les enjeux du projet',
      items: [
        "Bien analyser la situation : Il était important de comprendre la situation initiale le mieux possible. Notre analyse nous a permis de comprendre les URL impactées, de comprendre les faits pouvant expliquer cette perte de trafic et de revenus. C'est à travers elle que nous pouvons prendre les décisions les plus éclairées.",
        "Prendre une décision délicate : Il nous a fallu répondre à la question suivante : Faut-il rester sur le CMS actuel (Shopify) ou revenir en arrière (Woocommerce) ? Google n'aime pas les changements brutaux et successifs. Faire une migration peut représenter un risque pour votre SEO. Le niveau de risque est donc encore plus sensible pour une 'migration-retour'.",
        "Exécuter le nouveau plan efficacement : Au-delà de la prise de décision, l'enjeu était de pouvoir exécuter notre plan d'attaque le plus efficacement possible. Les récentes pertes de trafic avaient rendu l'entreprise plus fragile. L'anxiété de la fondatrice était naturellement palpable. Nous étions dans l'obligation de délivrer des résultats pour arranger la situation le mieux, et le plus rapidement possible.",
      ],
    },
    testimonial: {
      quote:
        "Excellente agence que je recommande les yeux fermés. Equipe très très pro, réactive et à l'écoute. Si vous voulez créer un business solide : Foncez voir Slashr vous ne le regretterez pas. Un immense merci à Anthony et son équipe.",
      name: 'Morgane Tardivel',
      role: 'Fondatrice, Les Petites Billes',
      avatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/morgane-lpb.png',
    },
    actionPlan: {
      title: "Notre plan d'action",
      steps: [
        {
          number: 1,
          title: 'Analyse de la Perte & Décision',
          content:
            "Quand une entreprise vient nous voir après une migration loupée, nous passons obligatoirement par une analyse de perte de trafic. Nous cherchons à avoir une compréhension parfaite de la situation : Y a-t-il des fautes ou des oublis grossiers ? Quels sont tous les éléments qui ont pu générer cette perte ? Suite à cela, nous avons pu, dans la situation des Petites Billes, déterminer s'il était préférable de rester sur Shopify, ou de retourner sur WordPress. Dans cette situation, nous avons décidé de revenir sur le CMS initial (WordPress/Woocommerce). Et les résultats témoignent d'une bonne prise de décision.",
        },
        {
          number: 2,
          title: "Audit & Plan d'Actions SEO",
          content:
            "Une fois cette décision prise, nous ne souhaitions pas simplement revenir sur l'ancien CMS sans mettre en place d'améliorations. Nous avons donc effectué un Audit technique et stratégique pour déterminer les recommandations à mettre en place.",
        },
        {
          number: 3,
          title: 'Gestion Migration',
          content:
            "Nous savons donc ce que nous allons faire, et nous avons toutes les recommandations nécessaires pour savoir comment améliorer le référencement naturel de la marque pour bébé. Nous avons donc procédé aux différentes prestations inhérentes aux migrations. Sur l'environnement de préproduction (version brouillon), nous avons vérifié que les bonnes pratiques étaient bien appliquées. Également, nous y avons inclus nos recommandations. Nous avons ensuite préparé le fichier de redirections pour indiquer à Google le nouveau changement d'URL. Nous avons fait la recette du nouveau site mis en ligne pour s'assurer qu'aucun détail ne nous échappe. Nous avons monitoré les KPI SEO et avons enfin pu présenter un bilan. Morgane a pu apprendre que cette migration prenait bien la direction souhaitée.",
        },
        {
          number: 4,
          title: 'Amélioration Continue SEO',
          content:
            "Une fois la migration effectuée, nous avons pu mettre en place notre processus d'amélioration continue. Nous avons ainsi pu développer le SEO en : Créant des pages business, Mettant à jour les articles de blogs existants, Créant de nouveaux articles de blogs stratégiques. Nous avons couplé ces actions à l'obtention de liens externes pour améliorer l'autorité du domaine ou de pages stratégiques précises.",
        },
      ],
    },
  },
  {
    slug: 'cas-client-la-belle-fragrance',
    title: 'Accompagnement SEO : La Belle Fragrance',
    description:
      "La Belle Fragrance propose des reproductions légales de parfums connus à 90%. Malgré une gamme de produits suffisante et des volumes de recherche importants pour leur secteur, le site manquait de visibilité SEO face à des concurrents déjà bien établis.",
    logo: 'La Belle Fragrance',
    logoImage: 'https://agence-slashr.fr/wp-content/uploads/2024/11/logo-lbf.webp',
    images: {
      hero: 'https://agence-slashr.fr/wp-content/uploads/2024/11/la-belle-fragrance-background-1024x512.webp',
      content: [
        'https://agence-slashr.fr/wp-content/uploads/2024/11/Capture-decran-2024-11-20-a-15.37.42-1024x442.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/11/P1310295.webp',
      ],
      testimonialAvatar: 'https://agence-slashr.fr/wp-content/uploads/2024/11/1705481932895.jpeg',
    },
    stats: [
      { value: '+903%', label: 'augmentation des clics mensuels', color: 'from-orange-500 to-orange-400' },
      { value: '+1130%', label: 'Croissance des impressions', color: 'from-blue-500 to-purple-500' },
      { value: '+1457%', label: 'Augmentation des mots-clés positionnés', color: 'from-purple-500 to-pink-500' },
    ],
    expertises: ['SEO E-commerce', 'Stratégie SEO', 'Netlinking', 'Stratégie de contenu'],
    context: {
      title: 'Conquérir le marché des parfums d\'équivalence grâce au SEO',
      paragraphs: [
        "La Belle Fragrance, créée par Ismael et Matthieu, propose des reproductions légales de parfums connus à 90%. Malgré une gamme de produits suffisante et des volumes de recherche importants pour leur secteur, le site manquait de visibilité SEO face à des concurrents déjà bien établis.",
      ],
    },
    results: {
      title: 'Les résultats obtenus',
      description:
        "Grâce à notre accompagnement, La Belle Fragrance a vu son trafic SEO exploser avec +903% d'augmentation des clics mensuels. La marque se positionne désormais sur les mots-clés stratégiques de son secteur et génère un trafic qualifié récurrent.",
    },
    needs: {
      title: 'Besoins du client',
      sections: [
        {
          subtitle: 'Besoins entreprise',
          text: "Mettre le site sur de bons rails en termes de SEO. Optimiser les pages business pour générer du trafic et des conversions. Lancer une stratégie de contenu efficace. Se positionner sur des mots-clés stratégiques à fort potentiel.",
        },
        {
          subtitle: 'Besoins interlocuteurs',
          text: "Obtenir un plan d'action clair et actionnable. Bénéficier d'un accompagnement expert pour la mise en place de la stratégie SEO. Voir des résultats concrets en termes de trafic et de positionnement.",
        },
      ],
    },
    challenges: {
      title: 'Enjeux du projet',
      items: [
        "Partir de zéro : Établir une base SEO solide pour un site avec peu d'historique.",
        "Concurrence établie : Se démarquer face à des concurrents déjà bien positionnés.",
        "Opportunités de niches : Capitaliser sur des mots-clés spécifiques comme « parfum d'équivalence » et « {nom des parfums} + pas cher ».",
        "Scalabilité : Mettre en place une structure SEO permettant d'intégrer facilement de nouveaux parfums.",
        "Complémentarité avec le CPC : Créer une synergie entre la stratégie SEO et les campagnes publicitaires existantes.",
      ],
    },
    testimonial: {
      quote:
        "SLASHR nous a permis de passer d'un site invisible à une véritable machine à trafic SEO. Les résultats parlent d'eux-mêmes avec une croissance de +903% des clics mensuels.",
      name: 'Ismael',
      role: 'Co-fondateur, La Belle Fragrance',
      avatar: 'https://agence-slashr.fr/wp-content/uploads/2024/11/1705481932895.jpeg',
    },
    actionPlan: {
      title: "Notre plan d'action",
      steps: [
        {
          number: 1,
          title: 'Audit et élaboration de la stratégie',
          content:
            "Réalisation d'un audit SEO complet, incluant un check technique rapide. Élaboration d'un plan d'action stratégique détaillé. Identification des opportunités de mots-clés prioritaires.",
        },
        {
          number: 2,
          title: 'Optimisation des pages business',
          content:
            "Optimisation et enrichissement de la page d'accueil. Optimisation des pages catégories pour cibler les requêtes génériques. Optimisation des pages produits pour les recherches spécifiques de parfums. Mise en place d'une structure de maillage interne efficace.",
        },
        {
          number: 3,
          title: 'Stratégie de contenu et netlinking',
          content:
            "Développement d'une stratégie de contenu ciblant des thématiques connexes (séduction, virilité, etc.). Création de contenus optimisés pour le SEO et enrichissants pour les utilisateurs. Mise en place d'une stratégie d'acquisition de backlinks pour renforcer l'autorité du domaine.",
        },
        {
          number: 4,
          title: 'Suivi et optimisation continue',
          content:
            "Mise en place d'un accompagnement mensuel de 10h. Suivi régulier des performances et ajustements de la stratégie. Optimisation continue basée sur les données et les nouvelles opportunités identifiées.",
        },
      ],
    },
  },
  {
    slug: 'cas-client-accompagnement-les-petites-billes',
    title: 'Accompagnement SEO : Les Petites Billes',
    description:
      "Les Petites Billes propose des gigoteuses innovantes, adaptables à différentes saisons et évolutives selon l'âge de l'enfant. Malgré un produit unique répondant à de multiples besoins, le site manquait de visibilité sur une large gamme de requêtes potentielles.",
    logo: 'Les Petites Billes',
    logoImage: 'https://agence-slashr.fr/wp-content/uploads/2024/03/Logo-LesPetitesBilles-1024x429-1.webp',
    images: {
      hero: 'https://agence-slashr.fr/wp-content/uploads/2024/03/les-petites-billes-1024x512.webp',
      testimonialAvatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/morgane-lpb.png',
    },
    stats: [
      { value: '+132%', label: 'Trafic SEO VS N-1', color: 'from-orange-500 to-orange-400' },
      { value: '+102%', label: 'de mots-clés positionnés VS N-1', color: 'from-blue-500 to-purple-500' },
      { value: '+83%', label: "d'impressions mensuelles VS N-1", color: 'from-purple-500 to-pink-500' },
    ],
    expertises: ['Audit stratégique', 'Création de contenu', 'SEO E-commerce', 'Netlinking'],
    context: {
      title: 'Maximiser la visibilité SEO grâce à une stratégie de contenu ciblée',
      paragraphs: [
        "Les Petites Billes propose des gigoteuses innovantes, adaptables à différentes saisons et évolutives selon l'âge de l'enfant. Malgré un produit unique répondant à de multiples besoins, le site manquait de visibilité sur une large gamme de requêtes potentielles.",
      ],
    },
    results: {
      title: 'Les résultats obtenus',
      description:
        "Grâce à notre stratégie de contenu ciblée et à l'optimisation des landing pages, Les Petites Billes a vu son trafic SEO augmenter de +132% par rapport à l'année précédente, avec une couverture thématique élargie sur l'ensemble des requêtes liées aux besoins des jeunes parents.",
    },
    needs: {
      title: 'Besoins du client',
      sections: [
        {
          subtitle: 'Besoins entreprise',
          text: "Augmenter le nombre de points d'entrée SEO vers le site. Se positionner sur une variété de mots-clés liés aux caractéristiques du produit. Développer l'autorité de la marque sur les thématiques liées à la maternité et aux soins du bébé.",
        },
        {
          subtitle: 'Besoins interlocuteurs',
          text: "Obtenir une stratégie de contenu claire et exhaustive. Maximiser la visibilité du site sur les requêtes transactionnelles et informationnelles. Renforcer le maillage interne pour optimiser le parcours utilisateur et le référencement. Travail des landing pages en suivant la saisonnalité.",
        },
      ],
    },
    challenges: {
      title: 'Enjeux du projet',
      items: [
        "Diversification des points d'entrée : Créer des landing pages ciblées pour chaque variante de recherche (saison, âge, sexe, etc.).",
        "Couverture thématique : Développer une présence sur l'ensemble des requêtes liées aux besoins des jeunes parents.",
        "Équilibre contenu transactionnel/informationnel : Assurer une visibilité tant sur les requêtes d'achat que sur les recherches de conseils.",
        "Renforcement de l'autorité : Positionner Les Petites Billes comme expert dans l'univers de la puériculture.",
        "Optimisation du maillage interne : Créer des parcours utilisateurs pertinents et renforcer le référencement des pages clés.",
      ],
    },
    testimonial: {
      quote:
        "L'accompagnement de SLASHR nous a permis de structurer notre stratégie SEO et de développer une présence forte sur les requêtes clés de notre secteur. Les résultats sont au rendez-vous !",
      name: 'Morgane Tardivel',
      role: 'Fondatrice, Les Petites Billes',
      avatar: 'https://agence-slashr.fr/wp-content/uploads/2023/11/morgane-lpb.png',
    },
    actionPlan: {
      title: "Notre plan d'action",
      steps: [
        {
          number: 1,
          title: 'Étude de mots-clés',
          content:
            "Identification exhaustive des variantes de recherche autour des gigoteuses. Utilisation d'outils de recherche de mots-clés pour explorer toutes les combinaisons possibles. Analyse des suggestions de recherche Google pour identifier les requêtes long-tail. Étude des mots-clés des concurrents pour repérer d'éventuelles opportunités manquées. Analyse des requêtes informationnelles liées à la maternité et aux soins du bébé. Priorisation des opportunités en fonction du volume de recherche et de la concurrence.",
        },
        {
          number: 2,
          title: 'Création de landing pages ciblées',
          content:
            "Développement de pages dédiées pour chaque combinaison pertinente : pages spécifiques pour les variations saisonnières (gigoteuse été, hiver), pages ciblant les tranches d'âge (gigoteuse 0-6 mois, 6-12 mois), pages dédiées aux caractéristiques spécifiques (gigoteuse évolutive, respirante). Optimisation on-page poussée pour chaque landing page. Mise en place d'une structure de navigation et de filtres facilitant l'accès à ces pages.",
        },
        {
          number: 3,
          title: 'Stratégie de contenu informationnel',
          content:
            "Création d'un calendrier éditorial couvrant les thématiques clés : planification de contenus autour des étapes clés du développement du bébé, programmation d'articles saisonniers (préparer l'arrivée de bébé en hiver), inclusion de sujets connexes pour élargir l'autorité thématique. Production de contenus de qualité répondant aux questions fréquentes. Optimisation SEO des contenus pour viser les premières positions.",
        },
        {
          number: 4,
          title: 'Optimisation du maillage interne',
          content:
            "Mise en place d'une stratégie de maillage reliant les contenus : création de liens contextuels entre les articles informationnels et les pages produits. Intégration de modules « Produits recommandés » dans les articles de blog. Création de parcours thématiques guidant les utilisateurs. Optimisation des ancres de liens internes pour une distribution efficace du « jus » SEO vers les pages prioritaires.",
        },
        {
          number: 5,
          title: 'Développement de la popularité',
          content:
            "Création d'une campagne de netlinking pour les nouvelles landing pages. Identification des sites autoritaires dans le domaine de la puériculture. Élaboration d'une stratégie de création de contenu pour obtenir des backlinks naturels. Mise en place de partenariats avec des influenceurs et des blogs parentaux. Consolidation de la popularité des landing historiques et de la page d'accueil.",
        },
      ],
    },
  },
  {
    slug: 'cas-client-gethumancall',
    title: 'Accompagnement SEO : GetHumanCall',
    description:
      "GetHumanCall offre aux entreprises la possibilité d'externaliser leur centre d'appels et service client à Madagascar. Malgré une expertise solide et des efforts initiaux en content marketing, l'entreprise peinait à atteindre les premières positions sur ses mots-clés cibles.",
    logo: 'GetHumanCall',
    logoImage: 'https://agence-slashr.fr/wp-content/uploads/2024/10/GetHumancall.png',
    images: {
      hero: 'https://agence-slashr.fr/wp-content/uploads/2024/10/gethumancall1-1024x517.png',
      content: [
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gethumancall2-1024x640.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gethumancall3-1024x600.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gethumancall4-1024x627.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gethumancall5-1024x714.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gethumancall6-1024x597.png',
      ],
      testimonialAvatar: 'https://agence-slashr.fr/wp-content/uploads/2024/10/65d47aba8ca11c48fabbac14_Jo2.webp',
    },
    stats: [
      { value: '+166%', label: 'De trafic SEO VS N-1', color: 'from-orange-500 to-orange-400' },
      { value: '#1', label: 'position sur les 4 mots-clés stratégiques', color: 'from-blue-500 to-purple-500' },
      { value: '+71%', label: 'de mots-clés positionnés', color: 'from-purple-500 to-pink-500' },
    ],
    expertises: ['Audit Stratégique', 'Accompagnement SEO', 'Netlinking', 'Stratégie de contenu'],
    context: {
      title: 'Dominer Google sur sa thématique service B2B',
      paragraphs: [
        "GetHumanCall, dirigé par Jonathan Da Costa, ancien Directeur Service Client de Deliveroo, offre aux entreprises la possibilité d'externaliser leur centre d'appels et service client à Madagascar. Malgré une expertise solide et des efforts initiaux en content marketing, l'entreprise peinait à atteindre les premières positions sur ses mots-clés cibles.",
      ],
    },
    results: {
      title: 'Les résultats obtenus',
      description:
        "GetHumanCall a atteint la 1ère position sur ses 4 mots-clés stratégiques, avec une augmentation de +166% du trafic SEO. L'équipe interne est désormais formée et autonome sur les bonnes pratiques SEO.",
    },
    needs: {
      title: 'Besoins du client',
      sections: [
        {
          subtitle: 'Besoins entreprise',
          text: "Atteindre la 1ère ou 2ème position sur les mots-clés stratégiques. Comprendre et surmonter les obstacles empêchant une meilleure visibilité. Développer une stratégie SEO efficace et durable.",
        },
        {
          subtitle: 'Besoins interlocuteurs',
          text: "Obtenir des recommandations précises et actionnables pour leur rédacteur interne. Bénéficier d'un accompagnement expert pour mettre en place et maintenir une stratégie SEO performante. Former et rendre autonome l'équipe interne sur les bonnes pratiques SEO.",
        },
      ],
    },
    challenges: {
      title: 'Enjeux du projet',
      items: [
        "Optimisation ciblée : Améliorer le positionnement sur des mots-clés très spécifiques et à forte intention commerciale.",
        "Concurrence des pages internes : Résoudre le problème de cannibalisation entre les pages du site visant les mêmes mots-clés.",
        "Stratégie de contenu : Affiner la stratégie éditoriale pour mieux cibler et répondre aux intentions de recherche.",
        "Acquisition de backlinks : Mettre en place une stratégie de netlinking efficace pour renforcer l'autorité du site.",
        "Formation et autonomie : Accompagner l'équipe interne pour qu'elle devienne de plus en plus autonome dans la gestion du SEO.",
      ],
    },
    testimonial: {
      quote:
        "Grâce à SLASHR, nous avons enfin atteint les premières positions sur nos mots-clés stratégiques. Leur méthodologie basée sur des playbooks ultra-spécifiques nous a permis de comprendre exactement ce qu'il fallait faire pour progresser.",
      name: 'Jonathan Da Costa',
      role: 'CEO, GetHumanCall',
      avatar: 'https://agence-slashr.fr/wp-content/uploads/2024/10/65d47aba8ca11c48fabbac14_Jo2.webp',
    },
    actionPlan: {
      title: "Notre plan d'action",
      steps: [
        {
          number: 1,
          title: 'Audit stratégique',
          content:
            "Analyse approfondie du positionnement actuel et de la concurrence. Évaluation détaillée des positions actuelles sur les mots-clés cibles. Analyse SWOT des principaux concurrents sur ces mots-clés. Identification des opportunités de différenciation et d'amélioration. Création de 4 playbooks ultra-spécifiques et actionnables pour chaque mot-clé cible. Définition d'une stratégie de netlinking adaptée à chaque terme.",
        },
        {
          number: 2,
          title: 'Mise en œuvre des recommandations',
          content:
            "Application des recommandations techniques : optimisation du maillage interne selon les playbooks, amélioration de la structure des URL si nécessaire, mise en place des balises techniques recommandées. Optimisation du contenu existant selon les playbooks : réécriture et enrichissement des contenus des pages cibles, optimisation de la structure des contenus, intégration des mots-clés secondaires et des variations sémantiques. Lancement des campagnes de netlinking avec un budget de 300€ par mot-clé.",
        },
        {
          number: 3,
          title: 'Accompagnement et coaching mensuel',
          content:
            "Mise en place d'un accompagnement mensuel de 7h. Réunions de suivi régulières pour évaluer les progrès. Analyse des rapports de performance et identification des axes d'amélioration. Définition des priorités pour le mois suivant. Formation continue de l'équipe interne : sessions de formation spécifiques sur les meilleures pratiques SEO, ateliers pratiques sur l'utilisation des outils SEO et l'analyse des données. Partage continu des dernières tendances et mises à jour des algorithmes.",
        },
        {
          number: 4,
          title: 'Suivi des performances et itération',
          content:
            "Monitoring régulier des positions sur les mots-clés cibles. Mise en place d'un tableau de bord de suivi des positions. Alertes en cas de variations significatives des positions. Analyse hebdomadaire de l'évolution des classements. Analyse de l'évolution du trafic et des nouveaux mots-clés positionnés. Ajustements de la stratégie en fonction des résultats obtenus. Révision trimestrielle de la stratégie globale. Proposition de nouvelles opportunités de croissance SEO.",
        },
      ],
    },
  },
  {
    slug: 'cas-client-la-gazette-france',
    title: 'Accompagnement SEO : La Gazette France',
    description:
      "Gazette France est un média dont le modèle économique repose sur la publication d'annonces légales. Pour conserver son habilitation, l'entreprise doit générer un trafic minimum sur des requêtes locales. Malgré la présence de millions de pages, le site ne générait que 1 000 visites sur les trois derniers mois.",
    logo: 'La Gazette France',
    images: {
      hero: 'https://agence-slashr.fr/wp-content/uploads/2024/10/la-gazette-france-1-1024x415.png',
      content: [
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gazette1-1024x729.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gazette3-1024x740.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gazette4-1024x733.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gazette2-1024x733.png',
        'https://agence-slashr.fr/wp-content/uploads/2024/10/gazettefrance-1024x608.png',
      ],
      testimonialAvatar: 'https://agence-slashr.fr/wp-content/uploads/2024/10/XAVIER-MEPLON.jpg',
    },
    stats: [
      { value: '+10000%', label: 'De trafic SEO, de 1000 à 160 000 clics mensuels', color: 'from-orange-500 to-orange-400' },
      { value: '+8330%', label: "d'impressions mensuelles", color: 'from-blue-500 to-purple-500' },
      { value: '+8233%', label: 'De 3 000 à 250 000 mots-clés positionnés', color: 'from-purple-500 to-pink-500' },
    ],
    expertises: ['Audit technique', 'SEO Technique', 'Optimisation de crawl', 'Maillage interne'],
    context: {
      title: 'Résoudre les problèmes techniques pour libérer le potentiel SEO',
      paragraphs: [
        "Gazette France est un média dont le modèle économique repose sur la publication d'annonces légales. Pour conserver son habilitation, l'entreprise doit générer un trafic minimum sur des requêtes locales. Malgré la présence de millions de pages, le site ne générait que 1 000 visites sur les trois derniers mois.",
      ],
    },
    results: {
      title: 'Les résultats obtenus',
      description:
        "De 1 000 à 160 000 clics mensuels, soit une croissance de +10 000%. L'objectif de 100 000 clics mensuels a été largement dépassé, sécurisant l'habilitation d'annonceur légal et pérennisant le modèle économique de Gazette France.",
    },
    needs: {
      title: 'Besoins du client',
      sections: [
        {
          subtitle: 'Besoins entreprise',
          text: "Atteindre rapidement 100 000 clics mensuels. Résoudre les problèmes majeurs de crawl et d'indexation. Développer une stratégie de contenu froid et evergreen.",
        },
        {
          subtitle: 'Besoins interlocuteurs',
          text: "Obtenir rapidement des résultats pour rassurer sur la viabilité du business model. Bénéficier d'un accompagnement expert pour mettre en place une stratégie SEO efficace.",
        },
      ],
    },
    challenges: {
      title: 'Enjeux du projet',
      items: [
        "Résoudre les problèmes techniques : Identifier et corriger les failles majeures empêchant l'indexation des millions de pages du site.",
        "Optimiser l'indexation : Mettre en place une structure permettant l'indexation efficace de l'annuaire d'entreprises et des autres contenus stratégiques.",
        "Développer une stratégie de contenu : Créer et optimiser du contenu froid et evergreen pour générer un trafic qualifié et récurrent.",
        "Atteindre rapidement les objectifs : Obtenir les 100 000 clics mensuels dans les meilleurs délais pour sécuriser l'habilitation d'annonceur légal.",
        "Pérenniser la croissance : Mettre en place une stratégie SEO durable permettant une croissance continue du trafic au-delà des objectifs initiaux.",
      ],
    },
    testimonial: {
      quote:
        "SLASHR a su identifier et résoudre les problèmes techniques qui bloquaient notre site depuis des mois. Passer de 1 000 à 160 000 clics mensuels a non seulement sécurisé notre habilitation, mais a transformé notre vision du SEO.",
      name: 'Xavier Meplon',
      role: 'Directeur de publication, La Gazette France',
      avatar: 'https://agence-slashr.fr/wp-content/uploads/2024/10/XAVIER-MEPLON.jpg',
    },
    actionPlan: {
      title: "Notre plan d'action",
      steps: [
        {
          number: 1,
          title: 'Audit technique approfondi',
          content:
            "Analyse complète de l'architecture du site et de sa structure technique. Examen de la hiérarchie des URL et de la structure des répertoires. Évaluation de la répartition du poids SEO entre les différentes sections du site. Analyse de la profondeur des pages et de l'accessibilité pour les moteurs de recherche. Identification des problèmes de crawl et d'indexation. Utilisation d'outils comme Screaming Frog pour simuler le crawl des moteurs de recherche. Analyse des logs serveur pour comprendre le comportement réel des robots. Examen des rapports de couverture de la Google Search Console. Élaboration d'une roadmap détaillée des corrections à apporter.",
        },
        {
          number: 2,
          title: 'Correction des problèmes détectés',
          content:
            "Correction des problèmes de balises canonical : identification des pages avec des balises canonical incorrectes ou manquantes, mise en place de balises canonical appropriées pour gérer le contenu dupliqué. Correction des problèmes de contenu dupliqué : identification des sources de contenu dupliqué (interne et externe), mise en place de redirections 301 pour les URL redondantes, réécriture ou consolidation du contenu dupliqué. Correction des problèmes de 404 : analyse des rapports d'erreurs 404, mise en place de redirections 301 pour les pages importantes supprimées, mise à jour des liens internes pointant vers des pages 404.",
        },
        {
          number: 3,
          title: 'Optimisation du crawl',
          content:
            "Restructuration de l'arborescence du site : simplification de la structure des URL pour une meilleure compréhension par les moteurs, regroupement logique des contenus similaires, création d'une hiérarchie claire entre les différentes sections du site. Optimisation du parcours de crawl des robots : amélioration de l'architecture de l'information pour faciliter le crawl, mise en place d'une stratégie de liens internes pour guider les robots, optimisation des temps de chargement pour améliorer l'efficacité du crawl. Optimisation de la base technique (robots.txt, sitemap, etc.) : mise à jour du fichier robots.txt, création de sitemaps XML dynamiques et optimisés, implémentation de balises meta robots appropriées.",
        },
        {
          number: 4,
          title: 'Optimisation du maillage interne',
          content:
            "Définition du maillage entre les articles : création d'une matrice de maillage basée sur la pertinence thématique, implémentation de liens contextuels entre articles connexes, mise en place de sections « Articles liés » pertinentes. Optimisation du maillage entre les articles, les tags et les catégories : création d'une structure de navigation claire entre ces éléments, optimisation des pages de tags et de catégories pour cibler des mots-clés spécifiques, mise en place de liens de navigation par fil d'Ariane. Restructuration de la pagination pour l'adapter aux besoins d'un média.",
        },
        {
          number: 5,
          title: 'Accompagnement et suivi',
          content:
            "Mise en place d'un accompagnement mensuel. Réunions mensuelles pour examiner les progrès et définir les priorités. Analyse continue des performances SEO et identification des opportunités. Formation de l'équipe interne aux bonnes pratiques SEO : sessions de formation sur les fondamentaux du SEO pour les rédacteurs, ateliers pratiques sur l'optimisation on-page et la création de contenu SEO. Suivi des performances et ajustements continus de la stratégie. Mise en place d'un tableau de bord SEO personnalisé. Analyse mensuelle des KPI (trafic organique, positions, CTR). Ajustements réguliers de la stratégie en fonction des résultats obtenus.",
        },
      ],
    },
  },
];

// Interface pour les cards de la liste
export interface CaseStudyCard {
  slug: string;
  logo: string;
  title: string;
  description: string;
  stats: string[];
  tags: string[];
}

// Récupérer tous les cas clients depuis WordPress
export async function getCaseStudiesFromWP(): Promise<CaseStudyCard[]> {
  try {
    // Récupérer les pages dont le slug commence par "cas-client"
    const res = await fetch(
      `${WP_API_URL}/pages?per_page=50&search=cas-client&_embed`,
      {
        next: { revalidate: 300 }, // Cache 5 minutes
      }
    );

    if (!res.ok) {
      console.error('Erreur WordPress API:', res.status);
      return [];
    }

    const pages: WPPage[] = await res.json();

    // Filtrer uniquement les pages cas-client
    const caseStudyPages = pages.filter((p) => p.slug.startsWith('cas-client'));

    return caseStudyPages.map((page) => {
      const title = stripHtml(page.title.rendered).replace('Cas Client – ', '');
      const description =
        page.yoast_head_json?.og_description ||
        stripHtml(page.excerpt.rendered) ||
        'Découvrez comment nous avons accompagné ce client dans sa stratégie SEO.';

      // Extraire les stats du contenu
      const stats = extractMetrics(page.content.rendered);
      const expertises = extractExpertises(page.content.rendered);

      return {
        slug: page.slug,
        logo: title.split(' x ')[0].split(' et ')[0].trim(),
        title: title,
        description: description.substring(0, 200) + (description.length > 200 ? '...' : ''),
        stats: stats.slice(0, 2).map((s) => `${s.value} ${s.label}`),
        tags: expertises.slice(0, 3),
      };
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des cas clients:', error);
    return [];
  }
}

// Récupérer tous les slugs pour generateStaticParams
export async function getAllCaseStudySlugsFromWP(): Promise<string[]> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?per_page=50&search=cas-client&_fields=slug`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) return [];

    const pages: Array<{ slug: string }> = await res.json();
    return pages.filter((p) => p.slug.startsWith('cas-client')).map((p) => p.slug);
  } catch (error) {
    console.error('Erreur lors de la récupération des slugs:', error);
    return [];
  }
}

// Récupérer un cas client par slug (avec fallback sur données enrichies)
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  // D'abord, chercher dans les données enrichies (fallback)
  const fallbackData = fallbackCaseStudies.find((cs) => cs.slug === slug);

  if (fallbackData) {
    return fallbackData;
  }

  // Sinon, essayer de récupérer depuis WordPress et construire une structure basique
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) return null;

    const pages: WPPage[] = await res.json();
    if (pages.length === 0) return null;

    const page = pages[0];
    const title = stripHtml(page.title.rendered).replace('Cas Client – ', '');
    const stats = extractMetrics(page.content.rendered);
    const expertises = extractExpertises(page.content.rendered);

    // Construire une structure basique depuis WordPress
    return {
      slug: page.slug,
      title: `Cas Client : ${title}`,
      description:
        page.yoast_head_json?.og_description ||
        'Découvrez comment nous avons accompagné ce client.',
      logo: title.split(' x ')[0].split(' et ')[0].trim(),
      stats:
        stats.length > 0
          ? stats
          : [
              { value: 'N/A', label: 'Statistique à venir', color: 'from-gray-500 to-gray-400' },
            ],
      expertises: expertises,
      context: {
        title: 'Contexte',
        paragraphs: ['Contenu à venir depuis WordPress.'],
      },
      results: {
        title: 'Les résultats obtenus',
        description: 'Résultats détaillés à venir.',
      },
      needs: {
        title: 'Besoins du client',
        sections: [
          {
            subtitle: 'Besoins entreprise',
            text: 'Description des besoins à venir.',
          },
        ],
      },
      testimonial: {
        quote: 'Témoignage à venir.',
        name: 'Client',
        role: 'Entreprise',
      },
      actionPlan: {
        title: "Notre plan d'action",
        steps: [
          {
            number: 1,
            title: 'Étape 1',
            content: 'Détails à venir.',
          },
        ],
      },
    };
  } catch (error) {
    console.error('Erreur lors de la récupération du cas client:', error);
    return null;
  }
}

// Récupérer les autres cas clients (pour le carousel "Nos autres réussites")
export async function getOtherCaseStudies(
  currentSlug: string
): Promise<CaseStudyCard[]> {
  const allCaseStudies = await getCaseStudiesFromWP();

  // Si WordPress ne retourne rien, utiliser le fallback
  if (allCaseStudies.length === 0) {
    return fallbackCaseStudies
      .filter((cs) => cs.slug !== currentSlug)
      .map((cs) => ({
        slug: cs.slug,
        logo: cs.logo,
        title: cs.title.replace('Fusion SEO : ', '').replace('Accompagnement SEO : ', ''),
        description: cs.description,
        stats: cs.stats.slice(0, 2).map((s) => `${s.value} ${s.label}`),
        tags: cs.expertises.slice(0, 3),
      }));
  }

  return allCaseStudies.filter((cs) => cs.slug !== currentSlug);
}

// Export des données de fallback pour usage synchrone
export const caseStudies = fallbackCaseStudies;

// Fonction helper pour récupérer les cards (liste)
export async function getCaseStudyCards(): Promise<CaseStudyCard[]> {
  const wpCards = await getCaseStudiesFromWP();

  // Si WordPress retourne des données, les utiliser
  if (wpCards.length > 0) {
    return wpCards;
  }

  // Sinon, utiliser le fallback
  return fallbackCaseStudies.map((cs) => ({
    slug: cs.slug,
    logo: cs.logo,
    title: cs.title.replace('Fusion SEO : ', '').replace('Accompagnement SEO : ', ''),
    description: cs.description,
    stats: cs.stats.slice(0, 2).map((s) => `${s.value} ${s.label}`),
    tags: cs.expertises.slice(0, 3),
  }));
}
