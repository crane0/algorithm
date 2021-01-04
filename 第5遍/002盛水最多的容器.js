/* 
  https://leetcode-cn.com/problems/container-with-most-water/
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let ret = 0
  for (let i = 0, j = height.length - 1; i < j;) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--]
    const distance = j - i + 1
    const area = minHeight * distance
    ret = Math.max(ret, area)
  }
  return ret
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
