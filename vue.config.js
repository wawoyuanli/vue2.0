module.exports = {
  publicPath: "./",
  outputDir:'dist',
  devServer: {
    open: false, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问 192.168.124.9
    port: 9589, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    proxy: {
      [process.env.VUE_APP_API]: {
        target: "http://192.168.124.13:9589",
        changeOrigin: true,
        // pathRewrite: {
        //   ["^" + process.env.VUE_APP_API]: "",
        // },
      },
    },
  },
};
