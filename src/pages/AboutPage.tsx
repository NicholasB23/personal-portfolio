
function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                <p className="mb-4">
                    Hello! I'm a full-stack developer with a passion for building modern web applications.
                    I specialize in React, TypeScript, and various backend technologies.
                </p>
                <p className="mb-4">
                    With over 5 years of experience in the industry, I've worked on a variety of projects
                    ranging from small business websites to large-scale enterprise applications.
                </p>
                <p className="mb-4">
                    When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
                </p>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-3">Experience</h2>
                    <ul className="list-disc pl-5">
                        <li>Senior Developer at TechCorp (2020-Present)</li>
                        <li>Frontend Developer at WebSolutions (2018-2020)</li>
                        <li>Junior Developer at StartupXYZ (2016-2018)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
