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
  for (let i = 0; i < nums.length - k + 1; i++) {
    let max = Math.max(...nums.slice(i, i+k))
    ret.push(max)
  }
  return ret
};

var maxSlidingWindow = function(nums, k) {
  let base = Math.max(...nums.slice(0, k))
  let ret = []
  ret.push(base)

  for (let i = 1; i < nums.length - k + 1; i++) {
    if (nums[i-1] !== base) { // 如果左边离开的不是最大值
      if (nums[i+k-1] >= base) { // 就用右边新进来的和最大值比较
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
console.log(maxSlidingWindow([7, 2, 4], 2)) // [7, 4]
