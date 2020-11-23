/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // 如果传入的数组只有1项,直接返回即可。
  if (nums.length === 1) {
    return nums[0];
  };

  let left = 0, right = nums.length - 1
  
  while (left <= right) {
     // 剩余部分单调时，最小值已找到。（包括了数组本身就有序的情况），不用等到 while 循环结束才返回 nums[left] 
    if (nums[left] <= nums[right]) return nums[left];

    let mid = left + right >> 1
    if (nums[mid] < nums[right]) { // 右半部分是有序的
      right = mid // 这里不能 - 1，因为 [2,1] 的情况下，mid 第一次就等于 0，为了配合上面的 if 判断。
    } else {
      left = mid + 1
    }
  }
  // 注意到，每次分割的2个部分，必有一个是有序递增的。所以最终 nums[left] 肯定是最小的
  // return nums[left]
};

// console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([3,4,5,1,2]))

// 6,7,8,0,1,2,3,4,5