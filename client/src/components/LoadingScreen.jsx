const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-white/10 rounded-full" />
        <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-purple-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin" />
      </div>
      
      <h2 className="mt-8 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
        OsintWeekeyv
      </h2>
      
      <p className="mt-4 text-white/60">
          BE PATIENT MOTHERFUCKER
      </p>
    </div>
  );
};

export default LoadingSpinner;
