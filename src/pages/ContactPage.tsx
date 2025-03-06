import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState<{
        submitted: boolean;
        success: boolean;
        message: string;
    } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send the form data to a server
        console.log('Form submitted:', formData);

        // Simulate form submission
        setFormStatus({
            submitted: true,
            success: true,
            message: 'Thanks for your message! I\'ll get back to you soon.'
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                {formStatus?.submitted ? (
                    <div className={`p-4 rounded ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {formStatus.message}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>
                )}

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-3">Other Ways to Reach Me</h2>
                    <div className="space-y-2">
                        <p>
                            <span className="font-medium">Email:</span> contact@example.com
                        </p>
                        <p>
                            <span className="font-medium">LinkedIn:</span>{' '}
                            <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">
                                linkedin.com/in/yourprofile
                            </a>
                        </p>
                        <p>
                            <span className="font-medium">GitHub:</span>{' '}
                            <a href="https://github.com" className="text-blue-600 hover:text-blue-800">
                                github.com/yourusername
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
