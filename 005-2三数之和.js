// var nums = [-1, 0, 1, 2, -1, -4]
// var nums = [-4, -1, -1, 0, 1, 2]
var nums = [-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0]
// var nums = [-5, -3, -2, -1, 0, 0, 0, 1, 1, 1, 3, 3, 4, 4, 4]
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b)
  let ret = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果外层循环的元素 > 0，3数之和肯定 > 0，结束循环
    if (nums[i] > 0) {
      break
    }
    // 去重：经历过一次循环后，比如 [-1, -1, -1, ...] 这样的，2个或3个一样值的和，也已经判断了一次。
    if (i > 0 && nums[i] == nums[i - 1]){
      continue
    }
    // j 是左指针，k 是右指针
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        ret.push([nums[i], nums[j], nums[k]])
        /* 
          去重：
          当满足 sum === 0 后，
          如果下一个 j 不变，就继续右移，直到不相等。
          注意是 while，不是 if
        */
        while (nums[j] === nums[j + 1]) {
          j++
        }
        while (nums[k] === nums[k - 1]) {
          k--
        }
        /* 
          经历过上面的 j++ 后，j 已经变了，因为没有变之前是 === 0 的，变了之后肯定是不相等的，
          所以再次 j++，判断下一个 j。
          k 同理。
        */
        j++;
        k--;
      } else if (sum < 0) {
        j++
      } else if (sum > 0) {
        k--
      }
    }
  }
  return ret
}
threeSum(nums)
