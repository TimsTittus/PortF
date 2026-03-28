import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx }) => {
  const bgColors = ['bg-nb-purple', 'bg-nb-green', 'bg-nb-blue'];
  const bgColor = bgColors[idx % 3];

  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
      <div className="relative bg-white border-4 border-nb-black h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all overflow-hidden">
        <div className={`h-48 sm:h-52 ${bgColor} border-b-4 border-nb-black flex items-center justify-center relative overflow-hidden flex-shrink-0`}>
          <span className="text-6xl sm:text-7xl drop-shadow-[4px_4px_0px_#000]">{project.image || '🚀'}</span>
          {project.featured && (
            <span className="absolute top-4 right-4 bg-nb-yellow border-2 border-nb-black text-nb-black px-3 py-1 text-xs font-black uppercase tracking-widest">
              Featured
            </span>
          )}
        </div>
        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-nb-black">{project.title}</h3>
          <p className="text-nb-black font-medium mb-6 flex-grow leading-relaxed text-sm sm:base">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-black uppercase border-2 border-nb-black ${tIdx % 2 === 0 ? 'bg-nb-cream' : 'bg-nb-yellow'} text-nb-black`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-nb-black/10">
            <div className="flex items-center space-x-6">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nb-black hover:text-nb-purple transition-all hover:scale-110"
                  aria-label="GitHub repository"
                >
                  <Github size={24} strokeWidth={3} />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nb-black hover:text-nb-purple transition-all hover:scale-110"
                  aria-label="Live project"
                >
                  <ExternalLink size={24} strokeWidth={3} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
