// src/components/WorkExperience.tsx
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

type WorkItemProps = {
    title: string;
    company: string;
    period: string;
    description: string | string[]; // Now accepts either a string or array of strings
    technologies: string[];
};

const workExperiences: WorkItemProps[] = [
    {
        title: "Professional Development",
        company: "Independent",
        period: "2023 — Present",
        description: [
            "-Continuously developing and launching personal projects, including this portfolio site and my tower game, to refine my skills in full-stack development and game design.",
            "-Expanding my expertise in TypeScript and object-oriented programming to write more scalable and maintainable code.",
            "-Enhancing my DevOps and infrastructure knowledge by working with CI/CD pipelines, Docker, AWS, and Cloudflare to improve deployment efficiency and system reliability.",
            "-Actively exploring new technologies and best practices to stay ahead in the ever-evolving tech landscape."
        ],
        technologies: ["JavaScript", "TypeScript", "React", "Python"],
    },
    {
        title: "Product Manager",
        company: "Bulb Inc",
        period: "2021 — 2022",
        description: [
            "-Worked cross-functionally with developers, sales teams, and stakeholders to deliver products that met and exceeded client expectations.",
            "-Bridged the gap between technical and business needs by gathering feedback, defining requirements, and translating user stories into actionable tasks.",
            "-Led high-quality product rollouts, ensuring seamless deployments that were on time and within budget.",
            "-Designed and implemented integrations with external systems, documenting procedures for efficiency and scalability.",
            "-Managed Jira workflows, triaging tickets, prioritizing tasks, and leading daily stand-ups to keep development aligned and agile."
        ],
        technologies: ["Jira", "Figma"],
    },
    {
        title: "IT Specialist/System Administrator",
        company: "Bulb Inc",
        period: "2017 — 2021",
        description: [
            "-Developed and maintained internal tooling and automation to enhance support team efficiency, building full-stack web applications with custom APIs and SQL databases.",
            "-Implemented CI/CD workflows, automating deployments to AWS for seamless and reliable application delivery.",
            "-Maintained a separate reporting database, enabling custom views and relationships outside the primary DB for more flexible insights.",
            "-Designed and optimized SQL queries and reports for the support team, implementing automation and dashboards for streamlined data analysis."
        ],
        technologies: ["JavaScript", "React", "Python", "Postgres", "AWS", "APIs"],
    },
    {
        title: "Customer Support Specialist",
        company: "Bulb Inc",
        period: "2016 — 2017",
        description: [
            "-Resolved customer tickets efficiently, collaborating with the development team to diagnose and fix technical issues.",
            "-Created clear and concise training and support documentation for both internal teams and customers.",
            "-Provided hands- on training to customers, both on - site and remotely, ensuring smooth onboarding and product adoption.",
            "-Mentored new employees, training them on systems and procedures while handling high - complexity support cases."
        ],
        technologies: ["Zendesk", "Jira", "MySQL"],
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

                {/* Description - now handles both string and array formats */}
                {Array.isArray(description) ? (
                    <div className="mb-6 text-foreground/80 space-y-2">
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                ) : (
                    <p className="mb-6 text-foreground/80">{description}</p>
                )}

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
