/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-base': '#039860',
        'red-base': '#9F2700',
        'yellow-base': '#ffc66a',
      },
    },
    fontFamily: {
      lexend: ['Lexend Peta'],
    },
  },
  plugins: [],
}
