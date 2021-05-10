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
  const map = new Map()
  map.set(0, [1, 3])
  map.set(1, [0, 2, 4])
  map.set(2, [1, 5])
  map.set(3, [0, 4])
  map.set(4, [3, 5, 1])
  map.set(5, [2, 4])
  
  const start = [], end = '123450'
  /* 
    不能再这里定义 0 的index，之后在 for 循环中
    [_node[index], _node[index0]] = [_node[index0], _node[index]];
    index0 = index
    因为 for 循环第一次改变 index0 之后，queue 中剩下的元素和 0 交换时，0 的位置已经不对了！
  */
  // let index0 = 0
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      start.push(board[i][j])
    }
  }

  if (start.join('') === end) return 0

  let queue = [start], count = 0, visited = new Set()
  visited.add(start.join(''))
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const node = queue.shift()
      if (node.join('') === end) return count
      const zeroIndex = node.indexOf(0)

      for (const index of map.get(zeroIndex)) {
        let _node = node.slice(0);
        [_node[index], _node[zeroIndex]] = [_node[zeroIndex], _node[index]];
        const nodeStr = _node.join('')
        if (!visited.has(nodeStr)) {
          visited.add(nodeStr)
          queue.push(_node)
        }
      }
    }
    count++
  }
  return -1
};

console.log(slidingPuzzle([[4,1,2],[5,0,3]]))
console.log(slidingPuzzle([[1,2,3],[5,4,0]]))