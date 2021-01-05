const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

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
      padding: {
        '10vw': '10vw'
      }
    }
  },
  variants: {},
  plugins: []
}
