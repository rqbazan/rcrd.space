/**
 * I've re-declared intentionally in order to use the values from `~/stitches.config.ts`
 */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: [
          'var(--font-ibm-plex-sans)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      colors: {
        text: {
          dark: '#fff',
          DEFAULT: '#1f2937',
        },
        body: {
          dark: '#1D1D1E',
          DEFAULT: '#fff6e3',
        },
        muted: {
          dark: '#9ca3af',
          DEFAULT: '#4b5563',
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
        tiny: '0.5rem',
        small: '0.75rem',
        p: '0.875rem',
        h5: '0.8125rem',
        h4: '1.25rem',
        h3: '1.5rem',
        h2: '2rem',
        h1: '2.5rem',
      },
    },
  },
}
