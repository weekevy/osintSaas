import { useState } from 'react';
import {
  TeamMembers,
  InviteMemberModal,
  RolesPermissions,
  ActivityLog,
  TeamSettings
} from '../team';

const TeamDashboard = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const members = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@osint.com',
      role: 'Admin',
      status: 'active',
      lastActive: '2 min ago',
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@osint.com',
      role: 'Analyst',
      status: 'active',
      lastActive: '15 min ago',
      avatar: 'JS'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@osint.com',
      role: 'Investigator',
      status: 'away',
      lastActive: '1 hour ago',
      avatar: 'MJ'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.williams@osint.com',
      role: 'Viewer',
      status: 'offline',
      lastActive: '1 day ago',
      avatar: 'SW'
    }
  ];

  const roles = [
    {
      name: 'Admin',
      permissions: ['Full access', 'Manage team', 'Billing', 'API keys'],
      members: 1
    },
    {
      name: 'Analyst',
      permissions: ['Create investigations', 'Generate reports', 'Export data'],
      members: 3
    },
    {
      name: 'Investigator',
      permissions: ['View investigations', 'Add comments', 'Basic search'],
      members: 2
    },
    {
      name: 'Viewer',
      permissions: ['Read-only access', 'View reports'],
      members: 4
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Team Management
          </h1>
          <p className="text-white/60 text-sm lg:text-base mt-1">
            Manage your team members, roles, and permissions
          </p>
        </div>
        
        <button
          onClick={() => setIsInviteModalOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Invite Member
        </button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
          <div className="text-3xl font-bold text-white mb-1">12</div>
          <div className="text-white/60 text-sm">Total Members</div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
          <div className="text-3xl font-bold text-green-400 mb-1">8</div>
          <div className="text-white/60 text-sm">Active Now</div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
          <div className="text-3xl font-bold text-purple-400 mb-1">4</div>
          <div className="text-white/60 text-sm">Pending Invites</div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
          <div className="text-3xl font-bold text-blue-400 mb-1">6</div>
          <div className="text-white/60 text-sm">Teams</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        {['members', 'roles', 'activity', 'settings'].map((tab) => (
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
      {activeTab === 'members' && (
        <TeamMembers members={members} />
      )}

      {activeTab === 'roles' && (
        <RolesPermissions roles={roles} />
      )}

      {activeTab === 'activity' && (
        <ActivityLog />
      )}

      {activeTab === 'settings' && (
        <TeamSettings />
      )}

      {/* Invite Member Modal */}
      <InviteMemberModal 
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />
    </div>
  );
};

export default TeamDashboard;
