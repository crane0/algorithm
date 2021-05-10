/* 
  https://leetcode-cn.com/problems/number-of-islands/
*/
/**
 * dfs
 * grid[i][j] === '1' 时，count++, dfs四周的点，并都置为0
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length
  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]

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
      if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === '1') {
        grid[x][y] = '0'
        dfs(x, y)
      }
    }
  }
}


/**
 * BFS
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length
  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]

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
          if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === '1') {
            grid[x][y] = '0'
            queue.push([x, y])
          }
        }
      }
    }
  }
}

/**
 * 并查集
 * 一开始有 m * n 个连通分量（1和0都是）
 * 将满足条件的 1 合并在一起，每次合并，连通分量都会减少 1
 * 最终剩下的连通分量（1的连通分量 + 一大推在一起的1的连通分量 + 0的连通分量） - 0的连通分量 = 岛屿个数（1的连通分量 + 一大推在一起的1的连通分量）
 * 
 * 也可以多申请一个连通分量的空间，将所有的 0 都和这个空间连通
 * 最后的岛屿数量 = uf.count - 1  1就是这个所有的 0 的空间。
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  class unionFind {
    constructor(n) {
      this.count = n
      this.parent = new Array(n)
      this.size = new Array(n)
      for (let i = 0; i < n; i++) {
        this.parent[i] = i
        this.size[i] = i
      }
    }

    // 返回 x 的根节点
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

  function getIndex(i, j) {
    return i * n + j
  }
  const m = grid.length, n = grid[0].length
  const directX = [0, 1, 0, -1]
  const directY = [1, 0, -1, 0]

  const uf = new unionFind(m * n)
  let spaces = 0 // 0的个数
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        for (let k = 0; k < 4; k++) {
          const x = i + directX[k]
          const y = j + directY[k]
          if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === '1') {
            uf.union(getIndex(i, j), getIndex(x, y))
          }
        }
      } else {
        spaces++
      }
      
    }
  }
  return uf.count - spaces
}

// const param = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
const param = [
  ["1","0","1","1","1"],
  ["1","0","1","0","1"],
  ["1","1","1","0","1"]
]
console.log(numIslands(param))