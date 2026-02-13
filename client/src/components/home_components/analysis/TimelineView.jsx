import React from 'react';

const TimelineView = () => {
  const timelineEvents = [
    { time: '14:32:15', event: 'Malicious URL detected', severity: 'critical', source: 'VirusTotal' },
    { time: '14:28:03', event: 'Suspicious email pattern', severity: 'high', source: 'AbuseIPDB' },
    { time: '14:15:44', event: 'Domain reputation check', severity: 'medium', source: 'AlienVault' },
    { time: '13:58:22', event: 'File hash analysis', severity: 'low', source: 'Hybrid Analysis' },
    { time: '13:42:11', event: 'SSL certificate verification', severity: 'info', source: 'Censys' },
    { time: '13:21:45', event: 'WHOIS lookup completed', severity: 'info', source: 'WhoisXML' },
  ];

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityBadge = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-500/20 text-red-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Analysis Timeline
      </h3>
      
      <div className="space-y-3">
        {timelineEvents.map((event, i) => (
          <div key={i} className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all">
            <div className="flex-shrink-0 w-16 text-right">
              <span className="text-white/40 text-xs">{event.time}</span>
            </div>
            <div className="flex-shrink-0 mt-1.5">
              <div className={`w-2 h-2 rounded-full ${getSeverityColor(event.severity)} group-hover:animate-pulse`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-white text-sm">{event.event}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${getSeverityBadge(event.severity)}`}>
                  {event.severity}
                </span>
              </div>
              <span className="text-white/40 text-xs">Source: {event.source}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 pt-4 text-purple-400 hover:text-purple-300 text-sm flex items-center justify-center gap-1 border-t border-white/10">
        View Full Timeline
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default TimelineView;
