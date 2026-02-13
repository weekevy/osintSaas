import React from 'react';

const ThreatMap = () => {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Threat Origin Map
      </h3>
      
      <div className="relative h-48 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl flex items-center justify-center border border-white/5">
        {/* World Map Visualization */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <path 
              d="M200,100 L250,80 L300,90 L350,70 L400,100 L450,90 L500,120 L550,100 L600,130 L650,120 L700,150 L650,180 L600,170 L550,200 L500,190 L450,210 L400,200 L350,220 L300,210 L250,230 L200,220 L150,200 L100,180 L120,150 L150,130 L180,110 L200,100 Z" 
              stroke="rgba(139,92,246,0.5)" 
              strokeWidth="1.5" 
              fill="rgba(139,92,246,0.1)"
            />
            <circle cx="320" cy="150" r="4" fill="#EF4444" className="animate-ping" />
            <circle cx="550" cy="180" r="4" fill="#F97316" className="animate-ping" />
            <circle cx="420" cy="120" r="4" fill="#EAB308" className="animate-ping" />
            <circle cx="250" cy="200" r="4" fill="#8B5CF6" className="animate-ping" />
            <circle cx="600" cy="220" r="4" fill="#3B82F6" className="animate-ping" />
          </svg>
        </div>
        
        {/* Map overlay text */}
        <div className="relative z-10 text-white/40 text-sm">
          Interactive Threat Map (24 attacks in last hour)
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="text-white/60">Critical</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full" />
          <span className="text-white/60">High</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full" />
          <span className="text-white/60">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-white/60">Low</span>
        </div>
      </div>
    </div>
  );
};

export default ThreatMap;
