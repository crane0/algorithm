/* 
  https://leetcode-cn.com/problems/trapping-rain-water/
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let stack = [], ret = 0

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const curr = stack.pop()
      if (!stack.length) {
        break
      }
      const right = i
      const left = stack[stack.length - 1]
      const area = (right - left - 1) * (Math.min(height[right], height[left]) - height[curr])
      ret += area
    }
    stack.push(i)
  }
  return ret
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
