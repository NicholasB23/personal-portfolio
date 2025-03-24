import { cn } from "../lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Globe, Linkedin, Mail, MessageSquare, X } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface ContactPopupProps {
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}

const ContactPopup = ({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }: ContactPopupProps) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const [animationState, setAnimationState] = useState<
        "idle" | "wiggle" | "pop"
    >("idle");

    // Determine if we're using internal or external state
    const isControlled = externalIsOpen !== undefined && externalSetIsOpen !== undefined;
    const isOpen = isControlled ? externalIsOpen : internalIsOpen;
    const setIsOpen = isControlled ? externalSetIsOpen : setInternalIsOpen;

    useEffect(() => {
        if (isOpen) return;

        const animationInterval = setInterval(() => {
            // Randomly choose between wiggle, pop, or no animation
            const random = Math.random();
            if (random < 0.3) {
                setAnimationState("wiggle");
                setTimeout(() => setAnimationState("idle"), 1000);
            } else if (random < 0.5) {
                setAnimationState("pop");
                setTimeout(() => setAnimationState("idle"), 500);
            }
        }, 2000);

        return () => clearInterval(animationInterval);
    }, [isOpen]);

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
            icon: <SiGithub color="default" className="w-5 h-5 dark:fill-white" />,
            href: "https://github.com/NicholasB23",
            color: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
            hoverColor: "hover:bg-gray-200 dark:hover:bg-gray-700",
        },
        {
            name: "Resume",
            icon: <Globe className="w-5 h-5" />,
            href: "https://n-i-ck.com/resume",
            color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
            hoverColor: "hover:bg-purple-200 dark:hover:bg-purple-900/50",
        },
    ];

    return (
        <div className="fixed z-40 bottom-16 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12">
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>
                    <Button
                        size="lg"
                        className={cn(
                            "rounded-full shadow-lg flex items-center gap-2 bg-gradient-to-r from-primary to-primary-darker text-white hover:from-primary/70 hover:to-primary-darker/70 transition-all",
                            animationState === "wiggle" && "animate-wiggle",
                            animationState === "pop" && "animate-pop"
                        )}
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span className="font-medium">Contact Me</span>
                    </Button>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0" />
                    <Dialog.Content className="fixed w-full max-w-md p-6 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl left-1/2 top-1/2 dark:bg-background rounded-xl animate-in fade-in-0 zoom-in-95">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-darker">
                                    Let's Connect!
                                </h3>
                                <span className="text-sm font-medium">
                                    I'd love to hear from you
                                </span>
                            </div>

                            <Dialog.Close asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="w-5 h-5" />
                                </Button>
                            </Dialog.Close>
                        </div>

                        <div className="space-y-4">
                            <p className="">
                                Feel free to reach out through any of these
                                channels:
                            </p>

                            <div className="grid gap-3">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 p-4 rounded-lg transition-all ${link.color} ${link.hoverColor} hover:scale-105`}
                                    >
                                        <div className="p-2 bg-white rounded-full dark:bg-gray-950">
                                            {link.icon}
                                        </div>
                                        <span className="font-medium dark:text-white">
                                            {link.name}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                    I'm currently open to new opportunities!
                                </p>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
};

export default ContactPopup;
