// src/data/projectsData.ts
import { Project } from '../types/projects.types';

const projectsData: Project[] = [
    {
        id: 1,
        title: 'Internal Administration Tool',
        description: "Internal tool extending Bulb's SaaS product with advanced controls beyond the native interface.",
        longDescription: "This administration tool was developed to extend the capabilities of Bulb's SaaS product, providing administrators with enhanced control mechanisms, data visualization, and user management features not available in the native interface. Internally, it empowered our customer support team to manage accounts, improving efficiency and responsiveness. The application was built with a React frontend and Flask backend, utilizing Postgres for data storage on AWS RDS. To ensure refined access control, I implemented an access control list (ACL), allowing granular permission management for individual team members.",
        technologies: ["JavaScript", "React", "Python", "Flask", "PostgreSQL", "Docker", "AWS", "Git"],
        image: 'https://placehold.co/800x400/004d56/ffffff?text=Admin+Tool',
        githubUrl: '',
        liveUrl: '',
        featured: true,
        keyFeatures: [
            "Seamless API Integration – Connects with existing systems for extended functionality.",
            "Google SSO with Org Filtering – Restricts access to approved organizations.",
            "CI/CD via GitHub Actions – Automates deployment for reliability and efficiency.",
            "Docker on AWS ECS – Ensures scalable and containerized infrastructure.",
            "Comprehensive Audit Logging – Tracks user actions for security and compliance."
        ]
    },
    {
        id: 2,
        title: 'Web Game - Tower Idle',
        description: 'Incremental/Idle browser game featuring local and cloud saves purely using TypeScript',
        longDescription: "Tower Idle is an incremental browser game where players generate resources to build and upgrade a tower over time. The game features both local saving and cloud synchronization, allowing players to continue their progress across devices. Built with TypeScript and React, it implements complex game mechanics while maintaining a lightweight and responsive user interface.",
        technologies: ["TypeScript", "React", "Vite", "TailwindCSS", "CloudFlare"],
        image: 'https://placehold.co/800x400/008073/ffffff?text=Tower+Idle',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true,
        keyFeatures: [
            "Progressive resource generation mechanics",
            "Cross-device save synchronization",
            "Dynamic upgrade tree and achievements system",
            "Offline progression calculation",
            "Custom animations and visual effects"
        ]
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'Personal website highlighting professional experience and displaying current abilities.',
        longDescription: "This portfolio website showcases my professional experience, skills, and projects. Built with modern web technologies including React, TypeScript, and Tailwind CSS, it features a responsive design, dark mode support, and smooth transitions between pages. The site demonstrates my front-end development skills and attention to design details.",
        technologies: ["React", "TypeScript", "TailwindCSS", "Git", "CloudFlare"],
        image: 'https://placehold.co/800x400/00a99d/ffffff?text=Portfolio',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true,
        keyFeatures: [
            "Responsive design for all device sizes",
            "Dark mode support with system preference detection",
            "Smooth page transitions and animations",
            "Interactive project showcases",
            "Performance optimized loading and rendering"
        ]
    },
    {
        id: 4,
        title: 'OpenAPI Gateway - WIP',
        description: 'A web-based OpenAPI interface that allows users to upload an OpenAPI schema and interact with its endpoints.',
        longDescription: "OpenAPI Gateway is a powerful web interface designed to simplify API interaction and management. Users can upload an OpenAPI schema and instantly access all included endpoints, making API testing and usage seamless. The platform also enables API owners to invite collaborators and define granular permissions, ensuring controlled access to specific endpoints. A built-in request log provides full visibility into API activity, enabling auditing and security monitoring.",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        image: 'https://placehold.co/800x400/00c6b7/ffffff?text=Weather+App',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false,
        keyFeatures: [
            "Schema Upload & Endpoint Access – Instantly interact with all endpoints in an uploaded OpenAPI schema.",
            "User Access Control – Invite users and define fine-grained permissions for endpoint access.",
            "Request Logging & Auditing – Track and review all API interactions for security and troubleshooting.",
            "Intuitive Web Interface – A user-friendly UI for seamless API exploration and management.",
            "Collaboration & Sharing – Easily share API access with team members while maintaining security."
        ]
    }
];

export default projectsData;
