module.exports = {
  productionSourceMap: false,
  assetsDir: './static',
  outputDir: 'www',
  publicPath: process.env.NODE_ENV == 'production' ? './' : '', //打包时，html引入资源以 ./ 开头
  devServer: {
    disableHostCheck: true, //Invalid Host header 服务器域名访问出现的问题
    port: 80,
    open: true, //浏览器打开网页
  },
  // configureWebpack: config => {
  // }
}
