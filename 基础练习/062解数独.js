/* 
  https://leetcode-cn.com/problems/sudoku-solver/
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let rows = []
  let cols = []
  let boxes = []
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  function getBoxIndex(row, col) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3)
  }

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set(options)
    cols[i] = new Set(options)
    boxes[i] = new Set(options)
  }

  // 数独中已有的数字，应该在 set 中删除。
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        rows[i].delete(num)
        cols[j].delete(num)
        boxes[getBoxIndex(i, j)].delete(num)
      }
    }
  }

  function dfs(i, j) {
    if (j === 9) {
      i++
      j = 0
      if (i === 9) return true
    }

    if (board[i][j] !== '.') return dfs(i, j+1)
    
    for (let n = 1; n <= 9; n++) {
      const num = n + ''

      // 因为 set 中之前已经删除了原数独中有的数字，所以 n 如果也不在 set 中，那说明之前数独中已经有了。
      if (!rows[i].has(num) || !cols[j].has(num) || !boxes[getBoxIndex(i, j)].has(num)) {
        continue
      }

      board[i][j] = num // 填充

      rows[i].delete(num)
      cols[j].delete(num)
      boxes[getBoxIndex(i, j)].delete(num)

      if (dfs(i, j+1)) return true;  // 继续，如果最终满足条件，return true

      // 否则，需要回溯
      board[i][j] = '.'

      rows[i].add(num)
      cols[j].add(num)
      boxes[getBoxIndex(i, j)].add(num)
    }

    return false
  }
  dfs(0, 0)
  console.log(board)
};

let sudo = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(solveSudoku(sudo))
