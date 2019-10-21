const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  assetsDir: './static',
  outputDir: 'www',
  publicPath: process.env.NODE_ENV == 'production' ? './' : '', //打包时，html引入资源以 ./ 开头
  configureWebpack: config => {
    config.plugins.push(new MonacoWebpackPlugin())
  }
}
