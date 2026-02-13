const ThreatFeed = () => {
  const feeds = [
    { source: "CISA", threat: "New Phishing Campaign Targeting HR Departments", severity: "High", time: "10 min ago" },
    { source: "AlienVault", threat: "Ransomware Group Updates Infrastructure", severity: "Critical", time: "25 min ago" },
    { source: "VirusTotal", threat: "Suspicious Domain Cluster Detected", severity: "Medium", time: "1 hour ago" },
    { source: "IBM X-Force", threat: "Credential Stuffing Attack Pattern", severity: "High", time: "2 hours ago" },
  ];

  const getSeverityColor = (severity) => {
    switch(severity) {
      case "Critical": return "bg-red-500";
      case "High": return "bg-orange-500";
      case "Medium": return "bg-yellow-500";
      default: return "bg-blue-500";
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 p-4 lg:p-6">
      <h4 className="text-base lg:text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Threat Intelligence Feed
      </h4>
      
      <div className="space-y-3 lg:space-y-4">
        {feeds.map((feed, i) => (
          <div key={i} className="flex items-start gap-2 lg:gap-3 p-2 lg:p-3 rounded-xl hover:bg-white/5 transition-all">
            <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-2 rounded-full flex-shrink-0 ${getSeverityColor(feed.severity)}`} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-medium text-sm lg:text-base">{feed.source}</span>
                <span className="text-white/40 text-xs whitespace-nowrap">{feed.time}</span>
              </div>
              <p className="text-white/80 text-xs lg:text-sm truncate">{feed.threat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatFeed;
