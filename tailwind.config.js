/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,js}"],
  corePlugins: {
    container: false,
  },

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1320px',
    },
    colors: {
      black: '#231F20',
      white: ' #FFFFFF',
      beige: "#FDF7F2",
      paleOrange: "#FADFCC",
      red: '#EB4E44',
      gray: {
        50: "#F1EFED",
        100: '#E3E3E3',
        200: '#A09E9B',
        250: '#7F7F7F',
        300: '#504E4D',
        350: '#C1C1C1',
        400: '#d1d1d1'
      },


    },
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
      serif: ['Oceanic', 'serif'],
    },
    fontSize: false,
    container: {
      center: true,
      padding: '1rem',
    }
    ,
    extend: {
      backgroundImage: {
        'checked': "url('../assets/images/check.svg')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-group-even-odd'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          margin: '0 auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ],
}