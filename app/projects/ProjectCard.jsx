import React from 'react';
import projects from './page';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          className="w-full h-64 object-cover object-center"
          src={project.image}
          alt={project.title}
          width={160}
          height={160}
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
