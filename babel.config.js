module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: false }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          layouts: './src/layouts',
          components: './src/components',
          screens: './src/screens'
        }
      }
    ]
  ]
}
