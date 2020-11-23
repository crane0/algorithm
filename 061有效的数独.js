/* 
  https://leetcode-cn.com/problems/valid-sudoku/

  思路，分为 9行，9列，9个盒子，分别判重
  以 {num: count} 的形式，记录每个 num 的次数，如果 > 1，就说明不符合了。
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = {}
  const cols = {}
  const boxes = {}

  for (let i = 0; i < 9; i++) {
    rows[i] = {}
    cols[i] = {}
    boxes[i] = {}
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        rows[i][num] = rows[i][num] ? rows[i][num]+1 : 1
        cols[j][num] = cols[j][num] ? cols[j][num]+1 : 1
        boxes[boxIndex][num] = boxes[boxIndex][num] ? boxes[boxIndex][num]+1 : 1

        if (rows[i][num] > 1 || cols[j][num] > 1 || boxes[boxIndex][num] > 1) {
          return false
        }
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

console.log(isValidSudoku(sudo2))