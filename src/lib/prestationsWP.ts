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
export type PrestationCategory = 'seo' | 'ads' | 'social' | 'transverse' | 'other';

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
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
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
    slug: 'google-shopping',
    title: 'Agence Google Shopping',
    tag: 'Shopping',
    category: 'ads',
    heroDescription: "Vous vendez en ligne ? Google Shopping est le levier d'acquisition le plus rentable pour les e-commerçants. Nos experts optimisent vos flux produits et campagnes pour maximiser votre ROAS.",
    metaTitle: 'Agence Google Shopping | Expert Flux Produits & Performance Max',
    metaDescription: 'Agence Google Shopping à Lille. Optimisation flux produits, campagnes Shopping et Performance Max. Maximisez votre ROAS e-commerce avec nos experts.',
    contentSection: {
      tag: 'Google Shopping',
      title: 'Le levier incontournable du e-commerce',
      content: "Google Shopping affiche vos produits directement dans les résultats de recherche avec photo, prix et avis. C'est le format le plus performant pour les e-commerçants avec des taux de conversion jusqu'à 30% supérieurs aux annonces textuelles classiques.",
      bulletPoints: [
        "Visibilité premium : Vos produits en haut de Google avec photos et prix.",
        "Intent d'achat fort : Les utilisateurs Shopping sont prêts à acheter.",
        "ROAS élevé : Le format le plus rentable pour le e-commerce.",
        "Performance Max : Diffusion automatique sur Search, Display, YouTube, Gmail.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi Google Shopping est essentiel',
      intro: "Google Shopping représente souvent 60 à 80% du chiffre d'affaires Ads des e-commerçants. Un flux produit mal optimisé, c'est des milliers d'euros de ventes perdues chaque mois.",
      expertiseLinks: [
        { text: 'Flux produit optimisé', href: '#', highlight: 'Titres, descriptions, images qui convertissent' },
        { text: 'Segmentation avancée', href: '#', highlight: 'Campagnes par catégorie, marge, saisonnalité' },
        { text: 'Performance Max', href: '#', highlight: 'IA Google pour maximiser les conversions' },
        { text: 'Feed Management', href: '#', highlight: 'Automatisation et enrichissement du catalogue' },
      ],
      ctaText: 'Auditer mon flux produit',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Expertise e-commerce complète',
      subtitle: 'SEO + Shopping = domination SERP',
      description: "Notre double expertise SEO et Ads nous permet d'optimiser votre présence sur l'ensemble des résultats Google : SEO pour le trafic organique, Shopping pour les conversions immédiates.",
      points: [
        {
          title: 'Experts flux produits',
          description: "Optimisation des titres, descriptions, images et attributs pour maximiser la visibilité et le CTR.",
        },
        {
          title: 'Stratégie ROAS-first',
          description: "Segmentation par rentabilité, ajustement des enchères par produit, focus sur les best-sellers.",
        },
        {
          title: 'Synergies SEO/Shopping',
          description: "Les données Shopping enrichissent la stratégie SEO produit et inversement.",
        },
      ],
    },
    forYou: [
      "Vous avez un site e-commerce avec plus de 100 produits",
      "Votre ROAS Shopping actuel est en dessous de vos objectifs",
      "Vous voulez scaler vos ventes en ligne rapidement",
      "Votre flux produit n'est pas optimisé ou génère des refus",
    ],
    notForYou: [
      "Vous n'avez pas de site e-commerce transactionnel",
      "Votre catalogue compte moins de 20 produits",
      "Vous n'avez pas de budget média minimum de 1000€/mois",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit flux & compte',
        description: "Analyse de votre flux produit, structure de compte et performances actuelles.",
      },
      {
        number: 2,
        title: 'Optimisation flux',
        description: "Enrichissement des titres, descriptions, images. Correction des refus Merchant Center.",
      },
      {
        number: 3,
        title: 'Restructuration campagnes',
        description: "Segmentation par catégorie, marge, performance. Setup Performance Max optimisé.",
      },
      {
        number: 4,
        title: 'Optimisation continue',
        description: "Ajustement des enchères, exclusion des produits non rentables, tests créatifs.",
      },
    ],
    benefits: [
      {
        title: 'Expertise flux produits e-commerce',
        description: "Optimisation complète de votre feed : titres enrichis, descriptions SEO, images haute qualité, attributs Google. Votre catalogue devient une machine à conversions.",
        highlight: 'flux produits',
        icon: 'clipboard',
        size: 'large',
      },
      {
        title: 'Performance Max',
        description: "Configuration avancée des campagnes Performance Max avec assets optimisés et signaux d'audience précis.",
        highlight: 'Performance Max',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Segmentation rentabilité',
        description: "Campagnes segmentées par marge, catégorie et performance pour maximiser le ROAS global.",
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Feed Management',
        description: "Automatisation des mises à jour, règles de transformation, enrichissement dynamique du catalogue.",
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Merchant Center',
        description: "Résolution des refus, optimisation du score qualité, setup des promotions et avis produits.",
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'ROAS maximisé sur l\'ensemble du catalogue',
        description: "Focus sur les produits rentables, exclusion des gouffres à budget, stratégie d'enchères intelligente pour chaque segment.",
        highlight: 'ROAS maximisé',
        icon: 'target',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Qualité du flux produit',
        description: "Un flux mal optimisé = produits refusés + mauvais Quality Score + CPC élevés. L'optimisation du feed est la base de tout.",
      },
      {
        title: 'Données structurées',
        description: "Google Shopping puise aussi dans les données structurées de votre site. Schema.org Product doit être parfait.",
      },
      {
        title: 'Rentabilité par produit',
        description: "Tous vos produits ne sont pas rentables en Shopping. Identifier et exclure les gouffres à budget est crucial.",
      },
    ],
    comparison: {
      title: 'Google Shopping : seul vs avec une agence',
      without: [
        'Flux produit basique généré par le CMS',
        'Titres non optimisés pour la recherche',
        'Une seule campagne pour tout le catalogue',
        'Pas de segmentation par rentabilité',
        'Refus Merchant Center non résolus',
      ],
      with: [
        'Flux enrichi avec titres SEO optimisés',
        'Images retravaillées pour maximiser le CTR',
        'Campagnes segmentées par catégorie et marge',
        'Exclusion automatique des produits non rentables',
        'Merchant Center propre, 0 refus',
      ],
    },
    faqs: [
      {
        question: 'Quel budget minimum pour Google Shopping ?',
        answer: "Nous recommandons un minimum de 1000€/mois de budget média pour avoir des données significatives et optimiser efficacement. En dessous, le volume est insuffisant pour tirer des conclusions fiables.",
      },
      {
        question: 'Quelle différence entre Shopping Standard et Performance Max ?',
        answer: "Shopping Standard vous donne un contrôle total sur les enchères et la diffusion, uniquement sur l'onglet Shopping. Performance Max utilise l'IA Google pour diffuser sur tous les canaux (Search, Display, YouTube, Gmail) et optimise automatiquement vers les conversions. Nous recommandons souvent une combinaison des deux.",
      },
      {
        question: 'Mon flux est généré automatiquement par mon CMS, c\'est suffisant ?',
        answer: "Non. Les flux générés par défaut par Shopify, Prestashop ou WooCommerce sont basiques : titres produits bruts, descriptions incomplètes, pas d'attributs enrichis. Une optimisation manuelle ou via règles de transformation est indispensable pour performer.",
      },
      {
        question: 'Combien de temps pour voir des résultats ?',
        answer: "L'optimisation du flux produit a un impact immédiat (24-48h). Pour les performances de campagne, comptez 2-4 semaines de phase d'apprentissage puis une amélioration continue sur 2-3 mois.",
      },
      {
        question: 'Gérez-vous aussi le SEO des pages produits ?',
        answer: "Oui ! Notre double expertise SEO/Ads nous permet d'optimiser vos pages produits pour le référencement naturel ET pour Shopping. Les synergies sont nombreuses : données structurées, titres optimisés, contenu enrichi.",
      },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'SEO E-commerce', href: '/seo/prestations/ecommerce' },
      { name: 'SEO Prestashop', href: '/seo/prestations/prestashop' },
      { name: 'SEO Shopify', href: '/seo/prestations/shopify' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Frais de gestion + budget média selon volume catalogue',
    },
  },
  {
    slug: 'social-ads',
    title: 'Agence Social Ads',
    tag: 'Social Ads',
    category: 'social',
    heroDescription: "Touchez votre audience sur les réseaux sociaux. Notre agence Social Ads crée et gère vos campagnes publicitaires sur Meta, LinkedIn et TikTok pour générer des leads qualifiés et booster votre visibilité.",
    metaTitle: 'Agence Social Ads à Lille | Meta, LinkedIn, TikTok | Slashr',
    metaDescription: 'Agence Social Ads à Lille. Création et gestion de campagnes publicitaires sur les réseaux sociaux : Facebook Ads, Instagram Ads, LinkedIn Ads, TikTok Ads.',
    contentSection: {
      tag: 'Social Ads',
      title: 'Touchez votre audience où elle se trouve',
      content: "Les réseaux sociaux rassemblent des milliards d'utilisateurs chaque jour. Les Social Ads permettent de cibler précisément votre audience idéale grâce aux données riches de ces plateformes : centres d'intérêt, comportements, données démographiques.",
      bulletPoints: [
        "Ciblage précis : Touchez exactement les personnes susceptibles d'acheter.",
        "Formats engageants : Vidéos, carrousels, stories qui captent l'attention.",
        "Remarketing puissant : Reciblez les visiteurs et paniers abandonnés.",
        "Multi-plateforme : Meta, LinkedIn, TikTok selon votre audience.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en Social Ads',
      intro: "Les Social Ads permettent de toucher des audiences que Google Ads ne peut pas atteindre. C'est le levier idéal pour la notoriété, la génération de leads et le remarketing.",
      expertiseLinks: [
        { text: 'Meta Ads', href: '/ads/social/facebook-ads', highlight: 'Facebook & Instagram Ads' },
        { text: 'LinkedIn Ads', href: '/ads/social/linkedin-ads', highlight: 'B2B & Décideurs' },
        { text: 'Remarketing', href: '#', highlight: 'Reciblage multi-plateforme' },
        { text: 'Création contenu', href: '#', highlight: 'Visuels & vidéos performants' },
      ],
      ctaText: 'Lancer mes Social Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Expertise multi-plateforme',
      subtitle: 'SEA + Social = acquisition complète',
      description: "Notre expertise couvre l'ensemble des canaux d'acquisition payante. Combiner Google Ads et Social Ads permet de toucher votre audience à chaque étape de son parcours d'achat.",
      points: [
        {
          title: 'Stratégie cross-plateforme',
          description: "Définition des plateformes pertinentes selon votre cible et vos objectifs business.",
        },
        {
          title: 'Création de contenu',
          description: "Production de visuels et vidéos adaptés aux codes et formats de chaque réseau social.",
        },
        {
          title: 'Optimisation continue',
          description: "A/B testing, analyse des audiences et ajustement des campagnes pour maximiser le ROI.",
        },
      ],
    },
    forYou: [
      "Vous voulez développer votre notoriété sur les réseaux sociaux",
      "Vous ciblez une audience B2C ou B2B précise",
      "Vous souhaitez générer des leads qualifiés",
      "Vous voulez recibler les visiteurs de votre site",
    ],
    notForYou: [
      "Vous n'avez pas de présence sur les réseaux sociaux",
      "Votre cible n'utilise pas les réseaux sociaux",
      "Vous n'avez pas de budget média minimum de 500€/mois",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Stratégie',
        description: "Analyse de votre audience, définition des objectifs et choix des plateformes adaptées.",
      },
      {
        number: 2,
        title: 'Setup & Tracking',
        description: "Configuration des pixels, API Conversions et audiences personnalisées.",
      },
      {
        number: 3,
        title: 'Création des campagnes',
        description: "Production du contenu, rédaction des textes et paramétrage des ciblages.",
      },
      {
        number: 4,
        title: 'Optimisation & Scaling',
        description: "A/B testing, optimisation des audiences et montée en puissance progressive.",
      },
    ],
    benefits: [
      {
        title: 'Ciblage ultra-précis sur les réseaux sociaux',
        description: "Touchez votre audience idéale grâce aux données riches : centres d'intérêt, comportements, données démographiques, fonction professionnelle.",
        highlight: 'Ciblage ultra-précis',
        icon: 'target',
        size: 'large',
      },
      {
        title: 'Audiences personnalisées',
        description: "Créez des audiences sur mesure à partir de vos clients existants, visiteurs du site ou abonnés.",
        icon: 'user',
        size: 'medium',
      },
      {
        title: 'Formats engageants',
        description: "Vidéos, carrousels, stories, reels... Les formats natifs captent l'attention.",
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'Mesure des performances',
        description: "Suivi précis des conversions et optimisation continue pour atteindre vos objectifs.",
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Remarketing puissant',
        description: "Reciblez les visiteurs, paniers abandonnés et leads non convertis.",
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Visibilité multi-plateforme complète',
        description: "Déployez vos campagnes sur l'ensemble des réseaux sociaux pour toucher votre audience partout.",
        highlight: 'multi-plateforme',
        icon: 'globe',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Contenu non adapté',
        description: "Les Social Ads ne fonctionnent pas sans contenu de qualité. Visuels et vidéos doivent être adaptés aux codes de chaque plateforme.",
      },
      {
        title: 'Mauvaise définition d\'audience',
        description: "Un ciblage trop large dilue le budget, trop restreint limite le volume. Les tests sont essentiels.",
      },
      {
        title: 'Tracking mal configuré',
        description: "Sans pixels et API Conversions correctement configurés, impossible d'optimiser les campagnes.",
      },
    ],
    comparison: {
      title: 'Social Ads : seul vs avec une agence',
      without: [
        'Ciblage basique par centres d\'intérêt',
        'Visuels non optimisés pour chaque plateforme',
        'Pas d\'audiences lookalike configurées',
        'Tracking incomplet sans API Conversions',
        'Pas de stratégie de remarketing',
      ],
      with: [
        'Audiences personnalisées et lookalikes affinées',
        'Création de contenu adapté aux codes Social',
        'Setup technique complet (pixels + CAPI)',
        'Stratégie remarketing cross-plateforme',
        'A/B testing et optimisation continue',
      ],
    },
    faqs: [
      {
        question: 'Quelle plateforme choisir pour mes Social Ads ?',
        answer: "Le choix dépend de votre cible : Meta Ads (Facebook/Instagram) pour le B2C et l'e-commerce, LinkedIn Ads pour le B2B et les décideurs, TikTok Ads pour la Gen Z et les Millennials. Notre agence vous conseille sur les plateformes les plus pertinentes.",
      },
      {
        question: 'Quel budget minimum pour les Social Ads ?',
        answer: "Comptez minimum 500€/mois pour Meta et TikTok, 1500€/mois pour LinkedIn (CPC plus élevé en B2B). Nous recommandons de commencer petit, tester, puis scaler les campagnes qui performent.",
      },
      {
        question: 'Créez-vous les visuels et vidéos ?',
        answer: "Oui, notre agence propose la création de visuels statiques, carrousels et l'adaptation de vidéos pour vos campagnes Social Ads.",
      },
      {
        question: "Qu'est-ce que l'API Conversions (CAPI) ?",
        answer: "L'API Conversions envoie les données de conversion directement depuis votre serveur vers les plateformes. C'est essentiel avec les restrictions iOS pour mesurer correctement les performances.",
      },
    ],
    otherExpertises: [
      { name: 'Facebook Ads', href: '/ads/social/facebook-ads' },
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Google Shopping', href: '/ads/sea/google-shopping' },
    ],
    pricing: {
      tjm: '500-700€',
      description: 'Frais de gestion + budget média + création contenu',
    },
  },
  {
    slug: 'facebook-ads',
    title: 'Agence Facebook Ads',
    tag: 'Facebook Ads',
    category: 'social',
    heroDescription: "Facebook et Instagram rassemblent 40 millions d'utilisateurs en France. Notre agence Meta Ads crée des campagnes publicitaires performantes pour générer des leads et des ventes.",
    metaTitle: 'Agence Facebook Ads & Instagram Ads à Lille | Meta Ads | Slashr',
    metaDescription: 'Agence Facebook Ads à Lille. Création et gestion de campagnes Meta Ads (Facebook & Instagram). Génération de leads, e-commerce et notoriété.',
    contentSection: {
      tag: 'Meta Ads',
      title: 'La puissance de l\'écosystème Meta',
      content: "Meta Ads (Facebook Ads + Instagram Ads) offre l'un des ciblages les plus précis du marché grâce aux données comportementales de ses utilisateurs. C'est le levier idéal pour le B2C, l'e-commerce et la génération de leads.",
      bulletPoints: [
        "40 millions d'utilisateurs en France sur Facebook et Instagram.",
        "Ciblage par centres d'intérêt, comportements et données démographiques.",
        "Formats variés : image, vidéo, carrousel, stories, reels.",
        "Catalogue produits et publicités dynamiques pour l'e-commerce.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en Meta Ads',
      intro: "Meta Ads permet de toucher massivement votre audience avec des formats engageants. Le remarketing et les audiences lookalike en font un levier incontournable pour scaler votre acquisition.",
      expertiseLinks: [
        { text: 'Facebook Ads', href: '#', highlight: 'Acquisition & Leads' },
        { text: 'Instagram Ads', href: '#', highlight: 'Notoriété & Engagement' },
        { text: 'Catalogue dynamique', href: '#', highlight: 'E-commerce & Remarketing' },
        { text: 'Audiences lookalike', href: '#', highlight: 'Scaling intelligent' },
      ],
      ctaText: 'Lancer mes Meta Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Experts Meta Ads certifiés',
      subtitle: 'Créativité + Data = Performance',
      description: "Notre expertise Meta Ads combine création de contenu engageant et optimisation data-driven. Nous maximisons votre ROAS grâce à des stratégies d'audience avancées.",
      points: [
        {
          title: 'Création de contenu',
          description: "Visuels et vidéos adaptés aux codes Facebook et Instagram pour maximiser l'engagement.",
        },
        {
          title: 'Audiences avancées',
          description: "Lookalikes, custom audiences, retargeting : toutes les stratégies pour toucher les bonnes personnes.",
        },
        {
          title: 'Setup technique complet',
          description: "Pixel Facebook, API Conversions, catalogue produits : un tracking précis pour optimiser.",
        },
      ],
    },
    forYou: [
      "Vous ciblez une audience B2C grand public",
      "Vous avez un site e-commerce à promouvoir",
      "Vous voulez générer des leads qualifiés",
      "Vous souhaitez développer votre notoriété de marque",
    ],
    notForYou: [
      "Votre cible est exclusivement B2B senior",
      "Vous n'avez pas de visuels ou vidéos à exploiter",
      "Vous n'avez pas de budget minimum de 500€/mois",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Stratégie',
        description: "Analyse de votre compte, définition des audiences et objectifs de campagne.",
      },
      {
        number: 2,
        title: 'Setup technique',
        description: "Configuration du pixel, API Conversions, catalogue produits si e-commerce.",
      },
      {
        number: 3,
        title: 'Création & Lancement',
        description: "Production des visuels, rédaction des textes et lancement des campagnes.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "A/B testing créatifs, optimisation des audiences et scaling progressif.",
      },
    ],
    benefits: [
      {
        title: 'Audience massive et ciblage précis',
        description: "40 millions d'utilisateurs en France avec un ciblage par centres d'intérêt, comportements et données démographiques ultra-précis.",
        highlight: 'ciblage précis',
        icon: 'target',
        size: 'large',
      },
      {
        title: 'Formats créatifs variés',
        description: "Image, vidéo, carrousel, stories, reels : des formats natifs qui captent l'attention.",
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'Catalogue dynamique',
        description: "Publicités produits automatiques pour l'e-commerce avec remarketing des paniers abandonnés.",
        icon: 'code',
        size: 'medium',
      },
      {
        title: 'Audiences lookalike',
        description: "Trouvez de nouveaux clients ressemblant à vos meilleurs acheteurs pour scaler efficacement.",
        icon: 'user',
        size: 'medium',
      },
      {
        title: 'Instagram inclus',
        description: "Diffusion automatique sur Instagram pour toucher une audience complémentaire.",
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'ROI mesurable et optimisable',
        description: "Tracking précis des conversions grâce au pixel et à l'API Conversions pour optimiser chaque euro investi.",
        highlight: 'ROI mesurable',
        icon: 'chart',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Créatifs qui ne performent pas',
        description: "Sur Meta, le créatif fait 80% de la performance. Des visuels génériques ne génèrent pas de résultats.",
      },
      {
        title: 'Tracking incomplet',
        description: "Sans pixel et API Conversions correctement configurés, l'algorithme Meta ne peut pas optimiser.",
      },
      {
        title: 'Audiences trop larges',
        description: "Cibler 'tout le monde' dilue le budget. Mieux vaut des audiences précises et des lookalikes.",
      },
    ],
    comparison: {
      title: 'Meta Ads : seul vs avec une agence',
      without: [
        'Visuels non optimisés pour les formats Meta',
        'Ciblage basique sans audiences avancées',
        'Pixel seul sans API Conversions',
        'Pas de stratégie de remarketing',
        'Budget gaspillé sur des audiences trop larges',
      ],
      with: [
        'Créatifs performants adaptés aux codes Meta',
        'Audiences lookalike et custom audiences affinées',
        'Setup technique complet (Pixel + CAPI)',
        'Remarketing dynamique sur catalogue',
        'A/B testing et optimisation continue',
      ],
    },
    faqs: [
      {
        question: 'Quelle différence entre Facebook Ads et Instagram Ads ?',
        answer: "Ils font partie de la même plateforme Meta Ads. Vous pouvez diffuser sur les deux simultanément ou choisir. Instagram touche une audience plus jeune et plus visuelle, Facebook une audience plus large et diversifiée.",
      },
      {
        question: 'Quel budget minimum pour Meta Ads ?',
        answer: "Comptez minimum 500€/mois pour tester et apprendre. Pour des résultats significatifs et pouvoir scaler, 1500-2000€/mois est recommandé.",
      },
      {
        question: "Pourquoi l'API Conversions est-elle importante ?",
        answer: "Avec les restrictions iOS (App Tracking Transparency), le pixel seul ne capte plus toutes les conversions. L'API Conversions envoie les données côté serveur pour un tracking plus fiable.",
      },
      {
        question: 'Gérez-vous aussi le community management ?',
        answer: "Notre expertise se concentre sur les Meta Ads (publicité payante). Pour le community management (gestion des réseaux sociaux organique), nous pouvons vous recommander des partenaires.",
      },
    ],
    otherExpertises: [
      { name: 'Social Ads', href: '/ads/social/social-ads' },
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Google Shopping', href: '/ads/sea/google-shopping' },
    ],
    pricing: {
      tjm: '500-700€',
      description: 'Frais de gestion + budget média + création contenu',
    },
  },
  {
    slug: 'linkedin-ads',
    title: 'Agence LinkedIn Ads',
    tag: 'LinkedIn Ads',
    category: 'social',
    heroDescription: "LinkedIn est LA plateforme B2B pour toucher les décideurs. Notre agence LinkedIn Ads crée des campagnes ciblées par fonction, secteur et entreprise pour générer des leads qualifiés.",
    metaTitle: 'Agence LinkedIn Ads à Lille | Publicité B2B | Slashr',
    metaDescription: 'Agence LinkedIn Ads à Lille. Création et gestion de campagnes publicitaires B2B. Ciblage par fonction, secteur, entreprise. Génération de leads qualifiés.',
    contentSection: {
      tag: 'LinkedIn Ads',
      title: 'Le levier B2B par excellence',
      content: "LinkedIn rassemble 25 millions de professionnels en France. C'est la seule plateforme qui permet de cibler précisément par fonction, secteur d'activité, taille d'entreprise et compétences. Idéal pour le B2B et la génération de leads qualifiés.",
      bulletPoints: [
        "25 millions de professionnels en France sur LinkedIn.",
        "Ciblage unique : fonction, secteur, entreprise, ancienneté.",
        "Formats B2B : Sponsored Content, InMail, Lead Gen Forms.",
        "Leads ultra-qualifiés avec formulaires pré-remplis.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en LinkedIn Ads',
      intro: "LinkedIn Ads a un coût par clic plus élevé que les autres plateformes, mais la qualité des leads B2B compense largement. C'est le levier incontournable pour toucher les décideurs.",
      expertiseLinks: [
        { text: 'Sponsored Content', href: '#', highlight: 'Posts sponsorisés dans le feed' },
        { text: 'Lead Gen Forms', href: '#', highlight: 'Formulaires pré-remplis' },
        { text: 'InMail sponsorisé', href: '#', highlight: 'Messages directs ciblés' },
        { text: 'ABM', href: '#', highlight: 'Account-Based Marketing' },
      ],
      ctaText: 'Lancer mes LinkedIn Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Experts LinkedIn Ads B2B',
      subtitle: 'Ciblage précis = Leads qualifiés',
      description: "Notre expertise LinkedIn Ads permet de toucher exactement les décideurs que vous ciblez. Nous optimisons chaque campagne pour maximiser le volume de leads qualifiés tout en maîtrisant le coût par lead.",
      points: [
        {
          title: 'Ciblage chirurgical',
          description: "Fonction, secteur, entreprise, ancienneté : nous ciblons précisément vos prospects idéaux.",
        },
        {
          title: 'Lead Gen optimisé',
          description: "Formulaires pré-remplis pour maximiser le taux de conversion et la qualité des leads.",
        },
        {
          title: 'Stratégie ABM',
          description: "Account-Based Marketing pour cibler des entreprises spécifiques avec des messages personnalisés.",
        },
      ],
    },
    forYou: [
      "Vous vendez en B2B à des décideurs",
      "Vous proposez des services aux entreprises",
      "Vous recrutez des profils qualifiés",
      "Vous voulez générer des leads B2B qualifiés",
    ],
    notForYou: [
      "Votre cible est exclusivement B2C",
      "Vous vendez des produits grand public",
      "Vous n'avez pas de budget minimum de 1500€/mois",
    ],
    methodology: [
      {
        number: 1,
        title: 'Définition des cibles',
        description: "Identification des personas, fonctions et entreprises cibles pour vos campagnes.",
      },
      {
        number: 2,
        title: 'Setup & Tracking',
        description: "Configuration du LinkedIn Insight Tag et des événements de conversion.",
      },
      {
        number: 3,
        title: 'Création des campagnes',
        description: "Rédaction des messages, création des visuels et configuration des Lead Gen Forms.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "A/B testing, affinage des audiences et optimisation du coût par lead.",
      },
    ],
    benefits: [
      {
        title: 'Ciblage B2B inégalé',
        description: "Le seul réseau qui permet de cibler par fonction, secteur, entreprise, ancienneté et compétences. Touchez exactement les décideurs que vous visez.",
        highlight: 'Ciblage B2B',
        icon: 'target',
        size: 'large',
      },
      {
        title: 'Lead Gen Forms',
        description: "Formulaires pré-remplis avec les données LinkedIn : taux de conversion supérieur et leads qualifiés.",
        icon: 'clipboard',
        size: 'medium',
      },
      {
        title: 'InMail sponsorisé',
        description: "Messages directs dans la boîte de réception LinkedIn pour un contact personnalisé.",
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Account-Based Marketing',
        description: "Ciblez des entreprises spécifiques pour des campagnes hyper-personnalisées.",
        icon: 'user',
        size: 'medium',
      },
      {
        title: 'Audience professionnelle',
        description: "25 millions de professionnels en France, des décideurs aux opérationnels.",
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'ROI B2B mesurable',
        description: "Tracking des conversions et mesure précise du coût par lead pour optimiser votre investissement.",
        highlight: 'ROI B2B',
        icon: 'chart',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'CPC élevé',
        description: "LinkedIn Ads a des coûts par clic plus élevés que Meta ou Google. Le budget doit être suffisant pour générer des résultats.",
      },
      {
        title: 'Audiences trop restreintes',
        description: "Un ciblage trop précis limite le volume. Il faut trouver l'équilibre entre qualité et quantité.",
      },
      {
        title: 'Contenu non adapté au B2B',
        description: "Le ton et les messages doivent être professionnels et apporter de la valeur aux décideurs.",
      },
    ],
    comparison: {
      title: 'LinkedIn Ads : seul vs avec une agence',
      without: [
        'Ciblage générique par secteur uniquement',
        'Pas de stratégie Lead Gen Forms',
        'Messages non optimisés pour le B2B',
        'Pas de stratégie ABM',
        'Budget gaspillé sur des audiences mal définies',
      ],
      with: [
        'Ciblage chirurgical par fonction et entreprise',
        'Lead Gen Forms optimisés pour la conversion',
        'Contenu B2B qui engage les décideurs',
        'Stratégie ABM pour les comptes clés',
        'Optimisation continue du coût par lead',
      ],
    },
    faqs: [
      {
        question: 'Quel budget minimum pour LinkedIn Ads ?',
        answer: "LinkedIn Ads est plus cher que les autres plateformes (CPC de 5-15€). Comptez minimum 1500€/mois de budget média pour avoir des résultats significatifs et pouvoir optimiser.",
      },
      {
        question: "Qu'est-ce que les Lead Gen Forms ?",
        answer: "Les Lead Gen Forms sont des formulaires pré-remplis avec les données du profil LinkedIn. L'utilisateur n'a qu'à cliquer pour envoyer ses informations, ce qui maximise le taux de conversion.",
      },
      {
        question: 'LinkedIn Ads vs Google Ads pour le B2B ?',
        answer: "Google Ads capture une intention de recherche (l'utilisateur cherche activement). LinkedIn Ads permet de cibler des profils spécifiques même s'ils ne cherchent pas. Les deux sont complémentaires pour une stratégie B2B complète.",
      },
      {
        question: "Qu'est-ce que l'ABM (Account-Based Marketing) ?",
        answer: "L'ABM consiste à cibler des entreprises spécifiques avec des campagnes personnalisées. LinkedIn Ads permet de cibler par nom d'entreprise, idéal pour les cycles de vente longs en B2B.",
      },
    ],
    otherExpertises: [
      { name: 'Social Ads', href: '/ads/social/social-ads' },
      { name: 'Facebook Ads', href: '/ads/social/facebook-ads' },
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Google Shopping', href: '/ads/sea/google-shopping' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Frais de gestion + budget média (minimum 1500€/mois recommandé)',
    },
  },
  // =====================================================
  // INSTAGRAM ADS
  // =====================================================
  {
    slug: 'instagram-ads',
    title: 'Agence Instagram Ads',
    tag: 'Instagram Ads',
    category: 'social',
    heroDescription: "Instagram rassemble plus de 26 millions d'utilisateurs actifs en France. Notre agence Instagram Ads crée des campagnes publicitaires visuelles et engageantes pour toucher votre audience et générer des résultats concrets.",
    metaTitle: 'Agence Instagram Ads à Lille | Publicité Instagram | Slashr',
    metaDescription: 'Agence Instagram Ads à Lille. Création et gestion de campagnes publicitaires sur Instagram : Stories, Reels, carrousels. Experts en publicités visuelles pour maximiser votre engagement et vos conversions.',
    contentSection: {
      tag: 'Instagram Ads',
      title: "Captez l'attention avec des visuels qui convertissent",
      content: "Instagram est la plateforme du visuel par excellence. Les utilisateurs y passent en moyenne 30 minutes par jour, scrollant des contenus inspirants. Les Instagram Ads permettent de capter cette attention avec des formats natifs et engageants qui s'intègrent naturellement dans le feed.",
      bulletPoints: [
        "Formats immersifs : Stories, Reels, carrousels qui captent l'attention.",
        "Ciblage précis : Centres d'intérêt, comportements, audiences similaires.",
        "Synergie Meta : Gestion unifiée avec Facebook pour optimiser les performances.",
        "E-commerce natif : Shopping intégré pour transformer l'inspiration en achat.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en Instagram Ads',
      intro: "Instagram est devenu un canal incontournable pour les marques qui veulent développer leur notoriété et générer des ventes. La plateforme offre un engagement supérieur aux autres réseaux sociaux, particulièrement auprès des 18-35 ans.",
      expertiseLinks: [
        { text: 'Stories Ads', href: '#', highlight: 'Format plein écran immersif' },
        { text: 'Reels Ads', href: '#', highlight: 'Vidéo courte et virale' },
        { text: 'Shopping Ads', href: '#', highlight: 'E-commerce intégré' },
        { text: 'Facebook Ads', href: '/ads/social/facebook-ads', highlight: 'Synergie Meta complète' },
      ],
      ctaText: 'Lancer mes Instagram Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Expertise créative et performance',
      subtitle: 'Le visuel au service de vos objectifs',
      description: "Notre agence combine expertise créative et maîtrise technique pour créer des campagnes Instagram Ads qui se démarquent. Nous produisons des visuels adaptés aux codes de la plateforme et optimisons en continu pour maximiser vos résultats.",
      points: [
        {
          title: 'Création de contenu',
          description: "Production de visuels et vidéos adaptés aux formats Instagram : Stories, Reels, carrousels.",
        },
        {
          title: 'Stratégie audience',
          description: "Ciblage précis et création d'audiences personnalisées pour toucher vos prospects idéaux.",
        },
        {
          title: 'Optimisation continue',
          description: "Tests A/B, analyse des performances et ajustement des campagnes pour maximiser le ROI.",
        },
      ],
    },
    forYou: [
      "Votre marque cible les 18-45 ans",
      "Vous avez des produits ou services visuels à promouvoir",
      "Vous souhaitez développer votre notoriété et votre engagement",
      "Vous avez une stratégie e-commerce et voulez utiliser Instagram Shopping",
    ],
    notForYou: [
      "Votre cible est principalement B2B (préférez LinkedIn Ads)",
      "Vous n'avez pas de contenu visuel à mettre en avant",
      "Votre audience a plus de 55 ans principalement",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Stratégie',
        description: "Analyse de votre présence Instagram, définition de vos objectifs et création d'une stratégie adaptée à votre audience.",
      },
      {
        number: 2,
        title: 'Setup & Création',
        description: "Configuration du compte publicitaire, création des audiences et production des visuels publicitaires.",
      },
      {
        number: 3,
        title: 'Lancement campagnes',
        description: "Paramétrage des campagnes, définition des budgets et lancement sur les formats les plus pertinents.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "Suivi des performances, tests A/B et optimisation continue pour maximiser vos résultats.",
      },
    ],
    benefits: [
      {
        title: 'Formats créatifs natifs',
        description: "Stories, Reels, carrousels, collection : des formats publicitaires qui s'intègrent naturellement dans l'expérience Instagram et captent l'attention de votre audience.",
        highlight: 'créatifs',
        icon: 'rocket',
        size: 'large',
      },
      {
        title: 'Engagement supérieur',
        description: "Instagram affiche des taux d'engagement plus élevés que les autres réseaux sociaux, idéal pour développer votre communauté.",
        highlight: 'engagement',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Shopping intégré',
        description: "Tagguez vos produits directement dans les publications pour transformer l'inspiration en achat.",
        highlight: 'Shopping',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Ciblage Meta',
        description: "Accédez aux données de ciblage de Meta pour toucher précisément votre audience idéale.",
        highlight: 'Meta',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Remarketing puissant',
        description: "Reciblez les visiteurs de votre site et les personnes qui ont interagi avec votre contenu.",
        highlight: 'Remarketing',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Synergie Facebook',
        description: "Gérez vos campagnes Instagram et Facebook depuis une seule plateforme pour maximiser votre portée et optimiser vos budgets publicitaires.",
        highlight: 'Synergie',
        icon: 'shield',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Qualité visuelle insuffisante',
        description: "Instagram est une plateforme visuelle exigeante. Des visuels de mauvaise qualité ou non adaptés aux formats impactent négativement les performances de vos campagnes publicitaires.",
      },
      {
        title: 'Ignorer les tendances',
        description: "Les codes d'Instagram évoluent rapidement. Ne pas adapter son contenu aux tendances (Reels, formats natifs) limite la portée et l'engagement de vos publicités.",
      },
      {
        title: 'Ciblage trop large',
        description: "Un ciblage non affiné dilue votre budget sur des audiences peu qualifiées. L'analyse et la segmentation sont essentielles pour maximiser le ROI.",
      },
      {
        title: 'Pas de cohérence avec le feed',
        description: "Des publicités trop différentes de votre contenu organique créent une rupture. L'authenticité et la cohérence de marque sont clés sur Instagram.",
      },
      {
        title: 'Tracking mal configuré',
        description: "Sans Pixel Meta et API Conversions correctement configurés, impossible de mesurer le vrai ROI et d'optimiser les campagnes efficacement.",
      },
    ],
    faqs: [
      {
        question: 'Quels formats publicitaires proposez-vous sur Instagram ?',
        answer: "Nous gérons tous les formats Instagram Ads : Stories (plein écran vertical), Reels (vidéos courtes), Feed (image et vidéo), Carrousels (jusqu'à 10 visuels), Collection (catalogue produits) et Explore. Nous recommandons les formats selon vos objectifs : Stories pour la notoriété, Reels pour l'engagement, Collection pour l'e-commerce.",
      },
      {
        question: 'Quel budget pour des Instagram Ads efficaces ?',
        answer: "Nous recommandons un budget minimum de 500€/mois pour commencer à tester et apprendre. Pour des résultats significatifs, un budget de 1000-2000€/mois permet d'optimiser les campagnes et d'atteindre un volume suffisant. Le budget optimal dépend de vos objectifs et de votre secteur.",
      },
      {
        question: 'Créez-vous les visuels publicitaires ?',
        answer: "Oui, notre agence propose la création de visuels et vidéos adaptés aux formats Instagram. Nous produisons des contenus qui respectent les codes de la plateforme et maximisent l'engagement. Nous pouvons également adapter vos visuels existants aux différents formats.",
      },
      {
        question: 'Quelle différence entre Instagram Ads et Facebook Ads ?',
        answer: "Instagram et Facebook font partie de Meta et partagent la même plateforme publicitaire. Instagram touche une audience plus jeune (18-35 ans) avec des formats plus visuels et créatifs. Facebook a une audience plus large et diversifiée. Nous recommandons souvent de combiner les deux pour maximiser la portée.",
      },
      {
        question: 'Comment mesurez-vous les performances ?',
        answer: "Nous configurons le Pixel Meta et l'API Conversions pour un tracking précis. Nous suivons les KPIs clés : impressions, reach, engagement, clics, conversions, ROAS. Des reportings réguliers vous permettent de suivre les résultats et l'optimisation des campagnes.",
      },
    ],
    otherExpertises: [
      { name: 'Facebook Ads', href: '/ads/social/facebook-ads' },
      { name: 'TikTok Ads', href: '/ads/social/tiktok-ads' },
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
    ],
    pricing: {
      tjm: '500-700€',
      description: 'Frais de gestion + budget média + création contenu',
    },
  },
  // =====================================================
  // TIKTOK ADS
  // =====================================================
  {
    slug: 'tiktok-ads',
    title: 'Agence TikTok Ads',
    tag: 'TikTok Ads',
    category: 'social',
    heroDescription: "TikTok est devenu incontournable pour toucher la Gen Z et les Millennials. Notre agence TikTok Ads crée des campagnes publicitaires authentiques et engageantes qui s'intègrent naturellement dans l'expérience utilisateur.",
    metaTitle: 'Agence TikTok Ads à Lille | Publicité TikTok | Slashr',
    metaDescription: 'Agence TikTok Ads à Lille. Création et gestion de campagnes publicitaires sur TikTok : vidéos natives, Spark Ads, challenges. Experts en marketing digital pour toucher la Gen Z.',
    contentSection: {
      tag: 'TikTok Ads',
      title: "Créez du contenu qui devient viral",
      content: "TikTok a révolutionné la consommation de contenu vidéo. Les utilisateurs y passent en moyenne 95 minutes par jour, découvrant des contenus via l'algorithme For You. Les TikTok Ads permettent de toucher cette audience engagée avec des formats natifs qui génèrent des résultats impressionnants.",
      bulletPoints: [
        "Formats natifs : In-Feed, Spark Ads, TopView qui s'intègrent naturellement.",
        "Audience engagée : 95 minutes de temps passé quotidien en moyenne.",
        "Algorithme puissant : Découverte basée sur l'intérêt, pas sur le follow.",
        "Viralité potentielle : Un contenu authentique peut exploser organiquement.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en TikTok Ads',
      intro: "TikTok est la plateforme à la croissance la plus rapide, avec plus d'un milliard d'utilisateurs actifs. C'est le canal privilégié pour toucher les 16-35 ans avec un contenu authentique et divertissant qui génère un engagement exceptionnel.",
      expertiseLinks: [
        { text: 'In-Feed Ads', href: '#', highlight: 'Vidéos natives dans le feed' },
        { text: 'Spark Ads', href: '#', highlight: 'Boost de contenus organiques' },
        { text: 'TopView', href: '#', highlight: 'Format premium plein écran' },
        { text: 'Instagram Ads', href: '/ads/social/instagram-ads', highlight: 'Stratégie vidéo complète' },
      ],
      ctaText: 'Lancer mes TikTok Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Authenticité et créativité',
      subtitle: "Maîtriser les codes TikTok",
      description: "TikTok requiert une approche différente des autres réseaux sociaux. Notre équipe maîtrise les codes de la plateforme et crée des contenus qui résonnent avec l'audience : authentiques, divertissants et engageants.",
      points: [
        {
          title: 'Codes TikTok',
          description: "Nous maîtrisons les tendances, les sons et les formats qui fonctionnent sur TikTok.",
        },
        {
          title: 'Création native',
          description: "Production de vidéos qui s'intègrent naturellement dans l'expérience TikTok.",
        },
        {
          title: 'Stratégie data',
          description: "Analyse des performances et optimisation continue basée sur les données.",
        },
      ],
    },
    forYou: [
      "Votre marque cible les 16-35 ans (Gen Z et Millennials)",
      "Vous êtes prêt à adopter un ton authentique et divertissant",
      "Vous souhaitez développer votre notoriété auprès d'une nouvelle audience",
      "Vous avez des produits lifestyle, mode, beauté, food ou gaming",
    ],
    notForYou: [
      "Votre cible a plus de 45 ans principalement",
      "Votre marque ne peut pas adopter un ton décontracté",
      "Vous n'avez pas de capacité à produire du contenu vidéo",
      "Votre secteur est très réglementé (finance, santé, etc.)",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Stratégie',
        description: "Analyse de votre marque, définition des objectifs et création d'une stratégie TikTok adaptée.",
      },
      {
        number: 2,
        title: 'Création contenu',
        description: "Production de vidéos natives qui respectent les codes TikTok et captent l'attention.",
      },
      {
        number: 3,
        title: 'Lancement campagnes',
        description: "Configuration du compte TikTok Ads, paramétrage des audiences et lancement des campagnes.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "Analyse des performances, tests créatifs et optimisation continue pour maximiser le ROI.",
      },
    ],
    benefits: [
      {
        title: 'Audience Gen Z & Millennials',
        description: "TikTok est LA plateforme pour toucher les 16-35 ans. Une audience massive et engagée, difficile à atteindre sur les autres canaux marketing.",
        highlight: 'Gen Z',
        icon: 'target',
        size: 'large',
      },
      {
        title: 'Engagement record',
        description: "TikTok affiche des taux d'engagement jusqu'à 3x supérieurs aux autres réseaux sociaux.",
        highlight: 'engagement',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Algorithme découverte',
        description: "L'algorithme For You permet de toucher des audiences au-delà de vos followers.",
        highlight: 'découverte',
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'CPM compétitifs',
        description: "Des coûts publicitaires souvent plus bas que sur les plateformes matures.",
        highlight: 'CPM',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Formats créatifs',
        description: "In-Feed, Spark Ads, TopView, Branded Effects : des formats variés et engageants.",
        highlight: 'créatifs',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Potentiel viral',
        description: "Un contenu authentique peut générer des millions de vues organiques et transformer votre marque. TikTok récompense la créativité, pas le budget.",
        highlight: 'viral',
        icon: 'shield',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Contenu trop corporate',
        description: "TikTok valorise l'authenticité. Des publicités trop polies ou corporate performent mal. Adoptez un ton décontracté et créatif adapté à la plateforme.",
      },
      {
        title: 'Ignorer les tendances',
        description: "Les tendances TikTok évoluent très vite (sons, formats, challenges). Ne pas les suivre limite drastiquement la portée de vos campagnes publicitaires.",
      },
      {
        title: 'Vidéos trop longues',
        description: "L'attention sur TikTok est courte. Des vidéos de plus de 30 secondes perdent rapidement les utilisateurs. Le hook des premières secondes est crucial.",
      },
      {
        title: 'Mauvais ciblage',
        description: "TikTok touche principalement les 16-35 ans. Si votre cible est plus âgée, d'autres plateformes seront plus efficaces pour votre stratégie.",
      },
      {
        title: 'Budget insuffisant',
        description: "TikTok Ads nécessite un budget minimum pour optimiser l'algorithme. Un budget trop faible ne permet pas d'accumuler assez de données pour les performances.",
      },
    ],
    faqs: [
      {
        question: 'Quels formats publicitaires proposez-vous sur TikTok ?',
        answer: "Nous gérons tous les formats TikTok Ads : In-Feed (vidéos dans le flux For You), Spark Ads (boost de contenus organiques), TopView (première vidéo à l'ouverture), Branded Hashtag Challenge et Branded Effects. Nous recommandons les Spark Ads pour débuter car ils performent généralement mieux.",
      },
      {
        question: 'Quel budget pour des TikTok Ads efficaces ?',
        answer: "TikTok recommande un budget minimum de 50€/jour par groupe d'annonces pour optimiser l'algorithme. Nous conseillons de démarrer avec 1000-1500€/mois pour tester et apprendre, puis de scaler les campagnes qui performent.",
      },
      {
        question: 'Créez-vous les vidéos TikTok ?',
        answer: "Oui, notre équipe produit des vidéos natives adaptées aux codes TikTok. Nous pouvons également optimiser vos contenus existants ou travailler avec des créateurs (UGC) pour plus d'authenticité. Le format vertical 9:16 et les premières secondes sont cruciaux.",
      },
      {
        question: 'TikTok est-il adapté au B2B ?',
        answer: "TikTok est principalement B2C, ciblant les consommateurs finaux. Pour le B2B, LinkedIn Ads est plus adapté. Cependant, TikTok peut fonctionner pour des marques B2B qui ciblent les jeunes professionnels ou souhaitent développer leur marque employeur.",
      },
      {
        question: 'Comment fonctionne le Spark Ads ?',
        answer: "Le Spark Ads permet de booster une vidéo organique (la vôtre ou celle d'un créateur avec son accord) en publicité. Ce format performe généralement mieux car le contenu est authentique et garde les interactions (likes, commentaires) du post original.",
      },
    ],
    otherExpertises: [
      { name: 'Instagram Ads', href: '/ads/social/instagram-ads' },
      { name: 'Facebook Ads', href: '/ads/social/facebook-ads' },
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'YouTube Ads', href: '/ads/sea/youtube-ads' },
    ],
    pricing: {
      tjm: '500-700€',
      description: 'Frais de gestion + budget média + création contenu vidéo',
    },
  },
  // =====================================================
  // BING ADS (MICROSOFT ADVERTISING)
  // =====================================================
  {
    slug: 'bing-ads',
    title: 'Agence Bing Ads',
    tag: 'Bing Ads',
    category: 'ads',
    heroDescription: "Microsoft Advertising (Bing Ads) est le complément idéal de Google Ads. Notre agence gère vos campagnes publicitaires sur Bing, Yahoo et les sites partenaires Microsoft pour toucher une audience qualifiée souvent négligée.",
    metaTitle: 'Agence Bing Ads à Lille | Microsoft Advertising | Slashr',
    metaDescription: 'Agence Bing Ads (Microsoft Advertising) à Lille. Création et gestion de campagnes publicitaires sur Bing et Yahoo. Complétez votre stratégie SEA pour maximiser votre visibilité.',
    contentSection: {
      tag: 'Bing Ads',
      title: "L'alternative SEA souvent sous-estimée",
      content: "Microsoft Advertising (anciennement Bing Ads) touche 10-15% des recherches en France via Bing, Yahoo et les sites partenaires. Cette audience est souvent plus âgée, plus aisée et génère des taux de conversion supérieurs à Google Ads, avec des CPC généralement plus bas.",
      bulletPoints: [
        "CPC plus bas : Moins de concurrence, coûts réduits de 20-30% vs Google.",
        "Audience qualifiée : CSP+ et professionnels (utilisateurs Windows/Office).",
        "Import Google Ads : Réplication facile de vos campagnes existantes.",
        "Extensions LinkedIn : Ciblage professionnel unique à Microsoft.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en Bing Ads',
      intro: "Bing Ads complète parfaitement Google Ads en touchant une audience différente. Les utilisateurs Bing sont souvent des professionnels utilisant les outils Microsoft, avec un pouvoir d'achat supérieur et une intention d'achat souvent plus forte.",
      expertiseLinks: [
        { text: 'Search Ads', href: '#', highlight: 'Annonces sur Bing.com' },
        { text: 'Shopping', href: '#', highlight: 'Catalogue produits Microsoft' },
        { text: 'Audience Network', href: '#', highlight: 'Display Microsoft' },
        { text: 'Google Ads', href: '/ads/sea/google-ads', highlight: 'Stratégie SEA complète' },
      ],
      ctaText: 'Lancer mes Bing Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Expertise Microsoft Advertising',
      subtitle: "Optimiser le canal négligé",
      description: "Beaucoup d'annonceurs ignorent Bing Ads, se privant d'une source de trafic qualifié à moindre coût. Notre expertise permet d'exploiter pleinement ce canal et de l'intégrer dans une stratégie SEA globale cohérente.",
      points: [
        {
          title: 'Import optimisé',
          description: "Nous ne nous contentons pas d'importer Google Ads : nous adaptons et optimisons pour Bing.",
        },
        {
          title: 'Extensions LinkedIn',
          description: "Exploitation des données LinkedIn pour un ciblage professionnel unique.",
        },
        {
          title: 'Synergies SEA',
          description: "Intégration cohérente avec vos campagnes Google Ads pour maximiser la couverture.",
        },
      ],
    },
    forYou: [
      "Vous avez déjà des campagnes Google Ads et souhaitez étendre votre couverture",
      "Votre cible inclut des professionnels (CSP+, B2B)",
      "Vous cherchez des sources de trafic complémentaires à coût réduit",
      "Vous êtes dans un secteur concurrentiel avec des CPC élevés sur Google",
    ],
    notForYou: [
      "Vous n'avez pas encore de stratégie Google Ads établie",
      "Votre budget SEA est très limité (priorisez Google d'abord)",
      "Votre cible est exclusivement mobile (Bing est plus desktop)",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Import',
        description: "Analyse de vos campagnes Google Ads et import optimisé vers Microsoft Advertising.",
      },
      {
        number: 2,
        title: 'Adaptation',
        description: "Ajustement des enchères, budgets et paramètres spécifiques à Bing Ads.",
      },
      {
        number: 3,
        title: 'Extensions',
        description: "Configuration des extensions spécifiques Microsoft (LinkedIn Profile Targeting).",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "Suivi des performances et optimisation continue pour maximiser le ROI.",
      },
    ],
    benefits: [
      {
        title: 'CPC plus compétitifs',
        description: "Moins de concurrence sur Bing signifie des coûts par clic 20-30% inférieurs à Google Ads, avec souvent une meilleure qualité de trafic.",
        highlight: 'CPC',
        icon: 'zap',
        size: 'large',
      },
      {
        title: 'Audience CSP+',
        description: "Les utilisateurs Bing sont souvent des professionnels avec un pouvoir d'achat supérieur.",
        highlight: 'CSP+',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Import facile',
        description: "Vos campagnes Google Ads peuvent être importées et adaptées en quelques clics.",
        highlight: 'Import',
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'LinkedIn Targeting',
        description: "Ciblez par entreprise, secteur ou fonction grâce à l'intégration LinkedIn unique.",
        highlight: 'LinkedIn',
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Reach complémentaire',
        description: "Touchez 10-15% d'audience supplémentaire que vous manquez sur Google.",
        highlight: 'Reach',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Conversion supérieure',
        description: "Les études montrent souvent des taux de conversion plus élevés sur Bing, grâce à une audience plus intentionniste et moins sollicitée par la publicité.",
        highlight: 'Conversion',
        icon: 'shield',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Simple copie de Google Ads',
        description: "Importer sans adapter ne suffit pas. Les enchères, audiences et paramètres doivent être optimisés spécifiquement pour l'écosystème Microsoft Advertising.",
      },
      {
        title: 'Volume plus faible',
        description: "Bing représente 10-15% du marché search. N'attendez pas le même volume que Google. C'est un canal complémentaire, pas un remplacement.",
      },
      {
        title: 'Audience desktop',
        description: "L'audience Bing est plus desktop que mobile. Si votre site n'est pas optimisé desktop, les performances peuvent être impactées.",
      },
      {
        title: 'Suivi séparé nécessaire',
        description: "Le tracking doit être configuré spécifiquement pour Microsoft Ads (UET tag). Ne pas l'installer limite l'optimisation des campagnes.",
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce que Microsoft Advertising (Bing Ads) ?",
        answer: "Microsoft Advertising (anciennement Bing Ads) est la plateforme publicitaire de Microsoft qui diffuse des annonces sur Bing, Yahoo, AOL et les sites partenaires. Elle fonctionne de manière similaire à Google Ads avec un système d'enchères au CPC.",
      },
      {
        question: 'Quel budget pour Bing Ads ?',
        answer: "Bing Ads peut fonctionner avec des budgets modestes grâce à des CPC plus bas. Nous recommandons un minimum de 500€/mois pour commencer, en complément de vos campagnes Google Ads existantes. Le budget optimal dépend de votre secteur et de vos objectifs.",
      },
      {
        question: 'Puis-je importer mes campagnes Google Ads ?',
        answer: "Oui, Microsoft Advertising propose un import direct de Google Ads. Cependant, nous ne nous contentons pas de copier : nous adaptons les enchères, ajustons les paramètres et optimisons spécifiquement pour la plateforme Bing.",
      },
      {
        question: "Qu'est-ce que le LinkedIn Profile Targeting ?",
        answer: "C'est une fonctionnalité exclusive à Microsoft Advertising qui permet de cibler les utilisateurs par leur profil LinkedIn : entreprise, secteur d'activité, fonction. C'est particulièrement puissant pour le B2B.",
      },
      {
        question: 'Bing Ads ou Google Ads en premier ?',
        answer: "Nous recommandons de commencer par Google Ads qui représente 90% du marché search en France. Une fois vos campagnes optimisées et rentables sur Google, Bing Ads devient un excellent complément pour étendre votre couverture à moindre coût.",
      },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Google Shopping', href: '/ads/sea/google-shopping' },
      { name: 'YouTube Ads', href: '/ads/sea/youtube-ads' },
      { name: 'Performance Max', href: '/ads/sea/performance-max' },
    ],
    pricing: {
      tjm: '500-700€',
      description: 'Frais de gestion + budget média Microsoft Advertising',
    },
  },
  // =====================================================
  // YOUTUBE ADS
  // =====================================================
  {
    slug: 'youtube-ads',
    title: 'Agence YouTube Ads',
    tag: 'YouTube Ads',
    category: 'ads',
    heroDescription: "YouTube est le 2ème moteur de recherche au monde avec 40 millions de visiteurs uniques par mois en France. Notre agence YouTube Ads crée des campagnes vidéo percutantes pour développer votre visibilité et toucher votre audience.",
    metaTitle: 'Agence YouTube Ads à Lille | Publicité Vidéo | Slashr',
    metaDescription: 'Agence YouTube Ads à Lille. Création et gestion de campagnes publicitaires vidéo sur YouTube. Formats In-Stream, Discovery, Bumper pour maximiser votre visibilité et vos performances.',
    contentSection: {
      tag: 'YouTube Ads',
      title: "La puissance de la vidéo pour votre marque",
      content: "YouTube est la plateforme vidéo incontournable avec plus de 2 milliards d'utilisateurs actifs mensuels. Les YouTube Ads permettent de toucher votre audience avec des formats vidéo variés : avant, pendant ou après les vidéos, dans les résultats de recherche ou sur la page d'accueil.",
      bulletPoints: [
        "Reach massif : 40 millions de Français utilisent YouTube chaque mois.",
        "Formats variés : In-Stream skippable, non-skippable, Bumper, Discovery.",
        "Ciblage Google : Intention de recherche, centres d'intérêt, remarketing.",
        "Mesure complète : Vue, engagement, conversion via Google Ads.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en YouTube Ads',
      intro: "La vidéo est le format le plus engageant et YouTube est sa plateforme de référence. Les campagnes vidéo permettent de raconter votre histoire, démontrer vos produits et créer une connexion émotionnelle que les formats texte ne peuvent égaler.",
      expertiseLinks: [
        { text: 'In-Stream Ads', href: '#', highlight: 'Pré-roll et mid-roll' },
        { text: 'Bumper Ads', href: '#', highlight: '6 secondes non-skippable' },
        { text: 'Discovery Ads', href: '#', highlight: 'Résultats de recherche' },
        { text: 'Google Ads', href: '/ads/sea/google-ads', highlight: 'Stratégie SEA complète' },
      ],
      ctaText: 'Lancer mes YouTube Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Expertise vidéo et performance',
      subtitle: "De la création à l'optimisation",
      description: "Les campagnes YouTube Ads nécessitent une approche spécifique : des créatifs vidéo adaptés à chaque format, un ciblage précis et une optimisation continue. Notre expertise couvre l'ensemble de la chaîne pour maximiser votre ROI.",
      points: [
        {
          title: 'Stratégie vidéo',
          description: "Définition du format optimal selon vos objectifs : notoriété, considération ou action.",
        },
        {
          title: 'Production adaptée',
          description: "Création ou adaptation de vidéos aux formats YouTube (6s, 15s, 30s+).",
        },
        {
          title: 'Optimisation ciblage',
          description: "Exploitation des données Google pour toucher précisément votre audience.",
        },
      ],
    },
    forYou: [
      "Vous avez du contenu vidéo à promouvoir ou souhaitez en créer",
      "Vous voulez développer la notoriété de votre marque à grande échelle",
      "Vous ciblez une audience qui consomme du contenu vidéo",
      "Vous souhaitez raconter une histoire ou démontrer un produit",
    ],
    notForYou: [
      "Vous n'avez pas de budget pour la création vidéo",
      "Vous cherchez uniquement des conversions immédiates à faible coût",
      "Votre message ne peut pas être transmis en vidéo",
    ],
    methodology: [
      {
        number: 1,
        title: 'Stratégie vidéo',
        description: "Définition des objectifs, choix des formats et planification de la production vidéo.",
      },
      {
        number: 2,
        title: 'Production',
        description: "Création ou adaptation de vos vidéos aux formats YouTube Ads optimaux.",
      },
      {
        number: 3,
        title: 'Ciblage & Lancement',
        description: "Configuration des audiences, paramétrage des campagnes et lancement.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "Analyse des métriques vidéo, tests créatifs et optimisation continue.",
      },
    ],
    benefits: [
      {
        title: 'Reach massif',
        description: "40 millions de visiteurs uniques par mois en France. YouTube permet de toucher une audience massive avec des formats vidéo mémorisables.",
        highlight: 'Reach',
        icon: 'globe',
        size: 'large',
      },
      {
        title: 'Formats flexibles',
        description: "Du Bumper 6s au TrueView 3min+, adaptez le format à votre message et vos objectifs.",
        highlight: 'Formats',
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'Ciblage Google',
        description: "Exploitez les données Google : intention de recherche, audiences, remarketing.",
        highlight: 'Google',
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Engagement vidéo',
        description: "La vidéo génère plus d'engagement et de mémorisation que les autres formats.",
        highlight: 'Engagement',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Coût à la vue',
        description: "Payez uniquement quand l'utilisateur regarde 30 secondes ou interagit.",
        highlight: 'CPV',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Brand Lift mesurable',
        description: "Mesurez l'impact réel sur votre notoriété, considération et intention d'achat grâce aux études Brand Lift de Google.",
        highlight: 'Brand Lift',
        icon: 'shield',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Vidéo non adaptée',
        description: "Une vidéo corporate classique ne fonctionne pas sur YouTube. Les premières secondes sont cruciales pour capter l'attention avant le skip.",
      },
      {
        title: 'Mauvais format',
        description: "Chaque format a ses spécificités. Un Bumper 6s ne peut pas transmettre le même message qu'un TrueView 30s. Adaptez votre créatif.",
      },
      {
        title: 'Ciblage trop large',
        description: "Le reach YouTube est massif mais un ciblage imprécis gaspille du budget. Affinez par audiences, mots-clés et placements.",
      },
      {
        title: 'Mesure incomplète',
        description: "Ne vous limitez pas aux vues. Configurez le suivi des conversions pour mesurer l'impact réel sur votre business.",
      },
      {
        title: 'Budget insuffisant',
        description: "Les campagnes vidéo nécessitent un budget conséquent pour accumuler des données significatives. Prévoyez un budget test avant de scaler.",
      },
    ],
    faqs: [
      {
        question: 'Quels formats YouTube Ads recommandez-vous ?',
        answer: "Le choix dépend de vos objectifs. Pour la notoriété : Bumper Ads (6s) et In-Stream non-skippable. Pour la considération : TrueView In-Stream (skippable). Pour l'action : TrueView for Action avec CTA. Nous recommandons souvent de combiner plusieurs formats.",
      },
      {
        question: 'Quel budget pour YouTube Ads ?',
        answer: "Les campagnes YouTube Ads nécessitent un budget plus conséquent que le Search. Nous recommandons minimum 2000€/mois pour des résultats significatifs. Le CPV (coût par vue) varie de 0,02€ à 0,10€ selon le ciblage et le format.",
      },
      {
        question: 'Créez-vous les vidéos publicitaires ?',
        answer: "Nous pouvons adapter vos vidéos existantes aux formats YouTube Ads (ajout d'intro accrocheuse, CTA, etc.). Pour la création de vidéos from scratch, nous travaillons avec des partenaires production ou pouvons vous conseiller sur le brief créatif.",
      },
      {
        question: 'Comment fonctionne le paiement TrueView ?',
        answer: "Avec TrueView (In-Stream skippable), vous ne payez que si l'utilisateur regarde au moins 30 secondes (ou l'intégralité si moins de 30s) ou interagit avec la vidéo. C'est un modèle au CPV (coût par vue) qui optimise votre budget.",
      },
      {
        question: 'YouTube Ads pour le e-commerce ?',
        answer: "Oui, YouTube Ads peut être très efficace pour l'e-commerce avec les formats TrueView for Shopping qui affichent vos produits sous la vidéo. Combiné à Performance Max, c'est un levier puissant pour les conversions.",
      },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Performance Max', href: '/ads/sea/performance-max' },
      { name: 'TikTok Ads', href: '/ads/social/tiktok-ads' },
      { name: 'Instagram Ads', href: '/ads/social/instagram-ads' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Frais de gestion + budget média + production vidéo optionnelle',
    },
  },
  // =====================================================
  // PERFORMANCE MAX
  // =====================================================
  {
    slug: 'performance-max',
    title: 'Agence Performance Max',
    tag: 'Performance Max',
    category: 'ads',
    heroDescription: "Performance Max est le type de campagne Google Ads le plus avancé, utilisant l'IA pour diffuser vos annonces sur tous les canaux Google. Notre agence optimise vos campagnes PMax pour maximiser les conversions.",
    metaTitle: 'Agence Performance Max à Lille | Google Ads PMax | Slashr',
    metaDescription: 'Agence Performance Max (PMax) à Lille. Experts en campagnes Google Ads automatisées. Optimisez vos conversions sur Search, Shopping, Display, YouTube et Gmail avec une seule campagne.',
    contentSection: {
      tag: 'Performance Max',
      title: "L'IA Google au service de vos conversions",
      content: "Performance Max (PMax) est le format de campagne Google Ads le plus récent et le plus automatisé. L'algorithme de machine learning optimise automatiquement vos enchères, votre ciblage et la diffusion de vos annonces sur l'ensemble des canaux Google pour maximiser les conversions.",
      bulletPoints: [
        "Multi-canaux : Search, Shopping, Display, YouTube, Gmail, Discover, Maps en une seule campagne.",
        "Automatisation IA : L'algorithme Google optimise en continu pour atteindre vos objectifs.",
        "Assets variés : Textes, images, vidéos combinés automatiquement pour les meilleures performances.",
        "E-commerce puissant : Intégration catalogue produits pour maximiser le ROAS.",
      ],
    },
    enjeux: {
      tag: 'ENJEUX',
      title: 'Pourquoi investir en Performance Max',
      intro: "Performance Max représente l'évolution majeure de Google Ads, combinant automatisation et reach multi-canaux. C'est aujourd'hui le format privilégié pour les annonceurs e-commerce et les objectifs de conversion à grande échelle.",
      expertiseLinks: [
        { text: 'Shopping PMax', href: '#', highlight: 'E-commerce optimisé' },
        { text: 'Lead Gen PMax', href: '#', highlight: 'Génération de leads' },
        { text: 'Audiences Signaux', href: '#', highlight: 'Ciblage intelligent' },
        { text: 'Google Ads', href: '/ads/sea/google-ads', highlight: 'Stratégie SEA complète' },
      ],
      ctaText: 'Lancer mes campagnes Performance Max',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Expertise PMax avancée',
      subtitle: "Maîtriser l'automatisation Google",
      description: "Performance Max demande une approche différente : moins de contrôle manuel, plus de stratégie sur les assets et les signaux d'audience. Notre expertise permet d'exploiter pleinement le potentiel de l'IA Google tout en gardant le contrôle sur les résultats.",
      points: [
        {
          title: 'Assets optimisés',
          description: "Création et optimisation des assets (textes, images, vidéos) pour maximiser les combinaisons performantes.",
        },
        {
          title: 'Signaux audience',
          description: "Configuration des signaux d'audience pour guider l'algorithme vers les bons prospects.",
        },
        {
          title: 'Insights & contrôle',
          description: "Analyse des insights PMax et mise en place de contrôles (exclusions, scripts) pour optimiser les performances.",
        },
      ],
    },
    forYou: [
      "Vous êtes un e-commerce et souhaitez maximiser votre ROAS",
      "Vous avez un objectif de conversions mesurables (ventes, leads)",
      "Vous avez suffisamment de données de conversion pour alimenter l'algorithme",
      "Vous souhaitez couvrir tous les canaux Google avec une seule campagne",
    ],
    notForYou: [
      "Vous n'avez pas de tracking des conversions configuré",
      "Vous avez besoin d'un contrôle total sur les enchères et le ciblage",
      "Votre volume de conversions est trop faible (moins de 30/mois)",
      "Vous débutez en Google Ads (commencez par Search)",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Prérequis',
        description: "Vérification du tracking, analyse des données de conversion et évaluation de la pertinence PMax.",
      },
      {
        number: 2,
        title: 'Setup Assets',
        description: "Création des assets (textes, images, vidéos) et configuration des groupes d'assets.",
      },
      {
        number: 3,
        title: 'Signaux & Lancement',
        description: "Configuration des signaux d'audience, exclusions et lancement de la campagne.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "Analyse des insights, optimisation des assets et ajustement des signaux pour améliorer les performances.",
      },
    ],
    benefits: [
      {
        title: 'Couverture multi-canaux',
        description: "Une seule campagne diffuse sur Search, Shopping, Display, YouTube, Gmail, Discover et Maps. Maximisez votre reach sans multiplier les campagnes.",
        highlight: 'multi-canaux',
        icon: 'globe',
        size: 'large',
      },
      {
        title: 'Automatisation IA',
        description: "L'algorithme Google optimise automatiquement enchères, ciblage et créatifs pour vos objectifs.",
        highlight: 'IA',
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'E-commerce optimisé',
        description: "Intégration parfaite avec Merchant Center pour maximiser les ventes de votre catalogue.",
        highlight: 'E-commerce',
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Apprentissage continu',
        description: "L'algorithme s'améliore continuellement en apprenant de vos conversions.",
        highlight: 'Apprentissage',
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Gestion simplifiée',
        description: "Moins de paramètres à gérer manuellement, plus de temps pour la stratégie.",
        highlight: 'Gestion',
        icon: 'shield',
        size: 'medium',
      },
      {
        title: 'Performance mesurable',
        description: "Google fournit des insights détaillés sur les assets, audiences et placements qui performent. Transparence sur l'allocation budgétaire et les résultats.",
        highlight: 'Performance',
        icon: 'target',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Tracking insuffisant',
        description: "Performance Max nécessite des données de conversion solides pour fonctionner. Sans tracking précis, l'algorithme ne peut pas optimiser correctement.",
      },
      {
        title: 'Assets de mauvaise qualité',
        description: "L'IA combine vos assets automatiquement. Des images floues, des textes génériques ou l'absence de vidéo limitent les performances.",
      },
      {
        title: 'Volume de conversion faible',
        description: "PMax a besoin de données pour apprendre. Avec moins de 30 conversions/mois, l'algorithme ne peut pas s'optimiser efficacement.",
      },
      {
        title: "Pas de signaux d'audience",
        description: "Sans signaux d'audience (audiences personnalisées, données first-party), PMax cible trop large au démarrage et gaspille du budget.",
      },
      {
        title: 'Cannibalisation Search/Shopping',
        description: "PMax peut cannibaliser vos campagnes Search et Shopping existantes. Une stratégie de coexistence doit être mise en place.",
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce que Performance Max ?",
        answer: "Performance Max (PMax) est un type de campagne Google Ads qui utilise l'IA pour diffuser automatiquement vos annonces sur tous les canaux Google : Search, Shopping, Display, YouTube, Gmail, Discover et Maps. L'algorithme optimise en temps réel pour maximiser vos conversions.",
      },
      {
        question: 'Performance Max remplace-t-il les autres campagnes ?',
        answer: "PMax peut compléter ou remplacer certaines campagnes selon votre stratégie. Pour l'e-commerce, PMax Shopping remplace souvent les campagnes Shopping classiques. Nous recommandons généralement de garder des campagnes Search pour les requêtes marque et top-performers.",
      },
      {
        question: 'Combien de conversions faut-il pour PMax ?',
        answer: "Google recommande minimum 30 conversions par mois pour que l'algorithme apprenne efficacement. En dessous, les performances sont instables. Si vous n'avez pas ce volume, nous recommandons de commencer par des campagnes Search manuelles.",
      },
      {
        question: 'Comment fonctionnent les Asset Groups ?',
        answer: "Un Asset Group regroupe différents assets (titres, descriptions, images, vidéos, logos) que Google combine automatiquement pour créer des annonces. Vous pouvez créer plusieurs Asset Groups par campagne, chacun ciblant un thème ou une gamme de produits.",
      },
      {
        question: "Qu'est-ce que les Signaux d'audience ?",
        answer: "Les Signaux d'audience sont des indications que vous donnez à l'algorithme sur votre audience idéale : audiences personnalisées, listes de remarketing, données first-party. Ils guident PMax au démarrage sans limiter son reach.",
      },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Google Shopping', href: '/ads/sea/google-shopping' },
      { name: 'YouTube Ads', href: '/ads/sea/youtube-ads' },
      { name: 'Bing Ads', href: '/ads/sea/bing-ads' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Frais de gestion + budget média + création assets',
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
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
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
  // ============================================
  // PRESTATIONS SOCIAL ADS - Phase 2
  // ============================================
  {
    slug: 'meta-ads',
    title: 'Agence Meta Ads',
    tag: 'Meta Ads',
    category: 'social',
    heroDescription: "Facebook, Instagram, Messenger, WhatsApp : l'écosystème Meta Ads offre un reach publicitaire inégalé. Notre agence à Lille vous accompagne pour créer et optimiser vos campagnes sur l'ensemble des plateformes Meta.",
    metaTitle: 'Agence Meta Ads à Lille | Facebook & Instagram Ads | Slashr',
    metaDescription: "Agence Meta Ads certifiée. Experts en publicités Facebook, Instagram, Messenger et WhatsApp. Stratégies d'audience avancées et optimisation des conversions.",
    contentSection: {
      tag: 'Meta Ads',
      title: "Maîtrisez l'écosystème publicitaire Meta",
      content: "Meta Ads (anciennement Facebook Ads) est la plateforme publicitaire la plus puissante pour toucher vos audiences sur Facebook, Instagram, Messenger et WhatsApp. Notre agence vous aide à exploiter tout le potentiel du gestionnaire de publicités Meta pour maximiser vos conversions.",
      bulletPoints: [
        "Stratégie cross-plateforme Facebook, Instagram, Messenger et WhatsApp.",
        "Ciblage d'audience avancé et création de lookalike audiences.",
        "Optimisation des conversions avec le pixel Meta et l'API Conversions.",
        "Création de visuels et contenus publicitaires performants.",
      ],
    },
    enjeux: {
      tag: 'Enjeux',
      title: "Les enjeux d'une stratégie Meta Ads performante",
      intro: "L'écosystème Meta représente près de 3 milliards d'utilisateurs actifs. Mais la complexité croissante du gestionnaire de publicités et les évolutions iOS/ATT rendent l'expertise indispensable pour maintenir des performances optimales.",
      expertiseLinks: [
        { text: 'Facebook Ads', href: '/ads/social/facebook-ads' },
        { text: 'Instagram Ads', href: '/ads/social/instagram-ads' },
        { text: 'Remarketing', href: '/ads/remarketing' },
      ],
      ctaText: 'Discuter de votre stratégie Meta Ads',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Une expertise Meta Ads complète',
      subtitle: 'Certified Meta Business Partner',
      description: "Notre équipe maîtrise l'ensemble des fonctionnalités du Business Manager et du gestionnaire de publicités Meta. De la stratégie d'audience à l'optimisation des campagnes, nous maximisons votre retour sur investissement publicitaire.",
      points: [
        {
          title: 'Stratégie multi-plateforme',
          description: "Campagnes coordonnées sur Facebook, Instagram, Messenger pour maximiser le reach et les conversions.",
        },
        {
          title: 'Audiences avancées',
          description: "Création et gestion de vos Custom Audiences, Lookalike et audiences first-party.",
        },
        {
          title: 'Tracking post-iOS 14',
          description: "Configuration optimale du pixel, CAPI et domain verification pour un tracking précis.",
        },
      ],
    },
    forYou: [
      "Vous souhaitez toucher une large audience B2C ou B2B",
      "Vous voulez développer votre notoriété sur les réseaux sociaux",
      "Vous cherchez à générer des leads ou des ventes via les réseaux sociaux",
      "Vous avez un budget publicitaire d'au moins 2000€/mois",
    ],
    notForYou: [
      "Votre audience cible n'est pas présente sur Facebook/Instagram",
      "Vous ciblez exclusivement des décideurs B2B seniors (privilégiez LinkedIn)",
      "Vous n'avez pas de visuels ou contenus à diffuser",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Stratégie',
        description: "Analyse de votre compte Meta Business, définition des objectifs et élaboration de la stratégie publicitaire adaptée à vos audiences.",
      },
      {
        number: 2,
        title: 'Setup technique',
        description: "Configuration du pixel Meta, API Conversions, events et paramétrage du Business Manager pour un tracking optimal.",
      },
      {
        number: 3,
        title: 'Création & Lancement',
        description: "Conception des campagnes, création des audiences, rédaction des copies et production des visuels publicitaires.",
      },
      {
        number: 4,
        title: 'Optimisation continue',
        description: "Tests A/B, optimisation des enchères, refresh des créas et scaling des audiences performantes.",
      },
    ],
    benefits: [
      {
        title: 'Reach massif multi-plateforme',
        description: "Accédez à 3 milliards d'utilisateurs sur Facebook, Instagram, Messenger et WhatsApp avec une seule plateforme publicitaire.",
        highlight: 'multi-plateforme',
        icon: 'globe',
        size: 'large',
      },
      {
        title: 'Ciblage précis',
        description: "Les options de ciblage Meta restent les plus complètes du marché : démographique, intérêts, comportements, lookalike.",
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Formats variés',
        description: "Stories, Reels, carrousels, collections, vidéos : des formats adaptés à chaque objectif et étape du funnel.",
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'Optimisation IA',
        description: "Les algorithmes Meta Advantage+ optimisent automatiquement vos campagnes vers les meilleurs résultats.",
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Mesure complète',
        description: "Pixel, CAPI, attribution cross-device : mesurez précisément l'impact de vos publicités sur vos conversions.",
        icon: 'chart',
        size: 'medium',
      },
      {
        title: "E-commerce natif",
        description: "Catalogues produits, dynamic ads, checkout Instagram : l'écosystème Meta est optimisé pour le commerce en ligne.",
        highlight: 'E-commerce',
        icon: 'rocket',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Fatigue publicitaire',
        description: "Les audiences Meta se lassent vite. Un refresh régulier des visuels et copies est indispensable pour maintenir les performances.",
      },
      {
        title: 'Tracking post-iOS 14',
        description: "La mise à jour ATT a réduit la précision du tracking. Une configuration optimale du pixel et CAPI est cruciale.",
      },
      {
        title: 'Budget minimum requis',
        description: "Les algorithmes Meta ont besoin de volume pour optimiser. En dessous de 1500€/mois, les résultats sont instables.",
      },
      {
        title: 'Qualité des créas',
        description: "Sur Meta, le visuel fait 80% du succès. Des créas génériques ou mal adaptées au format plombent les performances.",
      },
    ],
    faqs: [
      {
        question: "Quelle différence entre Meta Ads et Facebook Ads ?",
        answer: "Meta Ads est le nouveau nom de Facebook Ads depuis le rebranding de Facebook en Meta. La plateforme publicitaire permet désormais de diffuser sur Facebook, Instagram, Messenger et WhatsApp depuis un seul gestionnaire de publicités.",
      },
      {
        question: "Quel budget minimum pour Meta Ads ?",
        answer: "Nous recommandons un minimum de 1500-2000€/mois pour permettre aux algorithmes d'optimiser correctement. En dessous, les résultats sont trop variables et l'apprentissage trop lent.",
      },
      {
        question: "Comment fonctionne le ciblage Meta Ads ?",
        answer: "Meta Ads propose plusieurs types de ciblage : démographique (âge, localisation), par intérêts, par comportements, Custom Audiences (vos clients/visiteurs) et Lookalike (audiences similaires à vos clients).",
      },
      {
        question: "Faut-il faire du Facebook ET Instagram ?",
        answer: "Nous recommandons généralement de diffuser sur les deux plateformes et laisser l'algorithme optimiser la répartition. Cependant, selon votre audience et vos objectifs, une stratégie spécifique peut être préférable.",
      },
      {
        question: "Comment mesurer les résultats sur Meta Ads ?",
        answer: "Via le pixel Meta installé sur votre site, complété par l'API Conversions pour un tracking serveur-side. Nous paramétrons les événements de conversion clés et utilisons l'attribution Meta pour mesurer le ROI.",
      },
    ],
    otherExpertises: [
      { name: 'Facebook Ads', href: '/ads/social/facebook-ads' },
      { name: 'Instagram Ads', href: '/ads/social/instagram-ads' },
      { name: 'TikTok Ads', href: '/ads/social/tiktok-ads' },
      { name: 'Remarketing', href: '/ads/remarketing' },
    ],
    pricing: {
      tjm: '500-700€',
      description: 'Gestion mensuelle selon budget publicitaire',
    },
  },
  {
    slug: 'pinterest-ads',
    title: 'Agence Pinterest Ads',
    tag: 'Pinterest Ads',
    category: 'social',
    heroDescription: "Pinterest est la plateforme d'inspiration par excellence. Nos experts créent des campagnes publicitaires qui touchent vos audiences au moment où elles planifient leurs achats.",
    metaTitle: 'Agence Pinterest Ads à Lille | Publicité Pinterest | Slashr',
    metaDescription: "Agence Pinterest Ads experte. Campagnes publicitaires sur Pinterest pour e-commerce, décoration, mode et lifestyle. Touchez vos clients en phase d'inspiration.",
    contentSection: {
      tag: 'Pinterest Ads',
      title: "Touchez vos clients en phase d'inspiration",
      content: "Pinterest n'est pas un réseau social classique, c'est un moteur de recherche visuel. Les utilisateurs y planifient leurs achats, découvrent des produits et s'inspirent. Notre agence vous aide à capter cette audience à forte intention via le gestionnaire d'annonces Pinterest.",
      bulletPoints: [
        "Campagnes adaptées au comportement d'inspiration Pinterest.",
        "Formats publicitaires variés : Pins sponsorisés, carrousels, vidéos, collections.",
        "Ciblage par intérêts, mots-clés et audiences similaires.",
        "Catalogues produits synchronisés pour les annonces dynamiques.",
      ],
    },
    enjeux: {
      tag: 'Enjeux',
      title: "Les enjeux de la publicité Pinterest",
      intro: "Pinterest compte 450 millions d'utilisateurs actifs, dont 85% déclarent utiliser la plateforme pour planifier des achats. C'est l'opportunité de toucher votre audience très en amont du tunnel de conversion.",
      expertiseLinks: [
        { text: 'Social Ads', href: '/ads/social' },
        { text: 'E-commerce Ads', href: '/ads/ecommerce' },
        { text: 'Remarketing', href: '/ads/remarketing' },
      ],
      ctaText: 'Lancer vos campagnes Pinterest',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Experts en publicité Pinterest',
      subtitle: 'Une plateforme unique',
      description: "Pinterest demande une approche différente des autres plateformes sociales. Nos experts comprennent les comportements d'inspiration et créent des campagnes alignées sur le parcours utilisateur Pinterest.",
      points: [
        {
          title: 'Stratégie inspiration',
          description: "Contenus qui s'intègrent naturellement dans le flux d'inspiration Pinterest.",
        },
        {
          title: 'E-commerce optimisé',
          description: "Catalogues produits, Shopping Ads et intégration avec votre boutique en ligne.",
        },
        {
          title: 'Ciblage intentioniste',
          description: "Touchez les utilisateurs qui recherchent activement des produits comme les vôtres.",
        },
      ],
    },
    forYou: [
      "Vous êtes dans la mode, décoration, beauté, food ou lifestyle",
      "Vous vendez des produits visuellement attrayants",
      "Vous ciblez principalement une audience féminine (70% des utilisateurs)",
      "Vous souhaitez toucher des clients en phase de découverte",
    ],
    notForYou: [
      "Vous vendez des services B2B complexes",
      "Vos produits ne sont pas visuellement attractifs",
      "Vous cherchez des conversions immédiates uniquement",
    ],
    methodology: [
      {
        number: 1,
        title: 'Audit & Objectifs',
        description: "Analyse de votre potentiel sur Pinterest et définition des objectifs de campagne alignés sur votre stratégie marketing.",
      },
      {
        number: 2,
        title: 'Setup compte',
        description: "Configuration du compte Pinterest Business, du tag Pinterest et connexion de votre catalogue produits.",
      },
      {
        number: 3,
        title: 'Création campagnes',
        description: "Conception des épingles sponsorisées, sélection des audiences et paramétrage des campagnes dans le gestionnaire.",
      },
      {
        number: 4,
        title: 'Optimisation',
        description: "Analyse des performances, tests créatifs et optimisation continue pour améliorer le ROI.",
      },
    ],
    benefits: [
      {
        title: "Audience à forte intention d'achat",
        description: "85% des utilisateurs Pinterest déclarent utiliser la plateforme pour planifier des achats. Une audience qualifiée et intentioniste.",
        highlight: "forte intention",
        icon: 'target',
        size: 'large',
      },
      {
        title: 'Durée de vie longue',
        description: "Contrairement aux autres réseaux, un Pin peut continuer à générer du trafic pendant des mois après sa publication.",
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'CPC compétitif',
        description: "La concurrence moindre sur Pinterest permet souvent d'obtenir des coûts par clic inférieurs à Facebook ou Google.",
        icon: 'chart',
        size: 'medium',
      },
      {
        title: 'Shopping natif',
        description: "Les fonctionnalités shopping de Pinterest permettent un parcours d'achat fluide depuis l'inspiration jusqu'à la conversion.",
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'SEO Pinterest',
        description: "Pinterest fonctionne comme un moteur de recherche. Vos Pins sont découvrables via les recherches utilisateurs.",
        icon: 'target',
        size: 'medium',
      },
      {
        title: 'Secteurs idéaux',
        description: "Mode, décoration, beauté, food, voyage, DIY : ces secteurs performent exceptionnellement bien sur Pinterest.",
        highlight: 'Secteurs idéaux',
        icon: 'rocket',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Visuels spécifiques',
        description: "Pinterest demande des visuels au format vertical (2:3) optimisés pour la plateforme. Les créas Facebook/Instagram ne fonctionnent pas directement.",
      },
      {
        title: 'Cycle de conversion long',
        description: "Pinterest intervient tôt dans le parcours d'achat. Les conversions peuvent prendre plusieurs semaines, ce qui complexifie la mesure.",
      },
      {
        title: "Volume d'audience limité",
        description: "Avec 450M d'utilisateurs vs 3Md pour Meta, le volume de reach est plus limité. Pinterest est un complément, pas un canal principal.",
      },
      {
        title: 'Secteurs restreints',
        description: "Certains secteurs (B2B, services, industrie) ont peu de potentiel sur Pinterest. Vérifiez que votre audience est présente.",
      },
    ],
    faqs: [
      {
        question: "Pinterest Ads fonctionne-t-il pour le B2B ?",
        answer: "Pinterest est principalement B2C, orienté inspiration et lifestyle. Pour le B2B, LinkedIn Ads ou Google Ads sont généralement plus adaptés. Quelques exceptions existent (fournitures bureau design, outils créatifs).",
      },
      {
        question: "Quel budget pour Pinterest Ads ?",
        answer: "Nous recommandons un minimum de 1000€/mois pour tester la plateforme. Les CPC étant souvent plus bas que sur d'autres plateformes, ce budget permet d'obtenir un volume de données significatif.",
      },
      {
        question: "Comment connecter mon catalogue produits ?",
        answer: "Pinterest permet de synchroniser votre catalogue e-commerce via un flux produits (Shopify, WooCommerce, Magento natifs) ou un fichier CSV. Nous paramétrons cette intégration pour activer les Shopping Ads.",
      },
      {
        question: "Quelle est l'audience Pinterest en France ?",
        answer: "Pinterest compte environ 17 millions d'utilisateurs en France, avec une surreprésentation féminine (70%) et des tranches d'âge 25-44 ans particulièrement actives.",
      },
    ],
    otherExpertises: [
      { name: 'Meta Ads', href: '/ads/social/meta-ads' },
      { name: 'Instagram Ads', href: '/ads/social/instagram-ads' },
      { name: 'E-commerce Ads', href: '/ads/ecommerce' },
      { name: 'Social Ads', href: '/ads/social' },
    ],
    pricing: {
      tjm: '450-600€',
      description: 'Gestion mensuelle selon budget publicitaire',
    },
  },
  {
    slug: 'snapchat-ads',
    title: 'Agence Snapchat Ads',
    tag: 'Snapchat Ads',
    category: 'social',
    heroDescription: "Snapchat touche une audience jeune et engagée que vous ne trouverez nulle part ailleurs. Notre agence crée des campagnes publicitaires adaptées aux codes de la plateforme.",
    metaTitle: 'Agence Snapchat Ads à Lille | Publicité Snapchat | Slashr',
    metaDescription: "Agence Snapchat Ads experte. Campagnes publicitaires Snapchat pour toucher les 15-35 ans. Story Ads, filtres sponsorisés et formats immersifs.",
    contentSection: {
      tag: 'Snapchat Ads',
      title: "Touchez la génération Snapchat",
      content: "Snapchat est la plateforme privilégiée des 15-35 ans, avec des formats publicitaires immersifs et engageants. Notre agence vous aide à créer et gérer des campagnes Snapchat Ads qui captent l'attention de cette audience unique.",
      bulletPoints: [
        "Formats immersifs : Story Ads, filtres AR, Snap Ads vidéo.",
        "Ciblage précis de la génération Z et des millennials.",
        "Création de contenus adaptés aux codes Snapchat.",
        "Suivi des conversions avec le Snap Pixel.",
      ],
    },
    enjeux: {
      tag: 'Enjeux',
      title: "Les enjeux de la publicité Snapchat",
      intro: "Snapchat compte 750 millions d'utilisateurs actifs mensuels, dont une majorité a moins de 35 ans. C'est souvent le seul moyen de toucher cette audience qui délaisse Facebook et regarde peu la TV.",
      expertiseLinks: [
        { text: 'TikTok Ads', href: '/ads/social/tiktok-ads' },
        { text: 'Instagram Ads', href: '/ads/social/instagram-ads' },
        { text: 'Social Ads', href: '/ads/social' },
      ],
      ctaText: 'Lancer vos campagnes Snapchat',
      ctaHref: '/contact',
    },
    whyChooseUs: {
      title: 'Experts en publicité Snapchat',
      subtitle: 'Des formats uniques',
      description: "Snapchat propose des formats publicitaires qu'on ne trouve nulle part ailleurs : filtres AR, lenses, Story takeover. Notre équipe maîtrise ces formats pour créer des campagnes mémorables.",
      points: [
        {
          title: 'Formats créatifs',
          description: "Story Ads, Snap Ads, filtres AR sponsorisés, lenses : des formats engageants et immersifs.",
        },
        {
          title: 'Audience unique',
          description: "Accédez à une audience jeune difficile à toucher sur les autres plateformes.",
        },
        {
          title: 'Codes maîtrisés',
          description: "Contenus authentiques et natifs qui ne ressemblent pas à de la publicité traditionnelle.",
        },
      ],
    },
    forYou: [
      "Votre cible principale est les 15-35 ans",
      "Vous êtes dans la mode, beauté, food, entertainment ou gaming",
      "Vous avez la capacité de produire du contenu vidéo vertical",
      "Vous cherchez à construire de la notoriété auprès des jeunes",
    ],
    notForYou: [
      "Votre audience a plus de 40 ans",
      "Vous vendez des produits B2B ou des services professionnels",
      "Vous n'avez pas de budget pour la création vidéo",
    ],
    methodology: [
      {
        number: 1,
        title: 'Analyse audience',
        description: "Vérification du potentiel Snapchat pour votre marque et définition des objectifs de campagne.",
      },
      {
        number: 2,
        title: 'Setup & Tracking',
        description: "Configuration du compte Snapchat Ads Manager et installation du Snap Pixel pour le suivi des conversions.",
      },
      {
        number: 3,
        title: 'Création contenu',
        description: "Production de Snaps et Stories publicitaires adaptés aux codes de la plateforme.",
      },
      {
        number: 4,
        title: 'Gestion & Optimisation',
        description: "Pilotage des campagnes, tests de formats et optimisation du budget pour maximiser les résultats.",
      },
    ],
    benefits: [
      {
        title: 'Audience exclusive Gen Z',
        description: "Snapchat est souvent le seul moyen de toucher efficacement les 15-25 ans, qui délaissent Facebook et regardent peu la TV.",
        highlight: 'Gen Z',
        icon: 'user',
        size: 'large',
      },
      {
        title: 'Formats immersifs',
        description: "Les formats plein écran et interactifs de Snapchat génèrent un engagement supérieur aux formats display classiques.",
        icon: 'rocket',
        size: 'medium',
      },
      {
        title: 'AR & Filtres',
        description: "Les filtres et lenses AR offrent des expériences de marque uniques et virales.",
        icon: 'zap',
        size: 'medium',
      },
      {
        title: 'Taux de complétion vidéo',
        description: "Les vidéos Snapchat Ads affichent des taux de complétion élevés grâce au format natif.",
        icon: 'check',
        size: 'medium',
      },
      {
        title: 'Snap Map & Local',
        description: "Ciblez les utilisateurs par localisation pour des campagnes drive-to-store efficaces.",
        icon: 'globe',
        size: 'medium',
      },
      {
        title: 'Concurrence moindre',
        description: "Moins d'annonceurs sur Snapchat = CPM plus compétitifs et meilleure visibilité pour votre marque.",
        highlight: 'CPM compétitifs',
        icon: 'chart',
        size: 'large',
      },
    ],
    vigilancePoints: [
      {
        title: 'Production vidéo spécifique',
        description: "Snapchat demande du contenu vidéo vertical natif. Réutiliser des assets TV ou YouTube ne fonctionne pas.",
      },
      {
        title: 'Audience limitée',
        description: "Si votre cible dépasse les 35-40 ans, Snapchat n'est probablement pas le bon canal.",
      },
      {
        title: 'Mesure attribution',
        description: "L'attribution cross-device reste complexe sur Snapchat. Le Snap Pixel aide mais n'est pas parfait.",
      },
      {
        title: 'Durée de vie courte',
        description: "Les contenus Snapchat sont éphémères. Il faut produire régulièrement pour maintenir la présence.",
      },
    ],
    faqs: [
      {
        question: "Snapchat Ads est-il adapté à mon business ?",
        answer: "Snapchat est idéal si votre audience cible a moins de 35 ans. Les secteurs mode, beauté, food, entertainment, gaming et e-commerce performent particulièrement bien.",
      },
      {
        question: "Quel budget pour Snapchat Ads ?",
        answer: "Nous recommandons un minimum de 1500€/mois pour tester la plateforme. La création de contenus vidéo spécifiques représente un investissement additionnel à prévoir.",
      },
      {
        question: "Quels formats publicitaires sur Snapchat ?",
        answer: "Snapchat propose plusieurs formats : Snap Ads (vidéo verticale), Story Ads, Collection Ads (e-commerce), Filtres AR sponsorisés et Lenses AR pour des expériences immersives.",
      },
      {
        question: "Comment mesurer les conversions Snapchat ?",
        answer: "Via le Snap Pixel installé sur votre site, qui permet de tracker les événements de conversion. Nous configurons également le suivi des événements offline pour les achats en magasin.",
      },
      {
        question: "Snapchat vs TikTok : lequel choisir ?",
        answer: "Les deux plateformes touchent une audience jeune mais avec des usages différents. Snapchat est plus conversationnel et privé, TikTok plus viral et discovery. Souvent, une stratégie combinée est optimale.",
      },
    ],
    otherExpertises: [
      { name: 'TikTok Ads', href: '/ads/social/tiktok-ads' },
      { name: 'Instagram Ads', href: '/ads/social/instagram-ads' },
      { name: 'Meta Ads', href: '/ads/social/meta-ads' },
      { name: 'Social Ads', href: '/ads/social' },
    ],
    pricing: {
      tjm: '450-600€',
      description: 'Gestion mensuelle selon budget publicitaire',
    },
  },
  // ========== PRESTATIONS TRANSVERSES ADS ==========
  // Tracking & Analytics
  {
    slug: 'tracking',
    title: 'Tracking & Analytics',
    tag: 'Tracking',
    category: 'transverse',
    heroDescription: "Notre pôle data analytics vous accompagne dans l'implémentation de votre tracking : Google Analytics 4, Tag Manager, server-side et attribution. Des données fiables pour des décisions éclairées.",
    metaTitle: 'Agence Tracking & Analytics à Lille | GA4, GTM, Data | Slashr',
    metaDescription: "Agence web analytics et tracking à Lille. Experts Google Analytics 4, Tag Manager, attribution et data marketing. Mesurez précisément vos performances digitales.",
    contentSection: {
      tag: 'Notre expertise',
      title: 'Agence web analytics et tracking certifiée',
      content: "Slashr est une agence tracking et analytics à Lille spécialisée dans la mesure de la performance digitale. Notre équipe data maîtrise l'ensemble de la stack Google : Analytics 4, Tag Manager, Looker Studio et BigQuery. Un tracking bien configuré est le fondement de toute stratégie marketing data-driven. Il alimente vos campagnes publicitaires en données de conversion fiables.",
      bulletPoints: [
        'Google Analytics 4 Certified',
        'Google Tag Manager Expert',
        'Server-Side Tracking Implementation',
        'BigQuery & Data Engineering',
        'Conformité RGPD & Consent Mode v2',
      ],
    },
    methodology: [
      { number: 1, title: 'Audit data existant', description: "Analyse de votre configuration analytics actuelle, identification des données manquantes et définition des KPIs prioritaires." },
      { number: 2, title: 'Plan de taggage', description: "Élaboration du plan de mesure : événements à tracker, conventions de nommage, structure des données et documentation." },
      { number: 3, title: 'Implémentation', description: "Déploiement technique via GTM : tags, triggers, variables, dataLayer et tests de validation." },
      { number: 4, title: 'Dashboards & Formation', description: "Création de tableaux de bord personnalisés et formation de vos équipes à l'exploitation des données." },
    ],
    benefits: [
      { icon: 'chart', title: 'Données fiables et complètes', description: "Un tracking bien configuré capture toutes les interactions importantes. Plus de données manquantes, plus de décisions basées sur des métriques incomplètes.", size: 'large', highlight: 'fiables' },
      { icon: 'target', title: 'Attribution précise', description: "Comprenez vraiment quels canaux génèrent vos conversions. Attribution multi-touch pour des décisions d'investissement éclairées.", size: 'medium' },
      { icon: 'zap', title: 'Optimisation publicitaire', description: "Des données de conversion précises permettent aux algorithmes Google et Meta d'optimiser efficacement vos campagnes.", size: 'medium' },
      { icon: 'shield', title: 'Conformité RGPD', description: "Configuration respectueuse de la vie privée : consentement, anonymisation, durée de conservation des données.", size: 'medium' },
      { icon: 'code', title: 'DataLayer structuré', description: "Un dataLayer bien conçu facilite le tracking e-commerce et événementiel pour des analyses granulaires.", size: 'medium' },
      { icon: 'globe', title: 'Cross-device & Cross-platform', description: "Suivez vos utilisateurs sur tous leurs appareils et plateformes pour une vision unifiée du parcours client.", size: 'large', highlight: 'Cross-device' },
    ],
    vigilancePoints: [
      { title: 'Données incomplètes sans consentement', description: "Le RGPD impose le consentement pour le tracking. Sans stratégie adaptée (server-side, modeling), vous perdez 30-50% de vos données." },
      { title: 'Migration GA4 mal configurée', description: "Beaucoup de migrations GA4 sont incomplètes : événements manquants, conversions non configurées, audiences non créées. Un audit est souvent nécessaire." },
      { title: 'Attribution last-click obsolète', description: "Se fier uniquement au last-click sous-estime les canaux de découverte. L'attribution data-driven ou positionnelle est indispensable." },
      { title: 'Tags non maintenus', description: "Les sites évoluent, les tags doivent suivre. Un plan de maintenance garantit que votre tracking reste fonctionnel." },
    ],
    faqs: [
      { question: "Pourquoi passer à Google Analytics 4 ?", answer: "GA4 est devenu la norme depuis juillet 2023 avec l'arrêt d'Universal Analytics. Au-delà de l'obligation, GA4 apporte des avantages concrets : modèle basé sur les événements plus flexible, meilleure mesure cross-device, attribution data-driven native, intégration native avec Google Ads." },
      { question: "Qu'est-ce que le tracking server-side ?", answer: "Le tracking server-side (ou GTM Server-Side) consiste à envoyer les données de tracking via votre serveur plutôt que directement depuis le navigateur. Avantages : contourne les bloqueurs, améliore la précision des données de 15-30%, meilleure conformité RGPD." },
      { question: "Comment mesurer les conversions post-iOS 14 ?", answer: "La mise à jour ATT d'Apple a réduit la précision du tracking publicitaire. Les solutions : API Conversions (CAPI) pour Meta Ads, Enhanced Conversions pour Google Ads, Server-Side Tracking via GTM SS, modeling statistique." },
      { question: "Quel est le coût d'une implémentation tracking ?", answer: "Le coût dépend de la complexité : Setup GA4 basique 1-2 jours, plan de taggage complet 3-5 jours, GTM Server-Side 2-4 jours. Comptez entre 2000€ et 8000€ selon le périmètre." },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Meta Ads', href: '/ads/social/meta-ads' },
      { name: 'Remarketing', href: '/ads/remarketing' },
      { name: 'Audit Campagnes', href: '/ads/audit-campagnes' },
    ],
    pricing: { tjm: '500-700€', description: "Implémentation tracking selon complexité" },
  },
  // E-commerce Ads
  {
    slug: 'ecommerce',
    title: 'Publicité E-commerce',
    tag: 'E-commerce Ads',
    category: 'transverse',
    heroDescription: "Stratégie publicitaire complète pour votre boutique en ligne : Google Shopping, Meta Ads, retargeting dynamique. Maximisez votre ROAS et développez vos ventes.",
    metaTitle: 'Publicité E-commerce | Google Shopping, Meta Ads | Slashr',
    metaDescription: "Agence publicité e-commerce à Lille. Experts Google Shopping, Meta Ads, retargeting dynamique. Développez vos ventes en ligne avec une stratégie full-funnel.",
    contentSection: {
      tag: 'Notre expertise',
      title: 'Agence publicité e-commerce spécialisée',
      content: "Slashr accompagne les e-commerçants dans leur stratégie d'acquisition payante. Notre approche full-funnel couvre toutes les étapes du parcours d'achat : de la découverte à la conversion, en passant par le retargeting. Nous maîtrisons les spécificités du e-commerce : flux produits, catalogues dynamiques, tracking transactionnel.",
      bulletPoints: [
        'Google Shopping & Performance Max',
        'Meta Ads avec catalogue produits',
        'Retargeting dynamique cross-platform',
        'Tracking e-commerce enhanced (GA4)',
        'Optimisation ROAS et CAC',
      ],
    },
    methodology: [
      { number: 1, title: 'Audit & Stratégie', description: "Analyse de votre catalogue, marges, saisonnalité. Définition des objectifs ROAS et de la stratégie d'acquisition." },
      { number: 2, title: 'Setup technique', description: "Configuration des flux produits, catalogues Meta, tracking e-commerce complet avec enhanced conversions." },
      { number: 3, title: 'Lancement campagnes', description: "Déploiement progressif : Shopping, Search, Social Ads avec segmentation par gamme de produits." },
      { number: 4, title: 'Optimisation continue', description: "Ajustement des enchères, exclusion des produits non rentables, scaling des campagnes performantes." },
    ],
    benefits: [
      { icon: 'chart', title: 'Google Shopping optimisé', description: "Flux produits parfaitement structurés, enchères par rentabilité produit, exclusion des références non performantes.", size: 'large', highlight: 'Shopping' },
      { icon: 'target', title: 'Retargeting dynamique', description: "Rappel des visiteurs avec les produits consultés. Séquences personnalisées selon le niveau d'engagement.", size: 'medium' },
      { icon: 'zap', title: 'Dynamic Ads', description: "Publicités dynamiques qui affichent automatiquement vos produits aux bonnes personnes. Personnalisation à grande échelle.", size: 'medium' },
      { icon: 'rocket', title: 'Full-funnel e-commerce', description: "De la découverte à l'achat en passant par le retargeting : une stratégie complète qui couvre tout le parcours client.", size: 'large', highlight: 'Full-funnel' },
    ],
    vigilancePoints: [
      { title: 'Flux produits mal optimisés', description: "Un flux mal structuré dégrade les performances Shopping. Titres, descriptions et attributs doivent être optimisés pour chaque plateforme." },
      { title: 'Tracking e-commerce incomplet', description: "Sans tracking précis des transactions, impossible d'optimiser le ROAS. Enhanced e-commerce GA4 et conversions API sont indispensables." },
      { title: 'Pas de segmentation catalogue', description: "Tous les produits n'ont pas le même potentiel. Identifier et isoler les best-sellers des produits à faible marge est crucial." },
      { title: "Budget insuffisant pour l'apprentissage", description: "Les algorithmes ont besoin de volume pour optimiser. Un budget trop faible allonge la phase d'apprentissage." },
    ],
    faqs: [
      { question: "Quel budget minimum pour de la pub e-commerce ?", answer: "Pour Google Shopping, comptez minimum 1500-2000€/mois pour avoir assez de données. Pour Meta Ads, 1000€/mois minimum. Ces budgets permettent aux algorithmes d'apprendre et d'optimiser." },
      { question: "Google Shopping ou Meta Ads pour un e-commerce ?", answer: "Les deux sont complémentaires. Google Shopping capte l'intention d'achat (recherches produits), Meta Ads génère la découverte et le désir. Une stratégie full-funnel combine les deux." },
      { question: "Comment optimiser le ROAS de mes campagnes ?", answer: "Plusieurs leviers : segmentation du catalogue par rentabilité, exclusion des produits non performants, enchères par valeur de conversion, audiences similaires basées sur vos meilleurs clients." },
    ],
    otherExpertises: [
      { name: 'Google Shopping', href: '/ads/sea/google-shopping' },
      { name: 'Meta Ads', href: '/ads/social/meta-ads' },
      { name: 'Remarketing', href: '/ads/remarketing' },
      { name: 'Tracking', href: '/ads/tracking' },
    ],
    pricing: { tjm: '450-650€', description: "Gestion e-commerce selon volume catalogue" },
  },
  // B2B Ads
  {
    slug: 'b2b',
    title: 'Publicité B2B',
    tag: 'B2B Ads',
    category: 'transverse',
    heroDescription: "Stratégie d'acquisition B2B : LinkedIn Ads, Google Ads, ABM. Générez des leads qualifiés et atteignez les décideurs de votre marché.",
    metaTitle: 'Publicité B2B | LinkedIn Ads, Google Ads, ABM | Slashr',
    metaDescription: "Agence publicité B2B à Lille. Experts LinkedIn Ads, Google Ads B2B, Account-Based Marketing. Générez des leads qualifiés et atteignez les décideurs.",
    contentSection: {
      tag: 'Notre expertise',
      title: 'Agence publicité B2B spécialisée',
      content: "Slashr accompagne les entreprises B2B dans leur stratégie d'acquisition digitale. Notre approche combine la précision du ciblage LinkedIn avec la puissance de Google Ads et les techniques d'Account-Based Marketing (ABM) pour atteindre les décideurs de votre marché.",
      bulletPoints: [
        'LinkedIn Ads avec ciblage décideurs',
        'Google Ads B2B (Search, Display, YouTube)',
        'Account-Based Marketing (ABM)',
        'Lead generation et nurturing',
        'Attribution multi-touch B2B',
      ],
    },
    methodology: [
      { number: 1, title: 'Définition des cibles', description: "Identification des personas, fonctions décisionnaires, secteurs et tailles d'entreprises à cibler." },
      { number: 2, title: 'Stratégie multi-canal', description: "Définition du mix LinkedIn Ads / Google Ads / Display selon vos objectifs et votre cycle de vente." },
      { number: 3, title: 'Création des campagnes', description: "Messages adaptés au B2B, contenus à valeur ajoutée, landing pages optimisées pour la conversion." },
      { number: 4, title: 'Lead management', description: "Intégration CRM, scoring des leads, suivi du cycle de vente pour optimiser le ROI réel." },
    ],
    benefits: [
      { icon: 'target', title: 'Ciblage décideurs précis', description: "LinkedIn permet de cibler par fonction, séniorité, secteur, taille d'entreprise. Atteignez directement les décideurs.", size: 'large', highlight: 'décideurs' },
      { icon: 'user', title: 'Account-Based Marketing', description: "Ciblez nominativement les entreprises de votre liste de prospects. Personnalisation maximale pour les grands comptes.", size: 'medium' },
      { icon: 'chart', title: 'Attribution B2B', description: "Suivi du parcours complet du lead au deal. Mesurez le vrai ROI de vos campagnes sur des cycles longs.", size: 'medium' },
      { icon: 'zap', title: 'Lead Gen Forms', description: "Formulaires natifs LinkedIn pré-remplis pour maximiser les conversions. Intégration directe avec votre CRM.", size: 'medium' },
    ],
    vigilancePoints: [
      { title: 'CPC élevés sur LinkedIn', description: "Les CPCs LinkedIn sont 3-5x plus chers que Google. La qualité du ciblage doit compenser. Un lead B2B qualifié vaut ce prix." },
      { title: 'Contenu trop commercial', description: "Les décideurs B2B cherchent de la valeur, pas des pitchs. Le contenu éducatif (guides, études) performe mieux que les offres directes." },
      { title: 'Cycle de vente ignoré', description: "Le B2B a des cycles longs. Des campagnes mesurées à court terme semblent peu performantes mais génèrent des deals plus tard." },
      { title: "Pas d'alignement sales/marketing", description: "Sans coordination avec les commerciaux, les leads générés ne sont pas traités correctement et le ROI est mal mesuré." },
    ],
    faqs: [
      { question: "LinkedIn Ads ou Google Ads pour le B2B ?", answer: "Les deux ont leur place. LinkedIn excelle pour le ciblage par fonction et séniorité. Google Ads capte l'intention de recherche. Une stratégie B2B complète combine les deux canaux." },
      { question: "Quel budget pour LinkedIn Ads ?", answer: "Minimum 2000-3000€/mois pour avoir des résultats significatifs. Les CPCs élevés (5-15€) nécessitent un budget conséquent, mais les leads sont très qualifiés." },
      { question: "Comment mesurer le ROI en B2B ?", answer: "L'attribution B2B nécessite de suivre le lead jusqu'à la signature. Intégration CRM, suivi des opportunités, attribution multi-touch sur plusieurs mois." },
    ],
    otherExpertises: [
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Lead Generation', href: '/ads/lead-generation' },
      { name: 'Tracking', href: '/ads/tracking' },
    ],
    pricing: { tjm: '500-700€', description: "Gestion B2B selon complexité du ciblage" },
  },
  // Audit Campagnes
  {
    slug: 'audit-campagnes',
    title: 'Audit Campagnes Publicitaires',
    tag: 'Audit Ads',
    category: 'transverse',
    heroDescription: "Audit professionnel de vos campagnes Google Ads, Meta Ads, LinkedIn Ads. Identifiez les leviers d'optimisation et maximisez votre ROI publicitaire.",
    metaTitle: 'Audit Campagnes Publicitaires | Google Ads, Meta Ads | Slashr',
    metaDescription: "Audit professionnel de vos campagnes Ads : analyse des annonces, mots-clés, ciblage, enchères. Identifiez les leviers d'optimisation de vos performances.",
    contentSection: {
      tag: 'Notre expertise',
      title: "Audit complet de vos campagnes publicitaires",
      content: "Un audit de campagnes permet d'identifier rapidement les opportunités d'optimisation et les sources de déperdition budgétaire. Notre équipe analyse en profondeur la structure de vos comptes, la pertinence de vos ciblages, la qualité de vos annonces et l'efficacité de votre tracking.",
      bulletPoints: [
        'Analyse structure de compte',
        'Audit des mots-clés et ciblages',
        'Évaluation des annonces et créatifs',
        'Vérification du tracking et des conversions',
        'Recommandations priorisées',
      ],
    },
    methodology: [
      { number: 1, title: 'Collecte des accès', description: "Accès en lecture seule à vos comptes publicitaires et analytics pour une analyse complète." },
      { number: 2, title: 'Analyse approfondie', description: "Revue méthodique de chaque composante : structure, ciblages, annonces, enchères, tracking." },
      { number: 3, title: 'Diagnostic performances', description: "Analyse des KPIs : CTR, CPC, taux de conversion, ROAS. Identification des points forts et axes d'amélioration." },
      { number: 4, title: 'Recommandations', description: "Livrable complet avec diagnostic, recommandations priorisées et plan d'action pour optimiser vos performances." },
    ],
    benefits: [
      { icon: 'clipboard', title: 'Diagnostic complet', description: "Analyse exhaustive de vos campagnes : structure, annonces, mots-clés, ciblage, enchères et tracking. Aucun aspect n'est négligé.", size: 'large', highlight: 'complet' },
      { icon: 'chart', title: 'Analyse des performances', description: "Revue détaillée de vos KPIs : CTR, CPC, taux de conversion, coût par acquisition, ROAS. Benchmark avec votre secteur.", size: 'medium' },
      { icon: 'target', title: 'Optimisations identifiées', description: "Liste concrète des actions à mener pour améliorer vos performances. Chaque recommandation est argumentée.", size: 'medium' },
      { icon: 'zap', title: 'Quick wins', description: "Identification des optimisations rapides à implémenter pour des gains immédiats sur vos campagnes.", size: 'medium' },
    ],
    vigilancePoints: [
      { title: 'Historique de données insuffisant', description: "Un audit pertinent nécessite au moins 3 mois de données. Avec moins, les conclusions peuvent être biaisées." },
      { title: 'Tracking non fiable', description: "Si votre tracking est mal configuré, l'audit des performances sera faussé. Nous commençons toujours par valider la fiabilité des données." },
      { title: "Pas d'objectifs définis", description: "Sans objectifs clairs (ROAS cible, CPL max), difficile d'évaluer si les performances sont bonnes ou non." },
      { title: 'Audit sans suite', description: "Un audit n'a de valeur que si les recommandations sont implémentées. Prévoyez les ressources pour la mise en œuvre." },
    ],
    faqs: [
      { question: "Pourquoi faire auditer mes campagnes ?", answer: "Même des comptes bien gérés ont généralement 15-30% de potentiel d'amélioration identifiable via un audit. Un regard externe identifie les angles morts et les opportunités inexploitées." },
      { question: "Que comprend un audit de campagnes ?", answer: "Nous analysons la structure des comptes, l'organisation des campagnes, la pertinence des mots-clés, la qualité des annonces, les stratégies d'enchères, le tracking et les performances globales." },
      { question: "Combien de temps dure un audit ?", answer: "Comptez 5 à 10 jours selon la complexité de vos comptes. Nous livrons ensuite un rapport détaillé avec présentation des recommandations." },
      { question: "Faut-il donner les accès administrateur ?", answer: "Non, un accès en lecture seule suffit pour l'audit. Aucune modification n'est effectuée pendant l'audit." },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Meta Ads', href: '/ads/social/meta-ads' },
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'Tracking', href: '/ads/tracking' },
    ],
    pricing: { tjm: '600-800€', description: "Audit selon nombre de comptes et complexité" },
  },
  // Landing Pages
  {
    slug: 'landing-pages',
    title: 'Landing Pages & CRO',
    tag: 'Landing Pages',
    category: 'transverse',
    heroDescription: "Création de landing pages optimisées pour la conversion. Design, copywriting et A/B testing pour maximiser le ROI de vos campagnes publicitaires.",
    metaTitle: 'Landing Pages & CRO | Conversion Optimization | Slashr',
    metaDescription: "Création de landing pages qui convertissent. Design, copywriting persuasif, A/B testing. Maximisez le taux de conversion de vos campagnes publicitaires.",
    contentSection: {
      tag: 'Notre expertise',
      title: "Landing pages optimisées pour la conversion",
      content: "Une landing page efficace est la clé du succès de vos campagnes publicitaires. Notre équipe combine design, copywriting persuasif et optimisation continue pour créer des pages qui transforment vos visiteurs en clients.",
      bulletPoints: [
        'Design orienté conversion',
        'Copywriting persuasif',
        'A/B testing continu',
        'Optimisation mobile-first',
        'Tracking des micro-conversions',
      ],
    },
    methodology: [
      { number: 1, title: 'Analyse & Brief', description: "Compréhension de votre offre, de votre cible et des objectifs de conversion. Analyse de la concurrence." },
      { number: 2, title: 'Conception', description: "Wireframes, copywriting, design. Construction d'une page structurée pour guider vers la conversion." },
      { number: 3, title: 'Développement', description: "Intégration responsive, optimisation vitesse, mise en place du tracking et des formulaires." },
      { number: 4, title: 'Optimisation', description: "A/B testing des éléments clés : titres, CTA, formulaires. Amélioration continue du taux de conversion." },
    ],
    benefits: [
      { icon: 'target', title: 'Taux de conversion optimisé', description: "Une landing page dédiée convertit 2 à 5 fois mieux qu'une page générique. Chaque élément est pensé pour la conversion.", size: 'large', highlight: 'conversion' },
      { icon: 'zap', title: 'Message aligné', description: "Cohérence parfaite entre votre annonce et votre landing page. Le visiteur trouve exactement ce qui était promis.", size: 'medium' },
      { icon: 'chart', title: 'A/B testing', description: "Tests continus des variantes pour identifier ce qui performe le mieux. Décisions basées sur les données.", size: 'medium' },
      { icon: 'rocket', title: 'Chargement rapide', description: "Performance technique optimisée pour un chargement instantané. Chaque seconde de délai coûte des conversions.", size: 'medium' },
    ],
    vigilancePoints: [
      { title: 'Message incohérent', description: "La landing page doit tenir la promesse de l'annonce. Un décalage entre les deux fait fuir les visiteurs." },
      { title: 'Trop de distractions', description: "Une landing page efficace a un seul objectif. Évitez les menus de navigation, liens sortants et options multiples." },
      { title: 'Formulaire trop long', description: "Chaque champ supplémentaire réduit le taux de complétion. Ne demandez que l'essentiel." },
      { title: 'Pas de preuve sociale', description: "Témoignages, logos clients, avis : la preuve sociale rassure et augmente les conversions." },
    ],
    faqs: [
      { question: "Pourquoi une landing page plutôt que mon site ?", answer: "Une landing page dédiée élimine les distractions et se concentre sur un seul objectif de conversion. Elle permet aussi un message parfaitement aligné avec votre annonce publicitaire." },
      { question: "Combien coûte une landing page ?", answer: "Comptez entre 2000€ et 5000€ pour une landing page professionnelle avec copywriting, design et développement. Le ROI se mesure en quelques semaines via l'amélioration du taux de conversion." },
      { question: "Qu'est-ce que le CRO ?", answer: "Le CRO (Conversion Rate Optimization) est l'optimisation continue du taux de conversion via l'A/B testing, l'analyse comportementale et l'amélioration itérative des pages." },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Meta Ads', href: '/ads/social/meta-ads' },
      { name: 'Lead Generation', href: '/ads/lead-generation' },
      { name: 'Tracking', href: '/ads/tracking' },
    ],
    pricing: { tjm: '500-700€', description: "Création landing page selon complexité" },
  },
  // Lead Generation
  {
    slug: 'lead-generation',
    title: 'Lead Generation Ads',
    tag: 'Lead Gen',
    category: 'transverse',
    heroDescription: "Stratégie de génération de leads via publicité digitale. Facebook Lead Ads, LinkedIn Lead Gen Forms, Google Ads. Alimentez votre pipeline commercial.",
    metaTitle: 'Lead Generation Ads | Facebook, LinkedIn, Google | Slashr',
    metaDescription: "Agence lead generation à Lille. Experts Facebook Lead Ads, LinkedIn Lead Gen Forms. Générez des leads qualifiés pour alimenter votre pipeline commercial.",
    contentSection: {
      tag: 'Notre expertise',
      title: "Génération de leads via publicité digitale",
      content: "La génération de leads est au cœur de la croissance B2B et de nombreux business B2C. Notre équipe maîtrise les formats natifs de lead generation (Facebook Lead Ads, LinkedIn Lead Gen Forms) et les stratégies de conversion sur landing pages pour alimenter votre pipeline commercial.",
      bulletPoints: [
        'Facebook & Instagram Lead Ads',
        'LinkedIn Lead Gen Forms',
        'Google Ads avec landing pages',
        'Intégration CRM automatisée',
        'Lead scoring et qualification',
      ],
    },
    methodology: [
      { number: 1, title: 'Définition des leads', description: "Qualification du lead idéal, critères de scoring, processus de traitement. Alignement marketing/sales." },
      { number: 2, title: 'Stratégie multi-canal', description: "Sélection des canaux selon votre cible : Meta Lead Ads, LinkedIn, Google Ads avec landing pages dédiées." },
      { number: 3, title: 'Setup & Intégration', description: "Configuration des formulaires, intégration CRM, automatisation du flux de leads." },
      { number: 4, title: 'Optimisation CPL', description: "Test des audiences, messages et formulaires. Réduction continue du coût par lead qualifié." },
    ],
    benefits: [
      { icon: 'user', title: 'Formulaires natifs', description: "Les Lead Ads Facebook et LinkedIn pré-remplissent les formulaires. Taux de conversion jusqu'à 5x supérieur aux landing pages.", size: 'large', highlight: 'natifs' },
      { icon: 'zap', title: 'Intégration CRM', description: "Les leads arrivent directement dans votre CRM. Traitement immédiat, pas de lead perdu.", size: 'medium' },
      { icon: 'target', title: 'Ciblage précis', description: "Atteignez exactement votre cible avec les options de ciblage avancées de chaque plateforme.", size: 'medium' },
      { icon: 'chart', title: 'CPL maîtrisé', description: "Optimisation continue pour réduire le coût par lead tout en maintenant la qualité.", size: 'medium' },
    ],
    vigilancePoints: [
      { title: 'Leads non qualifiés', description: "Les formulaires trop simples génèrent du volume mais peu de qualité. Ajoutez des questions de qualification." },
      { title: 'Pas de traitement rapide', description: "Un lead contacté dans l'heure convertit 7x mieux. Automatisez les alertes et le premier contact." },
      { title: 'Tracking incomplet', description: "Suivez le lead jusqu'à la vente pour mesurer le vrai ROI. Le CPL seul ne suffit pas." },
      { title: 'Message générique', description: "Personnalisez vos messages selon l'audience. Un message B2B ne parle pas comme du B2C." },
    ],
    faqs: [
      { question: "Facebook Lead Ads ou landing page ?", answer: "Les Lead Ads offrent un taux de conversion supérieur grâce au pré-remplissage. Mais les landing pages permettent plus de qualification et un meilleur contexte. Testez les deux." },
      { question: "Comment améliorer la qualité des leads ?", answer: "Ajoutez des questions de qualification dans vos formulaires, excluez les audiences non pertinentes, et retargeter uniquement les visiteurs engagés." },
      { question: "Quel CPL viser ?", answer: "Le CPL acceptable dépend de votre panier moyen et taux de conversion. Un lead B2B à 50€ peut être rentable si le deal moyen est de 10k€." },
    ],
    otherExpertises: [
      { name: 'Meta Ads', href: '/ads/social/meta-ads' },
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'Landing Pages', href: '/ads/landing-pages' },
      { name: 'B2B Ads', href: '/ads/b2b' },
    ],
    pricing: { tjm: '450-600€', description: "Gestion lead gen selon volume et canaux" },
  },
  // Remarketing & Retargeting
  {
    slug: 'remarketing',
    title: 'Remarketing & Retargeting',
    tag: 'Remarketing',
    category: 'transverse',
    heroDescription: "Transformez vos visiteurs en clients avec le remarketing. Campagnes de retargeting display, social ads et email pour reconvertir vos prospects et maximiser vos conversions.",
    metaTitle: 'Agence Remarketing & Retargeting à Lille | Reciblage Publicitaire | Slashr',
    metaDescription: "Agence remarketing à Lille spécialisée dans le retargeting publicitaire. Transformez vos visiteurs en clients grâce à des campagnes de reciblage performantes sur Google, Facebook et le display.",
    contentSection: {
      tag: 'Notre expertise',
      title: 'Experts en remarketing et retargeting',
      content: "Slashr est une agence remarketing à Lille spécialisée dans le reciblage publicitaire. Notre équipe d'experts met en place des campagnes de retargeting multi-plateformes pour reconvertir vos visiteurs et transformer vos prospects en clients. Le remarketing vous permet de relancer les utilisateurs qui ont visité votre site sans convertir.",
      bulletPoints: [
        'Segmentation avancée des audiences',
        'Expertise multi-plateforme (Google, Meta, LinkedIn)',
        'Personnalisation des messages publicitaires',
        'Tracking et attribution des conversions',
        'Conformité RGPD garantie',
      ],
    },
    methodology: [
      { number: 1, title: 'Audit & Stratégie de reciblage', description: "Analyse de vos audiences, du parcours utilisateur et définition des segments de remarketing prioritaires selon vos objectifs de conversion." },
      { number: 2, title: 'Setup technique & Tracking', description: "Installation des pixels de tracking (Google Ads, Meta, LinkedIn), configuration des audiences et mise en place du suivi des conversions." },
      { number: 3, title: 'Création des campagnes', description: "Conception des annonces et visuels adaptés à chaque segment. Messages personnalisés selon l'étape du parcours d'achat du visiteur." },
      { number: 4, title: 'Optimisation continue', description: "Suivi des performances, ajustement des enchères et du ciblage, tests A/B des créas pour améliorer continuellement le taux de conversion." },
    ],
    benefits: [
      { icon: 'target', title: 'Audiences qualifiées', description: "Ciblez des visiteurs qui connaissent déjà votre marque et ont montré un intérêt pour vos produits. Un trafic de qualité avec une intention d'achat plus élevée.", size: 'large', highlight: 'qualifiées' },
      { icon: 'chart', title: 'ROI optimisé', description: "Le remarketing offre généralement un meilleur retour sur investissement que les campagnes d'acquisition grâce à des taux de conversion supérieurs.", size: 'medium' },
      { icon: 'zap', title: 'Multi-plateforme', description: "Suivez vos prospects sur Google, Facebook, Instagram, LinkedIn et des milliers de sites display pour maximiser les points de contact.", size: 'medium' },
      { icon: 'rocket', title: 'Personnalisation', description: "Adaptez vos messages selon le comportement et l'étape du parcours d'achat de chaque visiteur pour des annonces plus pertinentes.", size: 'medium' },
      { icon: 'globe', title: 'Couverture étendue', description: "Touchez vos audiences sur l'ensemble du web grâce aux réseaux display et aux plateformes sociales partenaires.", size: 'medium' },
      { icon: 'shield', title: 'RGPD compliant', description: "Des campagnes de reciblage respectueuses des réglementations européennes sur la protection des données.", size: 'large', highlight: 'RGPD compliant' },
    ],
    vigilancePoints: [
      { title: 'Fréquence de diffusion', description: "Un remarketing trop agressif peut irriter les utilisateurs et nuire à votre image. Limitez la fréquence d'exposition pour éviter la fatigue publicitaire." },
      { title: 'Durée des audiences', description: "Des listes de remarketing trop anciennes perdent en pertinence. Les utilisateurs ont peut-être déjà acheté ailleurs. Adaptez la durée de vos audiences." },
      { title: 'Exclusions mal configurées', description: "Ne pas exclure les clients convertis gaspille du budget et dégrade l'expérience utilisateur. Les exclusions d'audiences sont essentielles." },
      { title: 'Messages génériques', description: "Des annonces identiques pour tous les segments réduisent l'efficacité. La personnalisation selon le parcours utilisateur est clé." },
    ],
    faqs: [
      { question: "Quelle est la différence entre remarketing et retargeting ?", answer: "Les termes sont souvent interchangeables. Le retargeting désigne généralement le reciblage via bannières display ou social ads. Le remarketing englobe un périmètre plus large incluant aussi le reciblage email et la fidélisation." },
      { question: "Comment fonctionne le remarketing ?", answer: "Un pixel de tracking est installé sur votre site. Les visiteurs sont ajoutés à des listes d'audience segmentées. Des campagnes publicitaires ciblées sont ensuite diffusées à ces audiences sur d'autres sites et plateformes." },
      { question: "Quel budget pour des campagnes de remarketing ?", answer: "Le remarketing est généralement plus rentable que l'acquisition. Budgets recommandés : petites entreprises à partir de 500€/mois, PME 1000 à 3000€/mois, grandes entreprises 5000€+/mois." },
      { question: "Comment segmenter mes audiences de remarketing ?", answer: "Segmentation efficace : visiteurs de pages produits, abandonnistes panier, visiteurs blog, clients existants, durée depuis la dernière visite. Chaque segment reçoit des messages adaptés." },
      { question: "Le remarketing est-il compatible avec le RGPD ?", answer: "Oui, avec un consentement utilisateurs via bandeau cookies, une information claire, la possibilité de retrait du consentement et une durée de conservation limitée." },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Facebook Ads', href: '/ads/social/facebook-ads' },
      { name: 'LinkedIn Ads', href: '/ads/social/linkedin-ads' },
      { name: 'Programmatique', href: '/ads/programmatique' },
    ],
    pricing: { tjm: '450-600€', description: "Gestion remarketing selon volume et plateformes" },
  },
  // Programmatique
  {
    slug: 'programmatique',
    title: 'Publicité Programmatique',
    tag: 'Programmatique',
    category: 'transverse',
    heroDescription: "Agence programmatique à Lille spécialisée dans l'achat média automatisé. Campagnes display, vidéo et audio programmatiques pour maximiser la visibilité de votre marque.",
    metaTitle: 'Agence Programmatique à Lille | Publicité Display & Vidéo | Slashr',
    metaDescription: "Agence programmatique à Lille spécialisée dans l'achat média automatisé. Campagnes display, vidéo et audio programmatiques pour maximiser la visibilité de votre marque auprès de vos audiences cibles.",
    contentSection: {
      tag: 'Notre expertise',
      title: 'Agence programmatique experte en achat média',
      content: "Slashr est une agence programmatique à Lille spécialisée dans l'achat média automatisé. Notre équipe d'experts pilote vos campagnes display, vidéo et audio programmatiques sur les DSP leaders du marché pour maximiser la visibilité de votre marque auprès de vos audiences cibles.",
      bulletPoints: [
        'Display programmatique sur sites premium',
        'Vidéo pre-roll, mid-roll et outstream',
        'Ciblage data-driven (first, second, third party)',
        'Brand safety et environnements qualifiés',
        'Mesure et attribution avancées',
      ],
    },
    methodology: [
      { number: 1, title: 'Audit & Stratégie Data', description: "Analyse de votre marché, définition de vos audiences cibles et élaboration d'une stratégie programmatique alignée sur vos objectifs marketing." },
      { number: 2, title: 'Setup technique & Data', description: "Configuration des plateformes DSP, intégration des données first-party, création des segments d'audience et mise en place du tracking." },
      { number: 3, title: 'Création & Diffusion', description: "Production des formats publicitaires (display, vidéo), paramétrage des campagnes et lancement de la diffusion sur les sites premium." },
      { number: 4, title: 'Optimisation & Performance', description: "Accompagnement continu, optimisation des enchères et du ciblage, A/B testing des créas et mesure des résultats." },
    ],
    benefits: [
      { icon: 'target', title: 'Ciblage data-driven', description: "Exploitez la puissance des données pour toucher vos audiences avec précision. First-party data, segments d'intention, ciblage contextuel.", size: 'large', highlight: 'data-driven' },
      { icon: 'globe', title: 'Couverture massive', description: "Accédez à des milliers de sites et applications premium en France et à l'international pour maximiser la visibilité de votre marque.", size: 'medium' },
      { icon: 'zap', title: 'Enchères en temps réel', description: "L'achat programmatique optimise automatiquement vos enchères pour chaque impression, maximisant l'efficacité de votre budget média.", size: 'medium' },
      { icon: 'chart', title: 'Mesure précise', description: "Tracking avancé et attribution multi-touch pour comprendre l'impact réel de vos campagnes sur les résultats business.", size: 'medium' },
      { icon: 'rocket', title: 'Formats premium', description: "Display, vidéo, native, audio : des formats publicitaires engageants pour capter l'attention de votre audience.", size: 'medium' },
      { icon: 'shield', title: 'Brand Safety', description: "Diffusion sur des environnements qualifiés et sécurisés pour votre marque. Contrôle total sur les contextes de diffusion.", size: 'large', highlight: 'Brand Safety' },
    ],
    vigilancePoints: [
      { title: 'Budget média insuffisant', description: "Le programmatique nécessite un volume d'impressions significatif pour optimiser les algorithmes. Un budget trop faible limite l'apprentissage." },
      { title: 'Qualité des données', description: "La performance du ciblage dépend de la qualité des données. Des segments mal définis ou obsolètes dégradent l'efficacité." },
      { title: 'Créas non adaptées', description: "Des formats publicitaires génériques ou non optimisés réduisent l'engagement. Adaptez les contenus à chaque format." },
      { title: 'Absence de brand safety', description: "Sans stratégie de brand safety (listes blanches/noires), vos publicités peuvent apparaître dans des contextes inappropriés." },
    ],
    faqs: [
      { question: "Qu'est-ce que la publicité programmatique ?", answer: "La publicité programmatique est l'achat automatisé d'espaces publicitaires en temps réel via des plateformes technologiques (DSP). Les enchères se font instantanément pour chaque impression, permettant un ciblage précis et une optimisation continue." },
      { question: "Quelle différence entre programmatique et Google Display ?", answer: "Google Display Network est un réseau fermé appartenant à Google. La publicité programmatique via DSP offre un accès à un inventaire plus large, des données de ciblage plus riches, plus de transparence et des formats premium." },
      { question: "Quel budget pour des campagnes programmatiques ?", answer: "Budgets recommandés : campagnes display à partir de 3000€/mois, campagnes vidéo à partir de 5000€/mois, stratégie multi-formats à partir de 8000€/mois." },
      { question: "Comment fonctionne le ciblage en programmatique ?", answer: "Le ciblage s'appuie sur la data : données first-party (vos propres données), second-party (partenariats), third-party (segments achetés) et ciblage contextuel sur des contenus thématiques." },
      { question: "Sur quels sites mes publicités seront-elles diffusées ?", answer: "Nous sélectionnons des sites premium et brand-safe : éditeurs de presse nationaux, sites thématiques à forte audience, applications mobiles qualifiées, environnements vidéo (catch-up TV, streaming)." },
    ],
    otherExpertises: [
      { name: 'Google Ads', href: '/ads/sea/google-ads' },
      { name: 'Remarketing', href: '/ads/remarketing' },
      { name: 'Social Ads', href: '/ads/social' },
      { name: 'Tracking', href: '/ads/tracking' },
    ],
    pricing: { tjm: '600-800€', description: "Gestion programmatique selon budget média" },
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

// Fonctions pour les prestations SEA (route /ads/sea/[slug])
// SEA = Google Ads, Google Shopping (catégorie 'ads')
export function getSeaPrestations(): Prestation[] {
  return prestationsData.filter((p) => p.category === 'ads');
}

export function getSeaPrestationSlugs(): string[] {
  return getSeaPrestations().map((p) => p.slug);
}

export function getSeaPrestationBySlug(slug: string): Prestation | undefined {
  return prestationsData.find((p) => p.slug === slug && p.category === 'ads');
}

// Fonctions pour les prestations Social Ads (route /ads/social/[slug])
// Social = Facebook Ads, LinkedIn Ads, Social Ads (catégorie 'social')
export function getSocialPrestations(): Prestation[] {
  return prestationsData.filter((p) => p.category === 'social');
}

export function getSocialPrestationSlugs(): string[] {
  return getSocialPrestations().map((p) => p.slug);
}

export function getSocialPrestationBySlug(slug: string): Prestation | undefined {
  return prestationsData.find((p) => p.slug === slug && p.category === 'social');
}

// Fonctions pour les prestations Transverses Ads (route /ads/[slug])
// Transverse = tracking, ecommerce, b2b, audit-campagnes, landing-pages, lead-generation
export function getTransversePrestations(): Prestation[] {
  return prestationsData.filter((p) => p.category === 'transverse');
}

export function getTransversePrestationSlugs(): string[] {
  return getTransversePrestations().map((p) => p.slug);
}

export function getTransversePrestationBySlug(slug: string): Prestation | undefined {
  return prestationsData.find((p) => p.slug === slug && p.category === 'transverse');
}

// Fonction pour récupérer TOUTES les prestations Ads (SEA + Social + Transverse) avec leurs URLs
export function getAllAdsPrestations(): { slug: string; title: string; tag: string; href: string }[] {
  const seaPrestations = getSeaPrestations().map(p => ({
    slug: p.slug,
    title: p.title,
    tag: p.tag,
    href: `/ads/sea/${p.slug}`,
  }));

  const socialPrestations = getSocialPrestations().map(p => ({
    slug: p.slug,
    title: p.title,
    tag: p.tag,
    href: `/ads/social/${p.slug}`,
  }));

  const transversePrestations = getTransversePrestations().map(p => ({
    slug: p.slug,
    title: p.title,
    tag: p.tag,
    href: `/ads/${p.slug}`,
  }));

  return [...seaPrestations, ...socialPrestations, ...transversePrestations];
}
