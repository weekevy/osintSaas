import { useState } from 'react';

const TeamSettings = () => {
  const [settings, setSettings] = useState({
    teamName: 'OSINT Operations',
    teamEmail: 'team@osintweekeyv.com',
    defaultRole: 'analyst',
    allowGuestAccess: false,
    require2FA: true,
    sessionTimeout: '30',
    notificationPreferences: {
      email: true,
      slack: false,
      webhook: true
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="space-y-6">
      {/* General Settings */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">General Settings</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Team Name
              </label>
              <input
                type="text"
                name="teamName"
                value={settings.teamName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Team Email
              </label>
              <input
                type="email"
                name="teamEmail"
                value={settings.teamEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Default Member Role
            </label>
            <select
              name="defaultRole"
              value={settings.defaultRole}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="admin">Admin</option>
              <option value="analyst">Analyst</option>
              <option value="investigator">Investigator</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <div>
              <span className="text-white font-medium">Require Two-Factor Authentication</span>
              <p className="text-white/40 text-sm">Team members must enable 2FA to access the platform</p>
            </div>
            <input
              type="checkbox"
              name="require2FA"
              checked={settings.require2FA}
              onChange={handleChange}
              className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500"
            />
          </label>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Session Timeout (minutes)
            </label>
            <select
              name="sessionTimeout"
              value={settings.sessionTimeout}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="240">4 hours</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
        
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <div>
              <span className="text-white font-medium">Email Notifications</span>
              <p className="text-white/40 text-sm">Receive team activity updates via email</p>
            </div>
            <input
              type="checkbox"
              name="notificationPreferences"
              checked={settings.notificationPreferences.email}
              onChange={() => setSettings({
                ...settings,
                notificationPreferences: {
                  ...settings.notificationPreferences,
                  email: !settings.notificationPreferences.email
                }
              })}
              className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <div>
              <span className="text-white font-medium">Slack Integration</span>
              <p className="text-white/40 text-sm">Send notifications to Slack channel</p>
            </div>
            <input
              type="checkbox"
              name="notificationPreferences"
              checked={settings.notificationPreferences.slack}
              onChange={() => setSettings({
                ...settings,
                notificationPreferences: {
                  ...settings.notificationPreferences,
                  slack: !settings.notificationPreferences.slack
                }
              })}
              className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <div>
              <span className="text-white font-medium">Webhook</span>
              <p className="text-white/40 text-sm">Send webhook notifications</p>
            </div>
            <input
              type="checkbox"
              name="notificationPreferences"
              checked={settings.notificationPreferences.webhook}
              onChange={() => setSettings({
                ...settings,
                notificationPreferences: {
                  ...settings.notificationPreferences,
                  webhook: !settings.notificationPreferences.webhook
                }
              })}
              className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500"
            />
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-xl rounded-2xl border border-red-500/30 p-6">
        <h3 className="text-lg font-semibold text-red-400 mb-4">Danger Zone</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white font-medium">Transfer Ownership</span>
              <p className="text-white/40 text-sm">Transfer team ownership to another member</p>
            </div>
            <button className="px-4 py-2 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Transfer
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-white font-medium">Delete Team</span>
              <p className="text-white/40 text-sm">Permanently delete team and all associated data</p>
            </div>
            <button className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-all">
              Delete Team
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="px-6 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all">
          Cancel
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TeamSettings;
