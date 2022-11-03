const path = require('path')

module.exports = {
  configureWebpack: {
    // publicPath:'./', // vue-cli3.3+新版本使用
    resolve: { // 配置路径
      extensions: ['.vue', '.js', '.jsx', '.css', '.ejs', '.ico'],// 配置文件后缀名省略
      alias: { // 配置路径别名
        '@': path.resolve(__dirname, './src'),
        'assets': path.resolve(__dirname, './src/assets'),
        'common': path.resolve(__dirname, './src/common'),
        'components': path.resolve(__dirname, './src/components'),
        'views': path.resolve(__dirname, './src/views'),
      }
    },
    devServer: {
      overlay: {
          warnings: false,
          errors: false
      },
    }
  }
}