/* eslint global-require: "off" */
const PROD = process.env.NODE_ENV === 'production'

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js'],
  whitelistPatterns: [/token/, /plain/],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const env = require('postcss-preset-env')({
  autoprefixer: { grid: true },
  features: {
    'nesting-rules': true
  },
  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
})

const tw = require('tailwindcss')('./tailwind.config.js')

const cssnano = require('cssnano')({
  preset: 'default'
})

// preset-env config from https://bit.ly/2Pnlfg0
module.exports = {
  plugins: [tw, env, PROD && purgecss, PROD && cssnano].filter(Boolean)
}
