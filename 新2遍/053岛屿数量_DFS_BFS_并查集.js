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
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") {
      return
    }
    grid[i][j] = '0'
    for (let k = 0; k < 4; k++) {
      const x = i + directX[k]
      const y = j + directY[k]
      dfs(x, y)
    }
  }
}


/**
 * BFS
 * for遍历每个节点，当等于1时，bfs找四周4个节点，如果是1，就变成0（for循环中，不会从 0 进入 BFS），
 * 这样，进行BFS的次数，就是岛屿的数量。
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
        /* 
          不能再这里置为 0，因为性能不好
          假如 1 周围都是 1
          for 循环中，每次置为 0 时，可以立刻避免下次循环重复的问题，
          而如果在这里重置为0，在 for 循环没结束之前，每次都会 push 进重复的位置（因为 1 每次被重置为 0）。
        */
        // grid[i][j] = "0"
        for (let k = 0; k < 4; k++) {
          const x = i + directX[k]
          const y = j + directY[k]
          if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === "0") {
            continue
          }
          grid[x][y] = "0"
          queue.push([x, y])
        }
      }
    }
  }
}


/**
 * 并查集
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
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

    // 查找 x 的根节点
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

    // p 和 q 是否连通
    connected(p, q) {
      return this.find(p) === this.find(q)
    }
  }

  const m = grid.length, n = grid[0].length
  const directX = [0, 1, 0, -1], directY = [1, 0, -1, 0]
  let countZero = 0
  const uf = new unionFind(m * n)

  function getIndex(i, j) {
    return i * n + j
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') {
        countZero++
      } else {
        for (let k = 0; k < 4; k++) {
          const x = i + directX[k]
          const y = j + directY[k]
          if (x < 0 || y < 0 || x >=m || y >= n || grid[x][y] === '0') {
            continue
          }
          uf.union(getIndex(i, j), getIndex(x, y))
        }
      }
    }
  }
  return uf.count - countZero
}

const param = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(param))