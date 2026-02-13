import { useState } from 'react';
import {
  APIEndpoint,
  APIUsageStats,
  APIDocumentation,
  RateLimits,
  APITokens
} from '../apis';

const APIsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const endpoints = [
    {
      id: 1,
      path: '/api/v1/analyze/url',
      method: 'POST',
      description: 'Analyze URL for threats',
      calls: '1.2M',
      avgResponse: '245ms',
      status: 'stable'
    },
    {
      id: 2,
      path: '/api/v1/analyze/email',
      method: 'POST',
      description: 'Analyze email address',
      calls: '890K',
      avgResponse: '189ms',
      status: 'stable'
    },
    {
      id: 3,
      path: '/api/v1/analyze/file',
      method: 'POST',
      description: 'Upload and scan file',
      calls: '456K',
      avgResponse: '1.2s',
      status: 'degraded'
    },
    {
      id: 4,
      path: '/api/v1/reports/{id}',
      method: 'GET',
      description: 'Retrieve analysis report',
      calls: '2.1M',
      avgResponse: '67ms',
      status: 'stable'
    }
  ];

  const usageStats = {
    totalCalls: '4.2M',
    activeKeys: 156,
    errorRate: '0.23%',
    avgLatency: '187ms'
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            API Management
          </h1>
          <p className="text-white/60 text-sm lg:text-base mt-1">
            Monitor and manage your API usage, keys, and documentation
          </p>
        </div>
        
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          Generate New Key
        </button>
      </div>

      {/* API Stats */}
      <APIUsageStats stats={usageStats} />

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        {['overview', 'endpoints', 'tokens', 'limits', 'docs'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize whitespace-nowrap transition-all
              ${activeTab === tab 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">API Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-green-400">99.97%</div>
                <div className="text-white/60 text-sm">Uptime (30d)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-white">187ms</div>
                <div className="text-white/60 text-sm">Avg Response</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-white">4.2M</div>
                <div className="text-white/60 text-sm">Total Calls</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-yellow-400">156</div>
                <div className="text-white/60 text-sm">Active Keys</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {endpoints.slice(0, 2).map((endpoint) => (
              <APIEndpoint key={endpoint.id} endpoint={endpoint} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'endpoints' && (
        <div className="space-y-4">
          {endpoints.map((endpoint) => (
            <APIEndpoint key={endpoint.id} endpoint={endpoint} detailed />
          ))}
        </div>
      )}

      {activeTab === 'tokens' && (
        <APITokens />
      )}

      {activeTab === 'limits' && (
        <RateLimits />
      )}

      {activeTab === 'docs' && (
        <APIDocumentation />
      )}
    </div>
  );
};

export default APIsDashboard;
