/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020617",            // main background
        surface: "rgba(15,23,42,0.85)",
        accent: "#38bdf8",        // cyan
        accentSoft: "#a855f7"     // purple
      },
      boxShadow: {
        "glow-accent": "0 0 40px rgba(56,189,248,0.35)",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};