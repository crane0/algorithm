/* 
  https://leetcode-cn.com/problems/frog-jump/
*/
/**
 * dp[i][k] 表示对第 i 个石头来说，可以从第 j = [0, i-1] 个石头跳 k 步到达 i
 * 所以步长 k = stones[i] - stones[j]
 * 而对 j 石头来说，为了保证能跳到 i 石头上，上一个可以跳到 j 石头的步长必须满足 [k-1, k+1]
 * 所以 dp[i][k] = dp[j][k-1] || dp[j][k] || dp[j][k+1]
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const len = stones.length
  /* 
    1, 题目描述了，青蛙一开始就在 stones[0]，所以 stones[1] 必须等于 1
    2, 最优的石头排列应为 [0, 1, 3, 6, 10, ...]，通项公式: n(n-1)/2
    所以，stones[len - 1] 不会大于 (len * (len - 1)) / 2
  */
  if( stones[1] != 1 || stones[len - 1] > (len * (len - 1)) / 2 ) return false;

  let dp = [], k = 0
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false)
  }
  dp[0][0] = true

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      k = stones[i] - stones[j]
      if (k <= i) {
        dp[i][k] = dp[j][k-1] || dp[j][k] || dp[j][k+1]
        if (i === len - 1 && dp[i][k]) {
          return true
        }
      }
    }
  }
  return false
};


/**
 * 依次记录每个 point 可以到达的 reachPoint
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const len = stones.length
  /* 
    1, 题目描述了，青蛙一开始就在 stones[0]，所以 stones[1] 必须等于 1
    2, 最优的石头排列应为 [0, 1, 3, 6, 10, ...]，通项公式: n(n-1)/2
    所以，stones[len - 1] 不会大于 (len * (len - 1)) / 2
  */
  if( stones[1] != 1 || stones[len - 1] > (len * (len - 1)) / 2 ) return false;

  let map = new Map
  for (const s of stones) {
    map.set(s, new Set) // set 保存了 s 可以到达的 point
  }
  map.get(0).add(1)
  console.log(map)

  for (const s of stones) {
    // 每个 point 可以跳的步长
    for (const step of map.get(s)) {
      // 可以到达的 point = 当前 point + 步长
      const reach = step + s
      if (reach === stones[len - 1]) return true
      
      let set = map.get(reach)
      // 如果可以到达的 point 存在，设置该 point 可以跳的步长
      if (set !== undefined) {
        set.add(step)
        if (step - 1 > 0) set.add(step - 1)
        set.add(step + 1)
      }
    }
  }
  return false
};



console.log(canCross([0,1,3,5,6,8,12,17]))