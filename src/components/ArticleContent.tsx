'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
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
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    term: null,
    x: 0,
    y: 0,
    position: 'top'
  });

  const hideTooltip = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setTooltip(prev => ({ ...prev, visible: false }));
    }, 100);
  }, []);

  const showTooltip = useCallback((termData: GlossaryTerm, rect: DOMRect) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    setTooltip({
      visible: true,
      term: termData,
      x: rect.left + rect.width / 2,
      y: spaceAbove < 150 && spaceBelow > spaceAbove ? rect.bottom : rect.top,
      position: spaceAbove < 150 && spaceBelow > spaceAbove ? 'bottom' : 'top'
    });
  }, []);

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

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.hasAttribute('data-glossary')) return;

      const rect = target.getBoundingClientRect();
      const termData: GlossaryTerm = {
        term: target.getAttribute('data-term') || '',
        definition: target.getAttribute('data-definition') || '',
        category: (target.getAttribute('data-category') || 'general') as GlossaryTerm['category'],
      };

      showTooltip(termData, rect);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.hasAttribute('data-glossary')) return;
      hideTooltip();
    };

    container.addEventListener('mouseenter', handleMouseEnter, true);
    container.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter, true);
      container.removeEventListener('mouseleave', handleMouseLeave, true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [html, enableGlossary, maxTerms, showTooltip, hideTooltip]);

  return (
    <>
      <div
        ref={contentRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Tooltip discret */}
      {tooltip.visible && tooltip.term && typeof window !== 'undefined' && createPortal(
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
