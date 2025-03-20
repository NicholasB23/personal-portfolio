import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
    SiJavascript, SiTypescript, SiReact, SiCss, SiVite,
    SiPython, SiFlask, SiAmazonwebservices, SiGit, SiSqlite,
    SiPostgresql, SiDocker, SiCloudflare
} from '@icons-pack/react-simple-icons';
import { Project } from "../types/projects.types";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
    project: Project;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

interface TechIconProps {
    tech: string;
}

function TechIcon({ tech }: TechIconProps) {
    const iconSize = "w-4 h-4";

    // Map tech names to corresponding icons
    switch (tech) {
        case "JavaScript":
            return <SiJavascript color='default' className={iconSize} />;
        case "TypeScript":
            return <SiTypescript color='default' className={iconSize} />;
        case "React":
            return <SiReact color='default' className={iconSize} />;
        case "CSS":
            return <SiCss color='default' className={iconSize} />;
        case "TailwindCSS":
            return <SiCss color='default' className={iconSize} />;
        case "Vite":
            return <SiVite color='default' className={iconSize} />;
        case "Python":
            return <SiPython color='default' className={iconSize} />;
        case "Flask":
            return <SiFlask color='default' className={iconSize} />;
        case "AWS":
            return <SiAmazonwebservices color='default' className={iconSize} />;
        case "Git":
            return <SiGit color='default' className={iconSize} />;
        case "SQLite":
            return <SiSqlite color='default' className={iconSize} />;
        case "PostgreSQL":
            return <SiPostgresql color='default' className={iconSize} />;
        case "Docker":
            return <SiDocker color='default' className={iconSize} />;
        case "CloudFlare":
            return <SiCloudflare color='default' className={iconSize} />;
        default:
            return null;
    }
}

function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
    return (
        <Card className={`h-full overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg ${isExpanded ? 'border-primary' : 'hover:border-primary/50'
            }`}>
            <div className="flex flex-col md:flex-row h-full">
                {/* Project image (shown only on desktop) */}
                {project.image && (
                    <div className="hidden md:block md:w-2/5 relative overflow-hidden">
                        <div
                            className="h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="absolute inset-0 bg-primary/10" />
                    </div>
                )}

                {/* Content section */}
                <div className="flex flex-col md:w-3/5 h-full">
                    <CardHeader>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                    </CardHeader>

                    {/* Project image (shown only on mobile) */}
                    {project.image && (
                        <div className="md:hidden h-48 relative overflow-hidden mx-6">
                            <div
                                className="h-full w-full bg-cover bg-center rounded-md"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                        </div>
                    )}

                    <CardContent className="flex-grow">
                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map(tech => (
                                <Badge key={tech} variant="outline" className="flex items-center gap-1 rounded-[4rem]">
                                    <TechIcon tech={tech} />
                                    <span>{tech}</span>
                                </Badge>
                            ))}
                        </div>

                        {/* Expanded content */}
                        {isExpanded && (
                            <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-5 duration-500">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                                    <p className="text-muted-foreground">
                                        {project.longDescription || `This project demonstrates my skills in ${project.technologies.join(", ")}. I focused on creating a clean, intuitive user experience while implementing robust functionality.`}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                        {project.keyFeatures.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.githubUrl && (
                                        <Button variant="outline" size="sm" className="gap-2">
                                            <Github size={16} />
                                            <span>View Code</span>
                                        </Button>
                                    )}
                                    {project.liveUrl && (
                                        <Button variant="outline" size="sm" className="gap-2">
                                            <ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="border-t pt-4">
                        <Button
                            variant="ghost"
                            onClick={onToggleExpand}
                            className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 w-full justify-center"
                        >
                            {isExpanded ? (
                                <>
                                    <span>Show Less</span>
                                    <ChevronUp size={16} />
                                </>
                            ) : (
                                <>
                                    <span>View Details</span>
                                    <ChevronDown size={16} />
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    );
}

export default ProjectCard;
