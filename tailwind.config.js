/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8C7A61',
        background: '#F9F5EB'
      }
    },
  },
  plugins: [],
} 