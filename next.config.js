// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withOffline = require('next-offline')

module.exports = withPlugins([
  [optimizedImages, {
      optimizeImages: false
  }],
  withOffline()
]);