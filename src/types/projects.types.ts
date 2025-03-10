
export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    technologies: Array<string>;
    image: string;
    githubUrl?: string;
    liveUrl?: string;
}
