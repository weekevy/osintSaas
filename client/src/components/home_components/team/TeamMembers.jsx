const TeamMembers = ({ members }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'Admin': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Analyst': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Investigator': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Viewer': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-white/20 text-white/60';
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-white/40 text-xs font-medium">Member</th>
              <th className="text-left py-4 px-6 text-white/40 text-xs font-medium">Role</th>
              <th className="text-left py-4 px-6 text-white/40 text-xs font-medium">Status</th>
              <th className="text-left py-4 px-6 text-white/40 text-xs font-medium">Last Active</th>
              <th className="text-left py-4 px-6 text-white/40 text-xs font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{member.avatar}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{member.name}</div>
                      <div className="text-white/40 text-sm">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 text-xs rounded-full border ${getRoleBadgeColor(member.role)}`}>
                    {member.role}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)}`} />
                    <span className="text-white/80 text-sm capitalize">{member.status}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-white/60 text-sm">{member.lastActive}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMembers;
