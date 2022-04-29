const arr = require("./module2.js");
function sum(a, b) {
  console.log(a + b);
}

function plusOne(num) {
  console.log(num++);
}

let arrSum = arr.reduce((acc, cur) => acc + cur, 0);
module.exports = { sum, plusOne, arrSum };
