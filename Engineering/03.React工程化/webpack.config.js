export const webapckConfig = {
  module: {
    rules: [
      {
        test: /\.jsx&/, // 匹配的文件类型
        /* 使用的 loaders */
        use: [
          {
            loader: "babel-loader", // loader
            /* loader 配置 */
            options: {
              // babel 预设
              presets: [
                "@babel/preset-env", // js 预设
                [
                  "@babel/preset-react", // react 预设
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
