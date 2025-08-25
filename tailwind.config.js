/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdead6',
          200: '#fbd2ac',
          300: '#f8b077',
          400: '#f48340',
          500: '#f1651a',
          600: '#e24d10',
          700: '#bb3810',
          800: '#952d15',
          900: '#782714',
        },
      },
    },
  },
  plugins: [],
}