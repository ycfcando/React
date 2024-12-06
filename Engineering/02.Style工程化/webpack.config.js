import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const webapckConfig = {
  module: {
    rules: [
      {
        test: /\.css$/, // 需要处理的文件后缀
        exclude: /node_modules/, // 需要排除处理的文件
        /* 不是 webpack 支持的处理文件时，需要使用 use 字段 添加对应 loader */
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
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
