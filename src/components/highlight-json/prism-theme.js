import theme from 'src/theme'

export default {
  styles: [
    {
      types: ['property', 'operator', 'punctuation'],
      style: {
        color: theme.colors.accent
      }
    },
    {
      types: ['string', 'number'],
      style: {
        color: theme.colors.white
      }
    }
  ]
}
