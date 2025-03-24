// src/pages/ProjectsPage.tsx
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';
import { Badge } from '../components/ui/badge';
import { Filter, X } from 'lucide-react';
import { Button } from '../components/ui/button';

// Define the type for location state
interface LocationState {
    expandedProjectId?: number;
}

function Projects() {
    const location = useLocation();
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const projectRefs = useRef<Record<number, HTMLDivElement | null>>({});

    // Get unique technologies from all projects
    const allTechnologies = Array.from(
        new Set(projectsData.flatMap(project => project.technologies))
    ).sort();

    // Get the expanded project ID from the location state if available
    useEffect(() => {
        const state = location.state as LocationState | null;
        if (state && state.expandedProjectId !== undefined) {
            setExpandedProjectId(state.expandedProjectId);

            // Scroll to the expanded project
            setTimeout(() => {
                const projectId = state.expandedProjectId;
                if (projectId !== undefined && projectRefs.current[projectId]) {
                    projectRefs.current[projectId]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
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
                if (projectRefs.current[projectId]) {
                    projectRefs.current[projectId]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }, 100);
        }
    };

    // Toggle filter
    const toggleFilter = (tech: string) => {
        setActiveFilters(prev =>
            prev.includes(tech)
                ? prev.filter(t => t !== tech)
                : [...prev, tech]
        );
    };

    // Clear all filters
    const clearFilters = () => {
        setActiveFilters([]);
    };

    // Filter projects based on active filters
    const filteredProjects = activeFilters.length > 0
        ? projectsData.filter(project =>
            activeFilters.every(tech => project.technologies.includes(tech))
        )
        : projectsData;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Browse through my portfolio of projects. Each showcases different skills and technologies.
                    </p>

                    {/* Filters Section */}
                    <div className="relative">
                        <div className="flex justify-between items-center mb-4 min-h-[2rem]">
                            <h2 className="text-xl font-semibold">Project Filters</h2>
                            {activeFilters.length > 0 && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearFilters}
                                    className="text-muted-foreground flex items-center gap-1"
                                >
                                    <X size={16} />
                                    <span>Clear filters</span>
                                </Button>
                            )}
                        </div>

                        {/* Mobile filter button */}
                        <div className="md:hidden mb-4">
                            <Button
                                variant="outline"
                                className="w-full flex justify-between items-center"
                                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                            >
                                <span>Filter by technology</span>
                                <Filter size={16} />
                            </Button>

                            {/* Mobile filter dropdown */}
                            {isFilterMenuOpen && (
                                <div className="absolute z-10 mt-2 p-4 bg-card border border-border rounded-md shadow-lg w-full">
                                    <div className="grid grid-cols-2 gap-2">
                                        {allTechnologies.map(tech => (
                                            <Badge
                                                key={tech}
                                                variant={activeFilters.includes(tech) ? "default" : "outline"}
                                                className="cursor-pointer"
                                                onClick={() => toggleFilter(tech)}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Desktop filters */}
                        <div className="hidden md:flex flex-wrap gap-2">
                            {allTechnologies.map(tech => (
                                <Badge
                                    key={tech}
                                    variant={activeFilters.includes(tech) ? "default" : "outline"}
                                    className="cursor-pointer transition-all hover:scale-105"
                                    onClick={() => toggleFilter(tech)}
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="min-h-[300px] flex items-center justify-center border border-dashed border-border rounded-lg">
                        <div className="text-center p-6">
                            <h3 className="text-xl font-semibold mb-2">No matching projects</h3>
                            <p className="text-muted-foreground mb-4">Try removing some filters to see more projects.</p>
                            <Button onClick={clearFilters}>Clear filters</Button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjects.map((project) => {
                            // Determine if this project should span full width
                            const isFullWidth = expandedProjectId === project.id;

                            return (
                                <div
                                    ref={(el) => {
                                        projectRefs.current[project.id] = el;
                                    }}
                                    key={project.id}
                                    className={`transition-all duration-500 ease-in-out ${isFullWidth ? 'lg:col-span-2' : ''
                                        }`}
                                >
                                    <ProjectCard
                                        project={project}
                                        isExpanded={expandedProjectId === project.id}
                                        onToggleExpand={() => toggleProjectExpand(project.id)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
