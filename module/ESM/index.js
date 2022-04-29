import * as mod2 from "./mod2.js";
function main() {
  console.log("this is main fucntion");
  console.log(mod2);
  console.log(mod2.sum(1, 2));
}

/**
 * 所有从mod2中导入的参数和变量都挂在mod2这个对象上
 */
main();
