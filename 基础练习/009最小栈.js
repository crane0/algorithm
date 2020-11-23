/* 
  155 https://leetcode-cn.com/problems/min-stack/
*/

/* 
  2个栈，一个维护出入关系，一个维护最小的栈。
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  /* 
    因为要在常数时间内检索到最小元素，所以需要一个辅助栈维护。
    每次 stack 存入元素时，min_stack 存入 stack 中最小元素即可在常数时间内检索到（在 min_stack 栈顶）。
    每次 min_stack 存入元素时，只需要和栈顶的元素比较即可。

    第一个元素是无穷大，否则在第一次插入做比较时 Math.min(undefined, xxx) 返回 NaN
  */
  this.min_stack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */