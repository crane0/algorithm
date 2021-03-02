/* 
  https://leetcode-cn.com/problems/minesweeper/
  思路：先检测当前 point 周围 M 的数量，如果 > 0 则 point = countM，该点不在扩散。
  如果 <= 0 则 point = 'B'，继续寻找周围其他的 point，只有当 point === 'E' 时，才能以该点继续扩散。
  示例中
  [
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E']
  ]
  最终变成了
  [
    [ 'B', '1', 'E', '1', 'B' ],
    [ 'B', '1', 'M', '1', 'B' ],
    [ 'B', '1', '1', '1', 'B' ],
    [ 'B', 'B', 'B', 'B', 'B' ]
  ]
  因为 '1' 不会在扩散，所以 M 上方的 'E' 才得以保留。
*/
/**
 * DFS
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const xoffset = [0, 1, 1, 1, 0, -1, -1, -1]
  const yoffset = [1, 1, 0, -1, -1, -1, 0, 1]

  const [x, y] = click
  if (board[x][y] ==='M') {
    board[x][y] = 'X'
  } else {
    dfs(x, y)
  }
  return board

  function dfs(i, j) {
    let countM = 0
    for (let k = 0; k < 8; k++) {
      const x = i + xoffset[k]
      const y = j + yoffset[k]
      if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
        continue
      }
      if (board[x][y] === 'M') {
        countM++
      }
    }
    if (countM > 0) {
      board[i][j] = countM + ''
    } else {
      board[i][j] = 'B'
      for (let k = 0; k < 8; k++) {
        const x = i + xoffset[k]
        const y = j + yoffset[k]
        if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || board[x][y] !== 'E') {
          continue
        }
        dfs(x, y)
      }
    }
  }
};

/**
 * BFS
 * 为什么DFS不需要 visited？
 * 因为for 循环中的第1次 DFS会一次性走到底，才会走for循环中 i = 1 时的 第2个DFS，那些已经从 E 变成 B 的点自然就被过滤掉了。
 * 而BFS中，是一层层走，如果不记录 visited，假入第1层扩散出的第2层有3个，
 * 在第2层时，先 shift 第1个点，该点相邻的点中包括了第2层中其他的点！这样数据量大的话，就会非常吃力。
 * @param {*} board 
 * @param {*} click
 */
var updateBoard = function(board, click) {
  const xoffset = [0, 1, 1, 1, 0, -1, -1, -1]
  const yoffset = [1, 1, 0, -1, -1, -1, 0, 1]
  let visited = []
  for (let i = 0; i < board.length; i++) {
    visited[i] = new Array(board[0].length).fill(false)
  }

  const [x, y] = click
  if (board[x][y] ==='M') {
    board[x][y] = 'X'
  } else {
    bfs()
  }
  return board  

  function bfs() {
    let queue = [click]
    while (queue.length > 0) {
      const [x1, y1] = queue.shift()
      let countM = 0
      for (let i = 0; i < 8; i++) {
        const x = x1 + xoffset[i]
        const y = y1 + yoffset[i]
        if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
          continue
        }
        if (board[x][y] === 'M') {
          countM++
        }
      }
      if (countM > 0) {
        board[x1][y1] = countM + ''
      } else {
        board[x1][y1] = 'B'
        for (let i = 0; i < 8; i++) {
          const x = x1 + xoffset[i]
          const y = y1 + yoffset[i]
          if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || board[x][y] !== 'E' || visited[x][y]) {
            continue
          }
          visited[x][y] = true
          queue.push([x, y])
        }
      }
    }
  }
};

const board = [
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']
]
const click = [3, 0]
console.log(updateBoard(board, click))