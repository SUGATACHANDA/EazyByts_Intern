const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            image: "https://placehold.co/300x200/FF6B35/FFFFFF?text=ChertNodes",
            technologies: ["HTML", "SCSS", "Python", "Flask"],
            liveUrl: "#",
            cachedUrl: "#"
        },
        {
            id: 2,
            title: "ProtectX",
            description: "Discord anti-crash bot",
            image: "https://placehold.co/300x200/00C851/FFFFFF?text=ProtectX",
            technologies: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
            liveUrl: "#",
            cachedUrl: "#"
        },
        {
            id: 3,
            title: "Kahoot Answers Viewer",
            description: "Get answers to your kahoot quiz",
            image: "https://placehold.co/300x200/7B68EE/FFFFFF?text=Kahoot",
            technologies: ["CSS", "Express", "Node.js"],
            liveUrl: "#",
            cachedUrl: "#"
        }
    ];

    return (
        <section id="works" className="px-8 py-20 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold">
                    <span className="text-purple-400">#</span>projects
                </h2>
                <a href="/projects" className="text-purple-400 hover:underline">View all ~~{'>'}</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="border border-gray-600 bg-gray-800">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="text-sm text-gray-300 bg-gray-700 px-2 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            <div className="flex space-x-4">
                                <a
                                    href={project.liveUrl}
                                    className="border border-purple-400 text-purple-400 px-4 py-2 hover:bg-purple-400 hover:text-white transition-colors"
                                >
                                    Live {'<~>'}
                                </a>
                                <a
                                    href={project.cachedUrl}
                                    className="border border-gray-400 text-gray-400 px-4 py-2 hover:bg-gray-400 hover:text-black transition-colors"
                                >
                                    Cached {'>'}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;