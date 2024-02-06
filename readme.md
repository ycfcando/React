# React 前端项目模版

## 能力

### 基础
1. Typescript Latest
 - 项目源码不支持js
2. React18
 - react文件不在需要引入react
 - 项目不支持jsx文件
3. 静态文件(图片&字体)
4. 语法校验(提示&格式化&校验)

### 高级

## webpack知识点

1. 支持css
css-loader:提取项目引入的css文件
mini-css-extract-plugin:将css文件整合插入打包后项目(包括压缩功能等)

2. 支持TS和React18
babel-loader:允许你使用babel为webpack转译javaScript文件
babel-core:babel转译工具，可以转译ts和react为js文件用于webpack打包，babel-core为babel的核心包
@babel/preset-env:babel的js预设，内含js转译相关的plugin和预设的配置
@babel/preset-react:babel的react预设，内含react转译相关的plugin和预设的配置

3. 自动生成html文件
html-webpack-plugin:自定生成html文件

4. 开发
webpack-dev-server:本地启动项目，方便开发

5. 其他
webpack-merge:合并webpack配置

6. 管理资源
asset/resource:webpack自带的静态资源处理工具，可以处理图片和字体文件等

7. 语法校验

