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
  function chunk(array, size) {
    let res = []
    if (array.length === size) {
      return array
    }
    while (array.length > size) {
      res.push(array.splice(0, size))
    }
    res.push(array)
    return res;
  }
  console.log(chunk(['a', 'b', 'c', 'd'], 0));



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
  function compact(array) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
      if (!!array[i] === true) {      // 遍历数组,对遍历到的元素转换成布尔值,将布尔值为true的push到结果中
        res.push(array[i])
      }
    }
    return res
    // return array.filter(i => !!i === true);
  }
  console.log(compact([0, 1, false, 2, '', 3, NaN, undefined, null]));








}()
