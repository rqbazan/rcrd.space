const PROD = process.env.NODE_ENV === 'production'

// preset-env config from https://bit.ly/2Pnlfg0
module.exports = {
  plugins: [
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        autoprefixer: { grid: true },
        features: {
          'nesting-rules': true
        },
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
      }
    ],
    PROD && [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./src/**/*.js'],
        whitelistPatterns: [/token/, /plain/],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }
    ],
    PROD && ['cssnano', { preset: 'default' }]
  ].filter(Boolean)
}
