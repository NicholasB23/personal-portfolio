// src/data/projectsData.ts
import { Project } from '../types/projects.types';

const projectsData: Project[] = [
    {
        id: 1,
        title: 'Internal Administration Tool',
        description: "Internal tool integrated with Bulb's SaaS product allowing deeper controls not available natively",
        longDescription: "This administration tool was developed to extend the capabilities of Bulb's SaaS product. It provides administrators with enhanced control mechanisms, data visualization, and user management features not available in the native interface. The application was built with a React frontend and Flask backend, with SQLite for data storage.",
        technologies: ["JavaScript", "React", "Python", "Flask", "SQLite"],
        image: 'https://placehold.co/800x400/004d56/ffffff?text=Admin+Tool',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true
    },
    {
        id: 2,
        title: 'Web Game - Tower Idle',
        description: 'Incremental/Idle browser game featuring local and cloud saves purely using TypeScript',
        longDescription: "Tower Idle is an incremental browser game where players build and upgrade a tower to generate resources over time. The game features both local saving and cloud synchronization, allowing players to continue their progress across devices. Built with TypeScript and React, it implements complex game mechanics while maintaining a lightweight and responsive user interface.",
        technologies: ["TypeScript", "React", "Vite"],
        image: 'https://placehold.co/800x400/008073/ffffff?text=Tower+Idle',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'Personal website highlighting professional experience and displaying current abilities',
        longDescription: "This portfolio website showcases my professional experience, skills, and projects. Built with modern web technologies including React, TypeScript, and Tailwind CSS, it features a responsive design, dark mode support, and smooth transitions between pages. The site demonstrates my front-end development skills and attention to design details.",
        technologies: ["TypeScript", "React", "TailwindCSS"],
        image: 'https://placehold.co/800x400/00a99d/ffffff?text=Portfolio',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'Interactive weather dashboard with location-based forecasts and historical data visualization',
        longDescription: "A weather dashboard application that provides real-time weather information, forecasts, and historical weather data visualization. Users can search for locations, save favorites, and view detailed weather metrics. The application leverages multiple weather APIs and implements responsive charts for data visualization.",
        technologies: ["JavaScript", "React", "Chart.js", "API Integration"],
        image: 'https://placehold.co/800x400/00c6b7/ffffff?text=Weather+App',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false
    },
    {
        id: 5,
        title: 'E-commerce Platform',
        description: 'Full-featured online store with product catalog, shopping cart, and payment processing',
        longDescription: "A complete e-commerce solution built with React and Node.js. Features include product catalog with filtering and search, user authentication, shopping cart functionality, secure payment processing, and order management. The platform is designed for scalability and easy customization for different business needs.",
        technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Stripe"],
        image: 'https://placehold.co/800x400/00e4d0/ffffff?text=E-commerce',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false
    }
];

export default projectsData;
