import React from 'react';

const ProjectMembers = ({ members = [], onAddMember, onRemoveMember, onUpdateRole }) => {
  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'Owner':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Admin':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Editor':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Viewer':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-white/20 text-white/60';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'busy':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Team Members</h3>
            <p className="text-white/60 text-sm mt-1">Manage project access and permissions</p>
          </div>
          <button
            onClick={onAddMember}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Add Member
          </button>
        </div>
      </div>

      {/* Members List */}
      <div className="divide-y divide-white/10">
        {members && members.length > 0 ? (
          members.map((member) => (
            <div key={member.id} className="p-4 hover:bg-white/5 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${getStatusColor(member.status)} border-2 border-black`} />
                  </div>

                  {/* Member Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{member.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${getRoleBadgeColor(member.role)}`}>
                        {member.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-white/40 text-sm">{member.email}</span>
                      <span className="text-white/40 text-xs">•</span>
                      <span className="text-white/40 text-xs capitalize">{member.department || 'Engineering'}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {/* Role Selector */}
                  <select
                    value={member.role}
                    onChange={(e) => onUpdateRole?.(member.id, e.target.value)}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm focus:outline-none focus:border-purple-500/50"
                  >
                    <option value="Viewer">Viewer</option>
                    <option value="Editor">Editor</option>
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                  </select>

                  {/* More Actions Button */}
                  <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveMember?.(member.id)}
                    className="p-2 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
              <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">No team members</h4>
            <p className="text-white/60 text-sm mb-4">Add members to collaborate on this project</p>
            <button
              onClick={onAddMember}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Add First Member
            </button>
          </div>
        )}
      </div>

      {/* Invite Link Section */}
      <div className="p-6 bg-gradient-to-br from-purple-500/5 to-blue-500/5 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-medium mb-1">Share invite link</h4>
            <p className="text-white/60 text-xs">Anyone with the link can join this project</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <code className="text-purple-400 text-sm">https://osint.dev/projects/invite/abc123</code>
            </div>
            <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
            <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMembers;
