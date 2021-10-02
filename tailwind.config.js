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
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: {
          dark: defaultTheme.colors.gray[50],
          DEFAULT: defaultTheme.colors.gray[900],
        },
        body: {
          dark: '#0D0E12',
          DEFAULT: defaultTheme.colors.yellow[100],
        },
        muted: {
          dark: '#B1B1B1',
          DEFAULT: defaultTheme.colors.gray[600],
        },
        selection: {
          dark: '#FFD29D',
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
