module.exports = {
  productionSourceMap: false,
  assetsDir: './static',
  outputDir: 'www',
  publicPath: process.env.NODE_ENV == 'production' ? './' : '' //打包时，html引入资源以 ./ 开头
}
