'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

// Outils gratuits
const freeTools = [
  {
    name: 'Analyse Entités',
    description: 'Analyse les entités d\'une URL et de la SERP en fonction d\'un mot-clé. Comprendre comment Google perçoit votre contenu.',
    icon: 'entity',
    category: 'Sémantique',
  },
  {
    name: 'Robots.txt Checker',
    description: 'Validation et analyse de vos fichiers robots.txt. Vérifiez les règles de crawl et détectez les erreurs.',
    icon: 'robot',
    category: 'Technique',
  },
  {
    name: 'Analyse Intent SERP',
    description: 'Décryptage de l\'intention de recherche via l\'analyse des pages de résultats Google. Comprenez ce que veut l\'utilisateur.',
    icon: 'search',
    category: 'Stratégie',
  },
  {
    name: 'Comparaison SERP',
    description: 'Déterminez si un mot-clé nécessite une ou deux pages. Analyse comparative des structures de SERP.',
    icon: 'compare',
    category: 'Stratégie',
  },
  {
    name: 'Knowledge Graph Explorer',
    description: 'Exploration du Knowledge Graph Google. Découvrez les entités, relations et données structurées.',
    icon: 'graph',
    category: 'Sémantique',
  },
  {
    name: 'Site Radius',
    description: 'Évaluation de la cohérence thématique de votre site. Mesurez la pertinence sémantique globale.',
    icon: 'radar',
    category: 'Sémantique',
  },
];

// Outils premium (clients)
const premiumTools = [
  {
    name: 'Brief Generator',
    description: 'Génération automatique de briefs SEO complets pour vos rédacteurs. Structure, mots-clés, intentions.',
    icon: 'brief',
    category: 'Contenu',
  },
  {
    name: 'Analyse Cannibalisation',
    description: 'Détection des pages en concurrence interne sur les mêmes mots-clés. Résolvez les conflits SEO.',
    icon: 'cannibalization',
    category: 'Stratégie',
  },
  {
    name: 'Title Analyzer',
    description: 'Analyse et optimisation des balises title. Scoring, suggestions et benchmark concurrentiel.',
    icon: 'title',
    category: 'On-page',
  },
  {
    name: 'Content Writer',
    description: 'Assistant de rédaction SEO propulsé par l\'IA. Optimisation sémantique en temps réel.',
    icon: 'edit',
    category: 'Contenu',
  },
  {
    name: 'E-commerce Writer',
    description: 'Rédaction optimisée pour les fiches produits. Templates et variables pour le scaling.',
    icon: 'cart',
    category: 'Contenu',
  },
  {
    name: 'Keyword Clustering',
    description: 'Regroupement intelligent des mots-clés par intention et thématique. Organisez votre stratégie.',
    icon: 'cluster',
    category: 'Stratégie',
  },
  {
    name: 'URL Mapping',
    description: 'Cartographie et planification des URLs. Migrations, refontes et architecture de site.',
    icon: 'map',
    category: 'Technique',
  },
  {
    name: 'Redirection Manager',
    description: 'Gestion intelligente des redirections. Détection des chaînes et boucles de redirection.',
    icon: 'redirect',
    category: 'Technique',
  },
  {
    name: 'Internal Linking Planner',
    description: 'Planification du maillage interne. Suggestions de liens basées sur la sémantique.',
    icon: 'link',
    category: 'On-page',
  },
  {
    name: 'SERP Scraper',
    description: 'Extraction des données SERP à grande échelle. Positions, features, PAA, snippets.',
    icon: 'scraper',
    category: 'Data',
  },
  {
    name: 'Analyse Sémantique',
    description: 'Analyse profonde du champ sémantique. Embeddings, clustering et gaps de contenu.',
    icon: 'semantic',
    category: 'Sémantique',
  },
  {
    name: 'AI Ranker',
    description: 'Monitoring des positions dans les réponses IA (ChatGPT, Perplexity, Gemini). Le GEO tracking.',
    icon: 'ai',
    category: 'GEO',
  },
  {
    name: 'Shopping Tracker',
    description: 'Suivi des positions Google Shopping. Analyse concurrentielle et optimisation des flux.',
    icon: 'shopping',
    category: 'E-commerce',
  },
];

// Projets R&D (basés sur les repos GitHub)
const rdProjects = [
  {
    name: 'Janus',
    description: 'Système d\'analyse comparative multi-sources. Croisement des données SEO, analytics et business pour une vision 360°.',
    tech: ['Python', 'API'],
    status: 'development',
    progress: 75,
  },
  {
    name: 'PageRank Internal',
    description: 'Calcul et visualisation du PageRank interne. Identifiez les pages qui concentrent l\'autorité et optimisez la distribution.',
    tech: ['TypeScript', 'Graph'],
    status: 'live',
    progress: 100,
  },
  {
    name: 'Embedding Engine',
    description: 'Moteur d\'embeddings sémantiques pour l\'analyse de contenu. Clustering automatique et détection de similarités.',
    tech: ['Python', 'ML'],
    status: 'live',
    progress: 100,
  },
  {
    name: 'Cartographie',
    description: 'Visualisation interactive de l\'architecture de site. Crawl, maillage interne et profondeur de pages.',
    tech: ['Python', 'D3.js'],
    status: 'live',
    progress: 100,
  },
  {
    name: 'Contrôle Technique',
    description: 'Audit technique automatisé. Vérification des points critiques SEO : indexation, performance, erreurs.',
    tech: ['Python', 'Crawl'],
    status: 'live',
    progress: 100,
  },
  {
    name: 'GSC Connector',
    description: 'Connecteur avancé Google Search Console. Extraction, agrégation et analyse des données de performance.',
    tech: ['JavaScript', 'API'],
    status: 'live',
    progress: 100,
  },
  {
    name: 'Content Analyzer',
    description: 'Analyse de contenu par IA. Scoring, suggestions d\'amélioration et benchmark sémantique.',
    tech: ['Python', 'NLP'],
    status: 'development',
    progress: 85,
  },
  {
    name: 'Judge',
    description: 'Système de scoring et d\'évaluation automatique des pages. Critères SEO, UX et qualité de contenu.',
    tech: ['Python', 'ML'],
    status: 'beta',
    progress: 90,
  },
  {
    name: 'Visibility Dashboard',
    description: 'Dashboard de suivi de visibilité multi-sources. SEO, GEO, Ads et réseaux sociaux unifiés.',
    tech: ['Python', 'React'],
    status: 'development',
    progress: 70,
  },
  {
    name: 'MCP Package',
    description: 'Package d\'outils pour Model Context Protocol. Intégration des données SEO dans les workflows IA.',
    tech: ['Python', 'MCP'],
    status: 'research',
    progress: 60,
  },
];

const getIcon = (iconName: string) => {
  const icons: Record<string, JSX.Element> = {
    entity: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    robot: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    search: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    compare: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    graph: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    radar: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
      </svg>
    ),
    brief: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    cannibalization: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    edit: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    cart: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    cluster: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    map: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    redirect: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    scraper: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    semantic: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    ai: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    shopping: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  };
  return icons[iconName] || icons.search;
};

const getStatusBadge = (status: string) => {
  const badges: Record<string, { bg: string; text: string; label: string }> = {
    live: { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Live' },
    beta: { bg: 'bg-[#E74601]/20', text: 'text-[#E74601]', label: 'Beta' },
    research: { bg: 'bg-[#8962FD]/20', text: 'text-[#8962FD]', label: 'Research' },
    development: { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'Dev' },
  };
  const badge = badges[status] || badges.development;
  return (
    <span className={`px-2 py-1 text-xs font-medium ${badge.bg} ${badge.text} rounded-full border border-current/30`}>
      {badge.label}
    </span>
  );
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Sémantique': 'from-[#8962FD] to-[#CE08A9]',
    'Technique': 'from-blue-500 to-cyan-500',
    'Stratégie': 'from-[#E74601] to-[#FF9011]',
    'Contenu': 'from-green-500 to-emerald-500',
    'On-page': 'from-[#CE08A9] to-[#CE16B5]',
    'Data': 'from-[#8962FD] to-[#AD21FE]',
    'GEO': 'from-cyan-500 to-blue-500',
    'E-commerce': 'from-[#FF9011] to-[#E74601]',
  };
  return colors[category] || 'from-gray-500 to-gray-600';
};

// Particle animation component
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 120, 50, ${particle.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 120, 50, ${0.08 * (1 - distance / 120)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', setSize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

export default function RAndDPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['Tous', 'Sémantique', 'Technique', 'Stratégie', 'Contenu', 'On-page', 'Data', 'GEO', 'E-commerce'];

  const filteredPremiumTools = activeCategory && activeCategory !== 'Tous'
    ? premiumTools.filter(t => t.category === activeCategory)
    : premiumTools;

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <ParticleField />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E74601]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#CE08A9]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8962FD]/5 rounded-full blur-[200px]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm font-medium tracking-wide">SLASHR LAB</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-[#E74601] via-[#CE08A9] to-[#8962FD] bg-clip-text text-transparent">
              R&D
            </span>
            <span className="text-white/90"> & Outils</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Notre laboratoire interne développe les outils SEO de demain.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            19 outils en production. 49 projets sur GitHub. Une vision tech-first du référencement.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#free-tools"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
            >
              Outils gratuits
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Projets R&D
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-600 rounded-full mt-1.5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Vision Section - Le SEO est un métier technique */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400 mb-6 border border-white/10">
                Notre vision
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Le SEO est un métier
                <br />
                <span className="bg-gradient-to-r from-[#E74601] to-[#CE08A9] bg-clip-text text-transparent">technique</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Nous croyons que l&apos;excellence SEO passe par la maîtrise technique et l&apos;innovation.
                C&apos;est pourquoi nous investissons massivement dans la R&D et développons nos propres outils.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Approche data-driven', desc: 'Décisions basées sur l\'analyse, pas l\'intuition' },
                  { title: 'Automatisation intelligente', desc: 'Libérer du temps pour la stratégie' },
                  { title: 'Veille algorithmes & IA', desc: 'Anticiper les évolutions de Google et des LLM' },
                  { title: 'Open source & partage', desc: 'Contribuer à la communauté SEO' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#E74601] to-[#CE08A9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Code block style visual */}
              <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 p-6 font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-gray-600 text-xs ml-2">slashr-toolkit.py</span>
                </div>
                <div className="space-y-2 text-xs">
                  <p><span className="text-[#8962FD]">from</span> <span className="text-green-400">slashr</span> <span className="text-[#8962FD]">import</span> SEOAnalyzer</p>
                  <p><span className="text-[#8962FD]">from</span> <span className="text-green-400">slashr.geo</span> <span className="text-[#8962FD]">import</span> LLMTracker</p>
                  <p className="text-gray-600"># Initialize semantic analysis</p>
                  <p><span className="text-blue-400">analyzer</span> = SEOAnalyzer(</p>
                  <p className="pl-4"><span className="text-[#E74601]">embeddings</span>=<span className="text-yellow-400">&quot;multilingual&quot;</span>,</p>
                  <p className="pl-4"><span className="text-[#E74601]">entity_detection</span>=<span className="text-cyan-400">True</span></p>
                  <p>)</p>
                  <p className="text-gray-600"># Track LLM visibility</p>
                  <p><span className="text-blue-400">geo</span> = LLMTracker([</p>
                  <p className="pl-4"><span className="text-yellow-400">&quot;chatgpt&quot;</span>, <span className="text-yellow-400">&quot;perplexity&quot;</span>, <span className="text-yellow-400">&quot;gemini&quot;</span></p>
                  <p>])</p>
                  <p><span className="text-blue-400">results</span> = geo.analyze(<span className="text-blue-400">brand</span>)</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-[#0a0a0a] border border-white/10 rounded-full text-xs text-gray-400">
                Python
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 bg-[#0a0a0a] border border-white/10 rounded-full text-xs text-gray-400">
                TypeScript
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLM Era Section */}
      <section className="relative py-32 px-6">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-sm text-cyan-400 mb-6 border border-cyan-500/20">
              L&apos;ère des LLM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pourquoi investir dans la <span className="italic">R&D</span> maintenant ?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              L&apos;émergence des LLM redéfinit les règles du jeu. La visibilité ne se joue plus uniquement sur Google.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Point 1 */}
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">GEO : le nouveau SEO</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Le <strong className="text-white">Generative Engine Optimization</strong> devient critique. ChatGPT, Perplexity, Claude, Gemini...
                ces interfaces conversationnelles cannibalisent le search traditionnel.
              </p>
              <p className="text-gray-500 text-sm">
                Être cité dans une réponse LLM = nouveau PageRank. Nos outils trackent votre <span className="text-cyan-400">share of voice</span> dans les outputs IA.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8962FD] to-[#CE08A9] rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Entity-first SEO</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Google et les LLM raisonnent en <strong className="text-white">entités</strong>, pas en mots-clés.
                Knowledge Graph, NER, entity linking... la sémantique computationnelle est au cœur du ranking moderne.
              </p>
              <p className="text-gray-500 text-sm">
                Nos outils extraient et mappent vos entités pour maximiser la <span className="text-[#8962FD]">topical authority</span> et le <span className="text-[#8962FD]">E-E-A-T</span>.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E74601] to-[#FF9011] rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Embeddings & Vector Search</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Les moteurs évoluent vers le <strong className="text-white">retrieval sémantique</strong>.
                RAG, dense retrieval, neural search... comprendre ces mécanismes est essentiel pour optimiser le contenu.
              </p>
              <p className="text-gray-500 text-sm">
                Nous utilisons des <span className="text-[#E74601]">embeddings multilingues</span> pour analyser la proximité sémantique et détecter les gaps de contenu.
              </p>
            </div>

            {/* Point 4 */}
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automation & Scalability</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                L&apos;IA permet d&apos;automatiser l&apos;audit, l&apos;analyse et une partie de l&apos;exécution.
                Mais elle nécessite des <strong className="text-white">pipelines data robustes</strong> et une orchestration intelligente.
              </p>
              <p className="text-gray-500 text-sm">
                Nos outils s&apos;intègrent via <span className="text-green-400">API</span> et <span className="text-green-400">MCP</span> pour s&apos;insérer dans vos workflows IA existants.
              </p>
            </div>
          </div>

          {/* Bottom quote */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium text-white/80 italic leading-relaxed">
              &ldquo;Les agences qui ne maîtrisent pas leur stack technique seront disrupted par celles qui le font.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section id="free-tools" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-500/10 rounded-full text-sm text-green-400 mb-6 border border-green-500/20">
              Accès libre
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Outils <span className="italic">gratuits</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              6 outils en libre accès pour analyser, auditer et comprendre votre SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeTools.map((tool) => (
              <div
                key={tool.name}
                className="group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 bg-gradient-to-br ${getCategoryColor(tool.category)} rounded-xl flex items-center justify-center text-white`}>
                      {getIcon(tool.icon)}
                    </div>
                    <span className="px-2 py-1 text-xs text-gray-500 bg-white/5 rounded-full">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Tools Section */}
      <section id="premium-tools" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#E74601]/10 rounded-full text-sm text-[#E74601] mb-6 border border-[#E74601]/20">
              Clients Slashr
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Outils <span className="italic">premium</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              13 outils avancés réservés à nos clients pour exécuter, automatiser et scaler.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === 'Tous' ? null : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  (category === 'Tous' && !activeCategory) || activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPremiumTools.map((tool) => (
              <div
                key={tool.name}
                className="group relative bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-[#E74601]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(tool.category)} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    {getIcon(tool.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-medium truncate group-hover:text-[#E74601] transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Projects Section */}
      <section id="research" className="relative py-32 px-6">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#8962FD]/10 rounded-full text-sm text-[#8962FD] mb-6 border border-[#8962FD]/20">
              Laboratoire
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Projets <span className="italic">R&D</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nos travaux de recherche pour anticiper l&apos;évolution du SEO et de la visibilité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {rdProjects.map((project, index) => (
              <div
                key={project.name}
                className="group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-6 hover:border-[#8962FD]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Project number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8962FD]/20 to-[#CE08A9]/10 rounded-xl flex items-center justify-center border border-[#8962FD]/20 flex-shrink-0">
                    <span className="text-lg font-bold text-[#8962FD]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-white font-semibold text-lg">
                        {project.name}
                      </h3>
                      {getStatusBadge(project.status)}
                    </div>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech & Progress */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs text-gray-400 bg-white/5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#8962FD] to-[#CE08A9] rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{project.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-gradient-to-r from-[#E74601]/10 to-[#CE08A9]/10 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Envie de collaborer ?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Échangeons sur vos projets SEO et vos besoins en outils.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all text-lg"
          >
            Prendre contact
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
