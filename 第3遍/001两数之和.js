/* 
  https://leetcode-cn.com/problems/two-sum/
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i]
    } else {
      obj[nums[i]] = i
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))
