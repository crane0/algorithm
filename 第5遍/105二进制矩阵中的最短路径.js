/* 
  https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
*/
/**
 * bfs
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
  
};

// dfs 超时

// console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))
let test = [[0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0],[0,0,1,0,1,0,1,1],[0,0,0,0,0,0,0,0],[0,0,0,1,1,1,0,0],[1,0,1,1,1,0,0,0]]
console.log(shortestPathBinaryMatrix(test))