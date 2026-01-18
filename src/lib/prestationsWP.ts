// Données des prestations SEO enrichies - Format complet style PrestaShop

// Interface pour les étapes de méthodologie
export interface MethodologyStep {
  number: number;
  title: string;
  description: string;
}

// Interface pour les bénéfices (bento grid)
export interface Benefit {
  title: string;
  description: string;
  highlight?: string; // Mot ou phrase à mettre en surbrillance dans le titre
  icon: 'user' | 'code' | 'check' | 'clipboard' | 'chart' | 'rocket' | 'shield' | 'target' | 'globe' | 'zap';
  size: 'small' | 'medium' | 'large'; // Taille de la card dans le bento grid
  href?: string; // Lien optionnel pour transformer la card en lien
}

// Interface pour les points de vigilance
export interface VigilancePoint {
  title: string;
  description: string;
}

// Interface pour les engagements
export interface Engagement {
  title: string;
  description: string;
}

// Interface pour les FAQ
export interface FAQ {
  question: string;
  answer: string;
}

// Interface pour les autres expertises
export interface OtherExpertise {
  name: string;
  href: string;
}

// Interface pour la section contenu
export interface ContentSectionData {
  tag: string;
  title: string;
  content: string;
  bulletPoints: string[];
}

// Interface pour les liens expertise de la section Enjeux
export interface ExpertiseLink {
  text: string;
  href: string;
  highlight?: string;
}

// Interface pour la section Enjeux
export interface EnjeuxData {
  tag?: string;
  title: string;
  intro: string;
  expertiseLinks: ExpertiseLink[];
  ctaText?: string;
  ctaHref?: string;
}

// Interfaces pour le contenu exclusif GEO
export interface GEOArchitecturePoint {
  title: string;
  description: string;
}

export interface GEOProviderStat {
  label: string;
  singleQuery: string;
  multiQuery: string;
  description: string;
}

export interface GEOTriggerWord {
  word: string;
  avgQueries: string;
  impact: string;
}

export interface GEOKeywordAddition {
  type: string;
  percentage: string;
  example: string;
  recommendation: string;
}

export interface GEOShoppingStep {
  step: number;
  title: string;
  description: string;
}

export interface GEOExclusiveContent {
  howChatGPTSearches?: {
    tag: string;
    title: string;
    intro: string;
    points: GEOArchitecturePoint[];
  };
  queryFanOut?: {
    tag: string;
    title: string;
    intro: string;
    stats: GEOProviderStat[];
    triggerWords: GEOTriggerWord[];
    insight: string;
  };
  autoKeywordAdditions?: {
    tag: string;
    title: string;
    intro: string;
    additions: GEOKeywordAddition[];
  };
  shoppingGEO?: {
    tag: string;
    title: string;
    intro: string;
    process: GEOShoppingStep[];
    recommendation: string;
  };
}

// Catégories de prestations
export type PrestationCategory = 'seo' | 'ads' | 'other';

// Interface principale Prestation enrichie
export interface Prestation {
  slug: string;
  title: string;
  tag: string;
  category: PrestationCategory; // seo, ads, other
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;

  // Section contenu principale
  contentSection?: ContentSectionData;

  // Section Enjeux
  enjeux?: EnjeuxData;

  // Section "Pourquoi choisir Slashr"
  whyChooseUs?: {
    title: string;
    subtitle: string;
    description: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };

  // Section "Cette prestation est faite pour vous si..."
  forYou?: string[];
  notForYou?: string[];

  // Méthodologie
  methodology?: MethodologyStep[];

  // Avantages
  benefits?: Benefit[];

  // Points de vigilance
  vigilancePoints?: VigilancePoint[];

  // Comparaison avec/sans agence
  comparison?: {
    title: string;
    without: string[];
    with: string[];
  };

  // Engagements
  engagements?: Engagement[];

  // FAQ
  faqs?: FAQ[];

  // Autres expertises
  otherExpertises?: OtherExpertise[];

  // Pricing
  pricing?: {
    tjm: string;
    description: string;
  };

  // Contenu exclusif GEO (uniquement pour la prestation agence-geo)
  geoExclusiveContent?: GEOExclusiveContent;
}

// Données enrichies des prestations
export const prestationsData: Prestation[] = [
  {
    slug: 'prestashop',
    title: 'Agence SEO Prestashop',
    tag: 'Prestashop',
    category: 'seo',
    heroDescription: 'Vous avez une boutique en ligne sous Prestashop et cherchez à renforcer sa présence en ligne ? Notre agence SEO spécialisée dans Prestashop est la réponse à vos besoins. Découvrez notre méthode SLASHR.',
    metaTitle: 'Agence SEO Prestashop | Expert Référencement Naturel',
    metaDescription: 'Agence SEO spécialisée Prestashop. Optimisez votre boutique e-commerce pour les moteurs de recherche avec notre expertise. Méthode SLASHR, résultats mesurables.',
    contentSection: {
      tag: 'Prestashop',
      title: 'Prestashop : Le bon choix E-commerce',
      content: "Lorsqu'il s'agit de choisir une plateforme pour votre boutique en ligne, il y a de nombreux facteurs à considérer. L'un des plus importants est la capacité de la plateforme à être optimisée pour les moteurs de recherche. PrestaShop se distingue à cet égard, offrant une multitude de fonctionnalités qui en font une solution de choix pour le référencement e-commerce.",
      bulletPoints: [
        "Architecture SEO-friendly : Dès le départ, PrestaShop a été conçu avec le SEO à l'esprit. Sa structure permet une indexation facile par les moteurs de recherche.",
        "Gestion des balises méta : La plateforme offre une gestion simplifiée des balises méta, vous permettant d'ajouter des titres, des descriptions et d'autres méta-informations essentielles.",
        "Extensions et modules dédiés : La communauté PrestaShop a développé une multitude d'extensions spécifiquement conçues pour améliorer le SEO.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Experts en référencement naturel',
      intro: "Chez Slashr, agence de référencement naturel basée à Lille, tous nos consultants sont polyvalents et experts de tous les aspects du référencement naturel. Que ce soit développer sa visibilité ou faire connaître sa boutique, Slashr peut vous accompagner peu importe votre objectif.",
      expertiseLinks: [
        {
          text: 'Développer sa visibilité grâce à une',
          highlight: 'agence SEO local',
          href: '/seo/prestations/local',
        },
        {
          text: 'Faire connaître sa boutique grâce à une',
          highlight: 'agence SEO e-commerce',
          href: '/seo/prestations/ecommerce',
        },
        {
          text: 'Accompagnement SEO à la',
          highlight: 'refonte de sites web / migration SEO',
          href: '/seo/prestations/refonte-migration',
        },
        {
          text: 'Consulter nos',
          highlight: 'cas clients',
          href: '/cas-clients',
        },
        {
          text: 'Informations sur nos',
          highlight: 'tarifs et devis SEO',
          href: '/prestations/devis',
        },
      ],
      ctaText: 'Demander un devis',
      ctaHref: '/prestations/devis',
    },
    whyChooseUs: {
      title: 'Ne rien laisser au hasard',
      subtitle: 'Opter pour nous, agence SEO experte Prestashop',
      description: "Chaque site web aspire à une visibilité optimale pour se distinguer. Pour les boutiques Prestashop, le référencement naturel est le levier principal pour rendre vos produits accessibles aux internautes. SLASHR, grâce à sa spécialisation en SEO Prestashop, maîtrise les subtilités de cette plateforme.",
      points: [
        {
          title: 'Expertise garantie',
          description: "Avec Slashr, vous profitez des conseils d'experts familiers avec Prestashop, prêts à vous orienter vers les solutions les plus adaptées.",
        },
        {
          title: 'Efficacité maximisée',
          description: "Le SEO est notre métier. Confiez-nous cette mission et concentrez-vous sur votre activité principale, tout en bénéficiant de notre savoir-faire.",
        },
        {
          title: 'Focus sur le ROI',
          description: "Investir dans notre prestation SEO, c'est maximiser ses chances d'être visible, de générer plus de trafic qualifié et de CA.",
        },
      ],
    },
    forYou: [
      "Vous disposez d'un site Prestashop sous-performant",
      "Vous souhaitez générer du trafic, de la notoriété, du CA ou des leads",
      "Vous souhaitez prendre un avantage concurrentiel en devenant plus visible que vos concurrents",
    ],
    notForYou: [
      "Vous exigez des résultats en quelques mois",
      "Vous n'envisagez pas d'attirer plus d'internautes via les moteurs de recherche",
      "Vous n'avez pas la volonté d'investir de manière durable",
    ],
    methodology: [
      {
        number: 1,
        title: 'Prise des besoins',
        description: 'Généralement, nous avons déjà un cahier des charges SEO sur lequel se baser pour entamer des analyses exhaustives et poussées.',
      },
      {
        number: 2,
        title: 'Crawl & analyse',
        description: 'Nous analysons votre environnement préprod ou prod, par le biais de vérifications manuelles et de nos outils. Nous priorisons chaque critère problématique pour arbitrer facilement les prises de décisions.',
      },
      {
        number: 3,
        title: 'Restitution des résultats',
        description: "Nous envoyons et restituons nos recommandations à votre équipe technique (interne ou externe) et échangeons avec elle pour éliminer les critères techniques.",
      },
      {
        number: 4,
        title: 'Contre-recettage',
        description: "L'équipe technique a pris en compte nos retours et les a mis en place. Nous allons donc contre-recetter à multiples reprises jusqu'à ce que tous les critères techniques aient été implémentés.",
      },
      {
        number: 5,
        title: 'Validation "go"',
        description: "Lorsque nous considérons que les correctifs sur la préprod ou la prod sont effectuées, nous donnons notre validation pour achever la prestation.",
      },
    ],
    benefits: [
      {
        title: 'Approche personnalisée pour votre boutique',
        description: 'Chaque site Prestashop est unique. Nous adaptons notre stratégie SEO à votre secteur, votre catalogue et vos objectifs business.',
        highlight: 'personnalisée',
        icon: 'user',
        size: 'large',
      },
      {
        title: 'Expertise CMS Prestashop',
        description: 'Maîtrise complète des spécificités techniques et modules SEO de la plateforme.',
        highlight: 'Prestashop',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Bonnes pratiques Google',
        description: 'Respect strict des guidelines pour une croissance durable et sans risque de pénalité.',
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Suivi & gestion de projet',
        description: 'Reporting régulier et coordination avec vos équipes techniques internes ou externes.',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Résultats mesurables',
        description: 'KPIs clairs : trafic organique, positions, conversions et chiffre d\'affaires généré.',
        highlight: 'mesurables',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Investissement rentable sur le long terme',
        description: 'Le SEO construit un actif digital durable. Contrairement aux Ads, le trafic organique continue sans budget publicitaire.',
        highlight: 'long terme',
        icon: 'rocket',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Optimisation des catégories',
        description: "Prestashop étant un CMS e-commerce, les spécificités de l'e-commerce s'appliquent. Les pages catégories sont généralement les pages qui attirent le plus de trafic sur une boutique en ligne. Pour les optimiser, à part la balise title, on ajoute souvent un texte descriptif de la catégorie. Il n'y a cependant pas nativement d'endroit pour placer un long texte descriptif, il faudra passer par un plugin ou un thème personnalisé qui comprend cette feature.",
      },
      {
        title: 'Optimisation des performances web',
        description: "Les sites PrestaShop sont souvent assez lents et de ce fait, ne passent souvent pas les Core Web Vitals. Cela est dû à deux éléments : les modules et le thème. On est souvent très tenté d'accumuler les modules pour personnaliser au maximum notre Prestashop : c'est une mauvaise idée, l'accumulation de plugins fait grandement ralentir le site. Concernant le thème, il est assez rare d'en trouver qui sont à la fois bon en UX, en SEO et en performance web, cela nécessite souvent du développement personnalisé.",
      },
      {
        title: 'Gestion des URLs dynamiques et optimisation des liens canoniques',
        description: "PrestaShop génère des URLs dynamiques qui peuvent poser des problèmes de duplication de contenu. L'optimisation des liens canoniques est essentielle pour éviter cette duplication et aider les moteurs de recherche à comprendre quelle version de la page indexer. Sans une gestion appropriée, cela peut entraîner une dilution de l'autorité de la page et des pertes de classement dans les SERP.",
      },
    ],
    comparison: {
      title: "Comprendre l'intérêt d'une agence SEO Prestashop",
      without: [
        'Votre site reste invisible aux yeux de vos prospects',
        "Vous perdrez du temps, de l'énergie au quotidien",
        'Vous réduisez à néant vos chances de croître et vous perdez du terrain face à la concurrence',
      ],
      with: [
        'Vous générez du trafic, de la notoriété et du CA plus rapidement',
        "Vous pouvez passer votre temps et votre énergie sur d'autres tâches capitales à votre activité",
        'Vous maîtrisez mieux votre mix acquisition, impactant directement la croissance de votre entreprise',
      ],
    },
    engagements: [
      {
        title: 'Performance',
        description: 'Nous faisons notre maximum pour réaliser vos objectifs. Nous restons 100% focus-SEO pour cette raison.',
      },
      {
        title: 'Confiance',
        description: 'Nous travaillons pour gagner votre confiance et ainsi développer une relation de confiance & long terme ensemble.',
      },
      {
        title: 'Expérience',
        description: 'Nous travaillons avec beaucoup de clients sur Prestashop et nous avons même nos propres sites Prestashop qui nous permettent de tester et de rester à jour sur les algorithmes de Google.',
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce qu'une agence SEO Prestashop ?",
        answer: "Une agence SEO Prestashop est une agence SEO spécialisée dans l'optimisation du CMS Prestashop.",
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats suite à des modifications SEO sur Prestashop ?',
        answer: "Le fait d'être sur Prestashop ne change pas le temps nécessaire pour avoir des résultats en SEO, qui est généralement de 3 à 6 mois.",
      },
      {
        question: 'Quels sont les meilleurs modules SEO sur Prestashop ?',
        answer: `Les meilleurs modules SEO sur Prestashop sont :
• Advanced Search 5 : pour optimiser votre navigation à facette
• Prestablog : pour la gestion de votre blog sur Prestashop
• Redirection d'URL, Gérer 301, 302, 303, et 404 URL : Pour gérer les 404 et les redirections facilement
• Produit+Boutique Avis, Points fidélité, Google Snippets : Pour générer des rich snippets sur vos différentes pages`,
      },
      {
        question: 'Quels sont vos tarifs ?',
        answer: "Nous fonctionnons la plupart du temps avec un TJM (taux journalier moyen). Notre TJM dépend de la taille du projet, il est nécessaire de nous contacter pour que l'on puisse l'ajuster à vos besoins. Pour vous donner un ordre d'idée, le TJM d'une agence est souvent entre 600 et 800€ par jour. De même, le nombre de jours nécessaire dépendra de votre projet.",
      },
      {
        question: 'Intégrez-vous vos recommandations vous-même ?',
        answer: "Nous pouvons intégrer nos recommandations sur le contenu nous-même, nous ne pouvons en revanche pas intégrer les recommandations techniques qui nécessitent l'expertise d'un développeur.",
      },
      {
        question: 'Quels sont les avantages de Prestashop sur les autres CMS ?',
        answer: `Prestashop est un CMS très populaire en France (logique, c'est une entreprise française). Sa principale force est sa communauté, voici quelques chiffres :
• Plus de 300 000 sites e-commerce utilisent PrestaShop à travers le monde
• Prestashop est dans 60 langues et dans 200 pays
• 500+ fonctionnalités et 5 000+ modules et thèmes sont disponibles
• Sa communauté dépasse le million de membres, parfait pour répondre à vos questions / problématiques sur des forums par exemple.`,
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'Shopify', href: '/seo/prestations/shopify' },
      { name: 'WooCommerce', href: '/seo/prestations/woocommerce' },
      { name: 'Magento', href: '/seo/prestations/magento' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarification selon la complexité du projet',
    },
  },
  {
    slug: 'shopify',
    title: 'Agence SEO Shopify',
    tag: 'Shopify',
    category: 'seo',
    heroDescription: "Votre boutique Shopify mérite une visibilité optimale. Notre expertise SEO Shopify vous permet de maximiser votre potentiel sur les moteurs de recherche et d'augmenter vos ventes.",
    metaTitle: 'Agence SEO Shopify | Expert Référencement Shopify',
    metaDescription: 'Agence SEO experte Shopify. Optimisez votre boutique Shopify pour Google. +1.7M de marchands font confiance à Shopify, démarquez-vous avec notre expertise SEO.',
    contentSection: {
      tag: 'Shopify',
      title: 'Shopify : La plateforme e-commerce leader',
      content: "Shopify propulse plus de 1,7 million de marchands générant 319 milliards de dollars de ventes. Cette plateforme SaaS offre une solution clé en main pour le e-commerce, mais nécessite une expertise spécifique pour exploiter tout son potentiel SEO.",
      bulletPoints: [
        "Solution SaaS tout-en-un : Hébergement, sécurité et mises à jour gérés automatiquement, vous permettant de vous concentrer sur votre business.",
        "Écosystème d'apps riche : Des milliers d'applications disponibles pour étendre les fonctionnalités SEO natives.",
        "Thèmes optimisés mobile : Les thèmes Shopify sont responsive par défaut, un critère essentiel pour le SEO mobile-first.",
      ],
    },
    whyChooseUs: {
      title: 'Maîtriser les spécificités Shopify',
      subtitle: 'Une expertise SEO adaptée à la plateforme',
      description: "Shopify a ses propres contraintes techniques : structure d'URL imposée, limitations sur le robots.txt, gestion des collections... Notre expertise vous permet de contourner ces limites et d'optimiser efficacement votre boutique.",
      points: [
        {
          title: 'Expertise Liquid',
          description: "Nous maîtrisons le langage Liquid pour optimiser vos templates et implémenter les bonnes pratiques SEO directement dans le code.",
        },
        {
          title: 'Contournement des limites',
          description: "Shopify a des limitations natives. Nous connaissons les solutions pour les contourner : redirections, canonical, données structurées.",
        },
        {
          title: 'Sélection des bonnes apps',
          description: "Parmi les milliers d'apps disponibles, nous vous guidons vers celles qui amélioreront vraiment votre SEO sans impacter vos performances.",
        },
      ],
    },
    forYou: [
      "Vous avez une boutique Shopify qui ne génère pas assez de trafic organique",
      "Vous souhaitez réduire votre dépendance aux publicités payantes",
      "Vous voulez exploiter le plein potentiel SEO de Shopify",
    ],
    notForYou: [
      "Vous cherchez des résultats immédiats sans investissement long terme",
      "Vous n'êtes pas prêt à optimiser vos contenus produits",
      "Vous préférez rester sur une stratégie 100% paid",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit Shopify',
        description: "Analyse complète de votre boutique : structure, thème, apps installées, configuration SEO native, et identification des opportunités.",
      },
      {
        number: 2,
        title: 'Optimisation technique',
        description: "Modifications Liquid, configuration des redirections, optimisation des collections et produits, mise en place des données structurées.",
      },
      {
        number: 3,
        title: 'Stratégie de contenu',
        description: "Optimisation des fiches produits, création de pages de collection enrichies, stratégie de blog intégrée à Shopify.",
      },
      {
        number: 4,
        title: 'Suivi & itération',
        description: "Monitoring des positions, analyse du trafic, ajustements continus pour maximiser les performances SEO.",
      },
    ],
    benefits: [
      {
        title: 'Expertise Shopify native et approfondie',
        description: 'Connaissance complète de l\'écosystème Shopify : limitations techniques, contournements possibles et bonnes pratiques SEO spécifiques.',
        highlight: 'Shopify native',
        icon: 'code',
        size: 'large',
      },
      {
        title: 'Optimisation Liquid',
        description: 'Modifications du code Liquid pour implémenter les optimisations SEO avancées.',
        highlight: 'Liquid',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Apps SEO sélectionnées',
        description: 'Recommandation des applications vraiment utiles, sans alourdir inutilement votre boutique.',
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Performance garantie',
        description: 'Optimisation Core Web Vitals pour une expérience utilisateur rapide et un meilleur ranking.',
        highlight: 'Performance',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Support réactif',
        description: 'Équipe disponible pour répondre à vos questions et ajuster la stratégie.',
        icon: 'user',
        size: 'medium',
      },
      {
        title: 'Vision long terme et ROI durable',
        description: 'Construction d\'un actif SEO qui génère du trafic qualifié et des ventes en continu, réduisant votre dépendance aux Ads.',
        highlight: 'ROI durable',
        icon: 'rocket',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Structure URL imposée',
        description: "Shopify impose une structure d'URL avec /collections/ et /products/. Il est impossible de la modifier, mais on peut optimiser les handles et le maillage interne pour compenser.",
      },
      {
        title: 'Duplicate content des variantes',
        description: "Les variantes produits créent des URLs avec paramètres (?variant=) qui peuvent générer du contenu dupliqué. Une gestion appropriée des canonical est essentielle.",
      },
      {
        title: 'Limitations du blog',
        description: "Le blog Shopify est basique comparé à WordPress. Pour une stratégie de contenu ambitieuse, il faut optimiser les templates et parfois envisager des solutions complémentaires.",
      },
    ],
    comparison: {
      title: "L'avantage d'un expert SEO Shopify",
      without: [
        "Vos concurrents Shopify vous dépassent dans les résultats Google",
        "Vous dépensez plus en publicité pour compenser le manque de trafic organique",
        "Les limitations techniques de Shopify freinent votre croissance",
      ],
      with: [
        "Vous exploitez le plein potentiel SEO de Shopify malgré ses contraintes",
        "Votre coût d'acquisition client diminue grâce au trafic organique",
        "Vous construisez un actif SEO durable qui génère des ventes en continu",
      ],
    },
    engagements: [
      {
        title: 'Transparence',
        description: "Nous vous expliquons clairement ce qui est possible ou non sur Shopify, sans fausses promesses.",
      },
      {
        title: 'Expertise prouvée',
        description: "Nous gérons des boutiques Shopify de toutes tailles et connaissons la plateforme en profondeur.",
      },
      {
        title: 'ROI mesurable',
        description: "Nous suivons les KPIs qui comptent : trafic organique, positions, et surtout conversions et CA généré.",
      },
    ],
    faqs: [
      {
        question: 'Shopify est-il bon pour le SEO ?',
        answer: "Shopify offre de bonnes bases SEO (SSL, mobile-friendly, vitesse) mais a des limitations (structure URL, robots.txt). Avec la bonne expertise, ces limites sont largement contournables.",
      },
      {
        question: 'Quelles apps SEO recommandez-vous sur Shopify ?',
        answer: "Cela dépend de vos besoins spécifiques. Nous analysons votre situation avant de recommander des apps, pour éviter d'alourdir inutilement votre boutique.",
      },
      {
        question: 'Peut-on modifier le robots.txt sur Shopify ?',
        answer: "Depuis 2021, Shopify permet de personnaliser le robots.txt via le fichier robots.txt.liquid. Nous pouvons optimiser ce fichier pour votre stratégie de crawl.",
      },
      {
        question: 'Shopify Plus offre-t-il des avantages SEO ?',
        answer: "Shopify Plus offre plus de flexibilité technique (checkout personnalisable, scripts) mais les fondamentaux SEO restent identiques à Shopify standard.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'PrestaShop', href: '/seo/prestations/prestashop' },
      { name: 'WooCommerce', href: '/seo/prestations/woocommerce' },
      { name: 'Magento', href: '/seo/prestations/magento' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Expertise Shopify et Shopify Plus',
    },
  },
  {
    slug: 'woocommerce',
    title: 'Agence SEO WooCommerce',
    tag: 'WooCommerce',
    category: 'seo',
    heroDescription: "WooCommerce propulse plus de 5 millions de boutiques et détient 40% du marché e-commerce mondial. Exploitez la puissance de WordPress et WooCommerce pour votre référencement.",
    metaTitle: 'Agence SEO WooCommerce | Expert WordPress E-commerce',
    metaDescription: 'Agence SEO spécialisée WooCommerce. Optimisez votre boutique WordPress pour Google. 40% du marché e-commerce mondial, maximisez votre potentiel SEO.',
    contentSection: {
      tag: 'WooCommerce',
      title: 'WooCommerce : La flexibilité WordPress pour le e-commerce',
      content: "WooCommerce combine la puissance de WordPress avec des fonctionnalités e-commerce complètes. Cette solution open-source offre une flexibilité inégalée pour le SEO, avec un écosystème de plugins riche et une communauté massive.",
      bulletPoints: [
        "Flexibilité totale : Contrairement aux solutions SaaS, WooCommerce permet une personnalisation complète de l'architecture et des URLs.",
        "Écosystème SEO riche : Accès aux meilleurs plugins SEO (Yoast, RankMath) et e-commerce du marché WordPress.",
        "Propriété des données : Vous êtes propriétaire de votre code et de vos données, avec un contrôle total sur l'hébergement.",
      ],
    },
    whyChooseUs: {
      title: 'Expertise WordPress & WooCommerce',
      subtitle: 'Le meilleur des deux mondes pour votre SEO',
      description: "WooCommerce hérite de tous les avantages SEO de WordPress tout en ajoutant des fonctionnalités e-commerce. Notre double expertise WordPress/WooCommerce nous permet d'optimiser chaque aspect de votre boutique.",
      points: [
        {
          title: 'Maîtrise de l\'écosystème',
          description: "Nous connaissons les meilleurs plugins, thèmes et configurations pour un SEO WooCommerce optimal.",
        },
        {
          title: 'Performance technique',
          description: "WooCommerce peut être lent si mal configuré. Nous optimisons la performance pour les Core Web Vitals.",
        },
        {
          title: 'Architecture SEO',
          description: "Structure des catégories, attributs, variations : nous optimisons l'architecture pour maximiser votre visibilité.",
        },
      ],
    },
    forYou: [
      "Vous avez une boutique WooCommerce qui ne performe pas en SEO",
      "Vous souhaitez migrer vers WooCommerce pour plus de flexibilité",
      "Vous voulez exploiter le potentiel SEO de WordPress pour votre e-commerce",
    ],
    notForYou: [
      "Vous cherchez une solution sans maintenance technique",
      "Vous n'avez pas de ressources pour gérer WordPress",
      "Vous préférez une solution SaaS clé en main",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit WooCommerce',
        description: "Analyse de votre installation : thème, plugins, configuration, performance et opportunités SEO.",
      },
      {
        number: 2,
        title: 'Optimisation technique',
        description: "Configuration des plugins SEO, optimisation de la performance, structure des URL et données structurées.",
      },
      {
        number: 3,
        title: 'Architecture & contenu',
        description: "Optimisation des catégories, fiches produits, attributs et stratégie de contenu intégrée.",
      },
      {
        number: 4,
        title: 'Maintenance & croissance',
        description: "Suivi des performances, mises à jour sécurisées et optimisation continue.",
      },
    ],
    benefits: [
      {
        title: 'Double expertise WordPress & WooCommerce',
        description: 'Maîtrise complète de l\'écosystème WordPress appliquée au e-commerce. Nous connaissons les meilleures pratiques des deux mondes.',
        highlight: 'WordPress & WooCommerce',
        icon: 'code',
        size: 'large',
      },
      {
        title: 'Plugins optimisés',
        description: 'Configuration experte de Yoast, RankMath et autres extensions SEO essentielles.',
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Performance web',
        description: 'Optimisation vitesse et Core Web Vitals pour un WooCommerce rapide même avec un gros catalogue.',
        highlight: 'Performance',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Données structurées',
        description: 'Schema.org produits, avis et organisation pour des rich snippets attractifs dans les SERP.',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Résultats mesurables',
        description: 'Suivi précis des KPIs SEO : positions, trafic organique, conversions et CA généré.',
        highlight: 'mesurables',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Accompagnement continu et maintenance',
        description: 'WordPress nécessite des mises à jour régulières. Nous assurons un suivi technique et SEO sur le long terme.',
        highlight: 'continu',
        icon: 'user',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Performance et plugins',
        description: "L'accumulation de plugins peut considérablement ralentir WooCommerce. Chaque extension doit être évaluée pour son impact sur les performances et la compatibilité SEO.",
      },
      {
        title: 'Gestion des variations produits',
        description: "Les variations peuvent créer des problèmes de contenu dupliqué et d'indexation. Une configuration appropriée des canonical et de l'indexation est essentielle.",
      },
      {
        title: 'Sécurité et mises à jour',
        description: "WordPress et WooCommerce nécessitent des mises à jour régulières. Une maintenance négligée peut impacter la sécurité et indirectement le SEO.",
      },
    ],
    comparison: {
      title: "Pourquoi choisir un expert SEO WooCommerce",
      without: [
        "Votre boutique est lente et pénalisée par Google",
        "Vous n'exploitez pas la flexibilité de WordPress pour le SEO",
        "Vos concurrents sur d'autres CMS vous dépassent",
      ],
      with: [
        "Vous profitez de la puissance SEO de WordPress pour le e-commerce",
        "Votre boutique est rapide et optimisée pour les Core Web Vitals",
        "Vous avez une architecture SEO sur-mesure impossible sur les SaaS",
      ],
    },
    engagements: [
      {
        title: 'Expertise technique',
        description: "Notre équipe maîtrise WordPress et WooCommerce en profondeur, du code aux plugins.",
      },
      {
        title: 'Approche globale',
        description: "Nous optimisons le SEO tout en veillant à la performance, la sécurité et l'UX.",
      },
      {
        title: 'Accompagnement durable',
        description: "Le SEO WooCommerce nécessite une maintenance continue que nous assurons sur le long terme.",
      },
    ],
    faqs: [
      {
        question: 'WooCommerce est-il meilleur que Shopify pour le SEO ?',
        answer: "WooCommerce offre plus de flexibilité technique (URLs personnalisables, accès complet au code) mais demande plus de maintenance. Le meilleur choix dépend de vos ressources et objectifs.",
      },
      {
        question: 'Quel plugin SEO pour WooCommerce ?',
        answer: "Yoast SEO et RankMath sont les plus populaires. Le choix dépend de vos besoins spécifiques. Nous configurons et optimisons le plugin adapté à votre situation.",
      },
      {
        question: 'Comment améliorer la vitesse de WooCommerce ?',
        answer: "Optimisation des images, cache, CDN, hébergement adapté, limitation des plugins... Nous auditons et optimisons chaque aspect impactant la performance.",
      },
      {
        question: 'Gérez-vous les migrations vers WooCommerce ?',
        answer: "Oui, nous accompagnons les migrations SEO depuis d'autres plateformes vers WooCommerce, en préservant votre trafic et vos positions.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'PrestaShop', href: '/seo/prestations/prestashop' },
      { name: 'Shopify', href: '/seo/prestations/shopify' },
      { name: 'Magento', href: '/seo/prestations/magento' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Expertise WordPress et WooCommerce',
    },
  },
  {
    slug: 'magento',
    title: 'Agence SEO Magento',
    tag: 'Magento',
    category: 'seo',
    heroDescription: "Magento (Adobe Commerce) est la solution enterprise pour le e-commerce à grande échelle. Notre expertise vous permet d'exploiter sa puissance technique pour un SEO performant.",
    metaTitle: 'Agence SEO Magento | Expert Adobe Commerce',
    metaDescription: 'Agence SEO spécialisée Magento et Adobe Commerce. Optimisez votre plateforme e-commerce enterprise pour maximiser votre visibilité sur Google.',
    contentSection: {
      tag: 'Magento',
      title: 'Magento : La puissance enterprise pour le e-commerce',
      content: "Magento (désormais Adobe Commerce) est le 3ème CMS e-commerce mondial, choisi par les entreprises pour sa puissance et sa scalabilité. Cette plateforme offre des possibilités SEO avancées mais nécessite une expertise technique pointue.",
      bulletPoints: [
        "Architecture scalable : Conçu pour gérer des catalogues de millions de produits et un trafic intense.",
        "Fonctionnalités SEO natives : Gestion avancée des URLs, meta, canonical, hreflang et données structurées.",
        "Multi-store & multi-langue : Gestion native de plusieurs boutiques et langues, idéal pour l'international.",
      ],
    },
    whyChooseUs: {
      title: 'Expertise Magento enterprise',
      subtitle: 'SEO pour les e-commerces exigeants',
      description: "Magento est une plateforme complexe qui demande une expertise technique avancée. Notre connaissance approfondie de son architecture nous permet d'optimiser efficacement même les plus gros catalogues.",
      points: [
        {
          title: 'Expertise technique',
          description: "Nous maîtrisons l'architecture Magento, ses modules et sa configuration pour un SEO optimal.",
        },
        {
          title: 'Gestion des gros catalogues',
          description: "Stratégies d'indexation, pagination, navigation à facettes : nous optimisons les catalogues volumineux.",
        },
        {
          title: 'Performance Magento',
          description: "Optimisation Varnish, Full Page Cache, et Core Web Vitals pour des performances au top.",
        },
      ],
    },
    forYou: [
      "Vous avez un catalogue produits volumineux sur Magento",
      "Vous souhaitez optimiser votre e-commerce international multi-store",
      "Vous cherchez une expertise SEO technique avancée",
    ],
    notForYou: [
      "Vous avez un petit catalogue et cherchez une solution simple",
      "Vous n'avez pas les ressources pour maintenir Magento",
      "Vous préférez une solution SaaS sans complexité technique",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit Magento',
        description: "Analyse approfondie de la configuration, des extensions, de la performance et de l'architecture SEO.",
      },
      {
        number: 2,
        title: 'Optimisation technique',
        description: "Configuration SEO, cache, indexation, gestion des URLs et données structurées.",
      },
      {
        number: 3,
        title: 'Stratégie catalogue',
        description: "Optimisation des catégories, layered navigation, pagination et fiches produits.",
      },
      {
        number: 4,
        title: 'Performance & monitoring',
        description: "Optimisation continue des performances et suivi des KPIs SEO.",
      },
    ],
    benefits: [
      {
        title: 'Expertise Magento & Adobe Commerce',
        description: 'Connaissance approfondie de l\'architecture Magento, ses modules et sa configuration pour un SEO enterprise optimal.',
        highlight: 'Magento',
        icon: 'code',
        size: 'large',
      },
      {
        title: 'Gestion des gros catalogues',
        description: 'Stratégies d\'indexation et d\'optimisation adaptées aux catalogues de plusieurs millions de produits.',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Performance & cache',
        description: 'Optimisation Varnish, Full Page Cache et Redis pour des performances au top malgré la complexité.',
        highlight: 'Performance',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Multi-store international',
        description: 'Gestion native de plusieurs boutiques et langues, idéal pour le déploiement international.',
        highlight: 'Multi-store',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'SEO technique avancé',
        description: 'Maîtrise des aspects techniques complexes : layered navigation, canonical, hreflang.',
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Résultats durables et scalables',
        description: 'Une stratégie SEO qui accompagne la croissance de votre e-commerce enterprise sur le long terme.',
        highlight: 'durables',
        icon: 'chart',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Performance et cache',
        description: "Magento peut être très lent sans configuration de cache appropriée (Varnish, Full Page Cache, Redis). L'optimisation des performances est cruciale pour le SEO.",
      },
      {
        title: 'Navigation à facettes',
        description: "La layered navigation génère des milliers d'URLs filtrées. Sans gestion appropriée (robots.txt, noindex, canonical), cela peut diluer le crawl budget.",
      },
      {
        title: 'Complexité des mises à jour',
        description: "Les mises à jour Magento peuvent impacter le SEO. Chaque upgrade doit être testé en préprod pour vérifier l'impact sur l'indexation et les performances.",
      },
    ],
    comparison: {
      title: "L'avantage d'un expert SEO Magento",
      without: [
        "La complexité technique de Magento freine votre SEO",
        "Votre site est lent et mal indexé par Google",
        "Vous n'exploitez pas les fonctionnalités SEO avancées de Magento",
      ],
      with: [
        "Vous exploitez toute la puissance SEO de Magento enterprise",
        "Votre site est performant même avec un gros catalogue",
        "Votre stratégie multi-store international est optimisée",
      ],
    },
    engagements: [
      {
        title: 'Expertise enterprise',
        description: "Nous travaillons avec des e-commerces Magento de grande envergure et connaissons leurs enjeux.",
      },
      {
        title: 'Approche technique',
        description: "Notre expertise technique nous permet de résoudre les problématiques SEO complexes de Magento.",
      },
      {
        title: 'Collaboration équipes',
        description: "Nous travaillons main dans la main avec vos équipes techniques pour implémenter les optimisations.",
      },
    ],
    faqs: [
      {
        question: 'Magento 2 est-il meilleur pour le SEO que Magento 1 ?',
        answer: "Oui, Magento 2 offre de meilleures performances natives, une gestion SEO améliorée et le support des PWA. Si vous êtes encore sur M1, la migration est fortement recommandée.",
      },
      {
        question: 'Comment gérer le crawl budget sur un gros catalogue Magento ?',
        answer: "Optimisation du robots.txt, gestion des facettes, pagination, canonical et sitemaps XML segmentés. Nous auditons et optimisons chaque aspect.",
      },
      {
        question: 'Adobe Commerce vs Magento Open Source pour le SEO ?',
        answer: "Les fonctionnalités SEO sont similaires. Adobe Commerce offre des outils supplémentaires (staging, B2B) mais le core SEO est identique.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'PrestaShop', href: '/seo/prestations/prestashop' },
      { name: 'Shopify', href: '/seo/prestations/shopify' },
      { name: 'WooCommerce', href: '/seo/prestations/woocommerce' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Expertise Magento 2 et Adobe Commerce',
    },
  },
  {
    slug: 'ecommerce',
    title: 'Agence SEO E‑commerce',
    tag: 'E‑commerce',
    category: 'seo',
    heroDescription: "93% des expériences en ligne commencent par un moteur de recherche. Maximisez les ventes de votre boutique en ligne grâce à une stratégie SEO e-commerce adaptée à vos enjeux.",
    metaTitle: 'Agence SEO E-commerce à Lille',
    metaDescription: 'Agence SEO e-commerce à Lille. Boostez les ventes de votre boutique en ligne avec un référencement adapté. Optimisation fiches produits, catégories et architecture.',
    contentSection: {
      tag: 'E‑commerce',
      title: 'Transformez chaque recherche en opportunité de vente',
      content: "Le SEO e-commerce a ses spécificités : gestion de catalogues volumineux, fiches produits optimisées, navigation à facettes, saisonnalité... Notre expertise vous permet de transformer le search en canal d'acquisition rentable et durable.",
      bulletPoints: [
        "93% des expériences en ligne commencent par un moteur de recherche.",
        "44% des acheteurs en ligne débutent leur parcours par une recherche Google.",
        "Le SEO e-commerce génère un trafic qualifié avec une intention d'achat.",
      ],
    },
    whyChooseUs: {
      title: 'Expertise SEO e-commerce',
      subtitle: 'Des résultats mesurables sur vos ventes',
      description: "Nous accompagnons des e-commerces de toutes tailles, du startup aux leaders de leur marché. Notre approche data-driven se concentre sur les métriques qui comptent : trafic qualifié, conversions et chiffre d'affaires.",
      points: [
        {
          title: 'Expertise catalogue',
          description: "Optimisation de catalogues de quelques dizaines à plusieurs millions de produits.",
        },
        {
          title: 'Focus conversion',
          description: "Le trafic seul ne suffit pas. Nous optimisons pour attirer des visiteurs qui convertissent.",
        },
        {
          title: 'Multi-plateforme',
          description: "Shopify, WooCommerce, PrestaShop, Magento... Nous maîtrisons toutes les plateformes e-commerce.",
        },
      ],
    },
    forYou: [
      "Vous avez une boutique en ligne qui ne génère pas assez de trafic organique",
      "Vous souhaitez réduire votre dépendance aux publicités payantes",
      "Vous voulez développer un canal d'acquisition rentable sur le long terme",
    ],
    notForYou: [
      "Vous cherchez des résultats en moins de 3 mois",
      "Vous n'êtes pas prêt à investir dans l'optimisation de vos contenus",
      "Vous préférez une approche 100% paid sans vision long terme",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit e-commerce',
        description: "Analyse complète : technique, architecture catalogue, contenus produits, concurrence et opportunités.",
      },
      {
        number: 2,
        title: 'Stratégie SEO',
        description: "Définition des priorités, étude de mots-clés e-commerce, roadmap d'optimisation.",
      },
      {
        number: 3,
        title: 'Optimisation catalogue',
        description: "Travail sur les catégories, fiches produits, maillage interne et données structurées.",
      },
      {
        number: 4,
        title: 'Contenu & autorité',
        description: "Stratégie éditoriale e-commerce, guide d'achat, comparatifs et netlinking ciblé.",
      },
    ],
    benefits: [
      {
        title: 'Expertise catalogue e-commerce complète',
        description: 'Optimisation de catalogues de toutes tailles, des quelques produits aux millions de références. Catégories, fiches produits, filtres, tout est couvert.',
        highlight: 'catalogue',
        icon: 'clipboard',
        size: 'large',
      },
      {
        title: 'Toutes plateformes',
        description: 'Shopify, WooCommerce, PrestaShop, Magento... Nous maîtrisons tous les CMS e-commerce du marché.',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Focus ROI et conversions',
        description: 'Le trafic seul ne suffit pas. Nous optimisons pour attirer des visiteurs qui convertissent.',
        highlight: 'ROI',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Données structurées',
        description: 'Rich snippets produits, avis, prix pour des résultats attractifs dans les SERP.',
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Performance web',
        description: 'Core Web Vitals optimisés pour une expérience utilisateur rapide qui convertit.',
        highlight: 'Performance',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Croissance durable et rentable',
        description: 'Construisez un canal d\'acquisition SEO qui génère des ventes en continu et réduit votre dépendance aux publicités.',
        highlight: 'durable',
        icon: 'rocket',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Contenu dupliqué',
        description: "Les variations produits, filtres et tris génèrent du contenu dupliqué. Une gestion stricte des canonical et de l'indexation est essentielle.",
      },
      {
        title: 'Produits épuisés ou supprimés',
        description: "Les produits indisponibles doivent être gérés correctement (410, redirection) pour ne pas perdre de valeur SEO ni créer de mauvaise expérience.",
      },
      {
        title: 'Navigation à facettes',
        description: "Les filtres de recherche créent des milliers d'URLs. Sans stratégie de crawl budget, Google gaspille ses ressources sur des pages à faible valeur.",
      },
    ],
    comparison: {
      title: "L'impact du SEO sur votre e-commerce",
      without: [
        "Vous dépendez entièrement des publicités payantes pour votre trafic",
        "Votre coût d'acquisition client est élevé et imprévisible",
        "Vos concurrents captent le trafic organique que vous laissez",
      ],
      with: [
        "Vous diversifiez vos sources de trafic avec un canal organique rentable",
        "Votre CAC diminue grâce au trafic SEO récurrent",
        "Vous construisez un actif SEO qui génère des ventes en continu",
      ],
    },
    engagements: [
      {
        title: 'Résultats mesurables',
        description: "Nous suivons les KPIs qui comptent : trafic organique, positions sur mots-clés commerciaux, mais aussi conversions et CA.",
      },
      {
        title: 'Expertise multi-CMS',
        description: "Quelle que soit votre plateforme e-commerce, nous avons l'expertise pour l'optimiser.",
      },
      {
        title: 'Vision long terme',
        description: "Le SEO e-commerce est un investissement. Nous construisons une stratégie durable, pas des hacks court-termistes.",
      },
    ],
    faqs: [
      {
        question: 'Combien de temps pour voir des résultats en SEO e-commerce ?',
        answer: "Les premiers résultats apparaissent généralement entre 3 et 6 mois. La croissance s'accélère ensuite avec l'accumulation des optimisations.",
      },
      {
        question: 'Comment optimiser des milliers de fiches produits ?',
        answer: "Nous travaillons sur les templates et mettons en place des règles d'optimisation automatisées, complétées par un travail manuel sur les produits stratégiques.",
      },
      {
        question: 'Le SEO peut-il remplacer les Google Ads ?',
        answer: "Le SEO complète les Ads, il ne les remplace pas. L'idéal est un mix SEO/SEA où le SEO réduit progressivement la dépendance au paid.",
      },
      {
        question: 'Comment gérer la saisonnalité en SEO e-commerce ?',
        answer: "Anticipation des pics (Black Friday, Noël), conservation des pages saisonnières, et stratégie de contenu adaptée au calendrier commercial.",
      },
    ],
    otherExpertises: [
      { name: 'SEO Local', href: '/seo/prestations/local' },
      { name: 'SEO International', href: '/seo/prestations/international' },
      { name: 'Formation SEO', href: '/seo/prestations/formation' },
      { name: 'Agence GEO', href: '/seo/prestations/agence-geo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Accompagnement adapté à la taille de votre catalogue',
    },
  },
  {
    slug: 'local',
    title: 'Agence SEO Local',
    tag: 'Local',
    category: 'seo',
    heroDescription: "46% des recherches Google ont une intention locale. Dominez les résultats de recherche dans votre zone de chalandise et attirez les clients de proximité.",
    metaTitle: 'Agence SEO Local à Lille',
    metaDescription: 'Agence SEO local à Lille. Dominez les résultats locaux et Google Maps. Optimisation Google Business Profile, citations et avis clients.',
    contentSection: {
      tag: 'SEO Local',
      title: 'Le SEO Local : votre vitrine digitale de proximité',
      content: "Le SEO local est essentiel pour les entreprises avec une présence physique. Quand un prospect recherche vos services « près de moi » ou dans votre ville, vous devez apparaître en haut des résultats.",
      bulletPoints: [
        "46% des recherches Google ont une intention locale.",
        "97% des consommateurs utilisent le web pour trouver des entreprises locales.",
        "88% des recherches locales sur mobile mènent à une visite ou un appel sous 24h.",
      ],
    },
    whyChooseUs: {
      title: 'Maîtrisez votre visibilité locale',
      subtitle: 'Du Local Pack aux recherches géolocalisées',
      description: "Notre expertise SEO local couvre tous les aspects : Google Business Profile, citations NAP, avis clients, pages locales... Nous vous positionnons là où vos clients vous cherchent.",
      points: [
        {
          title: 'Google Business Profile',
          description: "Optimisation complète de votre fiche pour dominer le Local Pack et Google Maps.",
        },
        {
          title: 'Stratégie de citations',
          description: "Cohérence et diffusion de vos informations NAP sur les annuaires qui comptent.",
        },
        {
          title: 'Gestion des avis',
          description: "Stratégie d'acquisition et de réponse aux avis pour renforcer votre réputation locale.",
        },
      ],
    },
    forYou: [
      "Vous avez une ou plusieurs implantations physiques",
      "Vos clients vous recherchent localement (restaurant, commerce, service)",
      "Vous souhaitez apparaître dans le Local Pack Google",
    ],
    notForYou: [
      "Vous êtes 100% e-commerce sans présence physique",
      "Votre activité n'a pas de dimension géographique",
      "Vous ciblez uniquement un marché national ou international",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit local',
        description: "Analyse de votre présence locale actuelle, benchmark concurrentiel et identification des opportunités.",
      },
      {
        number: 2,
        title: 'Optimisation GBP',
        description: "Configuration optimale de Google Business Profile : catégories, attributs, photos, posts, Q&A.",
      },
      {
        number: 3,
        title: 'Citations & NAP',
        description: "Nettoyage des incohérences, diffusion sur les annuaires pertinents, cohérence NAP.",
      },
      {
        number: 4,
        title: 'Contenus locaux',
        description: "Création de pages géolocalisées, optimisation on-site pour les requêtes locales.",
      },
    ],
    benefits: [
      {
        title: 'Dominez le Local Pack Google',
        description: 'Apparaissez dans les 3 premiers résultats locaux, là où vos clients vous cherchent avec une intention d\'achat forte.',
        highlight: 'Local Pack',
        icon: 'target',
        size: 'large',
      },
      {
        title: 'Google Maps optimisé',
        description: 'Fiche Google Business Profile complète et optimisée pour générer appels et visites.',
        highlight: 'Google Maps',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Gestion des avis',
        description: 'Stratégie d\'acquisition d\'avis et réponses professionnelles pour renforcer votre e-réputation.',
        icon: 'user',
        size: 'medium',
      },
      {
        title: 'Citations NAP cohérentes',
        description: 'Nom, Adresse, Téléphone identiques partout pour maximiser la confiance de Google.',
        highlight: 'NAP',
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Multi-établissements',
        description: 'Gestion scalable de réseaux de plusieurs dizaines d\'établissements avec processus dédiés.',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Trafic en magasin qualifié',
        description: '88% des recherches locales sur mobile mènent à une visite ou un appel sous 24h. Captez ce trafic.',
        highlight: 'en magasin',
        icon: 'chart',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Cohérence NAP',
        description: "Nom, Adresse, Téléphone doivent être strictement identiques partout. La moindre incohérence peut impacter votre visibilité locale.",
      },
      {
        title: 'Faux avis',
        description: "L'achat ou la génération de faux avis est risquée. Google détecte ces pratiques et peut pénaliser votre fiche.",
      },
      {
        title: 'Pages locales dupliquées',
        description: "Pour les multi-établissements, chaque page locale doit avoir un contenu unique et des informations spécifiques.",
      },
    ],
    comparison: {
      title: "L'impact du SEO local sur votre business",
      without: [
        "Vos concurrents locaux captent les clients qui vous cherchent",
        "Votre fiche Google est incomplète ou mal optimisée",
        "Vous passez à côté de clients prêts à acheter près de chez eux",
      ],
      with: [
        "Vous apparaissez en haut du Local Pack pour vos services",
        "Votre fiche Google génère des appels et des visites",
        "Vous captez le trafic local à forte intention d'achat",
      ],
    },
    engagements: [
      {
        title: 'Expertise locale',
        description: "Nous maîtrisons tous les leviers du SEO local : GBP, citations, avis, contenu géolocalisé.",
      },
      {
        title: 'Multi-établissements',
        description: "Nous gérons des réseaux de plusieurs dizaines d'établissements avec des processus scalables.",
      },
      {
        title: 'Suivi précis',
        description: "Tracking des positions locales, des actions sur votre fiche et des conversions générées.",
      },
    ],
    faqs: [
      {
        question: 'Combien de temps pour voir des résultats en SEO local ?',
        answer: "Les premiers résultats peuvent apparaître en 1 à 3 mois selon la concurrence locale et l'état initial de votre présence.",
      },
      {
        question: 'Gérez-vous plusieurs établissements ?',
        answer: "Oui, nous avons l'expertise pour gérer des réseaux multi-établissements avec des processus adaptés à l'échelle.",
      },
      {
        question: 'Comment obtenir plus d\'avis Google ?',
        answer: "Nous mettons en place une stratégie d'acquisition d'avis : process post-achat, QR codes, formation des équipes, sans jamais acheter de faux avis.",
      },
      {
        question: 'Faut-il créer une page par ville ?',
        answer: "Pour les zones de chalandise larges, oui. Mais chaque page doit apporter une valeur unique, pas du contenu dupliqué avec juste le nom de la ville changé.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'SEO International', href: '/seo/prestations/international' },
      { name: 'Google Ads', href: '/ads/prestations/google-ads' },
      { name: 'Agence GEO', href: '/seo/prestations/agence-geo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Forfaits adaptés selon le nombre d\'établissements',
    },
  },
  {
    slug: 'international',
    title: 'Agence SEO International',
    tag: 'International',
    category: 'seo',
    heroDescription: "Développez votre présence SEO à l'international. Stratégie multilingue, hreflang et adaptation culturelle pour conquérir de nouveaux marchés.",
    metaTitle: 'Agence SEO International',
    metaDescription: "Agence SEO international. Développez votre présence à l'international avec une stratégie multilingue, hreflang et adaptation culturelle pour chaque marché.",
    contentSection: {
      tag: 'International',
      title: 'Conquérir les marchés internationaux par le SEO',
      content: "Le SEO international ne se résume pas à traduire vos contenus. C'est une stratégie complète qui prend en compte les spécificités techniques (hreflang, structure de domaine), culturelles et concurrentielles de chaque marché.",
      bulletPoints: [
        "Stratégie de domaine adaptée : ccTLD, sous-domaines ou répertoires selon vos objectifs.",
        "Implémentation hreflang correcte pour éviter les problèmes de contenu dupliqué.",
        "Localisation des contenus : adaptation culturelle, pas simple traduction.",
      ],
    },
    whyChooseUs: {
      title: 'Expertise SEO multilingue',
      subtitle: 'Chaque marché a ses spécificités',
      description: "Nous accompagnons des entreprises dans leur expansion internationale. Notre expertise couvre les aspects techniques, la stratégie de contenu localisé et le link building par pays.",
      points: [
        {
          title: 'Stratégie technique',
          description: "Choix de structure, implémentation hreflang, gestion du crawl budget multi-pays.",
        },
        {
          title: 'Localisation experte',
          description: "Adaptation culturelle des contenus, pas simple traduction mot à mot.",
        },
        {
          title: 'Link building local',
          description: "Acquisition de backlinks dans chaque pays cible pour développer l'autorité locale.",
        },
      ],
    },
    forYou: [
      "Vous souhaitez développer votre activité à l'international",
      "Vous avez déjà un site multilingue à optimiser",
      "Vous ciblez des marchés spécifiques (Europe, US, Asie...)",
    ],
    notForYou: [
      "Vous ciblez uniquement le marché français",
      "Vous n'avez pas les ressources pour produire du contenu localisé",
      "Vous cherchez une simple traduction automatique de vos contenus",
    ],
    methodology: [
      {
        number: 1,
        title: 'Étude de marché',
        description: "Analyse du potentiel SEO par pays et langue, benchmark concurrentiel local.",
      },
      {
        number: 2,
        title: 'Stratégie technique',
        description: "Choix de la structure de domaine, implémentation hreflang, configuration serveur.",
      },
      {
        number: 3,
        title: 'Localisation',
        description: "Adaptation des contenus aux spécificités culturelles et linguistiques de chaque marché.",
      },
      {
        number: 4,
        title: 'Développement par marché',
        description: "Stratégie de contenu et netlinking spécifique à chaque pays cible.",
      },
    ],
    benefits: [
      {
        title: 'Stratégie multi-pays structurée',
        description: 'Analyse du potentiel SEO par marché, choix de structure de domaine adapté et déploiement méthodique pays par pays.',
        highlight: 'multi-pays',
        icon: 'globe',
        size: 'large',
      },
      {
        title: 'Hreflang sans erreurs',
        description: 'Implémentation rigoureuse des balises hreflang pour éviter le contenu dupliqué international.',
        highlight: 'Hreflang',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Localisation experte',
        description: 'Adaptation culturelle des contenus, pas simple traduction. Expressions locales et références adaptées.',
        highlight: 'Localisation',
        icon: 'user',
        size: 'medium',
      },
      {
        title: 'Link building par pays',
        description: 'Acquisition de backlinks locaux dans chaque marché cible pour développer l\'autorité locale.',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Analyse concurrentielle locale',
        description: 'Benchmark des concurrents dans chaque pays pour identifier les opportunités de positionnement.',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Croissance internationale durable',
        description: 'Développez une présence SEO solide sur tous vos marchés cibles et captez le trafic organique à l\'international.',
        highlight: 'internationale',
        icon: 'rocket',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Hreflang mal implémenté',
        description: "Les erreurs hreflang sont très courantes et peuvent créer des problèmes de contenu dupliqué international ou d'affichage de mauvaises versions.",
      },
      {
        title: 'Traduction vs localisation',
        description: "Une simple traduction ne suffit pas. Les expressions, références culturelles et même la structure des contenus doivent être adaptées.",
      },
      {
        title: 'Cannibalisation entre versions',
        description: "Sans stratégie claire, vos différentes versions linguistiques peuvent se concurrencer sur les mêmes mots-clés.",
      },
    ],
    comparison: {
      title: "L'enjeu du SEO international",
      without: [
        "Vos versions internationales ne sont pas indexées correctement",
        "Google affiche la mauvaise version linguistique aux utilisateurs",
        "Vos concurrents locaux dominent les marchés que vous ciblez",
      ],
      with: [
        "Chaque version linguistique est correctement indexée et ciblée",
        "Vous développez une autorité SEO dans chaque pays",
        "Vous captez le trafic organique sur vos marchés cibles",
      ],
    },
    engagements: [
      {
        title: 'Expertise internationale',
        description: "Nous accompagnons des entreprises présentes dans de nombreux pays (Italie, Pologne, Belgique, Suisse, Portugal...).",
      },
      {
        title: 'Rigueur technique',
        description: "L'implémentation hreflang demande une précision absolue. Nous ne laissons aucune erreur.",
      },
      {
        title: 'Vision stratégique',
        description: "Chaque marché est différent. Nous adaptons la stratégie aux opportunités et contraintes locales.",
      },
    ],
    faqs: [
      {
        question: 'ccTLD, sous-domaine ou répertoire : que choisir ?',
        answer: "Cela dépend de vos ressources et objectifs. Les ccTLD offrent un signal géo fort mais demandent plus d'efforts. Les répertoires sont plus simples à gérer mais partagent l'autorité. Nous analysons votre situation pour recommander la meilleure approche.",
      },
      {
        question: 'Faut-il traduire ou localiser les contenus ?',
        answer: "Toujours localiser. Une traduction littérale rate les nuances culturelles, les expressions locales et les spécificités de recherche du marché cible.",
      },
      {
        question: 'Comment gérer le link building international ?',
        answer: "Chaque pays nécessite une stratégie de netlinking dédiée avec des sites locaux. Les liens d'un pays n'ont qu'un impact limité sur un autre marché.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'SEO Local', href: '/seo/prestations/local' },
      { name: 'Migration SEO', href: '/seo/prestations/refonte-migration' },
      { name: 'Agence GEO', href: '/seo/prestations/agence-geo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarification selon le nombre de marchés cibles',
    },
  },
  {
    slug: 'refonte-migration',
    title: 'Refonte & Migration SEO',
    tag: 'Migration',
    category: 'seo',
    heroDescription: "Une refonte mal préparée peut anéantir des années de travail SEO. Notre méthodologie éprouvée sécurise votre trafic et transforme ce risque en opportunité.",
    metaTitle: 'Refonte & Migration SEO - Préservez Votre Trafic',
    metaDescription: 'Réussissez votre refonte ou migration sans perte de trafic SEO. Méthodologie éprouvée et accompagnement expert. +162% de trafic possible.',
    contentSection: {
      tag: 'Migration',
      title: 'La migration SEO : un moment critique',
      content: "80% des refontes mal préparées perdent du trafic SEO. Changement de domaine, de CMS, de structure d'URL... Chaque migration comporte des risques. Mais avec la bonne méthodologie, c'est aussi une opportunité de corriger les erreurs du passé et de booster vos performances.",
      bulletPoints: [
        "+162% de trafic après la fusion Vestiaire Collective x Tradesy grâce à notre accompagnement.",
        "Méthodologie de redirection éprouvée sur des millions d'URLs.",
        "Monitoring post-migration intensif pour corriger rapidement tout problème.",
      ],
    },
    whyChooseUs: {
      title: 'Experts des migrations complexes',
      subtitle: 'Des références qui parlent',
      description: "Nous avons accompagné les migrations les plus complexes : Vestiaire Collective (10M d'URLs), Carter Cash, et de nombreux e-commerces. Notre méthodologie a fait ses preuves.",
      points: [
        {
          title: 'Méthodologie éprouvée',
          description: "Un processus rodé sur des dizaines de migrations, des plus simples aux plus complexes.",
        },
        {
          title: 'Outils propriétaires',
          description: "Des outils de matching d'URL automatisés pour gérer efficacement les gros volumes.",
        },
        {
          title: 'Monitoring intensif',
          description: "Suivi en temps réel post-migration pour détecter et corriger rapidement tout problème.",
        },
      ],
    },
    forYou: [
      "Vous préparez une refonte de site ou un changement de CMS",
      "Vous envisagez un changement de domaine ou de structure d'URL",
      "Vous fusionnez plusieurs sites ou migrez après une acquisition",
    ],
    notForYou: [
      "Vous voulez migrer dans les prochains jours sans préparation",
      "Vous pensez que les redirections se font \"après\" la migration",
      "Vous n'avez pas le budget pour un accompagnement professionnel",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & inventaire',
        description: "Cartographie complète des acquis SEO actuels : pages stratégiques, mots-clés, backlinks à préserver.",
      },
      {
        number: 2,
        title: 'Roadmap migration',
        description: "Définition du plan de migration, des responsabilités et du calendrier avec toutes les parties prenantes.",
      },
      {
        number: 3,
        title: 'Préparation',
        description: "Mapping URL, fichier de redirections, recette SEO sur l'environnement de préprod.",
      },
      {
        number: 4,
        title: 'Mise en production',
        description: "Go-live coordonné, monitoring intensif et correction des anomalies détectées.",
      },
    ],
    benefits: [
      {
        title: 'Méthodologie éprouvée sur les plus gros projets',
        description: 'Vestiaire Collective (+162% de trafic), Carter Cash... Notre processus a fait ses preuves sur des migrations de plusieurs millions d\'URLs.',
        highlight: 'éprouvée',
        icon: 'check',
        size: 'large',
      },
      {
        title: 'Outils de matching automatisés',
        description: 'Outils propriétaires pour gérer efficacement le mapping d\'URL même sur de très gros volumes.',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Gestion des gros volumes',
        description: 'Expérience des migrations complexes avec millions de pages, structures multiples et redirections massives.',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Monitoring temps réel',
        description: 'Suivi en continu post-go-live pour détecter immédiatement toute anomalie d\'indexation ou de crawl.',
        highlight: 'temps réel',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Correction rapide',
        description: 'Réactivité maximale sur les problèmes détectés. Chaque jour compte après une migration.',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Trafic préservé, voire augmenté',
        description: 'Notre objectif : que votre migration soit une opportunité d\'amélioration, pas un risque de perte. +162% sur Vestiaire Collective.',
        highlight: 'préservé',
        icon: 'shield',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Redirections 301 incomplètes',
        description: "Chaque URL avec du trafic ou des backlinks doit être redirigée. Les oublis créent des pertes de positionnement et d'autorité.",
      },
      {
        title: 'Changements multiples simultanés',
        description: "Changer le domaine, le CMS et la structure d'URL en même temps multiplie les risques. Nous recommandons de séquencer quand possible.",
      },
      {
        title: 'Absence de recette préprod',
        description: "Tester les redirections et le SEO technique en préprod évite les mauvaises surprises en production.",
      },
    ],
    comparison: {
      title: "L'importance d'un expert pour votre migration",
      without: [
        "Vous perdez 50% ou plus de votre trafic SEO",
        "Vos backlinks pointent vers des pages 404",
        "Vos positions durement acquises disparaissent",
      ],
      with: [
        "Votre trafic est préservé, voire augmenté",
        "Vos backlinks sont correctement redirigés",
        "Vous profitez de la migration pour corriger les erreurs SEO",
      ],
    },
    engagements: [
      {
        title: 'Expérience prouvée',
        description: "Vestiaire Collective, Carter Cash, Les Petites Billes... Nos cas clients démontrent notre expertise.",
      },
      {
        title: 'Accompagnement complet',
        description: "De l'audit pré-migration au monitoring post-go-live, nous vous accompagnons à chaque étape.",
      },
      {
        title: 'Réactivité',
        description: "Les problèmes post-migration doivent être traités rapidement. Nous assurons un suivi intensif.",
      },
    ],
    faqs: [
      {
        question: 'Quand impliquer le SEO dans un projet de refonte ?',
        answer: "Le plus tôt possible, idéalement dès la phase de cadrage. Plus on intervient tard, plus les corrections sont coûteuses.",
      },
      {
        question: 'Comment éviter les pertes de trafic ?',
        answer: "Plan de redirections exhaustif, recette SEO approfondie en préprod, et monitoring post-migration pour corriger rapidement les problèmes.",
      },
      {
        question: 'Combien de temps dure une migration SEO ?',
        answer: "La préparation prend généralement 1 à 3 mois selon la complexité. Le monitoring post-migration dure 2 à 3 mois.",
      },
      {
        question: 'Et si ma migration a déjà échoué ?',
        answer: "Nous intervenons aussi en correction de migration ratée. Il est souvent possible de récupérer le trafic perdu avec les bonnes actions.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'SEO International', href: '/seo/prestations/international' },
      { name: 'Formation SEO', href: '/seo/prestations/formation' },
      { name: 'Agence GEO', href: '/seo/prestations/agence-geo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Forfait projet selon la complexité de la migration',
    },
  },
  {
    slug: 'google-ads',
    title: 'Agence Google Ads',
    tag: 'SEA',
    category: 'ads',
    heroDescription: "Le SEA complète parfaitement le SEO. Nos campagnes Google Ads vous permettent d'obtenir des résultats immédiats pendant que votre stratégie SEO se déploie.",
    metaTitle: 'Agence Google Ads à Lille',
    metaDescription: 'Agence Google Ads à Lille. Maximisez votre ROI avec nos campagnes Google Ads. Search, Shopping, Display : expertise SEA pour des résultats immédiats.',
    contentSection: {
      tag: 'Google Ads',
      title: 'SEO + SEA : le combo gagnant',
      content: "Le SEA génère des résultats immédiats là où le SEO prend du temps. Ensemble, ils couvrent toutes les positions de la SERP et créent des synergies : les données SEA enrichissent la stratégie SEO et vice versa.",
      bulletPoints: [
        "Résultats immédiats : Trafic dès le lancement des campagnes.",
        "Complémentarité SEO/SEA : Les deux canaux se renforcent mutuellement.",
        "Data précieuse : Les performances Ads informent la stratégie SEO.",
      ],
    },
    whyChooseUs: {
      title: 'Expertise Search complète',
      subtitle: 'SEO et SEA sous un même toit',
      description: "Notre double expertise SEO/SEA nous permet d'optimiser votre présence sur l'ensemble de la SERP et de créer de vraies synergies entre les deux canaux.",
      points: [
        {
          title: 'Vision intégrée',
          description: "Nous alignons les stratégies SEO et SEA pour maximiser la couverture SERP.",
        },
        {
          title: 'Optimisation ROI',
          description: "Focus sur les conversions et le retour sur investissement, pas juste les clics.",
        },
        {
          title: 'Synergies data',
          description: "Les insights des campagnes Ads alimentent la stratégie SEO et inversement.",
        },
      ],
    },
    forYou: [
      "Vous avez besoin de résultats immédiats en attendant le SEO",
      "Vous souhaitez couvrir l'ensemble de la SERP",
      "Vous voulez tester des mots-clés avant d'investir en SEO",
    ],
    notForYou: [
      "Vous n'avez pas de budget média pour les campagnes",
      "Vous refusez de payer pour du trafic",
      "Votre secteur est trop concurrentiel pour être rentable en Ads",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & stratégie',
        description: "Analyse du marché, de la concurrence et définition de la stratégie.",
      },
      {
        number: 2,
        title: 'Configuration',
        description: "Création des campagnes, groupes d'annonces, tracking des conversions.",
      },
      {
        number: 3,
        title: 'Lancement',
        description: "Mise en ligne et phase d'apprentissage des algorithmes.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "Amélioration continue des performances et du ROI.",
      },
    ],
    benefits: [
      {
        title: 'Expertise SEO + SEA complète',
        description: 'Notre double expertise permet de créer de vraies synergies entre les deux canaux et de dominer l\'ensemble de la SERP.',
        highlight: 'SEO + SEA',
        icon: 'zap',
        size: 'large',
      },
      {
        title: 'Search Ads',
        description: 'Campagnes Search optimisées pour capter les requêtes à forte intention d\'achat.',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Google Shopping',
        description: 'Flux produits optimisés et campagnes Shopping/Performance Max pour les e-commerces.',
        highlight: 'Shopping',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Display & Remarketing',
        description: 'Campagnes de notoriété et de reciblage pour toucher vos prospects à chaque étape du funnel.',
        icon: 'user',
        size: 'medium',
      },
      {
        title: 'Focus ROI',
        description: 'Optimisation continue pour maximiser le retour sur investissement, pas juste les clics.',
        highlight: 'ROI',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Résultats immédiats pendant que le SEO travaille',
        description: 'Le SEA génère du trafic dès le lancement. Idéal pour compléter une stratégie SEO qui prend du temps.',
        highlight: 'immédiats',
        icon: 'globe',
        size: 'large',
      },
    ],
    faqs: [
      {
        question: 'Quel budget prévoir pour Google Ads ?',
        answer: "Le budget média dépend de votre secteur et objectifs. Nous définissons ensemble un budget adapté et rentable.",
      },
      {
        question: 'Gérez-vous aussi les campagnes Shopping ?',
        answer: "Oui, nous gérons tous les formats Google Ads : Search, Shopping, Display, Performance Max, YouTube.",
      },
      {
        question: 'Comment mesurez-vous le ROI ?',
        answer: "Tracking des conversions précis, attribution des ventes, calcul du ROAS. Nous suivons les métriques qui comptent pour votre business.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'SEO Local', href: '/seo/prestations/local' },
      { name: 'Formation SEO', href: '/seo/prestations/formation' },
      { name: 'Agence GEO', href: '/seo/prestations/agence-geo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Frais de gestion + budget média selon vos objectifs',
    },
  },
  {
    slug: 'formation',
    title: 'Formation SEO',
    tag: 'Formation',
    category: 'seo',
    heroDescription: "Le SEO évolue constamment. Nos formations permettent à vos équipes de développer les compétences nécessaires pour être autonomes et performantes.",
    metaTitle: 'Formation SEO - Montée en Compétences Équipes',
    metaDescription: 'Formez vos équipes au SEO avec nos formations sur-mesure. Du débutant à l\'expert, développez vos compétences en référencement.',
    contentSection: {
      tag: 'Formation',
      title: 'Développez les compétences SEO de vos équipes',
      content: "Que vous souhaitiez internaliser le SEO ou simplement donner à vos équipes les bases pour mieux collaborer avec votre agence, nos formations s'adaptent à vos besoins et niveaux.",
      bulletPoints: [
        "Formations sur-mesure adaptées à votre niveau et vos problématiques.",
        "Exercices pratiques sur vos propres cas et sites.",
        "Supports complets et accès aux ressources pour après la formation.",
      ],
    },
    whyChooseUs: {
      title: 'Formations pratico-pratiques',
      subtitle: 'Pas de théorie abstraite',
      description: "Nos formations sont construites autour de cas concrets et d'exercices pratiques. Vos équipes repartent avec des compétences immédiatement applicables.",
      points: [
        {
          title: 'Sur-mesure',
          description: "Contenu adapté à votre secteur, votre CMS et vos enjeux spécifiques.",
        },
        {
          title: 'Pratique',
          description: "Des exercices sur vos propres sites et données, pas des cas génériques.",
        },
        {
          title: 'Suivi',
          description: "Accompagnement post-formation pour la mise en pratique.",
        },
      ],
    },
    forYou: [
      "Vous souhaitez internaliser une partie de votre SEO",
      "Vos équipes marketing/produit ont besoin de comprendre le SEO",
      "Vous voulez former vos rédacteurs aux bonnes pratiques SEO",
    ],
    notForYou: [
      "Vous cherchez une formation générique sans personnalisation",
      "Vous n'avez pas le temps de libérer vos équipes pour la formation",
      "Vous préférez externaliser 100% du SEO",
    ],
    methodology: [
      {
        number: 1,
        title: 'Cadrage',
        description: "Évaluation du niveau actuel et définition des objectifs de formation.",
      },
      {
        number: 2,
        title: 'Programme',
        description: "Création du programme sur-mesure adapté à vos besoins.",
      },
      {
        number: 3,
        title: 'Formation',
        description: "Sessions théoriques et ateliers pratiques sur vos propres cas.",
      },
      {
        number: 4,
        title: 'Suivi',
        description: "Accompagnement post-formation et sessions Q&A.",
      },
    ],
    benefits: [
      {
        title: 'Formations 100% sur-mesure',
        description: 'Contenu adapté à votre secteur, votre CMS, vos enjeux spécifiques et le niveau de vos équipes. Pas de programme générique.',
        highlight: 'sur-mesure',
        icon: 'user',
        size: 'large',
      },
      {
        title: 'Approche pratique',
        description: 'Exercices sur vos propres sites et données, cas concrets, mise en application immédiate.',
        highlight: 'pratique',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Supports complets',
        description: 'Documentation détaillée et accès aux ressources pour appliquer les apprentissages après la formation.',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Suivi post-formation',
        description: 'Sessions Q&A et accompagnement après la formation pour la mise en pratique.',
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Tous niveaux',
        description: 'Du débutant à l\'expert, nous adaptons le contenu au niveau réel de vos équipes.',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Présentiel ou distanciel, à vous de choisir',
        description: 'Le présentiel favorise les échanges, le distanciel offre plus de flexibilité. Les deux formats sont disponibles.',
        highlight: 'Présentiel ou distanciel',
        icon: 'globe',
        size: 'large',
      },
    ],
    faqs: [
      {
        question: 'Quelle durée pour une formation SEO ?',
        answer: "De 1 journée pour les fondamentaux à plusieurs jours pour des formations avancées. Nous adaptons la durée à vos objectifs.",
      },
      {
        question: 'Formez-vous en présentiel ou à distance ?',
        answer: "Les deux formats sont possibles. Le présentiel favorise les échanges, le distanciel offre plus de flexibilité.",
      },
      {
        question: 'Combien de personnes par session ?',
        answer: "Nous recommandons des groupes de 3 à 8 personnes pour un bon équilibre entre interaction et personnalisation.",
      },
      {
        question: 'Les formations sont-elles certifiantes ?',
        answer: "Nous délivrons une attestation de formation. Pour des certifications officielles, nous pouvons vous orienter vers les bons organismes.",
      },
    ],
    otherExpertises: [
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'Migration SEO', href: '/seo/prestations/refonte-migration' },
      { name: 'Google Ads', href: '/ads/prestations/google-ads' },
      { name: 'Agence GEO', href: '/seo/prestations/agence-geo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarif par jour de formation, dégressif selon la durée',
    },
  },
  {
    slug: 'agence-geo',
    title: 'Agence GEO – Référencement IA',
    tag: 'GEO',
    category: 'seo',
    heroDescription: 'Votre marque est-elle visible dans les réponses générées par les IA ? Google SGE, ChatGPT, Bing Chat, Perplexity, Gemini… Tous ces moteurs de réponse générative affichent des contenus en mode conversationnel. Mais est-ce que votre site fait partie des sources qu\'ils utilisent ?',
    metaTitle: 'Agence GEO | Référencement IA & Generative Engine Optimization',
    metaDescription: 'Agence spécialisée en GEO (Generative Engine Optimization). Apparaissez dans les réponses de ChatGPT, Google SGE, Perplexity. Devenez une source citée par les IA.',
    contentSection: {
      tag: 'GEO',
      title: "Qu'est-ce que le GEO ?",
      content: "Le Generative Engine Optimization (GEO) consiste à optimiser vos contenus pour apparaître dans les réponses générées par les IA conversationnelles. Contrairement au SEO traditionnel, l'objectif n'est pas uniquement le classement dans les SERP, mais de devenir une source de confiance que les IA citeront spontanément dans leurs réponses.",
      bulletPoints: [
        "Visibilité dans ChatGPT, Google SGE, Bing Chat, Perplexity et Gemini",
        "Optimisation pour être cité comme source fiable par les LLMs",
        "Stratégie de co-citation et d'autorité thématique",
        "Structuration des contenus pour les moteurs de réponse IA",
      ],
    },
    // Nouvelles sections exclusives GEO
    geoExclusiveContent: {
      howChatGPTSearches: {
        tag: 'ARCHITECTURE IA',
        title: 'Comment ChatGPT trouve vos contenus',
        intro: "Contrairement à ce que beaucoup pensent, ChatGPT ne crawle pas le web en temps réel. OpenAI utilise des fournisseurs de SERP externes pour alimenter ses réponses. Comprendre cette architecture est essentiel pour optimiser votre visibilité.",
        points: [
          {
            title: 'SerpAPI pour les résultats organiques',
            description: "OpenAI utilise SerpAPI comme fournisseur principal pour récupérer les résultats de recherche organiques. Cela signifie que votre positionnement sur Google ET Bing impacte directement votre visibilité dans ChatGPT.",
          },
          {
            title: 'SearchAPI.io pour le shopping',
            description: "Pour les requêtes commerciales, ChatGPT interroge Google Shopping via SearchAPI.io. Les sites e-commerce doivent donc optimiser leurs flux produits pour apparaître dans ces résultats.",
          },
          {
            title: 'Google Places pour le local',
            description: "Les données cartographiques proviennent de Google Places API. Une fiche Google Business Profile optimisée est donc cruciale pour le GEO local.",
          },
        ],
      },
      queryFanOut: {
        tag: 'QUERY FAN-OUT',
        title: 'Le phénomène Query Fan-out : une requête = jusqu\'à 49 recherches',
        intro: "Quand un utilisateur pose une question à ChatGPT, l'IA génère en coulisse entre 1 et 49 requêtes distinctes vers les moteurs de recherche. Ce phénomène, appelé 'Query Fan-out', multiplie vos opportunités d'apparition.",
        stats: [
          {
            label: 'Perplexity',
            singleQuery: '70.5%',
            multiQuery: '29.5%',
            description: 'Préfère les requêtes simples et directes',
          },
          {
            label: 'ChatGPT',
            singleQuery: '32.7%',
            multiQuery: '67.3%',
            description: 'Génère plus de requêtes parallèles pour des réponses complètes',
          },
        ],
        triggerWords: [
          { word: 'List / Liste', avgQueries: '49', impact: 'Très élevé' },
          { word: 'Top', avgQueries: '8.44', impact: 'Élevé' },
          { word: 'Compare / Comparatif', avgQueries: '5.67', impact: 'Élevé' },
          { word: 'Why / Pourquoi', avgQueries: '2.91', impact: 'Moyen' },
          { word: 'Best / Meilleur', avgQueries: '2.09', impact: 'Moyen' },
        ],
        insight: "Optimiser vos contenus pour les formats 'liste', 'top X' et 'comparatif' augmente significativement vos chances d'être cité par les IA.",
      },
      autoKeywordAdditions: {
        tag: 'REFORMULATION IA',
        title: 'Ce que les IA ajoutent automatiquement à vos requêtes',
        intro: "Les IA ne se contentent pas de transmettre la requête utilisateur. Elles l'enrichissent automatiquement avec des modificateurs pour obtenir des résultats plus pertinents. Intégrer ces éléments dans vos contenus améliore votre visibilité.",
        additions: [
          { type: 'Année', percentage: '28.1%', example: '2024, 2025', recommendation: 'Mettez à jour vos contenus avec l\'année en cours' },
          { type: 'Termes évaluatifs', percentage: '16.7%', example: 'meilleur, top, recommandé', recommendation: 'Utilisez un vocabulaire qualificatif dans vos titres' },
          { type: 'Termes géographiques', percentage: '13.9%', example: 'Paris, France, près de moi', recommendation: 'Intégrez des références locales pertinentes' },
          { type: 'Qualificatifs', percentage: '11.2%', example: 'professionnel, entreprise, expert', recommendation: 'Positionnez-vous clairement sur votre cible' },
          { type: 'Modificateurs de prix', percentage: '6.3%', example: 'pas cher, gratuit, prix', recommendation: 'Affichez clairement vos tarifs ou gammes de prix' },
        ],
      },
      shoppingGEO: {
        tag: 'E-COMMERCE GEO',
        title: 'ChatGPT Shopping : comment fonctionne le système Mercury',
        intro: "OpenAI a développé le système Mercury pour gérer les requêtes shopping. Comprendre son fonctionnement permet aux e-commerçants d'optimiser leur visibilité dans les réponses commerciales de ChatGPT.",
        process: [
          { step: 1, title: 'Qualification du besoin', description: "ChatGPT génère un 'quiz' de 4 questions pour affiner le besoin de l'utilisateur (budget, usage, préférences...)." },
          { step: 2, title: 'Requêtes Google Shopping', description: "Le système Mercury interroge Google Shopping via SearchAPI.io avec les critères collectés." },
          { step: 3, title: 'Agrégation des données', description: "Les fiches produits sont récupérées, filtrées et reformatées pour l'affichage conversationnel." },
          { step: 4, title: 'Présentation des résultats', description: "ChatGPT affiche les produits avec images, prix et liens d'achat directs." },
        ],
        recommendation: "Pour apparaître dans ChatGPT Shopping, optimisez vos flux Google Merchant Center avec des données structurées complètes (prix, disponibilité, images, descriptions détaillées).",
      },
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi vos contenus ne sont pas cités par les IA ?',
      intro: "Les IA génératives sélectionnent leurs sources selon des critères précis. Si vos contenus ne sont pas cités, c'est souvent pour des raisons techniques ou stratégiques identifiables.",
      expertiseLinks: [
        {
          text: 'Pages mal structurées :',
          highlight: 'HTML désordonné, JavaScript bloquant',
          href: '#',
        },
        {
          text: 'Absence de clarté sémantique :',
          highlight: 'balises FAQ, HowTo, Article manquantes',
          href: '#',
        },
        {
          text: 'Pas de stratégie de',
          highlight: 'citation et co-citation',
          href: '#',
        },
        {
          text: 'Site non indexé sur',
          highlight: 'Google (utilisé via SerpAPI)',
          href: '#',
        },
        {
          text: 'Bots IA (OAI-SearchBot, ChatGPT-User)',
          highlight: 'ne visitent pas votre site',
          href: '#',
        },
      ],
      ctaText: 'Auditer ma visibilité IA',
      ctaHref: '/prestations/devis',
    },
    whyChooseUs: {
      title: 'Moins de BLABLA, Moins de PPT',
      subtitle: 'Des recommandations précises et priorisées',
      description: "Chez Slashr, nous privilégions l'action aux analyses interminables. Notre approche GEO est pragmatique : identifier rapidement les leviers d'optimisation et les implémenter efficacement.",
      points: [
        {
          title: 'Expertise spécialisée GEO',
          description: "Maîtrise approfondie des IA génératives et de leurs critères de sélection des sources.",
        },
        {
          title: 'Outils maison',
          description: "Outils totalement personnalisés nous permettant de tracker le positionnement sur les agents IA.",
        },
        {
          title: 'Résultats concrets',
          description: "Nous ne vendons pas des promesses, nous montrons des résultats mesurables.",
        },
      ],
    },
    forYou: [
      "Vous souhaitez apparaître dans les réponses de ChatGPT, Perplexity ou Google SGE",
      "Vous voulez anticiper l'évolution du search vers les moteurs de réponse IA",
      "Vous avez déjà une stratégie SEO et souhaitez l'étendre au GEO",
      "Vous voulez devenir une référence citée dans votre secteur",
    ],
    notForYou: [
      "Vous n'avez pas encore de présence web établie",
      "Vous cherchez des résultats immédiats sans investissement",
      "Vous ne croyez pas à l'impact des IA sur le search",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit de vos contenus existants',
        description: "Analyse de votre visibilité actuelle dans les IA génératives, audit technique (indexation Bing, accessibilité aux bots IA, structure HTML) et benchmark concurrentiel.",
      },
      {
        number: 2,
        title: 'Stratégie d\'optimisation IA',
        description: "Définition des thématiques prioritaires, stratégie de structuration des contenus, plan de données structurées (FAQ, HowTo, Article) et configuration des bots IA.",
      },
      {
        number: 3,
        title: 'Production et optimisation',
        description: "Optimisation des contenus existants, création de nouveaux contenus optimisés GEO, implémentation des données structurées et amélioration de l'autorité thématique.",
      },
      {
        number: 4,
        title: 'Suivi et ajustement continu',
        description: "Monitoring de la visibilité dans les différentes IA, analyse des citations, ajustement de la stratégie selon les évolutions des algorithmes IA.",
      },
    ],
    benefits: [
      {
        title: 'Positionnement sur les IA génératives',
        description: 'Apparaissez dans les réponses de ChatGPT, Google SGE, Perplexity, Gemini et Bing Chat.',
        highlight: 'IA génératives',
        icon: 'rocket',
        size: 'large',
      },
      {
        title: 'Tracking personnalisé',
        description: 'Outils maison pour suivre votre positionnement sur les différents agents IA en temps réel.',
        highlight: 'personnalisé',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Expertise technique',
        description: 'Configuration optimale des bots IA (OAI-SearchBot, ChatGPT-User) et indexation Bing.',
        highlight: 'technique',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Données structurées',
        description: 'Implémentation des schémas FAQ, HowTo, Article pour maximiser la compréhension IA.',
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'Stratégie de citation',
        description: 'Développement de votre autorité thématique pour devenir une source de référence.',
        highlight: 'citation',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Anticipation du futur du search',
        description: 'Préparez votre marque à la transition vers les moteurs de réponse IA qui transforment la recherche en ligne.',
        highlight: 'futur',
        icon: 'globe',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Indexation Bing essentielle',
        description: "ChatGPT utilise Bing comme point d'entrée principal pour trouver vos contenus. Sans indexation Bing optimale, vos pages ne seront jamais citées par ChatGPT, même si elles sont bien positionnées sur Google.",
      },
      {
        title: 'Accessibilité aux bots IA',
        description: "Les bots OAI-SearchBot et ChatGPT-User doivent pouvoir accéder à vos contenus. Vérifiez votre robots.txt et assurez-vous que vos pages ne sont pas bloquées. Ce sont les indicateurs fiables de votre visibilité IA.",
      },
      {
        title: 'JavaScript et rendu HTML',
        description: "Les IA de OpenAI se basent principalement sur le HTML brut. Les contenus chargés uniquement en JavaScript ne sont souvent pas accessibles aux crawlers IA. Privilégiez le rendu côté serveur (SSR) ou le pré-rendu.",
      },
    ],
    comparison: {
      title: "Comprendre l'intérêt du GEO",
      without: [
        "Vos concurrents sont cités par les IA, pas vous",
        "Vous manquez le virage du search généré par IA",
        "Votre autorité de marque n'est pas reconnue par les LLMs",
      ],
      with: [
        "Vous apparaissez dans les réponses des principales IA",
        "Vous anticipez l'évolution majeure du search",
        "Vous renforcez votre position de référence dans votre secteur",
      ],
    },
    engagements: [
      {
        title: 'Innovation',
        description: "Nous restons à la pointe des évolutions des IA génératives pour vous offrir les stratégies les plus actuelles.",
      },
      {
        title: 'Transparence',
        description: "Suivi clair de votre visibilité IA avec nos outils de tracking propriétaires.",
      },
      {
        title: 'Résultats',
        description: "Focus sur les métriques qui comptent : citations, mentions de marque et trafic référé depuis les IA.",
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce que Slashr fait concrètement en GEO ?",
        answer: `Notre accompagnement GEO comprend :
• Audit de visibilité IA (présence dans ChatGPT, Perplexity, Google SGE...)
• Configuration des bots IA (OAI-SearchBot, ChatGPT-User)
• Optimisation des pages clés pour les moteurs de réponse
• Implémentation des données structurées (Schema.org : FAQ, HowTo, Article)
• Stratégie de contenu ciblée GEO
• Gestion des citations et co-citations
• Monitoring continu des mentions IA

Nous faisons de vous une source d'information reconnue par les IA.`,
      },
      {
        question: "Comment ChatGPT trouve-t-il les contenus à citer ?",
        answer: `ChatGPT ne crawle pas le web en temps réel. OpenAI utilise des fournisseurs de SERP externes :
• SerpAPI pour les résultats organiques (Google et Bing)
• SearchAPI.io pour Google Shopping (système Mercury)
• Google Places API pour les données locales

Cela signifie que votre positionnement SEO classique impacte directement votre visibilité dans ChatGPT. Un bon SEO est la base du GEO.`,
      },
      {
        question: "Qu'est-ce que le Query Fan-out ?",
        answer: `Le Query Fan-out est un phénomène clé du GEO : quand un utilisateur pose UNE question à ChatGPT, l'IA génère en coulisse entre 1 et 49 requêtes distinctes vers les moteurs de recherche.

Par exemple, "Liste des meilleurs outils SEO" génère en moyenne 49 requêtes parallèles ! C'est pourquoi les contenus au format liste, comparatif ou "top X" ont plus de chances d'être cités.`,
      },
      {
        question: "Quels mots-clés déclenchent le plus de requêtes IA ?",
        answer: `Certains mots déclenchent plus de requêtes parallèles dans ChatGPT :
• "List/Liste" : 49 requêtes en moyenne (impact très élevé)
• "Top" : 8.44 requêtes (impact élevé)
• "Compare/Comparatif" : 5.67 requêtes (impact élevé)
• "Why/Pourquoi" : 2.91 requêtes (impact moyen)
• "Best/Meilleur" : 2.09 requêtes (impact moyen)

Structurez vos contenus autour de ces formats pour maximiser votre visibilité.`,
      },
      {
        question: "Comment optimiser mon site e-commerce pour ChatGPT Shopping ?",
        answer: `ChatGPT Shopping utilise le système Mercury qui interroge Google Shopping. Pour apparaître :
• Optimisez vos flux Google Merchant Center
• Renseignez des données structurées complètes (prix, disponibilité, images HD)
• Incluez des descriptions produits détaillées
• Maintenez vos stocks à jour

Le système génère un quiz de 4 questions pour qualifier le besoin utilisateur avant d'afficher les produits.`,
      },
      {
        question: "Qu'est-ce que le GEO ?",
        answer: "Le GEO (Generative Engine Optimization) consiste à optimiser vos contenus pour qu'ils soient cités dans les réponses générées par les IA conversationnelles comme ChatGPT, Google SGE, Bing Chat, Perplexity ou Gemini. L'objectif est de devenir une source de confiance que les IA citeront spontanément.",
      },
      {
        question: "Pourquoi l'indexation Bing est-elle essentielle pour le GEO ?",
        answer: "ChatGPT utilise Bing comme point d'entrée principal pour trouver et citer des contenus. Sans une indexation Bing optimale, vos pages ne seront jamais citées par ChatGPT, même si elles sont excellentes. C'est la première étape indispensable de toute stratégie GEO.",
      },
      {
        question: "Quels modificateurs les IA ajoutent-elles automatiquement ?",
        answer: `Les IA enrichissent automatiquement les requêtes utilisateurs :
• 28.1% ajoutent l'année (2024, 2025)
• 16.7% ajoutent des termes évaluatifs (meilleur, top)
• 13.9% ajoutent des termes géographiques
• 11.2% ajoutent des qualificatifs (professionnel, entreprise)
• 6.3% ajoutent des modificateurs de prix

Intégrez naturellement ces éléments dans vos contenus pour matcher les requêtes reformulées.`,
      },
      {
        question: "Comment vérifier si les bots IA visitent mon site ?",
        answer: "Il faut analyser vos logs serveurs pour identifier les visites d'OAI-SearchBot et ChatGPT-User. Leur présence indique que les IA d'OpenAI crawlent votre site. C'est un indicateur fiable de votre visibilité potentielle dans ChatGPT. Nous pouvons réaliser cet audit pour vous.",
      },
      {
        question: "Le JavaScript pose-t-il problème pour le GEO ?",
        answer: "Oui, les IA de OpenAI se basent principalement sur le HTML brut. Les contenus chargés uniquement en JavaScript (SPA, applications React/Vue non SSR) ne sont souvent pas accessibles aux crawlers IA. Privilégiez le rendu côté serveur (SSR) ou le pré-rendu statique.",
      },
      {
        question: "Quelle différence entre Perplexity et ChatGPT pour le GEO ?",
        answer: `Les deux IA ont des comportements différents :
• Perplexity : 70.5% de requêtes simples, préfère les sources directes
• ChatGPT : 67.3% de requêtes multiples, reformule davantage

Perplexity est plus "transparent" dans ses sources, ChatGPT plus élaboré dans ses réponses. Une stratégie GEO efficace doit cibler les deux.`,
      },
      {
        question: "Quels sont vos tarifs GEO ?",
        answer: "Nous fonctionnons avec un TJM (taux journalier moyen) entre 600 et 700€ selon la taille du projet. Le nombre de jours nécessaire dépend de votre situation actuelle, de la taille de votre site et de vos objectifs de visibilité IA.",
      },
      {
        question: "Combien de temps pour voir des résultats en GEO ?",
        answer: "Les premiers résultats peuvent apparaître en quelques semaines pour les optimisations techniques (indexation Bing, accès bots). Pour devenir une source régulièrement citée, comptez 3 à 6 mois de travail continu sur l'autorité thématique et la qualité des contenus.",
      },
    ],
    otherExpertises: [
      { name: 'Refonte & Migration SEO', href: '/seo/prestations/refonte-migration' },
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'SEO Local', href: '/seo/prestations/local' },
      { name: 'SEO International', href: '/seo/prestations/international' },
    ],
    pricing: {
      tjm: '600-700€',
      description: 'Tarification selon la complexité du projet et la taille du site',
    },
  },
  // ============================================
  // PRESTATIONS CMS ADDITIONNELLES
  // ============================================
  {
    slug: 'drupal',
    title: 'Agence SEO Drupal',
    tag: 'Drupal',
    category: 'seo',
    heroDescription: 'Faites le choix d\'une agence spécialiste du CMS Drupal pour votre campagne de référencement naturel. Notre expertise Drupal vous garantit des résultats mesurables.',
    metaTitle: 'Agence SEO Drupal à Lille | Expert Référencement Drupal',
    metaDescription: 'Agence SEO spécialisée Drupal. Optimisez votre site Drupal pour les moteurs de recherche avec notre expertise. Résultats mesurables et approche personnalisée.',
    contentSection: {
      tag: 'Drupal',
      title: 'Drupal : Un CMS puissant pour le SEO',
      content: 'Drupal est un CMS réputé pour ses capacités exceptionnelles en matière de développement et offre l\'un des meilleurs supports pour l\'optimisation SEO. Sa flexibilité et sa robustesse en font un choix privilégié pour les sites à fort trafic et les projets complexes.',
      bulletPoints: [
        'Architecture modulaire permettant une optimisation SEO fine et personnalisée',
        'Gestion avancée des URL propres et des redirections',
        'Support natif des balises meta et données structurées',
        'Performance et scalabilité pour les grands sites',
        'Communauté active et modules SEO spécialisés (Pathauto, Metatag, XML Sitemap)',
      ],
    },
    whyChooseUs: {
      title: 'Pourquoi choisir Slashr pour votre SEO Drupal ?',
      subtitle: 'Notre expertise Drupal fait la différence',
      description: 'Notre équipe possède une expertise approfondie de Drupal et de ses spécificités SEO. Nous maîtrisons les modules essentiels et les bonnes pratiques pour maximiser la visibilité de votre site.',
      points: [
        {
          title: 'Expertise Drupal',
          description: 'Spécialisation dans le référencement de sites Drupal avec une connaissance approfondie de l\'architecture du CMS.',
        },
        {
          title: 'Approche personnalisée',
          description: 'Chaque projet Drupal est unique. Nous adaptons notre stratégie à vos objectifs et à la structure de votre site.',
        },
        {
          title: 'Résultats mesurables',
          description: 'Rapports réguliers et suivi du trafic, du classement et des conversions pour des résultats concrets.',
        },
      ],
    },
    methodology: [
      {
        number: 1,
        title: 'Audit technique Drupal',
        description: 'Analyse complète de la configuration SEO de votre Drupal : modules installés, structure des URL, performances, crawlabilité.',
      },
      {
        number: 2,
        title: 'Optimisation on-site',
        description: 'Configuration des modules SEO (Metatag, Pathauto, Schema.org), optimisation des templates et du maillage interne.',
      },
      {
        number: 3,
        title: 'Stratégie de contenu',
        description: 'Définition des mots-clés cibles et optimisation des contenus existants selon les bonnes pratiques Drupal.',
      },
      {
        number: 4,
        title: 'Suivi et amélioration',
        description: 'Monitoring des performances, rapports réguliers et ajustements continus pour améliorer vos positions.',
      },
    ],
    benefits: [
      {
        title: 'Modules SEO puissants',
        description: 'Drupal dispose d\'un écosystème de modules SEO très complet (Metatag, Pathauto, Redirect, XML Sitemap).',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Performance native',
        description: 'Architecture optimisée pour les performances avec cache intégré et gestion efficace des ressources.',
        icon: 'zap',
        size: 'small',
      },
      {
        title: 'Flexibilité totale',
        description: 'Contrôle complet sur chaque aspect SEO grâce à l\'architecture modulaire de Drupal.',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Scalabilité',
        description: 'Parfait pour les grands sites avec beaucoup de contenu et de trafic.',
        icon: 'chart',
        size: 'small',
      },
    ],
    forYou: [
      'Vous avez un site Drupal existant et souhaitez améliorer sa visibilité',
      'Vous gérez un site à fort trafic nécessitant une infrastructure robuste',
      'Vous avez besoin d\'une architecture SEO complexe et personnalisée',
      'Vous disposez d\'une équipe technique capable d\'implémenter les recommandations',
      'Vous recherchez une flexibilité totale sur les optimisations SEO',
    ],
    notForYou: [
      'Vous cherchez une solution simple sans équipe technique',
      'Vous avez un petit budget et préférez un CMS plus accessible',
      'Vous n\'avez pas de ressources pour maintenir un site Drupal',
      'Vous préférez une interface utilisateur plus intuitive',
    ],
    comparison: {
      title: 'SEO Drupal : avec ou sans agence spécialisée ?',
      without: [
        'Configuration SEO approximative des modules',
        'Temps perdu à chercher les bonnes pratiques Drupal',
        'Risque d\'erreurs techniques impactant le crawl',
        'Pas de vision stratégique adaptée à Drupal',
        'Difficulté à exploiter le plein potentiel du CMS',
      ],
      with: [
        'Configuration optimale de tous les modules SEO',
        'Expertise immédiate sur les spécificités Drupal',
        'Architecture technique optimisée pour le SEO',
        'Stratégie personnalisée selon vos objectifs',
        'Exploitation maximale des capacités de Drupal',
      ],
    },
    engagements: [
      {
        title: 'Performance',
        description: 'Nous faisons notre maximum pour réaliser vos objectifs. Nous restons 100% focus-SEO pour cette raison.',
      },
      {
        title: 'Confiance',
        description: 'Nous développons une relation de confiance et long terme ensemble.',
      },
      {
        title: 'Expérience',
        description: 'Faites le choix d\'une agence qui a de l\'expérience sur Drupal et connaît ses spécificités.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'une agence SEO spécialisée Drupal ?',
        answer: 'Une agence SEO spécialisée Drupal se concentre sur l\'optimisation des sites web créés avec le CMS Drupal. Elle possède une expertise approfondie de l\'architecture Drupal, de ses modules SEO et de ses spécificités techniques pour maximiser la visibilité de votre site.',
      },
      {
        question: 'Quels sont les avantages de travailler avec une agence SEO Drupal ?',
        answer: 'Les avantages incluent : une expertise pointue sur les modules SEO Drupal, des solutions adaptées à l\'architecture spécifique de votre site, une optimisation des performances natives de Drupal, et des résultats mesurables en termes de trafic et de conversions.',
      },
      {
        question: 'Comment choisir la bonne agence SEO Drupal ?',
        answer: 'Vérifiez l\'expertise Drupal de l\'agence, son approche personnalisée, ses méthodes éthiques et durables, ses résultats tangibles. Consultez également les avis et témoignages clients pour vous faire une idée de la qualité de l\'accompagnement.',
      },
      {
        question: 'Quelles techniques SEO utilisez-vous pour Drupal ?',
        answer: 'Nous utilisons les modules essentiels (Metatag, Pathauto, Redirect, XML Sitemap), optimisons les templates Twig, configurons les données structurées Schema.org, améliorons les performances avec le cache Drupal, et mettons en place un maillage interne efficace.',
      },
      {
        question: 'Drupal est-il bon pour le SEO ?',
        answer: 'Oui, Drupal est excellent pour le SEO. Il offre une flexibilité totale sur les URL, les balises meta, les données structurées, et dispose d\'un écosystème de modules SEO très mature. Sa gestion du cache et ses performances natives sont également des atouts majeurs.',
      },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarification selon la complexité du site Drupal et les objectifs SEO',
    },
  },
  {
    slug: 'wordpress',
    title: 'Agence SEO WordPress',
    tag: 'WordPress',
    category: 'seo',
    heroDescription: 'Faites le choix d\'une agence spécialiste du CMS WordPress pour votre campagne de référencement naturel. Optimisez votre site WordPress pour dominer les résultats de recherche.',
    metaTitle: 'Agence SEO WordPress à Lille | Expert Référencement WordPress',
    metaDescription: 'Agence SEO spécialisée WordPress. Optimisez votre site WordPress pour les moteurs de recherche. Blogs, sites vitrines, e-commerce : nous maîtrisons tous les types de sites WP.',
    contentSection: {
      tag: 'WordPress',
      title: 'WordPress : Le CMS le plus populaire au monde',
      content: 'WordPress propulse plus de 40% des sites web dans le monde. Cette popularité s\'accompagne d\'un écosystème riche en plugins SEO et d\'une communauté active. Cependant, exploiter pleinement le potentiel SEO de WordPress nécessite une expertise spécifique.',
      bulletPoints: [
        'Plugins SEO puissants : Yoast SEO, Rank Math, All in One SEO',
        'Structure de permaliens personnalisable pour des URL optimisées',
        'Gestion native des catégories, tags et taxonomies pour le maillage',
        'Thèmes optimisés pour la vitesse et le mobile-first',
        'Intégration facile des données structurées et Schema.org',
      ],
    },
    whyChooseUs: {
      title: 'Pourquoi choisir Slashr pour votre SEO WordPress ?',
      subtitle: 'L\'expertise WordPress au service de votre visibilité',
      description: 'Notre équipe maîtrise WordPress et ses spécificités SEO. Nous optimisons tous types de sites WordPress : blogs, sites vitrines, boutiques WooCommerce, et sites sur mesure.',
      points: [
        {
          title: 'Expertise complète',
          description: 'Maîtrise de l\'écosystème WordPress : thèmes, plugins SEO, performances, sécurité.',
        },
        {
          title: 'Stratégie sur mesure',
          description: 'Approche personnalisée selon votre type de site et vos objectifs business.',
        },
        {
          title: 'Suivi régulier',
          description: 'Rapports détaillés et accompagnement continu pour des résultats durables.',
        },
      ],
    },
    methodology: [
      {
        number: 1,
        title: 'Audit WordPress complet',
        description: 'Analyse de votre installation WordPress : thème, plugins, configuration SEO, performances, sécurité.',
      },
      {
        number: 2,
        title: 'Optimisation technique',
        description: 'Configuration optimale des plugins SEO, optimisation des performances (cache, images, lazy loading).',
      },
      {
        number: 3,
        title: 'Stratégie de contenu',
        description: 'Optimisation des articles et pages, structure des catégories, maillage interne efficace.',
      },
      {
        number: 4,
        title: 'Suivi et reporting',
        description: 'Monitoring des positions, analyse du trafic organique, recommandations d\'amélioration continue.',
      },
    ],
    benefits: [
      {
        title: 'Plugins SEO puissants',
        description: 'Yoast, Rank Math : des outils complets pour gérer tous les aspects SEO de votre site.',
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Facilité de gestion',
        description: 'Interface intuitive permettant à vos équipes d\'appliquer les recommandations SEO facilement.',
        icon: 'user',
        size: 'small',
      },
      {
        title: 'Écosystème riche',
        description: 'Des milliers de thèmes et plugins pour étendre les fonctionnalités SEO de votre site.',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Communauté active',
        description: 'Mises à jour régulières et support communautaire pour rester à jour sur les bonnes pratiques.',
        icon: 'shield',
        size: 'small',
      },
    ],
    forYou: [
      'Vous avez un site WordPress (blog, vitrine, e-commerce WooCommerce)',
      'Vous souhaitez améliorer votre visibilité sur Google',
      'Vous voulez exploiter pleinement les plugins SEO comme Yoast ou Rank Math',
      'Vous cherchez une stratégie SEO adaptée à votre type de site',
      'Vous avez besoin d\'optimiser les performances de votre site WordPress',
    ],
    notForYou: [
      'Vous n\'avez pas encore de site et hésitez sur le CMS',
      'Vous cherchez uniquement une refonte graphique sans SEO',
      'Vous n\'avez aucun budget pour le référencement naturel',
      'Vous attendez des résultats immédiats en quelques jours',
    ],
    comparison: {
      title: 'SEO WordPress : avec ou sans agence spécialisée ?',
      without: [
        'Configuration basique des plugins SEO',
        'Erreurs courantes sur les permaliens et redirections',
        'Site lent à cause de plugins mal optimisés',
        'Contenu non optimisé pour les mots-clés cibles',
        'Pas de stratégie de maillage interne',
      ],
      with: [
        'Configuration optimale de Yoast/Rank Math',
        'Architecture technique propre et performante',
        'Performances optimisées (cache, images, CDN)',
        'Stratégie de contenu et mots-clés ciblée',
        'Maillage interne structuré pour le SEO',
      ],
    },
    engagements: [
      {
        title: 'Performance',
        description: 'Nous faisons notre maximum pour réaliser vos objectifs. Nous restons 100% focus-SEO pour cette raison.',
      },
      {
        title: 'Confiance',
        description: 'Nous développons une relation de confiance et long terme ensemble.',
      },
      {
        title: 'Expérience',
        description: 'Faites le choix d\'une agence qui maîtrise WordPress et son écosystème SEO.',
      },
    ],
    faqs: [
      {
        question: 'Quels types de sites WordPress optimisez-vous ?',
        answer: 'Nous optimisons tous les types de sites WordPress : blogs, sites vitrines, boutiques en ligne WooCommerce, sites d\'actualités, portfolios, et sites sur mesure. Chaque type de site nécessite une approche SEO adaptée.',
      },
      {
        question: 'Pourquoi choisir une agence SEO spécialisée WordPress ?',
        answer: 'WordPress a ses spécificités techniques et son écosystème propre. Une agence spécialisée connaît les meilleurs plugins, les configurations optimales, et les pièges à éviter pour maximiser les performances SEO de votre site WordPress.',
      },
      {
        question: 'Comment une agence WordPress SEO peut-elle vous aider ?',
        answer: 'Nous analysons vos performances actuelles, développons une stratégie SEO personnalisée, optimisons votre contenu, construisons des liens externes de qualité, et suivons vos performances avec des rapports réguliers.',
      },
      {
        question: 'Quel plugin SEO recommandez-vous pour WordPress ?',
        answer: 'Nous travaillons principalement avec Yoast SEO et Rank Math. Le choix dépend de vos besoins : Yoast est plus simple et éprouvé, Rank Math offre plus de fonctionnalités gratuites. Nous configurons le plugin choisi de manière optimale.',
      },
      {
        question: 'Comment améliorer la vitesse de mon site WordPress ?',
        answer: 'Nous optimisons les performances via : un plugin de cache (WP Rocket, LiteSpeed), l\'optimisation des images (WebP, lazy loading), la minification CSS/JS, un CDN, et le choix d\'un hébergement performant adapté à WordPress.',
      },
    ],
    pricing: {
      tjm: '500-700€',
      description: 'Tarification selon la complexité du site WordPress et les objectifs SEO',
    },
  },
  {
    slug: 'framer',
    title: 'Agence SEO Framer',
    tag: 'Framer',
    category: 'seo',
    heroDescription: 'Expertise SEO spécialisée sur Framer, le CMS no-code puissant. Nous aidons les web designers et entrepreneurs à optimiser leur visibilité en exploitant les fonctionnalités de Framer.',
    metaTitle: 'Agence SEO Framer à Lille | Expert Référencement Framer',
    metaDescription: 'Agence SEO spécialisée Framer. Optimisez votre site Framer pour les moteurs de recherche. Audit, stratégie, accompagnement pour maximiser votre visibilité.',
    contentSection: {
      tag: 'Framer',
      title: 'Framer : Le CMS no-code performant',
      content: 'Framer permet de créer des sites web professionnels sans compétences en développement. Son éditeur drag-and-drop, ses capacités de design avancées et sa génération de code HTML performant en font un choix de plus en plus populaire. Mais un bon design ne suffit pas : il faut aussi optimiser pour le SEO.',
      bulletPoints: [
        'Éditeur visuel puissant avec génération de code propre et performant',
        'Optimisation des balises SEO (meta title, description) intégrée',
        'Sitemap automatique pour faciliter l\'indexation',
        'Responsive design natif pour le mobile-first',
        'Vitesse de chargement optimisée avec hébergement CDN',
      ],
    },
    whyChooseUs: {
      title: 'Pourquoi choisir Slashr pour votre SEO Framer ?',
      subtitle: 'Expertise Framer et SEO combinées',
      description: 'Nous maîtrisons les spécificités de Framer et ses limites en matière de SEO. Notre expertise vous permet d\'exploiter pleinement le potentiel de votre site Framer.',
      points: [
        {
          title: 'Connaissance Framer',
          description: 'Maîtrise des fonctionnalités SEO natives et des contournements pour les limitations.',
        },
        {
          title: 'Optimisation complète',
          description: 'De l\'audit technique à la stratégie de contenu, en passant par les données structurées.',
        },
        {
          title: 'Résultats mesurables',
          description: 'Suivi des performances et reporting régulier pour valider l\'efficacité des actions.',
        },
      ],
    },
    methodology: [
      {
        number: 1,
        title: 'Audit SEO Framer',
        description: 'Analyse de la configuration SEO de votre site Framer : balises, structure, performances, données structurées.',
      },
      {
        number: 2,
        title: 'Optimisation technique',
        description: 'Configuration optimale des paramètres SEO Framer, ajout de Schema.org, optimisation des images.',
      },
      {
        number: 3,
        title: 'Stratégie de contenu',
        description: 'Définition des mots-clés cibles, optimisation des pages et du maillage interne.',
      },
      {
        number: 4,
        title: 'Suivi et ajustements',
        description: 'Monitoring des positions, analyse des performances, recommandations d\'amélioration.',
      },
    ],
    benefits: [
      {
        title: 'Code propre et performant',
        description: 'Framer génère un HTML propre et optimisé pour la vitesse de chargement.',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Design first',
        description: 'Liberté créative totale sans sacrifier les performances techniques.',
        icon: 'target',
        size: 'small',
      },
      {
        title: 'Mobile-first natif',
        description: 'Responsive design intégré pour une expérience optimale sur tous les appareils.',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Hébergement CDN',
        description: 'Déploiement sur CDN mondial pour des temps de chargement rapides partout.',
        icon: 'rocket',
        size: 'small',
      },
    ],
    forYou: [
      'Vous êtes web designer et transformez vos concepts en sites interactifs',
      'Vous êtes entrepreneur ou freelance et créez rapidement des sites professionnels',
      'Vous êtes une agence marketing concevant des landing pages animées',
      'Vous êtes blogueur ou créateur de contenu souhaitant une esthétique raffinée',
      'Vous voulez un site au design unique sans dépendre d\'un développeur',
    ],
    notForYou: [
      'Vous avez besoin d\'un vrai site e-commerce avec gestion de stock',
      'Vous cherchez une solution avec 100 plugins pré-installés',
      'Vous avez une architecture ultra-complexe (intranet, multi-bases, PIM)',
      'Vous avez besoin d\'un contrôle bas niveau du code',
    ],
    comparison: {
      title: 'SEO Framer : avec ou sans agence spécialisée ?',
      without: [
        'Configuration SEO basique sans stratégie',
        'Balises meta mal optimisées ou dupliquées',
        'Pas de données structurées Schema.org',
        'Site invisible malgré un beau design',
        'Temps perdu à chercher les bonnes pratiques',
      ],
      with: [
        'Configuration SEO optimale de Framer',
        'Stratégie de mots-clés et contenu ciblée',
        'Données structurées personnalisées',
        'Visibilité maximale sur Google',
        'Expertise immédiate sur les spécificités Framer',
      ],
    },
    engagements: [
      {
        title: 'Performance',
        description: 'Nous faisons notre maximum pour réaliser vos objectifs. Nous restons 100% focus-SEO pour cette raison.',
      },
      {
        title: 'Confiance',
        description: 'Nous développons une relation de confiance et long terme ensemble.',
      },
      {
        title: 'Expérience',
        description: 'Faites le choix d\'une agence qui travaille régulièrement avec Framer et connaît ses avantages comme ses limitations.',
      },
    ],
    vigilancePoints: [
      {
        title: 'Limitations de trafic',
        description: 'Les plans Framer ont des limites de bande passante. Anticipez la croissance de votre trafic.',
      },
      {
        title: 'Fonctionnalités avancées coûteuses',
        description: 'Certaines fonctionnalités SEO avancées nécessitent des plans premium.',
      },
      {
        title: 'Courbe d\'apprentissage',
        description: 'Malgré le no-code, Framer demande un temps d\'adaptation pour maîtriser toutes ses fonctionnalités.',
      },
    ],
    faqs: [
      {
        question: 'Peut-on créer un e-commerce sur Framer ?',
        answer: 'Framer n\'est pas un CMS e-commerce natif, mais il permet d\'intégrer des solutions comme Gumroad ou Shopify pour la vente en ligne. Pour un vrai e-commerce, nous recommandons plutôt Shopify ou WooCommerce.',
      },
      {
        question: 'À qui s\'adresse Framer ?',
        answer: 'Framer s\'adresse aux designers, entrepreneurs, agences et créateurs qui veulent un site au design unique sans développement. C\'est idéal pour les sites vitrines, portfolios, landing pages et sites marketing.',
      },
      {
        question: 'Les recommandations SEO sont-elles implémentées par Slashr ?',
        answer: 'Nous intégrons les recommandations de contenu directement. Pour les modifications techniques (structure, code), un développeur Framer peut être nécessaire. Nous travaillons avec des experts partenaires si besoin.',
      },
      {
        question: 'Quel est votre modèle tarifaire pour le SEO Framer ?',
        answer: 'Nous travaillons au TJM (Taux Journalier Moyen) entre 600€ et 800€ selon la complexité du projet. Nous proposons des audits ponctuels ou un accompagnement continu.',
      },
      {
        question: 'Pourquoi le SEO est-il important sur Framer ?',
        answer: 'Un beau site ne sert à rien s\'il n\'est pas visible. Framer offre de bonnes bases SEO, mais elles doivent être configurées correctement. Notre expertise vous assure une visibilité optimale sur les moteurs de recherche.',
      },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarification selon la complexité du projet Framer',
    },
  },
  {
    slug: 'salesforce',
    title: 'Agence SEO Salesforce Commerce Cloud',
    tag: 'Salesforce',
    category: 'seo',
    heroDescription: 'Accompagnement SEO spécialisé pour les sites Salesforce Commerce Cloud (SFCC). Nous répondons aux défis techniques de cette plateforme e-commerce complexe destinée aux grandes entreprises.',
    metaTitle: 'Agence SEO Salesforce Commerce Cloud à Lille | Expert SFCC',
    metaDescription: 'Agence SEO spécialisée Salesforce Commerce Cloud. Optimisez votre plateforme SFCC pour les moteurs de recherche. Expertise technique et internationale.',
    contentSection: {
      tag: 'Salesforce',
      title: 'Salesforce Commerce Cloud : La plateforme e-commerce enterprise',
      content: 'Salesforce Commerce Cloud (anciennement DemandWare) est une plateforme e-commerce destinée aux grandes entreprises avec un large catalogue de produits et une portée internationale. La plateforme offre des fonctionnalités avancées mais présente aussi des défis SEO spécifiques.',
      bulletPoints: [
        'Gestion native des balises hreflang pour le SEO international',
        'Hébergement cloud performant avec CDN intégré',
        'Core Web Vitals optimisés nativement',
        'Gestion native du sitemap et des redirections',
        'Architecture adaptée aux grands catalogues produits',
      ],
    },
    whyChooseUs: {
      title: 'Pourquoi choisir Slashr pour votre SEO Salesforce ?',
      subtitle: 'Expertise SFCC et e-commerce international',
      description: 'Salesforce Commerce Cloud est une plateforme complexe qui nécessite une expertise spécifique. Notre équipe connaît ses forces et ses limitations pour optimiser efficacement votre visibilité.',
      points: [
        {
          title: 'Expertise SFCC',
          description: 'Connaissance approfondie de la plateforme et de ses spécificités techniques SEO.',
        },
        {
          title: 'E-commerce international',
          description: 'Maîtrise du SEO multilingue et de la gestion des hreflang natifs à SFCC.',
        },
        {
          title: 'Grands comptes',
          description: 'Habitude de travailler avec des équipes techniques enterprise et des process complexes.',
        },
      ],
    },
    methodology: [
      {
        number: 1,
        title: 'Prise des besoins',
        description: 'Analyse basée sur votre cahier des charges SEO et les spécificités de votre implémentation SFCC.',
      },
      {
        number: 2,
        title: 'Crawl & analyse',
        description: 'Vérification manuelle et par outils de votre configuration SEO Salesforce.',
      },
      {
        number: 3,
        title: 'Restitution des résultats',
        description: 'Recommandations priorisées et adaptées à votre équipe technique SFCC.',
      },
      {
        number: 4,
        title: 'Contre-recettage',
        description: 'Vérification itérative des implémentations avec votre équipe de développement.',
      },
      {
        number: 5,
        title: 'Validation finale',
        description: 'Approbation des modifications avant mise en production.',
      },
    ],
    benefits: [
      {
        title: 'Hébergement cloud natif',
        description: 'Performances web excellentes et Core Web Vitals optimisés nativement.',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'SEO international',
        description: 'Gestion native des hreflang pour les sites multilingues et multi-pays.',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Sitemap & redirections',
        description: 'Modules intégrés pour la gestion du sitemap et des redirections.',
        icon: 'code',
        size: 'small',
      },
      {
        title: 'Scalabilité',
        description: 'Architecture conçue pour les grands catalogues et le fort trafic.',
        icon: 'chart',
        size: 'small',
      },
    ],
    forYou: [
      'Vous avez un site e-commerce Salesforce Commerce Cloud',
      'Vous gérez un large catalogue de produits avec une portée internationale',
      'Vous avez une équipe technique capable d\'implémenter les recommandations',
      'Vous cherchez une expertise SEO adaptée aux spécificités de SFCC',
      'Vous avez besoin d\'optimiser le SEO multilingue avec hreflang',
    ],
    notForYou: [
      'Vous avez un petit e-commerce sans équipe technique dédiée',
      'Vous cherchez une solution SEO clé en main sans développement',
      'Vous n\'avez pas le budget pour une plateforme enterprise',
      'Vous préférez un CMS e-commerce plus accessible comme Shopify',
    ],
    comparison: {
      title: 'SEO Salesforce : avec ou sans agence spécialisée ?',
      without: [
        'Méconnaissance des spécificités techniques de SFCC',
        'Configuration hreflang approximative',
        'Données structurées non implémentées',
        'Difficulté à communiquer avec les équipes de développement',
        'Temps perdu sur une plateforme peu documentée',
      ],
      with: [
        'Expertise immédiate sur Salesforce Commerce Cloud',
        'Configuration optimale du SEO international',
        'Données structurées personnalisées',
        'Collaboration efficace avec vos équipes techniques',
        'Connaissance des problèmes courants et solutions',
      ],
    },
    enjeux: {
      tag: 'Salesforce',
      title: 'Pourquoi faire du SEO avec Salesforce ?',
      intro: 'Les principales règles du référencement naturel restent les mêmes peu importe la plateforme ou le CMS. Cependant, une agence experte Salesforce connaît déjà les problèmes techniques courants du CMS et peut aiguiller vos équipes de développeurs pour mener à bien les optimisations SEO.',
      expertiseLinks: [
        { text: 'Audit technique SFCC', href: '/seo/prestations/salesforce', highlight: 'Audit technique' },
        { text: 'SEO International', href: '/seo/prestations/international', highlight: 'International' },
        { text: 'SEO E-commerce', href: '/seo/prestations/ecommerce', highlight: 'E-commerce' },
      ],
      ctaText: 'Prendre RDV',
      ctaHref: 'https://calendly.com/slashr-anthony/30min',
    },
    vigilancePoints: [
      {
        title: 'Documentation limitée',
        description: 'Salesforce Commerce Cloud est une plateforme peu documentée, ce qui complexifie certaines optimisations.',
      },
      {
        title: 'Analyse de logs difficile',
        description: 'L\'accès aux logs serveur est complexe à mettre en place sur SFCC.',
      },
      {
        title: 'Données structurées non natives',
        description: 'Les données structurées Schema.org ne sont pas gérées nativement et nécessitent du développement custom.',
      },
      {
        title: 'Développement personnalisé',
        description: 'Toutes les fonctionnalités hors périmètre de base requièrent un développement spécifique.',
      },
    ],
    faqs: [
      {
        question: 'Salesforce Commerce Cloud est-il bon pour le SEO ?',
        answer: 'SFCC offre de bonnes bases SEO (performances, hreflang natif, sitemap) mais nécessite une expertise pour exploiter pleinement son potentiel. Certaines fonctionnalités SEO avancées demandent du développement custom.',
      },
      {
        question: 'Travaillez-vous avec les équipes de développement SFCC ?',
        answer: 'Oui, nous collaborons étroitement avec vos équipes techniques pour implémenter nos recommandations. Notre méthodologie inclut des phases de recettage pour valider les développements.',
      },
      {
        question: 'Gérez-vous le SEO international sur SFCC ?',
        answer: 'Absolument. C\'est d\'ailleurs un point fort de SFCC avec sa gestion native des hreflang. Nous optimisons la configuration multilingue et multi-pays pour maximiser votre visibilité internationale.',
      },
      {
        question: 'Pourquoi choisir une agence experte Salesforce ?',
        answer: 'Un consultant SEO expert Salesforce connaît les problèmes techniques courants du CMS et peut aiguiller vos équipes de développeurs efficacement, de la conception des recommandations jusqu\'à la phase de recette en production.',
      },
    ],
    pricing: {
      tjm: '700-900€',
      description: 'Tarification selon la complexité de l\'implémentation SFCC et la portée internationale',
    },
  },
  {
    slug: 'webflow',
    title: 'Agence SEO Webflow',
    tag: 'Webflow',
    category: 'seo',
    heroDescription: 'Un site Webflow bien conçu, c\'est bien. Un site Webflow qui ranke, c\'est mieux. Nous vous aidons à maximiser le potentiel SEO de Webflow sans extensions ni bricolage.',
    metaTitle: 'Agence SEO Webflow à Lille | Expert Référencement Webflow',
    metaDescription: 'Agence SEO spécialisée Webflow. Audit, optimisation, accompagnement pour votre site Webflow. 71% des sites Webflow ont des Core Web Vitals verts.',
    contentSection: {
      tag: 'Webflow',
      title: 'Webflow : Une machine de guerre SEO',
      content: 'Webflow peut être une véritable machine de guerre SEO grâce à des pages ultra-rapides, un code propre et un contrôle total sur le HTML et les balises. 71% des sites Webflow ont des Core Web Vitals verts. Mais le potentiel doit être correctement exploité.',
      bulletPoints: [
        'Pages ultra-rapides avec hébergement CDN mondial',
        'Code HTML propre et sémantique généré automatiquement',
        'Contrôle total sur les balises meta, title et alt',
        'CMS Collections pour gérer du contenu dynamique',
        'Intégration Schema.org personnalisable',
      ],
    },
    whyChooseUs: {
      title: 'Pourquoi choisir Slashr pour votre SEO Webflow ?',
      subtitle: 'Expertise Webflow et stratégie SEO',
      description: 'Webflow offre d\'excellentes bases SEO techniques, mais aucune optimisation stratégique native. C\'est là que notre expertise fait la différence.',
      points: [
        {
          title: 'Expertise Webflow',
          description: 'Maîtrise des fonctionnalités SEO natives et des bonnes pratiques spécifiques à Webflow.',
        },
        {
          title: 'Stratégie orientée résultats',
          description: 'Au-delà de la technique, nous définissons une vraie stratégie de contenu et de mots-clés.',
        },
        {
          title: 'Accompagnement flexible',
          description: 'Audit ponctuel, roadmap 3 mois, ou sprints dédiés selon vos besoins.',
        },
      ],
    },
    methodology: [
      {
        number: 1,
        title: 'Audit SEO Webflow',
        description: 'Analyse complète de votre configuration : CMS Collections, structure des URL, balises, données structurées.',
      },
      {
        number: 2,
        title: 'Optimisation technique',
        description: 'Configuration optimale des paramètres SEO, Schema.org personnalisé, optimisation des images.',
      },
      {
        number: 3,
        title: 'Stratégie de contenu',
        description: 'Définition des mots-clés, optimisation des CMS Collections, structuration du maillage interne.',
      },
      {
        number: 4,
        title: 'SEO international',
        description: 'Si applicable, configuration du hreflang avec Webflow Localization.',
      },
      {
        number: 5,
        title: 'Suivi et optimisation',
        description: 'Monitoring des performances, reporting régulier, ajustements continus.',
      },
    ],
    benefits: [
      {
        title: 'Performances exceptionnelles',
        description: '71% des sites Webflow ont des Core Web Vitals verts grâce au CDN et au code optimisé.',
        icon: 'zap',
        size: 'large',
      },
      {
        title: 'Pas besoin de serveur',
        description: 'Hébergement managé avec CDN mondial pour des temps de chargement rapides.',
        icon: 'globe',
        size: 'small',
      },
      {
        title: 'Polyvalent',
        description: 'Blog, e-commerce, site vitrine : Webflow s\'adapte à tous les projets.',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Mobile first',
        description: 'Design responsive natif pour une expérience optimale sur tous les appareils.',
        icon: 'user',
        size: 'small',
      },
      {
        title: 'Facilement personnalisable',
        description: 'Contrôle total sur le design et la structure sans dépendre d\'un développeur.',
        icon: 'code',
        size: 'medium',
      },
    ],
    forYou: [
      'Vous avez besoin d\'un site rapide, personnalisable, sans plugins complexes',
      'Vous voulez rédiger et structurer votre contenu sans dépendre d\'un développeur',
      'Vous envisagez une stratégie SEO long terme',
      'Vous voulez un site au design unique avec un code propre',
      'Vous cherchez une solution avec d\'excellentes performances natives',
    ],
    notForYou: [
      'Vous cherchez une solution clé en main avec 100 plugins pré-installés',
      'Vous avez une architecture ultra-complexe (intranet, multi-bases, PIM)',
      'Vous avez besoin d\'un contrôle bas niveau du code',
      'Vous avez plus de 10 000 items de contenu par type',
    ],
    comparison: {
      title: 'SEO Webflow : avec ou sans agence spécialisée ?',
      without: [
        'Site invisible aux prospects malgré un beau design',
        'Temps et énergie gaspillés quotidiennement',
        'Croissance bloquée, la concurrence prend l\'avantage',
        'Slugs mal pensés et balises manquantes ou dupliquées',
        'Contenu CMS dupliqué sans logique SEO',
      ],
      with: [
        'Trafic, notoriété et CA générés rapidement',
        'Temps libéré pour les tâches critiques de votre métier',
        'Mix acquisition maîtrisé, croissance business',
        'Architecture URL optimisée et balises parfaitement configurées',
        'Stratégie de contenu structurée pour le SEO',
      ],
    },
    enjeux: {
      tag: 'Webflow',
      title: 'Pourquoi Webflow peut être une machine de guerre SEO',
      intro: '71% des sites Webflow desktop obtiennent des Core Web Vitals optimaux. Code propre sans plugins superflus, contrôle total sur HTML, balises, redirections et URLs. Mais attention aux erreurs courantes : slugs mal structurés, balises manquantes, contenu CMS dupliqué, hreflang mal configuré.',
      expertiseLinks: [
        { text: 'Audit SEO Webflow', href: '/seo/prestations/webflow', highlight: 'Audit SEO' },
        { text: 'Optimisation CMS Collections', href: '/seo/prestations/webflow', highlight: 'CMS Collections' },
        { text: 'Schema.org sur-mesure', href: '/seo/prestations/webflow', highlight: 'Schema.org' },
      ],
      ctaText: 'Prendre RDV',
      ctaHref: 'https://calendly.com/slashr-anthony/30min',
    },
    engagements: [
      {
        title: 'Performance',
        description: 'Nous faisons notre maximum pour réaliser vos objectifs. Nous restons 100% focus-SEO pour cette raison.',
      },
      {
        title: 'Confiance',
        description: 'Nous développons une relation de confiance et long terme ensemble.',
      },
      {
        title: 'Expérience',
        description: 'Faites le choix d\'une agence habituée aux problématiques Webflow, consciente de ses avantages comme de ses limitations.',
      },
    ],
    vigilancePoints: [
      {
        title: 'Hreflang et multilingue',
        description: 'Webflow Localization existe mais le hreflang doit souvent être géré manuellement.',
      },
      {
        title: 'Pagination non SEO-friendly',
        description: 'La pagination native de Webflow n\'est pas optimisée pour le SEO par défaut.',
      },
      {
        title: 'Limitations CMS',
        description: 'Maximum 10 000 items par collection CMS, ce qui peut limiter les grands sites.',
      },
      {
        title: 'Robots.txt et noindex',
        description: 'La gestion du robots.txt et des noindex est partielle et peut nécessiter des workarounds.',
      },
      {
        title: 'Scripts personnalisés',
        description: 'Certains blocs dynamiques (Jetboost, Finsweet) peuvent perturber le crawl de Google.',
      },
    ],
    faqs: [
      {
        question: 'Webflow est-il bon pour le SEO ?',
        answer: 'Webflow possède d\'excellentes bases SEO techniques : code propre, performances natives, contrôle sur les balises. Cependant, il n\'y a aucune optimisation stratégique native : pas de maillage automatique, gestion superficielle des URLs, absence de logique sémantique intégrée. Notre expertise permet d\'exploiter pleinement ce potentiel.',
      },
      {
        question: 'Le SEO international est-il possible sur Webflow ?',
        answer: 'Oui, via Webflow Localization ou des outils tiers comme Weglot. Cependant, le hreflang doit être géré manuellement et certaines architectures demandent une attention particulière. Nous vous accompagnons pour une configuration correcte.',
      },
      {
        question: 'Pouvez-vous intervenir pendant une refonte sur Webflow ?',
        answer: 'C\'est optimal ! Nous intégrons le SEO dès la conception des maquettes, planifions les URL et structurons le contenu pour éviter les erreurs classiques post-lancement.',
      },
      {
        question: 'Je n\'ai pas de développeur Webflow, pouvez-vous implémenter ?',
        answer: 'Oui, nous travaillons avec des experts Webflow partenaires pour les modifications structurelles, scripts et contournements des limitations CMS.',
      },
      {
        question: 'Comment fonctionne votre accompagnement Webflow ?',
        answer: 'Nous proposons des modèles flexibles : audit ponctuel pour un état des lieux, roadmap 3 mois pour une stratégie complète, suivi mensuel ou sprints dédiés. Toujours en collaboration avec vos équipes.',
      },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarification selon la complexité du projet Webflow',
    },
  },
];

// Fonctions d'accès aux données
export function getAllPrestationSlugs(): string[] {
  return prestationsData.map((p) => p.slug);
}

export function getPrestationBySlug(slug: string): Prestation | undefined {
  return prestationsData.find((p) => p.slug === slug);
}

export function getAllPrestations(): Prestation[] {
  return prestationsData;
}

export function getRelatedPrestations(currentSlug: string): Prestation[] {
  const current = getPrestationBySlug(currentSlug);
  if (!current?.otherExpertises) return [];

  return current.otherExpertises
    .map((exp) => {
      const slug = exp.href.replace('/prestations/', '').replace('/seo/prestations/', '');
      return getPrestationBySlug(slug) || getSEOPrestationBySlug(slug);
    })
    .filter((p): p is Prestation => p !== undefined);
}

// Fonctions pour les prestations SEO (route /seo/prestations/[slug])
export function getSEOPrestations(): Prestation[] {
  return prestationsData.filter((p) => p.category === 'seo');
}

export function getSEOPrestationSlugs(): string[] {
  return getSEOPrestations().map((p) => p.slug);
}

export function getSEOPrestationBySlug(slug: string): Prestation | undefined {
  return prestationsData.find((p) => p.slug === slug && p.category === 'seo');
}

// Fonctions pour les prestations Ads (route /ads/prestations/[slug])
export function getAdsPrestations(): Prestation[] {
  return prestationsData.filter((p) => p.category === 'ads');
}

export function getAdsPrestationSlugs(): string[] {
  return getAdsPrestations().map((p) => p.slug);
}

export function getAdsPrestationBySlug(slug: string): Prestation | undefined {
  return prestationsData.find((p) => p.slug === slug && p.category === 'ads');
}
