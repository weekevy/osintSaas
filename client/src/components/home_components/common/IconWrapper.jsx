const IconWrapper = ({ icon, size = 'md', className = "" }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  return (
    <span className={`inline-flex ${sizeClasses[size]} ${className}`}>
      {icon}
    </span>
  );
};

export default IconWrapper;
