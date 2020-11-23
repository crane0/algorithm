var nums = [-1, 0, 1, 2, -1, -4]
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b)
  let ret = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果外层循环的元素 > 0，3数之和肯定 > 0，结束循环
    if (nums[i] > 0) {
      break
    }
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        ret.push([nums[i], nums[j], nums[k]])
        j++
      } else if (sum < 0) {
        j++
      } else if (sum > 0) {
        k--
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