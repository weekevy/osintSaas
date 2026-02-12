import { forwardRef } from 'react';

const AboutSection = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref} 
      id="about" 
      className="relative py-32 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-400 font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Investigators
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Professional-grade tools that make complex investigations simple and accessible
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '50K+', label: 'Active Users', icon: '👥' },
            { value: '99.9%', label: 'Uptime', icon: '⚡' },
            { value: '24/7', label: 'Support', icon: '💬' },
            { value: '100+', label: 'Countries', icon: '🌍' }
          ].map((stat, i) => (
            <div key={i} className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10
                                  hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-105">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'AI-Powered Analysis',
              desc: 'Machine learning algorithms that detect patterns and anomalies in real-time',
              icon: '🤖',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Global Database',
              desc: 'Access to billions of records from trusted sources worldwide',
              icon: '🗄️',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Advanced Reporting',
              desc: 'Generate comprehensive reports with actionable insights',
              icon: '📊',
              gradient: 'from-pink-500 to-purple-500'
            },
            {
              title: 'Team Collaboration',
              desc: 'Work together seamlessly with your investigation team',
              icon: '🤝',
              gradient: 'from-cyan-500 to-blue-500'
            }
          ].map((feature, i) => (
            <div key={i} className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10
                                  hover:border-white/20 transition-all duration-500 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 text-3xl
                               shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 text-lg">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;
