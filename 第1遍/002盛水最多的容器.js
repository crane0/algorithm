/* 
  https://leetcode-cn.com/problems/container-with-most-water/
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let minheight = 0, area = 0, max = 0
  for (let i = 0, j = height.length - 1; i < j;) {
    minheight = height[i] < height[j] ? height[i++] : height[j--];
    area = (j - i + 1) * minheight
    max = Math.max(max, area)
  }
  return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
