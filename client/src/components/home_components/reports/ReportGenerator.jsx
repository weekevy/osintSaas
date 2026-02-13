import { useState } from 'react';
import Modal from '../common/Modal';

const ReportGenerator = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    template: 'threat-intel',
    format: 'pdf',
    dateRange: '30d',
    sections: ['summary', 'findings', 'iocs', 'recommendations'],
    recipients: [],
    schedule: 'now'
  });

  const templates = [
    { id: 'threat-intel', name: 'Threat Intelligence Report', icon: '🛡️' },
    { id: 'incident', name: 'Incident Investigation', icon: '🔍' },
    { id: 'executive', name: 'Executive Summary', icon: '📊' },
    { id: 'technical', name: 'Technical Analysis', icon: '⚙️' },
  ];

  const sections = [
    { id: 'summary', name: 'Executive Summary' },
    { id: 'methodology', name: 'Methodology' },
    { id: 'findings', name: 'Key Findings' },
    { id: 'iocs', name: 'Indicators of Compromise' },
    { id: 'timeline', name: 'Attack Timeline' },
    { id: 'recommendations', name: 'Recommendations' },
    { id: 'appendix', name: 'Appendix' },
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleGenerate = () => {
    // Handle report generation
    onClose();
  };

  const toggleSection = (sectionId) => {
    if (formData.sections.includes(sectionId)) {
      setFormData({
        ...formData,
        sections: formData.sections.filter(id => id !== sectionId)
      });
    } else {
      setFormData({
        ...formData,
        sections: [...formData.sections, sectionId]
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Generate Report" size="lg">
      <div className="space-y-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              <div className={`flex flex-col items-center ${i < 4 ? 'flex-1' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step >= i 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                    : 'bg-white/5 text-white/40'
                  }`}
                >
                  {step > i ? '✓' : i}
                </div>
                <span className="text-xs mt-1 text-white/60">
                  {i === 1 && 'Template'}
                  {i === 2 && 'Content'}
                  {i === 3 && 'Format'}
                  {i === 4 && 'Schedule'}
                </span>
              </div>
              {i < 4 && (
                <div className={`h-0.5 flex-1 mx-2 ${
                  step > i ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/10'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Template Selection */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Select Report Template
            </label>
            <div className="grid grid-cols-2 gap-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setFormData({ ...formData, template: template.id })}
                  className={`p-4 rounded-xl border-2 transition-all text-left
                    ${formData.template === template.id
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                >
                  <span className="text-2xl mb-2 block">{template.icon}</span>
                  <span className="text-white font-medium">{template.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Content Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Report Sections
            </label>
            <div className="space-y-2">
              {sections.map((section) => (
                <label key={section.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.sections.includes(section.id)}
                    onChange={() => toggleSection(section.id)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                  />
                  <span className="text-white/80">{section.name}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-4">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Date Range
              </label>
              <select
                value={formData.dateRange}
                onChange={(e) => setFormData({ ...formData, dateRange: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Format Selection */}
        {step === 3 && (
          <div className="space-y-4">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Export Format
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'pdf', name: 'PDF', icon: '📄', description: 'Document format' },
                { id: 'docx', name: 'DOCX', icon: '📝', description: 'Word document' },
                { id: 'html', name: 'HTML', icon: '🌐', description: 'Web page' },
                { id: 'csv', name: 'CSV', icon: '📊', description: 'Spreadsheet' },
                { id: 'json', name: 'JSON', icon: '🔧', description: 'Data format' },
                { id: 'txt', name: 'TXT', icon: '📃', description: 'Plain text' },
              ].map((format) => (
                <button
                  key={format.id}
                  onClick={() => setFormData({ ...formData, format: format.id })}
                  className={`p-4 rounded-xl border-2 transition-all text-center
                    ${formData.format === format.id
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                >
                  <span className="text-2xl mb-1 block">{format.icon}</span>
                  <span className="text-white font-medium block">{format.name}</span>
                  <span className="text-white/40 text-xs mt-1 block">{format.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Schedule & Recipients */}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Schedule
              </label>
              <div className="space-y-2">
                {[
                  { id: 'now', label: 'Generate now' },
                  { id: 'later', label: 'Schedule for later' },
                  { id: 'recurring', label: 'Recurring report' },
                ].map((option) => (
                  <label key={option.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
                    <input
                      type="radio"
                      name="schedule"
                      value={option.id}
                      checked={formData.schedule === option.id}
                      onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                      className="w-4 h-4 border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                    />
                    <span className="text-white/80">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.schedule !== 'now' && (
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email Recipients
                </label>
                <input
                  type="text"
                  placeholder="Enter email addresses (comma separated)"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                />
                <p className="text-white/40 text-xs mt-2">
                  Separate multiple emails with commas
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
            >
              Back
            </button>
          )}
          <div className="flex-1" />
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            Cancel
          </button>
          {step < 4 ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Generate Report
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ReportGenerator;
