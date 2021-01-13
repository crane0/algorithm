/* 
  https://leetcode-cn.com/problems/majority-element/description/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
  投票算法
  随便选一个候选人 a，剩下的逐个进行 PK，如果和 a 相等，那 a 就加一条命，否则减一条命（一换一）。
  count 记录当时生命值，如果 count === 0，说明 a 已经被弄死了，接着在所有活着的人中选择候选人。
  假设 a 不是候选人（a 的整体数量 <= 所有人数的一半），那最后肯定会被弄死
  同理，假设 a 是候选人，那最后肯定至少有一个 a 活着。

  另外，如果是 2 个都不是众数的人 PK，一换一后，众数的优势更大了。

*/
var majorityElement = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let count = 0, candidate = 0
  for (const num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += (candidate === num) ? 1 : -1
  }
  return candidate
};

/* 
  分治
  思路：如果 a 是 nums 的众数，那将 nums 一分为二后，a 必然也是其中一部分的众数。
  证明：注意众数的定义，出现次数 > n/2
  因为 a 是 nums 的众数，则 a 出现的次数 > (left + right)/2
  假设 a 既不是左半部分，也不是右半部分的众数，则 a 出现的次数 <= (left/2 + right/2) = (left + right)/2
  也就是说 a 出现的次数 <= (left + right)/2，说明 a 不是 nums 的众数，出现了矛盾。
*/
var majorityElement = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  return findMode(0, nums.length - 1)

  function findMode(low, high) {
    // 终止条件，区间只剩一个数了，那肯定是该区间的众数。
    if (low === high) {
      return nums[low]
    }

    const mid = Math.floor((high - low)/2) + low
    // 拆分子问题
    const leftMode = findMode(low, mid)
    const rightMode = findMode(mid + 1, high)

    let ret = 0
    // 如果左右区间众数为同一个，可直接返回
    if (leftMode === rightMode) {
      ret = leftMode
    } else {
      // 否则，在左右区间分别计数统计其众数，次数多的为左右整个区间的众数
      const leftCount = countInRange(leftMode, low, mid)
      const rightCount = countInRange(rightMode, mid, high)
      ret = leftCount > rightCount ? leftMode : rightMode
    }
    return ret
  }

  function countInRange(mode, low, high) {
    let count = 0
    for (let i = low; i < high; i++) {
      if (mode === nums[i]) {
        count++
      }
    }
    return count
  }
};

console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2
