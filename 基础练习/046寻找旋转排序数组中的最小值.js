/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // 如果传入的数组只有1项,直接返回即可。
  if (nums.length === 1) {
    return nums[0];
  };

  let left = 0, right = nums.length - 1, ret = Infinity
  
  // 排除数组本身就有序这种情况
  if (nums[left] < nums[right]) {
    return nums[0];
  }
  while (left <= right) {
    let mid = left + right >> 1
    if (nums[mid] < nums[right]) { // 右半部分是有序的
      ret = Math.min(nums[mid], ret)
      right = mid - 1
    } else {
      ret =  Math.min(nums[left], ret)
      left = mid + 1
    }
  }
  return ret
};

// console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([3,4,5,1,2]))