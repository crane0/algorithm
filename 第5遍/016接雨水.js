/* 
  https://leetcode-cn.com/problems/trapping-rain-water/
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let stack = [], count = 0
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length-1]]) {
      const curr = stack.pop()
      if (stack.length === 0) {
        break
      }
      const left = stack[stack.length-1]
      const right = i
      const depth = Math.min(height[left], height[right]) - height[curr]
      const area = (right - left - 1) * depth
      count += area
    }
    stack.push(i)
  }
  return count
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
