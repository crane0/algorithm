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

  // index 从 0 开始
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
      const num = board[i][j]
      rows[i].delete(num)
      cols[j].delete(num)
      boxs[getBoxIndex(i, j)].delete(num)
    }
  }

  dfs(0, 0)

  // return 都是为了返回上一层。
  function dfs(i, j) {
    if (j === 9) {
      i++
      j = 0
      if (i === 9) return true
    }
    if (board[i][j] !== '.') return dfs(i, j+1)

    for (let k = 1; k <= 9; k++) {
      const num = k + ''
      if (!rows[i].has(num) || !cols[j].has(num) || !boxs[getBoxIndex(i, j)].has(num)) {
        continue
      }
      board[i][j] = num
      rows[i].delete(num)
      cols[j].delete(num)
      boxs[getBoxIndex(i, j)].delete(num)

      /* 
        下一层，如果 for 循环没有一个满足的，那说明上一个填的有问题，所以 for 循环下面要 return false
        返回上一层后，回溯
      */
      if (dfs(i, j+1)) return true

      board[i][j] = '.'
      rows[i].add(num)
      cols[j].add(num)
      boxs[getBoxIndex(i, j)].add(num)
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
  const spaces = []
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
      const num = board[i][j]
      if (num === '.') {
        spaces.push([i,j])
      } else {
        rows[i].delete(num)
        cols[j].delete(num)
        boxs[getBoxIndex(i, j)].delete(num)
      }
    }
  }

  dfs(0)

  function dfs(position) {
    if (position === spaces.length) {
      return true
    }

    const [i, j] = spaces[position]

    for (let k = 1; k <= 9; k++) {
      let num = k + ''
      if (!rows[i].has(num) || !cols[j].has(num) || !boxs[getBoxIndex(i, j)].has(num)) {
        continue
      }
      board[i][j] = num
      rows[i].delete(num)
      cols[j].delete(num)
      boxs[getBoxIndex(i, j)].delete(num)

      if (dfs(position+1)) return true

      rows[i].add(num)
      cols[j].add(num)
      boxs[getBoxIndex(i, j)].add(num)
    }
    return false
  }
}