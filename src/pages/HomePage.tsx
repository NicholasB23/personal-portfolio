import { useState, useEffect } from "react";
import WorkExperience from "../components/WorkExperience";
import SkillsSection from "../components/SkillsSection";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutMe from "../components/AboutMe";

// Define our section types
type Section = {
    id: string;
    label: string;
    component: React.ReactNode;
};

const HomePage = () => {
    const [activeSection, setActiveSection] = useState<string>("experience");

    // Define our sections
    const sections: Section[] = [
        {
            id: "about",
            label: "About Me",
            component: <AboutMe />,
        },
        {
            id: "experience",
            label: "Experience",
            component: <WorkExperience />,
        },
        {
            id: "skills",
            label: "Skills",
            component: <SkillsSection />,
        },
        {
            id: "projects",
            label: "Projects",
            component: <FeaturedProjects />,
        },
    ];

    // Set up intersection observer to track active section
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        // Setup observers for each section
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        // When section is 40% or more visible, set it as active
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                            setActiveSection(section.id);
                        }
                    });
                },
                {
                    threshold: [0.4, 0.8], // Check when section is 40% and 80% visible
                    rootMargin: "-10% 0px -10% 0px" // Adjust viewing area
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        // Cleanup observers on unmount
        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [sections]);

    // Scroll to section when nav item is clicked
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 164, // Offset for header
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="mx-auto max-w-screen-2xl px-3 md:px-12 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-10">
                {/* Left side - fixed content */}
                <div className="w-full lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:w-2/5 lg:flex-col">
                    {/* Main header and description */}
                    <div className="mb-8 pt-24 lg:pt-24">
                        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-4 bg-gradient-to-r from-primary to-primary-darker bg-clip-text text-transparent">
                            Nicholas Bonorden
                        </h1>
                        <p className="text-muted-foreground text-xl text-center md:text-left">
                            Software Engineer | Full Stack Developer
                        </p>

                        <div className="flex flex-wrap gap-4 my-4 justify-center md:justify-start">
                            <a href="/projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                                View Projects
                            </a>
                            <a href="/contact" className="px-6 py-3 border border-border bg-background hover:bg-accent transition-colors rounded-md">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="nav hidden lg:block" aria-label="In-page jump links">
                        <ul className="space-y-2">
                            {sections.map(section => (
                                <li key={section.id} className="overflow-hidden">
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className={`py-2 text-left
                                            ${activeSection === section.id
                                                ? 'text-primary font-bold origin-left shadow-sm'
                                                : 'hover:text-primary'}`}
                                    >
                                        <div className={`inline-block align-middle mr-2 h-[2px] bg-primary transition-all duration-300
                                            ${activeSection === section.id ? 'w-12' : 'w-6 hover:w-12'}`} />
                                        <span className={`inline-block duration-100`}>
                                            {section.label}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Right side - scrollable content */}
                <div className="lg:w-3/5 pt-24 lg:pt-24 px-6 md:px-12">
                    {sections.map((section, index) => (
                        <div key={section.id}>
                            <section
                                id={section.id}
                                className={`transition-opacity duration-500
                ${activeSection === section.id ? 'opacity-100' : 'opacity-80'}`}
                            >
                                {section.component}
                                {index < sections.length - 1
                                    ? <div className="w-full h-[2px] my-24 bg-primary" />
                                    : <div className="w-full h-[2px] my-12" />
                                }
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
