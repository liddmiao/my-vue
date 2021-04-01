const { merge } = require('webpack-merge')
const base = require('./webpack.base.config.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true
      }),
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  }
})