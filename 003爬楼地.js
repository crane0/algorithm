// 70 https://leetcode-cn.com/problems/climbing-stairs/

/* 
  暴力求解，但是时间复杂度O(2^n)
*/
function foo1(n) {
  if (n <= 2) {
    return n
  }
  return foo1(n-1) + foo1(n-2)
}


/* 
  就是斐波那契数列，f(n) = f(n-1) + f(n-2)
  定义的 f1, f2, f3 就是抽象的 f(n-2), f(n-1), f(n)
  每次循环都会赋新值。所以只需要保存最后 3个变量即可。
*/
function foo2(n) {
  if (n <= 2) {
    return n
  }
  let f1 = 1, f2 = 2, f3 = 3
  for (let i = 3; i < n+1; i++) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }
  return f3
}
console.log(foo2(10))
