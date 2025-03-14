import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

// Define breakpoint enum
export enum ScreenSize {
    SM = "sm",     // 640px
    MD = "md",     // 768px
    LG = "lg",     // 1024px
    XL = "xl",     // 1280px
    XXL = "2xl"    // 1536px
}

// Define the context type with theme and responsive properties
type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isLargeDesktop: boolean;
    isExtraLargeDesktop: boolean;
    // Helper function to check if we're at or above a specific breakpoint
    isBreakpoint: (breakpoint: ScreenSize) => boolean;
    // Current breakpoint
    currentBreakpoint: ScreenSize | null;
};

// Create context with default values
export const ThemeContext = createContext<ThemeContextType>({
    darkMode: false,
    toggleDarkMode: () => { },
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    isExtraLargeDesktop: false,
    isBreakpoint: () => false,
    currentBreakpoint: null,
});

// Hook for easy access to theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Check local storage or prefer-color-scheme on initial load
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
            return savedTheme === 'true';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Media queries using react-responsive
    const isMobile = useMediaQuery({ maxWidth: 639 });
    const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const isLargeDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1535 });
    const isExtraLargeDesktop = useMediaQuery({ minWidth: 1536 });

    // Determine current breakpoint
    const [currentBreakpoint, setCurrentBreakpoint] = useState<ScreenSize | null>(null);

    // Update current breakpoint when media queries change
    useEffect(() => {
        if (isExtraLargeDesktop) {
            setCurrentBreakpoint(ScreenSize.XXL);
        } else if (isLargeDesktop) {
            setCurrentBreakpoint(ScreenSize.XL);
        } else if (isDesktop) {
            setCurrentBreakpoint(ScreenSize.LG);
        } else if (isTablet) {
            setCurrentBreakpoint(ScreenSize.MD);
        } else if (isMobile) {
            setCurrentBreakpoint(ScreenSize.SM);
        } else {
            setCurrentBreakpoint(null);
        }
    }, [isMobile, isTablet, isDesktop, isLargeDesktop, isExtraLargeDesktop]);

    // Helper function to check if we're at or above a specific breakpoint
    const isBreakpoint = (breakpoint: ScreenSize): boolean => {
        if (!currentBreakpoint) return false;

        const breakpoints = [ScreenSize.SM, ScreenSize.MD, ScreenSize.LG, ScreenSize.XL, ScreenSize.XXL];
        const currentIndex = breakpoints.indexOf(currentBreakpoint);
        const targetIndex = breakpoints.indexOf(breakpoint);

        return currentIndex >= targetIndex;
    };

    // Toggle function for dark mode
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
        <ThemeContext.Provider value={{
            darkMode,
            toggleDarkMode,
            isMobile,
            isTablet,
            isDesktop,
            isLargeDesktop,
            isExtraLargeDesktop,
            isBreakpoint,
            currentBreakpoint
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
