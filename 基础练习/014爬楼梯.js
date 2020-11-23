/* 
  后面会用动态规划来解题。
  递归的方式，最坏时间复杂度 2 的n次方。
*/
// var climbStairs = function(n) {
//   if(n === 1 || n === 2) {
//     return n
//   }
//   return climbStairs(n-1) + climbStairs(n -2)
// }

// 117s 的时间
// console.log(climbStairs(50))

var climbStairs = function(n) {
  if(n === 1 || n === 2) {
    return n
  }
  let f1 = 1, f2 = 2, f3 = 3
  for (let i = 3; i < n + 1; i++) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }
  return f3
}
console.log(climbStairs(500))
