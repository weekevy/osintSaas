const ReportCard = ({ report }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'scheduled': return 'bg-blue-500/20 text-blue-400';
      case 'generating': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-white/20 text-white/60';
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4 hover:bg-white/5 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <span className="text-xl">{report.format === 'PDF' ? '📄' : report.format === 'DOCX' ? '📝' : '🌐'}</span>
          </div>
          <div>
            <h4 className="text-white font-medium">{report.name}</h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-white/40 text-xs">{report.type}</span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-white/40 text-xs">{report.created}</span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-white/40 text-xs">{report.size}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(report.status)}`}>
            {report.status}
          </span>
          <div className="flex items-center gap-2">
            <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
