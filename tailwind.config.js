const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.css'],
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
        accent: {
          DEFAULT: colors.red[500],
          dark: colors.blue[600]
        },
        title: {
          DEFAULT: colors.gray[900],
          dark: colors.gray[100]
        },
        wording: {
          DEFAULT: colors.gray[600],
          dark: colors.gray[300]
        },
        gray: {
          transparent: 'rgba(255,255,255,0.2)'
        }
      }
    }
  }
}
