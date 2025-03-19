import { useRef } from "react";
import WorkExperience from "../components/WorkExperience";
import { Button } from "../components/ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedCircle from "../components/AnimatedCircle";
import useScrollResponsive from "../components/hooks/useScrollResponsive";
import SkillsSection from "../components/SkillsSection";
import FeaturedProjects from "../components/FeaturedProjects";

function HomePageBeta() {
    // Use our custom hook to get all responsive values
    const {
        transformValue,
        titleFontSize,
        subtitleFontSize,
        isFixed,
        isMediumScreen
    } = useScrollResponsive();

    // Create a ref for the section you want to scroll to
    const workExperienceRef = useRef<HTMLDivElement>(null);

    // Function to handle smooth scrolling to the work experience section
    const scrollToWorkExperience = () => {
        workExperienceRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {/* Title and description */}
            <div className={`min-h-[calc(100vh-4rem)] flex items-center relative`}>
                <div
                    className={`container mx-auto transition-transform duration-300 ease-out
                        ${isMediumScreen && isFixed ? 'fixed md:top-[8rem] md:left-[8rem] lg:top-[14rem] lg:left-[12rem]' : ''}
                        ${!isMediumScreen && isFixed ? '' : 'justify-center'}`}
                    style={{
                        transform: isMediumScreen ? `translateX(-${transformValue}px)` : 'none'
                    }}
                >
                    <div className="flex flex-col items-center md:items-start">
                        <h1
                            className="font-bold text-center md:text-left mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent ease;"
                            style={{
                                fontSize: `${titleFontSize}px`,
                                lineHeight: 1.1
                            }}
                        >
                            Nicholas Bonorden
                        </h1>
                        <p
                            className="text-center md:text-left text-muted-foreground mb-6"
                            style={{
                                fontSize: `${subtitleFontSize}px`
                            }}
                        >
                            Full-Stack Developer
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                            <a href="/projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                                View Projects
                            </a>
                            <a href="/contact" className="px-6 py-3 border border-border bg-background hover:bg-accent transition-colors rounded-md">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Centered scroll button at bottom of viewport */}
                <div className="absolute left-0 right-0 bottom-12 flex justify-center">
                    <AnimatedCircle>
                        <Button
                            variant="ghost"
                            onClick={scrollToWorkExperience}
                            className="h-full w-full flex items-center justify-center rounded-full"
                            size="icon"
                        >
                            <ArrowDown size={28} className="text-primary" />
                        </Button>
                    </AnimatedCircle>
                </div>
            </div>


            <div ref={workExperienceRef}>
                <WorkExperience />
            </div>

            <SkillsSection />


            <FeaturedProjects />


        </div>
    );
}

export default HomePageBeta;
