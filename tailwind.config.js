/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f8fafc',  // Slate 50
          dark: '#0f172a',   // Slate 900
          cardLight: '#ffffff',
          cardDark: '#1e293b', // Slate 800
          primary: '#3b82f6', // Blue 500
          accent: '#2563eb', // Blue 600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
      }
    },
  },
  plugins: [],
}
