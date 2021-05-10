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
  
};


/**
 * 依次记录每个 point 可以到达的 reachPoint
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  
};



console.log(canCross([0,1,3,5,6,8,12,17]))