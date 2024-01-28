/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      spectral: ['Spectral, serif, system-ui']
    },
    extend: {
      backgroundImage: {
        'boss-hidden': "url('/boss-default.jpg')"
      },
      boxShadow: {
        'inner-dark': 'inset 0px 0px 5px 8px rgba(24, 24, 27, 1)',
        'inner-light': 'inset 0px 0px 5px 8px rgba(63, 63, 70, 1)'
      },
      dropShadow: {
        red: '0 1px 5px rgba(239, 68, 68, 1)'
      }
    },
    animation: {
      pulse: 'pulse 1500ms cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    screens: {
      xs: '450px',
      sm: '669px',
      md: '768px',
      lg: '900px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
