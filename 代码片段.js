// 十进制转二进制
function fn(n) {
  let str = ''
  while (n > 2) {
    str = (n % 2).toString() + str;
    n = ~~(n / 2)
  }
  str = n.toString() + str
  return str
}


// 反转字符串
function reverseStr(s) {
  let arr = [...s];
  for (let l = 0, r = arr.length - 1; l < r; l++, r--) {    // 定义左右指针,左指针一直小于右指针,分别左移右移
    [arr[l], arr[r]] = [arr[r], arr[l]]       // ES6语法,交换两个值
  }
  return arr.join('')
}

// 判断字符串是否为回文?
function checkStr(str) {
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}



// 287. 寻找重复数
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {       // 外层循环控制左指针
    for (let j = i + 1; j < nums.length; j++) {   // 内层循环遍历左指针右侧的值
      if (nums[i] === nums[j]) {          // 判断左右指针是否相等
        return nums[i]
      }
    }
  }
};

// 125. 验证回文串: 方法一
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase();    // 字符串都小写
  let str = ''
  for (let i = 0; i < s.length; i++) {
    let zg = /^[0-9a-zA-Z]*$/;      // 使用正则表达式匹配其中的字母和数字
    if (zg.test(s[i])) {
      str += s[i]
    }
  }               // 得到处理好的正常字符串
  let revesedStr = str.split('').reverse().join('')
  return str === revesedStr;
};

// 125. 验证回文串:方法二
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase();    // 字符串都小写
  let str = ''
  for (let i = 0; i < s.length; i++) {
    let zg = /^[0-9a-zA-Z]*$/;      // 使用正则表达式匹配其中的字母和数字
    if (zg.test(s[i])) {
      str += s[i]
    }
  }               // 得到处理好的正常字符串
  for (let i = 0; i < Math.ceil(str.length - 1); i++) {      // 双指针从前往后遍历字符串只需要遍历字符串的中间
    if (str[i] !== str[str.length - 1 - i]) {        // 如果左右指针一但不相等则直接不是回文
      return false
    }
  }
  return true;
};

// 2000.反转单词前缀
var reversePrefix = function (word, ch) {
  let arr = word.split('')        // 给定字符串分割为数组
  return !arr.includes(ch) ? word : [...arr.splice(0, arr.indexOf(ch) + 1).reverse(), ...arr].join('');
};


// 507. 完美数
var checkPerfectNumber = function (num) {
  let res = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      res += i
    }
  }
  return res === num ? true : false;
};

// 412. Fizz Buzz
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {     // 同时满足3和5的倍数优先级比较高,需要放在开始
      arr.push("FizzBuzz")
    } else if (i % 3 === 0) {
      arr.push("Fizz")
    } else if (i % 5 === 0) {
      arr.push("Buzz")
    } else {
      arr.push(i.toString())
    }
  }
  return arr;
};

// 1. 两数之和
// 使用暴力循环,两个指针把所有的可能都扫一遍
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((target - nums[i]) === nums[j]) {
        return []
      }
    }
  }
}

// 使用哈希map
var twoSum = function (nums, target) {
  let map = new Map()       // 用哈希表来存储遍历过的元素和索引
  for (let i = 0; i < nums.length; i++) {     // 每遍历一个元素,看看表中是否存在满足要求的目标数字
    let match = target - nums[i];
    if (map.has(match)) {
      return [map.get(match), i]      // 如果表中有匹配的数直接返回[目标元素的索引,当前索引]
    }
    map.set(nums[i], i)       // 哈希表中存储当前的元素和对应的索引
  }
  return []
};



// 167. 两数之和 II - 输入有序数组
var twoSum = function (numbers, target) {
  let res = []
  numbers.forEach((item, index) => {
    for (let i = index + 1; i < numbers.length; i++) {
      if (item + numbers[i] === target) {
        res.push(index + 1, i + 1)
      }
    }
  })
  return res;
};


// 66.加一: 方法一
function plusOne(digits) {
  return (BigInt(digits.join('')) + 1n).toString().split('');   // 使用BigInt数据类型可以表达任意长度的整数,可以通过将 n 添加到整数字段的末尾来创建 BigInt 值.
};


// 66.加一: 方法二
function plusOne(digits) {
  digits.unshift(0)         // 刚开始就给数组头添加一个0,防止一直进位
  for (let i = digits.length - 1; i >= 0; i--) {    // 从后往前遍历数组
    if (digits[i] !== 9) {        // 数字不为9,直接加一
      digits[i]++
      if (digits[0] == 0) {       // 当数组首位为0,说明没有一直进位,切掉数组头部
        digits.shift()
      }
      return digits
    } else {            // 数字为9,改写当前值为0
      digits[i] = 0;
    }
  }
}


// 202. 快乐数
var isHappy = function (n) {
  let set = new Set();      // 创建一个set用来存取每次的n值
  while (n > 1) {
    n = n.toString().split('').map(i => parseInt(i) ** 2).reduce((acc, cur) => acc + cur); // 每次求和添加到set中
    if (set.has(n)) {         // 如果set中有了n值说明当前的循环开始重复,永远无法变成 1 ,直接返回false
      return false;
    }
    set.add(n)
  }
  return true     // 如果能走完循环则说明最终n变成了1
};


// 2089. 找出数组排序后的目标下标
var targetIndices = function (nums, target) {
  let res = []
  nums.sort((a, b) => a - b).forEach((item, index) => {     // 对数组排序后遍历数组
    if (item === target) {      // 如果当前值等于数组索引,则返回数组下标
      res.push(index)
    }
  })
  return res
};


// 704. 二分查找
/* 
  二分法的前提: 数组必须已经有序了,而且数组元素不能重复
  起点,终点,中间点,中间点元素
*/
var search = function (nums, target) {
  let start = 0, end = nums.length - 1, middle, element;
  while (start <= end) {
    middle = ~~((start + end) / 2);     // 定义中间节点坐标
    element = nums[middle];     // 中间元素值
    if (element == target) {      // 中间元素等于目标直接返回索引
      return middle;
    } else if (target < element) {    // 目标小于中间元素,右指针移动到中间指针左侧
      end = middle - 1;
    } else {
      start = middle + 1;     // 目标大于中间元素,左指针移到到中间指针右侧
    }
  }
  return -1;
};


/* 
  创建一个空的对象 user。
  为这个对象增加一个属性，键是 name，值是 John。
  再增加一个属性，键是 surname，值是 Smith。
  把键为 name 的属性的值改成 Pete。
  删除这个对象中键为 name 的属性。
*/
let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete"
delete user.name;


/*
  检查空对象
  写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。
*/
let obj = {}
function isEmpty(obj) {
  for (let key in obj) {
    return false;     // 一但进入循环,就说明对象中有属性
  }
  return true;
}
console.log(isEmpty(obj));


/* 
  对象属性求和
  我们有一个保存着团队成员工资的对象：
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
*/

function sumSalary(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}


/* 
  将数值属性值都乘以 2
  创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性值都乘以 2。
      // 在调用之前
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };

    multiplyNumeric(menu);

    // 调用函数之后
    menu = {
      width: 400,
      height: 600,
      title: "My menu"
    };
*/
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof (obj[key]) === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}


// 1672. 最富有客户的资产总量
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map(i => i.reduce((acc, cur) => acc + cur)));      // 对二位数组中的每一项求和并返回原数组,最后取最大值
};


// 使用数组reduce()方法来拼接数组中的字符串
let strArr = ["ab", "c", "h", "ui"];
function arrToStr(strArr) {
  return strArr.reduce((acc, cur) => acc + cur, "");  // 用空字符串来作为reduce()迭代的初始值
}
console.log(arrToStr(strArr));
// 输出: 'abchui'


// 169. 多数元素:方法一
var majorityElement = function (nums) {
  let obj = {}      // 声明一个对象用来对每个元素计数
  for (let item of nums) {
    item.toString() in obj ? obj[item]++ : obj[item] = 1;     // 遍历数组,如果对象中没有这个值就初始化为1,否则加一
  }
  for (let key in obj) {
    if (obj[key] > nums.length / 2) {     // 遍历对象属性值,找出多数元素
      return key
    }
  }
};

// 方法二
// 直接对数组排序后,取超过数组长度一半的数
var majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[~~(nums.length / 2)]
};



// 查看自己班级的力扣刷题排名
let listObj = document.querySelectorAll("div>h2>a:nth-child(2");
let arr = [];
for (let key in listObj) {
  arr.push(listObj[key].text)
}
console.log(arr.sort((a, b) => b - a));



// 1913. 两个数对之间的最大乘积差
// 数组排序后,取数最大和最小各两个值的乘积差
var maxProductDifference = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  return arr[arr.length - 1] * arr[arr.length - 2] - arr[0] * arr[1];
};


// 1389. 按既定顺序创建目标数组
// 直接使用splice()
var createTargetArray = function (nums, index) {
  let target = [];
  for (let i in index) {
    target.splice(index[i], 0, nums[i])
  }
  return target
};

// 使用reduce()迭代
var createTargetArray = function (nums, index) {
  return index.reduce((acc, cur, inx) => {
    acc.splice(cur, 0, nums[inx])
    return acc
  }, [])
};


// 2114. 句子中的最多单词数
var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map(item => item.split(' ').length))
};


// 1732. 找到最高海拔
// reduce()迭代
var largestAltitude = function (gain) {
  return Math.max(...gain.reduce((acc, cur) => {
    acc.push(acc[acc.length - 1] + cur);
    return acc
  }, [0]))
};


// 832. 翻转图像
// 翻转每一行 ==> 反转图片
var flipAndInvertImage = function (image) {
  return image.map(item => item.reverse().map(i => Number(!i)));
  // return image.map(item => item.reverse().map(i => i ^ 1));
  // 或者与1进行异或运算
};


// 1979. 找出数组的最大公约数
var findGCD = function (nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let res = [];
  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      res.push(i)
    }
  }
  return Math.max(...res)
};


// 1748. 唯一元素的和 
// 用对象对每个元素出现的次数进行累计,找出只出现过一次的数,并求和
var sumOfUnique = function (nums) {
  let obj = {}, sum = 0;
  for (let item of nums) {
    item in obj ? obj[item]++ : obj[item] = 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      sum += Number(key);
    }
  }
  return sum
};

// 用哈希map()来存储计数
var sumOfUnique = function (nums) {
  let map = new Map(), sum = 0;
  for (let item of nums) {
    map.has(item) ? map.set(item, 1) : map.set(item, 0);
  }
  map.forEach((value, key) => {
    if (value === 0) {
      sum += Number(key)
    }
  });
  return sum;
};

// 1816. 截断句子
var truncateSentence = function (s, k) {
  return s.split(' ').splice(0, k).join(' ');
};

// 1502. 判断能否形成等差数列
// 先对数组排序 ==> 用等差数列通项公式遍历判断
var canMakeArithmeticProgression = function (arr) {
  let sorter = arr.sort((a, b) => a - b);
  let d = sorter[1] - sorter[0];
  for (let key in arr) {
    if (arr[key] !== (sorter[0] + key * d)) {
      return false
    }
  }
  return true;
};


// 1572. 矩阵对角线元素的和
var diagonalSum = function (mat) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {    // 遍历二维数组,将对角线上的数组元素存到数组中
    arr.push(mat[i][i], mat[i][mat.length - i - 1]);
  }
  if (mat.length % 2 == 1) {      // 如果数组的长度为偶数的时候,矩阵中心会被重复累加,需要去除这个元素
    arr.splice(mat.length, 1)
  }
  return arr.reduce((acc, cur) => acc + cur, 0);    // reduce()求和
};



// 1299. 将每个元素替换为右侧最大元素
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr.slice(i + 1, arr.length);
    tmp.length === 0 ? arr[i] = -1 : arr[i] = Math.max(...tmp);
  }
  return arr
};


// 1822. 数组元素积的符号 方法一
var arraySign = function (nums) {
  let res = 1;
  for (let item of nums) {
    if (item === 0) {
      return 0;
    }
    res *= item;
  }
  return res > 0 ? 1 : -1;
};


// 方法二: 
var arraySign = function (nums) {
  let countNeg = 0;     // 累积数组中负数的个数
  for (let item of nums) {
    if (item === 0) {         // 如果元素为0,直接返回0
      return 0;
    }
    if (item < 0) {
      countNeg++;
    }
  }
  return countNeg % 2 === 0 ? 1 : -1;     // 负数的个数如果为偶数次返回1,奇数次则返回-1;
};



// 剑指 Offer 17. 打印从1到最大的n位数
// 直接使用for循环,最大值用数组中的字符串拼接转换出来
var printNumbers = function (n) {
  let res = [], max = Number(new Array(n).fill(9).join(''));
  for (let i = 1; i <= max; i++) {
    res.push(i)
  }
  return res;
};


// 最大值也可以使用10的n次幂求出来
var printNumbers = function (n) {
  let res = [], max = 10 ** n;
  for (let i = 1; i < max; i++) {
    res.push(i)
  }
  return res;
};



// 1464. 数组中两元素的最大乘积
// 方法一: 数组排序后找出最大的两个元素,累乘
var maxProduct = function (nums) {
  return nums.sort((a, b) => b - a).slice(0, 2).reduce((acc, cur) => acc * (cur - 1), 1)
};

// 方法二: 遍历找出最大值,和次大值
var maxProduct = function (nums) {
  let max = Math.max(...nums)
  for (let key in nums) {
    if (nums[key] === max) {
      nums[key] = 0;      // 对遍历到的最大值置0
      let secondMax = Math.max(...nums)   // 再求出次大值
      return (secondMax - 1) * (max - 1);
    }
  }
};


// 1475. 商品折扣后的最终价格
// 双指针法
var finalPrices = function (prices) {
  for (let i = 0; i < prices.length; i++) {     // 外层循环控制写指针
    for (let j = i + 1; j < prices.length; j++) {   // 内层循环控制读指针
      if (prices[j] <= prices[i]) {       // 一但遍历到合适的条件写指针改写元素的折扣值
        prices[i] -= prices[j];
        break;
      }
    }
  }
  return prices
};


// 剑指 Offer 57. 和为s的两个数字
// 双指针法
var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1;    // 定义左指针,右指针
  while (left < right) {    // 只有左右指针没有相遇就一直循环
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {      // 和小于目标值,左指针右移变大
      left++;
    } else {        // 和大于目标值,右指针左移变小
      right--;
    }
  }
};


// 剑指 Offer 58 - II. 左旋转字符串
// 直接使用库函数
var reverseLeftWords = function (s, n) {
  return `${s.slice(n)}${s.slice(0, n)}`
};

// 遍历字符串
var reverseLeftWords = function (s, n) {
  let res = [];
  for (let i = n; i < s.length; i++) {
    res.push(s[i])
  }
  for (let i = 0; i < n; i++) {
    res.push(s[i])
  }
  return res.join('')
};


// 557. 反转字符串中的单词 III
// api写法
var reverseWords = function (s) {
  return s.split(' ').map(item => [...item].reverse().join('')).join(' ')
};

// 用数组来存
var reverseWords = function (s) {
  let arr = [], i = 0;
  while (i < s.length) {
    let start = i;
    while (i < s.length && s[i] !== ' ') {
      i++
    }
    for (let j = start; j < i; j++) {
      arr.push(s[start + i - j - 1])
    }
    arr.push(' ')
    i++
  }
  return arr.join('').trimEnd()
};


// 双指针写法 
var reverseWords = function (s) {
  let arr = [...s], l = 0, r = l;   // 定义左右指针
  while (l < arr.length) {
    //找到结尾的空格
    while (arr[r] && arr[r] !== " ") {
      r++;
    }
    //反转单词
    for (let i = l, j = r - 1; i < j; i++, j--) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    //跳到下一个单词
    l = r + 1;
    r = l;
  }
  return arr.join("");
};



// 350. 两个数组的交集 II
// 双重for循环遍历,对于每次遍历过的数组,都改写其值
var intersect = function (nums1, nums2) {
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i])
        nums1[i] = "$"
        nums2[j] = "@"
      }
    }
  }
  return res
};

// 左右指针分别遍历两个数组
var intersect = function (nums1, nums2) {
  let res = [], l = 0, r = 0;   // 左右指针,分别指向两个数组
  nums1.sort((a, b) => a - b);   // 对两个数组排序
  nums2.sort((a, b) => a - b);
  while (l < nums1.length && r < nums2.length) {   // 遍历两个数组,只要两个指针还小于数组的长度时候就一直遍历
    if (nums1[l] === nums2[r]) {
      res.push(nums1[l])    // 如果左右指针数据相等则加入数组,并且指针分别移动
      l++;
      r++;
    } else {
      nums1[l] < nums2[r] ? l++ : r++;
    }
  }
  return res;
};


// 709. 转换成小写字母
// 遍历字符串拼接
var toLowerCase = function (s) {
  let str = '';
  for (let item of s) {
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
      str += String.fromCharCode(item.charCodeAt() + 32)
    } else {
      str += item
    }
  }
  return str
};


// 直接使用api
var toLowerCase = function (s) {
  return s.toLowerCase();
}


// 1859. 将句子排序
// 方法一: 用对象存取数据
var sortSentence = function (s) {
  let arr = s.split(' ').map(item => [...item]);
  let obj = {}, res = '';
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].splice(-1, 1);
    obj[tmp] = arr[i].join('')
  }
  for (let key in obj) {    // 用对象来存放数组元素和其排序序号
    res += obj[key] + " "   // 拼接字符串
  }
  return res.trim()     // 去除右侧添加的空格字符
};

// 方法二: 找出key和value,用数组存取
var sortSentence = function (s) {
  let res = [], arr = s.split(' ');   // 切分数组
  for (let item of arr) {
    let index = item.slice(-1) - 1;     // 每次取字符串的索引
    let value = item.slice(0, item.length - 1)    // 取字符串的值
    res[index] = value      // 用数组存取字符串
  }
  return res.join(' ');
};


// 剑指 Offer 03. 数组中重复的数字
var findRepeatNumber = function (nums) {
  let map = new Map();
  for (let item of nums) {
    if (map.has(item)) {    // 如果表中有当前元素,则直接返回该元素
      return item;
    }
    map.set(item, 0)      // 一直向哈希表中存数据
  }
};



// 剑指 Offer 05. 替换空格
// 方法一: 直接使用api
var replaceSpace = function (s) {
  return s.replaceAll(' ', "%20")
};

// 第二种使用api方法
var replaceSpace = function (s) {
  return s.split(' ').join('%20');
};

// 方法二: 切割成数组操作
var replaceSpace = function (s) {
  let arr = [...s];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = "%20"
    }
  }
  return arr.join('')
};


// 遍历字符串拼接
var replaceSpace = function (s) {
  let res = "";
  for (let item of s) {
    item === " " ? res += "%20" : res += item;
  }
  return res
};


// 387. 字符串中的第一个唯一字符
var firstUniqChar = function (s) {
  let map = new Map();      // 用哈希表存取字符串,统计出每个字符串出现的次数
  for (let item of s) {
    map.has(item) ? map.set(item, 1) : map.set(item, 0);
  }
  for (let key of map.keys()) {     // 遍历map的键
    if (map.get(key) === 0) {     // 如果键只出现过一次,则返回字符串中该键的索引
      return s.indexOf(key)
    }
  }
  return -1;      // 如果字符中找不到该键,则返回-1;
};

// 用对象来存取数据
var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    str in obj ? obj[str]++ : obj[str] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (obj[str] === 1) {
      return i
    }
  }
  return -1
};

// 237. 删除链表中的节点
// 正常删除链表当前节点需要访问该节点的父节点,本体无法访问该节点的父节点
var deleteNode = function (node) {
  node.val = node.next.val;     // 将下节点的 val 赋给当前节点
  node.next = node.next.next;   // 下一个节点的 next 指针也赋给当前节点,直接相当于删除当前节点.
};


// 1528. 重新排列字符串
// 用新数组去存
var restoreString = function (s, indices) {
  let res = new Array(indices.length);
  for (let key in indices) {
    res[indices[key]] = s[key]
  }
  return res.join('')
};

// 用对象来存数据,按序遍历
var restoreString = function (s, indices) {
  let obj = {}, res = '';
  for (let i = 0; i < s.length; i++) {
    obj[indices[i]] = s[i]
  }
  for (let key in obj) {
    res += obj[key]
  }
  return res
};

// 用map做映射表来排序
var restoreString = function (s, indices) {
  let map = new Map(), res = '';
  for (let i = 0; i < s.length; i++) {
    map.set(indices[i], s[i])
  }
  for (let j = 0; j < s.length; j++) {
    res += map.get(j)
  }
  return res
};


// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}



// 1768. 交替合并字符串
// 方法一
var mergeAlternately = function (word1, word2) {
  let arr = [], arr1 = [...word1], arr2 = [...word2];
  while (arr1.length > 0 || arr2.length > 0) {    // 只要两个字符串数组不为空就一直向目标数组push元素
    arr.push(arr1.shift(), arr2.shift())
  }
  return arr.join('');        // 拼接元素
};


// 方法二
var mergeAlternately = function (word1, word2) {
  let res = [], maxLen = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLen; i++) {      // 遍历字符串中较长的那个
    let str1 = word1[i], str2 = word2[i];
    res.push(str1, str2)          // 用数组存遍历到的字符
  }
  return res.filter(item => item !== undefined).join('');   // 过滤掉数组中的undefined元素,拼接
};

// 面试题 01.01. 判定字符是否唯一
// 方法一: 使用set去重
let s = "leetcode";
var isUnique = function (s) {
  let set = new Set(s)      // 使用set去重,比较长度
  return set.size === s.length;
};
console.log(isUnique(s));

// 双重for循环,比较两个值是否相同
let s = "leetcode";
var isUnique = function (s) {
  for (let l = 0; l < s.length; l++) {
    for (let r = l + 1; r < s.length; r++) {
      if (s[l] === s[r]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isUnique(s));

// 884. 两句话中的不常见单词
// 用map 存储计数
var uncommonFromSentences = function (s1, s2) {
  let arr = `${s1} ${s2}`.split(' ');
  let map = new Map(), res = [];
  for (let item of arr) {       // 用 map 来存储单词出现的次数
    map.has(item) ? map.set(item, 1) : map.set(item, 0);
  }
  for (let key of map.keys()) {   // 遍历 map 找出其中只出现过一次的元素
    if (map.get(key) === 0) {
      res.push(key)
    }
  }
  return res
};

// 用对象存储计数
var uncommonFromSentences = function (s1, s2) {
  let arr = `${s1} ${s2}`.split(' '), res = [];
  let obj = {};
  for (let item of arr) {
    item in obj ? obj[item]++ : obj[item] = 0;
  }
  for (let key in obj) {
    if (obj[key] === 0) {
      res.push(key)
    }
  }
  return res
};



// 1945. 字符串转化后的各位数字之和
var getLucky = function (s, k) {
  let num = [...s].map(item => item.charCodeAt() - 96).join('')
  while (k > 0) {
    num = [...num].map(i => parseInt(i)).reduce((acc, cur) => acc + cur, 0).toString();
    k--
  }
  return Number(num)
};


// 面试题 16.01. 交换数字
// 方法一: 直接ES6结构语法交换数值
var swapNumbers = function (numbers) {
  [numbers[0],numbers[1]] = [numbers[1],numbers[0]];
  return numbers;
};

// 方法二: 直接数组反转
var swapNumbers = function (numbers) {
  return numbers.reverse();
};

// 方法三: 加减腾挪法
var swapNumbers = function (numbers) {
  numbers[0] += numbers[1]
  numbers[1] = numbers[0] - numbers[1];
  numbers[0] = numbers[0] - numbers[1]
  return numbers;
};

// 方法四: 异或运算
var swapNumbers = function (numbers) {
  numbers[0] ^= numbers[1]
  numbers[1] ^= numbers[0]
  numbers[0] ^= numbers[1]
  return numbers;
};


let num1 = 7, num2 = 3;
console.log(num1.toString(2),'\r', num2.toString(2));
num1 ^= num2;
console.log(num1.toString(2),'\r', num2.toString(2));
num2 ^= num1;
console.log(num1.toString(2),'\r', num2.toString(2));
num1 ^= num2;
console.log(num1.toString(2),'\r', num2.toString(2));
