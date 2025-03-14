import { Monitor, Code, Smartphone } from 'lucide-react';

const ExpertiseSection = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold text-center mb-16">My Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Software Development */}
                    <div className="border border-border p-6 bg-card text-card-foreground hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <Monitor className="w-8 h-8 mr-3" />
                            <h3 className="text-xl font-bold">
                                Software
                                <br />
                                Development
                            </h3>
                        </div>
                        <p className="text-muted-foreground">
                            Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
                        </p>
                    </div>

                    {/* Frontend Dev */}
                    <div className="border border-border p-6 bg-card text-card-foreground hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <Code className="w-8 h-8 mr-3" />
                            <h3 className="text-xl font-bold">
                                Frontend Dev
                                <br />
                                React, NextJS
                            </h3>
                        </div>
                        <p className="text-muted-foreground">
                            Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
                        </p>
                    </div>

                    {/* Flutter Dev */}
                    <div className="border border-border p-6 bg-card text-card-foreground hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <Smartphone className="w-8 h-8 mr-3" />
                            <h3 className="text-xl font-bold">
                                Flutter Dev
                                <br />
                                Android, iOS
                            </h3>
                        </div>
                        <p className="text-muted-foreground">
                            Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseSection;
