/* 
  https://leetcode-cn.com/problems/two-sum/
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let minus = target - nums[i]
    if (map.has(minus)) {
      return [i, map.get(minus)]
    } else {
      map.set(nums[i], i)
    }
  }
  return ret
};

console.log(twoSum([2, 7, 11, 15], 9))
