/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Igloo uses a heavy monospace hierarchy
        sans: ['"IBM Plex Mono"', 'monospace'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'], // Keep Syne for artistic headers
      },
      colors: {
        // The specific Igloo grey-blue background
        bg: '#A0A5B1',
        // High contrast text
        primary: '#1a1a1a',
        // Soft white for panels
        panel: 'rgba(255, 255, 255, 0.4)',
        // Accent is now subtle/industrial
        accent: '#FFFFFF', 
        border: 'rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}