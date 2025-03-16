const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette =
    require("tailwindcss/lib/util/flattenColorPalette").default;
const svgToDataUri = require("mini-svg-data-uri");

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class", "class"],
    theme: {
    	extend: {
    		boxShadow: {
    			input: '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)'
    		},
    		animation: {
    			'meteor-effect': 'meteor 5s linear infinite',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		keyframes: {
    			meteor: {
    				'0%': {
    					transform: 'rotate(215deg) translateX(0px)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(215deg) translateX(-500px)',
    					opacity: '0'
    				}
    			},
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
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
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
    				foreground: 'hsl(var(--primary-foreground))'
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
    			ring: 'hsl(var(--ring))'
    		}
    	}
    },
    plugins: [
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "bg-grid": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                        maskImage:
                            "radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)",
                        WebkitMaskImage:
                            "radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)",
                    }),
                    "bg-grid-small": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                        maskImage:
                            "radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)",
                        WebkitMaskImage:
                            "radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)",
                    }),
                    "bg-dot": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="${value}">
                                <circle cx="6" cy="6" r="2"/>
                            </svg>`
                        )}")`,
                        backgroundSize: "16px 16px",
                    }),
                    "bg-dot-small": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="8" height="8" fill="${value}"><circle cx="2" cy="2" r="1"/><circle cx="6" cy="2" r="1"/><circle cx="2" cy="6" r="1"/><circle cx="6" cy="6" r="1"/></svg>`
                        )}")`,
                        maskImage:
                            "radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)",
                        WebkitMaskImage:
                            "radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)",
                    }),
                },
                {
                    values: flattenColorPalette(theme("colors")),
                    type: "color",
                }
            );
        },
        function ({ addBase, theme }) {
            addVariablesForColors({ addBase, theme });
        },
        require("tailwindcss-animate"),
        require("tailwindcss-filters"),
    ],
};
