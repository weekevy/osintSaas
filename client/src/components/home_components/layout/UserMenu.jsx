import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    onLogout?.();
    navigate('/');
  };

  // Function to open settings modal
  const openSettings = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('openSettings'));
  };

  return (
    <div className="relative z-[9999]" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 pl-2 pr-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-white/10 hover:border-purple-500/50 rounded-full transition-all duration-300"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
          <span className="text-white font-medium text-sm">
            {user?.firstName?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="hidden lg:block text-white text-sm max-w-[100px] truncate">
          {user?.firstName || user?.email?.split('@')[0]}
        </span>
        <svg 
          className={`w-4 h-4 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[9997]" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-64 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 z-[10000] overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <p className="text-white font-medium">{user?.firstName} {user?.lastName}</p>
              <p className="text-white/60 text-sm truncate">{user?.email}</p>
              <p className="text-xs text-purple-400 mt-1 capitalize">Role: {user?.role || 'user'}</p>
            </div>
            <div className="p-2">
              {/* ✅ Profile button completely removed */}
              
              {/* Settings Button - Kept */}
              <button
                onClick={openSettings}
                className="w-full px-4 py-2.5 text-left text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>

              <div className="border-t border-white/10 my-2" />
              
              {/* Logout Button - Kept */}
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2.5 text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
