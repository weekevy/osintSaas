import { useState } from 'react';

const ExportOptions = ({ expanded = false }) => {
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [includeCharts, setIncludeCharts] = useState(true);
  const [includeTables, setIncludeTables] = useState(true);
  const [pageSize, setPageSize] = useState('a4');

  const formats = [
    { id: 'pdf', name: 'PDF Document', icon: '📄', description: 'Best for printing and sharing' },
    { id: 'docx', name: 'Word Document', icon: '📝', description: 'Editable document format' },
    { id: 'html', name: 'HTML', icon: '🌐', description: 'Web page format' },
    { id: 'csv', name: 'CSV', icon: '📊', description: 'Raw data export' },
    { id: 'json', name: 'JSON', icon: '🔧', description: 'API format' },
  ];

  if (!expanded) {
    return (
      <button className="px-4 py-2 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Export</span>
      </button>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">Export Options</h3>
      
      <div>
        <label className="block text-white/80 text-sm font-medium mb-3">Format</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {formats.map((format) => (
            <button
              key={format.id}
              onClick={() => setSelectedFormat(format.id)}
              className={`p-4 rounded-xl border-2 transition-all text-left
                ${selectedFormat === format.id
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{format.icon}</span>
                <div>
                  <div className="text-white font-medium">{format.name}</div>
                  <div className="text-white/40 text-xs">{format.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-3">Content Options</label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeCharts}
                onChange={(e) => setIncludeCharts(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500"
              />
              <span className="text-white/80">Include charts and graphs</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeTables}
                onChange={(e) => setIncludeTables(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500"
              />
              <span className="text-white/80">Include data tables</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-white/80 text-sm font-medium mb-3">Page Setup</label>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
          >
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="legal">Legal</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-white/10">
        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all">
          Export Now
        </button>
        <button className="px-6 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all">
          Schedule
        </button>
      </div>
    </div>
  );
};

export default ExportOptions;
