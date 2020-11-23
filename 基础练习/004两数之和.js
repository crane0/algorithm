/* 
  1 https://leetcode-cn.com/problems/two-sum/

  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
*/
/* 
  暴力求解，时间复杂度 O(n^2)
*/
var nums = [2, 7, 11, 15]
function twoSum(nums, target) {
  if (!Array.isArray(nums) || typeof target !== 'number') {
    throw new Error('输入值不合法')
  }
  let ret = []
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ret = [i ,j]
      }
    }
  }
  return ret
}

/* 
  利用差值减少一层循环。 a = target - a
  先声明一个容器，可以是对象，数组，Map。再通过减法判断差值是否已经存在容器中。
*/
function twoSum2(nums, target) {
  if (!Array.isArray(nums) || typeof target !== 'number') {
    throw new Error('输入值不合法')
  }
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const ret = target - nums[i]
    if (map.has(ret)) {
      return [map.get(ret), i]
    }
    // a + b = target, 记录 b 对应的值和下标
    map.set(nums[i], i)
  }
}
