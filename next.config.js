const fs = require('fs')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    SET_INITIAL_COLOR_MODE_SCRIPT: fs
      .readFileSync(require.resolve('@rqbazan/set-initial-color-mode'))
      .toString(),
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
}

module.exports = nextConfig
