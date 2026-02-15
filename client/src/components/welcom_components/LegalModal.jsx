import { useEffect, useRef } from 'react';

const LegalModal = ({ isOpen, content, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Professional SVG Icons
  const EmailIcon = ({ gradient }) => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.75 6.75V17.25C21.75 17.6478 21.592 18.0294 21.3107 18.3107C21.0294 18.592 20.6478 18.75 20.25 18.75H3.75C3.35218 18.75 2.97064 18.592 2.68934 18.3107C2.40804 18.0294 2.25 17.6478 2.25 17.25V6.75M21.75 6.75C21.75 6.35218 21.592 5.97064 21.3107 5.68934C21.0294 5.40804 20.6478 5.25 20.25 5.25H3.75C3.35218 5.25 2.97064 5.40804 2.68934 5.68934C2.40804 5.97064 2.25 6.35218 2.25 6.75M21.75 6.75L12 13.5L2.25 6.75" 
        stroke={`url(#${gradient})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SalesIcon = ({ gradient }) => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        stroke={`url(#${gradient})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SecurityIcon = ({ gradient }) => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" 
        stroke={`url(#${gradient})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const LegalIcon = ({ gradient }) => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97c.476.175.918.418 1.316.72M4.5 20.25a2.25 2.25 0 01-2.25-2.25M19.5 3.75a2.25 2.25 0 012.25 2.25M19.5 4.969L12 9.375l-7.5-4.406M4.5 20.25V9.375" 
        stroke={`url(#${gradient})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const OfficeIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 21h19.5m-18 0v-4.5A1.5 1.5 0 015.25 15h3a1.5 1.5 0 011.5 1.5V21m-3 0h3m6.75 0H9m9.75 0h-1.5m1.5 0v-4.5a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5V21m-3 0h3m-9-9.75L12 6l4.5 5.25M12 21v-5.25" 
        stroke="url(#gradient-office)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="gradient-office" x1="2.25" y1="12" x2="21.75" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7"/>
          <stop offset="1" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const SocialIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 8.25h9m-9 3H12m-9.75 5.25h4.5m-4.5 0a9 9 0 1118 0m-18 0a9 9 0 0118 0m-18 0v.75m18-0.75v.75M15 8.25h.008v.008H15V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" 
        stroke="url(#gradient-social)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="gradient-social" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7"/>
          <stop offset="1" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const HoursIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6v6l4 2m-4-2a9 9 0 11-18 0 9 9 0 0118 0z" 
        stroke="url(#gradient-hours)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 12 12)"/>
      <defs>
        <linearGradient id="gradient-hours" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7"/>
          <stop offset="1" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const getContent = () => {
    switch(content) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          type: 'text',
          content: `Last Updated: February 2026

Policy in here`
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          type: 'text',
          content: `Last Updated: February 2026
Add Terms in here`
        };
      case 'contact':
        return {
          title: 'Contact Us',
          type: 'contact',
          contacts: [
            {
              category: 'Email Support',
              email: 'support@osintweekeyv.com',
              description: 'For general inquiries and support',
              gradient: 'purple-blue',
              icon: 'email'
            },
            {
              category: 'Sales Questions',
              email: 'sales@osintweekeyv.com',
              description: 'For business and sales inquiries',
              gradient: 'blue-cyan',
              icon: 'sales'
            },
            {
              category: 'Security Issues',
              email: 'security@osintweekeyv.com',
              description: 'To report security vulnerabilities',
              gradient: 'red-pink',
              icon: 'security'
            },
            {
              category: 'Legal Matters',
              email: 'legal@osintweekeyv.com',
              description: 'For legal questions',
              gradient: 'purple-pink',
              icon: 'legal'
            }
          ],
          address: {
            line1: 'OsintWeekeyv HQ',
            line2: '123 Investigation Lane',
            city: 'Cyber City, CC 12345',
            country: 'United States'
          },
          social: [
            { platform: 'Twitter', handle: '@osintweekeyv', url: '#' },
            { platform: 'GitHub', handle: 'github.com/osintweekeyv', url: '#' },
            { platform: 'LinkedIn', handle: '/company/osintweekeyv', url: '#' }
          ],
          hours: {
            weekdays: '9:00 AM - 6:00 PM EST',
            weekend: 'Closed',
            emergency: '24/7 for enterprise customers'
          }
        };
      default:
        return {
          title: 'Loading...',
          type: 'text',
          content: 'Content not found'
        };
    }
  };

  const data = getContent();

  const getGradientColors = (gradient) => {
    switch(gradient) {
      case 'purple-blue':
        return { start: '#A855F7', end: '#3B82F6', id: 'gradient-purple-blue' };
      case 'blue-cyan':
        return { start: '#3B82F6', end: '#06B6D4', id: 'gradient-blue-cyan' };
      case 'red-pink':
        return { start: '#EF4444', end: '#EC4899', id: 'gradient-red-pink' };
      case 'purple-pink':
        return { start: '#A855F7', end: '#EC4899', id: 'gradient-purple-pink' };
      default:
        return { start: '#A855F7', end: '#3B82F6', id: 'gradient-default' };
    }
  };

  const renderIcon = (icon, gradient) => {
    const colors = getGradientColors(gradient);
    const gradientId = colors.id;

    const renderGradient = () => (
      <defs>
        <linearGradient id={gradientId} x1="0" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor={colors.start}/>
          <stop offset="1" stopColor={colors.end}/>
        </linearGradient>
      </defs>
    );

    switch(icon) {
      case 'email':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {renderGradient()}
            <path d="M21.75 6.75V17.25C21.75 17.6478 21.592 18.0294 21.3107 18.3107C21.0294 18.592 20.6478 18.75 20.25 18.75H3.75C3.35218 18.75 2.97064 18.592 2.68934 18.3107C2.40804 18.0294 2.25 17.6478 2.25 17.25V6.75M21.75 6.75C21.75 6.35218 21.592 5.97064 21.3107 5.68934C21.0294 5.40804 20.6478 5.25 20.25 5.25H3.75C3.35218 5.25 2.97064 5.40804 2.68934 5.68934C2.40804 5.97064 2.25 6.35218 2.25 6.75M21.75 6.75L12 13.5L2.25 6.75" 
              stroke={`url(#${gradientId})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'sales':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {renderGradient()}
            <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              stroke={`url(#${gradientId})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'security':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {renderGradient()}
            <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" 
              stroke={`url(#${gradientId})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'legal':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {renderGradient()}
            <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97c.476.175.918.418 1.316.72M4.5 20.25a2.25 2.25 0 01-2.25-2.25M19.5 3.75a2.25 2.25 0 012.25 2.25M19.5 4.969L12 9.375l-7.5-4.406M4.5 20.25V9.375" 
              stroke={`url(#${gradientId})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const renderContactContent = () => (
    <div className="space-y-8">
      {/* Email Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.contacts.map((contact, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                 style={{
                   background: `linear-gradient(to bottom right, ${getGradientColors(contact.gradient).start}, ${getGradientColors(contact.gradient).end})`
                 }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                {renderIcon(contact.icon, contact.gradient)}
                <h3 className="text-white font-semibold text-lg">{contact.category}</h3>
              </div>
              <p className="text-white/60 text-sm mb-3">{contact.description}</p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-mono text-base hover:opacity-80 transition-opacity"
              >
                {contact.email}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Office Address */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <OfficeIcon />
          <h3 className="text-white font-semibold text-lg">Office Address</h3>
        </div>
        <div className="space-y-1 text-white/70">
          <p>{data.address.line1}</p>
          <p>{data.address.line2}</p>
          <p>{data.address.city}</p>
          <p>{data.address.country}</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <SocialIcon />
          <h3 className="text-white font-semibold text-lg">Connect With Us</h3>
        </div>
        <div className="flex flex-wrap gap-4">
          {data.social.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/50 group"
            >
              <div className="text-white/60 group-hover:text-white transition-colors">
                {social.platform === 'Twitter' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.774-12.294c0-.212 0-.424-.015-.636A9.936 9.936 0 0024 4.59z"/>
                  </svg>
                )}
                {social.platform === 'GitHub' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                )}
                {social.platform === 'LinkedIn' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
              </div>
              <div>
                <p className="text-white font-medium">{social.platform}</p>
                <p className="text-white/40 text-sm">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <HoursIcon />
          <h3 className="text-white font-semibold text-lg">Business Hours</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-white/70">Monday - Friday</span>
            <span className="text-white font-medium">{data.hours.weekdays}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/70">Weekend</span>
            <span className="text-white/40">{data.hours.weekend}</span>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-purple-400 text-sm">{data.hours.emergency}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 overflow-hidden animate-slideUp"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">{data.title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {data.type === 'contact' ? renderContactContent() : (
            <div className="text-white/70 leading-relaxed whitespace-pre-line font-light">
              {data.content}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-white/10 bg-black/20">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
