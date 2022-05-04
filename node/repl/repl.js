/**
 * repl模块提供了一个(read-eval-print-loop)读取评估打印循环的实现，
 */

const repl = require('repl')

var dict = {
  cat: '猫',
  dog: '狗',
  pig: '猪'
}

// context: 创建出来的全局作用于,中声明了一个叫 'm' 的属性变量
var p1 = repl.start({
  prompt: 'QAQ=>:',
  eval: function (cmd, ctx, file, cb) {
    const word = cmd.trim()   // 命令行中输入的字符串
    const define = dict[word]   // 词典中查找到的内容
    if (!define) {
      cb(null, '查无此词')
    } else {
      cb(null, define)
    }
  }
})
p1.context.m = 'hello'


