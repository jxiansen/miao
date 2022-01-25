var jxiansen = {
  /**
   * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
   * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
   *
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  chunk: function (array, num = 1) {
    var res = [], tmp = [];
    if (num === 0) {      // 如果num为0直接返回空数组
      return res
    }
    if (num === array.length) {     // 如果num 为数组长度返回原数组
      return array
    }
    for (let i = 0; i < array.length; i++) {
      tmp.push(array[i])
      if (tmp.length === num) {
        res.push(tmp)
        tmp = [];
      }
    }
    if (tmp[0]) {
      res.push(tmp)
    }
    return res
  },
  // console.log(chunk(['a', 'b', 'c', 'd'], 1));



  /**
   * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
   * and/or values.
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   */
  compact: function (array) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
      if (!!array[i] === true) {      // 遍历数组,对遍历到的元素转换成布尔值,将布尔值为true的push到结果中
        res.push(array[i])
      }
    }
    return res
    return array.filter(i => !!i === true);
  },
  // console.log(compact([0, 1, false, 2, '', 3, NaN, undefined, null]));


  /**
   * 创建一个新数组，将array与任何数组 或 值连接在一起
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
  */
  concat: function (array) {
    let res = [];
    for (let key in arguments) {    // 隐藏的参数都存储在arguments类数组对象中
      if (Array.isArray(arguments[key])) {
        res.push(...arguments[key])
      } else {
        res.push(arguments[key])
      }
    }
    return res;
  },


  /**
   * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
   * （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
   * 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
   *
   * _.difference([2, 1], [2, 3]);
   * // => [1]
   */
  difference: function (array) {
    let res = [], arr = [];
    for (let key in arguments) {
      if (key === '0') {
        continue;       // 如果遍历到第一个参数跳过
      }
      arr.push(...arguments[key])     // 之后遍历到的值每次都push到数组中去
    }
    for (let item of array) {
      if (!arr.includes(item)) {
        res.push(item)
      }
    }
    return res
  },


  /**
   * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
   *
   
   * _.drop([1, 2, 3]);
   * // => [2, 3]
   *
   * _.drop([1, 2, 3], 2);
   * // => [3]
   *
   * _.drop([1, 2, 3], 5);
   * // => []
   *
   * _.drop([1, 2, 3], 0);
   * // => [1, 2, 3]
   */

  drop: function (array) {
    let num;
    '1' in arguments ? num = arguments['1'] : num = 1;    // 如果第二个参数存在,遍历从其位置到数组末尾的所有元素,不存在则从索引为1的位置开始遍历
    if (num >= array.length) {
      array.length = 0;
      return array
    }
    for (let i = 0; i < num; i++) {
      array.shift();
    }
    return array;
  },
  // console.log(drop([1, 2, 3]));



  /**
  * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）.
  *
  *
  * _.dropRight([1, 2, 3]);
  * // => [1, 2]
  *
  * _.dropRight([1, 2, 3], 2);
  * // => [1]
  *
  * _.dropRight([1, 2, 3], 5);
  * // => []
  *
  * _.dropRight([1, 2, 3], 0);
  * // => [1, 2, 3]
  */
  dropRight: function (array) {
    let num;
    '1' in arguments ? num = arguments['1'] : num = 1;    // 如果第二个参数存在,遍历从其位置到数组末尾的所有元素,不存在则从索引为1的位置开始遍历
    if (num >= array.length) {
      array.length = 0;
      return array;
    }
    for (let i = 0; i < num; i++) {
      array.pop();
    }
    return array;
  },
  // console.log(dropRight([1, 2, 3], 5));



  /**
  * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
  *
  * **Note:** 这个方法会改变 array（注：不是创建新数组）.
  * 
  * 
  * 参数
  * @array (Array): 要填充改变的数组。
  * @value (*): 填充给 array 的值。
  * @[start=0] (number): 开始位置（默认0）。
  * @[end=array.length] (number):结束位置（默认array.length）。
  *
  * var array = [1, 2, 3];
  *
  * _.fill(array, 'a');
  * console.log(array);
  * // => ['a', 'a', 'a']
  *
  * _.fill(Array(3), 2);
  * // => [2, 2, 2]
  *
  * _.fill([4, 6, 8, 10], '*', 1, 3);
  * // => [4, '*', '*', 10]
  */
  fill: function (array, value) {
    let start, end;
    '2' in arguments ? start = arguments['2'] : start = 0;    // 判断起始点
    '3' in arguments ? end = arguments['3'] : end = array.length;   // 判断终点
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  },
  // console.log(fill([4, 6, 8, 10], '*', 1, 3));



  /**
    * 减少一级array嵌套深度。.
    *
    * @category Array
    * @param {Array} (Array): 需要减少嵌套层级的数组.
    * @returns {Array} 返回减少嵌套层级后的新数组.
    * @example
    *
    * _.flatten([1, [2, [3, [4]], 5]]);
    * // => [1, 2, [3, [4]], 5]
  */
  flatten: function (array) {
    let res = [];
    for (let item of array) {
      if (Array.isArray(item)) {
        res.push(...item)
      } else {
        res.push(item)
      }
    }
    return res;
  },
  // console.log(flatten([1, [2, [3, [4]], 5]]));



  /**
   * 将array递归为一维数组.
   *
   * @category Array
   * @param {Array} array 需要处理的数组.
   * @returns {Array}  返回一个的新一维数组.
   * @example
   *
   * _.flattenDeep([1, [2, [3, [4]], 5]]);
   * // => [1, 2, 3, 4, 5]
   */
  flattenDeep: function (array) {
    let res = [];
    function flattenDeep(array) {
      let res = [];
      for (let item of array) {
        if (Array.isArray(item)) {
          res = [...res, ...flattenDeep(item)]     // 递归形式的遍历,如果遍历到的是数组,给他打散后与上一次的调用的结果拼接组成新的结果
        } else {
          res.push(item)
        }
      }
      return res
    }
    for (let item of array) {
      if (Array.isArray(item)) {
        res = [...res, ...flattenDeep(item)]     // 递归形式的遍历,如果遍历到的是数组,给他打散后与上一次的调用的结果拼接组成新的结果
      } else {
        res.push(item)
      }
    }
    return res
  },
  // console.log(flattenDeep([1, [2, [3, [4]], 5]]));




  /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array (Array): 需要减少嵌套层级的数组。
     * @param {number} [depth=1] [depth=1] (number):最多减少的嵌套层级数
     * @returns {Array} 返回减少嵌套层级后的新数组。.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
  flattenDepth: function (array, depth) {
    function spread(arr) {      // 定义一个打散数组的函数,专门对数组"去皮"
      let tmp = []
      for (let item of arr) {
        if (Array.isArray(item)) {
          tmp.push(...item)
        } else {
          tmp.push(item)
        }
      }
      return tmp
    }
    if (!depth || depth <= 0) {
      return array
    }
    let res;
    for (let i = 0; i < depth; i++) {     // 指定去皮次数
      res = spread(array);        // 将去完皮的数组传递到下次函数中继续去皮
      array = res;
    }
    return res;
  },
  // console.log(flattenDepth([1, [2, [3, [4]], 5]], -1));

  /**
   * Gets the last element of `array`.
   *
   * @category Array
   * @param {Array} array: 待检查的数组.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  join: function (array, separator) {
    let res = '';
    for (let item of array) {
      if (item === array[array.length - 1]) {
        res += item;
        break;
      }
      res += item.toString() + separator.toString();
    }
    return res;
  },

  /**
   * 获取array中的最后一个元素。
   *
   * @category Array
   * @param {Array}: 要检索的数组.
   * @returns {*}: 返回array中的最后一个元素.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  last: function (array) {
    return array[0] ? array[array.length - 1] : undefined;
  },


  /**
   * 这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
   *
   * @category Array
   * @param {Array} array 要搜索的数组.
   * @param {*} value 要搜索的值.
   * @param {number} [fromIndex=array.length-1] 开始搜索的索引值.
   * @returns {number} 返回匹配值的索引值，否则返回 -1。
   * @example
   *
   * _.lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   *
   * // Search from the `fromIndex`.
   * _.lastIndexOf([1, 2, 1, 2], 2, 2);
   * // => 1
   */
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {      // 从后往前遍历遇到匹配的值直接返回索引
      if (array[i] === value) {
        return i
      } ``
    }
    return -1;        // 未找到元素,返回 -1
  },


  /**
   * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
   *
   * @category Array
   * @param {Array} array: 要查询的数组.
   * @param {number} [n=0] 要返回元素的索引值.
   * @returns {*} 获取array数组的第n个元素。
   * @example
   *
   * var array = ['a', 'b', 'c', 'd'];
   *
   * _.nth(array, 1);
   * // => 'b'
   *
   * _.nth(array, -2);
   * // => 'c';
   */
  nth: function (array, n = 0) {
    return n >= 0 ? array[n] : array[array.length + n];
  },

  /**
   * 使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 
   * 如果 fromIndex 为负值，将从数组array尾端索引进行匹配
   *
   * @category Array
   * @param {Array} array 需要查找的数组.
   * @param {*} value 需要查找的值.
   * @param {number} [fromIndex=0] 开始查询的位置.
   * @returns {number} 返回 值value在数组中的索引位置, 没有找到为返回-1。
   * @example
   *
   * _.indexOf([1, 2, 1, 2], 2);
   * // => 1
   *
   * // Search from the `fromIndex`.
   * _.indexOf([1, 2, 1, 2], 2, 2);
   * // => 3
   */
  indexOf: function (array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1;
  },

  /**
   * 获取数组 array 的第一个元素。
   *
   * @category Array
   * @param {Array} array 要查询的数组。
   * @returns {*} 返回数组 array的第一个元素。
   * @example
   *
   * _.head([1, 2, 3]);
   * // => 1
   *
   * _.head([]);
   * // => undefined
   */

  head: function head(array) {
    return (array && array.length > 0) ? array[0] : undefined;     // 数组存在并且长度大于0
  },

  /**
   * 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）
   *
   * @category Array
   * @param {Array} array 要查询的数组.
   * @returns {Array} 返回截取后的数组array.
   * @example
   *
   * _.initial([1, 2, 3]);
   * // => [1, 2]
   */
  initial: function initial(array) {
    array.pop();
    return array;
  },


  /**
 * 反转array，使得第一个元素变为最后一个元素，
 * 第二个元素变为倒数第二个元素，依次类推.
 *
 * **Note:** 这个方法会改变原数组 array，基于Array#reverse
 *
 * @category Array
 * @param {Array} array 要修改的数组.
 * @returns {Array} 返回数组.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
  reverse: function (array) {
    let l = 0, r = array.length - 1;    // 左右指针遍历
    while (l < r) {
      [array[l], array[r]] = [array[r], array[l]]   // 左右指针交换值
      l++;
      r--;
    }
    return array
  },


  /**
  * 建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。
  * **Note:** Unlike `_.pull`, 不像_.pull, 这个方法会返回一个新数组
  * 
  * @category Array
  * @param {Array} array 要检查的数组.
  * @param {...*} [values] 要剔除的值.
  * @returns {Array} 返回过滤值后的新数组.
  * @example
  *
  * _.without([2, 1, 2, 3], 1, 2);
  * // => [3]
  */
  without: function (array, values) {
    let res = array.slice();
    function includes(arr, num) {   // 传入数组和数字,返回去除值后的数组
      let res = [];
      for (let item of arr) {
        if (item !== num) {
          res.push(item);
        }
      }
      return res
    }
    for (let key in arguments) {
      if (key === '0') {
        continue;
      }
      res = includes(res, arguments[key]);
    }
    return res;
  },

  pull: function (array, values) {
    let arr = Array.from(arguments)
    arr = arr.slice(1, arr.length)
    let res = [];
    for (let item of array) {
      if (!arr.includes(item)) {
        res.push(item)
      }
    }
    return res;
  },


  /**
   * 计算 array 中的最大值。
   * 如果 array 是 空的或者假值将会返回 undefined
   *
   * @category Math
   * @param {Array} array 要迭代的数组.
   * @returns {*} 返回最大的值.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */
  max: function (array) {
    let max = array[0];
    for (let item of array) {
      if (item > max) {
        max = item;
      }
    }
    return max;
  },


  /**
   * 计算 array 中值的总和.
   *
   * @category Math
   * @param {Array} array 要迭代的数组.
   * @returns {number} 返回总和.
   * @example
   *
   * _.sum([4, 2, 8, 6]);
   * // => 20
   */
  sum: function sum(array) {
    let sum = 0;
    for (let item of array) {
      sum += item;
    }
    return sum
  },


  /**
   * 重复N次给定字符串
   *
   * @category String
   * @param {string} [string=''] 要重复的字符串.
   * @param {number} [n=1] 重复的次数.
   * @returns {string} 返回重复的字符串.
   * @example
   *
   * _.repeat('*', 3);
   * // => '***'
   *
   * _.repeat('abc', 2);
   * // => 'abcabc'
   *
   * _.repeat('abc', 0);
   * // => ''
   */
  repeat: function repeat(string, n = 1) {
    let res = ''
    for (let i = 0; i < n; i++) {
      res += string;
    }
    return res
  },


  /**
   * 创建一个去重后的array数组副本。使用了SameValueZero 
   * 做等值比较。只有第一次出现的元素才会被保留。
   * 
   * @category Array
   * @param {Array} array  要检查的数组.
   * @returns {Array} 返回新的去重后的数组。
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  uniq: function uniq(array) {
    let res = [];
    for (let item of array) {
      if (!res.includes(item)) {
        res.push(item)
      }
    }
    return res
  },


  /**
   * 返回collection（集合）的长度，如果集合是类数组或字符串，
   * 返回其 length ；如果集合是对象，返回其可枚举属性的个数。
   *
   * @category Collection
   * @param {Array|Object|string} collection 要检查的集合.
   * @returns {number} 返回集合的长度
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */
  size: function size(collection) {
    let count = 0;
    for (let key in collection) {
      count++
    }
    return count;
  },

  /**
   * 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组.
   *
   * **Note:** 不同于_.difference, 这个方法会改变数组 array
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array 要修改的数组.
   * @param {Array} values 要移除值的数组.
   * @returns {Array} 返回数组.
   * @example
   *
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   *
   * _.pullAll(array, ['a', 'c']);
   * console.log(array);
   * // => ['b', 'b']
   */
  pullAll: function pullAll(array, values) {
    function include(arr, num) {    // 定义一个判断函数: 判断数组中是否存在该值
      for (let item of arr) {
        if (item === num) {
          return true
        }
      }
      return false;
    };
    for (let i = array.length - 1; i >= 0; i--) {   // 从后往前遍历,如果遍历到数组的目标元素,直接切掉
      if (include(values, array[i])) {
        array.splice(i, 1)
      }
    }
    return array;
  },

  /**
   * 获取除了array数组第一个元素以外的全部元素.
   *
   * @category Array
   * @param {Array} array 要检索的数组.
   * @returns {Array} 返回 array 数组的切片（除了array数组第一个元素以外的全部元素）.
   * @example
   *
   * _.tail([1, 2, 3]);
   * // => [2, 3]
   */
  tail: function tail(array) {
    let res = [];
    for (let i = 1; i < array.length; i++) {
      res.push(array[i])
    }
    return res;
  },


  /**
  * 创建一个数组切片，从array数组的起始元素开始提取n个元素
  *
  * @static
  * @memberOf _
  * @since 0.1.0
  * @category Array
  * @param {Array} array 要检索的数组.
  * @param {number} [n=1] 要提取的元素个数.
  * @returns {Array}  返回 array 数组的切片（从起始元素开始n个元素).
  * @example
  *
  * _.take([1, 2, 3]);
  * // => [1]
  *
  * _.take([1, 2, 3], 2);
  * // => [1, 2]
  *
  * _.take([1, 2, 3], 5);
  * // => [1, 2, 3]
  *
  * _.take([1, 2, 3], 0);
  * // => []
  */
  take: function take(array, n = 1) {
    let res = [];
    if (n >= array.length) {
      return array
    }
    while (n > 0) {
      res.push(array.shift())
      n--
    }
    return res;
  },


  /**
   * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array 要检索的数组.
   * @param {number} [n=1] 要提取的元素个数.
   * @returns {Array} 返回 array 数组的切片（从结尾元素开始n个元素）.
   * @example
   *
   * _.takeRight([1, 2, 3]);
   * // => [3]
   *
   * _.takeRight([1, 2, 3], 2);
   * // => [2, 3]
   *
   * _.takeRight([1, 2, 3], 5);
   * // => [1, 2, 3]
   *
   * _.takeRight([1, 2, 3], 0);
   * // => []
   */
  takeRight: function takeRight(array, n = 1) {
    let res = [], count = 0;
    if (n >= array.length) {
      return array;
    }
    if (n === 0) {
      return res
    }
    for (let i = array.length - 1; i >= 0; i--) {
      res.unshift(array[i])
      count++
      if (count === n) {
        return res
      }
    }
  },


  /**
   * 创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。 
   * 如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。 
   * 如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step
   *
   * **Note:** JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。
   *
   * @category Util
   * @param {number} [start=0] 开始的范围.
   * @param {number} end 结束的范围.
   * @param {number} [step=1] 范围的增量 或者 减量。.
   * @returns {Array} 返回范围内数字组成的新数组.
   * @example
   *
   * _.range(4);
   * // => [0, 1, 2, 3]
   *
   * _.range(-4);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 5);
   * // => [1, 2, 3, 4]
   *
   * _.range(0, 20, 5);
   * // => [0, 5, 10, 15]
   *
   * _.range(0, -4, -1);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.range(0);
   * // => []
   */
  range: function range(start, end, step) {
    let res = [];
    let arr = Array.from(arguments)     // 获取各个参数
    if (arr.length === 1) {
      start = 0;
      end = arr[0]
      step = 1;
    } else if (arr.length === 2) {
      start = arr[0]
      end = arr[1];
      step = 1;
    } else {
      start = arr[0]
      end = arr[1]
      step = arr[2]
    }
    if (step === 0) {         // 如果步进为0 ,直接返回指定的数组
      return new Array(end - start).fill(start)
    }
    while (start !== end) {
      res.push(start);
      start < end ? start += step : start += Math.abs(step) * -1
    }
    return res;
  },



  /**
   * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，
   * 数组的第二个元素包含所有给定数组的第二个元素，以此类推。
   *
   * @category Array
   * @param {...Array} [arrays] 要处理的数组.
   * @returns {Array} 返回分组元素的新数组。
   * @example
   *
   * _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   */
  zip: function zip(arrays) {
    let res = [], len = 0;
    let arr = Array.from(arguments)     // 将参数接收为二维数组
    for (let item of arr) {
      if (item.length > len) {        // 遍历二维数组,找出数组中最大的长度
        len = item.length;
      }
    }
    for (let i = 0; i < len; i++) {     // 取子数组中每项的指定索引值
      let tmp = []                    // 每项指定值push到空数组中,每次遍历完清空数组
      for (let item of arr) {
        tmp.push(item[i])

      }
      res.push(tmp)
    }
    return res
  },


  /**
   * 从collection（集合）中获得一个随机元素
   *
   * @category Collection
   * @param {Array|Object} collection 要取样的集合.
   * @returns {*} 返回随机元素.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   */
  sample: function sample(collection) {
    let arr = []
    if (Array.isArray(collection)) {
      arr = collection;
    } else {
      for (let key in collection) {
        arr.push(collection[key])
      }
    }
    return arr[~~(Math.random() * arr.length)]
  },


  /**
   * 检查 value 是否是原始 boolean 类型或者对象。
   *
   * @category Lang
   * @param {*} value 要检查的值.
   * @returns {boolean} 如果 value 是一个布尔值，那么返回 true，否则返回 false。.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  isBoolean: function isBoolean(value) {
    let val = typeof (value);
    if (value === null) {
      return false
    }
    return val == 'object' || val == 'boolean';   // new Boolean():构造器返回的是一个对象
  },



  /**
   * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。
   * （注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的
   *
   * @category Array
   * @param {...Array} [arrays] 要检查的数组.
   * @returns {Array} 返回一个新的联合数组.
   * @example
   *
   * _.union([2], [1, 2]);
   * // => [2, 1]
   */
  union: function union(arrays) {
    let res = [];
    for (let item of arguments) {     // arguments: 实质上是一个对象;但是也可以用数组方法遍历
      for (let i of item) {       // 遍历子数组
        if (!res.includes(i)) {
          res.push(i)
        }
      }
    }
    return res;
  },


  /**
   * 转换 value 为一个数组.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value 要转换的值.
   * @returns {Array} 返回转换后的数组.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  toArray: function toArray(value) {
    let res = [];
    for (let key in value) {     // 如果传进来的值是字符串或者对象(数组也是对象)可以用for...in遍历来循环遍历
      res.push(value[key])     // 如果是其他的值,也无法进行遍历
    }
    return res;
  },


  /**
   * 检查 value 是否是原始Number数值型 或者 对象
   *
   * @category Lang
   * @param {*} value 要检查的值.
   * @returns {boolean} 如果 value 为一个数值，那么返回 true，否则返回 false。
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  isNumber: function isNumber(value) {
    return typeof (value) === 'number';
  },



  /**
  * 转换string字符串为指定基数的整数。 如果基数是 undefined 或者 0，
  * 则radix基数默认是10，如果string字符串是16进制，则radix基数为 16。
  *
  * **Note:** 这个方法与ES5 implementation 的 parseInt是一样的.
  *
  * @category String
  * @param {string} string 要转换的字符串
  * @param {number} [radix=10] 转换基数
  * @returns {number} 返回转换后的整数
  * @example
  *
  * _.parseInt('08');
  * // => 8
  *
  * _.map(['6', '08', '10'], _.parseInt);
  * // => [6, 8, 10]
  */
  parseInt: function parseInt(string, radix = 10) {
    // 如果转换基数过大过小直接返回 NaN
    if (radix > 36 || radix <= 1) {
      return NaN;
    }

    // 定义一个字符串转数字的函数
    function strToNum(str) {
      if (Number.isNaN(Number(str))) {
        return str.toLowerCase().charCodeAt() - 87;
      } else {
        return Number(str);
      }
    }
    // 对字符串进行处理
    let arr = [], sum = 0;      // 结果数组
    for (let item of string) {
      if (item === '0' || item === ' ') {
        continue;
      }
      let num = strToNum(item)
      if (num >= radix) {     // 错误判断: 如果当前数值大于等于进制,报错
        return NaN;
      }
      arr.unshift(num)        // 用数组去存取字符串映射出来的数值
    }
    for (let i = 0; i < arr.length; i++) {      // 遍历数组,累计求和
      sum += arr[i] * radix ** i
    }
    return sum
  },


  /**
   * 转换 value 为一个数组.
   *
   * @category Lang
   * @param {*} value 要转换的值.
   * @returns {Array} 返回转换后的数组.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  toArray: function toArray(value) {
    let res = [];
    for (let key in value) {     // 如果传进来的值是字符串或者对象(数组也是对象)可以用for...in遍历来循环遍历
      res.push(value[key])     // 如果是其他的值,也无法进行遍历
    }
    return res;
  },

  /**
 * 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象.
 *
 * @category Array
 * @param {Array} pairs 键值对pairs.
 * @returns {Object} 返回一个新对象.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
  fromPairs: function fromPairs(pairs) {
    let obj = {}
    for (let item of pairs) {
      obj[item[0]] = item[1];
    }
    return obj
  },

  /**
   * 根据 precision（精度） 向上舍入 number。（注： precision（精度）可以理解为保留几位小数。）
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Math
   * @param {number} number 要向上舍入的值.
   * @param {number} [precision=0] 向上舍入的的精度
   * @returns {number} 返回向上舍入的值
   * @example
   *
   * _.ceil(4.006);
   * // => 5
   *
   * _.ceil(6.004, 2);
   * // => 6.01
   *
   * _.ceil(6040, -2);
   * // => 6100
   */

  // 如果ceil为0,直接取整+1,其他的情况下,对数字先乘倍数加一后再除回来,或者先除倍数+1后再乘回来,两种情况一种写法都能cover
  ceil: function ceil(number, precision = 0) {
    return precision === 0 ? ~~number + 1 : (~~(number * (10 ** precision)) + 1) / (10 ** precision);
  },

  /**
   * 计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array 要迭代的数组.
   * @returns {*} 返回最小的值
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * _.min([]);
   * // => undefined
   */
  min: function min(array) {
    let min = array[0];
    for (let item of array) {
      if (item < min) {
        min = item;
      }
    }
    return min;
  },


  /**
   * 根据 precision（精度） 四舍五入 number。.
   *
   * @category Math
   * @param {number} number 要四舍五入的数字.
   * @param {number} [precision=0] 四舍五入的精度.
   * @returns {number} 返回四舍五入的数字.
   * @example
   *
   * _.round(4.006);
   * // => 4
   *
   * _.round(4.006, 2);
   * // => 4.01
   *
   * _.round(4060, -2);
   * // => 4100
   */
  round: function round(number, precision = 0) {
    let num = ~~(number * (10 ** (precision + 1)))      // 对数字多乘一位到指定位置后取整
    let rem = num % 10;       // rem: 去出整数的尾巴数
    if (rem >= 5) {           // 如果>=5,则给前位加一
      num = num - rem + 10
    }
    return num / (10 ** (precision + 1))      // 操作回原来的值
  },

  /**
   * 两数相减.
   *
   * @category Math
   * @param {number} minuend 相减的第一个数.
   * @param {number} subtrahend 相减的第二个数.
   * @returns {number} 返回差.
   * @example
   *
   * _.subtract(6, 4);
   * // => 2
   */
  subtract: function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
  },


  /**
 * 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象.
 *
 * @category Array
 * @param {Array} pairs 键值对pairs.
 * @returns {Object} 返回一个新对象.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
  fromPairs: function fromPairs(pairs) {
    let obj = {}
    for (let item of pairs) {
      obj[item[0]] = item[1];
    }
    return obj
  },


  /**
 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，
 * 使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
 *
 * @category Array
 * @param {...Array} [arrays] 待检查的数组.
 * @returns {Array} 返回一个包含所有传入数组交集元素的新数组.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
  intersection: function intersection(arrays) {
    let arr = [], obj = {}, tmp = [...arguments], res = [];
    for (let item of tmp) {     // 数组打散成一维数组
      arr.push(...item);
    }
    for (let val of arr) {      // 遍历数组存入到对象中
      val in obj ? obj[val]++ : obj[val] = 1;
    }
    for (let key in obj) {      // 遍历对象找出出现过数组次数的元素
      if (obj[key] === tmp.length) {
        res.push(Number(key))
      }
    }
    return res
  },


  /**
  * 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 
  * iteratee（迭代函数）调用3个参数.
  *
  * Many lodash methods are guarded to work as iteratees for methods like
  * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
  *
  * The guarded methods are:
  * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
  * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
  * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
  * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
  *
  * @param {Array|Object} collection 用来迭代的集合.
  * @param {Function} [iteratee=_.identity] 每次迭代调用的函数.
  * @returns {Array} 返回新的映射后数组.
  * @example
  *
  * function square(n) {
  *   return n * n;
  * }
  *
  * _.map([4, 8], square);
  * // => [16, 64]
  *
  * _.map({ 'a': 4, 'b': 8 }, square);
  * // => [16, 64] (iteration order is not guaranteed)
  *
  * var users = [
  *   { 'user': 'barney' },
  *   { 'user': 'fred' }
  * ];
  *
  * // The `_.property` iteratee shorthand.
  * _.map(users, 'user');
  * // => ['barney', 'fred']
  */
  map: function map(collection, iteratee) {
    let res = [];
    // 如果第二个参数是字符串
    if (typeof (iteratee) === 'string') {
      for (let i = 0; i < collection.length; i++) {
        if (!iteratee.includes('.')) {        // 字符串中包含'.'
          res.push(collection[i][iteratee])
        } else {                    // 不包含 "."
          let obj = collection[i], tmp;
          for (let str of iteratee) {
            if (str === '.') {
              continue;
            }
            tmp = obj[str];
            obj = tmp;
          }
          res.push(tmp)
        }
      }
    }

    // 如果第二个参数为函数
    if (typeof (iteratee) === 'function') {
      for (let key in collection) {
        res.push(iteratee(collection[key], Number(key), collection))
      }
    }
    return res
  },

  /**
   * 这个方法类似_.summin 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 
   * iteratee 会调用1个参数: (value) 。
   *
   * @category Math
   * @param {Array} array 要迭代的数组
   * @param {Function} [iteratee=_.identity] 调用每个元素的迭代函数
   * @returns {number} 返回总和.
   * @example
   *
   * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
   *
   * _.sumBy(objects, function(o) { return o.n; });
   * // => 20
   *
   * // The `_.property` iteratee shorthand.
   * _.sumBy(objects, 'n');
   * // => 20
   */
  sumBy: function sumBy(array, iteratee) {
    let sum = 0;
    for (let item of array) {
      sum += typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    }
    return sum;
  },


  /**
   * 两个数相除.
   *
   * @category Math
   * @param {number} dividend 相除的第一个数.
   * @param {number} divisor 相除的第二个数
   * @returns {number} 返回商数
   * @example
   *
   * _.divide(6, 4);
   * // => 1.5
   */
  divide: function divide(dividend, divisor) {
    return dividend / divisor;
  },



  /**
   * 根据 precision（精度） 向下舍入 number。
   * 注： precision（精度）可以理解为保留几位小数。）
   *
   * @category Math
   * @param {number} number 要向下舍入的值.
   * @param {number} [precision=0] 向下舍入的精度
   * @returns {number} 返回向下舍入的值.
   * @example
   *
   * _.floor(4.006);
   * // => 4
   *
   * _.floor(0.046, 2);
   * // => 0.04
   *
   * _.floor(4060, -2);
   * // => 4000
   */
  floor: function floor(number, precision = 0) {
    let count, num, rem;        // 计数,小数移位后的整数,需要减去的余数
    for (let i = 0; i < Infinity; i++) {
      if (!(number * (10 ** i) % 1)) {
        count = i;
        break;
      }
    }
    num = number * (10 ** count);
    rem = num % (10 ** Math.abs(precision - 1));
    num -= rem;
    return num / (10 ** count)
  },



  /**
   * 两个数相乘.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Math
   * @param {number} multiplier 相乘的第一个数
   * @param {number} multiplicand 相乘的第二个数
   * @returns {number} 返回乘积
   * @example
   *
   * _.multiply(6, 4);
   * // => 24
   */


  multiply: function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
  },


  /**
     压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，
     每次返回的值会作为下一次迭代使用(注：作为iteratee（迭代函数）的第一个参数使用)。 
     如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。
     (注：accumulator参数在第一次迭代的时候作为iteratee（迭代函数）第一个参数使用。) iteratee 调用4个参数：
    (accumulator, value, index|key, collection).
      *
      * @category Collection
      * @param {Array|Object} collection 用来迭代的集合.
      * @param {Function} [iteratee=_.identity] 每次迭代调用的函数.
      * @param {*} [accumulator] 初始值.
      * @returns {*} 返回累加后的值
      * @see _.reduceRight
      * @example
      *
      * _.reduce([1, 2], function(sum, n) {
      *   return sum + n;
      * }, 0);
      * // => 3
      *
      * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
      *   (result[value] || (result[value] = [])).push(key);
      *   return result;
      * }, {});
      * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
      */
  reduce: function reduce(collection, iteratee, accumulator) {
    for (let key in collection) {
      if (!accumulator) {
        var accumulator = collection[key];
        continue;
      }
      accumulator = iteratee(accumulator, collection[key], key, collection)
    }
    return accumulator;
  },


  /**
   * C检查 value 是否为一个空对象，集合，映射或者set。 
   * 判断的依据是除非是有枚举属性的对象，length 大于 0 的
   *  arguments object, array, string 或类jquery选择器。
   *
   * @category Lang
   * @param {*} value 要检查的值.
   * @returns {boolean} 如果 value 为空，那么返回 true，否则返回 false
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  isEmpty: function isEmpty(value) {
    // 如果for...in循环能进去的话说明是可枚举对象
    for (let key in value) {
      return false
    }
    return true;
  },


  /**
   * 两个数相加
   *
   * @category Math
   * @param {number} augend 相加的第一个数
   * @param {number} addend 相加的第二个数
   * @returns {number} 返回总和.
   * @example
   *
   * _.add(6, 4);
   */
  add: function add(augend, addend) {
    return augend + addend;
  },


  /**
     * 产生一个包括 lower 与 upper 之间的数。 
     * 如果只提供一个参数返回一个0到提供数之间的数。 
     * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
     *
     * @category Number
     * @param {number} [lower=0] 下限.
     * @param {number} [upper=1] 上限.
     * @param {boolean} [floating] 指定是否返回浮点数
     * @returns {number} 返回随机数.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
  random: function random(lower, upper, floating) {
    let arr = Array.from(arguments), numCount;
    // 判断是否为小数
    floating = arr.some(i => i % 1 !== 0 && typeof i === 'number' || i === true)
    // 去出参数中数字的个数进行后续判断
    numCount = arr.filter(i => typeof i === 'number').length;
    // 两个数字参数和一个数字参数两种情况分别赋值
    var [min, max] = numCount === 2 ? [arr[0], arr[1]] : [0, arr[0]];
    let fn = (Math.random() * (max - min) + min);   //含最大值，含最小值 
    return floating ? fn : ~~fn;
  },






  /**
   * 如果string字符串长度小于 length 则在左侧填充字符。 
   * 如果超出length长度则截断超出的部分。
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] 要填充的字符串
   * @param {number} [length=0] 填充的长度
   * @param {string} [chars=' '] 填充字符
   * @returns {string} 返回填充后的字符串
   * @example
   *
   * _.padStart('abc', 6);
   * // => '   abc'
   *
   * _.padStart('abc', 6, '_-');
   * // => '_-_abc'
   *
   * _.padStart('abc', 3);
   * // => 'abc'
   */
  padStart: function padStart(string, length, chars) {
    let arr = Array.from(arguments)
    if (arr.length === 1 || length <= string.length) return string
    if (!arr[2]) chars = ' ';
    let res = '';
    while (res.length < (length - string.length)) {
      res += chars
    }
    return res.slice(0, length - string.length) + string
  },


  /**
    * 如果string字符串长度小于 length 则在右侧填充字符。 
   * 如果超出length长度则截断超出的部分。
   *
   * @category String
   * @param {string} [string=''] 要填充的字符串.
   * @param {number} [length=0] 填充的长度
   * @param {string} [chars=' '] 填充字符
   * @returns {string} 返回填充后的字符串
   *
   * _.padEnd('abc', 6);
   * // => 'abc   '
   *
   * _.padEnd('abc', 6, '_-');
   * // => 'abc_-_'
   *
   * _.padEnd('abc', 3);
   * // => 'abc'
   */
  padEnd: function padEnd(string, length, chars) {
    let arr = Array.from(arguments)
    if (arr.length === 1 || length <= string.length) return string
    if (!arr[2]) chars = ' ';
    while (string.length < length) {
      string += chars
    }
    return string.slice(0, length)
  },


  /**
   * 如果string字符串长度小于 length 则从左侧和右侧填充字符。 
   * 如果没法平均分配，则截断超出的长度。
   *
   * @category String
   * @param {string} [string=''] 要填充的字符串
   * @param {number} [length=0] 填充的长度
   * @param {string} [chars=' '] 填充字符
   * @returns {string} 返回填充后的字符串
   * @example
   *
   * _.pad('abc', 8);
   * // => '  abc   '
   *
   * _.pad('abc', 8, '_-');
   * // => '_-abc_-_'
   *
   * _.pad('abc', 3);
   * // => 'abc'
   */
  pad: function pad(string = '', length = 0, chars = ' ') {
    let index = ~~((length - string.length) / 2)
    let str = new Array(Math.ceil(length / chars.length)).fill(chars).join('')
    let res = (str.substring(0, index) + string + str.substring(index)).substring(0, length)
    return res
  },


  /**
   * 转换字符串string首字母为大写，剩下为小写。
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] 要大写开头的字符串
   * @returns {string} 返回大写开头的字符串
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */
  capitalize: function capitalize(string = '') {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
  },


  /**
   * 转换字符串string为驼峰写法。
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] 要转换的字符串.
   * @returns {string} 返回驼峰写法的字符串
   * @example
   *
   * _.camelCase('Foo Bar');
   * // => 'fooBar'
   *
   * _.camelCase('--foo-bar--');
   * // => 'fooBar'
   *
   * _.camelCase('__FOO_BAR__');
   * // => 'fooBar'
   */
  camelCase: function camelCase(string) {
    let res = '';
    string = string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() !== string[i].toUpperCase()) {
        res += string.charAt(i - 1).toLowerCase() === string.charAt(i - 1).toUpperCase() ? string[i].toUpperCase() : string[i];
      }
    }
    return `${res[0].toLowerCase()}${res.substring(1)}`
  },


  /**
   * 检查字符串string是否以给定的target字符串结尾。
   *
   * @category String
   * @param {string} [string=''] 要检索的字符串
   * @param {string} [target] 要检索字符
   * @param {number} [position=string.length] 检索的位置
   * @returns {boolean} (boolean): 如果字符串string以target字符串结尾，那么返回 true，否则返回 false。
   * @example
   *
   * _.endsWith('abc', 'c');
   * // => true
   *
   * _.endsWith('abc', 'b');
   * // => false
   *
   * _.endsWith('abc', 'b', 2);
   * // => true
   */
  endsWith: function endsWith(string = '', target, position = string.length) {
    return string[position - 1] === target
  },


  /**
   * 转换字符串string为kebab case.
   *
   * @category String
   * @param {string} [string=''] 要转换的字符串
   * @returns {string} 返回转换后的字符串
   * @example
   *
   * _.kebabCase('Foo Bar');
   * // => 'foo-bar'
   *
   * _.kebabCase('fooBar');
   * // => 'foo-bar'
   *
   * _.kebabCase('__FOO_BAR__');
   * // => 'foo-bar'
   */
  kebabCase: function kebabCase(string) {
    let isWord = str => str.toLowerCase() !== str.toUpperCase(), arr = [], flag = false, res = '';
    flag = [...string].every(i => isWord(i))
    if (flag) {
      for (let val of string) {
        if (val.toUpperCase() === val) res += '-'
        res += val
      }
      return res.toLowerCase()
    }
    for (let l = 0, r = l; l < string.length; l++, r++) {
      if (isWord(string.charAt(l))) {
        while (isWord(string.charAt(r))) {
          r++;
        }
        arr.push(string.substring(l, r))
        l = r;
      }
    }
    return arr.join('-').toLowerCase()
  },


  /**
    * 转换字符串string的首字母为小写。
    *
    * @static
    * @memberOf _
    * @since 4.0.0
    * @category String
    * @param {string} [string=''] 要转换的字符串
    * @returns {string} 返回转换后的字符串
    * @example
    *
    * _.lowerFirst('Fred');
    * // => 'fred'
    *
    * _.lowerFirst('FRED');
    * // => 'fRED'
    */
  lowerFirst: function lowerFirst(string = '') {
    return string.substring(0, 1).toLowerCase() + string.substring(1)
  },


  /**
   * 转换整个string字符串的字符为小写，类似String#toLowerCase。
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] 要转换的字符串
   * @returns {string} 返回小写的字符串
   * @example
   *
   * _.toLower('--Foo-Bar--');
   * // => '--foo-bar--'
   *
   * _.toLower('fooBar');
   * // => 'foobar'
   *
   * _.toLower('__FOO_BAR__');
   * // => '__foo_bar__'
   */
  toLower: function toLower(string) {
    return string.toLowerCase(string)
  },



  /**
   * 转换整个string字符串的字符为大写，类似String#toUpperCase.
   *
   * @category String
   * @param {string} [string=''] 要转换的字符串
   * @returns {string} 返回大写的字符串
   * @example
   *
   * _.toUpper('--foo-bar--');
   * // => '--FOO-BAR--'
   *
   * _.toUpper('fooBar');
   * // => 'FOOBAR'
   *
   * _.toUpper('__foo_bar__');
   * // => '__FOO_BAR__'
   */
  toUpper: function toUpper(string) {
    return string.toUpperCase(string)
  },


  /**
   * 从string字符串中移除前面和后面的 空格 或 指定的字符。
   *
   * @category String
   * @param {string} [string=''] 要处理的字符串
   * @param {string} [chars=whitespace] 要移除的字符
   * @returns {string} 返回处理后的字符串
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */

  trim: function trim(string, chars = ' ') {
    let arr = [...string]
    while (chars.includes(arr[0])) {
      arr.shift()
    }
    while (chars.includes(arr[arr.length - 1])) {
      arr.pop()
    }
    return arr.join('')
  },



  /**
   * 从string字符串中移除后面的 空格 或 指定的字符。
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] 要处理的字符串
   * @param {string} [chars=whitespace] 要移除的字符
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} 返回处理后的字符串
   * @example
   *
   * _.trimEnd('  abc  ');
   * // => '  abc'
   *
   * _.trimEnd('-_-abc-_-', '_-');
   * // => '-_-abc'
   */
  trimEnd: function trimEnd(string, chars) {
    let arr = [...string]
    while (chars.includes(arr[arr.length - 1])) {
      arr.pop()
    }
    return arr.join('')
  },


  /**
   * 从string字符串中移除前面的 空格 或 指定的字符。
   *
   * @category String
   * @param {string} [string=''] 要处理的字符串
   * @param {string} [chars=whitespace] 要移除的字符
   * @returns {string} 返回处理后的字符串
   * @example
   *
   * _.trimStart('  abc  ');
   * // => 'abc  '
   *
   * _.trimStart('-_-abc-_-', '_-');
   * // => 'abc-_-'
   */
  trimStart: function trimStart(string, chars = ' ') {
    let arr = [...string]
    while (chars.includes(arr[0])) {
      arr.shift()
    }
    return arr.join('')
  },


  /**
   * 转换字符串string的首字母为大写。
   *
   * @category String
   * @param {string} [string=''] 要转换的字符串
   * @returns {string} 返回转换后的字符串
   * @example
   *
   * _.upperFirst('fred');
   * // => 'Fred'
   *
   * _.upperFirst('FRED');
   * // => 'FRED'
   */
  upperFirst: function upperFirst(string) {
    return string[0].toUpperCase() + string.substring(1)
  },


  /**
   * 转换字符串string以空格分开单词，并转换为小写。
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] 要转换的字符串
   * @returns {string} 返回转换后的字符串
   * @example
   *
   * _.lowerCase('--Foo-Bar--');
   * // => 'foo bar'
   *
   * _.lowerCase('fooBar');
   * // => 'foo bar'
   *
   * _.lowerCase('__FOO_BAR__');
   * // => 'foo bar'
   */
  lowerCase: function lowerCase(string) {
    let isWord = str => str.toLowerCase() !== str.toUpperCase();
    let flag = [...string].every(i => isWord(i))
    let res = '', arr = [];
    if (flag) {
      for (let item of string) {
        if (item.toUpperCase() === item) {
          res += ' '
        }
        res += item
      }
      return res.toLowerCase()
    }
    for (let l = 0, r = l; l < string.length; l++, r++) {
      if (isWord(string[l])) {
        while (isWord(string[r])) {
          r++;
        }
        arr.push(string.substring(l, r))
        l = r;
      }
    }
    return arr.join(' ').toLowerCase()
  },


  /**
   * 转换字符串string为 空格 分隔的大写单词。
   * 
   * @category String
   * @param {string} [string=''] 要转换的字符串
   * @returns {string} 返回大写单词
   * @example
   *
   * _.upperCase('--foo-bar');
   * // => 'FOO BAR'
   *
   * _.upperCase('fooBar');
   * // => 'FOO BAR'
   *
   * _.upperCase('__foo_bar__');
   * // => 'FOO BAR'
   */
  upperCase: function upperCase(string) {
    let isWord = str => str.toLowerCase() !== str.toUpperCase();
    let flag = [...string].every(i => isWord(i))
    let res = '', arr = [];
    if (flag) {
      for (let item of string) {
        if (item.toUpperCase() === item) {
          res += ' '
        }
        res += item
      }
      return res.toUpperCase()
    }
    for (let l = 0, r = l; l < string.length; l++, r++) {
      if (isWord(string.charAt(l))) {
        while (isWord(string.charAt(r))) {
          r++;
        }
        arr.push(string.substring(l, r))
        l = r;
      }
    }
    return arr.join(' ').toUpperCase()
  },

  /**
 * 检查 value 是否是 Array 类对象。
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果value是一个数组返回 true，否则返回 false。
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
  isArray: function isArray(value) {
    return Array.isArray(value)
  },



  /**
   * 创建一个返回 value 的函数。
   *
   * @category Util
   * @param {*} value 要新函数返回的值。
   * @returns {Function} 返回新的常量函数。
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  constant: function constant(value) {
    return () => value
  },


  /**
   * 这个方法返回首个提供的参数
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value 任何值
   * @returns {*} 返回值.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  identity: function identity(value) {
    return value;
  },


  /**
   * 这个方法返回一个新的空数组
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} 返回新的空数组
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  stubArray: function stubArray() {
    return []
  },


  /**
   * 这个方法返回 false.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} 返回 `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  stubFalse: function stubFalse() {
    return false;
  },

  /**
   * 这个方法返回一个空对象
   *
   * @category Util
   * @returns {Object} 返回新的空对象
   * @example
   *
   * var objects = _.times(2, _.stubObject);
   *
   * console.log(objects);
   * // => [{}, {}]
   *
   * console.log(objects[0] === objects[1]);
   * // => false
   */
  stubObject: function stubObject() {
    return {};
  },


  /**
   * 这个方法返回一个空字符串
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {string} 返回新的空字符串
   * @example
   *
   * _.times(2, _.stubString);
   * // => ['', '']
   */
  stubString: function stubString() {
    return ' '
  },


  /**
   * 这个方法返回 true
   *
   * @since 4.13.0
   * @category Util
   * @returns {boolean} 返回 true。
   * @example
   *
   * _.times(2, _.stubTrue);
   * // => [true, true]
   */
  stubTrue: function stubTrue() {
    return true;
  },



  /**
   * 调用 iteratee n 次，每次调用返回的结果存入到数组中。
   *  iteratee 调用入1个参数： (index)。
   *
   * @category Util
   * @param {number} n (number): 调用 iteratee 的次数。
   * @param {Function} [iteratee=_.identity] 每次迭代调用的函数
   * @returns {Array} 返回调用结果的数组
   * @example
   *
   * _.times(3, String);
   * // => ['0', '1', '2']
   *
   *  _.times(4, _.constant(0));
   * // => [0, 0, 0, 0]
   */

  times: function times(n, identity) {
    let res = []
    while (n) {
      res.push(identity())
      n--
    }
    return res;
  },


  /**
   * 转化 value 为属性路径的数组 。
   *
   * @category Util
   * @param {*} value 要转换的值
   * @returns {Array} 返回包含属性路径的数组。
   * @example
   *
   * _.toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * _.toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */
  toPath: function toPath(value) {
    let str = ''
    for (let item of value) {
      if (item === '[') {
        str += '.'
      } else {
        if (item === ']') continue
        str += item
      }
    }
    return str.split('.')
  },


  /**
   * 这个方法返回 undefined。
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
  noop: function noop() {
    return undefined;
  },


  /**
   * 创建一个函数，这个函数返回第 n 个参数。
   * 如果 n为负数，则返回从结尾开始的第n个参数。
   * 
   * @since 4.0.0
   * @category Util
   * @param {number} [n=0] The index of the argument to return.
   * @returns {Function} Returns the new pass-thru function.
   * @example
   *
   * var func = _.nthArg(1);
   * func('a', 'b', 'c', 'd');
   * // => 'b'
   *
   * var func = _.nthArg(-2);
   * func('a', 'b', 'c', 'd');
   * // => 'c'
   */
  nthArg: function nthArg(n) {
    return (...args) => args.slice(n)[0]    // 用slice()切割出前n项,返回第n项
  },


  /**
  * 生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。
  *
  * @static
  * @since 0.1.0
  * @memberOf _
  * @category Util
  * @param {string} [prefix=''] 要添加到ID前缀的值。
  * @returns {string} 返回唯一ID。
  * @example
  *
  * _.uniqueId('contact_');
  * // => 'contact_104'
  *
  * _.uniqueId();
  * // => '105'
  */
  countId: 0,

  uniqueId: function uniqueId(prefix = '') {
    return `${prefix}${++this.countId}`
  },



  /**
   * 这个方法类似_.range ， 除了它是降序生成值的。
   *
   * @since 4.0.0
   * @category Util
   * @param {number} [start=0] 开始的范围
   * @param {number} end 结束的范围
   * @param {number} [step=1] 范围的增量 或者 减量。
   * @returns {Array} 返回范围内数字组成的新数组。
   * @see _.inRange, _.range
   * @example
   *
   * _.rangeRight(4);
   * // => [3, 2, 1, 0]
   *
   * _.rangeRight(-4);
   * // => [-3, -2, -1, 0]
   *
   * _.rangeRight(1, 5);
   * // => [4, 3, 2, 1]
   *
   * _.rangeRight(0, 20, 5);
   * // => [15, 10, 5, 0]
   *
   * _.rangeRight(0, -4, -1);
   * // => [-3, -2, -1, 0]
   *
   * _.rangeRight(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.rangeRight(0);
   * // => []
   */
  rangeRight: function rangeRight(start = 0, end, step = 1) {
    return range(start, end, step).reverse();
  },



  /**
   * 创建一个返回给定对象的 path 的值的函数。
   *
   * @category Util
   * @param {Array|string} path 要得到值的属性路径
   * @returns {Function} 返回新的函数
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  property: function property(path) {
    return function (obj) {
      for (let item of jxiansen.toPath(path)) {
        var res = obj[item]
        obj = res
      }
      return res;
    }
  },


  /**
   * _.property的反相版本。 这个方法创建的函数返回给定 path 在object上的值。
   *
   * @category Util
   * @param {Object} object 要检索的对象
   * @returns {Function} 返回新的函数
   * @example
   *
   * var array = [0, 1, 2],
   *     object = { 'a': array, 'b': array, 'c': array };
   *
   * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
   * // => [2, 0]
   *
   * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
   * // => [2, 0]
   */
  propertyOf: function propertyof(object) {
    return function (path) {
      let arr = jxiansen.toPath(path), res;
      for (let item of arr) {
        res = object[item]
        object = res;
      }
      return res;
    }
  },
}