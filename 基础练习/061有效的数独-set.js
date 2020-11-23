/* 
  https://leetcode-cn.com/problems/valid-sudoku/

  思路，和 v1 一样，不过换做了 Set 判重，
  循环开始就将 num 添加进去，再次循环如果发现了 num，说明出现了第2次。
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = []
  const cols = []
  const boxes = []

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set()
    cols[i] = new Set()
    boxes[i] = new Set()
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
          return false
        }
        rows[i].add(num)
        cols[j].add(num)
        boxes[boxIndex].add(num)
      }
    }
  }
  return true
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

let sudo2 = [
    ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(sudo))