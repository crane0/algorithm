/* 
  https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j + 1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3])) // 5
