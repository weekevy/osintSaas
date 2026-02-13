import { useState } from 'react';

const WebhookConfig = () => {
  const [webhooks, setWebhooks] = useState([
    {
      id: 1,
      name: 'Slack Security Channel',
      url: 'https://hooks.slack.com/services/YOUHOOKINHERE',
      events: ['alert.critical', 'investigation.created', 'report.generated'],
      status: 'active',
      lastTriggered: '5 min ago'
    },
    {
      id: 2,
      name: 'Discord Bot',
      url: 'https://discord.com/api/webhooks/YOURHOOKINHERE',
      events: ['alert.high', 'threat.detected'],
      status: 'active',
      lastTriggered: '1 hour ago'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    events: []
  });

  const availableEvents = [
    { id: 'alert.critical', label: 'Critical Alerts' },
    { id: 'alert.high', label: 'High Alerts' },
    { id: 'alert.medium', label: 'Medium Alerts' },
    { id: 'investigation.created', label: 'Investigation Created' },
    { id: 'investigation.updated', label: 'Investigation Updated' },
    { id: 'report.generated', label: 'Report Generated' },
    { id: 'threat.detected', label: 'Threat Detected' },
    { id: 'user.joined', label: 'User Joined Team' },
  ];

  const toggleEvent = (eventId) => {
    if (formData.events.includes(eventId)) {
      setFormData({
        ...formData,
        events: formData.events.filter(id => id !== eventId)
      });
    } else {
      setFormData({
        ...formData,
        events: [...formData.events, eventId]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWebhooks([
      ...webhooks,
      {
        id: webhooks.length + 1,
        ...formData,
        status: 'active',
        lastTriggered: 'Never'
      }
    ]);
    setShowForm(false);
    setFormData({ name: '', url: '', events: [] });
  };

  const toggleWebhookStatus = (id) => {
    setWebhooks(webhooks.map(webhook =>
      webhook.id === id
        ? { ...webhook, status: webhook.status === 'active' ? 'paused' : 'active' }
        : webhook
    ));
  };

  const deleteWebhook = (id) => {
    setWebhooks(webhooks.filter(webhook => webhook.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Webhook Configurations</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Webhook
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6">
          <h4 className="text-white font-medium mb-4">Create Webhook</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Webhook Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                placeholder="e.g., Slack Security Alerts"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Webhook URL
              </label>
              <input
                type="url"
                required
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                placeholder="https://hooks.example.com/..."
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-3">
                Trigger Events
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {availableEvents.map((event) => (
                  <label key={event.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.events.includes(event.id)}
                      onChange={() => toggleEvent(event.id)}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500"
                    />
                    <span className="text-white/80 text-sm">{event.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 px-4 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all"
              >
                Create Webhook
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Webhook List */}
      <div className="space-y-3">
        {webhooks.map((webhook) => (
          <div
            key={webhook.id}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-white font-medium">{webhook.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    webhook.status === 'active'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {webhook.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-white/40">URL:</span>
                    <span className="text-white/60 font-mono text-xs truncate max-w-md">
                      {webhook.url}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-white/40 text-sm">Events:</span>
                    {webhook.events.map((event) => (
                      <span
                        key={event}
                        className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/30"
                      >
                        {event}
                      </span>
                    ))}
                  </div>

                  <div className="text-white/40 text-xs">
                    Last triggered: {webhook.lastTriggered}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => toggleWebhookStatus(webhook.id)}
                  className={`p-2 rounded-lg transition-all ${
                    webhook.status === 'active'
                      ? 'text-yellow-400 hover:bg-yellow-500/10'
                      : 'text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  {webhook.status === 'active' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button
                  onClick={() => deleteWebhook(webhook.id)}
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
    </div>
  );
};

export default WebhookConfig;
