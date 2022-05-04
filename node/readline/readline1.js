const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface({ input, output })

/**
 * 过往的回调写法,带有提示框
 */
rl.question('晚上吃啥呀?', answer => {
  console.log(`疯狂星期四了,${answer}`)
  rl.close()
})


/**
 * 直接就回复,对每一行的输入进行处理输出
 */
rl.on('line', line => {
  console.log(line)
}) 