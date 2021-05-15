/* 
  https://leetcode-cn.com/problems/sudoku-solver/
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rows = []
  const cols = []
  const boxs = []
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
 
  function getBoxIndex(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
  }

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set(options)
    cols[i] = new Set(options)
    boxs[i] = new Set(options)
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j]
      if (item !== '.') {
        rows[i].delete(item)
        cols[j].delete(item)
        boxs[getBoxIndex(i, j)].delete(item)
      }
    }
  }

  dfs(0, 0)
  return board

  function dfs(i, j) {
    if (j === 9) {
      j = 0
      i++
      if (i === 9) return true
    }
    if (board[i][j] !== '.') return dfs(i, j + 1)

    for (const opt of options) {
      if (!rows[i].has(opt) || !cols[j].has(opt) || !boxs[getBoxIndex(i, j)].has(opt)) {
        continue
      }
      board[i][j] = opt
      rows[i].delete(opt)
      cols[j].delete(opt)
      boxs[getBoxIndex(i, j)].delete(opt)
      if (dfs(i, j + 1)) return true
      board[i][j] = '.'
      rows[i].add(opt)
      cols[j].add(opt)
      boxs[getBoxIndex(i, j)].add(opt)
    }
    return false
  }
}


/**
 * 大致思路上面的一样，区别是
 * 第一次遍历时，把空的位置都存起来，之后进行 dfs 填充。
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rows = []
  const cols = []
  const boxs = []
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const spaces = []
 
  function getBoxIndex(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
  }

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set(options)
    cols[i] = new Set(options)
    boxs[i] = new Set(options)
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j]
      if (item !== '.') {
        rows[i].delete(item)
        cols[j].delete(item)
        boxs[getBoxIndex(i, j)].delete(item)
      } else {
        spaces.push([i, j])
      }
    }
  }

  dfs(0, 0)
  return board

  function dfs(position) {
    if (position === spaces.length) {
      return true
    }

    const [i, j] = spaces[position]
    for (const opt of options) {
      if (!rows[i].has(opt) || !cols[j].has(opt) || !boxs[getBoxIndex(i, j)].has(opt)) {
        continue
      }
      board[i][j] = opt
      rows[i].delete(opt)
      cols[j].delete(opt)
      boxs[getBoxIndex(i, j)].delete(opt)
      if (dfs(position + 1)) return true
      board[i][j] = '.'
      rows[i].add(opt)
      cols[j].add(opt)
      boxs[getBoxIndex(i, j)].add(opt)
    }
    return false
  }
}

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))