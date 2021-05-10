/* 
  https://leetcode-cn.com/problems/valid-sudoku/
  重点是 9 个小方块，怎么确定 const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = []
  const cols = []
  const boxs = []

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set()
    cols[i] = new Set()
    boxs[i] = new Set()
  }

  function getBoxIndex(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
  }

  const m = board.length, n = board[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = board[i][j]
      if (num !== '.') {
        // if (rows[i].has(num) || cols[j].has(num) || boxs[getBoxIndex(i, j)].has(num)) {
        //   return false
        // } else {
        //   rows[i].add(num)
        //   cols[j].add(num)
        //   boxs[getBoxIndex(i, j)].has(num)
        // }
        if (!rows[i].has(num) && !cols[j].has(num) && !boxs[getBoxIndex(i, j)].has(num)) {
          rows[i].add(num)
          cols[j].add(num)
          boxs[getBoxIndex(i, j)].add(num)
        } else {
          return false
        }
      }
    }
  }
  return true
}

// var isValidSudoku = function(board) {
  
// }

console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]))