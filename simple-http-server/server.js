const http = require("http");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const server = http.createServer();
const port = 8000;

// 定义上层路径为基础文件夹
const baseDir = "C:/Users/30328/Desktop/miao";

// 目标请求资源路径：http://localhost:8000/paint.html
server.on("request", async (req, res) => {
  const url = decodeURIComponent(req.url); // 将中文路径给转换为合法编码,然后参与后面路径的拼接
  console.log(req.method, url); // 打印出请求方法和请求路径
  const targetPath = `${baseDir}${url}`; //拼接路径

  try {
    var stat = await fsp.stat(targetPath);
    if (stat.isFile()) {
      // 用户请求的是文件
      const data = await fsp.readFile(targetPath);
      // 针对文件中的中文出现乱码现象: 由于浏览器默认选择操作系统的默认编码方式：GB2312
      // 需要单独设置字符集为UTF-8
      res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8",
      });
      res.write(data);
      res.end();
    } else if (stat.isDirectory()) {
      // 用户请求的是文件夹
      const entries = await fsp.readdir(targetPath, { withFileTypes: true });
      // 的到目标文件实体
      res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      // 将读取到的所有文件进行遍历写入响应体中并返回
      res.write("<ul>");
      for (let entry of entries) {
        let slash = entry.isDirectory() ? "/" : ""; // 如果当前项为目录则在路径后拼接 "/"
        res.write(
          `<li><a href="${entry.name}${slash}">${entry.name}${slash}</a></li>`
        );
      }
      res.write("</ul>");
      res.end();
    } else {
      // 请求遇到其他情况
      throw "not and file or directory!!!";
    }
  } catch (err) {
    console.log(err);
    res.writeHead(404);
    res.write(`<h1>Error......</h1>\r${err}`);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
