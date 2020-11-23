/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  return findMode(nums, 0, nums.length - 1)

  function findMode(nums, low, high) {
    // 终止条件
    if(low === high) return nums[low]

    // 拆分子问题
    let mid = Math.floor((high - low) / 2) + low

    // 下探
    let leftMode = findMode(nums, low, mid)
    let rightMode = findMode(nums, mid+1, high)

    // 汇总子问题
    // 如果左右区间为同一个数，则直接返回；否则分别计算左右区间的 mode，最后作比较
    let ret
    if(leftMode === rightMode) {
      ret = leftMode
    } else {
      let leftCount = countInRange(nums, leftMode, low, mid)
      let rightCount = countInRange(nums, rightMode, mid, high)
      ret =  leftCount > rightCount ? leftMode : rightMode
    }
    return ret
  }

  function countInRange(nums, mode, low, high) {
    let count = 0
    for (let i = low; i < high; i++) {
      if (mode === nums[i]) {
        count++
      }
    }
    return count
  }
};

// console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([6, 5, 5]))