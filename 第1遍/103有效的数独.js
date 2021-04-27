/* 
  https://leetcode-cn.com/problems/valid-sudoku/
  重点是 9 个小方块，怎么确定 const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = {}
  const cols = {}
  const boxs = {}

  for (let i = 0; i < 9; i++) {
    rows[i] = {}
    cols[i] = {}
    boxs[i] = {}
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

        rows[i][num] = rows[i][num] ? rows[i][num] + 1 : 1
        cols[j][num] = cols[j][num] ? cols[j][num] + 1 : 1
        boxs[boxIndex][num] = boxs[boxIndex][num] ? boxs[boxIndex][num] + 1 : 1
        if (rows[i][num] > 1 || cols[j][num] > 1 || boxs[boxIndex][num] > 1) {
          return false
        }
      }
    }
  }
  return true
}

var isValidSudoku = function(board) {
  const rows = []
  const cols = []
  const boxs = []

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set()
    cols[i] = new Set()
    boxs[i] = new Set()
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (rows[i].has(num) || cols[j].has(num) || boxs[boxIndex].has(num)) {
          return false
        }
        rows[i].add(num)
        cols[j].add(num)
        boxs[boxIndex].add(num)
      }
    }
  }
  return true
}

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