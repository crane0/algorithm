/* 
  https://leetcode-cn.com/problems/majority-element/description/
*/
/**
 * 注意，题目给的要求，众数肯定是存在的
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  return dfs(0, nums.length - 1)

  function dfs(start, end) {
    if (start === end) {
      return nums[start]
    }
    const mid = start + Math.floor((end - start) / 2)
    const leftNumber = dfs(start, mid)
    const rightNumber = dfs(mid+1, end)

    let ret = 0
    if (leftNumber === rightNumber) {
      ret = leftNumber
      // 因为众数肯定是存在的，所以 else 中一定可以判断出。
    } else {
      const leftCount = countInRange(leftNumber, start, mid)
      const rightCount = countInRange(rightNumber, mid, end)
      ret = leftCount > rightCount ? leftNumber : rightNumber
    }
    return ret
  }

  function countInRange(number, start, end) {
    let count = 0
    for (let i = start; i < end; i++) {
      if (number === nums[i]) {
        count++
      }
    }
    return count
  }
};

/* 
  投票算法
*/
var majorityElement = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let count = 0, waiter = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      waiter = nums[i]
    }
    count += waiter === nums[i] ? 1 : -1
  }
  return waiter
}

// 下面的方式有问题，而且空间复杂度比较好，每次都要复制数组。
// var majorityElement = function(nums) {
//   if (nums.length === 0) return 0
//   if (nums.length === 1) return nums[0]

//   return dfs(nums)

//   function dfs(nums) {
//     if (nums.length === 1) {
//       return nums[0]
//     }
//     const mid = Math.floor(nums.length / 2)
//     const leftNumber = dfs(nums.slice(0, mid))
//     const rightNumber = dfs(nums.slice(mid))
//     let ret = 0
//     if (leftNumber === rightNumber) {
//       ret = leftNumber
//       // 因为众数肯定是存在的（没有[1,2] 这样的实例），所以 else 中一定可以判断出。
//     } else {
//       const leftCount = countInRange(nums, leftNumber, 0, mid)
//       const rightCount = countInRange(nums, rightNumber, mid, nums.length)
//       ret = leftCount > rightCount ? leftNumber : rightNumber
//     }
//     return ret
//   }

//   function countInRange(nums, number, start, end) {
//     let count = 0
//     for (let i = start; i < end; i++) {
//       if (number === nums[i]) {
//         count++
//       }
//     }
//     return count
//   }
// };

console.log(majorityElement([3,2,3])) // 3
// console.log(majorityElement([2,2,1,1,1,2,2])) // 2