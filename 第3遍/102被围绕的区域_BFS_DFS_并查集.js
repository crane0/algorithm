/* 
  https://leetcode-cn.com/problems/surrounded-regions/
*/
/**
 * 并查集
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

    // x 的根节点
    find(x) {
      while (this.parent[x] !== x) {
        this.parent[x] = this.parent[this.parent[x]]
        x = this.parent[x]
      }
      return x
    }

    // 联通
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

    // 是否联通（共同根节点）
    connected(p, q) {
      return this.find(p) === this.find(q)
    }
  }

  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]
  const m = board.length, n = board[0].length
  function getIndex(i, j) {
    return i * n + j
  }
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
}

/**
 * DFS
 * 4条边是 O 的以及 和边上的 O 相连的 O 最终还是 O，
 * 其他的 O 都变为 X
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const m = board.length, n = board[0].length
  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]

  for (let i = 0; i < n; i++) {
    dfs(0, i)
    dfs(m - 1, i)
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0)
    dfs(i, n - 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== 'O') {
      return
    }
    board[i][j] = '.'
    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      dfs(x, y)
    }
  }
}


/**
 * BFS
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const m = board.length, n = board[0].length
  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]

  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') {
      board[0][i] = '.'
      bfs(0, i)
    }
    if (board[m-1][i] === 'O') {
      board[m-1][i] = '.'
      bfs(m-1, i)
    }
  }

  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      board[i][0] = '.'
      bfs(i, 0)
    }
    if (board[i][n - 1] === 'O') {
      board[i][n - 1] = '.'
      bfs(i, n - 1)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }

  function bfs(ii, jj) {
    let queue = [[ii, jj]]
    while (queue.length > 0) {
      let length = queue.length
      while (length-- > 0) {
        const [i, j] = queue.shift()
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
  ['X', 'X', 'X','X'],
  ['X', 'O', 'O','X'],
  ['X', 'X', 'O','X'],
  ['X', 'O', 'X','X'],
]
console.log(solve(params))