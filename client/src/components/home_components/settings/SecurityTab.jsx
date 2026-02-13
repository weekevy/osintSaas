import { useState } from 'react';

const SecurityTab = ({ isLoading, setIsLoading }) => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessions, setSessions] = useState([
    { id: 1, device: 'Chrome on Windows', location: 'New York, US', lastActive: '5 min ago', current: true },
    { id: 2, device: 'Safari on iPhone', location: 'New York, US', lastActive: '2 hours ago', current: false },
    { id: 3, device: 'Firefox on Mac', location: 'London, UK', lastActive: '2 days ago', current: false },
  ]);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        })
      });

      if (response.ok) {
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      }
    } catch (error) {
      console.error('Error changing password:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoutAll = async () => {
    if (!confirm('This will log you out from all other devices. Continue?')) return;
    
    setIsLoading(true);
    try {
      await fetch('/api/sessions/logout-all', { method: 'POST' });
      setSessions(prev => prev.filter(s => s.current));
    } finally {
      setIsLoading(false);
    }
  };

  // Professional SVG Icons for devices
  const getDeviceIcon = (device) => {
    if (device.includes('iPhone')) {
      return (
        <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" 
            stroke="url(#gradient-device)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (device.includes('Mac')) {
      return (
        <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12H3V5.25" 
            stroke="url(#gradient-device)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12H3V5.25" 
          stroke="url(#gradient-device)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  };

  return (
    <div className="space-y-8">
      {/* Change Password Section */}
      <form onSubmit={handlePasswordSubmit} className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" 
              stroke="url(#gradient-password)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient-password" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7"/>
                <stop offset="1" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
          <h3 className="text-lg font-semibold text-white">Change Password</h3>
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors duration-300"
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors duration-300"
            placeholder="••••••••"
            required
            minLength={8}
          />
          <p className="text-white/40 text-xs mt-1">Minimum 8 characters</p>
        </div>

        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors duration-300"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50"
        >
          Update Password
        </button>
      </form>

      {/* Two-Factor Authentication */}
      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" 
                stroke="url(#gradient-2fa)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="gradient-2fa" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6"/>
                  <stop offset="1" stopColor="#A855F7"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-white">Two-Factor Authentication</h3>
              <p className="text-white/60 text-sm">Add an extra layer of security to your account</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500"></div>
          </label>
        </div>
        
        {twoFactorEnabled && (
          <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <p className="text-white/80 text-sm">Scan this QR code with your authenticator app</p>
            <div className="mt-3 flex justify-center">
              <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-16 h-16 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v4h4M20 20v-4h-4M4 20h4M20 4h-4" />
                  <rect x="8" y="8" width="8" height="8" stroke="currentColor" strokeWidth={1} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Active Sessions */}
      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12H3V5.25" 
                stroke="url(#gradient-sessions)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="gradient-sessions" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EC4899"/>
                  <stop offset="1" stopColor="#A855F7"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold text-white">Active Sessions</h3>
          </div>
          <button
            onClick={handleLogoutAll}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Log out all other devices
          </button>
        </div>

        <div className="space-y-3">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`flex items-center justify-between p-4 rounded-xl bg-white/5 border transition-all duration-300
                ${session.current ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10'}`}
            >
              <div className="flex items-center gap-3">
                <div className="text-purple-400">
                  {getDeviceIcon(session.device)}
                </div>
                <div>
                  <p className="text-white font-medium">{session.device}</p>
                  <p className="text-white/40 text-xs flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {session.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {session.lastActive}
                    </span>
                    {session.current && (
                      <>
                        <span>•</span>
                        <span className="text-purple-400">Current</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
              {!session.current && (
                <button className="text-white/40 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityTab;
