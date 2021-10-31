const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

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
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            ["react-refresh/babel"],
            [
              "import",
              {
                libraryName: "antd",
                libraryDirectory: "es",
                style: true,
              },
              "antd",
            ],
          ],
        },
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
