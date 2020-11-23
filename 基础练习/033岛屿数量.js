/* 
  https://leetcode-cn.com/problems/number-of-islands/
  思路：
  双层循环遍历二维数组，遇到 1 则计数 + 1，并且遍历它上下左右4个位置的元素，
  如果是1，重置为 0，因为岛屿的判断条件就是以四周为依据的。所以，可能连成一个大岛屿的情况就算到里面了，
  之后，在for循环中再次遇到 1 时，就是新的岛屿。

*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === '1') {
        count++
        DFS(grid, row, column)
      }
    }
  }

  function DFS(grid, row, column) {
    // grid[row][column] === '0' 放在最后，为了保证 grid[row][column] 可能取不到的情况。
    if (row < 0 || column < 0 || row >= grid.length || column >= grid[row].length || grid[row][column] === '0') {
      return
    }
    grid[row][column] = '0'
    DFS(grid, row - 1, column)
    DFS(grid, row + 1, column)
    DFS(grid, row, column - 1)
    DFS(grid, row, column + 1)
  }
  return count
};

let input = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]

console.log(numIslands(input))
