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
                        </h2>

                        <div className={`space-y-4 transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'
                            }`} style={{ transitionDelay: '200ms' }}>
                            <p className="text-foreground/90">
                                Hey there! I'm a software engineer and problem-solver with a passion for building smart, efficient, and user-friendly solutions. I don’t just write code—I focus on creating impact through thoughtful development, automation, and problem-solving.
                            </p>

                            <p className="text-foreground/90">
                                With experience across different domains, I adapt quickly to new challenges, whether it’s developing scalable applications, optimizing workflows, or enhancing user experiences. I love finding creative ways to make technology work better, bridging the gap between technical solutions and real-world needs. No matter the project, I bring a customer-focused mindset, a drive for continuous learning, and a willingness to step in wherever I’m needed.
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
