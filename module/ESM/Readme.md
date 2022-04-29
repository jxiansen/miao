## ES 模块

> 使用前必须要使用 `npm` 初始化，在 `package.json` 中指明类型为模块

```sh
npm init -y
```

在 `package.json` 中指定

```json
{
  "name": "esm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

如果不特定声明的话，使用 ES 模块会在控制台报错

```sh
(node:29568) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
...
SyntaxError: Cannot use import statement outside a module
```
