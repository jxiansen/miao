/* 
  栈的数据结构: 他遵循着后进先出的(LIFO: last-in-firs-out)的原则,这意味着栈中新添加的元素都保存在栈顶
  最早添加的元素放置在栈底.类似的概念: 餐厅里叠放的盘子,或者羽毛球桶里的羽毛球
  一个堆栈需要有一下几种方法: 
  push(): 将元素压入栈顶
  pop(): 移除栈顶元素并将其返回
  peek(): 返回栈顶元素
  isEmpty(): 判断栈是否为空
  clear(): 清空堆栈中所有元素
  print(): 输出栈中所有元素
  size(): 返回栈中元素个数
  此栈是依据数组结构实现
*/

// 类描述: 
class Stack {
  constructor() {
    this.collection = []
    this.length = 0
  }

  // isEmpty(): 判断栈是否为空
  isEmpty() {
    return this.length === 0;
  }
  // print(): 打印出栈中所有元素
  print() {
    console.log(this.collection)
  }

  // push(): 将元素压入栈顶,一次只允许插入一个元素
  push(item) {
    this.collection.push(item)
    this.length++
  }

  // peek(): 返回栈顶元素,并无需删除
  peek() {
    if (this.collection.length !== 0) {
      return this.collection[this.collection.length - 1]
    }
    return null
  }

  // pop(): 移除栈顶元素并将其返回
  pop() {
    if (this.length !== 0) {
      this.length--
      return this.collection.pop()
    }
    return undefined
  }

  // clear(): 清空堆栈中所有元素 
  clear() {
    return this.collection.length = 0;
  }

  // size(): 返回栈中元素个数
  size() {
    return this.collection.length;
  }
}


let st = new Stack()
st.push('apple')
st.push('orange')
st.push('banana')
console.log(st);
st.pop()
console.log('返回栈顶元素',st.peek());
console.log('判断栈是否为空',st.isEmpty());
console.log(st.size());
console.log(st.clear());