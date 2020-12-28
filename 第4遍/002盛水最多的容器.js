/* 
  https://leetcode-cn.com/problems/container-with-most-water/
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1, ret = 0
  while (left < right) {
    const min = height[left] < height[right] ? height[left++] : height[right--]
    const area = min * (right - left + 1) // 无论 left++ 还是 right--，总会少1，所以加回来
    ret = Math.max(ret, area)
  }
  return ret
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
