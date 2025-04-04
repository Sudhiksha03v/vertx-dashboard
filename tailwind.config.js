/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#171717',
        secondary: '#1E1E1E',
        accent: '#333333',
        'chart-line': '#FFFFFF',
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
        'nav-inactive': '#555555',
        'border-dark': '#1D1D1D',
      },
    },
  },
  plugins: [],
} 