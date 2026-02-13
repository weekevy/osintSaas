const APIEndpoint = ({ endpoint, detailed = false }) => {
  const getMethodColor = (method) => {
    switch(method) {
      case 'GET': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'POST': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'DELETE': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-white/20 text-white/60';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'stable': return 'bg-green-500/20 text-green-400';
      case 'degraded': return 'bg-yellow-500/20 text-yellow-400';
      case 'down': return 'bg-red-500/20 text-red-400';
      default: return 'bg-white/20 text-white/60';
    }
  };

  if (!detailed) {
    return (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4 hover:bg-white/5 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 text-xs font-mono rounded-full border ${getMethodColor(endpoint.method)}`}>
              {endpoint.method}
            </span>
            <div>
              <code className="text-white font-mono text-sm">{endpoint.path}</code>
              <p className="text-white/60 text-xs mt-1">{endpoint.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-white text-sm">{endpoint.calls}</div>
              <div className="text-white/40 text-xs">Calls</div>
            </div>
            <div className="text-right">
              <div className="text-white text-sm">{endpoint.avgResponse}</div>
              <div className="text-white/40 text-xs">Avg Response</div>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(endpoint.status)}`}>
              {endpoint.status}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className={`px-4 py-2 text-sm font-mono rounded-lg border ${getMethodColor(endpoint.method)}`}>
            {endpoint.method}
          </span>
          <div>
            <code className="text-white font-mono text-lg">{endpoint.path}</code>
            <p className="text-white/60 text-sm mt-1">{endpoint.description}</p>
          </div>
        </div>
        <span className={`px-3 py-1.5 text-sm rounded-full ${getStatusColor(endpoint.status)}`}>
          {endpoint.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-white/5">
          <div className="text-white/40 text-xs mb-1">Total Calls</div>
          <div className="text-2xl font-bold text-white">{endpoint.calls}</div>
        </div>
        <div className="p-4 rounded-xl bg-white/5">
          <div className="text-white/40 text-xs mb-1">Avg Response</div>
          <div className="text-2xl font-bold text-white">{endpoint.avgResponse}</div>
        </div>
        <div className="p-4 rounded-xl bg-white/5">
          <div className="text-white/40 text-xs mb-1">Error Rate</div>
          <div className="text-2xl font-bold text-green-400">0.01%</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-white font-medium mb-2">Request Parameters</h4>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-white/40">Parameter</div>
              <div className="text-white/40">Type</div>
              <div className="text-white/40">Description</div>
              {endpoint.method === 'POST' && (
                <>
                  <div className="text-white font-mono">url</div>
                  <div className="text-white/80">string</div>
                  <div className="text-white/60">The URL to analyze</div>
                  <div className="text-white font-mono">options</div>
                  <div className="text-white/80">object</div>
                  <div className="text-white/60">Additional analysis options</div>
                </>
              )}
              {endpoint.method === 'GET' && (
                <>
                  <div className="text-white font-mono">id</div>
                  <div className="text-white/80">string</div>
                  <div className="text-white/60">Report ID to retrieve</div>
                </>
              )}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Example Response</h4>
          <pre className="bg-black/50 rounded-xl p-4 text-white/60 text-xs overflow-x-auto">
            {`{
  "success": true,
  "data": {
    "risk_score": 78,
    "threat_level": "high",
    "indicators": [...],
    "reputation": "malicious"
  },
  "timestamp": "2024-03-19T10:30:00Z"
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default APIEndpoint;
