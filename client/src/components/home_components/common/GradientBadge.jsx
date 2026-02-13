const GradientBadge = ({ 
  children, 
  color = 'from-purple-500 to-blue-500', 
  size = 'md',
  className = "" 
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  return (
    <span
      className={`inline-flex items-center bg-gradient-to-r ${color} text-white font-medium rounded-lg ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientBadge;
