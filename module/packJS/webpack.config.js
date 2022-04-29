/**
 * webpack打包配置文件
 */
const path = require("path");

module.exports = {
  entry: "./main.js", // 入口文件
  output: {
    path: path.resolve(__dirname, "dist"), // 声明存储路径，在dist目录下生成 bundles.js作为整个打包文件
    filename: "bundle.js",
  },
};
