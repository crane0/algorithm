/* 
  https://leetcode-cn.com/problems/sliding-puzzle/
*/
/**
 * 核心还是BFS，交换2个字符时，稍微需要处理下。start 也可以是字符串，只不过数组的交换字符写法更简单一点，我就用数组了。
 * map 是每个index 可以调换的其他位置的 index 集合。如果board 不是 2*3，而是 n*m，其实也很简单，
 * 遍历 board，i === 0 || j === 0 时特殊处理下，其他的都把 4个方向的 index 放入 map 对应的集合中即可。
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  
};

// console.log(slidingPuzzle([[4,1,2],[5,0,3]]))
console.log(slidingPuzzle([[1,2,3],[5,4,0]]))