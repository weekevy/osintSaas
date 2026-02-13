import React from 'react';

const ProjectTimeline = ({ project = {}, tasks = [], onTaskComplete, onAddTask }) => {
  const defaultTasks = [
    {
      id: 1,
      title: 'Initial Investigation',
      description: 'Gather initial OSINT data and identify key targets',
      status: 'completed',
      assignee: 'John Doe',
      dueDate: '2024-03-15',
      completedDate: '2024-03-14',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Threat Analysis',
      description: 'Analyze collected data for threat patterns and IOCs',
      status: 'in-progress',
      assignee: 'Jane Smith',
      dueDate: '2024-03-20',
      progress: 65,
      priority: 'critical'
    },
    {
      id: 3,
      title: 'Report Generation',
      description: 'Create comprehensive investigation report',
      status: 'pending',
      assignee: 'Mike Johnson',
      dueDate: '2024-03-25',
      priority: 'medium'
    },
    {
      id: 4,
      title: 'Client Review',
      description: 'Present findings and recommendations to client',
      status: 'pending',
      assignee: 'Sarah Williams',
      dueDate: '2024-03-28',
      priority: 'high'
    }
  ];

  const timelineTasks = tasks.length > 0 ? tasks : defaultTasks;

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'blocked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'blocked':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-white/20 text-white/60';
    }
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-white/20 text-white/60';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Project Timeline
            </h3>
            <p className="text-white/60 text-sm mt-1">Track progress and milestones</p>
          </div>
          <button
            onClick={onAddTask}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Task
          </button>
        </div>
      </div>

      {/* Timeline Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 bg-gradient-to-br from-purple-500/5 to-blue-500/5 border-b border-white/10">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {timelineTasks.filter(t => t.status === 'completed').length}
          </div>
          <div className="text-white/40 text-xs">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {timelineTasks.filter(t => t.status === 'in-progress').length}
          </div>
          <div className="text-white/40 text-xs">In Progress</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {timelineTasks.filter(t => t.status === 'pending').length}
          </div>
          <div className="text-white/40 text-xs">Pending</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {timelineTasks.length}
          </div>
          <div className="text-white/40 text-xs">Total Tasks</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />

          {/* Timeline Items */}
          <div className="space-y-6">
            {timelineTasks.map((task, index) => (
              <div key={task.id} className="relative flex items-start gap-4">
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className={`w-8 h-8 rounded-full ${getStatusColor(task.status)}/20 flex items-center justify-center`}>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(task.status)} ${task.status === 'in-progress' ? 'animate-pulse' : ''}`} />
                  </div>
                  {index < timelineTasks.length - 1 && (
                    <div className="absolute top-8 left-4 w-0.5 h-12 bg-white/10" />
                  )}
                </div>

                {/* Task Card */}
                <div className="flex-1 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-medium">{task.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusBadge(task.status)}`}>
                          {task.status}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getPriorityBadge(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm mb-3">{task.description}</p>
                      
                      {/* Progress Bar (for in-progress tasks) */}
                      {task.progress !== undefined && (
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/60">Progress</span>
                            <span className="text-white font-medium">{task.progress}%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${getProgressColor(task.progress)} rounded-full transition-all duration-500`}
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Task Metadata */}
                      <div className="flex flex-wrap items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-white/60">{task.assignee}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-white/60">Due: {task.dueDate}</span>
                        </div>
                        {task.completedDate && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-green-400">Completed: {task.completedDate}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 ml-4">
                      {task.status !== 'completed' && (
                        <button
                          onClick={() => onTaskComplete?.(task.id)}
                          className="p-2 text-white/40 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all"
                          title="Mark as complete"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      )}
                      <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-2 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Footer */}
      <div className="p-6 bg-gradient-to-br from-purple-500/5 to-blue-500/5 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-white/60 text-xs">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-white/60 text-xs">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span className="text-white/60 text-xs">Pending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-white/60 text-xs">Blocked</span>
            </div>
          </div>
          
          <button className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1">
            View Full Project Timeline
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
