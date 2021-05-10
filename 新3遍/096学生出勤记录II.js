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
  
};


// O(1) 空间复杂度
var checkRecord = function(n) {
  
};


// console.log(checkRecord(2))
console.log(checkRecord(10101))