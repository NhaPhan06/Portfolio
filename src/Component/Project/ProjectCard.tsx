// ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
}) => {
  return (
    <div className="bg-[#1f2937] max-w-full sm:max-w-[25vw] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
      {/* Image */}
      <img src={imageUrl} alt={title} className="h-56 w-full pt-2 pr-2 pl-2 object-cover rounded-2xl" />

      {/* Content */}
      <div className="p-6 pt-0 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#374151] text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-400 hover:text-blue-300 font-semibold"
          >
            🔗 View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
