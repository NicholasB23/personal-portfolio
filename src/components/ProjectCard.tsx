import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    SiJavascript, SiTypescript, SiReact, SiCss, SiVite,
    SiPython, SiFlask, SiAmazonwebservices, SiGit, SiSqlite
} from '@icons-pack/react-simple-icons';
import { ReactNode } from "react";
import { Project } from "../types/projects.types";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
    project: Project;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

interface WrapperProps {
    children: ReactNode;
}

interface TechBlocksProps {
    techs: string[];
}

function TechBlocks({ techs }: TechBlocksProps) {
    const IconWrapper = ({ children, name }: WrapperProps & { name: string }) => {
        return (
            <div className="flex size-12 bg-white border-gray-700 border-2 justify-center items-center overflow-hidden group relative">
                <div className="transition-transform duration-200 group-hover:scale-125 flex justify-center items-center">
                    {children}
                </div>
                {/* Hover Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full mb-1 left-1/2 transform -translate-x-1/2 pointer-events-none">
                    {name}
                </div>
            </div>
        );
    };

    const iconColor = (tech: string) => {
        if (techs.includes(tech)) return 'default';
        else return '#dadddd';
    };

    const iconClassName = "size-fit";

    return (
        <div className="grid grid-cols-5 gap-3">
            <IconWrapper name="JavaScript"><SiJavascript className={iconClassName} color={iconColor("JavaScript")} /></IconWrapper>
            <IconWrapper name="TypeScript"><SiTypescript className={iconClassName} color={iconColor("TypeScript")} /></IconWrapper>
            <IconWrapper name="React"><SiReact className={iconClassName} color={iconColor("React")} /></IconWrapper>
            <IconWrapper name="CSS"><SiCss className={iconClassName} color={iconColor("Css")} /></IconWrapper>
            <IconWrapper name="Vite"><SiVite className={iconClassName} color={iconColor("Vite")} /></IconWrapper>
            <IconWrapper name="Python"><SiPython className={iconClassName} color={iconColor("Python")} /></IconWrapper>
            <IconWrapper name="Flask"><SiFlask className={iconClassName} color={iconColor("Flask")} /></IconWrapper>
            <IconWrapper name="AWS"><SiAmazonwebservices className={iconClassName} color={iconColor("AWS")} /></IconWrapper>
            <IconWrapper name="Git"><SiGit className={iconClassName} color={iconColor("Git")} /></IconWrapper>
            <IconWrapper name="SQLite"><SiSqlite className={iconClassName} color={iconColor("SQLite")} /></IconWrapper>
        </div>
    );
}

function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
    return (
        <Card
            className={`bg-card rounded-none shadow-deep-shadow flex flex-col transition-all duration-500 ease-in-out
                ${isExpanded ? 'md:col-span-2 lg:col-span-3 scale-100' : 'scale-95 hover:scale-100'}`}
        >
            <CardHeader className="text-lg">
                <CardTitle>{project.title}</CardTitle>
                <hr className="w-full my-4 h-0.5 border-t-0 bg-slate-950" />
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex-grow">
                <TechBlocks techs={project.technologies} />

                {isExpanded && (
                    <div className="mt-6 overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-top-5">
                        <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                        <p className="mb-4 transition-all duration-300">
                            {project.longDescription || `This project demonstrates my skills in ${project.technologies.join(", ")}. I focused on creating a clean,
                            intuitive user experience while implementing robust functionality.`}
                        </p>

                        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                        <ul className="list-disc pl-5 mb-4 transition-all duration-300">
                            <li>Responsive design for all device sizes</li>
                            <li>Clean, maintainable code architecture</li>
                            <li>Modern UI with smooth transitions</li>
                            <li>Performance optimized for quick loading times</li>
                        </ul>

                        <div className="flex gap-4 mt-6 transition-all duration-300">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Github size={16} />
                                <span>View Code</span>
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2">
                                <ExternalLink size={16} />
                                <span>Live Demo</span>
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button
                    variant="ghost"
                    onClick={onToggleExpand}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-all duration-300"
                >
                    {isExpanded ? (
                        <>
                            <span>Show Less</span>
                            <ChevronUp size={16} className="transition-transform duration-300" />
                        </>
                    ) : (
                        <>
                            <span>View Details</span>
                            <ChevronDown size={16} className="transition-transform duration-300" />
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
