/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let arr = [1, 2] // arr 存放的是每次累计后的结果
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n-1]
};

console.log(climbStairs(3))