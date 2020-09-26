const {resolve} = require('path')
const withImages = require('next-images')

module.exports = withImages({
  webpack(config) {
    // fix for trying load .md fire in middleware and boot
    config.module.noParse = /.md$/

    // alias
    config.resolve.alias['src'] = resolve(__dirname, 'src')

    return config
  },
})
