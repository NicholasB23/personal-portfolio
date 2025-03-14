import { ReactNode, useEffect, useState } from "react"

interface AnimatedCircleProps {
    children: ReactNode;
}

export default function AnimatedCircle({ children }: AnimatedCircleProps) {
    const [isAnimating, setIsAnimating] = useState(false)

    // Restart animation every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsAnimating(false)
            setTimeout(() => setIsAnimating(true), 100)
        }, 5000)

        setIsAnimating(true)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="relative flex items-center justify-center">
            {/* Circle container */}
            <div className="h-16 w-16 rounded-full bg-white p-1">
                {/* Inner content */}
                <div className="h-full w-full rounded-full bg-gray-100 flex items-center justify-center">
                    {children}
                </div>
            </div>

            {/* Animated border overlay */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className={`text-primary ${isAnimating ? "animate-draw-circle" : ""}`}
                    style={{
                        strokeDasharray: 307, // Approximately 2πr where r=49
                        strokeDashoffset: isAnimating ? 0 : 307,
                        transition: isAnimating ? "stroke-dashoffset 4s ease-in-out" : "none",
                    }}
                />
            </svg>
        </div>
    )
}
