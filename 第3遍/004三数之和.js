/* 
  https://leetcode-cn.com/problems/3sum/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let ret = []
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i-1]) {
      continue
    }

    for (let j = i+1, k = nums.length - 1; j < k;) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        ret.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j+1]) {
          j++
        }
        while (nums[j] === nums[k-1]) {
          k--
        }
        j++
        k--
      } else if (sum > 0) {
        k--
      } else if (sum < 0) {
        j++
      }
    }
  }
  return ret
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
