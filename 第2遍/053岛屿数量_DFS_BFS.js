/* 
  https://leetcode-cn.com/problems/number-of-islands/
*/
/**
 * dfs
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const xoffset = [0, 0, -1, 1]
  const yoffset = [1, -1, 0, 0]
  const rowLength = grid.length, columnLength = grid[0].length
  let count = 0
  getNumber()
  return count

  function getNumber() {
    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < columnLength; j++) {
        if (grid[i][j] === '1') {
          count++
          dfs(i, j)
        }
      }
    }
  }
  function dfs(x, y) {
    for (let i = 0; i < 4; i++) {
      const x1 = x + xoffset[i]
      const y1 = y + yoffset[i]
      if (x1 < 0 || y1 < 0 || x1 >= rowLength || y1 >= columnLength) {
        continue
      }
      if (grid[x1][y1] === '1') {
        grid[x1][y1] = '0'
        dfs(x1, y1)
      }
    }
  }
}


/**
 * BFS，和DFS一样，递归找到周围所有 1 的，并变为 0
 * @param {*} grid 
 */
var numIslands = function(grid) {
  const xoffset = [0, 0, -1, 1], yoffset = [1, -1, 0, 0]
  const rowLength = grid.length, columnLength = grid[0].length
  let count = 0
  getNumber()
  return count

  function getNumber() {
    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < columnLength; j++) {
        if (grid[i][j] === '1') {
          count++
          bfs(i, j)
        }
      }
    }
  }

  function bfs(x, y) {
    let queue = [[x, y]]
    while (queue.length) {
      const [x, y] = queue.shift()
      for (let i = 0; i < 4; i++) {
        const x1 = x + xoffset[i]
        const y1 = y + yoffset[i]
        if (x1 < 0 || y1 < 0 || x1 >= rowLength || y1 >= columnLength) {
          continue
        }
        if (grid[x1][y1] === '1') {
          grid[x1][y1] = '0'
          queue.push([x1, y1])
        }
      }
    }
  }
}

const param = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(param))