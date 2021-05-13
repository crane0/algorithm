/* 
  https://leetcode-cn.com/problems/number-of-islands/
*/
/**
 * dfs
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length
  const directX = [0, 1, 0, -1], directY = [1, 0, -1, 0]

  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(i, j)
      }
    }
  }
  return count

  function dfs(i, j) {
    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === '0') {
        continue
      }
      grid[x][y] = '0'
      dfs(x, y)
    }
  }
}


/**
 * BFS
 * for遍历每个节点，当等于1时，bfs找四周4个节点，如果是1，就变成0（for循环中，不会从 0 进入 BFS），
 * 这样，进行BFS的次数，就是岛屿的数量。
 * @param {character[][]} grid 
 */
var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length
  const directX = [0, 1, 0, -1], directY = [1, 0, -1, 0]
  let count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++
        bfs([[i, j]])
      }
    }
  }
  return count

  function bfs(queue) {
    while (queue.length > 0) {
      let length = queue.length
      while (length-- > 0) {
        const [i, j] = queue.shift()
        for (let k = 0; k < 4; k++) {
          const x = i + directX[k]
          const y = j + directY[k]
          if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === '0') {
            continue
          }
          grid[x][y] = '0'
          queue.push([x, y])
        }
      }
    }
  }
}

/**
 * 并查集
 * @param {character[][]} grid 
 */
var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length
  const directX = [0, 1, 0, -1], directY = [1, 0, -1, 0]

  class unionFind {
    constructor(n) {
      this.count = n
      this.size = []
      this.parent = []
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

    // 连通 p 和 q
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

    // 是否连通
    connected(p, q) {
      return this.find(p) === this.find(q)
    }
  }

  function getIndex(i, j) {
    return i * n + j
  }

  const faker = m * n + 1
  let uf = new unionFind(faker)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        for (let k = 0; k < 4; k++) {
          const x = i + directX[k]
          const y = j + directY[k]
          if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === '0') {
            continue
          }
          uf.union(getIndex(i, j), getIndex(x, y))
        }
      } else {
        uf.union(getIndex(i, j), faker)
      }
    }
  }
  return uf.count - 1
}

const param = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(param))