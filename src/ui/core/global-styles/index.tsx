import { globalCss } from '~/stitches.config'

export const globalStyles = globalCss({
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
