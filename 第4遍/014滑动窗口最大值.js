/* 
  https://leetcode-cn.com/problems/sliding-window-maximum/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let ret = []
  let base = Math.max(...nums.slice(0, k))
  ret.push(base)

  for (let i = 1; i < nums.length - k + 1; i++) {
    if (nums[i-1] !== base) {
      if (nums[i+k-1] > base) {
        base = nums[i+k-1]
      }
    } else {
      base = Math.max(...nums.slice(i, i+k))
    }
    ret.push(base)
  }
  return ret
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) // [3,3,5,5,6,7]
