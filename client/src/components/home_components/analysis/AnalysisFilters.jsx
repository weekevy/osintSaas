import React from 'react';

const AnalysisFilters = ({ filterType, onFilterChange, timeFilter, onTimeFilterChange }) => {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Filters
      </h3>
      
      <div className="space-y-4">
        {/* Result Type Filter */}
        <div>
          <label className="block text-white/60 text-sm mb-2">Result Type</label>
          <div className="space-y-2">
            {['all', 'malicious', 'suspicious', 'clean', 'unrated'].map((type) => (
              <button
                key={type}
                onClick={() => onFilterChange(type)}
                className={`w-full px-4 py-2 rounded-lg text-sm capitalize transition-all ${
                  filterType === type
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Time Range Filter */}
        <div>
          <label className="block text-white/60 text-sm mb-2">Time Range</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: '1h', label: 'Last Hour' },
              { value: '24h', label: 'Last 24h' },
              { value: '7d', label: 'Last 7 Days' },
              { value: '30d', label: 'Last 30 Days' }
            ].map((range) => (
              <button
                key={range.value}
                onClick={() => onTimeFilterChange(range.value)}
                className={`px-3 py-2 rounded-lg text-xs transition-all ${
                  timeFilter === range.value
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Threat Level Filter */}
        <div>
          <label className="block text-white/60 text-sm mb-2">Threat Level</label>
          <div className="space-y-2">
            {['critical', 'high', 'medium', 'low'].map((level) => (
              <label key={level} className="flex items-center gap-2 text-white/60 hover:text-white cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20" 
                />
                <span className="text-sm capitalize">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full mt-4 px-4 py-2 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default AnalysisFilters;
