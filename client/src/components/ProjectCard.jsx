const ProjectCard = ({ project }) => {
    return (
        <div className="border border-gray-700 bg-gray-800/50 h-full flex flex-col">
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />
            )}

            <div className="p-4 border-t border-gray-700 bg-gray-800/80">
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs text-gray-300 bg-gray-700 px-2 py-1">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            </div>

            <div className="p-4 pt-0 flex flex-wrap gap-3">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        Live <span className="ml-1">{'<~>'}</span>
                    </a>
                )}

                {project.cachedUrl && (
                    <a
                        href={project.cachedUrl}
                        className="border border-gray-400 text-gray-400 px-4 py-1 text-sm hover:bg-gray-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        Cached <span className="ml-1">{'>'}</span>
                    </a>
                )}

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        Github <span className="ml-1">{'<~>'}</span>
                    </a>
                )}

                {project.figmaUrl && (
                    <a
                        href={project.figmaUrl}
                        className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        Figma <span className="ml-1">{'<~>'}</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;