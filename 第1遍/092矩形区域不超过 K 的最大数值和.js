/* 
  https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/
*/
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  if (matrix.length == 0) return 0;
  const m = matrix.length, n = matrix[0].length
  let res = -Infinity

  // col 比 row 大得多。
  for (let left = 0; left < n; left++) {
    let sums = new Array(m).fill(0)
    for (let right = left; right < n; right++) {
      for(let i = 0; i < m; i++){
        sums[i] += matrix[i][right]
      }
      let set = new Set()
      set.add(0)
      let currSum = 0

      for (const sum of sums) {
        /* 
          sums 是多列的和（上面的遍历，也保证了 sums 只包括一个单列的情况），
          currSum 是对 sum 的求和，也就是多列的和再次累计，组成一个矩形的和。
          set 是 currSum 的集合。默认添加了 0

          设 y <= k, y 就是我们要求的数。
          因为 currSum 就是矩形的和，并且 currSum 可能大于 k
          所以为了能在 set 中找到 <= k 的 currSum，我们假设 currSum - x <= k (x 也在 set 中) 推出 x >= currSum - k
          所以，如果能够得到最小的 x，就得到了 y。

          currSum - x <= k 可以这么理解：
          如果 currSum < k，还需确认是不是最接近 k 的，x可正可负
          比如 martix = [[-1,-1,-1]], k = 1。 sums = [-1,-2,-3], set = [-1,-2] (最后一轮循环刚开始，-3没有被添加)
          对于 currSum === -3，此时最接近 k 的应该是 martix[0][2] === -1,
          通过 findSubres(currSum - k) 可以得到 x = -2，所以 y = -3 -(-2) = -1
        */
        currSum += sum
        const num = findSubres(set, currSum - k)
        if(num != undefined) res = Math.max( res, currSum - num );
        if (res === k) return k; // 已经找到了最优解
        set.add(currSum)
      }
    }
  }
  return res


  // 返回 set 中 >= 给定元素的最小元素
  function findSubres(set, number) {
    const arr = Array.from(set).sort((a, b) => a - b)
    if (number > arr[arr.length - 1]) {
      return
    }
    if (number <= arr[0]) {
      return arr[0]
    }
    let left = 0, right = arr.length - 1, index = -1
    while (left <= right) {
      const mid = left + right >> 1
      if (arr[mid] === number) {
        return number
      } else if (arr[mid] < number && arr[mid+1] > number) {
        return arr[mid+1]
      } else if (arr[mid] < number) {
        left = mid + 1
      } else if (arr[mid] > number) {
        right = mid - 1
      }
    }
  }
};

console.log(maxSumSubmatrix([[2,2, -1]], 0))


const n = 3, m = 5

for (let left = 0; left < n; left++) {
  for (let right = left; right < n; right++) {
    for (let i = 0; i < m; i++) {
      console.log(i, right)
    }
    console.log('-')
  }
  console.log('---')
}