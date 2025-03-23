/** @type {import('tailwindcss').Config} */
import tailwindAnimate from "tailwindcss-animate"

export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					darker: 'hsl(var(--primary-darker))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"draw-circle": {
					"0%": { strokeDashoffset: "307" },
					"100%": { strokeDashoffset: "0" },
				},
				"slide-in-right": {
					"0%": {
						transform: "translateX(-20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1"
					}
				},
				"slide-in-bottom": {
					"0%": {
						transform: "translateY(20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1"
					}
				},
				"bounce-in": {
					"0%": {
						transform: "scale(0.3)",
						opacity: "0"
					},
					"50%": {
						transform: "scale(1.05)",
						opacity: "0.8"
					},
					"70%": {
						transform: "scale(0.9)",
						opacity: "0.9"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'draw-circle': 'draw-circle 0.8s ease-in-out forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
				'slide-in-bottom': 'slide-in-bottom 0.6s ease-out forwards',
				'bounce-in': 'bounce-in 0.6s ease-out forwards'
			},
			backgroundImage: {
				'grid-pattern': `
					linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, hsl(var(--background)) 100%),
					linear-gradient(to bottom right, transparent 0%, transparent 100%),
					linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
					linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
				`,
				'grid-pattern-dark': `
					linear-gradient(to bottom right, rgba(30, 41, 59, 0) 0%, hsl(var(--background)) 100%),
					linear-gradient(to bottom right, transparent 0%, transparent 100%),
					linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
					linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
				`,
			},
			backgroundSize: {
				'grid': '100% 100%, 100% 100%, 75px 75px, 75px 75px',
			},

			boxShadow: {
				"deep-shadow": "rgb(38, 57, 77) 0px 20px 50px -10px"
			}

		}
	},
	plugins: [tailwindAnimate],
}
