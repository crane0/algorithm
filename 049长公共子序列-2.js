// 相比于 v1，空间复杂度降为 O(text2.length)
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	if (!text1 || !text2) return 0;
	const m = text1.length
	const n = text2.length
  let dp = Array(m + 1).fill(0)
  let temp = 0

  for (let i = 1; i <= n; i++) {
		let last = 0 // 相当于左上角 dp[i-1][j-1]，进入下一行之前变为0，是因为 dp[0] = 0，相对于下一行来说还是左上角。
    for (let j = 1; j <= m; j++) {
			temp = dp[j] // 相当于正上方 dp[i-1][j]
			if (text2[i-1] === text1[j-1]) {
				dp[j] = last + 1
			} else {
				dp[j] = Math.max(dp[j-1], dp[j]) // dp[j-1] 相当于左边 dp[i][j-1]
			}
			last = temp // 每轮循环结束，回滚到 未改变 前的 dp[j]，相当于左上角的数。
    }
	}
	return dp[m]
};

console.log(longestCommonSubsequence('abcde', 'ace'))
