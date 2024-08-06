/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom1': '1fr 3fr 1fr',
        'custom2': '0.5fr 2fr 1fr 1fr 0.5fr',
        'custom3': '0.5fr 2fr 1fr 1fr 1fr',
        'custom4': '0.5fr 2fr 1fr',
      },
      screens: {
        'max-xs': { 'max': '480px' },
        'max-sm': { 'max': '600px' },
        'max-md': { 'max': '768px' },
        'max-md1': { 'max': '900px' },
        'max-lg': { 'max': '1024px' },
        'max-xl': { 'max': '1280px' },
        'max-2xl': { 'max': '1536px' },
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}

