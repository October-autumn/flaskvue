module.exports = {
  assetsDir: 'static', // 静态文件的输出目录
  publicPath: './',
  outputDir: '../dist', // dist 文件夹的输出目录
  devServer: { // 该配置项解决请求 flask 后端接口时造成的跨域问题
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/api/',
        changeOrigin: true, // true 表示实现跨域
        pathRewrite: {
          '^/api': '/' //这里理解成用‘/api’代替target里面的地址
        }
      }
    }
  }
}