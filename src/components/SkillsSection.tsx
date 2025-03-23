import { Badge } from "./ui/badge";
import { useRef } from "react";
import useInView from "./hooks/useInView";

type SkillCategory = {
    category: string;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        category: "Languages & APIs",
        skills: ["JavaScript", "TypeScript", "CSS", "Python", "SQL", "REST APIs"]
    },
    {
        category: "Libraries & Frameworks",
        skills: ["React", "Flask", "TailwindCSS", "Vite", "Terraform"]
    },
    {
        category: "Development Tools & Platforms",
        skills: ["Git", "AWS", "CloudFlare", "Docker", "Linux", "Postman"]
    },
    {
        category: "Databases & Data Management",
        skills: ["PostgreSQL", "SQLite", "MySQL", "MongoDB"]
    },
    {
        category: "Core Competencies",
        skills: ["Communication & Collaboration", "Technical Documentation", "Problem-Solving & Troubleshooting", "User Experience & Support", "Process Automation & Optimization"]
    }
];

const SkillsSection = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center text-primary md:text-left md:max-w-3xl md:ml-auto md:mr-8 lg:mr-16">
                    Skills & Expertise
                </h2>

                <div className="md:max-w-3xl md:ml-auto">
                    {skillCategories.map((category, index) => (
                        <SkillCategory
                            key={index}
                            category={category.category}
                            skills={category.skills}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface SkillCategoryProps {
    category: string;
    skills: string[];
    index: number;
}

const SkillCategory = ({ category, skills, index }: SkillCategoryProps) => {
    const categoryRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(categoryRef as React.RefObject<HTMLElement>, { threshold: 0.2 });


    return (
        <div
            ref={categoryRef}
            className="mb-10"
            style={{
                animationDelay: `${index * 200}ms`
            }}
        >
            <h3 className={`text-xl font-semibold mb-4`}>
                {category}
            </h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                    <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`bg-secondary hover:bg-secondary/50 text-foreground py-1.5 px-3 text-sm
                            ${isInView ? 'animate-slide-in-right opacity-100' : 'opacity-0'}
                        `}

                    >
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
