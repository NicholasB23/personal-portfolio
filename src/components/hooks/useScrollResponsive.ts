// src/components/hooks/useScrollResponsive.ts
import { useTheme, ScreenSize } from "../ThemeProvider";
import useScrollAnimation from "./useScrollAnimation";

export interface ScrollResponseValues {
    transformValue: number;
    titleFontSize: number;
    subtitleFontSize: number;
    isFixed: boolean;
    isMediumScreen: boolean;
}

const useScrollResponsive = (): ScrollResponseValues => {
    const scrollY = useScrollAnimation();
    const { isBreakpoint } = useTheme();

    // Calculate the transform value based on scroll position and screen size
    const getTransformValue = (): number => {
        if (!scrollY) return 0;

        // Adjust scroll divisor based on screen size from ThemeProvider
        let scrollDivisor = 2; // Default (medium screens)

        if (isBreakpoint(ScreenSize.XXL) || isBreakpoint(ScreenSize.XL)) {
            scrollDivisor = 8; // Fastest movement on very large screens
        } else if (isBreakpoint(ScreenSize.LG)) {
            scrollDivisor = 2; // Faster movement on large screens
        } else if (isBreakpoint(ScreenSize.MD)) {
            scrollDivisor = 2; // Default medium movement
        } else {
            scrollDivisor = 3; // Slower movement on small screens
        }

        return Math.min(scrollY / scrollDivisor, 100);
    };

    // Calculate font size reduction based on screen size and scroll
    const getTitleFontSize = (): number => {
        // Base sizes for different screen sizes
        let baseSize: number;
        let minSize: number;
        let scrollImpact: number;

        if (isBreakpoint(ScreenSize.XXL)) {
            baseSize = 96; // Larger base size for extra large screens
            minSize = 64;   // Larger minimum size
            scrollImpact = 0.12; // Stronger scroll effect
        } else if (isBreakpoint(ScreenSize.XL)) {
            baseSize = 64;
            minSize = 50;
            scrollImpact = 0.11;
        } else if (isBreakpoint(ScreenSize.LG)) {
            baseSize = 104;
            minSize = 70;
            scrollImpact = 0.1;
        } else if (isBreakpoint(ScreenSize.MD)) {
            baseSize = 96;  // Original base size for medium screens
            minSize = 64;   // Original minimum size
            scrollImpact = 0.1; // Original scroll impact
        } else {
            // Small screens get a fixed size with no scroll impact
            return 42; // Fixed size for small screens
        }

        // Calculate and return the size with scroll impact
        return Math.max(minSize, baseSize - (scrollY * scrollImpact));
    };

    const getSubtitleFontSize = (): number => {
        // Base sizes for different screen sizes
        let baseSize: number;
        let minSize: number;
        let scrollImpact: number;

        if (isBreakpoint(ScreenSize.XXL)) {
            baseSize = 42; // Larger for extra large screens
            minSize = 30;
            scrollImpact = 0.03;
        } else if (isBreakpoint(ScreenSize.XL)) {
            baseSize = 38;
            minSize = 28;
            scrollImpact = 0.025;
        } else if (isBreakpoint(ScreenSize.LG)) {
            baseSize = 34;
            minSize = 26;
            scrollImpact = 0.022;
        } else if (isBreakpoint(ScreenSize.MD)) {
            baseSize = 32; // Original base size
            minSize = 24; // Original minimum
            scrollImpact = 0.02; // Original scroll impact
        } else {
            // Small screens get a fixed size with no scroll impact
            return 24; // Fixed size for small screens
        }

        // Calculate and return the size with scroll impact
        return Math.max(minSize, baseSize - (scrollY * scrollImpact));
    };

    // Calculate values
    const transformValue = getTransformValue();
    const titleFontSize = getTitleFontSize();
    const subtitleFontSize = getSubtitleFontSize();

    // Determine if the content should be fixed (sticky) based on scroll position
    // After scrolling 200px, it will become fixed
    const isFixed = scrollY > 180;

    // Check if we're at least at medium breakpoint
    const isMediumScreen = isBreakpoint(ScreenSize.MD);

    return {
        transformValue,
        titleFontSize,
        subtitleFontSize,
        isFixed,
        isMediumScreen
    };
};

export default useScrollResponsive;
