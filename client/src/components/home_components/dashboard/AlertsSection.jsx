const AlertsSection = ({ alerts }) => {
  const getSeverityColor = (severity) => {
    switch(severity) {
      case "critical": return "border-red-500 bg-red-500/10 text-red-400";
      case "high": return "border-orange-500 bg-orange-500/10 text-orange-400";
      case "warning": return "border-yellow-500 bg-yellow-500/10 text-yellow-400";
      default: return "border-blue-500 bg-blue-500/10 text-blue-400";
    }
  };

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case "critical": return (
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
      case "high": 
      case "warning": return (
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
      default: return null;
    }
  };

  return (
    <div className="space-y-3 lg:space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg lg:text-xl font-semibold text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Active Threats & Alerts
          <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-lg border border-red-500/30">
            {alerts?.length || 0} New
          </span>
        </h3>
        <button className="text-white/60 hover:text-white text-xs sm:text-sm flex items-center gap-1">
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:gap-4">
        {alerts && alerts.length > 0 ? (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 lg:p-5 rounded-xl lg:rounded-2xl border-2 ${getSeverityColor(alert.severity)} backdrop-blur-xl flex flex-col sm:flex-row items-start gap-3 lg:gap-4 transition-all hover:scale-[1.01]`}
            >
              <div className="flex-shrink-0">
                {getSeverityIcon(alert.severity)}
              </div>
              <div className="flex-1 w-full sm:w-auto">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-sm lg:text-base capitalize">{alert.severity} Risk</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                    {alert.source}
                  </span>
                </div>
                <p className="text-white/90 text-sm lg:text-base">{alert.message}</p>
                <div className="flex flex-wrap items-center gap-3 lg:gap-4 mt-2 text-xs lg:text-sm">
                  <button className="flex items-center gap-1 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="hidden sm:inline">Mark as reviewed</span>
                    <span className="sm:hidden">Review</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="hidden sm:inline">Add to watchlist</span>
                    <span className="sm:hidden">Watch</span>
                  </button>
                </div>
              </div>
              <span className="text-white/40 text-xs sm:text-sm sm:ml-auto">{alert.time}</span>
            </div>
          ))
        ) : (
          <div className="p-8 text-center bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/60">No active threats detected</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertsSection;
