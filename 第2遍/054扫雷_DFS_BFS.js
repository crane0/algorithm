/* 
  https://leetcode-cn.com/problems/minesweeper/
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
  const rowLength = board.length, columnLength = board[0].length

  const [x, y] = click
  if (board[x][y] === 'M') {
    board[x][y] = 'X'
  } else {
    dfs(x, y)
  }
  return board

  function dfs(x, y) {
    let countM = 0
    for (let i = 0; i < 8; i++) {
      const x1 = x + xoffset[i]
      const y1 = y + yoffset[i]
      if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength) {
        continue
      }
      if (board[x1][y1] === 'M') {
        countM++
      }
    }

    if (countM > 0) {
      board[x][y] = '' + countM
    } else {
      board[x][y] = 'B'
      for (let i = 0; i < 8; i++) {
        const x1 = x + xoffset[i]
        const y1 = y + yoffset[i]
        if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength || !board[x1][y1] === 'E') {
          continue
        }
        if (board[x1][y1] === 'E') {
          dfs(x1, y1)
        }
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
  const rowLength = board.length, columnLength = board[0].length
  const [x, y] = click

  if (board[x][y] === 'M') {
    board[x][y] = 'X'
  } else {
    bfs(x, y)
  }
  return board

  function bfs(x, y) {
    let visited = []
    for (let i = 0; i < rowLength; i++) {
      visited[i] = new Array(columnLength).fill(false)
    }
    visited[x][y] = true

    let queue = [[x, y]]
    while (queue.length) {
      let countM = 0
      const [x, y] = queue.shift()
      for (let i = 0; i < 8; i++) {
        const x1 = x + xoffset[i]
        const y1 = y + yoffset[i]
        if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength) {
          continue
        }
        if (board[x1][y1] === 'M') {
          countM++
        }
      }
  
      if (countM > 0) {
        board[x][y] = '' + countM
      } else {
        board[x][y] = 'B'
        for (let i = 0; i < 8; i++) {
          const x1 = x + xoffset[i]
          const y1 = y + yoffset[i]
          if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength || board[x1][y1] !== 'E' || visited[x1][y1]) {
            continue
          }
          if (board[x1][y1] === 'E') {
            queue.push([x1, y1])
            visited[x1][y1] = true
          }
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