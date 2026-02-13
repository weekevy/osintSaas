import { useState } from 'react';

const RateLimits = () => {
  const [plan, setPlan] = useState('pro');

  const limits = {
    free: {
      requests: '1,000',
      period: 'hour',
      concurrent: 5,
      burst: 10,
      cost: '$0'
    },
    pro: {
      requests: '10,000',
      period: 'hour',
      concurrent: 20,
      burst: 50,
      cost: '$49/mo'
    },
    enterprise: {
      requests: 'Custom',
      period: 'hour',
      concurrent: 'Unlimited',
      burst: 'Custom',
      cost: 'Custom'
    }
  };

  const currentLimits = limits[plan];

  return (
    <div className="space-y-6">
      {/* Plan Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['free', 'pro', 'enterprise'].map((planType) => (
          <button
            key={planType}
            onClick={() => setPlan(planType)}
            className={`p-6 rounded-2xl border-2 transition-all text-left
              ${plan === planType
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
          >
            <h3 className="text-xl font-semibold text-white capitalize mb-2">{planType}</h3>
            <div className="text-2xl font-bold text-white mb-4">{limits[planType].cost}</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Requests</span>
                <span className="text-white">{limits[planType].requests}/{limits[planType].period}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Concurrent</span>
                <span className="text-white">{limits[planType].concurrent}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Burst</span>
                <span className="text-white">{limits[planType].burst}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Current Usage */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Current Usage</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/60">API Calls (This Hour)</span>
              <span className="text-white font-medium">3,421 / 10,000</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[34%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>
            <p className="text-white/40 text-xs mt-1">Resets in 23 minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-white/40 text-xs mb-1">Concurrent Requests</div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-white/40 text-xs">of 20 allowed</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-white/40 text-xs mb-1">Burst Usage</div>
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-white/40 text-xs">of 50 allowed</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-white/40 text-xs mb-1">Error Rate</div>
              <div className="text-2xl font-bold text-green-400">0.23%</div>
              <div className="text-white/40 text-xs">Below threshold</div>
            </div>
          </div>
        </div>
      </div>

      {/* Rate Limit Headers */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Rate Limit Headers</h3>
        
        <div className="bg-black/30 rounded-xl p-4 mb-4">
          <pre className="text-white/60 text-xs font-mono overflow-x-auto">
{`X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 6579
X-RateLimit-Reset: 1702950000
Retry-After: 45`}
          </pre>
        </div>

        <div className="space-y-3">
          {[
            { header: 'X-RateLimit-Limit', description: 'Maximum requests allowed in the current period' },
            { header: 'X-RateLimit-Remaining', description: 'Number of requests remaining in the current period' },
            { header: 'X-RateLimit-Reset', description: 'Unix timestamp when the rate limit resets' },
            { header: 'Retry-After', description: 'Seconds to wait before retrying (when rate limited)' }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <code className="text-purple-400 text-xs font-mono whitespace-nowrap">{item.header}</code>
              <span className="text-white/60 text-xs">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Prompt */}
      {plan === 'free' && (
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold mb-1">Need higher limits?</h4>
              <p className="text-white/60 text-sm">Upgrade to Pro for 10x more requests and priority support</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all">
              Upgrade Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RateLimits;
