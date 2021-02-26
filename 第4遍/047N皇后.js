/* 
  https://leetcode-cn.com/problems/n-queens/
*/
/**
 * dfs 每一层就是每一行哇
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let columns = new Set()
  let pie = new Set()
  let na = new Set()

  let ret = [], queue = []
  dfs(0)
  return ret

  function dfs(row) {
    if (row === n) {
      ret.push(build(queue))
      return
    }
    for (let i = 0; i < n; i++) {
      if (columns.has(i)) {
        continue
      }

      let pie1 = row + i
      if (pie.has(pie1)) {
        continue
      }

      let na1 = row - i
      if (na.has(na1)) {
        continue
      }
      columns.add(i)
      pie.add(pie1)
      na.add(na1)
      queue.push(i)
      dfs(row + 1)
      columns.delete(i)
      pie.delete(pie1)
      na.delete(na1)
      queue.pop(i)
    }
  }

  function build(queue) {
    let ret = []
    for (let i = 0; i < n; i++) {
      let strArr = new Array(n).fill('.')
      strArr[queue[i]] = 'Q'
      ret.push(strArr.join(''))
    }
    return ret
  }
}

console.log(solveNQueens(4))