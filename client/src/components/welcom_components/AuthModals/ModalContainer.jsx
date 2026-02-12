const ModalContainer = ({ isOpen, modalAnimation, onClose, children }) => {
  const getBackdropAnimationClass = () => {
    switch (modalAnimation) {
      case 'open':
        return 'opacity-100';
      case 'closing':
        return 'opacity-0';
      case 'switching':
        return 'opacity-50';
      default:
        return 'opacity-0';
    }
  };

  const getModalAnimationClass = () => {
    switch (modalAnimation) {
      case 'opening':
        return 'scale-95 opacity-0';
      case 'open':
        return 'scale-100 opacity-100';
      case 'closing':
        return 'scale-95 opacity-0';
      case 'switching':
        return 'scale-90 opacity-0';
      default:
        return 'scale-95 opacity-0';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-all duration-300 ease-out
                  ${getBackdropAnimationClass()}`}
        onClick={onClose}
      />
      
      <div 
        className={`relative w-full max-w-md bg-gradient-to-br from-gray-900/95 via-purple-900/10 to-black/95 rounded-3xl 
                  border border-white/10 shadow-2xl shadow-purple-500/30 backdrop-blur-2xl
                  transition-all duration-300 ease-out transform
                  ${getModalAnimationClass()}`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors duration-300 z-10 hover:rotate-90 transform transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
