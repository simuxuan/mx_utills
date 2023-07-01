const path = require("path");

module.exports = {
  mode: "development",
  entry: "./lib/index.js",
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, "dist"),
    // 打包文件
    filename: "mx-utils.js",
    // 向外暴露的对象的名称
    library: "_",
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: "umd",
  },
};
