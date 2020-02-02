module.exports = {
  siteMetadata: {
    title: 'Ricardo Q. Bazan',
    description: "I'm a software developer",
    siteUrl: 'https://sxntixgo.codes'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-svgr-loader',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ricardo Q. Bazan',
        short_name: '@rqbazan',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
        icons: ['16x16', '32x32', '180x180', '192x192', '512x512'].map(
          size => ({
            src: `/favicon/${size}.png`,
            sizes: size,
            type: 'image/png'
          })
        )
      }
    }
  ]
}
