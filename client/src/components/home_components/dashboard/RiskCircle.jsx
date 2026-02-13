const RiskCircle = ({ riskScore, getRiskColor, getRiskBgColor }) => {
  const stats = [
    { label: 'Total Scans', value: '1,234' },
    { label: 'Threats', value: '89' },
    { label: 'Clean', value: '1,145' }
  ];

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 p-6 lg:p-8 flex flex-col items-center justify-center">
      <h3 className="text-lg lg:text-xl font-semibold text-white mb-4 lg:mb-6">Risk Assessment</h3>
      
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-4 lg:mb-6">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            strokeDasharray="2 2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke={`url(#riskGradient)`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}%`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - riskScore / 100)}%`}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${getRiskColor(riskScore)}`}>
            {riskScore}
          </span>
          <span className="text-white/40 text-xs sm:text-sm mt-2">Risk Score</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${getRiskBgColor(riskScore)}`} />
        <span className="text-sm lg:text-base text-white font-medium">
          {riskScore >= 75 ? 'Critical Risk' : 
           riskScore >= 50 ? 'High Risk' : 
           riskScore >= 25 ? 'Medium Risk' : 'Low Risk'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/10">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-white font-semibold text-sm sm:text-base">{stat.value}</div>
            <div className="text-white/40 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskCircle;
