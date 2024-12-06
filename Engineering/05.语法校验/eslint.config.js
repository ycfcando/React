// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactlint from "eslint-plugin-react";
import importlint from "eslint-plugin-import";
import prettierlint from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  reactlint.configs.flat.recommended,
  reactlint.configs.flat["jsx-runtime"],
  importlint.flatConfigs.recommended,
  prettierlint,
  {
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // 允许结构类型文件
          project: "tsconfig.json", // 读取ts配置
        },
      },
    },
  },
);
