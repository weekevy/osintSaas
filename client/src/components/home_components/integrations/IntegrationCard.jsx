const IntegrationCard = ({ integration, onConfigure, type = 'connected' }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'error': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-white/20 text-white/60';
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4 hover:bg-white/5 transition-all">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
            {integration.icon}
          </div>
          <div>
            <h4 className="text-white font-medium">{integration.name}</h4>
            <p className="text-white/60 text-sm mt-1">{integration.description}</p>
            
            {type === 'connected' && (
              <div className="flex items-center gap-3 mt-2">
                <span className={`px-2 py-0.5 text-xs rounded-full border ${getStatusColor(integration.status)}`}>
                  {integration.status}
                </span>
                <span className="text-white/40 text-xs">Last sync: {integration.lastSync}</span>
              </div>
            )}

            {type === 'available' && (
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                  {integration.category}
                </span>
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                  {integration.popularity} demand
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {type === 'connected' && (
            <>
              <div className="flex items-center gap-1 mr-2">
                <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    style={{ width: integration.usage }}
                  />
                </div>
                <span className="text-white/40 text-xs">{integration.usage}</span>
              </div>
              
              <button
                onClick={() => onConfigure(integration)}
                className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </>
          )}

          {type === 'available' && (
            <button
              onClick={() => onConfigure(integration)}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Connect
            </button>
          )}

          <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
