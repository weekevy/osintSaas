import IntegrationCard from './IntegrationCard';

const ConnectedServices = ({ integrations, onConfigure }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Connected Services</h3>
        <span className="text-white/40 text-sm">{integrations.length} active connections</span>
      </div>

      <div className="space-y-3">
        {integrations.map((integration) => (
          <IntegrationCard
            key={integration.id}
            integration={integration}
            onConfigure={onConfigure}
            type="connected"
          />
        ))}
      </div>

      {integrations.length === 0 && (
        <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
          <div className="text-6xl mb-4">🔌</div>
          <h3 className="text-xl font-semibold text-white mb-2">No connected services</h3>
          <p className="text-white/60 mb-4">Connect your first integration to get started</p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all">
            Browse Integrations
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectedServices;
