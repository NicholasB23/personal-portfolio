import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import {
    Moon,
    Sun,
    Menu,
    Home,
    User,
    FolderGit2,
    Send
} from 'lucide-react';
import { Button } from './ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "./ui/navigation-menu";
import ContactPopup from './ContactPopup';

function Navbar() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Fix for errors: Cast to Element type which has the closest() method
            const target = event.target as Element;
            if (isMenuOpen && target && !target.closest('.md\\:hidden')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const navLinkClass = ({ isActive }: { isActive: boolean }) => {
        return `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`;
    };

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsContactOpen(true);
    };

    return (
        <nav className="bg-background sticky top-0 z-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-primary font-bold text-xl flex items-center">
                                NickB's Portfolio
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block ml-10">
                            <NavigationMenu>
                                <NavigationMenuList className="flex gap-2">
                                    <NavigationMenuItem>
                                        <NavLink to="/" className={({ isActive }) => navLinkClass({ isActive })}>
                                            <Home size={18} />
                                            <span>Home</span>
                                        </NavLink>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavLink to="/projects" className={({ isActive }) => navLinkClass({ isActive })}>
                                            <FolderGit2 size={18} />
                                            <span>Projects</span>
                                        </NavLink>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavLink to="/about" className={({ isActive }) => navLinkClass({ isActive })}>
                                            <User size={18} />
                                            <span>About</span>
                                        </NavLink>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <a
                                            href="#"
                                            onClick={handleContactClick}
                                            className={navLinkClass({ isActive: false })}
                                        >
                                            <Send size={18} />
                                            <span>Contact</span>
                                        </a>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Theme Toggle Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <Sun className="h-6 w-6" />
                            ) : (
                                <Moon className="h-6 w-6" />
                            )}
                        </Button>

                        {/* Mobile Navigation */}
                        <div className="md:hidden relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>

                            {isMenuOpen && (
                                <div
                                    id="mobile-menu"
                                    className="absolute right-0 mt-2 w-48 py-2 bg-background border border-border rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 z-50"
                                >
                                    <div className="flex flex-col p-2">
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${isActive
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                                }`
                                            }
                                            end
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Home size={18} />
                                            <span>Home</span>
                                        </NavLink>
                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${isActive
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                                }`
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <User size={18} />
                                            <span>About</span>
                                        </NavLink>
                                        <NavLink
                                            to="/projects"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${isActive
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                                }`
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <FolderGit2 size={18} />
                                            <span>Projects</span>
                                        </NavLink>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                handleContactClick(e);
                                                setIsMenuOpen(false);
                                            }}
                                            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                                        >
                                            <Send size={18} />
                                            <span>Contact</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ContactPopup with controlled open state */}
            <ContactPopup isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
        </nav>
    );
}

export default Navbar;
