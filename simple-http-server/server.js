const http = require("http");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const url = require("url")
const mime = require('mime')

const server = http.createServer();
const port = 80;

// 定义上层路径为基础文件夹
const baseDir = "/";

// 目标请求资源路径：http://localhost:8000/paint.html
server.on("request", async (req, res) => {
  req.url = path.join(req.url)    // 对路径化简,阻挡不想暴露出的资源地址
  const url = decodeURIComponent(req.url); // 将中文路径给转换为合法编码,然后参与后面路径的拼接
  console.log(req.method, url); // 打印出请求方法和请求路径
  const targetPath = path.join(baseDir, url); //拼接路径
  console.log(targetPath)

  try {
    var stat = await fsp.stat(targetPath);
    if (stat.isFile()) {
      // 用户请求的是文件
      const data = await fsp.readFile(targetPath);
      // 针对文件中的中文出现乱码现象: 由于浏览器默认选择操作系统的默认编码方式：GB2312
      // 需要单独设置字符集为UTF-8, 类型设置使用 mime.getType(fileName) 这个api
      const extname = path.extname(targetPath)
      res.writeHead(200, { "Content-type": `${getMimeType(extname)}` })
      // 创建一个可读流,用来流式加载文件
      const readable = fs.createReadStream(targetPath)
      readable.on('data', data => {
        res.write(data)
      })
      readable.on('end', () => {
        res.end();      // 
      })
    } else if (stat.isDirectory()) {
      const indexPath = path.join(targetPath, 'index.html')

      try {
        const indexStat = await fsp.stat(indexPath)   // 读取index.html存在状态
        if (indexStat.isFile()) {       // 如果该文件存在
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
          })
          res.write(await fsp.readFile(indexPath))
          res.end()
        } else {
          throw 'it is not index.html'
        }
      } catch (err) {     // 没有index.html文件就将当前文件夹的内容给列出
        // 用户请求的是文件夹
        const entries = await fsp.readdir(targetPath, { withFileTypes: true });
        // 得到目标文件实体
        res.writeHead(200, {
          "Content-Type": "text/html; charset=UTF-8",
        });
        // 将读取到的所有文件进行遍历写入响应体中并返回
        res.write("<ul>");
        res.write(`<li><a href="../">..</a></li>`)
        for (let entry of entries) {
          let slash = entry.isDirectory() ? "/" : ""; // 如果当前项为目录则在路径后拼接 "/"
          res.write(
            `<li><a href="${entry.name}${slash}">${entry.name}${slash}</a></li>`
          );
        }
        res.write("</ul>");
        res.end();
      }
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
  console.log(`Server listening on: 43.156.6.114:${port}`);
});



/**
 * 根据扩展名，返回对应的媒体类型,查询到就返回,查询不到表明时二进制数据
 * 针对文本文件都采用UTF-8编码,本次使用npm包mime来代替
 */
function getMimeType(extname) {
  const mimeMap = {
    '.txt': 'text/plain;charset=UTF-8',
    '.html': 'text/html;charset=UTF-8',
    '.css': 'text/css;charset=UTF-8',
    '.javascript': 'text/javascript;charset=UTF-8',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.js': 'application/javascript;charset=UTF-8',
    '.json': 'application/json;charset=UTF-8',
  }
  return mimeMap[extname] ?? 'application/octet-stream';
}