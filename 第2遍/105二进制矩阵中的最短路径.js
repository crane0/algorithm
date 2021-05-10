/* 
  https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
*/
/**
 * bfs
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  const m = grid.length

  if (grid[0][0] === 1 || grid[m-1][m-1] === 1) return -1

  const directX = [0, 1, 1, 1, 0, -1, -1, -1]
  const directY = [1, 1, 0, -1, -1, -1, 0, 1]

  let queue = [[0, 0]], count = 1
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const [i, j] = queue.shift()
      // 在这里判断，而不是 for 里面，是因为可能第一次就满足了
      if (i === m - 1 && j === m - 1) return count
      for (let k = 0; k < 8; k++) {
        const x = i + directX[k]
        const y = j + directY[k]
        if (x < 0 || y < 0 || x >= m || y >= m || grid[x][y] === 1)  {
          continue
        }
        // if (x === m - 1 && y === m - 1) {
        //   return count + 1
        // }
        grid[x][y] = 1 // 直接赋值1，就不用在使用 set `$[x]{y}` 判断 visited 了。
        queue.push([x, y])
      }
    }
    count++
  }
  return -1
};

// dfs 超时

// console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))
let test = [[0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0],[0,0,1,0,1,0,1,1],[0,0,0,0,0,0,0,0],[0,0,0,1,1,1,0,0],[1,0,1,1,1,0,0,0]]
console.log(shortestPathBinaryMatrix(test))