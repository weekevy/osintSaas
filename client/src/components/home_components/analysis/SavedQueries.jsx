import React from 'react';

const SavedQueries = () => {
  const savedQueries = [
    { 
      id: 1,
      name: 'Phishing Campaign Alpha', 
      type: 'domain', 
      lastRun: '2 hours ago',
      results: 234,
      threatLevel: 'critical'
    },
    { 
      id: 2,
      name: 'HR Email Scanners', 
      type: 'email', 
      lastRun: '5 hours ago',
      results: 89,
      threatLevel: 'high'
    },
    { 
      id: 3,
      name: 'Ransomware IOCs', 
      type: 'hash', 
      lastRun: '1 day ago',
      results: 567,
      threatLevel: 'critical'
    },
    { 
      id: 4,
      name: 'Suspicious PDFs', 
      type: 'file', 
      lastRun: '3 days ago',
      results: 45,
      threatLevel: 'medium'
    },
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'domain':
        return '🌐';
      case 'email':
        return '📧';
      case 'hash':
        return '🔑';
      case 'file':
        return '📄';
      default:
        return '📁';
    }
  };

  const getThreatBadge = (level) => {
    switch(level) {
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        Saved Queries
      </h3>
      
      <div className="space-y-3">
        {savedQueries.map((query) => (
          <button
            key={query.id}
            className="w-full p-4 rounded-xl hover:bg-white/5 transition-all text-left group border border-transparent hover:border-white/10"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getTypeIcon(query.type)}</span>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                    {query.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/40 text-xs uppercase bg-white/5 px-2 py-0.5 rounded">
                      {query.type}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${getThreatBadge(query.threatLevel)}`}>
                      {query.threatLevel}
                    </span>
                  </div>
                </div>
              </div>
              <svg className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center justify-between text-xs ml-11">
              <span className="text-white/40">Last run: {query.lastRun}</span>
              <span className="text-purple-400">{query.results} results</span>
            </div>
          </button>
        ))}
      </div>
      
      <button className="w-full mt-4 pt-4 text-purple-400 hover:text-purple-300 text-sm flex items-center justify-center gap-1 border-t border-white/10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Save Current Query
      </button>
    </div>
  );
};

export default SavedQueries;
