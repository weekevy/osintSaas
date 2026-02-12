const MobileMenu = ({ 
  isOpen, 
  navItems, 
  location, 
  onNavClick, 
  onLoginClick, 
  onRegisterClick,
  onClose 
}) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 md:hidden transition-all duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      <div 
        className={`fixed top-0 right-0 h-screen w-72 sm:w-80 bg-gradient-to-br from-gray-900/98 via-purple-900/5 to-black/98 
                    backdrop-blur-2xl border-l border-white/10 z-40 md:hidden transition-transform duration-500 ease-out
                    shadow-2xl shadow-purple-500/30
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <div className="flex flex-col gap-6 mb-12">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => onNavClick(item)}
                className={`relative text-left text-2xl font-semibold transition-all duration-500 font-inter
                  ${location.pathname === item.path 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 translate-x-2' 
                    : 'text-white/70 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:translate-x-2'
                  }
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-auto mb-12">
            <button
              onClick={onLoginClick}
              className="w-full px-6 py-3.5 text-white/80 font-robot 
                         transition-all duration-300 text-center border border-white/20 
                         rounded-2xl hover:bg-white/5 backdrop-blur-sm hover:border-purple-500/50" 
            >
              Log in
            </button>
            <button
              onClick={onRegisterClick}
              className="w-full px-6 py-3.5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500  
                  hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 
                  font-inter font-medium cursor-pointer rounded-2xl border-0"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
