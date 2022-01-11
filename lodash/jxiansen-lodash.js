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
  chunk: function (array) {
/*     let res = [], size = arguments['1'];
    if (size === array.length) {
      return array;     // 如果 size 为数组的长度,直接返回数组
    }
    if (size === 0) {
      return res;     // 如果size 为 0 返回空数组
    }
    while (array.length >= size) {
      res.push(array.splice(0, size));
    }
    return res; */
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
    let res = [];
    if (arguments['1']) {
      for (let item of array) {
        if (!arguments['1'].includes(item)) {     // 如果遍历的值不在需要排除的值中
          res.push(item)              // push到结果中
        }
      }
      return res
    } else {
      return array        // 如果没有第二个参数
    }
  },
  // console.log(difference([3, 2, 1], [2, 4]));



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























}()