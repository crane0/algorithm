/* 
  https://leetcode-cn.com/problems/minesweeper/
*/
/**
 * DFS
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  
};

/**
 * BFS
 * 为什么DFS不需要 visited？
 * 因为for 循环中的第1次 DFS会一次性走到底，才会走for循环中 i = 1 时的 第2个DFS，那些已经从 E 变成 B 的点自然就被过滤掉了。
 * 而BFS中，是一层层走，如果不记录 visited，假入第1层扩散出的第2层有3个，
 * 在第2层时，先 shift 第1个点，该点相邻的点中包括了第2层中其他的点！这样数据量大的话，就会非常吃力。
 * @param {*} board 
 * @param {*} click
 */
var updateBoard = function(board, click) {
  
};

const board = [
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']
]
const click = [3, 0]
console.log(updateBoard(board, click))