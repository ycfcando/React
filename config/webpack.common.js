const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const prodConfig = require("./webpack.prod.js");
const devConfig = require("./webpack.dev.js");

const commomConfig = {
  entry: {
    app: "./src/app.tsx",
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].bundle.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: ["js", ".ts", ".tsx"],
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
          test: /[\\/]node_modules[\\/][\w\W]+\.(css|less)$/, // 正则匹配node_module下的css文件
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
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env", 
            ["@babel/preset-react", {
              runtime: 'automatic',
            }], 
            "@babel/preset-typescript"
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
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
    new HtmlWebpackPlugin({ template: "public/app.html" }),
  ],
};

module.exports = function (env) {
  const isProd = env.production;
  const mergeConfig = isProd ? prodConfig : devConfig;
  const resultConfig = merge(commomConfig, mergeConfig);
  return resultConfig;
};
