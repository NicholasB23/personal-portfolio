// src/components/AboutMe.tsx
import { useRef, useState, useEffect } from 'react';
import useInView from '../components/hooks/useInView';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from '../components/ui/button';

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

    // Contact links data
    const contactLinks = [
        {
            name: "Email",
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:hireme@n-i-ck.com",
            color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
            hoverColor: "hover:bg-red-200 dark:hover:bg-red-900/50",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/nick-bonorden/",
            color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
            hoverColor: "hover:bg-blue-200 dark:hover:bg-blue-900/50",
        },
        {
            name: "GitHub",
            icon: <SiGithub color="default" className="w-5 h-5" />,
            href: "https://github.com/NicholasB23",
            color: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
            hoverColor: "hover:bg-gray-200 dark:hover:bg-gray-700",
        },
    ];

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden py-16"
        >
            <div className="container mx-auto px-8 md:px-24">
                <div className={`flex flex-col lg:flex-row gap-12 transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>

                    {/* Left column - Profile picture and contact */}
                    <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
                        {/* Profile picture with border animation */}
                        <div className="relative mb-8">
                            <div className={`w-64 h-64 rounded-full border-4 border-primary p-2 transition-all duration-700 ${isAnimated ? 'scale-100' : 'scale-95'}`}>
                                <div
                                    className="w-full h-full rounded-full overflow-hidden"
                                    style={{
                                        position: "relative"
                                    }}
                                >
                                    {/* Replace the background-image approach with an actual image for better control */}
                                    <img
                                        src="headshot.jpg"
                                        alt="Nicholas Bonorden"
                                        className="absolute w-[120%] h-[120%] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Animated circle overlay */}
                            <svg className="absolute inset-0 w-full h-full -m-2 pointer-events-none" viewBox="0 0 280 280">
                                <circle
                                    cx="140"
                                    cy="140"
                                    r="136"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className={`text-primary ${isAnimated ? "animate-draw-circle" : ""}`}
                                    style={{
                                        strokeDasharray: 857, // Approximate circumference
                                        strokeDashoffset: isAnimated ? 0 : 857,
                                        transition: isAnimated ? "stroke-dashoffset 1.5s ease-in-out" : "none",
                                    }}
                                />
                            </svg>
                        </div>

                        {/* Contact links */}
                        <div className="space-y-3 w-full max-w-xs">
                            <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Let's Connect</h3>

                            {contactLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${link.color} ${link.hoverColor} transform hover:scale-102 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    style={{ transitionDelay: `${index * 150 + 500}ms`, transitionDuration: '400ms' }}
                                >
                                    <div className="p-2 bg-white rounded-full dark:bg-gray-100">
                                        {link.icon}
                                    </div>
                                    <span className="font-medium">{link.name}</span>
                                </a>
                            ))}

                            {/* Resume button */}
                            <Button
                                className="w-full mt-4 bg-primary/90 hover:bg-primary text-white flex items-center gap-2"
                                style={{
                                    transitionDelay: `${contactLinks.length * 150 + 500}ms`,
                                    opacity: isAnimated ? 1 : 0,
                                    transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'opacity 400ms, transform 400ms'
                                }}
                            >
                                <ExternalLink size={18} />
                                <span>Download Resume</span>
                            </Button>
                        </div>
                    </div>

                    {/* Right column - About text content */}
                    <div className="lg:w-2/3">
                        <h2 className="text-4xl font-bold mb-8 text-primary relative">
                            About Me
                            {/* Animated underline */}
                            <span className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-1500 ease-in-out
                                ${isAnimated ? 'w-[105px]' : 'w-0'
                                }`} style={{ transitionDelay: '600ms' }}>
                            </span>
                        </h2>

                        <div className="space-y-6">
                            <div className={`transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: '200ms' }}>
                                <p className="text-foreground/90 text-lg">
                                    I'm a passionate full-stack developer with over six years of experience crafting modern, responsive web applications and mobile solutions. My journey into software development started with curiosity and has evolved into a deep expertise in building intuitive, high-performance applications. Whether it's designing seamless user experiences or optimizing backend systems, I thrive on solving complex problems with elegant solutions.
                                </p>
                            </div>

                            <div className={`transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: '400ms' }}>
                                <h3 className="text-xl font-semibold mb-3">My Approach</h3>
                                <p className="text-foreground/90">
                                    I specialize in JavaScript (React and TypeScript), Python, and various infrastructure technologies. I'm always striving to write clean, maintainable code that balances efficiency with scalability. My philosophy is simple: build software that is not only functional but also delightful to use. I focus on user experience, performance, and code quality, ensuring every project I work on is both reliable and engaging. Collaboration is at the heart of my workflow, and I enjoy working closely with designers, product teams, and fellow developers to bring ideas to life.
                                </p>
                            </div>

                            <div className={`transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: '600ms' }}>
                                <h3 className="text-xl font-semibold mb-3">What Drives Me</h3>
                                <p className="text-foreground/90">
                                    I believe in continuous learning and innovation. Technology is always evolving, and I love the challenge of keeping up with the latest advancements while refining my skills. My goal is to build impactful, user-centric solutions that make a difference, whether through cutting-edge web applications, automation tools, or interactive experiences.
                                </p>
                            </div>

                            <div className={`transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: '600ms' }}>
                                <h3 className="text-xl font-semibold mb-3">Beyond Coding</h3>
                                <p className="text-foreground/90">
                                    When I’m not immersed in code, you’ll probably find me hiking in nature, reading books on technology or SciFi, or experimenting with new frameworks and libraries. I have a passion for automation and tool development, always looking for ways to make workflows more efficient. I also enjoy sharing my passion for technology with others in my personal circle; whether it's teaching friends to code, organizing game jams, or giving crash courses on subjects within my expertise.
                                </p>
                            </div>

                            <div className={`transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: '800ms' }}>
                                <div className="flex gap-4 mt-8">
                                    {/* Link to blog when its up */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
