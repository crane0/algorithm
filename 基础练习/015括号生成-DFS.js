/* 
  n 表示生成括号的对数。 
  返回一个数组，所有有效括号的组合
*/


// 第1步，枚举所有组合，无论是否有效
function generate1(n) {
  gen(0, 2*n, "")

  function gen(level, max, currntString) {
    // 终止条件
    if (level >= max) {
      console.log(currntString)
      return
    }

    // 过程（实现想不通，就先手动下沉2层，大致就明白了）
    // 当前层成员 "(" 或 ")"，分别下沉
    let s1 = currntString + '('
    let s2 = currntString + ')'

    // 到下一层
    gen(level + 1, max, s1)
    gen(level + 1, max, s2)
  }
}

// console.log(generate1(3))


/* 
  第2步，验证有效性
  "("，随时可以加，不超标就行 <= n
  ")"，右括号个数 <= 左括号的个数
*/
function generate2(n) {
  let arr = []

  gen(0, 0, n, "")

  return arr

  function gen(left, right, n, currntString) {
    // 终止条件
    if (left === n && right === n) {
      arr.push(currntString)
      return
    }

    // 过程
    let s1 = currntString + '('
    let s2 = currntString + ')'

    // 到下一层，= n 是终止条件
    if (left < n) {
      gen(left + 1, right, n, s1)
    }
    if (right < left) {
      gen(left, right + 1, n, s2)
    }
  }
}

console.log(generate2(3))