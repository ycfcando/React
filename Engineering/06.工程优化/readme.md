### 目前工程化暴露的问题

1. babel打包和eslint校验不是一种方案，导致可能语法校验和打包处理存在不一致问题。
使用 `eslint-webpack-plugin` 将eslint接入webpack流程，是的语法校验和打包处于一个流程中。