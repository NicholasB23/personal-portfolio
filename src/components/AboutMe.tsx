// src/components/AboutMe.tsx
import { useRef, useState, useEffect } from 'react';
import useInView from './hooks/useInView';


const AboutMe = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef as React.RefObject<HTMLElement>, { threshold: 0.1 });
    const [isAnimated, setIsAnimated] = useState(false);

    // Trigger animation when component comes into view
    useEffect(() => {
        if (isInView && !isAnimated) {
            setIsAnimated(true);
        }
    }, [isInView, isAnimated]);


    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden"
        >
            <div className="container relative">
                <div className={`flex flex-col md:flex-row gap-12 transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0 translate-y-10'
                    }`}>
                    <div>
                        <h2 className="text-4xl font-bold mb-8 text-primary relative">
                            About Me
                            {/* Animated underline */}
                            <span className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-1500 ease-in-out
                                ${isAnimated ? 'w-[105px]' : 'w-0'
                                }`} style={{ transitionDelay: '600ms' }}>
                            </span>
                        </h2>

                        <div className={`space-y-4 transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'
                            }`} style={{ transitionDelay: '200ms' }}>
                            <p className="text-foreground/90">
                                I'm a passionate full-stack developer with over 5 years of experience building modern,
                                responsive web applications and mobile solutions. My journey in software development
                                started with curiosity and has evolved into expertise.
                            </p>

                            <p className="text-foreground/90">
                                I specialize in React, TypeScript, and various backend technologies, always focused on
                                writing clean, maintainable code that solves real problems. I'm constantly learning
                                and adapting to new technologies to deliver the best possible solutions.
                            </p>

                            <p className="text-foreground/90">
                                When I'm not coding, you'll find me hiking, reading books, or
                                experimenting with new frameworks and libraries. I believe in continuous learning
                                and personal growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
