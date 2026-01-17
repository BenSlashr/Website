'use client';

import { useState } from 'react';

interface BlogFiltersProps {
  categories: string[];
  onFilterChange: (category: string | null) => void;
}

const BlogFilters = ({ categories, onFilterChange }: BlogFiltersProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string | null) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      <button
        onClick={() => handleFilterClick(null)}
        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium min-h-[44px] flex items-center transition-colors ${
          activeFilter === null
            ? 'bg-white text-black'
            : 'bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400'
        }`}
      >
        TOUT
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilterClick(category)}
          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium min-h-[44px] flex items-center transition-colors ${
            activeFilter === category
              ? 'bg-white text-black'
              : 'bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400'
          }`}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default BlogFilters;
