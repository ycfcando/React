import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import prodConfig from "./webpack.prod.js";
import devConfig from "./webpack.dev.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const commomConfig = {
  entry: {
    app: "./src/app.tsx",
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "./js/[name].bundle.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".ts", ".tsx"],
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
          name: "chunk_css/common_css", // 指定文件夹输出
          chunks: "all",
          test: /[\\/]node_modules[\\/][\w\W]+\.(css)$/, // 正则匹配node_module下的css文件
          reuseExistingChunk: true,
          priority: -10,
        },
        nodeModuleChunkJs: {
          name: "chunk_js/common_js",
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
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
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
    new MiniCssExtractPlugin({ filename: "css/[name].bundle.css" }),
    new HtmlWebpackPlugin({ template: "public/app.html" }),
  ],
};

export default function (env) {
  const isProd = env.production;
  const mergeConfig = isProd ? prodConfig : devConfig;
  const resultConfig = merge(commomConfig, mergeConfig);
  return resultConfig;
}
