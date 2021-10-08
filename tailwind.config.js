// @preval
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  darkMode: 'class',
  theme: {
    /**
     * I've re-exported some keys intentionally in order
     * to use the values from `~/stitches.config.ts`
     */
    extend: {
      screen: defaultTheme.screens,
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: {
          dark: defaultTheme.colors.gray[50],
          DEFAULT: defaultTheme.colors.gray[800],
        },
        body: {
          dark: defaultTheme.colors.black,
          DEFAULT: defaultTheme.colors.gray[100],
        },
        muted: {
          dark: defaultTheme.colors.gray[400],
          DEFAULT: defaultTheme.colors.gray[600],
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
