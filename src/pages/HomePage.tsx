
function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Welcome to My Portfolio</h1>
            <p className="text-lg text-center mb-8">
                I'm a passionate developer focused on creating beautiful, functional web applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background rounded-lg shadow-xl p-6">
                    <h2 className="text-xl font-semibold mb-3">My Skills</h2>
                    <ul className="list-disc pl-5">
                        <li>React & TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>And more...</li>
                    </ul>
                </div>
                <div className="bg-background rounded-lg shadow-xl p-6">
                    <h2 className="text-xl font-semibold mb-3">Featured Projects</h2>
                    <p>Check out my work in the projects section!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
