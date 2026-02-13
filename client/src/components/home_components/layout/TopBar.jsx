import { useState } from 'react';
import UserMenu from './UserMenu';

const TopBar = ({ 
  onMenuClick, 
  searchInput, 
  onSearchChange, 
  searchType, 
  onSearchTypeChange, 
  onAnalyze, 
  isAnalyzing,
  onLogout,
  alertsCount,
  activeTab,
  onTabChange
}) => {
  const [searchTypeDropdownOpen, setSearchTypeDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);

  const getSearchTypeIcon = (type) => {
    switch(type) {
      case "url": return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
      case "email": return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
      case "file": return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
      default: return null;
    }
  };

  return (
    <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-4 sm:px-6 lg:px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 gap-4 relative z-[9998]">
      
      {/* Mobile Menu Button */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <button
          onClick={onMenuClick}
          className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          OSINT<span className="text-white">Weekeyv</span>
        </h1>
        <div className="w-10" />
      </div>

      {/* Search Bar */}
      <div className="flex-1 w-full lg:max-w-2xl relative z-[9999]">
        <div className="flex items-center bg-white/5 rounded-2xl border border-white/10 focus-within:border-purple-500/50 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
          
          {/* Search Type Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSearchTypeDropdownOpen(!searchTypeDropdownOpen)}
              className="px-3 sm:px-4 py-2.5 text-white/60 hover:text-white flex items-center gap-2 border-r border-white/10 transition-colors"
            >
              <span className="hidden sm:block">{getSearchTypeIcon(searchType)}</span>
              <span className="text-sm sm:text-base capitalize">{searchType}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {searchTypeDropdownOpen && (
              <>
                <div className="fixed inset-0 z-[9997]" onClick={() => setSearchTypeDropdownOpen(false)} />
                <div className="absolute top-full left-0 mt-2 w-40 bg-gray-900 rounded-xl border border-white/10 shadow-2xl z-[10000] overflow-hidden">
                  {['url', 'email', 'file'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        onSearchTypeChange(type);
                        setSearchTypeDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left text-white/70 hover:bg-white/5 hover:text-white capitalize flex items-center gap-3 first:rounded-t-xl last:rounded-b-xl transition-colors"
                    >
                      {getSearchTypeIcon(type)}
                      <span>{type}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Input */}
          <input
            type="text"
            value={searchInput}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Enter ${searchType} to analyze...`}
            className="flex-1 px-3 sm:px-4 py-2.5 bg-transparent text-white placeholder-white/40 focus:outline-none text-sm sm:text-base w-full min-w-0"
            onKeyPress={(e) => e.key === 'Enter' && onAnalyze()}
          />

          {/* Analyze Button */}
          <button
            onClick={onAnalyze}
            disabled={isAnalyzing}
            className="px-4 sm:px-6 py-2.5 m-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
          >
            {isAnalyzing ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span className="hidden sm:inline">Analyzing</span>
                <span className="sm:hidden">...</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Analyze</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 ml-auto">
        
        {/* Notifications */}
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all relative"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white ring-2 ring-black">
              {alertsCount}
            </span>
          </button>

          {notificationsOpen && (
            <>
              <div className="fixed inset-0 z-[9997]" onClick={() => setNotificationsOpen(false)} />
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl z-[10000] overflow-hidden">
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Notifications</h3>
                    <button className="text-white/40 hover:text-white text-sm">Mark all as read</button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[1,2,3].map((i) => (
                    <div key={i} className="p-4 hover:bg-white/5 transition-colors border-b border-white/5">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full" />
                        <div className="flex-1">
                          <p className="text-white text-sm">New threat detected in your recent scan</p>
                          <p className="text-white/40 text-xs mt-1">5 min ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-white/10">
                  <button className="w-full text-center text-white/60 hover:text-white text-sm py-2">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setQuickActionsOpen(!quickActionsOpen)}
            className="p-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>

          {quickActionsOpen && (
            <>
              <div className="fixed inset-0 z-[9997]" onClick={() => setQuickActionsOpen(false)} />
              <div className="absolute right-0 mt-2 w-64 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl z-[10000] overflow-hidden">
                <div className="p-3 border-b border-white/10">
                  <h3 className="text-white font-semibold">Quick Actions</h3>
                </div>
                <div className="p-2">
                  {[
                    { icon: '📊', label: 'Generate Report' },
                    { icon: '🔍', label: 'New Investigation' },
                    { icon: '📤', label: 'Export Data' },
                    { icon: '👥', label: 'Invite Team Member' },
                  ].map((action, i) => (
                    <button
                      key={i}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-white/70 hover:bg-white/5 hover:text-white rounded-xl transition-all"
                    >
                      <span>{action.icon}</span>
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Menu */}
        <UserMenu onLogout={onLogout} />
      </div>
    </header>
  );
};

export default TopBar;
