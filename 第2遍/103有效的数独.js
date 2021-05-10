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

  // 从 0 开始
  function getBoxIndex(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
  }

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set()
    cols[i] = new Set()
    boxs[i] = new Set()
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j]
      if (item !== '.') {
        const boxIndex = getBoxIndex(i, j)
        if (rows[i].has(item) || cols[j].has(item) || boxs[boxIndex].has(item)) {
          return false
        }
        rows[i].add(item)
        cols[j].add(item)
        boxs[boxIndex].add(item)
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