const path = require('path')


/**
 * 返回路径的最后一部分,如果第二个参数存在可以去掉文件扩展名
 */
console.log(path.basename('/c/user/root/desktop/rabbit.jpg'))
// rabbit.jpg
console.log(path.basename('/c/user/root/desktop/rabbit.jpg', '.jpg'))
// rabbit


/**
 * 返回文件的扩展名称 
 */
path.extname('/c/user/root/desktop/rabbit.jpg')
// '.jpg'


/**
 * 返回路径的文件夹名称 
 */
path.dirname('/c/user/root/desktop/rabbit.jpg')
// '/c/user/root/desktop'


/**
 * 根据路径返回出路径数据对象
 */
path.parse('/c/user/root/desktop/rabbit.jpg')
/* 
  {
    root: '/',
    dir: '/c/user/root/desktop',
    base: 'rabbit.jpg',
    ext: '.jpg',
    name: 'rabbit'
  }
*/

/**
 * 根据路径数据对象返回出路径,和path.parse正好互为反操作
 */
let pathObj = {
  root: '/',
  dir: '/c/user/root/desktop',
  base: 'rabbit.jpg',
  ext: '.jpg',
  name: 'rabbit'
}
path.format(pathObj)
// '/c/user/root/desktop/rabbit.jpg'


/**
 * 判断路径是否是绝对路径
 */
path.isAbsolute('/root/data/index.html')
// true
path.isAbsolute('./data/index.html')
// false



/**
 * 使用特定平台的路径表示法,拼接两个路径,
 * 生成的路径比简单的字符串拼接更加规范
 */
path.join('/root/data', '.index.jpg')
// '/root/data/index.jpg'
path.join('/root/data', '../index.jpg')
// '/root/index.jpg'


/**
 * 将路径或路径片段的序列解析为绝对路径
 */
path.resolve('/foo/bar/baz', '../bas/index.jpg')
// '/foo/bar/bas/index.jpg'



/**
 * 根据当前工作目录返回从 from 到 to 的相对路径，
 */
path.relative('/foo/bar/baz', '/foo/bar/baz/main/index.jpg')
// 'main/index.jpg'



/**
 * 提供特定平台上的路径分隔符
 */
path.sep
// windows '\\'
// linux '/'


/**
 *  提供特定平台的路径定界符
 */
path.delimiter
// linux ':'
// windows ';'
