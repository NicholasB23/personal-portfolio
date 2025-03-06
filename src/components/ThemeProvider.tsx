import { createContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    darkMode: false,
    toggleDarkMode: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Check local storage or prefer-color-scheme on initial load
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
            return savedTheme === 'true';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Toggle function
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Update local storage and apply class to document when darkMode changes
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
