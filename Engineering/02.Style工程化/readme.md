### Style工程化
说明：解决原生CSS语法的不便如：语法、模块、体积。
方案：`sass-loader`、`css-loader`、`MiniCssExtractPlugin` 

#### 模块
说明：统一JS、CSS模块约定；赋予 CSS Module 功能
方案：`css-loader`、`MiniCssExtractPlugin`
1. css-loader：提供了 CSS Module 功能；实现了 ESM 模块语法.
2. MiniCssExtractPlugin.loader：处理 `css-loader` 过后的内容。
3. MiniCssExtractPlugin：通过 webpack 的 plugin 生成对应 css文件 并用 Link 插入 HTML。

#### 语法
说明：优化原生 CSS 语法；这里挑选 SASS 做列子。
方案：`sass-loader`
1. sass-loader：处理 sass 语法

#### 体积
说明：自动压缩style文件
方案：`MiniCssExtractPlugin`
1. MiniCssExtractPlugin：会自动压缩 css 文件。