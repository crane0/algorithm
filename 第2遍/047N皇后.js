/* 
  https://leetcode-cn.com/problems/n-queens/
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let queue = new Array(n).fill(-1)
  let columns = new Set()
  let pie = new Set()
  let na = new Set()
  let ret = []
  dfs(0)
  return ret

  function dfs(row) {
    if (row === n) {
      const board = build()
      ret.push(board)
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

      queue[row] = i
      columns.add(i)
      pie.add(pie1)
      na.add(na1)
      dfs(row + 1)
      queue[row] = -1
      columns.delete(i)
      pie.delete(pie1)
      na.delete(na1)
    }
  }

  function build() {
    let ret = []
    for (let i = 0; i < queue.length; i++) {
      let row = new Array(n).fill('.')
      row[queue[i]] = 'Q'
      ret.push(row.join(''))
    }
    return ret
  }
}

console.log(solveNQueens(4))