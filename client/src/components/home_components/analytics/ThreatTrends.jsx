import { useState } from 'react';

const ThreatTrends = ({ timeRange, detailed = false }) => {
  const [chartType, setChartType] = useState('line');

  const threatData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    critical: [45, 52, 48, 71, 65, 58, 62, 68, 72, 78, 82, 85],
    high: [82, 78, 85, 91, 88, 84, 89, 92, 95, 98, 102, 108],
    medium: [124, 118, 132, 128, 135, 142, 138, 145, 152, 158, 162, 168],
    low: [210, 198, 215, 208, 222, 235, 228, 242, 255, 248, 262, 275]
  };

  const threatTypes = [
    { name: 'Phishing', count: 2345, change: '+12%', color: 'text-red-400' },
    { name: 'Malware', count: 1876, change: '-5%', color: 'text-orange-400' },
    { name: 'Ransomware', count: 892, change: '+23%', color: 'text-yellow-400' },
    { name: 'Social Engineering', count: 654, change: '-8%', color: 'text-blue-400' },
    { name: 'DDoS', count: 432, change: '-15%', color: 'text-green-400' },
    { name: 'Zero-Day', count: 123, change: '+45%', color: 'text-purple-400' }
  ];

  if (!detailed) {
    return (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Threat Trends</h3>
          <select className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 12 months</option>
          </select>
        </div>

        {/* Mini Chart */}
        <div className="relative h-32 mb-4">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
            <path
              d="M 0,80 C 40,70 80,45 120,40 C 160,35 200,55 240,50 C 280,45 320,65 360,60 C 400,55 400,55 400,55 L 400,100 L 0,100 Z"
              fill="url(#threatGradient)"
            />
            <path
              d="M 0,80 C 40,70 80,45 120,40 C 160,35 200,55 240,50 C 280,45 320,65 360,60 C 400,55"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="threatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="text-white font-semibold">Critical</div>
            <div className="text-red-400 text-lg font-bold">85</div>
            <div className="text-white/40 text-xs">+12%</div>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold">High</div>
            <div className="text-orange-400 text-lg font-bold">108</div>
            <div className="text-white/40 text-xs">+8%</div>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold">Medium</div>
            <div className="text-yellow-400 text-lg font-bold">168</div>
            <div className="text-white/40 text-xs">-3%</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Chart Controls */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Threat Intelligence Trends</h3>
            <p className="text-white/60 text-sm mt-1">Analysis of threat patterns over time</p>
          </div>
          <div className="flex gap-2">
            {['line', 'bar', 'area'].map((type) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-all
                  ${chartType === type
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Chart */}
        <div className="relative h-64 mb-6">
          <svg className="w-full h-full" viewBox="0 0 800 300">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="40"
                y1={40 + i * 55}
                x2="760"
                y2={40 + i * 55}
                stroke="rgba(255,255,255,0.1)"
                strokeDasharray="4 4"
              />
            ))}

            {/* Critical threats line */}
            <path
              d={`M 40,${300 - threatData.critical[0]} ` + threatData.critical.map((value, i) => 
                `L ${40 + i * 65},${300 - value}`
              ).join(' ')}
              stroke="#EF4444"
              strokeWidth="2"
              fill="none"
            />

            {/* High threats line */}
            <path
              d={`M 40,${300 - threatData.high[0]} ` + threatData.high.map((value, i) => 
                `L ${40 + i * 65},${300 - value}`
              ).join(' ')}
              stroke="#F97316"
              strokeWidth="2"
              fill="none"
            />

            {/* Medium threats line */}
            <path
              d={`M 40,${300 - threatData.medium[0]} ` + threatData.medium.map((value, i) => 
                `L ${40 + i * 65},${300 - value}`
              ).join(' ')}
              stroke="#EAB308"
              strokeWidth="2"
              fill="none"
            />

            {/* X-axis labels */}
            {threatData.labels.map((label, i) => (
              <text
                key={i}
                x={40 + i * 65}
                y="290"
                textAnchor="middle"
                className="text-xs fill-white/40"
              >
                {label}
              </text>
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-white/80 text-sm">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full" />
            <span className="text-white/80 text-sm">High</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="text-white/80 text-sm">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-white/80 text-sm">Low</span>
          </div>
        </div>
      </div>

      {/* Threat Type Breakdown */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Threat Type Breakdown</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {threatTypes.map((threat, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white font-medium">{threat.name}</div>
                <div className={`text-2xl font-bold ${threat.color}`}>{threat.count}</div>
              </div>
              <div className={`text-sm ${threat.change.startsWith('+') ? 'text-red-400' : 'text-green-400'}`}>
                {threat.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top IOCs */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Top Indicators of Compromise</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/40 text-xs">IOC</th>
                <th className="text-left py-3 px-4 text-white/40 text-xs">Type</th>
                <th className="text-left py-3 px-4 text-white/40 text-xs">Threat Level</th>
                <th className="text-left py-3 px-4 text-white/40 text-xs">First Seen</th>
                <th className="text-left py-3 px-4 text-white/40 text-xs">Last Seen</th>
                <th className="text-left py-3 px-4 text-white/40 text-xs">Occurrences</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ioc: 'suspicious-domain.com', type: 'Domain', level: 'Critical', first: '2024-03-01', last: '2024-03-19', count: 345 },
                { ioc: '185.234.56.78', type: 'IP', level: 'High', first: '2024-03-15', last: '2024-03-19', count: 234 },
                { ioc: 'malware.exe', type: 'File', level: 'High', first: '2024-03-10', last: '2024-03-18', count: 189 },
                { ioc: 'scam@phishing.com', type: 'Email', level: 'Medium', first: '2024-03-05', last: '2024-03-19', count: 156 },
              ].map((ioc, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-4">
                    <code className="text-purple-400 text-sm">{ioc.ioc}</code>
                  </td>
                  <td className="py-3 px-4 text-white/80 text-sm">{ioc.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ioc.level === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      ioc.level === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {ioc.level}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-white/60 text-sm">{ioc.first}</td>
                  <td className="py-3 px-4 text-white/60 text-sm">{ioc.last}</td>
                  <td className="py-3 px-4 text-white font-medium">{ioc.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThreatTrends;
