/* 
  https://leetcode-cn.com/problems/perfect-squares/
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const maxSquareIndex = Math.floor(Math.sqrt(n)) + 1
  let dp = new Array(n+1).fill(Infinity)
  dp[0] = 0

  let squareArr = []
  for (let i = 0; i < maxSquareIndex; i++) {
    squareArr[i] = i * i
  }
  if (squareArr.includes(n)) return 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < maxSquareIndex; j++) {
      if (i < squareArr[j]) break;
      dp[i] = Math.min(dp[i], dp[i-squareArr[j]] + 1)
    }
  }
  return dp[n]
};

var numSquares = function(n) {
  let squareArr = []
  for (let i = 0; i * i <= n; i++) {
    squareArr[i] = i * i
  }
  if (squareArr.includes(n)) return 1;

  let queue = new Set
  queue.add(n)
  let level = 0
  while (queue.size > 0) {
    level += 1
    let nextSet = new Set
    for (const q of queue) {
      for (const s of squareArr) {
        if (q === s) {
          return level
        } else if (q < s) {
          break
        } else {
          nextSet.add(q - s)
        }
      }
    }
    queue = nextSet
  }
  return level
};

console.log(numSquares(11))