import { useState } from 'react';

const RolesPermissions = ({ roles }) => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Roles List */}
      <div className="lg:col-span-1 space-y-3">
        {roles.map((role) => (
          <button
            key={role.name}
            onClick={() => setSelectedRole(role)}
            className={`w-full p-4 rounded-xl border transition-all text-left
              ${selectedRole.name === role.name
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">{role.name}</span>
              <span className="text-white/40 text-sm">{role.members} members</span>
            </div>
            <p className="text-white/60 text-xs line-clamp-2">
              {role.permissions.slice(0, 3).join(' • ')}
            </p>
          </button>
        ))}

        <button className="w-full p-4 rounded-xl border border-dashed border-white/20 text-white/60 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/5 transition-all flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Create Role</span>
        </button>
      </div>

      {/* Permissions Matrix */}
      <div className="lg:col-span-2">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">{selectedRole.name} Permissions</h3>
            <button className="px-4 py-2 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm">
              Edit Role
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                category: 'Investigations',
                permissions: [
                  'Create investigations',
                  'View investigations',
                  'Edit investigations',
                  'Delete investigations',
                  'Export investigation data'
                ]
              },
              {
                category: 'Reports',
                permissions: [
                  'Generate reports',
                  'Schedule reports',
                  'Export reports',
                  'Delete reports',
                  'Create report templates'
                ]
              },
              {
                category: 'Team',
                permissions: [
                  'View team members',
                  'Invite members',
                  'Remove members',
                  'Edit roles',
                  'Manage permissions'
                ]
              },
              {
                category: 'Settings',
                permissions: [
                  'View settings',
                  'Edit settings',
                  'Manage billing',
                  'View API keys',
                  'Manage API keys'
                ]
              }
            ].map((category) => (
              <div key={category.category} className="border-b border-white/10 pb-4 last:border-0">
                <h4 className="text-white font-medium mb-3">{category.category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {category.permissions.map((permission) => (
                    <label key={permission} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRole.permissions.includes(permission)}
                        readOnly
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500"
                      />
                      <span className="text-white/80 text-sm">{permission}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPermissions;
