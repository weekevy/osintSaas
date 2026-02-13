import { useState } from 'react';
import { 
  ReportCard, 
  ReportGenerator, 
  ReportTemplates, 
  ScheduledReports, 
  ExportOptions 
} from '../reports';

const ReportsDashboard = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);

  const reports = [
    {
      id: 1,
      name: 'Q1 2024 Threat Intelligence Report',
      type: 'Threat Intel',
      created: '2024-03-15',
      format: 'PDF',
      size: '2.4 MB',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Phishing Campaign Analysis - March',
      type: 'Incident Report',
      created: '2024-03-14',
      format: 'DOCX',
      size: '1.8 MB',
      status: 'completed'
    },
    {
      id: 3,
      name: 'Dark Web Monitoring Summary',
      type: 'Monitoring',
      created: '2024-03-13',
      format: 'PDF',
      size: '3.1 MB',
      status: 'completed'
    },
    {
      id: 4,
      name: 'Weekly OSINT Briefing',
      type: 'Briefing',
      created: '2024-03-12',
      format: 'HTML',
      size: '856 KB',
      status: 'scheduled'
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Threat Intelligence Report',
      description: 'Comprehensive threat analysis with IOCs and TTPs',
      icon: '🛡️',
      uses: 234
    },
    {
      id: 2,
      name: 'Incident Investigation',
      description: 'Detailed incident timeline and forensic findings',
      icon: '🔍',
      uses: 189
    },
    {
      id: 3,
      name: 'Executive Summary',
      description: 'High-level overview for management',
      icon: '📊',
      uses: 156
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reports
          </h1>
          <p className="text-white/60 text-sm lg:text-base mt-1">
            Generate, schedule, and export OSINT investigation reports
          </p>
        </div>
        
        <button
          onClick={() => setIsGeneratorOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Generate Report
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4">
        {['reports', 'templates', 'scheduled', 'export'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all
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
      {activeTab === 'reports' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Recent Reports</h3>
            <ExportOptions />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'templates' && (
        <ReportTemplates templates={templates} />
      )}

      {activeTab === 'scheduled' && (
        <ScheduledReports />
      )}

      {activeTab === 'export' && (
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <ExportOptions expanded />
        </div>
      )}

      {/* Report Generator Modal */}
      <ReportGenerator 
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
      />
    </div>
  );
};

export default ReportsDashboard;
