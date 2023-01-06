/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'], // css tree-shaking
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}