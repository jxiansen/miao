function speakName(name) {
  console.log(`My name is ${name}`);
}

function speakAge(age) {
  console.log(`My age is ${age}`);
}

/**
 * 使用默认导出可以在导入的时候省去用括号结构的步骤,
 * 甚至还可以省去 as 关键字来重命名
 */
// export { speakName };
export default speakName;
