import { useState, useEffect, RefObject } from 'react';

/**
 * Hook that tracks whether an element is in the viewport
 * @param ref Reference to the element to track
 * @param options IntersectionObserver options
 * @param once If true, the hook will only trigger once when element comes into view
 * @returns Boolean indicating if the element is in view
 */
const useInView = (
    ref: RefObject<HTMLElement>,
    options: IntersectionObserverInit = {},
    once: boolean = false
) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        // Early return if ref doesn't exist or browser doesn't support IntersectionObserver
        if (!ref.current || typeof IntersectionObserver === 'undefined') {
            // Fallback to true if IntersectionObserver isn't supported
            if (typeof IntersectionObserver === 'undefined') {
                setIsInView(true);
            }
            return;
        }

        const observedElement = ref.current;

        // Use default options if not provided
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px',
            ...options
        };

        // Create observer
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            if (entry) {
                if (entry.isIntersecting) {
                    setIsInView(true);

                    // If once is true, disconnect the observer after element comes into view
                    if (once) {
                        observer.disconnect();
                    }
                } else if (!once) {
                    setIsInView(false);
                }
            }
        }, defaultOptions);

        // Start observing
        observer.observe(observedElement);

        // Cleanup on unmount
        return () => {
            if (observedElement) {
                observer.unobserve(observedElement);
            }
            observer.disconnect();
        };
    }, [ref, JSON.stringify(options), once]); // Stringify options to avoid unnecessary re-renders

    return isInView;
};

export default useInView;
