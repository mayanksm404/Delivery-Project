/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'border-fade':{
          '0%':{opacity : 0},
          '100%':{opacity : 1},
        },
        'rotate-full':{
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation:{
        'border-fade': 'border-fade 3s ease',
        'fadeIn' : 'fadeIn 0.5s ease-in-out',
        'rotate': 'rotate-full 1s infinite'
      },
      gridTemplateColumns: {
        'custom': '2fr 1fr 1fr',
        'custom2': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
        'custom3': '0.5fr 2fr 1fr 1fr 2fr 1fr',
        'custom4': '1fr 2fr 1fr',
      },
      screens: {
        'max-xs': { 'max': '480px' },
        'max-sm': { 'max': '640px' },
        'max-md': { 'max': '768px' },
        'max-md1': { 'max': '900px' },
        'max-lg': { 'max': '1024px' },
        'max-xl': { 'max': '1280px' },
        'max-2xl': { 'max': '1536px' },
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}

