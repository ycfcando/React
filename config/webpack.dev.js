const path = require("path");

module.exports = {
  mode: "development",
  target: "web",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./public/app.html"),
    },
    //压缩
    compress: true,
    //热更新
    hot: true,
    //是否自动打开浏览器
    open: true,
    //端口号
    port: 8888,
  },
  devtool: "source-map",
};
