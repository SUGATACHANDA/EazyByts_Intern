import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
    const completeApps = [
        {
            id: 1,
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            image: "https://placehold.co/400x200/2D2D2D/FF6B35?text=ChertNodes",
            technologies: ["HTML", "SCSS", "Python", "Flask"],
            liveUrl: "#",
            cachedUrl: "#"
        },
        {
            id: 2,
            title: "Kahoot Answers Viewer",
            description: "Get answers to your kahoot quiz",
            image: "https://placehold.co/400x200/7B68EE/FFFFFF?text=Kahoot+Answers",
            technologies: ["CSS", "Express", "Node.js"],
            liveUrl: "#"
        },
        {
            id: 3,
            title: "ProtectX",
            description: "Discord anti-crash bot",
            image: "https://placehold.co/400x200/00C851/FFFFFF?text=ProtectX",
            technologies: ["React", "Express", "Discord.js", "Node.js"],
            cachedUrl: "#"
        },
        {
            id: 4,
            title: "Kotik Bot",
            description: "Multi-functional discord bot",
            image: "https://placehold.co/400x200/F5F5DC/000000?text=Kotik+Bot",
            technologies: ["HTML", "CSS", "JS"],
            liveUrl: "#"
        },
        {
            id: 5,
            title: "Portfolio",
            description: "You're using it rn",
            image: "https://placehold.co/400x200/2D2D2D/FFFFFF?text=Portfolio",
            technologies: ["Vue", "TS", "Less"],
            githubUrl: "#"
        }
    ];

    const smallProjects = [
        {
            id: 6,
            title: "Bot boilerplate",
            description: "Start creating scalable discord.js bot with typescript in seconds",
            technologies: ["Discord.js", "TS", "JS"],
            githubUrl: "#"
        },
        {
            id: 7,
            title: "My blog",
            description: "Front-end of my future blog website written in vue",
            technologies: ["VUE", "CSS", "JS"],
            githubUrl: "#"
        },
        {
            id: 8,
            title: "Chess pro",
            description: "Figma landing page about service for viewing Chess tournaments",
            technologies: ["Figma"],
            figmaUrl: "#"
        },
        {
            id: 9,
            title: "Crash protect website",
            description: "Figma template for website about anti-raid, anti-crash discord bot",
            technologies: ["Figma"],
            figmaUrl: "#"
        },
        {
            id: 10,
            title: "CSS expirements",
            description: "Collection of my different little projects in css",
            technologies: ["HTML", "CSS"],
            liveUrl: "#"
        },
        {
            id: 11,
            title: "Web Dev nvim config",
            description: "Config for neovim perfect for web developer",
            technologies: ["Lua", "NeoVim"],
            githubUrl: "#"
        },
        {
            id: 12,
            title: "Ooku",
            description: "Simple link shortener with auth",
            technologies: ["Python", "Quart", "HTML"],
            liveUrl: "#"
        },
        {
            id: 13,
            title: "School website",
            description: "Figma template website for my school",
            technologies: ["Figma"],
            figmaUrl: "#"
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <Sidebar />

            <div className="ml-16 pt-20">
                <main className="px-8 py-12 max-w-7xl mx-auto relative">
                    {/* Decorative dots on left */}
                    <div className="absolute left-0 top-1/4 hidden lg:block">
                        <div className="grid grid-cols-3 gap-1">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative dots on right */}
                    <div className="absolute right-0 top-2/3 hidden lg:block">
                        <div className="grid grid-cols-3 gap-1">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Page title */}
                    <div className="mb-16">
                        <h1 className="text-4xl font-bold mb-2">
                            <span className="text-purple-400">/</span>projects
                        </h1>
                        <p className="text-gray-400">List of my projects</p>
                    </div>

                    {/* Complete Apps Section */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-8">
                            <span className="text-purple-400">#</span>complete-apps
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {completeApps.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>

                    {/* Small Projects Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8">
                            <span className="text-purple-400">#</span>small-projects
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {smallProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ProjectsPage;