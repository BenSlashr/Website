'use client';

import { useMemo } from 'react';
import { glossary } from '@/lib/glossary';

// Fonction pour vérifier si une position est dans une balise exclue (a, h1-h6, span.glossary-tooltip)
function isInsideExcludedTag(html: string, position: number): boolean {
  const beforeText = html.substring(0, position);

  // Balises simples à exclure
  const simpleTags = ['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  for (const tag of simpleTags) {
    const openPattern = new RegExp(`<${tag}[^>]*>`, 'gi');
    const closePattern = new RegExp(`</${tag}>`, 'gi');

    let lastOpen = -1;
    let lastClose = -1;
    let match;

    while ((match = openPattern.exec(beforeText)) !== null) {
      lastOpen = match.index;
    }

    while ((match = closePattern.exec(beforeText)) !== null) {
      lastClose = match.index;
    }

    if (lastOpen > lastClose) {
      return true;
    }
  }

  // Vérifier aussi les spans glossary-tooltip (pour éviter les tooltips imbriqués)
  const tooltipOpenPattern = /<span class="glossary-tooltip">/gi;
  const spanClosePattern = /<\/span>/gi;

  let lastTooltipOpen = -1;
  let tooltipMatch;

  while ((tooltipMatch = tooltipOpenPattern.exec(beforeText)) !== null) {
    lastTooltipOpen = tooltipMatch.index;
  }

  if (lastTooltipOpen !== -1) {
    // Compter les </span> après le dernier glossary-tooltip ouvert
    let spanCloseCount = 0;
    const afterTooltip = beforeText.substring(lastTooltipOpen);

    while (spanClosePattern.exec(afterTooltip) !== null) {
      spanCloseCount++;
    }

    // Si aucun </span> après l'ouverture du tooltip, on est dedans
    if (spanCloseCount === 0) {
      return true;
    }
  }

  return false;
}

// Fonction pour annoter le HTML côté string (avant le rendu)
function annotateHtmlWithGlossary(html: string, maxTerms: number): string {
  const terms = glossary.flatMap(entry => {
    const allTerms = [entry.term, ...(entry.aliases || [])];
    return allTerms.map(term => ({ term, entry }));
  }).sort((a, b) => b.term.length - a.term.length);

  const usedTerms = new Set<string>();
  let annotatedCount = 0;
  let result = html;

  const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  for (const { term, entry } of terms) {
    if (annotatedCount >= maxTerms) break;
    if (usedTerms.has(entry.term)) continue;

    // Pattern qui évite les balises HTML et les attributs
    const pattern = new RegExp(
      `(?<![\\w-])(?<!<[^>]*)\\b(${escapeRegex(term)})\\b(?![^<]*>)(?![-\\w])`,
      'gi'
    );

    // Tooltip intégré via CSS :hover - pas besoin de JS
    const tooltipHtml = `<span class="glossary-tooltip">${entry.definition.replace(/"/g, '&quot;')}</span>`;
    const replacementTemplate = `<span class="glossary-term"><mark class="glossary-highlight">$1</mark>${tooltipHtml}</span>`;

    let tempResult = result;
    let offset = 0;
    let matchResult;

    // Reset regex
    pattern.lastIndex = 0;

    while ((matchResult = pattern.exec(result)) !== null) {
      if (annotatedCount >= maxTerms || usedTerms.has(entry.term)) break;

      const matchPosition = matchResult.index;

      // Vérifier si on est dans un lien ou un titre
      if (isInsideExcludedTag(result, matchPosition)) {
        continue;
      }

      // Effectuer le remplacement
      const replacement = replacementTemplate.replace('$1', matchResult[1]);
      tempResult = tempResult.substring(0, matchPosition + offset) +
                   replacement +
                   tempResult.substring(matchPosition + offset + matchResult[0].length);

      offset += replacement.length - matchResult[0].length;
      usedTerms.add(entry.term);
      annotatedCount++;
      break; // Un seul remplacement par terme
    }

    result = tempResult;
  }

  return result;
}

interface ArticleContentProps {
  html: string;
  className?: string;
  enableGlossary?: boolean;
  maxTerms?: number;
}

export default function ArticleContent({
  html,
  className = '',
  enableGlossary = true,
  maxTerms = 30
}: ArticleContentProps) {
  // Annoter le HTML une seule fois via useMemo
  const annotatedHtml = useMemo(() => {
    if (!enableGlossary) return html;
    return annotateHtmlWithGlossary(html, maxTerms);
  }, [html, enableGlossary, maxTerms]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: annotatedHtml }}
    />
  );
}
