function mod1function() {
  console.log("我是模块1!!!");
}

function mod2function() {
  console.log("我是模块2");
  console.log();
}
module.exports = { mod1function, mod2function };
