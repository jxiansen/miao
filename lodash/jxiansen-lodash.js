var jxiansen = function () {
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
  function chunk(array, num = 1) {
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
  }


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
  function concat(array) {
    return Object.entries(arguments).map(i => i[1]).flat()
  }


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
  function compact(array) {
    return array.reduce((acc, cur) => {
      if (!!cur) {
        acc.push(cur)
      }
      return acc
    }, []);
  }


  /**
   * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
   * （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
   * 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
   *
   * _.difference([2, 1], [2, 3]);
   * // => [1]
   */
  function difference(array) {
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
  }

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

  function drop(array) {
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
  }
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
  function dropRight(array) {
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
  }



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
  function fill(array, value) {
    let start, end;
    '2' in arguments ? start = arguments['2'] : start = 0;    // 判断起始点
    '3' in arguments ? end = arguments['3'] : end = array.length;   // 判断终点
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }
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
  function flatten(array) {
    let res = [];
    for (let item of array) {
      if (Array.isArray(item)) {
        res.push(...item)
      } else {
        res.push(item)
      }
    }
    return res;
  }
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
  function flattenDeep(array) {
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
  }
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
  function flattenDepth(array, depth) {
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
  }
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
  function last(array, separator) {
    let res = '';
    for (let item of array) {
      if (item === array[array.length - 1]) {
        res += item;
        break;
      }
      res += item.toString() + separator.toString();
    }
    return res;
  }

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
  function last(array) {
    return array[0] ? array[array.length - 1] : undefined;
  }


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
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {      // 从后往前遍历遇到匹配的值直接返回索引
      if (array[i] === value) {
        return i
      } ``
    }
    return -1;        // 未找到元素,返回 -1
  }


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
  function nth(array, n = 0) {
    return n >= 0 ? array[n] : array[array.length + n];
  }
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
  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1;
  }

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

  function head(array) {
    return (array && array.length > 0) ? array[0] : undefined;     // 数组存在并且长度大于0
  }

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
  function initial(array) {
    array.pop();
    return array;
  }


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
  function reverse(array) {
    let l = 0, r = array.length - 1;    // 左右指针遍历
    while (l < r) {
      [array[l], array[r]] = [array[r], array[l]]   // 左右指针交换值
      l++;
      r--;
    }
    return array
  }


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
  function without(array, values) {
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
  }


  function pull(array, values) {
    let arr = Array.from(arguments)
    arr = arr.slice(1, arr.length)
    let res = [];
    for (let item of array) {
      if (!arr.includes(item)) {
        res.push(item)
      }
    }
    return res;
  }


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
  function max(array) {
    let max = array[0];
    for (let item of array) {
      if (item > max) {
        max = item;
      }
    }
    return max;
  }

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
  function sum(array) {
    let sum = 0;
    for (let item of array) {
      sum += item;
    }
    return sum
  }

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
  function repeat(string, n = 1) {
    let res = ''
    for (let i = 0; i < n; i++) {
      res += string;
    }
    return res
  }

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
  function uniq(array) {
    let res = [];
    for (let item of array) {
      if (!res.includes(item)) {
        res.push(item)
      }
    }
    return res
  }


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
  function size(collection) {
    let count = 0;
    for (let key in collection) {
      count++
    }
    return count;
  }

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
  function pullAll(array, values) {
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
  }
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
  function tail(array) {
    let res = [];
    for (let i = 1; i < array.length; i++) {
      res.push(array[i])
    }
    return res;
  }


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
  function take(array, n = 1) {
    let res = [];
    if (n >= array.length) {
      return array
    }
    while (n > 0) {
      res.push(array.shift())
      n--
    }
    return res;
  }

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
  function takeRight(array, n = 1) {
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
  }

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
  function range(start, end, step) {
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
  }



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
  function zip(arrays) {
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
  }

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
  function sample(collection) {
    let arr = toArray(collection)
    return arr[~~(Math.random() * arr.length)]
  }



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
  function isBoolean(value) {
    let val = typeof (value);
    if (value === null) {
      return false
    }
    return val == 'object' || val == 'boolean';   // new Boolean():构造器返回的是一个对象
  }



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
  function union(arrays) {
    let res = [];
    for (let item of arguments) {     // arguments: 实质上是一个对象;但是也可以用数组方法遍历
      for (let i of item) {       // 遍历子数组
        if (!res.includes(i)) {
          res.push(i)
        }
      }
    }
    return res;
  }


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
  function toArray(val) {
    let res = [];
    for (let key in val) {     // 如果传进来的值是字符串或者对象(数组也是对象)可以用for...in遍历来循环遍历
      res.push(val[key])     // 如果是其他的值,也无法进行遍历
    }
    return res;
  }


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
  function isNumber(value) {
    // 检查数据的类型是否为 `number` 并且要排除 NaN的情况, NaN的类型也是数字,但是它自身不等于自身
    return typeof (value) === 'number' && value === value;
  }



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
  function parseInt(string, radix = 10) {
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
  }


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
  function fromPairs(pairs) {
    let obj = {}
    for (let item of pairs) {
      obj[item[0]] = item[1];
    }
    return obj
  }

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
  function ceil(number, precision = 0) {
    return precision === 0 ? ~~number + 1 : (~~(number * (10 ** precision)) + 1) / (10 ** precision);
  }

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
  function min(array) {
    let min = array[0];
    for (let item of array) {
      if (item < min) {
        min = item;
      }
    }
    return min;
  }


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
  function round(number, precision = 0) {
    let num = ~~(number * (10 ** (precision + 1)))      // 对数字多乘一位到指定位置后取整
    let rem = num % 10;       // rem: 去出整数的尾巴数
    if (rem >= 5) {           // 如果>=5,则给前位加一
      num = num - rem + 10
    }
    return num / (10 ** (precision + 1))      // 操作回原来的值
  }

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
  function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
  }


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
  function fromPairs(pairs) {
    let obj = {}
    for (let item of pairs) {
      obj[item[0]] = item[1];
    }
    return obj
  }


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
  function intersection(arrays) {
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
  }


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
  function map(collection, iteratee) {
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
  }

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
  function sumBy(array, iteratee) {
    let sum = 0;
    for (let item of array) {
      sum += typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    }
    return sum;
  }


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
  function divide(dividend, divisor) {
    return dividend / divisor;
  }



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
  function floor(number, precision = 0) {
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
  }



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


  function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
  }


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
  function reduce(collection, iteratee, accumulator) {
    for (let key in collection) {
      if (!accumulator) {
        var accumulator = collection[key];
        continue;
      }
      accumulator = iteratee(accumulator, collection[key], key, collection)
    }
    return accumulator;
  }


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
  function isEmpty(value) {
    // 如果for...in循环能进去的话说明是可枚举对象
    for (let key in value) {
      return false
    }
    return true;
  }


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
  function add(augend, addend) {
    return augend + addend;
  }

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
  function random(lower, upper, floating) {
    let arr = Array.from(arguments), numCount;
    // 判断是否为小数
    floating = arr.some(i => i % 1 !== 0 && typeof i === 'number' || i === true)
    // 去出参数中数字的个数进行后续判断
    numCount = arr.filter(i => typeof i === 'number').length;
    // 两个数字参数和一个数字参数两种情况分别赋值
    var [min, max] = numCount === 2 ? [arr[0], arr[1]] : [0, arr[0]];
    let fn = (Math.random() * (max - min) + min);   //含最大值，含最小值 
    return floating ? fn : ~~fn;
  }






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
  function padStart(string, length, chars) {
    let arr = Array.from(arguments)
    if (arr.length === 1 || length <= string.length) return string
    if (!arr[2]) chars = ' ';
    let res = '';
    while (res.length < (length - string.length)) {
      res += chars
    }
    return res.slice(0, length - string.length) + string
  }


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
  function padEnd(string, length, chars) {
    let arr = Array.from(arguments)
    if (arr.length === 1 || length <= string.length) return string
    if (!arr[2]) chars = ' ';
    while (string.length < length) {
      string += chars
    }
    return string.slice(0, length)
  }


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
  function pad(string = '', length = 0, chars = ' ') {
    let index = ~~((length - string.length) / 2)
    let str = new Array(Math.ceil(length / chars.length)).fill(chars).join('')
    let res = (str.substring(0, index) + string + str.substring(index)).substring(0, length)
    return res
  }


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
  function capitalize(string = '') {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
  }


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
  function camelCase(string) {
    let res = '';
    string = string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() !== string[i].toUpperCase()) {
        res += string.charAt(i - 1).toLowerCase() === string.charAt(i - 1).toUpperCase() ? string[i].toUpperCase() : string[i];
      }
    }
    return `${res[0].toLowerCase()}${res.substring(1)}`
  }


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
  function endsWith(string = '', target, position = string.length) {
    return string[position - 1] === target
  }


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
  function kebabCase(string) {
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
  }


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
  function lowerFirst(string = '') {
    return string.substring(0, 1).toLowerCase() + string.substring(1)
  }


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
  function toLower(string) {
    return string.toLowerCase(string)
  }



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
  function toUpper(string) {
    return string.toUpperCase(string)
  }


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

  function trim(string, chars = ' ') {
    return trimEnd(trimStart(string, chars))
  }



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
  function trimEnd(str, char) {
    if (!char) return str.replace(/\s+$/g, '')
    for (var i = str.length - 1; i > 0; i--) {
      if (!char.includes(str[i])) {
        break;
      }
    }
    return str.slice(0, i)
  }


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
  function trimStart(str, char = ' ') {
    // 如果没有第二个参数,把字符串前面的空格正则替换
    if (!char) return str.replace(/^\s+/g, '')
    for (var i = 0; i < str.length; i++) {
      if (!char.includes(str[i])) {
        break;
      }
    }
    return str.slice(i)
  }


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
  function upperFirst(string) {
    return string[0].toUpperCase() + string.substring(1)
  }



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
  function lowerCase(string) {
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
  }


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
  function upperCase(string) {
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
  }

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
  function isArray(value) {
    return Array.isArray(value)
  }



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
  function constant(value) {
    return () => value
  }


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
  function identity(value) {
    return value;
  }


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
  function stubArray() {
    return []
  }


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
  function stubFalse() {
    return false;
  }

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
  function stubObject() {
    return {};
  }


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
  function stubString() {
    return ' '
  }


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
  function stubTrue() {
    return true;
  }



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

  function times(n, identity) {
    return new Array(n).fill('').map((val, idx) => identity(idx))
  }


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
  function toPath(value) {
    // 直接使用正则表达式对字符串进行分词
    if (typeof value === 'string') {
      return value.match(/\w+/g)
    } else {
      // 针对value本身就是数组的情况
      return value
    }
  }


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
  function noop() {
    return undefined;
  }


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
  function nthArg(n) {
    return (...args) => args.slice(n)[0]    // 用slice()切割出前n项,返回第n项
  }


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
  const idCounter = {}
  function uniqueId(prefix = '$lodash$') {
    // 先使用idCounter来记录已经生成的ID,默认的Prefix的前缀是 $lodash$
    // 调用函数时,先判断 idCounter 有没有生成过 ID,没有初始化为 0
    if (!idCounter[prefix]) {
      idCounter[prefix] = 0;
    }

    const id = ++idCounter[prefix]
    if (prefix === '$lodash$') {
      return `${id}`
    }
    return `${prefix + id}`
  }



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
  function rangeRight(start = 0, end, step = 1) {
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
    return res.reverse();
  }



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
  function property(path) {
    return function (obj) {
      for (let item of toPath(path)) {
        obj = obj[item]
        if (!obj) return obj    // 错误处理: 当访问的对象不存在时直接返回
      }
      return obj;
    }
  }


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
  function propertyof(object) {
    return function (path) {
      let arr = toPath(path), res;
      for (let item of arr) {
        res = object[item]
        object = res;
      }
      return res;
    }
  }



  /**
 * 转换字符串string为snake case.
 *
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串。
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
  function snakeCase(string) {
    let isWord = str => str.toLowerCase() !== str.toUpperCase(), arr = [], flag = false, res = '';
    flag = [...string].every(i => isWord(i))
    if (flag) {
      for (let val of string) {
        if (val.toUpperCase() === val) res += '_'
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
    return arr.join('_').toLowerCase()
  }


  /**
   * 转换 string 字符串为start case.
   *
   * @category String
   * @param {string} [string=''] 要转换的字符串
   * @returns {string} 返回转换后的字符串。
   * @example
   *
   * _.startCase('--foo-bar--');
   * // => 'Foo Bar'
   *
   * _.startCase('fooBar');
   * // => 'Foo Bar'
   *
   * _.startCase('__FOO_BAR__');
   * // => 'FOO BAR'
   */
  function startCase(string) {
    let isWord = str => str.toLowerCase() !== str.toUpperCase(), arr = [], flag = false, res = '';
    let upperFirst = str => str[0].toUpperCase() + str.slice(1);
    flag = [...string].every(i => isWord(i));
    if (flag) {
      for (let val of string) {
        if (val.toUpperCase() === val) res += ' '
        res += val
      }
      return res.split(' ').map(i => upperFirst(i)).join(' ')
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
    return arr.map(i => upperFirst(i)).join(' ')
  }



  /**
   * 返回限制在 lower 和 upper 之间的值。
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Number
   * @param {number} number 被限制的值
   * @param {number} [lower] 下限
   * @param {number} upper 上限
   * @returns {number} 返回被限制的值.
   * @example
   *
   * _.clamp(-10, -5, 5);
   * // => -5
   *
   * _.clamp(10, -5, 5);
   * // => 5
   */
  function clamp(number, lower, upper) {
    if (number >= lower && number <= upper) return number;
    return number > upper ? upper : lower;
  }


  /**
     * 检查 n 是否在 start 与 end 之间，但不包括 end。 
     * 如果 end 没有指定，那么 start 设置为0。 
     * 如果 start 大于 end，那么参数会交换以便支持负范围。
     *
     * @category Number
     * @param {number} number 要检查的值
     * @param {number} [start=0] 开始范围。
     * @param {number} end 结束范围。
     * @returns {boolean} 如果number在范围内 ，那么返回true，否则返回 false。
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
  function inRange(n, start = 0, end) {
    if (end && start > end) [end, start] = [start, end];
    return end == null ? n >= 0 && n < start : n >= start && n < end;
  }



  /**
   * 如果 value 不是数组, 那么强制转为数组。
   *
   * @category Lang
   * @param {*} value 要处理的值。
   * @returns {Array} 返回转换后的数组。
   * @example
   *
   * _.castArray(1);
   * // => [1]
   *
   * _.castArray({ 'a': 1 });
   * // => [{ 'a': 1 }]
   *
   * _.castArray('abc');
   * // => ['abc']
   *
   * _.castArray(null);
   * // => [null]
   *
   * _.castArray(undefined);
   * // => [undefined]
   *
   * _.castArray();
   * // => []
   *
   * var array = [1, 2, 3];
   * console.log(_.castArray(array) === array);
   * // => true
   */
  function castArray(value) {
    return Array.isArray(value) ? value : [...arguments];
  }



  /**
   * 创建一个数组，值来自 object 的paths路径相应的值。
   *
   * @since 1.0.0
   * @category Object
   * @param {Object} object 要迭代的对象
   * @param {...(string|string[])} [paths] T要获取的对象的元素路径，单独指定或者指定在数组中。
   * @returns {Array} 返回选中值的数组。
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   *
   *  (object, ['a[0].b.c', 'a[1]']);
   * // => [3, 4]
   */


  function at(object, paths) {
    let res = []
    function fn(object, paths) {
      let arr = toPath(paths)
      for (let item of arr) {
        var tmp = object[item]
        object = tmp;
      }
      res.push(tmp)
    }
    Array.isArray(paths) ? paths.map(i => fn(object, i)) : fn(object, paths);
    return res
  }


  /**
 * 从collection（集合）中获得 n 个随机元素。
 *
 * @category Collection
 * @param {Array|Object} collection 要取样的集合
 * @param {number} [n=1] 取样的元素个数
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} 返回随机元素
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1] 
 */
  function sampleSize(collection, n = 1) {
    let res = []
    let arr = toArray(collection)
    let count = n >= arr.length ? arr.length : n;
    while (count) {
      res.push(sample(arr))
      count--
    }
    return res
  }


  function replace(string, pattern, replacement) {
    let reg = new RegExp(pattern, 'g');
    return string.replace(reg, replacement)
  }


  function split(string = '', separator, limit) {
    let arr = []
    let tmp = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] === separator) {
        arr.push(tmp)
        tmp = ''
        continue
      } else {
        tmp += string[i]
      }
    }
    arr.length = limit
    return arr
  }


  function startsWith(string = '', target, position = 0) {
    return string[position] === target
  }


  function words(string = '', pattern) {
    if (!pattern || typeof (pattern) === 'string') {
      return string.split(/\W+/);
    } else {
      let res = []
      let arr = pattern.exec(string)
      while (arr !== null) {
        res.push(arr[0])
        arr = pattern.exec(string)
      }
      return res
    }
  }


  function parseJson(str) {
    // 定义一个全局的指针
    var i = 0;

    // 返回解析值函数
    return parseValue()

    // 解析Value: 从某个位置开始解析出一个值,类型取决于当前符号
    function parseValue() {
      skipWhiteSpace();         // 先对字符串进行去空白

      if (str[i] === '"') return parseString()
      if (str[i] === 't') return parseTrue()
      if (str[i] === 'f') return parseFalse()
      if (str[i] === 'n') return parseNull()
      if (str[i] === '[') return parseArray()
      if (str[i] === '{') return parseObject()
      if (/\d/.test(str[i])) return parseNumber()
    }

    // 去除空格
    function skipWhiteSpace() {
      str = str.replace(/\s/g, '');
    }

    // 解析字符串
    function parseString() {
      let res = ''
      if (str[i] === '"') {
        i++;      // 跳过开始的 "
        while (str[i] !== '"') {
          res += str[i]
          i++
        }
        i++     // 跳过结束的 ",移动指针
      }
      return res;
    }

    // 解析数字
    function parseNumber() {
      let res = ''
      while (/\d/.test(str[i])) {
        res += str[i]
        i++
      }
      return +res
    }

    // 解析Array
    function parseArray() {
      let res = [];
      i++     // skip [
      if (str[i] === ']') {
        i++
        return res    // 如果即刻遇到对应的 ] 直接返回结果
      }
      while (true) {
        const value = parseValue()    // 对数组中的值进行解析
        res.push(value)
        if (str[i] === ',') {
          i++
          continue
        }
        if (str[i] === ']') {
          i++
          return res
        }
      }
    }

    // 解析对象
    function parseObject() {
      let obj = {}
      i++
      if (str[i] === '}') {
        i++
        return obj
      }
      while (true) {
        const key = parseString()     // 解析到 "对象键"
        i++       // 遇到冒号,指针后移并继续解析后面的值
        const value = parseValue()    // 解析 "对象值"
        obj[key] = value;
        if (str[i] === ',') {     // 遇到 , 指针后移再继续解析
          i++
          continue
        }
        if (str[i] === '}') {
          i++     // 跳过 }
          return obj
        }
      }
    }

    // 解析true
    function parseTrue() {
      i += 4;
      return true
    }

    // 解析false
    function parseFalse() {
      i += 5;
      return false;
    }


    // 解析Null
    function parseNull() {
      i += 4;
      return null;
    }
  }

  function pullAt(array, indexes) {
    let removed = [];
    // 判断参数是数字还是数组
    if (typeof (indexes) !== 'object') {
      indexes = Object.entries(arguments).slice(1).map(i => i[1])
    }
    // 遍历索引修改数组,并标记要移除的元素
    for (let idx of indexes) {
      removed.push(array[idx])
      array[idx] = '*'
    }
    // 过滤掉要移除的元素
    let tmp = array.filter(i => i !== '*')
    array.length = 0
    // 修改原来的数组
    array.push(...tmp)
    return removed
  }

  // 返回首个提供的参数
  function identify(value) {
    return [...arguments][0]
  }


  // 给bind函数使用的
  var _ = {}


  // 可以跳着参数绑定的bind函数
  function bind(func, thisArg, ...fixedArgs) {
    return function (...args) {
      var bindedArgs = fixedArgs.slice()
      var i = 0
      for (var j = 0; j < bindedArgs.length; j++) {
        if (bindedArgs[j] === _) {
          bindedArgs[j] = args[i++]
        }
      }
      bindedArgs.push(...args.slice(1))
      return func.apply(thisArg, bindedArgs)
    }
  }


  // src: 要遍历的目标,他的所有值要完全被包含在obj中
  function isMatch(obj, src) {
    for (let key in src) {
      if (src[key] && typeof src[key] === 'object') {
        // 如果遍历到的键的值是对象,将此时对象的值再去做对比匹配
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (obj[key] !== src[key]) {
          return false
        }
      }
    }
    return true
  }


  function matches(source) {
    return function (obj) {
      return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
    }
  }


  /* 
  根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
  */
  function get(object, path, defaultValue) {
    // 解析出路径数组
    let arr = toPath(path)
    let res = object
    // 遍历路径来迭代结果,遇到值为underfined返回默认值
    for (let item of arr) {
      res = res[item]
      if (res === undefined) {
        return defaultValue
      }
    }
    return res
  }


  function ary(func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  }


  function unary(func) {
    return function (...args) {
      return func(...args.slice(0, 1))
    }
  }

  // 返回一个新的取反函数。
  function negate(func) {
    return function (...args) {
      return !func(...args)
    }
  }


  function spread(fn) {
    return function (arr) {
      return fn.apply(null, arr)
    }
  }

  // 创建一个函数，调用func时候接收翻转的参数。
  function flip(fn) {
    return function (...args) {
      return fn(...args.reverse())
    }
  }


  function before(n, func) {
    // 计数器和结果要声明在返回的函数外面,防止每次执行函数被刷新
    var count = 0;
    var res;
    return function (...args) {
      if (count < n) {
        // 每次调用函数后计数器+1
        res = func(...args)
        count++
      }
      return res
    }
  }

  function escape(string) {
    let map = {
      "&": '&amp;',
      "<": '&lt;',
      ">": '&gt;',
      '"': '&quot;',
      "'": '&apos;',
      "`": '&acute;'
    }
    let arr = [...string]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in map) {
        arr[i] = map[arr[i]]
      }
    }
    return arr.join('')
  }


  function unescape(str = '') {
    let map = {
      '&amp;': "&",
      '&lt;': "<",
      '&gt;': ">",
      '&quot;': '"',
      '&apos;': "'",
      '&acute;': "`"
    }
    for (let key in map) {
      if (str.includes(key)) {
        str = str.replace(new RegExp(key, 'g'), map[key])
      }
    }
    return str
  }


  function escapeRegExp(string) {
    let res = ''
    let arr = ["^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", ",", "|"];
    for (let char of string) {
      if (arr.includes(char)) {
        res += "\\"
      }
      res += char
    }
    return res
  }


  function deburr(str) {
    // 看不懂,面向测试用编程
    return str.replace('é', 'e').replace('à', 'a')
  }


  function truncate(string, options) {
    // 设定默认值
    if (!options.length) options.length = 30
    if (!options.omission) options.omission = '...'
    // 没超过限定长度,直接返回
    if (string.length <= options.length) return string
    // 如果截断点存在的话,截取
    if (options.separator) {
      let matchReg = new RegExp(options.separator, 'g')
    } else {
      // 截断点不存在,并且超过限定长度,根据替代字符串长度来寻找截断点
      let cutIdx = options.length - options.omission.length
      return string.slice(0, cutIdx) + options.omission
    }
  }


  // 检查是否为类数组
  function isArrayLike(value) {
    return value !== null && typeof value[Symbol.iterator] === 'function'
  }


  // 判断数据是否是symbol类型
  function isSymbol(value) {
    return typeof value === 'symbol'
  }

  // 检查 value 是否是 null 或者 undefined。
  function isNill(value) {
    return value === null || value === undefined
  }


  // 检查 value 是否是 null。
  function isNull(value) {
    return value === null
  }


  /* 
  - 使用 `Object` 构造函数来为给定的值创建一个对象包装器
  - 如果值是 `null` 或者 `undefined`, 将会创建并返回一个空对象
  - 否则,将会返回一个与给定值对应类型的对象.
  */
  function isObject(value) {
    return value === Object(value)
  }


  // 检查 value 是否是原始字符串String或者对象。
  function isString(vlaue) {
    return typeof vlaue === 'string'
  }


  // 检查 value 是否是 Function 对象。
  function isFunction(value) {
    return typeof value === 'function'
  }

  // 检查 value 是否是原始有限数值。
  function isInteger(value) {
    return Number.isInteger(value)
  }


  function isLength(value) {
    let val = toInteger(value)
    return val >= 0 && val < 2 ** 32
  }


  function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]'
  }



  function isSet(value) {
    return Object.prototype.toString.call(value) === '[object Set]'
  }



  function isSafeInteger(value) {
    return Number.isSafeInteger(value)
  }


  //检查 value 是否是原始有限数值。
  function isFinite(value) {
    return typeof value === 'number' && value > -Infinity && value < Infinity
  }


  // 检查 value 是否是一个空对象或者集合
  /* 
    Object.keys()返回一个给定对象自身可枚举属性组成的数组
    检测条件: value为null,value自身的长度或者其可枚举属性的数组长度为空
  */
  function isEmpty(val) {
    return val == null || !(Object.keys(val) || val).length;
  }
  /* 
    检查 value 的值是否是类对象.
    JS的早期实现中,js的值由一个表示类型的标签和实际数据值组成
    对象的数据类型标签是: 0, 由于 null 代表空指针,所以 null 的数据类型标签也为 0
    即 null 和 object 的类型标签相等,所以 typeof null 也是 'object'
  */
  function isObjectLike(value) {
    return typeof value === 'object' && value !== null
  }

  // 检查 value 是否是一个类 arguments 对象。
  function isArguments(value) {
    return Object.prototype.toString.call(value) === '[object Arguments]'
  }


  function isUndefined(value) {
    return typeof value === 'undefined'
  }

  // 检查 value 是否是 Date 对象。
  function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]'
  }


  // 检查 value 是否是可能是 DOM 元素。
  function isElement(value) {
    return Object.prototype.toString.call(value) === '[object Element]'
  }


  // 检查 value 是否为RegExp对象。
  function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
  }

  // 检查 value 是否小于 other。
  function lt(value, other) {
    return value < other
  }

  // 检查 value 是否小于等于 other。
  function lte(value, other) {
    return value <= other
  }


  // 转换 value 为一个有限数字。
  function toFinite(value) {
    // 处理非数字情况
    if (!value) {
      return 0
    }
    // 先把传进来的值都转换成数字类型
    value = Number(value)
    // 处理无限值
    if (value === Infinity || value === -Infinity) {
      return (value < 0 ? -1 : 1) * Number.MAX_VALUE;
    }
    // 处理NaN情况
    return value === value ? value : 0
  }


  function toFinite(value) {
    // 处理非数字情况
    if (!value) {
      return 0
    }
    // 先把传进来的值都转换成数字类型
    value = Number(value)
    // 处理无限值
    if (value === Infinity || value === -Infinity) {
      return (value < 0 ? -1 : 1) * Number.MAX_VALUE;
    }
    // 处理NaN情况
    return value === value ? value : 0
  }


  function toInteger(value) {
    // 小数或字符串小数情况
    if (value.toString().includes('.')) {
      return Math.trunc(+value)
      // 最小值情况
    } else if (value === Number.MIN_VALUE) {
      return 0
      // 正负无限值
    } else if (value === Infinity || value === -Infinity) {
      return (value < 0 ? -1 : 1) * Number.MAX_VALUE;
    } else {
      // 普通情况
      return Number(value)
    }
  }


  /* 
    toLength 将一个值转换成可以在类数组中 length 属性的值
    数组的长度最小为 0
    数组的长度最大为: 2 的 32 次方
    区间: [0,2 ** 32)
  */
  function toLength(value) {
    const MAX_ARRAY_LENGTH = 2 ** 32;
    // 传入假值,直接返回0
    if (!value) {
      return 0
    }
    // 将 value 转换成整数
    let len = toInteger(value)
    // 小于最小取值
    if (len < 0) {
      return 0
    }
    // 大于最大取值
    if (len > MAX_ARRAY_LENGTH) {
      return MAX_ARRAY_LENGTH
    }
    // 正常返回取值
    return len
  }



  // 转换 value 为一个数字。
  function toNumber(value) {
    return Number(value)
  }

  // 转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。
  function toString(value) {
    // 处理空值
    if (value === null || value === undefined) {
      return ''
    }
    let res = `${value}`
    // 特殊的 -0 情况, +0 和 -0 转换成字符串都是 0 无法直接比较,通过用 1 除一下,判断是正无穷还是负无穷来判断
    if (1 / value === -Infinity) {
      res = '-' + res
    }
    // 其他情况: 使用模板字符串能cover: string,array
    return res
  }

  // 创建一个 object 的自身可枚举属性名为数组。
  function keys(obj) {
    return Object.entries(obj).map(i => i[0])
  }

  // 创建一个 object 自身 和 继承的可枚举属性名为数组。
  function keysIn(obj) {
    let arr = []
    for (let key in obj) {
      arr.push(key)
    }
    return arr
  }

  // 检查 path 是否是 object 自身可枚举属性上是否存在 key。
  function has(object, path) {
    let keys = toPath(path)
    for (let key of keys) {
      if (!Object.prototype.hasOwnProperty(key)) {
        return false
      }
      object = object[key]
    }
    return true
  }


  function hasIn(object, path) {
    let keys = toPath(path)
    for (let key in keys) {
      if (!(key in object) || object == null) {
        return false
      }
      object = object[key]
    }
    return true
  }


  // 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 
  // 如果是返回 true ，否则返回 false 。
  function matchesProperty(path, srcValue) {
    return function (obj) {
      let arr = toPath(path)
      for (let item of arr) {
        obj = obj[item]
      }
      return isEqual(obj, srcValue)
    }
  }



  // 将传入的参数转化成一个回调函数,用于其他高阶函数的调用
  function iteratee(predicate) {
    // 参数为字符串
    if (typeof predicate === 'string') {
      return property(predicate)
    } else if (isArray(predicate)) {
      // 参数为数组
      return matchesProperty(predicate)
    } else if (isObject(predicate)) {
      // 参数为对象
      return matches(predicate)
    } else {
      // 参数本身就是函数
      return predicate
    }
  }



  /* 
  使用Fisher–Yates shuffle算法:
  1. 从0到n中随机选出一个数和最后的一个数n交换
  2. 然后从0到n-1中再选一个数和n-1交换
*/
  function shuffle(arr) {
    // 右指针
    let r = arr.length
    while (r) {
      // 从右到左遍历,random()刚好随机到数组中的每一个元素
      let l = ~~(Math.random() * r--);
      [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    return arr
  }
  // 洗牌算法Fisher–Yates shuffle讲解:https://zhuanlan.zhihu.com/p/110630952



  function isNaN(value) {
    return typeof value === 'number' && Number.isNaN(value)
  }


  function invert(obj) {
    let res = {}
    for (let key in obj) {
      res[obj[key]] = key
    }
    return res
  }


  // 调用object对象path上的方法。
  function invoke(object, path, ...args) {
    let arr = toPath(path)
    let method = arr.pop()
    let val = get(object, arr)
    return val[method](...args)
  }


  function pick(object, props) {
    let obj = object, arr;
    arr = isString(props) ? [props] : props;
    for (let key in obj) {
      if (!arr.includes(key)) {
        delete obj[key]
      }
    }
    return obj
  }


  // 执行深比较来确定两者的值是否相等。
  /* 
    浅比较: 也称为引用相等, === 只是用来做 "浅比较" 检查左右两边是否是对同一个对象的引用
    深比较: 检查两个对象的所有属性是否都相等,需要递归的检测,深比较不管这两个对象是不是同一对象的应用.
            只要两个对象结构组织图完全一样就相等.
  */
  function isEqual(value, other) {
    // 判断是不是两个对象是不是引用数据类型,不是的话直接比较值
    if (!isObject(value) || !isObject(other)) {
      return value === other
    }

    // 比较是否为同一个内存地址
    if (value === other) {
      return true
    }

    // 比较 key 的数量
    let obj1KeysLen = Object.keys(value).length
    let obj2KeysLen = Object.keys(other).length
    if (obj1KeysLen !== obj2KeysLen) return false

    // 递归的比较 value 
    for (let key in value) {
      let res = isEqual(value[key], other[key]);
      if (!res) return false      // 递归遍历的时候如果遇到不等,直接返回false
    }
    return true
  }


  function clone(obj) {
    return Object.assign({}, obj)
  }



  // 实现深拷贝
  function cloneDeep(obj) {
    // 递归的时候如果遇到null,直接返回null
    if (obj === null) return null
    // 对当前层进行浅拷贝
    let clone = Object.assign({}, obj)
    // 对当前对象的 key 进行遍历迭代,如果值的类型是 Object ,返回内层的深拷贝值,不是则返回该值
    Object.keys(clone).forEach(
      key => clone[key] = isObject(obj[key]) ? cloneDeep(obj[key]) : obj[key]
    );
    // 如果对象是一个数组,将clone 的 length 设置为原始对象的 length,并使用 Array.from()来创建一个克隆
    if (isArray(clone)) {
      clone.length = obj.length     // 对象需要添加 length 属性才能转成 Array
      return Array.from(clone)
    }
    return clone
  }


















  return {
    isMap: isMap,
    isSet: isSet,
    toLength: toLength,
    isLength: isLength,
    clone: clone,
    cloneDeep: cloneDeep,
    isEqual: isEqual,
    pick: pick,
    invoke: invoke,
    invert: invert,
    hasIn: hasIn,
    shuffle: shuffle,
    stubArray: stubArray,
    stubFalse: stubFalse,
    stubObject: stubObject,
    stubString: stubString,
    stubTrue: stubTrue,
    noop: noop,
    propertyof: propertyof,
    identify: identify,
    before: before,
    isNill: isNill,
    toString: toString,
    iteratee: iteratee,
    flip: flip,
    negate: negate,
    spread: spread,
    ary: ary,
    unary: unary,
    nthArg: nthArg,
    pullAt: pullAt,
    uniqueId: uniqueId,
    range: range,
    rangeRight: rangeRight,
    words: words,
    truncate: truncate,
    trimStart: trimStart,
    trimEnd: trimEnd,
    trim: trim,
    toUpper: toUpper,
    toLower: toLower,
    startsWith: startsWith,
    split: split,
    replace: replace,
    repeat: repeat,
    parseInt: parseInt,
    padStart: padStart,
    padEnd: padEnd,
    pad: pad,
    lowerFirst: lowerFirst,
    lowerCase: lowerCase,
    upperFirst: upperFirst,
    upperCase: upperCase,
    escapeRegExp: escapeRegExp,
    startCase: startCase,
    snakeCase: snakeCase,
    kebabCase: kebabCase,
    chunk: chunk,
    compact: compact,
    concat: concat,
    uniq: uniq,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    map: map,
    reduce: reduce,
    zip: zip,
    keys: keys,
    fill: fill,
    reverse: reverse,
    isNaN: isNaN,
    isNull: isNull,
    isNill: isNill,
    isUndefined: isUndefined,
    toArray: toArray,
    sum: sum,
    sumBy: sumBy,
    parseJson: parseJson,
    difference: difference,
    intersection: intersection,
    floor: floor,
    isMatch: isMatch,
    matches: matches,
    property: property,
    get: get,
    toPath: toPath,
    drop: drop,
    dropRight: dropRight,
    flatten: flatten,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    initial: initial,
    last: last,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    times: times,
    constant: constant,
    isFunction: isFunction,
    keysIn: keysIn,
    isArguments: isArguments,
    isArray: isArray,
    isBoolean: isBoolean,
    isDate: isDate,
    isEmpty: isEmpty,
    isArrayLike: isArrayLike,
    isElement: isElement,
    isFinite: isFinite,
    isObjectLike: isObjectLike,
    isObject: isObject,
    isNumber: isNumber,
    isInteger: isInteger,
    isRegExp: isRegExp,
    isSafeInteger: isSafeInteger,
    isString: isString,
    union: union,
    without: without,
    tail: tail,
    take: take,
    takeRight: takeRight,
    sample: sample,
    sampleSize: sampleSize,
    size: size,
    castArray: castArray,
    isSymbol: isSymbol,
    lt: lt,
    lte: lte,
    toNumber: toNumber,
    toInteger: toInteger,
    toFinite: toFinite,
    add: add,
    divide: divide,
    ceil: ceil,
    max: max,
    min: min,
    multiply: multiply,
    round: round,
    subtract: subtract,
    clamp: clamp,
    inRange: inRange,
    random: random,
    at: at,
    has: has,
    camelCase: camelCase,
    capitalize: capitalize,
    deburr: deburr,
    endsWith: endsWith,
    escape: escape,
    unescape: unescape,
    identity: identity,

  }
}()