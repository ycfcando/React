### 语法校验
需求：TS + React 项目
说明：校验代码问题，功能：自动在编辑器标注，风格问题自动快捷键优化
方案：使用 ESLint 进行语法校验

#### 校验 TS 语法
方案：这里使用 airbnb 的 TS 规范
包：`eslint-config-airbnb-typescript`、`@typescript-eslint/eslint-plugin`、`@typescript-eslint/parser`
1. eslint-config-airbnb-typescript：Airbnb 的代码风格配置，适用于 TypeScript 和 React。
2. @typescript-eslint/eslint-plugin：TypeScript 相关的 ESLint 插件，提供 TypeScript 规则。
3. @typescript-eslint/parser：解析 TypeScript 代码。

#### 校验 React 语法
方案：airbnb 的 React 规范
包：`eslint-config-airbnb-typescript`、`eslint-plugin-react`、`eslint-plugin-react-hooks`、`eslint-plugin-jsx-a11y`
1. eslint-config-airbnb-typescript：Airbnb 的代码风格配置，适用于 TypeScript 和 React。
2. eslint-plugin-react：用于检查 React 相关的规则。
3. eslint-plugin-react-hooks：用于检查 React Hooks 的规则。
4. eslint-plugin-jsx-a11y：用于确保 JSX 代码符合无障碍规范。

#### 在 IDE 集成
方案：VSCode ESLint 插件
1. ESLint：VSCode 插件，用于在编辑器上使用 ESLint
