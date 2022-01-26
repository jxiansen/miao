function Linkedlist() {
  // 声明链表长度,头节点
  var length = 0;
  var head = null;
  // 节点构造器
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  // 返回链表的头部
  this.head = function () {
    return head;
  }

  // 返回链表的长度
  this.length = function () {
    return length;
  }

  // 判断链表是否为空
  this.isEmpty = function () {
    return length === 0;
  }

  // 链表添加元素
  this.add = function (element) {
    const node = new Node(element);   // 声明一个新节点
    if (head) {        // 如果不是头节点,让当前指针指向头节点
      let current = head;
      while (current.next !== null) {  // 只要当前指针不是尾节点,一直移动指针
        current = current.next;
      }
      current.next = node;      // 此时指针已经指向尾节点,将当前指针的 next 指向新节点
    } else {
      head = node;      // 如果head为null,直接将新节点赋值给头节点
    }
    length++;
  }

  // 链表中删除特定位置的元素
  this.removeAt = function (index) {
    var currentNode = head;
    var previous;     // 声明前置指针
    if (index < 0 || index >= length) {
      return null;      // 索引超出边界条件返回报错信息
    }
    if (index === 0) {      // 删除头节点
      head = currentNode.next;     // 头节点变成原来节点的下一个节点
    } else {
      for (let i = 0; i < index; i++) {
        previous = currentNode;
        currentNode = currentNode.next;     // 经过指定次数的移动,此时current指针指向要删除的元素
      }
      previous.next = currentNode.next;   // 将 previous 与 currentNode 的下一项链接起来跳过currentNode, 从而移除它
    }
    length--;
    return currentNode.element;
  }

  // 链表中删除给定的元素
  this.remove = function (element) {
    if (head.element === element) {    // 删除元素是头节点情况
      head = head.next;
      return length--;
    }
    let previous = head;      // 定义前置指针指向头节点
    while (previous) {     // 只要前置指针还存在
      let current = previous.next;
      if (current) {     // 确保当前指针不在链表的结尾
        if (current.element === element) {
          previous.next = current.next;
          return length--
        }
      }
      previous = current;
    }
  };

  // 接收一个元素的值,在链表中找到它,就返回元素的位置,否则返回 -1;
  this.indexOf = function (element) {
    let currentNode = head;
    var index = -1;

    while (currentNode) {
      index++;
      // 检查节点是否是我们要搜索的
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  // 给定一个索引返回其元素
  this.elementAt = function (index) {
    let currentNode = head;     // 从头节点开始遍历
    let count = 0;              // 累计遍历过的次数
    while (count < index) {
      count++
      currentNode = currentNode.next;     // 指针不停的后移
      if (!currentNode) {     // 一但当前的指针节点不存在就返回报错
        return undefined;
      }
    }
    return currentNode.element;
  }

  // 在链表的指定索引处添加元素
  this.addAt = function (index,element) {
    
  }
}

let linklist = new Linkedlist()
linklist.add(1)
linklist.add(2)
linklist.add(3)
linklist.add(4)
linklist.add(5)
linklist.add(6)
linklist.add(7)
linklist.removeAt(4)
linklist.removeAt(1)
linklist.removeAt(3)
console.log(linklist.length());