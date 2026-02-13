import { useState } from 'react';

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch, 
  filters = [],
  className = "" 
}) => {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ query, filter: selectedFilter });
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="flex items-center bg-white/5 rounded-2xl border border-white/10 focus-within:border-purple-500/50 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
        {/* Filter Dropdown */}
        {filters.length > 0 && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 text-white/60 hover:text-white border-r border-white/10"
            >
              <span className="text-sm capitalize">{selectedFilter}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isFilterOpen && (
              <>
                <div className="fixed inset-0 z-[90]" onClick={() => setIsFilterOpen(false)} />
                <div className="absolute top-full left-0 mt-2 w-40 bg-gray-900 rounded-xl border border-white/10 shadow-2xl z-[100] overflow-hidden">
                  {filters.map((filter) => (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => {
                        setSelectedFilter(filter.value);
                        setIsFilterOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left text-white/70 hover:bg-white/5 hover:text-white capitalize"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-2.5 bg-transparent text-white placeholder-white/40 focus:outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="px-4 py-2.5 m-1 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
