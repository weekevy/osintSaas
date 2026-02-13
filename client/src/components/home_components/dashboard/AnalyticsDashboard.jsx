import { useState } from 'react';
import {
  AnalyticsOverview,
  ThreatTrends,
  UserActivity,
  PerformanceMetrics,
  CustomReports
} from '../analytics';

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </h1>
          <p className="text-white/60 text-sm lg:text-base mt-1">
            Insights and metrics about your OSINT operations
          </p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex gap-2 bg-white/5 rounded-lg p-1">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${timeRange === range 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Cards */}
      <AnalyticsOverview timeRange={timeRange} />

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        {['overview', 'threats', 'activity', 'performance', 'custom'].map((tab) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ThreatTrends timeRange={timeRange} />
          <UserActivity timeRange={timeRange} />
        </div>
      )}

      {activeTab === 'threats' && (
        <ThreatTrends timeRange={timeRange} detailed />
      )}

      {activeTab === 'activity' && (
        <UserActivity timeRange={timeRange} detailed />
      )}

      {activeTab === 'performance' && (
        <PerformanceMetrics timeRange={timeRange} />
      )}

      {activeTab === 'custom' && (
        <CustomReports />
      )}
    </div>
  );
};

export default AnalyticsDashboard;
