function MyMap() {
  // 映射的键和值分别存在两个数组中
  this._mapKeys = []
  this._mapValues = []
}


MyMap.prototype = {
  set(key, val) {
    let idx = this._keyIdx(key)
    // 如果映射中没有要添加的数据,则添加
    if (idx === -1) {
      this._mapKeys.push(key)
      this._mapValues.push(val)
    } else {
      // 映射中已经包含了要添加的数据,更新原来的数据
      this._mapValues[idx] = val
    }
    return this
  },

  // 比较常用,用来获取key的位置
  _keyIdx(key) {
    return this._mapKeys.indexOf(key)
  },

  // 判断映射中是否包含键
  has(key) {
    return this._mapKeys.includes(key)
  },

  // 根据键返回映射的值
  get(key) {
    let idx = this._keyIdx(key)
    if (idx >= 0) {
      return this._mapValues[idx]
    }
  },

  // 根据键删除映射关系
  delete(key) {
    if (this.has(key)) {
      let idx = this._keyIdx(key)
      this._mapKeys.splice(idx, 1)
      this._mapValues.splice(idx, 1)
    }
    return this
  },

  // 清空map
  clear() {
    this._mapKeys.length = 0
    this._mapValues.length = 0
  },

  // 返回映射关系的个数
  get size() {
    return this._mapKeys.length
  }
}