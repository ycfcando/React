### JS工程化
说明：解决原生开发带来繁琐问题如：模块化、体积、语法。
方案：`webpack`、`babel-loader`

#### webpack
说明：自带支持js模块化、压缩体积的能力
1. 模块化：无需配置，遵循ESM模块约定
2. 体积压缩：无需配置

#### babel-loader
说明：在 `webpack` 的 module 中使用 `babel-loader`，以使用 `babel` 处理浏览器不支持的 JS 高级语法