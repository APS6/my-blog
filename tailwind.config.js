/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      headWhite: '#F1F1F2',
      textWhite: '#D1D1D2',
    },
    fontFamily: {
      head: ['Libre Baskerville', 'serif'],
      text: ['Source Sans 3', 'sans-serif'],
    },
    extend: {
      
    },
  },
  plugins: [],
}
