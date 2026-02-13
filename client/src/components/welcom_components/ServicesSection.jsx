import { forwardRef } from 'react';

const ServicesSection = forwardRef((props, ref) => {
  // Professional SVG icons for each service
  const getIcon = (type) => {
    switch(type) {
      case 'email':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.75 6.75V17.25C21.75 17.6478 21.592 18.0294 21.3107 18.3107C21.0294 18.592 20.6478 18.75 20.25 18.75H3.75C3.35218 18.75 2.97064 18.592 2.68934 18.3107C2.40804 18.0294 2.25 17.6478 2.25 17.25V6.75M21.75 6.75C21.75 6.35218 21.592 5.97064 21.3107 5.68934C21.0294 5.40804 20.6478 5.25 20.25 5.25H3.75C3.35218 5.25 2.97064 5.40804 2.68934 5.68934C2.40804 5.97064 2.25 6.35218 2.25 6.75M21.75 6.75L12 13.5L2.25 6.75" stroke="url(#gradient-email)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient-email" x1="2.25" y1="12" x2="21.75" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7"/>
                <stop offset="1" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'social':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 8.25H9M7.5 12H9M15 8.25H16.5M15 12H16.5M8.25 15.75L12 12.75L15.75 15.75M16.5 20.25H7.5C6.90326 20.25 6.33097 20.0129 5.90901 19.591C5.48705 19.169 5.25 18.5967 5.25 18V6C5.25 5.40326 5.48705 4.83097 5.90901 4.40901C6.33097 3.98705 6.90326 3.75 7.5 3.75H16.5C17.0967 3.75 17.669 3.98705 18.091 4.40901C18.5129 4.83097 18.75 5.40326 18.75 6V18C18.75 18.5967 18.5129 19.169 18.091 19.591C17.669 20.0129 17.0967 20.25 16.5 20.25Z" stroke="url(#gradient-social)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient-social" x1="5.25" y1="12" x2="18.75" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#A855F7"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'domain':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="url(#gradient-domain)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12H21M12 3C14.5013 5.73835 15.9228 9.29203 16 13C15.9228 16.708 14.5013 20.2617 12 23C9.49872 20.2617 8.07725 16.708 8 13C8.07725 9.29203 9.49872 5.73835 12 3Z" stroke="url(#gradient-domain)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient-domain" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EC4899"/>
                <stop offset="1" stopColor="#8B5CF6"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0019 6.58086 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="url(#gradient-phone)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient-phone" x1="2.25" y1="12" x2="21.75" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06B6D4"/>
                <stop offset="1" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'business':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 21H20.25M4.5 21V9.75C4.5 8.95435 4.81607 8.19129 5.37868 7.62868C5.94129 7.06607 6.70435 6.75 7.5 6.75H16.5C17.2956 6.75 18.0587 7.06607 18.6213 7.62868C19.1839 8.19129 19.5 8.95435 19.5 9.75V21M9.75 12H14.25M9.75 15.75H14.25M9.75 9.75V5.25C9.75 4.85218 9.90804 4.47064 10.1893 4.18934C10.4706 3.90804 10.8522 3.75 11.25 3.75H12.75C13.1478 3.75 13.5294 3.90804 13.8107 4.18934C14.092 4.47064 14.25 4.85218 14.25 5.25V9.75" stroke="url(#gradient-business)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient-business" x1="3.75" y1="12" x2="20.25" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7"/>
                <stop offset="1" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'threat':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V12M12 15H12.01M5.25 3.75L3 6.75L5.25 9.75M18.75 3.75L21 6.75L18.75 9.75M5.25 20.25L3 17.25L5.25 14.25M18.75 20.25L21 17.25L18.75 14.25M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="url(#gradient-threat)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient-threat" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#A855F7"/>
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

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
            { title: 'Email Intelligence', icon: 'email', color: 'purple', features: ['Data breach check', 'Account discovery', 'Reputation analysis'] },
            { title: 'Social Media OSINT', icon: 'social', color: 'blue', features: ['Profile analysis', 'Network mapping', 'Content tracking'] },
            { title: 'Domain Research', icon: 'domain', color: 'pink', features: ['WHOIS lookup', 'DNS analysis', 'SSL verification'] },
            { title: 'Phone Lookup', icon: 'phone', color: 'cyan', features: ['Carrier info', 'Location data', 'Spam detection'] },
            { title: 'Business Intel', icon: 'business', color: 'purple', features: ['Company records', 'Executive info', 'Financial data'] },
            { title: 'Threat Detection', icon: 'threat', color: 'blue', features: ['Risk scoring', 'Pattern recognition', 'Real-time alerts'] }
          ].map((service, i) => (
            <div key={i} className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10
                                  hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {getIcon(service.icon)}
              </div>
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
