/* 
  https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [], ret = 0
  heights= [0, ...heights, 0]
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const curr = stack.pop()
      const right = i
      const left = stack[stack.length - 1]
      const area = (right - left - 1) * heights[curr]
      ret = Math.max(ret, area)
    }
    stack.push(i)
  }
  return ret
};

console.log(largestRectangleArea([2,1,5,6,2,3]))
console.log(largestRectangleArea([1,1]))
console.log(largestRectangleArea([1]))
