import { useEffect, useState } from 'react';


const useScrollAnimation = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Initial calculation
        handleScroll();

        // Add scroll event listener with passive flag for performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
};

export default useScrollAnimation;
