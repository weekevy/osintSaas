import React from 'react';

const ResultsTable = ({ scans, onSelectResult, selectedResult }) => {
  const getRiskBadgeColor = (score) => {
    if (score >= 75) return 'bg-red-500/20 text-red-400 border-red-500/30';
    if (score >= 50) return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    if (score >= 25) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-green-500/20 text-green-400 border-green-500/30';
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'url':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
      case 'email':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'file':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        );
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 px-4 text-white/40 text-xs font-medium">Type</th>
            <th className="text-left py-3 px-4 text-white/40 text-xs font-medium">Target</th>
            <th className="text-left py-3 px-4 text-white/40 text-xs font-medium">Risk Score</th>
            <th className="text-left py-3 px-4 text-white/40 text-xs font-medium">Detections</th>
            <th className="text-left py-3 px-4 text-white/40 text-xs font-medium">Date</th>
            <th className="text-left py-3 px-4 text-white/40 text-xs font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {scans && scans.length > 0 ? (
            scans.map((scan) => (
              <tr 
                key={scan.id} 
                className={`border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer
                  ${selectedResult?.id === scan.id ? 'bg-purple-500/10' : ''}`}
                onClick={() => onSelectResult(scan)}
              >
                <td className="py-3 px-4 text-white">
                  <span className="text-white">{getTypeIcon(scan.type)}</span>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <span className="text-white text-sm font-medium">{scan.target}</span>
                    <span className="ml-2 text-xs text-white/40">{scan.type}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getRiskBadgeColor(scan.risk)}`}>
                    {scan.risk}% Risk
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-white text-sm">{Math.floor(scan.risk / 10) + 2}/94</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-white/60 text-sm">{scan.date}</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1">
                    Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-8 text-center text-white/40">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
