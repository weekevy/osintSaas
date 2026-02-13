const UserActivity = ({ timeRange, detailed = false }) => {
  const activityData = {
    daily: [45, 52, 48, 71, 65, 58, 62, 68, 72, 78, 82, 85, 88, 92, 95, 98, 102, 108, 112, 118, 124, 128, 132, 138],
    hourly: [12, 8, 5, 3, 2, 4, 8, 15, 25, 35, 42, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 72, 58, 42]
  };

  const topUsers = [
    { name: 'John Doe', scans: 1245, threats: 89, accuracy: '98%' },
    { name: 'Jane Smith', scans: 1098, threats: 76, accuracy: '96%' },
    { name: 'Mike Johnson', scans: 876, threats: 54, accuracy: '95%' },
    { name: 'Sarah Williams', scans: 765, threats: 48, accuracy: '97%' },
    { name: 'Alex Brown', scans: 654, threats: 41, accuracy: '94%' }
  ];

  if (!detailed) {
    return (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">User Activity</h3>
          <span className="text-white/40 text-sm">Last 7 days</span>
        </div>

        {/* Activity Heatmap Mini */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {activityData.daily.slice(0, 7).map((value, i) => (
            <div key={i} className="text-center">
              <div 
                className="h-12 rounded-lg bg-gradient-to-t from-purple-500 to-blue-500"
                style={{ opacity: value / 150 }}
              />
              <div className="text-white/40 text-xs mt-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-white/40 text-xs">Active Users</div>
            <div className="text-2xl font-bold text-white">156</div>
            <div className="text-green-400 text-xs">+12%</div>
          </div>
          <div className="text-center">
            <div className="text-white/40 text-xs">Avg Session</div>
            <div className="text-2xl font-bold text-white">24m</div>
            <div className="text-green-400 text-xs">+8%</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Activity Overview */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">User Activity Analysis</h3>
            <p className="text-white/60 text-sm mt-1">Detailed user engagement metrics</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg">
              Daily
            </button>
            <button className="px-3 py-1.5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium rounded-lg">
              Weekly
            </button>
            <button className="px-3 py-1.5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium rounded-lg">
              Monthly
            </button>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="relative h-48 mb-6">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
            {/* Grid */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="40"
                y1={30 + i * 40}
                x2="760"
                y2={30 + i * 40}
                stroke="rgba(255,255,255,0.1)"
                strokeDasharray="4 4"
              />
            ))}

            {/* Activity bars */}
            {activityData.daily.slice(0, 24).map((value, i) => (
              <rect
                key={i}
                x={40 + i * 30}
                y={190 - value}
                width="20"
                height={value}
                fill="url(#barGradient)"
                rx="4"
                opacity={value / 150}
              />
            ))}

            <defs>
              <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>

            {/* X-axis labels */}
            {[0, 6, 12, 18, 23].map((i) => (
              <text
                key={i}
                x={40 + i * 30}
                y="210"
                textAnchor="middle"
                className="text-xs fill-white/40"
              >
                {i}:00
              </text>
            ))}
          </svg>
        </div>

        {/* Activity Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">Daily Active Users</div>
            <div className="text-2xl font-bold text-white">1,245</div>
            <div className="text-green-400 text-xs">+18%</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">Avg Session Duration</div>
            <div className="text-2xl font-bold text-white">24m 36s</div>
            <div className="text-green-400 text-xs">+12%</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">Total Searches</div>
            <div className="text-2xl font-bold text-white">8,942</div>
            <div className="text-green-400 text-xs">+23%</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-white/40 text-xs mb-1">Reports Generated</div>
            <div className="text-2xl font-bold text-white">345</div>
            <div className="text-green-400 text-xs">+7%</div>
          </div>
        </div>
      </div>

      {/* Top Users */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Top Investigators</h3>
        
        <div className="space-y-3">
          {topUsers.map((user, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium">{user.name}</div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-white/40 text-xs">{user.scans} scans</span>
                    <span className="text-white/40 text-xs">{user.threats} threats</span>
                    <span className="text-green-400 text-xs">{user.accuracy} accuracy</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                  #{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity by Hour Heatmap */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Activity Heatmap</h3>
        
        <div className="grid grid-cols-24 gap-1 mb-2">
          {activityData.hourly.map((value, i) => (
            <div key={i} className="text-center">
              <div 
                className="h-16 rounded-lg bg-gradient-to-t from-purple-500 to-blue-500"
                style={{ opacity: value / 80 }}
              />
              <div className="text-white/40 text-xs mt-1">{i}:00</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500/30 rounded" />
            <span className="text-white/60 text-xs">Low activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500/60 rounded" />
            <span className="text-white/60 text-xs">Medium activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded" />
            <span className="text-white/60 text-xs">High activity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
