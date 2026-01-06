'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { getAllTermsForMatching, GlossaryTerm, glossaryCategories } from '@/lib/glossary';

interface ArticleContentProps {
  html: string;
  className?: string;
  enableGlossary?: boolean;
  maxTerms?: number;
}

interface TooltipState {
  visible: boolean;
  term: GlossaryTerm | null;
  x: number;
  y: number;
  position: 'top' | 'bottom';
}

const categoryColors: Record<string, string> = {
  general: 'from-blue-500 to-cyan-500',
  technical: 'from-orange-500 to-red-500',
  content: 'from-green-500 to-emerald-500',
  netlinking: 'from-purple-500 to-pink-500',
  analytics: 'from-yellow-500 to-orange-500',
  local: 'from-teal-500 to-green-500',
  ecommerce: 'from-pink-500 to-rose-500',
  ai: 'from-violet-500 to-purple-500',
};

export default function ArticleContent({
  html,
  className = '',
  enableGlossary = true,
  maxTerms = 30
}: ArticleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    term: null,
    x: 0,
    y: 0,
    position: 'top'
  });

  useEffect(() => {
    if (!enableGlossary || !contentRef.current) return;

    const container = contentRef.current;
    const terms = getAllTermsForMatching();
    const usedTerms = new Set<string>();
    let annotatedCount = 0;

    // Fonction pour échapper les caractères spéciaux regex
    const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Fonction récursive pour traiter les nœuds texte
    const processNode = (node: Node): void => {
      if (annotatedCount >= maxTerms) return;

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        if (!text.trim()) return;

        // Vérifier si le parent est un élément qu'on ne veut pas modifier
        const parent = node.parentElement;
        if (parent) {
          const tagName = parent.tagName.toUpperCase();
          if (['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'H1', 'H2', 'H3', 'BUTTON'].includes(tagName)) {
            return;
          }
          // Vérifier si déjà un terme de glossaire
          if (parent.hasAttribute('data-glossary')) {
            return;
          }
        }

        // Chercher les termes dans le texte
        interface TermMatch {
          index: number;
          length: number;
          term: string;
          entry: GlossaryTerm;
        }
        const matches: TermMatch[] = [];

        terms.forEach(({ term, entry }) => {
          if (usedTerms.has(entry.term) || annotatedCount >= maxTerms) return;

          const pattern = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi');
          let match;

          while ((match = pattern.exec(text)) !== null) {
            // Vérifier qu'il n'y a pas déjà un match à cette position
            const hasOverlap = matches.some(
              m => (match!.index >= m.index && match!.index < m.index + m.length) ||
                   (m.index >= match!.index && m.index < match!.index + match![0].length)
            );

            if (!hasOverlap && !usedTerms.has(entry.term)) {
              matches.push({
                index: match.index,
                length: match[0].length,
                term: match[0],
                entry: entry,
              });
              break; // Un seul match par terme par nœud texte
            }
          }
        });

        if (matches.length === 0) return;

        // Trier par position
        matches.sort((a, b) => a.index - b.index);

        // Créer les nouveaux nœuds
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        matches.forEach(({ index, length, term: matchedTerm, entry }) => {
          if (annotatedCount >= maxTerms) return;

          // Texte avant le match
          if (index > lastIndex) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex, index)));
          }

          // Créer l'élément pour le terme
          const span = document.createElement('span');
          span.setAttribute('data-glossary', 'true');
          span.setAttribute('data-term', entry.term);
          span.setAttribute('data-definition', entry.definition);
          span.setAttribute('data-category', entry.category);
          span.className = 'glossary-term border-b border-dashed border-orange-500/50 text-orange-400 cursor-help transition-colors hover:border-orange-500 hover:text-orange-300';
          span.textContent = matchedTerm;
          fragment.appendChild(span);

          usedTerms.add(entry.term);
          annotatedCount++;

          lastIndex = index + length;
        });

        // Texte restant
        if (lastIndex < text.length) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }

        // Remplacer le nœud texte original
        if (fragment.childNodes.length > 0) {
          node.parentNode?.replaceChild(fragment, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Traiter les enfants (copie pour éviter les problèmes de modification)
        const children = Array.from(node.childNodes);
        children.forEach(child => processNode(child));
      }
    };

    // Traiter tout le contenu
    processNode(container);

    // Ajouter les event listeners pour les tooltips
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.hasAttribute('data-glossary')) return;

      const rect = target.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      const termData: GlossaryTerm = {
        term: target.getAttribute('data-term') || '',
        definition: target.getAttribute('data-definition') || '',
        category: (target.getAttribute('data-category') || 'general') as GlossaryTerm['category'],
      };

      setTooltip({
        visible: true,
        term: termData,
        x: rect.left + rect.width / 2,
        y: spaceAbove < 200 && spaceBelow > spaceAbove ? rect.bottom : rect.top,
        position: spaceAbove < 200 && spaceBelow > spaceAbove ? 'bottom' : 'top'
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.hasAttribute('data-glossary')) return;
      setTooltip(prev => ({ ...prev, visible: false }));
    };

    container.addEventListener('mouseenter', handleMouseEnter, true);
    container.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter, true);
      container.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [html, enableGlossary, maxTerms]);

  const categoryLabel = tooltip.term
    ? glossaryCategories[tooltip.term.category as keyof typeof glossaryCategories]
    : '';
  const categoryColor = tooltip.term
    ? categoryColors[tooltip.term.category] || 'from-gray-500 to-gray-600'
    : '';

  return (
    <>
      <div
        ref={contentRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Tooltip Portal */}
      {tooltip.visible && tooltip.term && typeof window !== 'undefined' && createPortal(
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.position === 'top' ? tooltip.y - 8 : tooltip.y + 8,
            transform: `translate(-50%, ${tooltip.position === 'top' ? '-100%' : '0'})`
          }}
        >
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-2xl overflow-hidden w-[280px] sm:w-[320px] animate-fadeIn">
            {/* Header avec catégorie */}
            <div className={`px-4 py-2 bg-gradient-to-r ${categoryColor}`}>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm">
                  {tooltip.term.term}
                </span>
                <span className="text-white/80 text-xs px-2 py-0.5 bg-white/20 rounded-full">
                  {categoryLabel}
                </span>
              </div>
            </div>

            {/* Définition */}
            <div className="px-4 py-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                {tooltip.term.definition}
              </p>
            </div>

            {/* Flèche */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border-gray-700 transform rotate-45 ${
                tooltip.position === 'top'
                  ? 'bottom-[-6px] border-r border-b'
                  : 'top-[-6px] border-l border-t'
              }`}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
