const APIUsageStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Total API Calls</div>
            <div className="text-3xl font-bold text-white">{stats.totalCalls}</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Active Keys</div>
            <div className="text-3xl font-bold text-white">{stats.activeKeys}</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Error Rate</div>
            <div className="text-3xl font-bold text-white">{stats.errorRate}</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/40 text-sm mb-1">Avg Latency</div>
            <div className="text-3xl font-bold text-white">{stats.avgLatency}</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIUsageStats;
