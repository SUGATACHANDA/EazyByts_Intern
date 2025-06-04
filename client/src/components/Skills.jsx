const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["TypeScript", "Lua", "Python", "JavaScript"]
        },
        {
            title: "Databases",
            skills: ["SQLite", "PostgreSQL", "Mongo"]
        },
        {
            title: "Tools",
            skills: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]
        },
        {
            title: "Other",
            skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]
        },
        {
            title: "Frameworks",
            skills: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]
        }
    ];

    return (
        <section className="px-8 py-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>skills
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="relative">
                    {/* Decorative elements */}
                    <div className="grid grid-cols-4 gap-4 opacity-20">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-4 h-4 border border-gray-600"></div>
                        ))}
                    </div>

                    <div className="absolute top-20 left-20 w-24 h-24 border-2 border-gray-600"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-gray-600"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="border border-gray-600">
                            <div className="bg-gray-800 px-4 py-2 border-b border-gray-600">
                                <h3 className="font-semibold">{category.title}</h3>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="text-gray-300 text-sm">
                                            {skill}
                                            {skillIndex < category.skills.length - 1 && ','}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;