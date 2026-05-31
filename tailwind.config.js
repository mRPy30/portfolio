/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Clash Display', 'Syne', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Satoshi', 'Inter', 'sans-serif'],
      },
      colors: {
        maroon: {
          900: '#800020',
          950: '#4c0519',
        },
      },
    },
  },
  plugins: [],
}
