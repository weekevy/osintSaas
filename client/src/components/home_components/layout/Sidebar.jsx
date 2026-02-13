const Sidebar = ({ isCollapsed, onToggleCollapse, activeTab, onTabChange, navItems }) => {
  return (
    <aside 
      className={`
        hidden lg:flex h-full flex-col
        ${isCollapsed ? 'w-20' : 'w-72'}
        bg-gradient-to-b from-gray-900 to-black border-r border-white/10 
        transition-all duration-300
      `}
    >
      {/* Logo Area */}
      <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} border-b border-white/10`}>
        {!isCollapsed && (
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
            OSINT<span className="text-white">Weekeyv</span>
          </h1>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white font-bold text-xl">OW</span>
          </div>
        )}
        <button 
          onClick={onToggleCollapse}
          className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
        >
          {isCollapsed ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <div className="space-y-1 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'px-4'} py-3 rounded-xl transition-all duration-200 group relative
                ${activeTab === item.id 
                  ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/30' 
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
            >
              <span className="text-current">{item.icon}</span>
              {!isCollapsed && (
                <span className="ml-3 font-medium text-sm lg:text-base">{item.label}</span>
              )}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] border border-white/10 shadow-2xl">
                  {item.label}
                </div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Storage */}
      <div className="p-3 mb-6">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
          {!isCollapsed ? (
            <>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/60">Storage</span>
                <span className="text-white font-medium">45%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </div>
              <p className="text-xs text-white/40 mt-3 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                2.3GB of 5GB used
              </p>
            </>
          ) : (
            <div className="relative group">
              <div className="w-10 h-10 mx-auto rounded-lg bg-white/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] border border-white/10 shadow-2xl">
                Storage: 2.3GB of 5GB used
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
