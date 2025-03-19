import { useRef } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import useInView from './hooks/useInView';
import projectsData from '../data/projectsData';

const FeaturedProjects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef as React.RefObject<HTMLElement>, { threshold: 0.1 });
    const navigate = useNavigate();

    // Filter only featured projects
    const featuredProjects = projectsData.filter(project => project.featured);

    // Handle click on a project card
    const handleProjectClick = (projectId: number) => {
        // Navigate to the projects page and pass the project ID to expand
        navigate('/projects', { state: { expandedProjectId: projectId } });
    };

    return (
        <div ref={sectionRef} className="py-16">
            <div className={`container mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-6 md:mb-0">Featured Projects</h2>
                    <Link to="/projects">
                        <Button variant="ghost" className="group">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-col gap-8">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group cursor-pointer bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Project Image (Left Side) */}
                                <div className="relative md:w-2/5 h-64 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div
                                        className="absolute inset-0 bg-primary/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Project Info (Right Side) */}
                                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {project.longDescription || project.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-secondary/30 text-foreground text-xs py-1 px-2 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;
