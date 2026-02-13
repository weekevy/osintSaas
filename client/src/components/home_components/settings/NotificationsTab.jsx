import { useState } from 'react';

const NotificationsTab = ({ isLoading, setIsLoading }) => {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    emailFrequency: 'instant',
    pushNotifications: true,
    scanComplete: true,
    threatDetected: true,
    weeklyReport: true,
    marketingEmails: false,
    slackWebhook: '',
    discordWebhook: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // API call to save notification settings
      const response = await fetch('/api/user/notifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });

      if (response.ok) {
        // Show success message
        console.log('Settings saved');
      }
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <button type="submit" id="save-settings" className="hidden" />

      {/* Email Notifications */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Email Notifications</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Email Alerts</p>
            <p className="text-white/60 text-sm">Receive alerts via email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="emailAlerts"
              checked={settings.emailAlerts}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500"></div>
          </label>
        </div>

        {settings.emailAlerts && (
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Email Frequency</label>
            <select
              name="emailFrequency"
              value={settings.emailFrequency}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
            >
              <option value="instant">Instant</option>
              <option value="daily">Daily Digest</option>
              <option value="weekly">Weekly Summary</option>
            </select>
          </div>
        )}
      </div>

      {/* Push Notifications */}
      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Push Notifications</h3>
            <p className="text-white/60 text-sm">In-app notifications</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="pushNotifications"
              checked={settings.pushNotifications}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500"></div>
          </label>
        </div>

        {settings.pushNotifications && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/80">Scan Complete</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="scanComplete"
                  checked={settings.scanComplete}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/80">Threat Detected</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="threatDetected"
                  checked={settings.threatDetected}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/80">Weekly Report</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="weeklyReport"
                  checked={settings.weeklyReport}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Integrations */}
      <div className="border-t border-white/10 pt-6">
        <h3 className="text-lg font-semibold text-white mb-4">Integrations</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Slack Webhook URL</label>
            <input
              type="url"
              name="slackWebhook"
              value={settings.slackWebhook}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              placeholder="https://hooks.slack.com/services/..."
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Discord Webhook URL</label>
            <input
              type="url"
              name="discordWebhook"
              value={settings.discordWebhook}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              placeholder="https://discord.com/api/webhooks/..."
            />
          </div>
        </div>
      </div>

      {/* Marketing Preferences */}
      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Marketing Emails</p>
            <p className="text-white/60 text-sm">Receive updates about new features</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="marketingEmails"
              checked={settings.marketingEmails}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500"></div>
          </label>
        </div>
      </div>
    </form>
  );
};

export default NotificationsTab;
