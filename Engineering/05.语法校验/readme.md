### 一、语法校验
需求：TS + React 项目
说明：校验代码问题，功能：自动在编辑器标注，风格问题自动快捷键优化。
方案：ESLint9

#### 校验 TS 语法
方案：eslint + typescript-eslint
包：`eslint` `typescript-eslint`
1. eslint：eslint.configs.recommended 自带的 JS 语法规则。
2. typescript-eslint：configs.strict、configs.stylistic 自带的 TS 语法规则。

#### 校验 React 语法
方案：eslint-plugin-react
包：`eslint-plugin-react`
1. eslint-plugin-react：`configs.flat.recommended` 自带的 React 规则；`configs.flat['jsx-runtime']` 
自带的 jsx-runtime 规则。

#### 校验导入导出
方案：eslint-plugin-import + eslint-import-resolver-typescript。
包：`eslint-plugin-import` `eslint-import-resolver-typescript`
1. eslint-plugin-import：校验导入导出，语法，文件有效性等。
2. eslint-import-resolver-typescript：提供校验 ts 文件的能力。

### 二、代码格式化
方案：pretier
包：`eslint-plugin-prettier` `eslint-config-prettier`
1. eslint-plugin-prettier：赋予 eslint prettier 代码规则。
2. eslint-config-prettier：禁用冲突的 eslint 配置。


#### 在 IDE 集成
方案：VSCode ESLint 插件
1. ESLint：VSCode 插件，用于在编辑器上使用 ESLint
