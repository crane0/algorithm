/* 
  https://leetcode-cn.com/problems/min-stack/

  关键点: 为了能在常数时间内检索到最小元素，所以需要维护2个栈
  问题，为什么不用常数标记这最小值，每次改变时，取2者最小的即可？
  因为，栈的操作还有 pop，此时最小值就是上一个元素了。
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min_stack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
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