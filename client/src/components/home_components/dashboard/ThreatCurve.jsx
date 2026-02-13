const ThreatCurve = ({ timeRange, onTimeRangeChange }) => {
  const periods = ['day', 'week', 'month'];

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 p-4 lg:p-6 z-[30]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <h4 className="text-base lg:text-lg font-semibold text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          Threat Activity
        </h4>
        <div className="flex gap-1 sm:gap-2 bg-white/5 rounded-lg p-1">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => onTimeRangeChange(period)}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all capitalize ${
                timeRange === period
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative h-32 sm:h-40 lg:h-48 w-full">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <path
            d="M 0,80 C 20,70 40,45 60,40 C 80,35 100,45 120,50 C 140,55 160,75 180,70 C 200,65 220,40 240,35 C 260,30 280,45 300,50 C 320,55 340,45 360,40 C 380,35 400,45 L 400,100 L 0,100 Z"
            fill="url(#curveGradient)"
          />
          
          <path
            d="M 0,80 C 20,70 40,45 60,40 C 80,35 100,45 120,50 C 140,55 160,75 180,70 C 200,65 220,40 240,35 C 260,30 280,45 300,50 C 320,55 340,45 360,40 C 380,35 400,45"
            stroke="url(#riskGradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="flex justify-between mt-4 text-xs text-white/40 px-2">
        <span>Jan 1</span>
        <span>Jan 7</span>
        <span>Jan 14</span>
        <span>Jan 21</span>
        <span>Jan 28</span>
        <span className="hidden sm:block">Feb 1</span>
      </div>
    </div>
  );
};

export default ThreatCurve;
