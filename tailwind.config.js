const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const twFiltersPlugin = require('tailwindcss-filters')

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains\\ Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        body: {
          DEFAULT: colors.gray[100],
          dark: colors.gray[900]
        },
        wording: {
          DEFAULT: colors.gray[900],
          dark: colors.gray[100]
        },
        accent: {
          DEFAULT: colors.yellow[300],
          dark: colors.blue[700]
        }
      },
      backdropFilter: {
        'blur-4': 'blur(4px)'
      },
      filter: {
        'contrast-200': 'contrast(200%)'
      }
    }
  },
  variants: {
    filter: ['responsive', 'dark']
  },
  plugins: [twFiltersPlugin]
}
