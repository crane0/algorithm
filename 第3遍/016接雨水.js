/* 
  https://leetcode-cn.com/problems/trapping-rain-water/
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ret = 0
  let stack = []
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const bottom = stack.pop()
      if (!stack.length) { // 这一步没有写出来
        break
      }
      const right = i
      const left = stack[stack.length - 1]
      const minHeight = Math.min(height[right], height[left])
      const area = (right - left - 1) * (minHeight - height[bottom])
      ret += area
    }
    stack.push(i)
  }
  return ret
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
