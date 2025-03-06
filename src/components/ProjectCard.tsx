import { Link } from "react-router-dom"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { SiReact } from '@icons-pack/react-simple-icons'

interface ProjectCardProps {
    id: number,
    title: string,
    description: string,
    technologies: Array<string>
}

function ProjectCard(props: ProjectCardProps) {

    return (
        <Card className="rounded-none">
            <CardHeader className="text-lg">
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-1">
                {props.technologies.map((tech, index) => (
                    <SiReact color='default' size={24} />
                ))}
            </CardContent>
            <CardFooter>
                <Link
                    to={`/projects/${props.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    View Details →
                </Link>
            </CardFooter>
        </Card >
    )
}

export default ProjectCard
