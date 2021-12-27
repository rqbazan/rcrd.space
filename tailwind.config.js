// @preval
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  darkMode: 'class',
  theme: {
    /**
     * I've re-exported some keys intentionally in order
     * to use the values from `~/stitches.config.ts`
     */
    extend: {
      screens: defaultTheme.screens,
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: {
          dark: defaultColors.gray[50],
          DEFAULT: defaultColors.gray[800],
        },
        body: {
          dark: defaultColors.black,
          DEFAULT: defaultColors.gray[100],
        },
        muted: {
          dark: defaultColors.gray[400],
          DEFAULT: defaultColors.gray[600],
        },
        selection: {
          dark: '#ffa73c',
          DEFAULT: '#374151',
        },
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      fontSize: {
        small: 12,
        p: 14,
        h5: 13,
        h4: 20,
        h3: 24,
        h2: 32,
        h1: 40,
      },
    },
  },
}
