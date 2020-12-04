/* 
  https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
  为什么不能用双指针从两端逼近解决？
  看图示。

  思想：维护一个单调递增栈
  因为是递增的，所以左边界一定知道，for 循环中，如果当前元素比栈顶的小，则右边界也找到了。最大矩形即可得到。
  特殊的情况，比如 5 6 2，当前元素是 2 时，6 的最大矩形可以算出，之后算 5 的最大矩形时，右边界还是 2。

  原始数组两边补 0，
    左边补零，是为了计算原始数组中第一个元素对应的最大矩形
    右边补零，是为了清空最后的栈，假设原始数组都是单条递增的，则栈中存储的也是一样，
    循环到最后一个元素时，因为 0，所以可以保证依次计算出之前所有的元素的最大矩形。
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const arr = [0, ...heights, 0]
  let stack = []
  let ret = 0
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      const curr = stack.pop()
      const left = stack[stack.length - 1]
      const right = i
      const area = (right - left - 1) * arr[curr]
      ret = Math.max(area, ret)
    }
    stack.push(i)
  }
  return ret
};

console.log(largestRectangleArea([2,1,5,6,2,3])) // 10
console.log(largestRectangleArea([1, 1]))
