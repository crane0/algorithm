/* 
  https://leetcode-cn.com/problems/n-queens/
*/
/**
 * dfs 每一层就是每一行哇w
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
      const board = buildBoard()
      ret.push(board)
      return
    }
    for (let i = 0; i < n; i++) {
      if (columns.has(i)) {
        continue
      }
      const pie1 = row + i
      if (pie.has(pie1)) {
        continue
      }

      const na1 = row - i
      if (na.has(na1)) {
        continue
      }

      queue[row] = i
      pie.add(pie1)
      na.add(na1)
      columns.add(i)
      dfs(row + 1)
      queue[row] = -1
      pie.delete(pie1)
      na.delete(na1)
      columns.delete(i)
    }
  }

  function buildBoard() {
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