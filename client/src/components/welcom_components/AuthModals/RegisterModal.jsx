import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin, modalAnimation }) => {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    confirmPassword: '',
    firstName: '',
    lastName: '' 
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    setIsLoading(true);
    setError('');

    const result = await register(
      formData.email, 
      formData.password, 
      formData.firstName, 
      formData.lastName
    );
    
    if (result.success) {
      onClose();
      setFormData({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
    } else {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  const getModalAnimationClass = () => {
    switch (modalAnimation) {
      case 'opening': return 'scale-95 opacity-0';
      case 'open': return 'scale-100 opacity-100';
      case 'closing': return 'scale-95 opacity-0';
      case 'switching': return 'scale-90 opacity-0';
      default: return 'scale-95 opacity-0';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-300 ease-out opacity-100"
        onClick={onClose}
      />
      
      <div className={`relative w-full max-w-md bg-gradient-to-b from-gray-900 to-black rounded-2xl 
                      border border-white/10 shadow-2xl shadow-purple-500/20
                      transition-all duration-300 ease-out transform
                      ${getModalAnimationClass()}`}>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8">
          <div className="text-center mb-8 transform transition-all duration-300 delay-100">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-white/60">Get started with your free account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="transform transition-all duration-300 delay-150">
                <label className="block text-white/80 text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                           placeholder-white/40 focus:outline-none focus:border-purple-500 
                           focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                  placeholder="John"
                />
              </div>
              
              <div className="transform transition-all duration-300 delay-150">
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                           placeholder-white/40 focus:outline-none focus:border-purple-500 
                           focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="transform transition-all duration-300 delay-200">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                         placeholder-white/40 focus:outline-none focus:border-purple-500 
                         focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            
            <div className="transform transition-all duration-300 delay-250">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                         placeholder-white/40 focus:outline-none focus:border-purple-500 
                         focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                placeholder="••••••••"
              />
            </div>
            
            <div className="transform transition-all duration-300 delay-300">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                         placeholder-white/40 focus:outline-none focus:border-purple-500 
                         focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                placeholder="••••••••"
              />
            </div>
            
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg transform transition-all duration-300">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg 
                       hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 
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
                    Creating account...
                  </span>
                ) : 'Sign Up'}
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <p className="text-center text-white/60 text-sm transform transition-all duration-300 delay-350">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium hover:opacity-80 transition-opacity duration-300"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
