module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['config/*.js', 'build', '.eslintrc.js'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb-typescript",
  ],
  parserOptions: {
    ecmaVersion: 12, // 支持 ECMAScript 2021
    sourceType: "module", // 使用模块化
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
    project: "./tsconfig.json", // 指向 TypeScript 配置文件
  },
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ 不需要 import React
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "no-console": "warn", // 警告控制台输出
    semi: ["error", "always"], // 强制使用分号
    quotes: ["error", "single"], // 强制使用单引号
    "@typescript-eslint/explicit-module-boundary-types": "off", // 禁用强制函数参数和返回值类型
    "react/prop-types": "off", // 禁用 prop-types 检查
    "react/jsx-props-no-spreading": "off", // 允许 JSX 中展开属性
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // 忽略未使用的函数参数
  },
  settings: {
    react: {
      version: "detect", // 自动检测 React 版本
    },
    'import/resolver': {
      typescript: true
    }
  },
};
