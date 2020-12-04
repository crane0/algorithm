/* 
  https://leetcode-cn.com/problems/sliding-window-maximum/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 超时
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;

  let ret = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    ret.push(Math.max(...nums.slice(i, i+k)))
  }
  return ret
};

// 2s 多
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;

  let ret = []
  let max = Math.max(...nums.slice(0, k))
  ret.push(max)
  
  for (let i = 1; i < nums.length - k + 1; i++) {
    if (nums[i-1] === max) {
      max = Math.max(...nums.slice(i, i+k))
    } else {
      max = Math.max(max, nums[ i + k - 1])
    }
    ret.push(max)
  }
  return ret
};

// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) // [3,3,5,5,6,7]
console.log(maxSlidingWindow([9,10,9,-7,-4,-8,2,-6], 5)) // [10,10,9,2]
// console.log(maxSlidingWindow([7, 2, 4], 2))
