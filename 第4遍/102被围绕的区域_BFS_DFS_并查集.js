/* 
  https://leetcode-cn.com/problems/surrounded-regions/
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  class unionFind {
    constructor(n) {
      this.count = n
      this.parent = []
      this.size = []
      for (let i = 0; i < n; i++) {
        this.parent[i] = i
        this.size[i] = i
      }
    }

    find(x) {
      while (this.parent[x] !== x) {
        this.parent[x] = this.parent[this.parent[x]]
        x = this.parent[x]
      }
      return x
    }

    union(p, q) {
      let rootP = this.find(p)
      let rootQ = this.find(q)
      if (rootP === rootQ) return
      if (this.size[rootP] > this.size[rootQ]) {
        this.parent[rootQ] = rootP
        this.size[rootP] += this.size[rootQ]
      } else {
        this.parent[rootP] = rootQ
        this.size[rootQ] += this.size[rootP]
      }
      this.count--
    }

    connected(p, q) {
      return this.find(p) === this.find(q)
    }
  }

  function getIndex(i, j) {
    return i * n + j
  }

  const m = board.length, n = board[0].length
  const directX = [0, 1, 0, -1], directY = [1, 0, -1, 0]
  const faker = m * n + 1
  let uf = new unionFind(faker)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
          uf.union(getIndex(i, j), faker)
        } else {
          for (let k = 0; k < 4; k++) {
            const x = i + directX[k]
            const y = j + directY[k]
            if (board[x][y] === 'O') {
              uf.union(getIndex(i, j), getIndex(x, y))
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (uf.connected(getIndex(i, j), faker)) {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }

  console.log(board)
}


// DFS
var solve = function(board) {
  const m = board.length, n = board[0].length
  const directX = [0, 1, 0, -1], directY = [1, 0, -1, 0]

  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') {
      dfs(0, i)
    }
  }

  for (let i = 0; i < n; i++) {
    if (board[m-1][i] === 'O') {
      dfs(m-1, i)
    }
  }

  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      dfs(i, 0)
    }
  }

  for (let i = 0; i < m; i++) {
    if (board[i][n-1] === 'O') {
      dfs(i, n-1)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.') {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }

  function dfs(i, j) {
    board[i][j] = '.'
    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== 'O') {
        continue
      }
      board[x][y] = '.'
      dfs(x, y)
    }
  }
}


// BFS
var solve = function(board) {
  const m = board.length, n = board[0].length
  const directX = [0, 1, 0, -1], directY = [1, 0, -1, 0]

  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') {
      bfs([[0, i]])
    }
  }

  for (let i = 0; i < n; i++) {
    if (board[m-1][i] === 'O') {
      bfs([[m-1, i]])
    }
  }

  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      bfs([[i, 0]])
    }
  }

  for (let i = 0; i < m; i++) {
    if (board[i][n-1] === 'O') {
      bfs([[i, n-1]])
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.') {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }

  function bfs(queue) {
    while (queue.length > 0) {
      let length = queue.length
      while (length-- > 0) {
        const [i, j] = queue.shift()
        board[i][j] = '.'
        for (let k = 0; k < 4; k++) {
          const x = i + directX[k]
          const y = j + directY[k]
          if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== 'O') {
            continue
          }
          board[x][y] = '.'
          queue.push([x, y])
        }
      }
    }
  }
}

let params = [
  ['X', 'X', 'O','X'],
  ['X', 'O', 'O','X'],
  ['X', 'X', 'O','X'],
  ['X', 'O', 'X','X'],
]
console.log(solve(params))