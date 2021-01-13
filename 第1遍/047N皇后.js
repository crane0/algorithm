/* 
  https://leetcode-cn.com/problems/n-queens/
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let queen = new Array(n).fill(-1)
  let columns = new Set()
  let pie = new Set()
  let na = new Set()
  let ret = []
  dfs(0, queen)
  return ret

  function dfs(row, queen) {
    if (row === n) {
      const board = generateBoard()
      ret.push(board)
      return
    }

    /* 
      (0,0),(0,1),(0,2),(0,3)
      (1,0),(1,1),(1,2),(0,3)
      (2,0),(2,1),(2,2),(0,3)
      (3,0),(3,1),(3,2),(0,3)

      pie row + column 始终相等，
      比如 (0,1) (1,0)
      (0,2) (1,1) (2,0)
      同理，na row - column 始终相等
    */
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

      queen[row] = i
      columns.add(i)
      pie.add(pie1)
      na.add(na1)
      dfs(row+1, queen)
      queen[row] = -1
      columns.delete(i)
      pie.delete(pie1)
      na.delete(na1)
    }
  }

  function generateBoard() {
    let ret = []
    for (let i = 0; i < n; i++) {
      const temp = new Array(n).fill('.')
      temp[queen[i]] = 'Q'
      ret.push(temp.join(''))
    }
    return ret
  }
}

console.log(solveNQueens(4))