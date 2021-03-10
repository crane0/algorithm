/* 
  https://leetcode-cn.com/problems/jump-game-ii/
  注意题解，假设是总能到达终点的。
*/
/**
 * bfs 会超时
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length <= 1) return 0
  if (nums.length === 2) {
    if (nums[0] >= 1) {
      return 1
    }
  }

  let i = 0, count = 0
  for (i; i < nums.length;) {
    if (i + nums[i] >= nums.length - 2) {
      return count + 1
    }
    let max = 0, index = 0
    for (let j = i+1; j <= i + nums[i]; j++) {
      if (j + nums[j] >= nums.length - 2) {
        return count + 1
      }
      if (max <= nums[j]) {
        index = j
        max = nums[j]
      }
    }
    count++
    i = index
  }
  console.log(count)
}


// 这种方式，可以避免下面的错误
var jump = function(nums) {
  let maxPosition = 0
  let end = 0
  let step = 0
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (maxPosition >= nums.length - 1) {
      step++
      break
    }
    if (i === end) {
      end = maxPosition
      step++
    }
  }
  return step
}
// console.log(jump([2,3,1,1,4])) // 2
// console.log(jump([1, 2, 3])) // 2
// console.log(jump([1,2,1,1,1])) // 3
// console.log(jump([8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5])) // 3

// 如果只按照每次取能跳到的最大值，下面3个是经典的错误
console.log(jump([3, 2, 1])) // 1
//  index = 0 的 9 和 index = 1 的 8 都是一样的，就多跳了一次
console.log(jump([9,8,2,2,0,2,2,0,4,1,5,7,9,6,6,0,6,5,0,5])) // 3 
// 原本应该 10 -> 1 -> 0，而现在是 10 -> 9 -> 8.....
console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0])) // 2