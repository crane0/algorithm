/* 
  https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let sign = 0
  for (let i = 0; i < nums.length - 1;i++) {
    while (nums[i] === nums[i+1]) {
      i++
    }
    if (nums[i+1] !== undefined) {
      nums[++sign] = nums[i+1]
    }
  }
  nums.splice(sign+1)
  return nums.length
};

var removeDuplicates = function(nums) {
  let sign = 0
  for (let i = 0; i < nums.length;i++) {
    if (nums[i] !== nums[i-1]) {
      nums[i-sign] = nums[i]
    } else {
      sign++ // 每次相等时 ++，最后就表示所有重复元素的个数
    }
  }
  return nums.length - sign
};



console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
console.log(removeDuplicates([1,1]))
