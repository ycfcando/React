export const webapckConfig = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // 需要处理的文件后缀
        exclude: /node_modules/, // 需要排除处理的文件
        /* 不是 webpack 内部 module 时，需要使用 use 字段 */
        use: [
          {
            loader: "babel-loader", // 指定 loader
            /* loader 的相关配置 */
            options: {
              presets: ["@babel/preset-env"], // babel 预设
            },
          },
        ],
      },
    ],
  },
};
