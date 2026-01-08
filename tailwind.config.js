/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#541499',
        secondary: '#7c3aed',
        accent: '#64748b',
        'light-purple': '#f3e8ff',
        'dark-blue': '#0a1045', // Deep blue from the design
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      },
    },
  },
  plugins: [],
}
