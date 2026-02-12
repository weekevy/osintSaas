import { forwardRef } from 'react';

const FaqSection = forwardRef(({ onRegisterClick }, ref) => {
  const faqs = [
    { q: 'What is OSINT?', a: 'OSINT (Open Source Intelligence) is intelligence collected from publicly available sources. Our platform automates and enhances this process for professional investigations.' },
    { q: 'Is it legal?', a: 'Yes, OSINT uses only publicly available information and is completely legal. We encourage responsible use in compliance with all laws.' },
    { q: 'Do I need technical skills?', a: 'Not at all! Our platform is designed for everyone, from beginners to professionals. We provide guides and support to help you get started.' },
    { q: 'How accurate are the results?', a: 'We combine multiple data sources and AI algorithms to ensure high accuracy, achieving a 99%+ success rate in verifications.' },
    { q: 'Can I try it first?', a: 'Absolutely! Sign up for a free trial with full access to all features. No credit card required.' }
  ];

  return (
    <section 
      ref={ref} 
      id="faq" 
      className="relative py-32 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-400 font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Got{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Questions?
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl">
            We've got answers
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10
                                        hover:border-purple-500/50 transition-all duration-300 cursor-pointer list-none">
                <h3 className="text-lg md:text-xl font-semibold text-white pr-8">{faq.q}</h3>
                <svg className="w-6 h-6 text-white/40 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-white/60 text-base md:text-lg leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA at the end */}
        <div className="mt-16 text-center p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to get started?</h3>
          <p className="text-white/60 mb-8">Join thousands of investigators using our platform</p>
          <button
            onClick={onRegisterClick}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 text-white font-semibold
                     hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
});

FaqSection.displayName = 'FaqSection';
export default FaqSection;
