module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          layouts: './src/layouts',
          components: './src/components',
          screens: './src/screens',
          utils: './src/utils'
        }
      }
    ]
  ]
}
