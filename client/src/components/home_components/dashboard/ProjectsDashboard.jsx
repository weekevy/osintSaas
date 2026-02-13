import { useState } from 'react';
import { ProjectCard, CreateProjectModal, ProjectStats } from '../projects';

const ProjectsDashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Phishing Campaign Investigation',
      description: 'Investigating a large-scale phishing campaign targeting financial institutions',
      status: 'active',
      progress: 75,
      members: 4,
      dueDate: '2024-04-15',
      threatLevel: 'critical'
    },
    {
      id: 2,
      name: 'Dark Web Monitoring',
      description: 'Monitoring dark web forums for credential leaks and threat actors',
      status: 'active',
      progress: 45,
      members: 3,
      dueDate: '2024-05-01',
      threatLevel: 'high'
    },
    {
      id: 3,
      name: 'Ransomware Family Analysis',
      description: 'Analyzing new ransomware variants and their TTPs',
      status: 'review',
      progress: 90,
      members: 5,
      dueDate: '2024-03-30',
      threatLevel: 'critical'
    },
    {
      id: 4,
      name: 'OSINT Tool Development',
      description: 'Building custom OSINT automation tools for internal use',
      status: 'planning',
      progress: 15,
      members: 2,
      dueDate: '2024-06-10',
      threatLevel: 'low'
    }
  ]);

  const stats = {
    totalProjects: 12,
    activeProjects: 8,
    completedProjects: 4,
    criticalThreats: 3
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Projects
          </h1>
          <p className="text-white/60 text-sm lg:text-base mt-1">
            Manage and track your OSINT investigation projects
          </p>
        </div>
        
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Project
        </button>
      </div>

      {/* Project Stats */}
      <ProjectStats stats={stats} />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Create Project Modal */}
      <CreateProjectModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onProjectCreated={(newProject) => {
          setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
          setIsCreateModalOpen(false);
        }}
      />
    </div>
  );
};

export default ProjectsDashboard;
