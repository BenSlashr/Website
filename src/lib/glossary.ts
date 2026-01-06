// Glossaire SEO complet - Définitions des termes techniques
export interface GlossaryTerm {
  term: string;
  aliases?: string[]; // Variantes du terme (pluriel, anglais, etc.)
  definition: string;
  category: 'general' | 'technical' | 'content' | 'netlinking' | 'analytics' | 'local' | 'ecommerce' | 'ai';
}

export const glossary: GlossaryTerm[] = [
  // === GÉNÉRAL / FONDAMENTAUX ===
  {
    term: 'SEO',
    aliases: ['référencement naturel', 'référencement organique', 'Search Engine Optimization'],
    definition: 'Search Engine Optimization. Ensemble des techniques visant à améliorer le positionnement d\'un site web dans les résultats naturels des moteurs de recherche.',
    category: 'general',
  },
  {
    term: 'SERP',
    aliases: ['SERPs', 'page de résultats'],
    definition: 'Search Engine Results Page. Page affichée par un moteur de recherche en réponse à une requête utilisateur.',
    category: 'general',
  },
  {
    term: 'SEA',
    aliases: ['référencement payant', 'Search Engine Advertising'],
    definition: 'Search Engine Advertising. Publicité payante sur les moteurs de recherche (Google Ads, Bing Ads).',
    category: 'general',
  },
  {
    term: 'SEM',
    aliases: ['Search Engine Marketing'],
    definition: 'Search Engine Marketing. Regroupe l\'ensemble des techniques de marketing sur les moteurs de recherche (SEO + SEA).',
    category: 'general',
  },
  {
    term: 'SMO',
    aliases: ['Social Media Optimization'],
    definition: 'Social Media Optimization. Optimisation de la présence sur les réseaux sociaux pour améliorer la visibilité.',
    category: 'general',
  },
  {
    term: 'algorithme',
    aliases: ['algorithmes', 'algo'],
    definition: 'Programme informatique utilisé par les moteurs de recherche pour classer les pages web. Google utilise plus de 200 facteurs de ranking.',
    category: 'general',
  },
  {
    term: 'ranking',
    aliases: ['classement', 'positionnement'],
    definition: 'Position d\'une page web dans les résultats de recherche pour une requête donnée.',
    category: 'general',
  },
  {
    term: 'mot-clé',
    aliases: ['mots-clés', 'keyword', 'keywords', 'requête', 'requêtes'],
    definition: 'Terme ou expression que les utilisateurs saisissent dans un moteur de recherche. Base de toute stratégie SEO.',
    category: 'general',
  },
  {
    term: 'longue traîne',
    aliases: ['long tail', 'long-tail'],
    definition: 'Expressions de recherche longues et spécifiques (3+ mots) avec moins de volume mais un meilleur taux de conversion.',
    category: 'general',
  },
  {
    term: 'intention de recherche',
    aliases: ['search intent', 'intent'],
    definition: 'Objectif réel de l\'utilisateur derrière sa requête : informationnelle, navigationnelle, transactionnelle ou commerciale.',
    category: 'general',
  },
  {
    term: 'trafic organique',
    aliases: ['trafic naturel', 'organic traffic'],
    definition: 'Visites provenant des résultats de recherche naturels (non payants) des moteurs de recherche.',
    category: 'general',
  },
  {
    term: 'CTR',
    aliases: ['Click Through Rate', 'taux de clic'],
    definition: 'Click Through Rate. Pourcentage d\'utilisateurs qui cliquent sur un lien par rapport au nombre total d\'impressions.',
    category: 'general',
  },
  {
    term: 'impression',
    aliases: ['impressions'],
    definition: 'Nombre de fois qu\'une page apparaît dans les résultats de recherche, qu\'elle soit cliquée ou non.',
    category: 'general',
  },
  {
    term: 'position zéro',
    aliases: ['featured snippet', 'position 0'],
    definition: 'Encadré mis en avant au-dessus des résultats classiques, extrayant une réponse directe depuis un site web.',
    category: 'general',
  },
  {
    term: 'People Also Ask',
    aliases: ['PAA', 'Autres questions posées'],
    definition: 'Section des SERP affichant des questions connexes à la requête initiale avec des réponses déroulantes.',
    category: 'general',
  },
  {
    term: 'Knowledge Graph',
    aliases: ['Knowledge Panel'],
    definition: 'Base de connaissances de Google affichant des informations structurées sur des entités (personnes, entreprises, lieux).',
    category: 'general',
  },

  // === TECHNIQUE ===
  {
    term: 'crawl',
    aliases: ['crawling', 'exploration'],
    definition: 'Processus par lequel les robots des moteurs de recherche parcourent et analysent les pages web.',
    category: 'technical',
  },
  {
    term: 'Googlebot',
    aliases: ['bot Google', 'robot Google', 'spider'],
    definition: 'Robot d\'exploration de Google qui parcourt le web pour découvrir et indexer les pages.',
    category: 'technical',
  },
  {
    term: 'indexation',
    aliases: ['index', 'indexer'],
    definition: 'Processus par lequel Google ajoute une page à sa base de données pour qu\'elle puisse apparaître dans les résultats.',
    category: 'technical',
  },
  {
    term: 'robots.txt',
    definition: 'Fichier texte à la racine d\'un site indiquant aux robots quelles pages explorer ou ignorer.',
    category: 'technical',
  },
  {
    term: 'sitemap',
    aliases: ['sitemap XML', 'plan de site'],
    definition: 'Fichier XML listant toutes les URLs d\'un site pour faciliter leur découverte par les moteurs de recherche.',
    category: 'technical',
  },
  {
    term: 'balise title',
    aliases: ['title tag', 'titre SEO', 'meta title'],
    definition: 'Balise HTML définissant le titre d\'une page, affiché dans les SERP et l\'onglet du navigateur. Facteur de ranking important.',
    category: 'technical',
  },
  {
    term: 'meta description',
    aliases: ['meta-description', 'description meta'],
    definition: 'Balise HTML décrivant le contenu d\'une page. Affichée sous le titre dans les SERP, elle influence le CTR.',
    category: 'technical',
  },
  {
    term: 'balise H1',
    aliases: ['H1', 'titre H1', 'heading 1'],
    definition: 'Balise HTML du titre principal d\'une page. Il ne doit y en avoir qu\'un seul par page.',
    category: 'technical',
  },
  {
    term: 'balises Hn',
    aliases: ['H2', 'H3', 'H4', 'headings', 'structure Hn'],
    definition: 'Balises HTML structurant le contenu en hiérarchie (H1 à H6). Essentielles pour l\'accessibilité et le SEO.',
    category: 'technical',
  },
  {
    term: 'balise alt',
    aliases: ['attribut alt', 'alt text', 'texte alternatif'],
    definition: 'Attribut HTML décrivant le contenu d\'une image pour les moteurs de recherche et l\'accessibilité.',
    category: 'technical',
  },
  {
    term: 'URL',
    aliases: ['URLs', 'adresse web'],
    definition: 'Uniform Resource Locator. Adresse unique d\'une page web. Une URL optimisée est courte, descriptive et contient le mot-clé.',
    category: 'technical',
  },
  {
    term: 'slug',
    definition: 'Partie de l\'URL identifiant une page spécifique, généralement après le nom de domaine.',
    category: 'technical',
  },
  {
    term: 'canonical',
    aliases: ['balise canonical', 'URL canonique', 'rel canonical'],
    definition: 'Balise indiquant la version principale d\'une page en cas de contenu dupliqué ou similaire.',
    category: 'technical',
  },
  {
    term: 'hreflang',
    aliases: ['balise hreflang'],
    definition: 'Attribut HTML indiquant la langue et la région ciblée d\'une page pour le SEO international.',
    category: 'technical',
  },
  {
    term: 'redirection 301',
    aliases: ['301', 'redirect 301'],
    definition: 'Redirection permanente transférant le jus SEO de l\'ancienne URL vers la nouvelle.',
    category: 'technical',
  },
  {
    term: 'redirection 302',
    aliases: ['302', 'redirect 302'],
    definition: 'Redirection temporaire ne transférant pas le jus SEO. À utiliser avec précaution.',
    category: 'technical',
  },
  {
    term: 'erreur 404',
    aliases: ['404', 'page 404', 'not found'],
    definition: 'Code HTTP indiquant qu\'une page n\'existe pas. Trop d\'erreurs 404 nuisent au crawl budget.',
    category: 'technical',
  },
  {
    term: 'erreur 500',
    aliases: ['500', 'erreur serveur'],
    definition: 'Code HTTP indiquant une erreur côté serveur. Impacte négativement le crawl et l\'expérience utilisateur.',
    category: 'technical',
  },
  {
    term: 'Core Web Vitals',
    aliases: ['CWV', 'signaux web essentiels'],
    definition: 'Métriques de Google mesurant l\'expérience utilisateur : LCP (chargement), INP (interactivité), CLS (stabilité visuelle).',
    category: 'technical',
  },
  {
    term: 'LCP',
    aliases: ['Largest Contentful Paint'],
    definition: 'Largest Contentful Paint. Mesure le temps de chargement du plus grand élément visible. Idéalement < 2,5 secondes.',
    category: 'technical',
  },
  {
    term: 'INP',
    aliases: ['Interaction to Next Paint'],
    definition: 'Interaction to Next Paint. Mesure la réactivité aux interactions utilisateur. Remplace le FID depuis 2024.',
    category: 'technical',
  },
  {
    term: 'CLS',
    aliases: ['Cumulative Layout Shift'],
    definition: 'Cumulative Layout Shift. Mesure la stabilité visuelle de la page. Idéalement < 0,1.',
    category: 'technical',
  },
  {
    term: 'FID',
    aliases: ['First Input Delay'],
    definition: 'First Input Delay. Ancienne métrique de réactivité, remplacée par l\'INP en mars 2024.',
    category: 'technical',
  },
  {
    term: 'TTFB',
    aliases: ['Time To First Byte'],
    definition: 'Time To First Byte. Temps entre la requête et la réception du premier octet de réponse du serveur.',
    category: 'technical',
  },
  {
    term: 'lazy loading',
    aliases: ['chargement différé'],
    definition: 'Technique chargeant les images et médias uniquement lorsqu\'ils deviennent visibles à l\'écran.',
    category: 'technical',
  },
  {
    term: 'minification',
    aliases: ['minifier'],
    definition: 'Réduction de la taille des fichiers CSS, JS et HTML en supprimant les caractères inutiles.',
    category: 'technical',
  },
  {
    term: 'CDN',
    aliases: ['Content Delivery Network'],
    definition: 'Content Delivery Network. Réseau de serveurs distribuant le contenu depuis le serveur le plus proche de l\'utilisateur.',
    category: 'technical',
  },
  {
    term: 'HTTPS',
    aliases: ['SSL', 'TLS', 'certificat SSL'],
    definition: 'Protocole sécurisé de transfert de données. Facteur de ranking depuis 2014.',
    category: 'technical',
  },
  {
    term: 'mobile-first',
    aliases: ['mobile first indexing'],
    definition: 'Approche de Google indexant en priorité la version mobile des sites depuis 2019.',
    category: 'technical',
  },
  {
    term: 'responsive design',
    aliases: ['design responsive', 'responsive'],
    definition: 'Conception web adaptant automatiquement l\'affichage à la taille de l\'écran.',
    category: 'technical',
  },
  {
    term: 'AMP',
    aliases: ['Accelerated Mobile Pages'],
    definition: 'Accelerated Mobile Pages. Framework Google pour créer des pages mobiles ultra-rapides (moins utilisé aujourd\'hui).',
    category: 'technical',
  },
  {
    term: 'JavaScript',
    aliases: ['JS'],
    definition: 'Langage de programmation web. Son mauvais usage peut bloquer l\'indexation par les moteurs de recherche.',
    category: 'technical',
  },
  {
    term: 'rendu côté serveur',
    aliases: ['SSR', 'Server Side Rendering'],
    definition: 'Technique générant le HTML sur le serveur, facilitant l\'indexation du contenu JavaScript.',
    category: 'technical',
  },
  {
    term: 'SPA',
    aliases: ['Single Page Application'],
    definition: 'Single Page Application. Application web chargeant dynamiquement le contenu sans recharger la page.',
    category: 'technical',
  },
  {
    term: 'crawl budget',
    aliases: ['budget de crawl'],
    definition: 'Nombre de pages que Googlebot peut et veut crawler sur un site dans un temps donné.',
    category: 'technical',
  },
  {
    term: 'log',
    aliases: ['logs', 'logs serveur', 'fichiers log'],
    definition: 'Fichiers enregistrant toutes les requêtes reçues par un serveur, permettant d\'analyser le comportement des bots.',
    category: 'technical',
  },
  {
    term: 'pagination',
    definition: 'Division du contenu en plusieurs pages numérotées. Nécessite une gestion SEO spécifique.',
    category: 'technical',
  },
  {
    term: 'fil d\'Ariane',
    aliases: ['breadcrumb', 'breadcrumbs'],
    definition: 'Navigation secondaire montrant le chemin hiérarchique de la page actuelle. Améliore l\'UX et le SEO.',
    category: 'technical',
  },
  {
    term: 'données structurées',
    aliases: ['structured data', 'schema markup', 'balisage schema'],
    definition: 'Code ajouté au HTML pour aider les moteurs à comprendre le contenu et générer des rich snippets.',
    category: 'technical',
  },
  {
    term: 'Schema.org',
    aliases: ['schema'],
    definition: 'Vocabulaire standardisé de balisage structuré reconnu par Google, Bing et Yahoo.',
    category: 'technical',
  },
  {
    term: 'JSON-LD',
    definition: 'Format recommandé par Google pour implémenter les données structurées dans le code source.',
    category: 'technical',
  },
  {
    term: 'rich snippet',
    aliases: ['rich snippets', 'extrait enrichi'],
    definition: 'Résultat de recherche enrichi d\'informations supplémentaires (étoiles, prix, FAQ, etc.).',
    category: 'technical',
  },
  {
    term: 'noindex',
    aliases: ['meta noindex'],
    definition: 'Directive indiquant aux moteurs de ne pas indexer une page.',
    category: 'technical',
  },
  {
    term: 'nofollow',
    aliases: ['rel nofollow'],
    definition: 'Attribut indiquant aux moteurs de ne pas suivre un lien ou de ne pas transmettre de jus SEO.',
    category: 'technical',
  },
  {
    term: 'dofollow',
    definition: 'Lien standard transmettant le jus SEO (par défaut, tous les liens sont dofollow).',
    category: 'technical',
  },
  {
    term: 'UGC',
    aliases: ['rel ugc', 'User Generated Content'],
    definition: 'User Generated Content. Attribut pour les liens dans le contenu généré par les utilisateurs.',
    category: 'technical',
  },
  {
    term: 'sponsored',
    aliases: ['rel sponsored'],
    definition: 'Attribut pour identifier les liens sponsorisés ou publicitaires.',
    category: 'technical',
  },

  // === CONTENU ===
  {
    term: 'contenu dupliqué',
    aliases: ['duplicate content', 'contenu en double'],
    definition: 'Contenu identique ou très similaire accessible via plusieurs URLs. Peut diluer le ranking.',
    category: 'content',
  },
  {
    term: 'cannibalisation',
    aliases: ['cannibalisation SEO', 'keyword cannibalization'],
    definition: 'Situation où plusieurs pages d\'un même site se font concurrence sur les mêmes mots-clés.',
    category: 'content',
  },
  {
    term: 'thin content',
    aliases: ['contenu pauvre', 'contenu mince'],
    definition: 'Pages avec peu de contenu ou de valeur ajoutée, pénalisées par Google.',
    category: 'content',
  },
  {
    term: 'contenu cornerstone',
    aliases: ['cornerstone content', 'contenu pilier'],
    definition: 'Articles fondamentaux et complets sur un sujet clé, servant de hub pour le maillage interne.',
    category: 'content',
  },
  {
    term: 'cocon sémantique',
    aliases: ['siloing', 'silo'],
    definition: 'Architecture de contenu organisant les pages par thématiques avec un maillage interne optimisé.',
    category: 'content',
  },
  {
    term: 'maillage interne',
    aliases: ['internal linking', 'liens internes'],
    definition: 'Ensemble des liens entre les pages d\'un même site. Distribue le jus SEO et guide les utilisateurs.',
    category: 'content',
  },
  {
    term: 'ancre',
    aliases: ['anchor text', 'texte d\'ancre', 'ancres'],
    definition: 'Texte cliquable d\'un lien hypertexte. Doit être descriptif et pertinent.',
    category: 'content',
  },
  {
    term: 'TF-IDF',
    definition: 'Term Frequency-Inverse Document Frequency. Méthode statistique évaluant l\'importance d\'un terme dans un document.',
    category: 'content',
  },
  {
    term: 'LSI',
    aliases: ['LSI keywords', 'Latent Semantic Indexing'],
    definition: 'Latent Semantic Indexing. Termes sémantiquement liés au mot-clé principal.',
    category: 'content',
  },
  {
    term: 'NLP',
    aliases: ['Natural Language Processing'],
    definition: 'Natural Language Processing. Technologie permettant aux moteurs de comprendre le langage naturel.',
    category: 'content',
  },
  {
    term: 'BERT',
    definition: 'Bidirectional Encoder Representations from Transformers. Algorithme Google améliorant la compréhension du contexte des requêtes.',
    category: 'content',
  },
  {
    term: 'E-E-A-T',
    aliases: ['EEAT', 'E-A-T', 'EAT'],
    definition: 'Experience, Expertise, Authoritativeness, Trustworthiness. Critères de qualité évalués par Google.',
    category: 'content',
  },
  {
    term: 'YMYL',
    aliases: ['Your Money Your Life'],
    definition: 'Your Money Your Life. Pages touchant à la santé, la finance ou la sécurité, soumises à des critères E-E-A-T stricts.',
    category: 'content',
  },
  {
    term: 'helpful content',
    aliases: ['contenu utile', 'helpful content update'],
    definition: 'Mise à jour Google valorisant le contenu créé pour les utilisateurs plutôt que pour les moteurs.',
    category: 'content',
  },
  {
    term: 'content pruning',
    aliases: ['élagage de contenu'],
    definition: 'Suppression ou consolidation des contenus de faible qualité pour améliorer la qualité globale du site.',
    category: 'content',
  },
  {
    term: 'evergreen content',
    aliases: ['contenu evergreen', 'contenu intemporel'],
    definition: 'Contenu restant pertinent et utile sur le long terme, sans date de péremption.',
    category: 'content',
  },
  {
    term: 'content gap',
    aliases: ['lacune de contenu'],
    definition: 'Opportunités de mots-clés sur lesquels les concurrents se positionnent mais pas vous.',
    category: 'content',
  },
  {
    term: 'brief SEO',
    aliases: ['brief de rédaction'],
    definition: 'Document guidant la rédaction d\'un contenu optimisé : mots-clés, structure, longueur, etc.',
    category: 'content',
  },
  {
    term: 'score de contenu',
    aliases: ['content score'],
    definition: 'Note évaluant la qualité SEO d\'un contenu selon différents critères (outils comme Surfer, Clearscope).',
    category: 'content',
  },

  // === NETLINKING ===
  {
    term: 'backlink',
    aliases: ['backlinks', 'lien entrant', 'liens entrants', 'inbound link'],
    definition: 'Lien provenant d\'un site externe pointant vers votre site. Facteur de ranking majeur.',
    category: 'netlinking',
  },
  {
    term: 'netlinking',
    aliases: ['link building', 'acquisition de liens'],
    definition: 'Stratégie d\'acquisition de backlinks de qualité pour renforcer l\'autorité d\'un site.',
    category: 'netlinking',
  },
  {
    term: 'autorité de domaine',
    aliases: ['Domain Authority', 'DA', 'autorité'],
    definition: 'Score (0-100) prédisant la capacité d\'un domaine à se positionner. Métrique Moz, non utilisée par Google.',
    category: 'netlinking',
  },
  {
    term: 'Domain Rating',
    aliases: ['DR'],
    definition: 'Score Ahrefs (0-100) mesurant la force du profil de backlinks d\'un domaine.',
    category: 'netlinking',
  },
  {
    term: 'Trust Flow',
    aliases: ['TF'],
    definition: 'Métrique Majestic mesurant la qualité et la fiabilité des backlinks d\'un site.',
    category: 'netlinking',
  },
  {
    term: 'Citation Flow',
    aliases: ['CF'],
    definition: 'Métrique Majestic mesurant la quantité de liens pointant vers un site.',
    category: 'netlinking',
  },
  {
    term: 'PageRank',
    aliases: ['PR'],
    definition: 'Algorithme historique de Google évaluant l\'importance d\'une page selon ses backlinks. Toujours utilisé en interne.',
    category: 'netlinking',
  },
  {
    term: 'jus SEO',
    aliases: ['link juice', 'jus de lien', 'équité de lien'],
    definition: 'Valeur SEO transmise d\'une page à une autre via les liens hypertextes.',
    category: 'netlinking',
  },
  {
    term: 'domaine référent',
    aliases: ['referring domain', 'domaines référents'],
    definition: 'Site web distinct envoyant au moins un backlink vers votre site.',
    category: 'netlinking',
  },
  {
    term: 'profil de liens',
    aliases: ['link profile', 'profil de backlinks'],
    definition: 'Ensemble des caractéristiques des backlinks d\'un site : quantité, qualité, diversité, ancres.',
    category: 'netlinking',
  },
  {
    term: 'lien toxique',
    aliases: ['toxic link', 'liens toxiques', 'bad link'],
    definition: 'Backlink de mauvaise qualité pouvant nuire au référencement (spam, PBN, sites pénalisés).',
    category: 'netlinking',
  },
  {
    term: 'désaveu',
    aliases: ['disavow', 'fichier disavow'],
    definition: 'Outil Google Search Console permettant de demander à Google d\'ignorer certains backlinks.',
    category: 'netlinking',
  },
  {
    term: 'PBN',
    aliases: ['Private Blog Network'],
    definition: 'Private Blog Network. Réseau de sites créés pour générer des backlinks. Pratique risquée et contre les guidelines.',
    category: 'netlinking',
  },
  {
    term: 'guest blogging',
    aliases: ['article invité', 'guest post'],
    definition: 'Rédaction d\'articles pour des sites tiers en échange d\'un backlink.',
    category: 'netlinking',
  },
  {
    term: 'linkbaiting',
    aliases: ['link bait'],
    definition: 'Création de contenu remarquable attirant naturellement des backlinks.',
    category: 'netlinking',
  },
  {
    term: 'broken link building',
    definition: 'Technique consistant à trouver des liens cassés et proposer son contenu en remplacement.',
    category: 'netlinking',
  },
  {
    term: 'outreach',
    aliases: ['prospection'],
    definition: 'Démarche de contact de sites web pour obtenir des backlinks ou des partenariats.',
    category: 'netlinking',
  },
  {
    term: 'échange de liens',
    aliases: ['link exchange'],
    definition: 'Accord réciproque de liens entre deux sites. Pratique à utiliser avec modération.',
    category: 'netlinking',
  },
  {
    term: 'lien contextuel',
    aliases: ['contextual link'],
    definition: 'Backlink placé naturellement dans le corps d\'un article, plus valorisé qu\'un lien en footer.',
    category: 'netlinking',
  },

  // === ANALYTICS & OUTILS ===
  {
    term: 'Google Search Console',
    aliases: ['GSC', 'Search Console', 'Webmaster Tools'],
    definition: 'Outil gratuit Google pour surveiller et optimiser la présence d\'un site dans les résultats de recherche.',
    category: 'analytics',
  },
  {
    term: 'Google Analytics',
    aliases: ['GA', 'GA4', 'Analytics'],
    definition: 'Outil gratuit Google pour analyser le trafic et le comportement des visiteurs d\'un site.',
    category: 'analytics',
  },
  {
    term: 'Screaming Frog',
    aliases: ['SF', 'Screaming Frog SEO Spider'],
    definition: 'Logiciel de crawl permettant d\'auditer techniquement un site web.',
    category: 'analytics',
  },
  {
    term: 'Ahrefs',
    definition: 'Outil SEO payant spécialisé dans l\'analyse des backlinks et la recherche de mots-clés.',
    category: 'analytics',
  },
  {
    term: 'Semrush',
    aliases: ['SEMrush'],
    definition: 'Suite d\'outils SEO complète pour l\'analyse concurrentielle, les mots-clés et le suivi de positions.',
    category: 'analytics',
  },
  {
    term: 'Majestic',
    definition: 'Outil spécialisé dans l\'analyse des backlinks avec les métriques Trust Flow et Citation Flow.',
    category: 'analytics',
  },
  {
    term: 'PageSpeed Insights',
    aliases: ['PSI'],
    definition: 'Outil Google analysant la performance d\'une page et fournissant des recommandations d\'optimisation.',
    category: 'analytics',
  },
  {
    term: 'Lighthouse',
    definition: 'Outil open-source Google auditant performance, accessibilité, SEO et bonnes pratiques d\'une page.',
    category: 'analytics',
  },
  {
    term: 'taux de rebond',
    aliases: ['bounce rate'],
    definition: 'Pourcentage de visiteurs quittant un site après avoir vu une seule page.',
    category: 'analytics',
  },
  {
    term: 'temps de session',
    aliases: ['session duration', 'durée de session'],
    definition: 'Temps moyen passé par un utilisateur sur un site lors d\'une visite.',
    category: 'analytics',
  },
  {
    term: 'pages par session',
    aliases: ['pages per session'],
    definition: 'Nombre moyen de pages vues par un utilisateur lors d\'une visite.',
    category: 'analytics',
  },
  {
    term: 'conversion',
    aliases: ['conversions', 'taux de conversion'],
    definition: 'Action souhaitée accomplie par un visiteur (achat, inscription, contact). Objectif ultime du SEO.',
    category: 'analytics',
  },
  {
    term: 'KPI',
    aliases: ['KPIs', 'Key Performance Indicator'],
    definition: 'Key Performance Indicator. Indicateurs clés mesurant l\'efficacité d\'une stratégie SEO.',
    category: 'analytics',
  },
  {
    term: 'ROI',
    aliases: ['Return on Investment'],
    definition: 'Return on Investment. Retour sur investissement d\'une action SEO.',
    category: 'analytics',
  },

  // === SEO LOCAL ===
  {
    term: 'SEO local',
    aliases: ['référencement local', 'local SEO'],
    definition: 'Optimisation de la visibilité pour les recherches géolocalisées ("près de moi", ville + service).',
    category: 'local',
  },
  {
    term: 'Google Business Profile',
    aliases: ['GBP', 'Google My Business', 'GMB', 'fiche Google'],
    definition: 'Fiche d\'établissement Google affichant les informations locales d\'une entreprise.',
    category: 'local',
  },
  {
    term: 'NAP',
    aliases: ['Name Address Phone'],
    definition: 'Name, Address, Phone. Informations de contact devant être cohérentes sur tous les supports.',
    category: 'local',
  },
  {
    term: 'pack local',
    aliases: ['local pack', 'pack 3'],
    definition: 'Bloc de 3 résultats locaux avec carte affiché pour les requêtes géolocalisées.',
    category: 'local',
  },
  {
    term: 'citation',
    aliases: ['citations locales'],
    definition: 'Mention du NAP d\'une entreprise sur des annuaires ou sites tiers.',
    category: 'local',
  },
  {
    term: 'avis Google',
    aliases: ['Google reviews', 'avis clients'],
    definition: 'Évaluations laissées par les clients sur Google Business Profile. Facteur de ranking local.',
    category: 'local',
  },

  // === E-COMMERCE ===
  {
    term: 'SEO e-commerce',
    aliases: ['référencement e-commerce'],
    definition: 'Stratégies SEO spécifiques aux boutiques en ligne : fiches produits, catégories, filtres.',
    category: 'ecommerce',
  },
  {
    term: 'fiche produit',
    aliases: ['page produit', 'product page'],
    definition: 'Page dédiée à un produit, devant être optimisée avec description unique, images et données structurées.',
    category: 'ecommerce',
  },
  {
    term: 'faceted navigation',
    aliases: ['navigation à facettes', 'filtres'],
    definition: 'Système de filtres (taille, couleur, prix) générant de nombreuses URLs. Nécessite une gestion SEO.',
    category: 'ecommerce',
  },
  {
    term: 'Product Schema',
    aliases: ['schema product'],
    definition: 'Données structurées pour les produits permettant d\'afficher prix, disponibilité et avis dans les SERP.',
    category: 'ecommerce',
  },
  {
    term: 'Google Merchant Center',
    aliases: ['Merchant Center'],
    definition: 'Plateforme Google pour gérer les flux produits et apparaître dans Google Shopping.',
    category: 'ecommerce',
  },

  // === PÉNALITÉS & MISES À JOUR ===
  {
    term: 'pénalité Google',
    aliases: ['pénalité', 'sanction Google', 'penality'],
    definition: 'Action manuelle ou algorithmique réduisant la visibilité d\'un site suite à des pratiques non conformes.',
    category: 'general',
  },
  {
    term: 'action manuelle',
    aliases: ['manual action'],
    definition: 'Pénalité appliquée manuellement par un employé Google pour violation des guidelines.',
    category: 'general',
  },
  {
    term: 'Google Panda',
    aliases: ['Panda'],
    definition: 'Mise à jour Google (2011) ciblant les sites avec contenu de faible qualité ou dupliqué.',
    category: 'general',
  },
  {
    term: 'Google Penguin',
    aliases: ['Penguin'],
    definition: 'Mise à jour Google (2012) ciblant les pratiques de netlinking abusives.',
    category: 'general',
  },
  {
    term: 'Google Hummingbird',
    aliases: ['Hummingbird'],
    definition: 'Mise à jour Google (2013) améliorant la compréhension sémantique des requêtes.',
    category: 'general',
  },
  {
    term: 'Google RankBrain',
    aliases: ['RankBrain'],
    definition: 'Système d\'IA Google (2015) interprétant les requêtes complexes ou jamais vues.',
    category: 'general',
  },
  {
    term: 'Core Update',
    aliases: ['mise à jour core', 'core update Google'],
    definition: 'Mise à jour majeure de l\'algorithme Google affectant le classement de nombreux sites.',
    category: 'general',
  },
  {
    term: 'black hat',
    aliases: ['black hat SEO'],
    definition: 'Techniques SEO contraires aux guidelines Google, risquant des pénalités.',
    category: 'general',
  },
  {
    term: 'white hat',
    aliases: ['white hat SEO'],
    definition: 'Techniques SEO conformes aux guidelines Google, durables et éthiques.',
    category: 'general',
  },
  {
    term: 'grey hat',
    aliases: ['grey hat SEO'],
    definition: 'Techniques SEO à la limite des guidelines, ni totalement white hat ni black hat.',
    category: 'general',
  },
  {
    term: 'cloaking',
    definition: 'Technique black hat affichant un contenu différent aux moteurs et aux utilisateurs. Fortement pénalisée.',
    category: 'general',
  },
  {
    term: 'keyword stuffing',
    aliases: ['bourrage de mots-clés'],
    definition: 'Répétition excessive de mots-clés dans un contenu. Pratique pénalisée par Google.',
    category: 'general',
  },
  {
    term: 'negative SEO',
    aliases: ['SEO négatif'],
    definition: 'Pratique malveillante visant à nuire au référencement d\'un concurrent.',
    category: 'general',
  },
  {
    term: 'spam',
    aliases: ['webspam'],
    definition: 'Techniques manipulatrices visant à tromper les moteurs de recherche.',
    category: 'general',
  },

  // === IA & FUTUR DU SEO ===
  {
    term: 'GEO',
    aliases: ['Generative Engine Optimization'],
    definition: 'Generative Engine Optimization. Optimisation pour apparaître dans les réponses des IA génératives.',
    category: 'ai',
  },
  {
    term: 'SGE',
    aliases: ['Search Generative Experience', 'AI Overview'],
    definition: 'Search Generative Experience. Réponses générées par IA dans les résultats Google.',
    category: 'ai',
  },
  {
    term: 'LLM',
    aliases: ['Large Language Model'],
    definition: 'Large Language Model. Modèles d\'IA comme GPT ou Gemini capables de générer du texte.',
    category: 'ai',
  },
  {
    term: 'contenu IA',
    aliases: ['AI content', 'contenu généré par IA'],
    definition: 'Contenu créé par intelligence artificielle. Google juge la qualité, pas l\'origine.',
    category: 'ai',
  },
  {
    term: 'Perplexity',
    definition: 'Moteur de recherche conversationnel basé sur l\'IA, concurrent émergent de Google.',
    category: 'ai',
  },
  {
    term: 'ChatGPT',
    aliases: ['GPT', 'OpenAI'],
    definition: 'Agent conversationnel d\'OpenAI utilisant un LLM pour générer des réponses.',
    category: 'ai',
  },
  {
    term: 'Gemini',
    aliases: ['Google Gemini', 'Bard'],
    definition: 'IA multimodale de Google, intégrée progressivement à ses produits dont la recherche.',
    category: 'ai',
  },
  {
    term: 'MUM',
    aliases: ['Multitask Unified Model'],
    definition: 'Multitask Unified Model. IA Google 1000x plus puissante que BERT, comprenant texte, images et vidéos.',
    category: 'ai',
  },

  // === TERMES COMPLÉMENTAIRES ===
  {
    term: 'audit SEO',
    aliases: ['audit de référencement'],
    definition: 'Analyse complète d\'un site identifiant les problèmes techniques, contenus et netlinking.',
    category: 'general',
  },
  {
    term: 'migration SEO',
    aliases: ['migration de site'],
    definition: 'Changement majeur d\'un site (domaine, CMS, structure) nécessitant une stratégie pour préserver le SEO.',
    category: 'general',
  },
  {
    term: 'refonte',
    aliases: ['refonte de site', 'redesign'],
    definition: 'Modification majeure du design ou de la structure d\'un site. Risque SEO si mal gérée.',
    category: 'general',
  },
  {
    term: 'benchmark',
    aliases: ['benchmarking', 'analyse concurrentielle'],
    definition: 'Analyse comparative des performances SEO par rapport aux concurrents.',
    category: 'general',
  },
  {
    term: 'persona',
    aliases: ['buyer persona'],
    definition: 'Profil fictif représentant un segment d\'audience cible pour orienter la stratégie de contenu.',
    category: 'general',
  },
  {
    term: 'tunnel de conversion',
    aliases: ['funnel', 'entonnoir de conversion'],
    definition: 'Parcours utilisateur de la découverte à la conversion, chaque étape nécessitant un contenu adapté.',
    category: 'general',
  },
  {
    term: 'UX',
    aliases: ['User Experience', 'expérience utilisateur'],
    definition: 'User Experience. Qualité de l\'expérience vécue par un utilisateur sur un site. Facteur de ranking indirect.',
    category: 'general',
  },
  {
    term: 'above the fold',
    aliases: ['au-dessus de la ligne de flottaison'],
    definition: 'Contenu visible sans faire défiler la page. Zone stratégique pour l\'engagement.',
    category: 'general',
  },
  {
    term: 'call to action',
    aliases: ['CTA', 'appel à l\'action'],
    definition: 'Élément incitant l\'utilisateur à effectuer une action (bouton, lien, formulaire).',
    category: 'general',
  },
  {
    term: 'landing page',
    aliases: ['page d\'atterrissage', 'LP'],
    definition: 'Page conçue pour convertir les visiteurs arrivant d\'une source spécifique.',
    category: 'general',
  },
  {
    term: 'orphan page',
    aliases: ['page orpheline'],
    definition: 'Page sans aucun lien interne pointant vers elle, difficilement accessible pour les moteurs.',
    category: 'technical',
  },
  {
    term: 'siloing',
    aliases: ['silo'],
    definition: 'Organisation du contenu en catégories thématiques étanches pour renforcer la pertinence.',
    category: 'content',
  },
  {
    term: 'topical authority',
    aliases: ['autorité thématique'],
    definition: 'Expertise reconnue d\'un site sur un sujet donné, renforcée par un contenu complet et interconnecté.',
    category: 'content',
  },
];

// Fonction pour trouver un terme dans le glossaire
export function findGlossaryTerm(text: string): GlossaryTerm | undefined {
  const lowerText = text.toLowerCase();

  return glossary.find(entry => {
    if (entry.term.toLowerCase() === lowerText) return true;
    if (entry.aliases?.some(alias => alias.toLowerCase() === lowerText)) return true;
    return false;
  });
}

// Fonction pour obtenir tous les termes (terme principal + aliases) pour le matching
export function getAllTermsForMatching(): { term: string; entry: GlossaryTerm }[] {
  const terms: { term: string; entry: GlossaryTerm }[] = [];

  glossary.forEach(entry => {
    terms.push({ term: entry.term, entry });
    entry.aliases?.forEach(alias => {
      terms.push({ term: alias, entry });
    });
  });

  // Trier par longueur décroissante pour matcher les termes les plus longs en premier
  return terms.sort((a, b) => b.term.length - a.term.length);
}

// Export des catégories pour le filtrage
export const glossaryCategories = {
  general: 'Général',
  technical: 'Technique',
  content: 'Contenu',
  netlinking: 'Netlinking',
  analytics: 'Analytics & Outils',
  local: 'SEO Local',
  ecommerce: 'E-commerce',
  ai: 'IA & Futur',
} as const;
