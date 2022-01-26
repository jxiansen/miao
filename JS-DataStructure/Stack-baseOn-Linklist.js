/* 
  基于链表实现的栈
*/
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// top指针记录栈顶元素,插入删除都是对top操作
class StackBasedLinkedList {
  constructor() {
    this.top = null
    this.length = 0
  }

  // push()方法
  push(value) {
    let node = new Node(value)
    if (this.top === null) {      // 如果为空链表
      this.top = node;
      this.length++;
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;
    }
  }

  // pop()方法
  pop() {
    if (this.top === null) {
      return -1;
    }
    let value = this.top.element;
    this.top = this.top.next;
    this.length--
    return value
  }

}



let st = new StackBasedLinkedList()
st.push(1)
st.push(2)
st.push(3)
console.log(st);