import { Badge } from "./ui/badge";
import { useRef } from "react";
import useInView from "./hooks/useInView";

type SkillCategory = {
    category: string;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Dart", "Java", "HTML", "CSS"]
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React", "NextJS", "Flutter", "Express", "Flask", "TailwindCSS"]
    },
    {
        category: "Tools & Platforms",
        skills: ["Git", "AWS", "Firebase", "Docker", "Figma", "Storybook"]
    },
    {
        category: "Databases",
        skills: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "Firestore"]
    }
];

const SkillsSection = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center text-primary md:text-left md:max-w-3xl md:ml-auto md:mr-8 lg:mr-16">
                    Skills & Expertise
                </h2>

                <div className="md:max-w-3xl md:ml-auto md:mr-8 lg:mr-16">
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
    const isInView = useInView(categoryRef, { threshold: 0.2 });

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
                        className={`bg-secondary/30 hover:bg-secondary/50 text-foreground py-1.5 px-3 text-sm
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
