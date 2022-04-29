/* 
  给elements前面添加_来防止在外部访问私有属性,改写对象
*/

function MySet() {
  this._elements = []
}

// 将一个新元素添加到集合中,并返回集合中的值
MySet.prototype.add = function (val) {
  if (!this.has(val)) {
    this._elements.push(val)
  }
  return this
}

// 返回元素是否在集合中
MySet.prototype.has = function (val) {
  return this._elements.includes(val)
}

// 从集合中删除一个元素
MySet.prototype.delete = function (val) {
  let idx = this._elements.indexOf(val)
  if (idx >= 0) {       // 如果找到这个元素的索引,说明Set中有这个值
    this._elements.splice(idx, 1)
  }
}


// 移除集合中所有的元素
MySet.prototype.clear = function () {
  this._elements.length = 0;
  return this
}

// 返回一个包含集合中所有值(元素)的数组
MySet.prototype.values = function () {
  return this._elements
}


// 返回集合中所包含元素的数量
Object.defineProperty(MySet.prototype, 'size', {
  get: function () {
    return this._elements.length
  }
})
