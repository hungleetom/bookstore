// Tailwind CSS Configuration
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Changed font family 하지만 한국어라 안됨
      },
      colors: {
        primary: "#6D28D9", // Purple
        secondary: "#EC4899", // Pink
        dark: "#333333", // Dark gray
        light: "#F4F4F4", // Light gray
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: "1.5rem", // Default padding increased
          sm: "4rem", // Small screen padding increased
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
