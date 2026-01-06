'use client';

import { useMemo } from 'react';
import GlossaryTerm from './GlossaryTerm';
import { getAllTermsForMatching, GlossaryTerm as GlossaryTermType } from '@/lib/glossary';

interface GlossaryContentProps {
  html: string;
  className?: string;
  maxTermsPerArticle?: number; // Limite le nombre de termes annotés
}

// Parse le HTML et ajoute les tooltips sur les termes du glossaire
export default function GlossaryContent({
  html,
  className = '',
  maxTermsPerArticle = 50
}: GlossaryContentProps) {
  const processedContent = useMemo(() => {
    const terms = getAllTermsForMatching();
    const usedTerms = new Set<string>(); // Pour éviter d'annoter plusieurs fois le même terme
    let annotatedCount = 0;

    // Fonction pour échapper les caractères spéciaux regex
    const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Créer une regex pour tous les termes
    const termPatterns = terms.map(({ term }) => escapeRegex(term)).join('|');
    const regex = new RegExp(`\\b(${termPatterns})\\b`, 'gi');

    // Parser le HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Fonction récursive pour traiter les nœuds texte
    const processNode = (node: Node): void => {
      if (annotatedCount >= maxTermsPerArticle) return;

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        if (!text.trim()) return;

        // Vérifier si le parent est un élément qu'on ne veut pas modifier
        const parent = node.parentElement;
        if (parent && ['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'H1', 'H2', 'H3'].includes(parent.tagName)) {
          return;
        }

        // Chercher les termes dans le texte
        const matches: { index: number; length: number; term: string; entry: GlossaryTermType }[] = [];
        let match;

        while ((match = regex.exec(text)) !== null) {
          const matchedText = match[0];
          const termEntry = terms.find(
            t => t.term.toLowerCase() === matchedText.toLowerCase()
          );

          if (termEntry && !usedTerms.has(termEntry.entry.term) && annotatedCount < maxTermsPerArticle) {
            matches.push({
              index: match.index,
              length: matchedText.length,
              term: matchedText,
              entry: termEntry.entry,
            });
          }
        }

        // Reset regex
        regex.lastIndex = 0;

        if (matches.length === 0) return;

        // Créer les nouveaux nœuds
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        matches.forEach(({ index, length, term, entry }) => {
          // Texte avant le match
          if (index > lastIndex) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex, index)));
          }

          // Créer un placeholder pour le terme avec tooltip
          const span = document.createElement('span');
          span.setAttribute('data-glossary-term', entry.term);
          span.setAttribute('data-glossary-definition', entry.definition);
          span.setAttribute('data-glossary-category', entry.category);
          span.textContent = term;
          fragment.appendChild(span);

          usedTerms.add(entry.term);
          annotatedCount++;

          lastIndex = index + length;
        });

        // Texte restant après le dernier match
        if (lastIndex < text.length) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }

        // Remplacer le nœud texte original
        node.parentNode?.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Traiter les enfants (copie pour éviter les problèmes de modification)
        const children = Array.from(node.childNodes);
        children.forEach(child => processNode(child));
      }
    };

    // Traiter le body
    processNode(doc.body);

    return doc.body.innerHTML;
  }, [html, maxTermsPerArticle]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}

// Version alternative qui retourne du JSX au lieu de dangerouslySetInnerHTML
// Plus sécurisée mais plus complexe à implémenter avec du contenu WordPress
export function GlossaryContentSafe({
  children,
  className = ''
}: {
  children: string;
  className?: string;
}) {
  const terms = getAllTermsForMatching();
  const usedTerms = new Set<string>();

  const processText = (text: string): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    const termPatterns = terms.map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`\\b(${termPatterns})\\b`, 'gi');

    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
      const matchedText = match[0];
      const termEntry = terms.find(
        t => t.term.toLowerCase() === matchedText.toLowerCase()
      );

      if (termEntry && !usedTerms.has(termEntry.entry.term)) {
        // Texte avant le match
        if (match.index > lastIndex) {
          result.push(text.slice(lastIndex, match.index));
        }

        // Terme avec tooltip
        result.push(
          <GlossaryTerm key={key++} term={termEntry.entry}>
            {matchedText}
          </GlossaryTerm>
        );

        usedTerms.add(termEntry.entry.term);
        lastIndex = match.index + matchedText.length;
      }
    }

    // Texte restant
    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }

    return result;
  };

  return (
    <div className={className}>
      {processText(children)}
    </div>
  );
}
