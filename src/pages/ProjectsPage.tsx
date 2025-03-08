import ProjectCard from '../components/ProjectCard';
import { Project } from '../types/projects.types';

// "JavaScript", "TypeScript", "React", "Css", "Vite", "Python", "Flask", "AWS", "Git", "SQLite"

function Projects() {
    const projects: Array<Project> = [
        {
            id: 1,
            title: 'Internal Administration Tool',
            description: "Interal tool integrated with Bulb's SaaS product allowing deeper controls not available natively",
            technologies: ["JavaScript", "React", "Css", "Python", "Flask", "AWS", "Git", "SQLite"],
            image: 'https://placehold.co/600x400',
        },
        {
            id: 2,
            title: 'Personal Portfolio',
            description: 'Personal website highlighting professional experience and displaying current abilities',
            technologies: ["JavaScript", "TypeScript", "React", "Css", "Vite", "Git"],
            image: 'https://placehold.co/600x400',
        },
        {
            id: 3,
            title: 'Web Game - Tower Idle',
            description: 'Incremental/ Idle browser game featuring local and cloud saves purely using TypeScript',
            technologies: ["JavaScript", "TypeScript", "React", "Css", "Vite", "Python", "Flask", "AWS", "Git", "SQLite"],
            image: 'https://placehold.co/600x400',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <div key={project.id} className="flex justify-center">
                        <div className="w-full max-w-md">
                            <ProjectCard project={project} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
