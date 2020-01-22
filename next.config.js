const withCSS = require('@zeit/next-css')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withCSS(
  withBundleAnalyzer({
    exportTrailingSlash: true,
    devIndicators: {
      autoPrerender: false
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })

      return config
    }
  })
)
