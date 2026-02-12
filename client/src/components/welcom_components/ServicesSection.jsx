import { forwardRef } from 'react';

const ServicesSection = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref} 
      id="services" 
      className="relative py-32 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-400 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              OSINT Success
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Email Intelligence', icon: '📧', color: 'purple', features: ['Data breach check', 'Account discovery', 'Reputation analysis'] },
            { title: 'Social Media OSINT', icon: '📱', color: 'blue', features: ['Profile analysis', 'Network mapping', 'Content tracking'] },
            { title: 'Domain Research', icon: '🌐', color: 'pink', features: ['WHOIS lookup', 'DNS analysis', 'SSL verification'] },
            { title: 'Phone Lookup', icon: '📞', color: 'cyan', features: ['Carrier info', 'Location data', 'Spam detection'] },
            { title: 'Business Intel', icon: '🏢', color: 'purple', features: ['Company records', 'Executive info', 'Financial data'] },
            { title: 'Threat Detection', icon: '🛡️', color: 'blue', features: ['Risk scoring', 'Pattern recognition', 'Real-time alerts'] }
          ].map((service, i) => (
            <div key={i} className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10
                                  hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/70">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-${service.color}-400 to-${service.color}-600`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-white/60 hover:text-white font-medium flex items-center gap-2 group/btn transition-colors duration-300">
                Learn more
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
