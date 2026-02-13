import { useState } from 'react';

const APIKeys = () => {
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production API Key',
      key: 'ow_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      created: '2024-01-15',
      lastUsed: '2 min ago',
      permissions: ['read', 'write'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Development Key',
      key: 'ow_test_yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      created: '2024-02-20',
      lastUsed: '1 hour ago',
      permissions: ['read'],
      status: 'active'
    }
  ]);

  const [showNewKey, setShowNewKey] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyPermissions, setNewKeyPermissions] = useState(['read']);

  const generateNewKey = () => {
    const newKey = {
      id: apiKeys.length + 1,
      name: newKeyName,
      key: `ow_${Math.random().toString(36).substr(2, 32)}`,
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never',
      permissions: newKeyPermissions,
      status: 'active'
    };
    setApiKeys([...apiKeys, newKey]);
    setShowNewKey(true);
    setNewKeyName('');
    setNewKeyPermissions(['read']);
  };

  const revokeKey = (id) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">API Keys</h3>
        <button
          onClick={() => setShowNewKey(true)}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Generate New Key
        </button>
      </div>

      {/* New Key Form */}
      {showNewKey && (
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6">
          <h4 className="text-white font-medium mb-4">Generate New API Key</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Key Name
              </label>
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                placeholder="e.g., Production, Development, Testing"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-3">
                Permissions
              </label>
              <div className="flex gap-4">
                {['read', 'write', 'delete', 'admin'].map((permission) => (
                  <label key={permission} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={newKeyPermissions.includes(permission)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNewKeyPermissions([...newKeyPermissions, permission]);
                        } else {
                          setNewKeyPermissions(newKeyPermissions.filter(p => p !== permission));
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
                onClick={() => setShowNewKey(false)}
                className="flex-1 px-4 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                onClick={generateNewKey}
                disabled={!newKeyName}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
              >
                Generate Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* API Keys List */}
      <div className="space-y-3">
        {apiKeys.map((apiKey) => (
          <div
            key={apiKey.id}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-white font-medium">{apiKey.name}</h4>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    {apiKey.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <code className="bg-white/10 px-3 py-1.5 rounded-lg text-white/80 font-mono text-sm">
                      {apiKey.key}
                    </code>
                    <button
                      onClick={() => copyToClipboard(apiKey.key)}
                      className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-white/40">
                      Created: <span className="text-white/60">{apiKey.created}</span>
                    </span>
                    <span className="text-white/40">
                      Last used: <span className="text-white/60">{apiKey.lastUsed}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">Permissions:</span>
                      {apiKey.permissions.map((perm) => (
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
                  onClick={() => revokeKey(apiKey.id)}
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

      {/* Rate Limits Info */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">API Rate Limits</h4>
            <p className="text-white/60 text-sm">
              Free tier: 1,000 requests per hour • Pro tier: 10,000 requests per hour • Enterprise: Custom limits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIKeys;
