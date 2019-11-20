// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withOffline = require('next-offline')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  [optimizedImages, {
      optimizeImages: false
  }],
  withOffline(),
  withCSS()
]);