const AnalyticsOverview = ({ timeRange }) => {
  const stats = {
    totalScans: '1,234,567',
    threatsDetected: '89,234',
    avgResponseTime: '187ms',
    activeUsers: '3,456',
    scanTrend: '+12.3%',
    threatTrend: '-5.2%',
    responseTrend: '-8.1%',
    userTrend: '+18.7%'
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Total Scans</div>
            <div className="text-3xl font-bold text-white">{stats.totalScans}</div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-green-400 text-sm">{stats.scanTrend}</span>
              <span className="text-white/40 text-xs">vs last period</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Threats Detected</div>
            <div className="text-3xl font-bold text-white">{stats.threatsDetected}</div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-green-400 text-sm">{stats.threatTrend}</span>
              <span className="text-white/40 text-xs">vs last period</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Avg Response Time</div>
            <div className="text-3xl font-bold text-white">{stats.avgResponseTime}</div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-green-400 text-sm">{stats.responseTrend}</span>
              <span className="text-white/40 text-xs">vs last period</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Active Users</div>
            <div className="text-3xl font-bold text-white">{stats.activeUsers}</div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-green-400 text-sm">{stats.userTrend}</span>
              <span className="text-white/40 text-xs">vs last period</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
