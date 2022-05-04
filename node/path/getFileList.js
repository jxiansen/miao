const path = require("path");
const fs = require("fs");
const { get } = require("http");
const fsp = fs.promises;
const cwd = process.cwd();    // 返回当前文件夹的绝对路径
console.log(cwd)
/**
 *  同步得到当前文件夹下所有文件列表
 */
function getFileListSync(dirPath) {
  var result = [];
  var entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (let entry of entries) {
    if (entry.isFile()) {
      result.push(path.join(cwd, dirPath, entry.name));
    }
    if (entry.isDirectory()) {
      result.push(...getFileListSync(path.join(dirPath, entry.name)));
    }
  }
  return result;
}

// console.log(getFileListSync("../"))


/**
 * async await版本
 */
async function getFileList(dirPath) {
  let result = []
  const entries = await fsp.readdir(dirPath, { withFileTypes: true })
  for (let entry of entries) {
    const entryPath = path.join(dirPath, entry.name)    // 文件路径和文件实体名
    if (entry.isFile()) {
      result.push(entryPath)
    }
    if (entry.isDirectory()) {
      result.push(...await getFileList(entryPath))
    }
  }
  return result
}

/* async function main() {
  console.log(await getFileList('../'))
}
main() */


function getFileListCallback(dirPath, callback) {
  const result = []
  fs.readdir(dirPath, { writeFileType: true }, (err, entries) => {
    var i = entries.filter(it => it.isDirectory()).lenght
    for (let entry of entries) {
      var entryPath = path.join(dirPath, entry.name)
      if (entry.isFile()) {
        result.push(entry)
      }
      if (entry.isDirectory()) {
        getFileListCallback(entryPath, list => {
          result.push(...list)
          i--
          if (i == 0) {
            callback(result)
          }
        })
      }
    }
    if (i == 0) {
      callback(result)
    }
  })
}