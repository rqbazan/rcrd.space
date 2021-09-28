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
        text: '#ffffff',
        body: '#0D0E12',
        muted: '#B1B1B1',
        riqra: '#3679FB',
        selection: '#FFD29D',
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
