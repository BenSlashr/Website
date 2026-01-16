'use client';

import { useState, useRef, useEffect } from 'react';
import { GlossaryTerm as GlossaryTermType, glossaryCategories } from '@/lib/glossary';

interface GlossaryTermProps {
  term: GlossaryTermType;
  children: React.ReactNode;
}

const categoryColors: Record<string, string> = {
  general: 'from-blue-500 to-cyan-500',
  technical: 'from-[#E74601] to-[#CE08A9]',
  content: 'from-green-500 to-emerald-500',
  netlinking: 'from-[#8962FD] to-[#CE08A9]',
  analytics: 'from-[#FF9011] to-[#E74601]',
  local: 'from-teal-500 to-green-500',
  ecommerce: 'from-[#CE08A9] to-[#CE16B5]',
  ai: 'from-[#AD21FE] to-[#8962FD]',
};

export default function GlossaryTerm({ term, children }: GlossaryTermProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      // Si pas assez d'espace au-dessus, afficher en dessous
      if (spaceAbove < 200 && spaceBelow > spaceAbove) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const categoryLabel = glossaryCategories[term.category as keyof typeof glossaryCategories];
  const categoryColor = categoryColors[term.category] || 'from-gray-500 to-gray-600';

  return (
    <span
      ref={triggerRef}
      className="relative inline"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Terme surligné */}
      <span className="border-b border-dashed border-[#E74601]/50 text-[#E74601] cursor-help transition-colors hover:border-[#E74601] hover:text-[#FF9011]">
        {children}
      </span>

      {/* Tooltip */}
      {isVisible && (
        <span
          ref={tooltipRef}
          className={`absolute z-50 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] pointer-events-none ${
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
          role="tooltip"
        >
          <span className="block bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-2xl overflow-hidden animate-fadeIn">
            {/* Header avec catégorie */}
            <span className={`block px-4 py-2 bg-gradient-to-r ${categoryColor}`}>
              <span className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm">
                  {term.term}
                </span>
                <span className="text-white/80 text-xs px-2 py-0.5 bg-white/20 rounded-full">
                  {categoryLabel}
                </span>
              </span>
            </span>

            {/* Définition */}
            <span className="block px-4 py-3">
              <span className="block text-gray-300 text-sm leading-relaxed">
                {term.definition}
              </span>
            </span>

            {/* Flèche */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border-gray-700 transform rotate-45 ${
                position === 'top'
                  ? 'bottom-[-6px] border-r border-b'
                  : 'top-[-6px] border-l border-t'
              }`}
            />
          </span>
        </span>
      )}
    </span>
  );
}
