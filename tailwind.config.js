/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'physio-green': '#4CAF50', // Die grüne Farbe aus dem Logo
      },
    },
  },
  plugins: [],
} 