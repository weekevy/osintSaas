import { useState } from 'react';

const APITokens = () => {
  const [tokens, setTokens] = useState([
    {
      id: 1,
      name: 'Production API Token',
      token: 'ow_live_2x7f9k3m1q5p8v4n2r6t9y1w3z5x7c9v',
      created: '2024-01-15',
      expires: '2025-01-15',
      lastUsed: '2 min ago',
      permissions: ['read', 'write', 'delete'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Development Token',
      token: 'ow_dev_3y8g6h2j4k7l1m9n5p8r2t6w9z4x7c1v',
      created: '2024-02-20',
      expires: '2025-02-20',
      lastUsed: '1 hour ago',
      permissions: ['read', 'write'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Analytics Integration',
      token: 'ow_analytics_4z9h7j3k6l2m8n4p1r5t9w2x6c8v3b',
      created: '2024-03-01',
      expires: '2024-06-01',
      lastUsed: '3 days ago',
      permissions: ['read'],
      status: 'expiring'
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTokenName, setNewTokenName] = useState('');
  const [newTokenExpiry, setNewTokenExpiry] = useState('30');
  const [newTokenPermissions, setNewTokenPermissions] = useState(['read']);

  const createToken = () => {
    const newToken = {
      id: tokens.length + 1,
      name: newTokenName,
      token: `ow_${Math.random().toString(36).substr(2, 32)}`,
      created: new Date().toISOString().split('T')[0],
      expires: new Date(Date.now() + parseInt(newTokenExpiry) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      lastUsed: 'Never',
      permissions: newTokenPermissions,
      status: 'active'
    };
    setTokens([...tokens, newToken]);
    setShowCreateForm(false);
    setNewTokenName('');
    setNewTokenPermissions(['read']);
  };

  const revokeToken = (id) => {
    setTokens(tokens.filter(token => token.id !== id));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'expiring': return 'bg-yellow-500/20 text-yellow-400';
      case 'expired': return 'bg-red-500/20 text-red-400';
      default: return 'bg-white/20 text-white/60';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">API Tokens</h3>
          <p className="text-white/60 text-sm mt-1">Manage authentication tokens for API access</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Generate Token
        </button>
      </div>

      {/* Create Token Form */}
      {showCreateForm && (
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6">
          <h4 className="text-white font-medium mb-4">Generate New API Token</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Token Name
              </label>
              <input
                type="text"
                value={newTokenName}
                onChange={(e) => setNewTokenName(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                placeholder="e.g., Production, Development, Integration"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Expiration
              </label>
              <select
                value={newTokenExpiry}
                onChange={(e) => setNewTokenExpiry(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
              >
                <option value="7">7 days</option>
                <option value="30">30 days</option>
                <option value="90">90 days</option>
                <option value="365">1 year</option>
                <option value="0">Never expires</option>
              </select>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-3">
                Permissions
              </label>
              <div className="flex flex-wrap gap-4">
                {['read', 'write', 'delete', 'admin'].map((permission) => (
                  <label key={permission} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={newTokenPermissions.includes(permission)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNewTokenPermissions([...newTokenPermissions, permission]);
                        } else {
                          setNewTokenPermissions(newTokenPermissions.filter(p => p !== permission));
                        }
                      }}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500"
                    />
                    <span className="text-white/80 capitalize">{permission}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowCreateForm(false)}
                className="flex-1 px-4 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                onClick={createToken}
                disabled={!newTokenName}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
              >
                Generate Token
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tokens List */}
      <div className="space-y-3">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4 hover:bg-white/5 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-white font-medium">{token.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(token.status)}`}>
                    {token.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <code className="bg-black/50 px-3 py-2 rounded-lg text-white/80 font-mono text-sm">
                      {token.token.substring(0, 20)}...{token.token.substring(token.token.length - 10)}
                    </code>
                    <button
                      onClick={() => copyToClipboard(token.token)}
                      className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                      title="Copy full token"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-white/40">
                      Created: <span className="text-white/60">{token.created}</span>
                    </span>
                    <span className="text-white/40">
                      Expires: <span className={`${token.status === 'expiring' ? 'text-yellow-400' : 'text-white/60'}`}>
                        {token.expires}
                      </span>
                    </span>
                    <span className="text-white/40">
                      Last used: <span className="text-white/60">{token.lastUsed}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">Permissions:</span>
                      {token.permissions.map((perm) => (
                        <span
                          key={perm}
                          className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs rounded-full"
                        >
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button
                  onClick={() => revokeToken(token.id)}
                  className="p-2 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Best Practices */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Security Best Practices</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <span className="text-blue-400">•</span>
                Never share your API tokens or commit them to version control
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <span className="text-blue-400">•</span>
                Use different tokens for different applications and environments
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <span className="text-blue-400">•</span>
                Regularly rotate tokens and revoke unused ones
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <span className="text-blue-400">•</span>
                Set appropriate expiration dates based on use case
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APITokens;
