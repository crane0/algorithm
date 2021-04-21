/* 
  https://leetcode-cn.com/problems/student-attendance-record-i/
*/
/**
 * 需满足的条件：count(A) <= 1 && count(LLL) <= 0
 * 在 dfs 所有可能的组合时，是不断的往最后新增 A | L | P，再判断是否合法。
 * 在不断新增字符的前提下，
 * 1，关注 A，只有2种情况，整体字符串有没有A，没有-->下层可添加A。有-->不可添加
 * 2，关注 L，末尾连续 L 的数量（前面整体的字符串有1个L或是LL，都无所谓，因为不影响）。0 | 1--> 下层可添加L，2 --> 下层不可添加。
 * 
 * dp[i] 表示从 [0, i] 满足奖励的个数。第2维表示A的数量 [0, 1]，第3维表示末尾L的数量 [0, 2]
 * 再添加2个状态：
 * dp[i][0][0] 0A0L，
 * dp[i][0][1] 0A1L，
 * dp[i][0][2] 0A2L，
 * dp[i][1][0] 1A0L，
 * dp[i][1][1] 1A1L，
 * dp[i][1][2] 1A2L，
 * @param {string} n
 * @return {boolean}
 */
var checkRecord = function(n) {
  const mod = 1000000007
  let dp = []
  for (let i = 0; i <= n; i++) {
    dp[i] = []
    for (let j = 0; j < 2; j++) {
      dp[i][j] = new Array(3).fill(0)
    }
  }
  dp[1][0][0] = 1
  dp[1][0][1] = 1
  // dp[1][0][2] = 0
  dp[1][1][0] = 1
  // dp[1][1][1] = 0
  // dp[1][1][2] = 0

  for (let i = 2; i <= n; i++) {
    // 末尾 +P
    dp[i][0][0] = (dp[i-1][0][0] + dp[i-1][0][1] + dp[i-1][0][2]) % mod
    // 末尾 +L
    dp[i][0][1] = dp[i-1][0][0]
    // 末尾 +L
    dp[i][0][2] = dp[i-1][0][1]
    // 末尾+A +A +A | +P +P +P
    dp[i][1][0] = (dp[i-1][0][0] + dp[i-1][0][1] + dp[i-1][0][2] + dp[i-1][1][0] +  dp[i-1][1][1] + dp[i-1][1][2]) % mod
    // 末尾+L
    dp[i][1][1] = dp[i-1][1][0]
    // 末尾+L
    dp[i][1][2] = dp[i-1][1][1]
  }
  return (dp[n][0][0] + dp[n][0][1] + dp[n][0][2] + dp[n][1][0] + dp[n][1][1] + dp[n][1][2]) % mod
};


// O(1) 空间复杂度
var checkRecord = function(n) {
  const mod = 1000000007

  let count00 = 1
  let count01 = 1
  let count02 = 0
  let count10 = 1
  let count11 = 0
  let count12 = 0

  for (let i = 2; i <= n; i++) {
    let temp00 = count00
    let temp10 = count10

    count00 = (count00 + count01 + count02) % mod
    count10 = (temp00 + count01 + count02 + count10 + count11 + count12) % mod
    count02 = count01
    count01 = temp00
    count12 = count11
    count11 = temp10
  }
  return (count00 + count01 + count02 + count10 + count11 + count12) % mod
};


// console.log(checkRecord(2))
console.log(checkRecord(10101))