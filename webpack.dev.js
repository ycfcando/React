const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.jsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  resolve: {
    alias: {
      C: path.resolve(__dirname, "./src/components"),
    },
    extensions: [".js", ".json", ".wasm", ".jsx"],
  },
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 不将注释提取到单独的文件中
      }),
    ],
    splitChunks: {
      cacheGroups: {
        nodeModuleChunkCss: {
          name: "chunkCss/commonCss", // 指定文件夹输出
          chunks: "all",
          test: /[\\/]node_modules[\\/][\w\W]+\.css$/, // 正则匹配node_module下的css文件
          reuseExistingChunk: true,
          priority: -10,
        },
        nodeModuleChunkJs: {
          name: "chunkJs/commonJs",
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
          priority: -20,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
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
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
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
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true, // 允许链式调用的换行
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].bundle.css" }),
    new HtmlWebpackPlugin({ template: "./public/app.html" }),
  ],
};
