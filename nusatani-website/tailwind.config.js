/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nusa-dark': '#1a4d2e',
        'nusa-green': '#2d6a4f',
        'nusa-leaf': '#52b788',
        'nusa-cream': '#f5f0e6',
        'nusa-brown': '#8b5a2b',
        'nusa-earth': '#6b4423',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

