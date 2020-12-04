/* 
  https://leetcode-cn.com/problems/trapping-rain-water/
  思路，和柱形图中最大矩形思路差不多，利用单调栈的特性，每次计算接雨水的大小
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0
  let stack = []
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const curr = height[stack.pop()]
      if (!stack.length) break; // 计算完左边所有的之后，清空掉。从下一个位置（可以接雨水的左边界）开始。
      const right = i
      const left = stack[stack.length - 1]
      const distance = right - left - 1
      let minHeight = Math.min(height[left], height[right])
      sum += distance * (minHeight - curr) // -curr 是因为"池底"不一定是0
    }
    stack.push(i)
  }
  return sum
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
