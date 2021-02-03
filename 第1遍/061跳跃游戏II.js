/* 
  https://leetcode-cn.com/problems/jump-game-ii/
*/
/**
 * bfs 会超时
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) return 0;

  let queue = [0], endPoint = nums.length - 1, count = 0
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      let point = queue.shift()
      if (point + nums[point] >= endPoint) {
        return count + 1
      }
      for (let i = 1; i <= nums[point]; i++) {
        queue.push(point + i)
      }
    }
    count++
  }
  return -1
}

var jump = function(nums) {
  if (nums.length === 1) return 0;

  let endPoint = 0, maxStep = 0, steps = 0
  for (let i = 0; i < nums.length - 1; i++) {
    maxStep = Math.max(maxStep, i + nums[i])
    if (i === endPoint) {
      endPoint = maxStep
      steps++
    }
  }
  return steps
}

// console.log(jump([2,3,1,1,4])) // 2
// console.log(jump([1, 2])) // 1
// console.log(jump([1, 2, 3])) // 2
// console.log(jump([1,2,1,1,1])) // 3
console.log(jump([8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5])) // 3