/* 
  用链表实现队列:优点,操作时间是O1

*/

function Queue() {
  this._head = null
  this._tail = null
  this._size = 0
}


Queue.prototype = {
  enqueue: function (val) {
    let node = {
      val,
      next: null,
    }
    if (this._head) {
      this._tail.next = node
      this._tail = node
    } else {
      this._head = this._tail = node
    }
    this._size++
    return this
  },

  dequeue: function () {
    if (this._head) {
      var val = this._head.val
      this._head = this._head.next;
      if (this._head == null) {
        this._tail = null
      }
      this._size--
      return val
    }
  },

  peek: function () {
    if (this._head) {
      return this._head.val
    }
  },

  get: function () {
    return this._size
  }
}
