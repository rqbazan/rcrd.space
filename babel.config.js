module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: false }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          components: './src/components',
          layouts: './src/layouts'
        }
      }
    ]
  ]
}
