import { Link } from "react-router-dom"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import {
    SiJavascript, SiTypescript, SiReact, SiCss, SiVite,
    SiPython, SiFlask, SiAmazonwebservices, SiGit, SiSqlite
} from '@icons-pack/react-simple-icons'
import { ReactNode } from "react";
import { Project } from "../types/projects.types";


interface ProjectCardProps {
    project: Project;
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
        )
    }

    const iconColor = (tech: string) => {
        if (techs.includes(tech)) return 'default'
        else return '#dadddd'
    }

    const iconClassName = "size-fit"

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
    )
}


function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="bg-card rounded-none h-full shadow-deep-shadow flex flex-col">
            <CardHeader className="text-lg">
                <CardTitle>{project.title}</CardTitle>
                <hr className="w-full my-12 h-0.5 border-t-0 bg-slate-950 " />
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex-grow">
                <TechBlocks techs={project.technologies} />
            </CardContent>
            <CardFooter>
                <Link
                    to={`/projects/${project.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    View Details →
                </Link>
            </CardFooter>
        </Card >
    )
}

export default ProjectCard
