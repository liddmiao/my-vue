const { merge } = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base.config.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    proxy: {
      '/': 'http://localhost:3001'
    },
    open: true,
    openPage: 'index.html',
    writeToDisk: true //将打包后的代码写入磁盘而不是放入内存，避免每次启动服务dist会被清空
  }
})