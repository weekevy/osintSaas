const MobileSidebar = ({ isOpen, onClose, activeTab, onTabChange, navItems }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      <aside className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-gray-900 to-black border-r border-white/10 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            OSINT<span className="text-white">Weekeyv</span>
          </h1>
          <button 
            onClick={onClose}
            className="text-white/40 hover:text-white p-2 hover:bg-white/5 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 py-6 overflow-y-auto">
          <div className="space-y-1 px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onClose();
                }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200
                  ${activeTab === item.id 
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/30' 
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <span className="text-current">{item.icon}</span>
                <span className="ml-3 font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/60">Storage</span>
              <span className="text-white font-medium">45%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>
            <p className="text-xs text-white/40 mt-3">2.3GB of 5GB used</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
