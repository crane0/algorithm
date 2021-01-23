/* 
  https://leetcode-cn.com/problems/number-of-islands/
*/
/**
 * dfs
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) return 0

  let number = 0
  getNumber(grid)
  return number

  function getNumber(grid) {
    const row = grid.length
    const column = grid[0].length

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (grid[i][j] === '1') {
          number++
          dfs(grid, i, j)
        }
      }
    }
  }

  function dfs(grid, row, column) {
    const rowLength = grid.length
    const columnLength = grid[0].length
    if (row < 0 || row >= rowLength || column < 0 || column >= columnLength || grid[row][column] === '0') {
      return
    }

    grid[row][column] = '0'
    dfs(grid, row, column - 1)
    dfs(grid, row, column + 1)
    dfs(grid, row - 1, column)
    dfs(grid, row + 1, column)
  }
}


/**
 * BFS
 * for遍历每个节点，当等于1时，bfs找四周4个节点，如果是1，就变成0（for循环中，不会从 0 进入 BFS），
 * 这样，进行BFS的次数，就是岛屿的数量。
 * @param {*} grid 
 */
var numIslands = function(grid) {
  if (grid.length === 0) return 0

  let number = 0
  getNumber(grid)
  return number

  function getNumber(grid) {
    const row = grid.length
    const column = grid[0].length

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (grid[i][j] === '1') {
          number++
          bfs(grid, i, j)
        }
      }
    }
  }

  function bfs(grid, row, column) {
    const rowLength = grid.length
    const columnLength = grid[0].length
    
    let queue = [[row, column]]
    while (queue.length) {
      const [row, column] = queue.shift()
      if (row > 0 && grid[row-1][column] === '1') {
        grid[row-1][column] = '0'
        queue.push([row-1, column])
      }
      if (row < rowLength - 1 && grid[row+1][column] === '1') {
        grid[row+1][column] = '0'
        queue.push([row+1, column])
      }
      if (column > 0 && grid[row][column-1] === '1') {
        grid[row][column-1] = '0'
        queue.push([row, column-1])
      }
      if (column < columnLength - 1 && grid[row][column+1] === '1') {
        grid[row][column+1] = '0'
        queue.push([row, column+1])
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