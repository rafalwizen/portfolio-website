export default function Portfolio() {
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of the project and its goals.",
            technologies: ["Java", "Spring Boot", "React"],
            link: "https://project1.com",
            github: "https://github.com/username/project1",
            image: "/placeholder.svg?height=300&width=400"
        },
        {
            title: "Project 2",
            description: "Another project description showcasing different skills.",
            technologies: ["JavaScript", "Node.js", "Express"],
            link: "https://project2.com",
            github: "https://github.com/username/project2",
            image: "/placeholder.svg?height=300&width=400"
        },
        // Add more projects as needed
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="mb-4">
                                <strong>Technologies:</strong> {project.technologies.join(", ")}
                            </div>
                            <div className="flex space-x-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}