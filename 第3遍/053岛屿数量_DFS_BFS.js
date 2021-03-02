/* 
  https://leetcode-cn.com/problems/number-of-islands/
  整体思路：无论是 dfs 还是 bfs，都是遇到 1，计数加一，并遍历周围4个方向，如果是1，重置为其他，
*/
/**
 * dfs
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const xoffset = [0, 1, 0, -1]
  const yoffset = [1, 0, -1, 0]

  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(i, j)
      }
    }
  }
  return count

  function dfs(i, j) {
    for (let k = 0; k < 4; k++) {
      let x = i + xoffset[k]
      let y = j + yoffset[k]
      if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length) {
        if (grid[x][y] === '1') {
          grid[x][y] = '0' // 赋值什么都可以，只要不是 '1'
          dfs(x, y)
        }
      }
    }
  }
}


/**
 * BFS
 * for遍历每个节点，当等于1时，bfs找四周4个节点，如果是1，就变成0（for循环中，不会从 0 进入 BFS），
 * 这样，进行BFS的次数，就是岛屿的数量。
 * @param {*} grid 
 */
var numIslands = function(grid) {
  const xoffset = [0, 1, 0, -1]
  const yoffset = [1, 0, -1, 0]
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        bfs(i, j)
        console.log(grid)
      }
    }
  }
  return count

  function bfs(i, j) {
    let queue = [[i,j]]
    while (queue.length > 0) {
      const [x1, y1] = queue.shift()
      for (let k = 0; k < 4; k++) {
        const x = x1 + xoffset[k]
        const y = y1 + yoffset[k]
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
          continue
        }
        if (grid[x][y] === '1') {
          grid[x][y] = '0'
          queue.push([x, y])
        }
      }
    }
  }
}

// const param = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]

const param = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
console.log(numIslands(param))