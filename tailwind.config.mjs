const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Define the function before usage
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
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    50: "#f8f8f8",
                    100: "#e8e8e8",
                    200: "#d3d3d3",
                    300: "#a3a3a3",
                    400: "#737373",
                    500: "#525252",
                    600: "#404040",
                    700: "#262626",
                    800: "#171717",
                    900: "#0a0a0a",
                    950: "#030303",
                },
                secondary: {
                    50: "#f8f8f8",
                    100: "#e8e8e8",
                    200: "#d3d3d3",
                    300: "#a3a3a3",
                    400: "#737373",
                    500: "#525252",
                    600: "#404040",
                    700: "#262626",
                    800: "#171717",
                    900: "#0a0a0a",
                    950: "#030303",
                },
                accent: {
                    50: "#f8f8f8",
                    100: "#e8e8e8",
                    200: "#d3d3d3",
                    300: "#a3a3a3",
                    400: "#737373",
                    500: "#525252",
                    600: "#404040",
                    700: "#262626",
                    800: "#171717",
                    900: "#0a0a0a",
                    950: "#030303",
                },
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif",
                ],
                heading: ["Montserrat", "Inter", "system-ui", "sans-serif"],
            },
            spacing: {
                18: "4.5rem",
                22: "5.5rem",
                30: "7.5rem",
            },
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in",
                "fade-out": "fadeOut 0.5s ease-out",
                "slide-up": "slideUp 0.5s ease-out",
                "slide-down": "slideDown 0.5s ease-out",
                "slide-left": "slideLeft 0.5s ease-out",
                "slide-right": "slideRight 0.5s ease-out",
                "scale-in": "scaleIn 0.5s ease-out",
                "scale-out": "scaleOut 0.5s ease-out",
                "spin-slow": "spin 3s linear infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "bounce-slow": "bounce 3s infinite",
                float: "float 3s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeOut: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideLeft: {
                    "0%": { transform: "translateX(20px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideRight: {
                    "0%": { transform: "translateX(-20px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                scaleOut: {
                    "0%": { transform: "scale(1.1)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            aspectRatio: {
                portrait: "3/4",
                landscape: "4/3",
                ultrawide: "21/9",
            },
        },
    },
    extend: {
        extend: {
            animation: {
                "meteor-effect": "meteor 3s linear infinite",
            },
            keyframes: {
                meteor: {
                    "0%": {
                        transform: "translateX(0) translateY(0) rotate(215deg)",
                        opacity: "1",
                    },
                    "100%": {
                        transform:
                            "translateX(300px) translateY(300px) rotate(215deg)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            addVariablesForColors({ addBase, theme });
        },
    ],
};
