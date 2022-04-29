const { mod2function, mod1function } = require("./mod1.js");

function testFunction() {
  console.log("这是主函数！");
  mod1function();
  mod2function();
}

testFunction();
