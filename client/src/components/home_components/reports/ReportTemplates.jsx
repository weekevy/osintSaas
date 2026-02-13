const ReportTemplates = ({ templates }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="text-4xl mb-4">{template.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {template.name}
            </h3>
            <p className="text-white/60 text-sm mb-4">{template.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-sm">{template.uses} uses</span>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold mb-1">Custom Template</h4>
            <p className="text-white/60 text-sm">Create your own report template from scratch</p>
          </div>
          <button className="px-6 py-3 bg-white/5 text-white hover:bg-white/10 rounded-xl transition-all flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportTemplates;
