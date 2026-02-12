import { forwardRef } from 'react';

const HomeSection = forwardRef(({ hasAnimated, onRegisterClick, onServicesClick }, ref) => {
  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8
                          transition-all duration-700 delay-100
                          ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm text-white/80">Professional OSINT Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className={`font-rubik text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 max-w-5xl
                          transition-all duration-700 delay-200
                          ${hasAnimated ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
            <span className="block mb-3">Uncover the Truth</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
              Break Down Scammers
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-white/60 text-lg sm:text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed
                        transition-all duration-700 delay-300
                        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Professional OSINT tools to investigate, verify, and protect yourself from online fraud
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 justify-center mb-16
                          transition-all duration-700 delay-400
                          ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button
              onClick={onRegisterClick}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 text-white font-semibold
                       hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105
                       before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Investigation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={onServicesClick}
              className="group px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white font-semibold
                       hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View Services
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Feature Cards Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl
                          transition-all duration-700 delay-500
                          ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { icon: '🔍', title: 'Deep Research', desc: 'Advanced investigation tools' },
              { icon: '⚡', title: 'Real-time Data', desc: 'Live information gathering' },
              { icon: '🛡️', title: 'Secure & Private', desc: 'Your data stays protected' }
            ].map((feature, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                                    hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500
                                    hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-105">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

HomeSection.displayName = 'HomeSection';
export default HomeSection;
