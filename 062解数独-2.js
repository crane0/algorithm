/* 
  https://leetcode-cn.com/problems/sudoku-solver/

  相比 v1，初始化时，将所有的空格都存起来，之后遍历空格填充判断。
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let rows = []
  let cols = []
  let boxes = []
  let spaces = []
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
      if (board[i][j] === '.') {
        spaces.push([i, j])
      } else {
        const num = board[i][j]
        rows[i].delete(num)
        cols[j].delete(num)
        boxes[getBoxIndex(i, j)].delete(num)
      }
    }
  }

  function dfs(board, position) {
    if (position === spaces.length) {
      return true
    }

    const [i, j] = spaces[position]
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

      if (dfs(board, position+1)) return true
      // 否则，需要回溯
      // board[i][j] = '.' // 这里不需要重置。因为没有根据 board[i][j] === '.' 做判断。

      rows[i].add(num)
      cols[j].add(num)
      boxes[getBoxIndex(i, j)].add(num)
    }
    return false
  }
  dfs(board, 0)
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

let sp = [
  [ 0, 2 ], [ 0, 3 ], [ 0, 5 ], [ 0, 6 ],
  [ 0, 7 ], [ 0, 8 ], [ 1, 1 ], [ 1, 2 ],
  [ 1, 6 ], [ 1, 7 ], [ 1, 8 ], [ 2, 0 ],
  [ 2, 3 ], [ 2, 4 ], [ 2, 5 ], [ 2, 6 ],
  [ 2, 8 ], [ 3, 1 ], [ 3, 2 ], [ 3, 3 ],
  [ 3, 5 ], [ 3, 6 ], [ 3, 7 ], [ 4, 1 ],
  [ 4, 2 ], [ 4, 4 ], [ 4, 6 ], [ 4, 7 ],
  [ 5, 1 ], [ 5, 2 ], [ 5, 3 ], [ 5, 5 ],
  [ 5, 6 ], [ 5, 7 ], [ 6, 0 ], [ 6, 2 ],
  [ 6, 3 ], [ 6, 4 ], [ 6, 5 ], [ 6, 8 ],
  [ 7, 0 ], [ 7, 1 ], [ 7, 2 ], [ 7, 6 ],
  [ 7, 7 ], [ 8, 0 ], [ 8, 1 ], [ 8, 2 ],
  [ 8, 3 ], [ 8, 5 ], [ 8, 6 ]
]

console.log(solveSudoku(sudo))
