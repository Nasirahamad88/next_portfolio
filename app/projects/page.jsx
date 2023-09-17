import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projectsData from './projects.json';

const Projects = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectsData.map((projects) => (
          <ProjectCard key={projects.id} project={projects} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
