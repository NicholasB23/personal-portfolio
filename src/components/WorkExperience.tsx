// src/components/WorkExperience.tsx
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

type WorkItemProps = {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
};

const workExperiences: WorkItemProps[] = [
    {
        title: "Professional Development",
        company: "Independent",
        period: "2023 — Present",
        description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
    },
    {
        title: "Product Manager",
        company: "Bulb Inc",
        period: "2021 — 2022",
        description: "Built and maintained various web applications. Assisted in designing database schemas and implementing RESTful APIs.",
        technologies: ["Jira", "Figma"],
    },
    {
        title: "IT Specialist/System Administrator",
        company: "Bulb Inc",
        period: "2017 — 2021",
        description: "Built and maintained interal tooling. Designed and wrote automation scripts.",
        technologies: ["JavaScript", "React", "Python", "Postgres", "AWS"],
    },
    {
        title: "Customer Support Specialist",
        company: "Bulb Inc",
        period: "2016 — 2017",
        description: "Built and maintained various web applications. Assisted in designing database schemas and implementing RESTful APIs.",
        technologies: ["Zendesk", "Jira", "PHP", "MySQL", "Bootstrap"],
    },
];

const WorkItem = ({ title, company, period, description, technologies }: WorkItemProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 mb-12 group max-md:ml-4">
            {/* Date on the left */}
            <div className="md:w-36 shrink-0">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                    {period}
                </span>
            </div>

            {/* Content area with simplified styling */}
            <div className="flex-1">
                <div className="mb-2">
                    <h3 className="text-xl font-semibold flex items-center text-foreground">
                        {title}
                    </h3>
                    <p className="text-lg text-muted-foreground">{company}</p>
                </div>

                <p className="mb-6 text-foreground/80">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/30 hover:bg-secondary/50 text-foreground text-xs py-1">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};


const WorkExperience = () => {
    const handleResumeClick = () => {
        window.open("/Resume.pdf", "_blank");
    };

    return (
        <div className="">
            <div className="container">
                <h2 className="text-4xl font-bold mb-16 text-center text-primary md:text-left md:max-w-3xl md:ml-auto md:mr-8 lg:mr-16">
                    Work Experience
                </h2>
                <div className="md:max-w-3xl md:ml-auto border-l border-border/40 pl-0 md:pl-6">
                    {workExperiences.map((work, index) => (
                        <WorkItem key={index} {...work} />
                    ))}

                    {/* Resume Button */}
                    <div className="flex mt-12 mb-4">
                        <Button
                            onClick={handleResumeClick}
                            className="px-6 py-5 flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            <FileText size={20} />
                            <span>View Full Resume</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
