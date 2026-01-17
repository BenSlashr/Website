'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { getAllTermsForMatching, GlossaryTerm } from '@/lib/glossary';

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

export default function ArticleContent({
  html,
  className = '',
  enableGlossary = true,
  maxTerms = 30
}: ArticleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const activeElementRef = useRef<HTMLElement | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    term: null,
    x: 0,
    y: 0,
    position: 'top'
  });
  const [isMounted, setIsMounted] = useState(false);
  const [annotationKey, setAnnotationKey] = useState(0);

  // Marquer le composant comme monté côté client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Annoter les termes du glossaire dans le HTML
  useEffect(() => {
    if (!enableGlossary || !contentRef.current) return;

    const container = contentRef.current;
    const terms = getAllTermsForMatching();
    const usedTerms = new Set<string>();
    let annotatedCount = 0;

    const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const processNode = (node: Node): void => {
      if (annotatedCount >= maxTerms) return;

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        if (!text.trim()) return;

        const parent = node.parentElement;
        if (parent) {
          const tagName = parent.tagName.toUpperCase();
          if (['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'H1', 'H2', 'H3', 'H4', 'BUTTON', 'MARK'].includes(tagName)) {
            return;
          }
          if (parent.hasAttribute('data-glossary')) {
            return;
          }
        }

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
              break;
            }
          }
        });

        if (matches.length === 0) return;

        matches.sort((a, b) => a.index - b.index);

        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        matches.forEach(({ index, length, term: matchedTerm, entry }) => {
          if (annotatedCount >= maxTerms) return;

          if (index > lastIndex) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex, index)));
          }

          const mark = document.createElement('mark');
          mark.setAttribute('data-glossary', 'true');
          mark.setAttribute('data-term', entry.term);
          mark.setAttribute('data-definition', entry.definition);
          mark.setAttribute('data-category', entry.category);
          mark.className = 'glossary-highlight';
          mark.textContent = matchedTerm;
          fragment.appendChild(mark);

          usedTerms.add(entry.term);
          annotatedCount++;

          lastIndex = index + length;
        });

        if (lastIndex < text.length) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }

        if (fragment.childNodes.length > 0) {
          node.parentNode?.replaceChild(fragment, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const children = Array.from(node.childNodes);
        children.forEach(child => processNode(child));
      }
    };

    processNode(container);

    // Signaler que l'annotation est terminée pour attacher les event listeners
    setAnnotationKey(prev => prev + 1);
  }, [html, enableGlossary, maxTerms]);

  // Gestion des événements de survol - s'exécute après l'annotation via annotationKey
  useEffect(() => {
    if (!enableGlossary || !contentRef.current || annotationKey === 0) return;

    const container = contentRef.current;

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.hasAttribute('data-glossary')) return;

      // Stocker l'élément actif
      activeElementRef.current = target;

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
        y: spaceAbove < 150 && spaceBelow > spaceAbove ? rect.bottom : rect.top,
        position: spaceAbove < 150 && spaceBelow > spaceAbove ? 'bottom' : 'top'
      });
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.hasAttribute('data-glossary')) return;

      // Si c'est bien l'élément actif qui est quitté, masquer le tooltip
      if (activeElementRef.current === target) {
        activeElementRef.current = null;
        setTooltip(prev => ({ ...prev, visible: false }));
      }
    };

    // Utiliser event delegation avec mouseenter/mouseleave
    // Ces événements ne bubblent pas, donc on doit les attacher aux éléments individuels
    const glossaryElements = container.querySelectorAll('[data-glossary]');

    glossaryElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      glossaryElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      activeElementRef.current = null;
    };
  }, [enableGlossary, annotationKey]);

  return (
    <>
      <div
        ref={contentRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Tooltip - rendu uniquement côté client */}
      {isMounted && tooltip.visible && tooltip.term && createPortal(
        <div
          className="fixed z-[9999] pointer-events-none animate-fadeIn"
          style={{
            left: Math.min(Math.max(tooltip.x, 160), window.innerWidth - 160),
            top: tooltip.position === 'top' ? tooltip.y - 6 : tooltip.y + 6,
            transform: `translate(-50%, ${tooltip.position === 'top' ? '-100%' : '0'})`
          }}
        >
          <div className="bg-[#2C2E34] border border-gray-600/50 rounded-lg shadow-lg max-w-[300px] px-3 py-2">
            <p className="text-gray-200 text-xs leading-relaxed">
              {tooltip.term.definition}
            </p>
          </div>
          {/* Petite flèche */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2C2E34] border-gray-600/50 transform rotate-45 ${
              tooltip.position === 'top'
                ? '-bottom-1 border-r border-b'
                : '-top-1 border-l border-t'
            }`}
          />
        </div>,
        document.body
      )}
    </>
  );
}
