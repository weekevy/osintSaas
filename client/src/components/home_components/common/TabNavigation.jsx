const TabNavigation = ({ tabs, activeTab, onTabChange, className = "" }) => {
  return (
    <div className={`flex gap-2 border-b border-white/10 pb-4 overflow-x-auto ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium capitalize whitespace-nowrap transition-all
            ${activeTab === tab.id
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
              : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
