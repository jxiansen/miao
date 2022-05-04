const readline = require('readline');
const { rootCertificates } = require('tls');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '这是一个提示框哦> '      // 提示框
})



rl.prompt();
rl.on('line', line => {     // 节点正在处理的当前数据
  switch (line.trim()) {    // 去掉前后空格
    case 'hello':
      console.log('world!')
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`)
      break;
  }
  rl.prompt()
}).on('close', () => {      // 退出事件
  console.log(`have a nice day!`)
  process.exit(0)
})