import { darkTheme, globalCss } from '~/stitches.config'

export const globalStyles = globalCss({
  [`${darkTheme}`]: {},
  '@font-face': {
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'swap',
    src: "url(/fonts/ibm-plex-sans-var.woff2) format('woff2')",
  },
  html: {
    fontSize: 16,
    background: '$body',
    color: '$text',
    height: '100%',
  },
  body: {
    paddingLeft: 'calc(100vw - 100%)',
    height: '100%',
  },
  '#__next': {
    height: '100%',
  },
  '.Typewriter': {
    display: 'inline-block',
  },
  '*::-webkit-scrollbar': {
    width: 4,
  },
  '*::-webkit-scrollbar-track': {
    background: 'rgb(209, 213, 219)',
  },
  '*::-webkit-scrollbar-thumb': {
    background: 'rgb(107, 114, 128)',
    '&:hover': {
      background: 'rgb(55, 65, 81)',
    },
  },
  '*::selection': {
    background: '$selection',
    color: '$body',
  },
})
