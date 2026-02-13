import { useState } from 'react';
import {
  AnalysisFilters,
  ResultsTable,
  ThreatMap,
  TimelineView,
  SavedQueries
} from '../analysis';

const AnalysisDashboard = ({ 
  searchInput, 
  onSearchChange, 
  searchType, 
  onSearchTypeChange, 
  onAnalyze, 
  isAnalyzing,
  recentScans,
  alerts
}) => {
  const [selectedResult, setSelectedResult] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [timeFilter, setTimeFilter] = useState('24h');

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Analysis Center
          </h1>
          <p className="text-white/60 text-sm lg:text-base mt-1">
            Investigate URLs, emails, and files with advanced OSINT tools
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-white/60 text-sm">Today's Scans</span>
            <span className="ml-2 text-white font-semibold">247</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <span className="text-white/60 text-sm">Threats Found</span>
            <span className="ml-2 text-red-400 font-semibold">32</span>
          </div>
        </div>
      </div>

      {/* Search Bar - Prominent in Analysis view */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center bg-white/5 rounded-2xl border border-white/10 focus-within:border-purple-500/50 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
              <div className="px-4 py-3.5 text-white/60 border-r border-white/10">
                {searchType === 'url' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )}
                {searchType === 'email' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {searchType === 'file' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={`Enter ${searchType} to analyze...`}
                className="flex-1 px-4 py-3.5 bg-transparent text-white placeholder-white/40 focus:outline-none text-base"
              />
              <button
                onClick={onAnalyze}
                disabled={isAnalyzing}
                className="px-6 py-3.5 m-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Analyze Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Quick Type Selector */}
        <div className="flex flex-wrap gap-2 mt-4">
          {['url', 'email', 'file', 'ip', 'domain', 'hash'].map((type) => (
            <button
              key={type}
              onClick={() => onSearchTypeChange(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize
                ${searchType === type 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Filters & Saved Queries */}
        <div className="lg:col-span-1 space-y-6">
          <AnalysisFilters 
            filterType={filterType}
            onFilterChange={setFilterType}
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
          />
          <SavedQueries />
        </div>

        {/* Right Column - Results & Visualizations */}
        <div className="lg:col-span-2 space-y-6">
          {/* Results Table */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Analysis Results
              </h3>
              <span className="text-white/40 text-sm">Showing 12 of 247 results</span>
            </div>
            <ResultsTable 
              scans={recentScans}
              onSelectResult={setSelectedResult}
              selectedResult={selectedResult}
            />
          </div>

          {/* Threat Map & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ThreatMap />
            <TimelineView />
          </div>
        </div>
      </div>

      {/* Active Threat Alerts */}
      <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl border border-red-500/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <h3 className="text-lg font-semibold text-white">Active Threats Detected</h3>
          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg border border-red-500/30">
            {alerts.length} Critical
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  alert.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                  alert.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {alert.severity}
                </span>
                <span className="text-white/40 text-xs">{alert.time}</span>
              </div>
              <p className="text-white text-sm">{alert.message}</p>
              <p className="text-white/40 text-xs mt-2">Source: {alert.source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisDashboard;
