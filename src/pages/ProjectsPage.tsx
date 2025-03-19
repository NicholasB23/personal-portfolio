// src/pages/ProjectsPage.tsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

// Define the type for location state
interface LocationState {
    expandedProjectId?: number;
}

function Projects() {
    const location = useLocation();
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

    // Get the expanded project ID from the location state if available
    useEffect(() => {
        const state = location.state as LocationState;
        if (state && state.expandedProjectId) {
            setExpandedProjectId(state.expandedProjectId);

            // Scroll to the expanded project
            setTimeout(() => {
                const element = document.getElementById(`project-${state.expandedProjectId}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }, [location]);

    // Toggle expanded state for a project
    const toggleProjectExpand = (projectId: number) => {
        if (expandedProjectId === projectId) {
            setExpandedProjectId(null);
        } else {
            setExpandedProjectId(projectId);

            // Scroll to the expanded project
            setTimeout(() => {
                const element = document.getElementById(`project-${projectId}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projectsData.map((project) => (
                    <div
                        id={`project-${project.id}`}
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
