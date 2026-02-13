import { useState } from 'react';

const CustomReports = () => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [dateRange, setDateRange] = useState('30d');
  const [reportName, setReportName] = useState('');
  const [savedReports, setSavedReports] = useState([
    {
      id: 1,
      name: 'Weekly Threat Summary',
      metrics: ['threats', 'iocs', 'severity'],
      lastRun: '2024-03-18',
      schedule: 'Every Monday'
    },
    {
      id: 2,
      name: 'API Performance Report',
      metrics: ['response_time', 'error_rate', 'requests'],
      lastRun: '2024-03-19',
      schedule: 'Daily'
    }
  ]);

  const availableMetrics = [
    {
      category: 'Threat Intelligence',
      items: [
        { id: 'threats', name: 'Total Threats', icon: '🛡️' },
        { id: 'iocs', name: 'Indicators of Compromise', icon: '🔍' },
        { id: 'severity', name: 'Threat Severity Distribution', icon: '📊' },
        { id: 'types', name: 'Threat Types', icon: '🔬' },
        { id: 'sources', name: 'Threat Sources', icon: '🌐' }
      ]
    },
    {
      category: 'Performance',
      items: [
        { id: 'response_time', name: 'API Response Time', icon: '⚡' },
        { id: 'error_rate', name: 'Error Rate', icon: '⚠️' },
        { id: 'requests', name: 'Request Volume', icon: '📈' },
        { id: 'uptime', name: 'System Uptime', icon: '✅' },
        { id: 'queue', name: 'Queue Length', icon: '⏳' }
      ]
    },
    {
      category: 'User Activity',
      items: [
        { id: 'active_users', name: 'Active Users', icon: '👥' },
        { id: 'searches', name: 'Searches Performed', icon: '🔎' },
        { id: 'reports', name: 'Reports Generated', icon: '📄' },
        { id: 'sessions', name: 'Session Duration', icon: '⏱️' }
      ]
    },
    {
      category: 'Compliance',
      items: [
        { id: 'audit_log', name: 'Audit Log Summary', icon: '📋' },
        { id: 'data_retention', name: 'Data Retention', icon: '🗄️' },
        { id: 'access_logs', name: 'Access Logs', icon: '🔐' }
      ]
    }
  ];

  const toggleMetric = (metricId) => {
    if (selectedMetrics.includes(metricId)) {
      setSelectedMetrics(selectedMetrics.filter(id => id !== metricId));
    } else {
      setSelectedMetrics([...selectedMetrics, metricId]);
    }
  };

  const saveReport = () => {
    if (!reportName || selectedMetrics.length === 0) return;
    
    setSavedReports([
      ...savedReports,
      {
        id: savedReports.length + 1,
        name: reportName,
        metrics: selectedMetrics,
        lastRun: 'Not yet',
        schedule: 'Manual'
      }
    ]);
    
    setReportName('');
    setSelectedMetrics([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Report Builder */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Custom Report Builder</h3>
          
          {/* Report Name */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Report Name
            </label>
            <input
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
              placeholder="e.g., Executive Security Summary"
            />
          </div>

          {/* Date Range */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Date Range
            </label>
            <div className="flex gap-2">
              {['24h', '7d', '30d', '90d', '12m'].map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${dateRange === range
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {range}
                </button>
              ))}
              <button className="px-4 py-2 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium">
                Custom
              </button>
            </div>
          </div>

          {/* Metrics Selection */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-3">
              Select Metrics
            </label>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {availableMetrics.map((category) => (
                <div key={category.category} className="bg-white/5 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-3">{category.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.items.map((metric) => (
                      <label
                        key={metric.id}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedMetrics.includes(metric.id)}
                          onChange={() => toggleMetric(metric.id)}
                          className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500"
                        />
                        <span className="text-xl">{metric.icon}</span>
                        <span className="text-white/80 text-sm">{metric.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={saveReport}
              disabled={!reportName || selectedMetrics.length === 0}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
            >
              Save Report Template
            </button>
            <button
              disabled={selectedMetrics.length === 0}
              className="px-6 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all disabled:opacity-50"
            >
              Preview
            </button>
          </div>
        </div>

        {/* Report Preview (if metrics selected) */}
        {selectedMetrics.length > 0 && (
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Report Preview</h3>
              <span className="text-white/40 text-sm">Sample data for {dateRange}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedMetrics.slice(0, 6).map((metricId) => {
                const metric = availableMetrics
                  .flatMap(c => c.items)
                  .find(m => m.id === metricId);
                
                return (
                  <div key={metricId} className="p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{metric?.icon || '📊'}</span>
                      <span className="text-white/60 text-xs">{metric?.name || metricId}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {Math.floor(Math.random() * 1000)}
                    </div>
                    <div className="text-green-400 text-xs">+12% vs previous</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Saved Reports */}
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 sticky top-6">
          <h3 className="text-lg font-semibold text-white mb-4">Saved Reports</h3>
          
          <div className="space-y-3">
            {savedReports.map((report) => (
              <div
                key={report.id}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">{report.name}</h4>
                  <span className="text-white/40 text-xs">{report.schedule}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {report.metrics.slice(0, 3).map((metric) => (
                    <span key={metric} className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {metric}
                    </span>
                  ))}
                  {report.metrics.length > 3 && (
                    <span className="px-2 py-0.5 bg-white/10 text-white/60 text-xs rounded-full">
                      +{report.metrics.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">Last run: {report.lastRun}</span>
                  <button className="text-purple-400 hover:text-purple-300">
                    Run Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 pt-4 text-purple-400 hover:text-purple-300 text-sm flex items-center justify-center gap-1 border-t border-white/10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Schedule New Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomReports;
