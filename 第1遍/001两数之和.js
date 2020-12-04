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
    let ret = target - nums[i]
    if (obj[ret] !== undefined) { // obj[ret] 可能为 0，因为是下标
      return [obj[ret], i]
    }
    obj[nums[i]] = i
  }
};

console.log(twoSum([2, 7, 11, 15], 9))
