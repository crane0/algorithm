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
  const xOffset = [0, 1, 0, -1, 1, 1, -1, -1]
  const yOffset = [1, 0, -1, 0, 1, -1, -1, 1]
  const rowLength = board.length, columnLength = board[0].length
  
  const [x, y] = click
  if (board[x][y] === 'M') {
    // 规则1，游戏直接结束
    board[x][y] = 'X'
  } else {
    dfs(board, x, y)
  }
  return board

  function dfs(board, x, y) {
    let countM = 0
    // 第1次遍历该点的8个方向，是为了找出8个方向中是否有 M
    for (let i = 0; i < 8; i++) {
      const x1 = x + xOffset[i]
      const y1 = y + yOffset[i]
      if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength) {
        continue
      }
      if (board[x1][y1] === 'M') {
        countM++
      }
    }

    // 规则3，8个方向中有M的话，将该点修改为地雷的数量
    if (countM > 0) {
      board[x][y] = countM + ''
    } else {
      // 规则2，没有M的话，那就继续以该点的8个方向 dfs，注意如果新的点不是 E（可以翻的空白块），就不会 dfs
      board[x][y] = 'B'
      for (let i = 0; i < 8; i++) {
        const x1 = x + xOffset[i]
        const y1 = y + yOffset[i]
        if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength || board[x1][y1] !== 'E') {
          continue
        }
        dfs(board, x1, y1)
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
  const xOffset = [0, 1, 0, -1, 1, 1, -1, -1]
  const yOffset = [1, 0, -1, 0, 1, -1, -1, 1]
  const rowLength = board.length, columnLength = board[0].length

  const [x, y] = click
  if (board[x][y] === 'M') {
    // 规则1，游戏直接结束
    board[x][y] = 'X'
  } else {
    bfs(board, x, y)
  }
  return board

  function bfs(board, x, y) {
    let queue = [[x, y]]
    let visited = []
    for (let i = 0; i < rowLength; i++) {
      visited[i] = new Array(columnLength).fill(false)
    }
    visited[x][y] = true
    
    while (queue.length) {
      let countM = 0
      const [x, y] = queue.shift()
      // 第1次遍历该点的8个方向，是为了找出8个方向中是否有 M
      for (let i = 0; i < 8; i++) {
        const x1 = x + xOffset[i]
        const y1 = y + yOffset[i]
        if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength) {
          continue
        }
        if (board[x1][y1] === 'M') {
          countM++
        }
      }

      // 规则3，8个方向中有M的话，将该点修改为地雷的数量
      if (countM > 0) {
        board[x][y] = countM + ''
      } else {
        // 规则2，没有M的话，那就继续以该点的8个方向 push，注意如果新的点不是 E（可以翻的空白块），就不会 push
        board[x][y] = 'B'
        for (let i = 0; i < 8; i++) {
          const x1 = x + xOffset[i]
          const y1 = y + yOffset[i]
          if (x1 < 0 || x1 >= rowLength || y1 < 0 || y1 >= columnLength || board[x1][y1] !== 'E' || visited[x1][y1]) {
            continue
          }
          queue.push([x1, y1])
          visited[x1][y1] = true
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