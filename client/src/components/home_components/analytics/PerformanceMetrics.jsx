const PerformanceMetrics = ({ timeRange }) => {
  const metrics = {
    api: {
      avgResponse: '187ms',
      p95: '245ms',
      p99: '389ms',
      errorRate: '0.23%',
      uptime: '99.97%',
      requests: '1.2M'
    },
    search: {
      avgTime: '0.8s',
      p95: '1.2s',
      p99: '1.8s',
      successRate: '99.8%',
      cacheHit: '67%',
      queries: '890K'
    },
    analysis: {
      avgTime: '2.3s',
      p95: '3.1s',
      p99: '4.5s',
      successRate: '98.5%',
      queueTime: '0.3s',
      jobs: '234K'
    },
    report: {
      avgTime: '1.5s',
      p95: '2.2s',
      p99: '3.2s',
      successRate: '99.2%',
      formats: '5',
      generated: '45K'
    }
  };

  return (
    <div className="space-y-6">
      {/* System Health */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">System Performance</h3>
            <p className="text-white/60 text-sm mt-1">Real-time performance metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm">All systems operational</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">API Uptime</div>
            <div className="text-2xl font-bold text-green-400">{metrics.api.uptime}</div>
            <div className="text-white/40 text-xs">Last 30 days</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">Avg Response</div>
            <div className="text-2xl font-bold text-white">{metrics.api.avgResponse}</div>
            <div className="text-green-400 text-xs">-8ms vs yesterday</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">Error Rate</div>
            <div className="text-2xl font-bold text-white">{metrics.api.errorRate}</div>
            <div className="text-green-400 text-xs">-0.05% vs yesterday</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">Total Requests</div>
            <div className="text-2xl font-bold text-white">{metrics.api.requests}</div>
            <div className="text-white/40 text-xs">Last 24h</div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="relative h-48">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
            {/* Background */}
            <rect x="0" y="0" width="800" height="200" fill="rgba(255,255,255,0.02)" rx="8" />
            
            {/* Response time line */}
            <path
              d="M 40,160 L 80,140 L 120,120 L 160,100 L 200,80 L 240,70 L 280,60 L 320,50 L 360,45 L 400,40 L 440,45 L 480,50 L 520,60 L 560,70 L 600,80 L 640,90 L 680,100 L 720,110 L 760,120"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
            />
            
            {/* P95 line */}
            <path
              d="M 40,140 L 80,130 L 120,110 L 160,95 L 200,85 L 240,75 L 280,70 L 320,65 L 360,60 L 400,58 L 440,62 L 480,68 L 520,75 L 560,82 L 600,90 L 640,98 L 680,105 L 720,115 L 760,125"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            
            {/* Labels */}
            <text x="40" y="180" className="text-xs fill-white/40">00:00</text>
            <text x="400" y="180" className="text-xs fill-white/40" textAnchor="middle">12:00</text>
            <text x="760" y="180" className="text-xs fill-white/40" textAnchor="end">24:00</text>
            
            <text x="620" y="30" className="text-xs fill-purple-400">Avg Response</text>
            <text x="620" y="50" className="text-xs fill-yellow-400">P95</text>
          </svg>
        </div>
      </div>

      {/* Service Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Performance */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white">API Gateway</h4>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Average Response Time</span>
              <span className="text-white font-medium">{metrics.api.avgResponse}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">95th Percentile</span>
              <span className="text-white font-medium">{metrics.api.p95}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">99th Percentile</span>
              <span className="text-white font-medium">{metrics.api.p99}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Error Rate</span>
              <span className="text-green-400 font-medium">{metrics.api.errorRate}</span>
            </div>
          </div>
        </div>

        {/* Search Performance */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white">Search Engine</h4>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Average Query Time</span>
              <span className="text-white font-medium">{metrics.search.avgTime}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Cache Hit Ratio</span>
              <span className="text-green-400 font-medium">{metrics.search.cacheHit}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Success Rate</span>
              <span className="text-green-400 font-medium">{metrics.search.successRate}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Queries per Day</span>
              <span className="text-white font-medium">{metrics.search.queries}</span>
            </div>
          </div>
        </div>

        {/* Analysis Performance */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white">Analysis Engine</h4>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Average Analysis Time</span>
              <span className="text-white font-medium">{metrics.analysis.avgTime}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Queue Time</span>
              <span className="text-white font-medium">{metrics.analysis.queueTime}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Success Rate</span>
              <span className="text-green-400 font-medium">{metrics.analysis.successRate}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Jobs per Day</span>
              <span className="text-white font-medium">{metrics.analysis.jobs}</span>
            </div>
          </div>
        </div>

        {/* Report Generation */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white">Report Generator</h4>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Average Generation Time</span>
              <span className="text-white font-medium">{metrics.report.avgTime}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Success Rate</span>
              <span className="text-green-400 font-medium">{metrics.report.successRate}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Supported Formats</span>
              <span className="text-white font-medium">{metrics.report.formats}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-white/60">Reports Generated</span>
              <span className="text-white font-medium">{metrics.report.generated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Resources */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">System Resources</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/60">CPU Usage</span>
              <span className="text-white font-medium">45%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>
            <span className="text-white/40 text-xs mt-1 block">8 cores @ 2.4GHz</span>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/60">Memory Usage</span>
              <span className="text-white font-medium">62%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[62%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            </div>
            <span className="text-white/40 text-xs mt-1 block">24.8GB / 40GB</span>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/60">Storage</span>
              <span className="text-white font-medium">45%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
            <span className="text-white/40 text-xs mt-1 block">2.3TB / 5TB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
