/* 
  https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (heights.length === 0) return 0;
  if (heights.length === 1) return heights[0];

  let stack = [], ret = 0
  heights = [0, ...heights, 0]

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length-1]]) {
      const curr = stack.pop()
      const left = stack[stack.length-1]
      const right = i
      const area = (right - left - 1) * heights[curr]
      ret = Math.max(ret, area)
    }
    stack.push(i)
  }
  return ret
};

console.log(largestRectangleArea([2,1,5,6,2,3]))
