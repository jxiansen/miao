import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({
  input: input,
  output: output
})

/**
 * 最新的同步写法
 */
const answer = await rl.question('晚上吃啥啊,兄弟?')
console.log(`就吃这个?${answer},不体面了这是！`)
rl.close()


