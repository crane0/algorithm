/* 
  https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
*/
/**
 * bfs
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
  const n = grid.length
  if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1

  const directX = [0, 1, 1, 1, 0, -1, -1, -1]
  const directY = [1, 1, 0, -1, -1, -1, 0, 1]
  let queue = [[0,0]], count = 1

  while (queue.length > 0) {
    let length = queue.length
    console.log(queue)
    while (length-- > 0) {
      const [i, j] = queue.shift()
      if (i === n - 1 && j === n - 1) return count
      for (let k = 0; k < 8; k++) {
        const ii = i + directX[k]
        const jj = j + directY[k]
        if (ii < 0 || jj < 0 || ii >= n || jj >= n || grid[ii][jj] === 1) {
          continue
        }
        grid[ii][jj] = 1
        queue.push([ii, jj])
      }
    }
    count++
  }
  return -1
};

// dfs 超时
// var shortestPathBinaryMatrix = function(grid) {
//   const n = grid.length
//   if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1

//   const directX = [0, 1, 1, 1, 0, -1, -1, -1]
//   const directY = [1, 1, 0, -1, -1, -1, 0, 1]
//   let count = Infinity
//   dfs(1, 0, 0)
//   return count === Infinity ? -1 : count

//   function dfs(level, i, j) {
//     if (i === n - 1 && j === n - 1) {
//       count = Math.min(count, level)
//       return
//     }
//     for (let k = 0; k < 8; k++) {
//       const ii = i + directX[k]
//       const jj = j + directY[k]
//       if (ii < 0 || jj < 0 || ii >= n || jj >= n || grid[ii][jj] === 1) {
//         continue
//       }
//       grid[ii][jj] = 1
//       dfs(level + 1, ii, jj)
//       grid[ii][jj] = 0
//     }
//   }
// };

// console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))
let test = [[0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0],[0,0,1,0,1,0,1,1],[0,0,0,0,0,0,0,0],[0,0,0,1,1,1,0,0],[1,0,1,1,1,0,0,0]]
console.log(shortestPathBinaryMatrix(test))