/* 
  15 https://leetcode-cn.com/problems/3sum/

  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
  请你找出所有满足条件且不重复的三元组。
  注意：答案中不可以包含重复的三元组。

  示例：给定数组 nums = [-1, 0, 1, 2, -1, -4]
  满足要求的三元组集合为：
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
*/

/* 
  暴力求解，时间复杂度 n^3，
  在 js 中，对二维数组去重还是有点麻烦的。
*/
var nums = [-1, 0, 1, 2, -1, -4]
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b)
  let ret = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果外层循环的元素 > 0，3数之和肯定 > 0，结束循环
    if (nums[i] > 0) {
      break
    }
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          ret.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return unique(ret)
}
threeSum(nums)

/**
 * @param {number[][]} arr 要去重的数组
 * @return {number[][]}
 */
function unique(arr) {
  const sortArr = arr.map(item => {
    // 不在乎以什么形式排序，只要每个 item 保持统一即可。
    item.sort()
    return item
  })
  const tempArr = []
  const ret = sortArr.map(item => {
    // 转成字符串的形式，检测去重。
    if (!tempArr.includes(JSON.stringify(item))) {
      tempArr.push(JSON.stringify(item))
      return item
    }
  }).filter(Boolean)

  return ret
}
