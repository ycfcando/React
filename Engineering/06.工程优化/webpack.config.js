import ESLintPlugin from "eslint-webpack-plugin";

export const webapckConfig = {
  plugins: [
    new ESLintPlugin({
      configType: "flat", // eslint 配置文件类型
      overrideConfigFile: "eslint.config.js", // eslint 配置文件路径
      extensions: ["tsx", "ts"], // 指定要检查的文件类型
      fix: false, // 启用自动修复功能
      cache: true, // 启用缓存，提高检查性能
      exclude: "node_modules", // 排除的目录
      failOnError: true, // 如果有错误则使构建失败
    }),
  ],
};
