import ModalContainer from './ModalContainer';

const LoginModal = ({
  isOpen,
  modalAnimation,
  loginData,
  loginError,
  isLoading,
  onLoginDataChange,
  onSubmit,
  onClose,
  onSwitchToRegister
}) => {
  return (
    <ModalContainer 
      isOpen={isOpen} 
      modalAnimation={modalAnimation} 
      onClose={onClose}
    >
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-4 shadow-lg shadow-purple-500/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-white/60">Sign in to continue your OSINT journey</p>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={loginData.email}
              onChange={(e) => onLoginDataChange({ ...loginData, email: e.target.value })}
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 
                       focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300
                       hover:bg-white/10"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={loginData.password}
              onChange={(e) => onLoginDataChange({ ...loginData, password: e.target.value })}
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 
                       focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300
                       hover:bg-white/10"
              placeholder="••••••••"
            />
          </div>
          
          {loginError && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm">
              <p className="text-red-400 text-sm">{loginError}</p>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 text-white font-medium rounded-xl 
                     hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 
                     transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed
                     relative overflow-hidden group"
          >
            <span className="relative z-10">
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign In'}
            </span>
          </button>
          
          <p className="text-center text-white/60 text-sm">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium hover:opacity-80 transition-opacity duration-300"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </ModalContainer>
  );
};

export default LoginModal;
