import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';


function Projects() {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'A full-featured online store with React, Node.js, and MongoDB',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
            image: 'https://placehold.co/600x400',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity app for managing tasks and projects',
            technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
            image: 'https://placehold.co/600x400',
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Real-time weather information with interactive maps',
            technologies: ['React', 'Redux', 'Weather API', 'Leaflet Maps'],
            image: 'https://placehold.co/600x400',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-secondary rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="mb-4">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    <ProjectCard title={project.title} description={project.description} technologies={project.technologies} id={project.id} />
                                </div>
                            </div>
                            <Link
                                to={`/projects/${project.id}`}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                View Details →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
