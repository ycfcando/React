const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/app.jsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    clean: true,
  },
  resolve: {
    alias: {
      C: path.resolve(__dirname, "./src/components"),
    },
    extensions: [".js", ".json", ".jsx"],
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
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer", "cssnano"],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer", "cssnano"],
              },
            },
          },
          "less-loader",
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
    new HtmlWebpackPlugin({ template: "public/app.html" }),
  ],
};
