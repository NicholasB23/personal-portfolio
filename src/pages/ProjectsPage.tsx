// src/pages/ProjectsPage.tsx
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types/projects.types';

function Projects() {
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

    // Toggle expanded state for a project
    const toggleProjectExpand = (projectId: number) => {
        if (expandedProjectId === projectId) {
            setExpandedProjectId(null);
        } else {
            setExpandedProjectId(projectId);
        }
    };

    const projects: Array<Project> = [
        {
            id: 1,
            title: 'Internal Administration Tool',
            description: "Internal tool integrated with Bulb's SaaS product allowing deeper controls not available natively",
            longDescription: "This administration tool was developed to extend the capabilities of Bulb's SaaS product. It provides administrators with enhanced control mechanisms, data visualization, and user management features not available in the native interface. The application was built with a React frontend and Flask backend, with SQLite for data storage.",
            technologies: ["JavaScript", "React", "Css", "Python", "Flask", "AWS", "Git", "SQLite"],
            image: 'https://placehold.co/600x400',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
        {
            id: 2,
            title: 'Personal Portfolio',
            description: 'Personal website highlighting professional experience and displaying current abilities',
            longDescription: "This portfolio website showcases my professional experience, skills, and projects. Built with modern web technologies including React, TypeScript, and Tailwind CSS, it features a responsive design, dark mode support, and smooth transitions between pages. The site demonstrates my front-end development skills and attention to design details.",
            technologies: ["JavaScript", "TypeScript", "React", "Css", "Vite", "Git"],
            image: 'https://placehold.co/600x400',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
        {
            id: 3,
            title: 'Web Game - Tower Idle',
            description: 'Incremental/Idle browser game featuring local and cloud saves purely using TypeScript',
            longDescription: "Tower Idle is an incremental browser game where players build and upgrade a tower to generate resources over time. The game features both local saving and cloud synchronization, allowing players to continue their progress across devices. Built with TypeScript and React, it implements complex game mechanics while maintaining a lightweight and responsive user interface.",
            technologies: ["JavaScript", "TypeScript", "React", "Css", "Vite", "Python", "Flask", "AWS", "Git", "SQLite"],
            image: 'https://placehold.co/600x400',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`transition-all duration-500 ease-in-out ${expandedProjectId === project.id
                                ? 'md:col-span-2 lg:col-span-3'
                                : ''
                            }`}
                        style={{
                            gridRow: expandedProjectId === project.id ? 'span 2' : 'span 1',
                            height: 'fit-content',
                        }}
                    >
                        <ProjectCard
                            project={project}
                            isExpanded={expandedProjectId === project.id}
                            onToggleExpand={() => toggleProjectExpand(project.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
