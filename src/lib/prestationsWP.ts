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

// Interface principale Prestation enrichie
export interface Prestation {
  slug: string;
  title: string;
  tag: string;
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
}

// Données enrichies des prestations
export const prestationsData: Prestation[] = [
  {
    slug: 'seo-prestashop',
    title: 'Agence SEO Prestashop',
    tag: 'Prestashop',
    heroDescription: 'Vous avez une boutique en ligne sous Prestashop et cherchez à renforcer sa présence en ligne ? Notre agence SEO spécialisée dans Prestashop est la réponse à vos besoins. Découvrez notre méthode SLASHR.',
    metaTitle: 'Agence SEO Prestashop | Expert Référencement Naturel | Slashr',
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
          href: '/prestations/seo-local',
        },
        {
          text: 'Faire connaître sa boutique grâce à une',
          highlight: 'agence SEO e-commerce',
          href: '/prestations/seo-ecommerce',
        },
        {
          text: 'Accompagnement SEO à la',
          highlight: 'refonte de sites web / migration SEO',
          href: '/prestations/refonte-migration-seo',
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
      { name: 'WooCommerce', href: '/prestations/seo-woocommerce' },
      { name: 'Shopify', href: '/prestations/seo-shopify' },
      { name: 'Magento', href: '/prestations/seo-magento' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarification selon la complexité du projet',
    },
  },
  {
    slug: 'seo-shopify',
    title: 'Agence SEO Shopify',
    tag: 'Shopify',
    heroDescription: "Votre boutique Shopify mérite une visibilité optimale. Notre expertise SEO Shopify vous permet de maximiser votre potentiel sur les moteurs de recherche et d'augmenter vos ventes.",
    metaTitle: 'Agence SEO Shopify | Expert Référencement Shopify | Slashr',
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
      { name: 'PrestaShop', href: '/prestations/seo-prestashop' },
      { name: 'WooCommerce', href: '/prestations/seo-woocommerce' },
      { name: 'Magento', href: '/prestations/seo-magento' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Expertise Shopify et Shopify Plus',
    },
  },
  {
    slug: 'seo-woocommerce',
    title: 'Agence SEO WooCommerce',
    tag: 'WooCommerce',
    heroDescription: "WooCommerce propulse plus de 5 millions de boutiques et détient 40% du marché e-commerce mondial. Exploitez la puissance de WordPress et WooCommerce pour votre référencement.",
    metaTitle: 'Agence SEO WooCommerce | Expert WordPress E-commerce | Slashr',
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
      { name: 'PrestaShop', href: '/prestations/seo-prestashop' },
      { name: 'Shopify', href: '/prestations/seo-shopify' },
      { name: 'Magento', href: '/prestations/seo-magento' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Expertise WordPress et WooCommerce',
    },
  },
  {
    slug: 'seo-magento',
    title: 'Agence SEO Magento',
    tag: 'Magento',
    heroDescription: "Magento (Adobe Commerce) est la solution enterprise pour le e-commerce à grande échelle. Notre expertise vous permet d'exploiter sa puissance technique pour un SEO performant.",
    metaTitle: 'Agence SEO Magento | Expert Adobe Commerce | Slashr',
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
      { name: 'PrestaShop', href: '/prestations/seo-prestashop' },
      { name: 'Shopify', href: '/prestations/seo-shopify' },
      { name: 'WooCommerce', href: '/prestations/seo-woocommerce' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Expertise Magento 2 et Adobe Commerce',
    },
  },
  {
    slug: 'seo-ecommerce',
    title: 'SEO E-commerce',
    tag: 'E-commerce',
    heroDescription: "93% des expériences en ligne commencent par un moteur de recherche. Maximisez les ventes de votre boutique en ligne grâce à une stratégie SEO e-commerce adaptée à vos enjeux.",
    metaTitle: 'SEO E-commerce - Référencement Boutique en Ligne | Slashr',
    metaDescription: 'Boostez les ventes de votre e-commerce avec un SEO adapté. Optimisation fiches produits, catégories et architecture de site. Expertise e-commerce prouvée.',
    contentSection: {
      tag: 'E-commerce',
      title: 'Le SEO, levier de croissance e-commerce',
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
      { name: 'PrestaShop', href: '/prestations/seo-prestashop' },
      { name: 'Shopify', href: '/prestations/seo-shopify' },
      { name: 'WooCommerce', href: '/prestations/seo-woocommerce' },
      { name: 'Magento', href: '/prestations/seo-magento' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Accompagnement adapté à la taille de votre catalogue',
    },
  },
  {
    slug: 'seo-local',
    title: 'SEO Local',
    tag: 'Local',
    heroDescription: "46% des recherches Google ont une intention locale. Dominez les résultats de recherche dans votre zone de chalandise et attirez les clients de proximité.",
    metaTitle: 'SEO Local - Visibilité Google Maps et Recherche Locale | Slashr',
    metaDescription: 'Dominez les résultats locaux avec notre expertise SEO local. Optimisation Google Business Profile, citations et avis clients.',
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
      { name: 'SEO E-commerce', href: '/prestations/seo-ecommerce' },
      { name: 'SEO International', href: '/prestations/seo-international' },
      { name: 'Google Ads', href: '/prestations/google-ads' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Forfaits adaptés selon le nombre d\'établissements',
    },
  },
  {
    slug: 'seo-international',
    title: 'SEO International',
    tag: 'International',
    heroDescription: "Développez votre présence SEO à l'international. Stratégie multilingue, hreflang et adaptation culturelle pour conquérir de nouveaux marchés.",
    metaTitle: 'SEO International - Référencement Multilingue | Slashr',
    metaDescription: "Développez votre présence SEO à l'international. Stratégie multilingue, hreflang et adaptation culturelle pour chaque marché.",
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
      { name: 'SEO E-commerce', href: '/prestations/seo-ecommerce' },
      { name: 'SEO Local', href: '/prestations/seo-local' },
      { name: 'Migration SEO', href: '/prestations/refonte-migration-seo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarification selon le nombre de marchés cibles',
    },
  },
  {
    slug: 'refonte-migration-seo',
    title: 'Refonte & Migration SEO',
    tag: 'Migration',
    heroDescription: "Une refonte mal préparée peut anéantir des années de travail SEO. Notre méthodologie éprouvée sécurise votre trafic et transforme ce risque en opportunité.",
    metaTitle: 'Refonte & Migration SEO - Préservez Votre Trafic | Slashr',
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
      { name: 'SEO E-commerce', href: '/prestations/seo-ecommerce' },
      { name: 'SEO International', href: '/prestations/seo-international' },
      { name: 'SEO Prestashop', href: '/prestations/seo-prestashop' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Forfait projet selon la complexité de la migration',
    },
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    tag: 'SEA',
    heroDescription: "Le SEA complète parfaitement le SEO. Nos campagnes Google Ads vous permettent d'obtenir des résultats immédiats pendant que votre stratégie SEO se déploie.",
    metaTitle: 'Google Ads - Gestion Campagnes SEA Performantes | Slashr',
    metaDescription: 'Maximisez votre ROI avec nos campagnes Google Ads. Search, Shopping, Display : expertise SEA pour des résultats immédiats.',
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
      { name: 'SEO E-commerce', href: '/prestations/seo-ecommerce' },
      { name: 'SEO Local', href: '/prestations/seo-local' },
      { name: 'Formation SEO', href: '/prestations/formation-seo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Frais de gestion + budget média selon vos objectifs',
    },
  },
  {
    slug: 'formation-seo',
    title: 'Formation SEO',
    tag: 'Formation',
    heroDescription: "Le SEO évolue constamment. Nos formations permettent à vos équipes de développer les compétences nécessaires pour être autonomes et performantes.",
    metaTitle: 'Formation SEO - Montée en Compétences Équipes | Slashr',
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
      { name: 'SEO E-commerce', href: '/prestations/seo-ecommerce' },
      { name: 'Google Ads', href: '/prestations/google-ads' },
      { name: 'Migration SEO', href: '/prestations/refonte-migration-seo' },
    ],
    pricing: {
      tjm: '600-800€',
      description: 'Tarif par jour de formation, dégressif selon la durée',
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
      const slug = exp.href.replace('/prestations/', '');
      return getPrestationBySlug(slug);
    })
    .filter((p): p is Prestation => p !== undefined);
}
