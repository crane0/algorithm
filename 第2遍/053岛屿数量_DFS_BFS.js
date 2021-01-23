/* 
  https://leetcode-cn.com/problems/number-of-islands/
*/
/**
 * dfs
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  
}


/**
 * BFS
 * for遍历每个节点，当等于1时，bfs找四周4个节点，如果是1，就变成0（for循环中，不会从 0 进入 BFS），
 * 这样，进行BFS的次数，就是岛屿的数量。
 * @param {*} grid 
 */
var numIslands = function(grid) {
  
}

const param = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(param))