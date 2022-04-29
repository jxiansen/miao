// import { sayBye, sayHi } from "./mod1.js";
import { sayBye as Bye, sayHi as Hi } from "./mod1.js";
import speakName from "./mod3.js";
// 将引入的文件原始命名替换为自定义
// function main() {
//   console.log("这是主文件！！！");
//   sayBye();
//   sayHi();
// }

function main() {
  console.log("命名已经被修改了！！！");
  Bye();
  Hi();
  speakName("Hellen");
}
main();
