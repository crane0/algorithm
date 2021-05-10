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
  const m = 2, n = 3
  const start = []
  const end = '123450'

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      start.push(board[i][j])
    }
  }
  if (start.join('') === end) return 0
 
  // 每个index，可以调换的其他index
  const map = new Map()
  map.set(0, [1, 3])
  map.set(1, [0, 2, 4])
  map.set(2, [1, 5])
  map.set(3, [0, 4])
  map.set(4, [3, 5, 1])
  map.set(5, [2, 4])

  let queue = [start], count = 0
  let visited = new Set()
  visited.add(start.join(''))
  while (queue.length > 0) {
    let length = queue.length
    while (length-- > 0) {
      const node = queue.shift()
      const zeroIndex = node.indexOf(0)
      for (const nextIndex of map.get(zeroIndex)) {
        let tempNode = node.slice(0); // 不改变 node
        [tempNode[zeroIndex], tempNode[nextIndex]] = [tempNode[nextIndex], tempNode[zeroIndex]];
        const arrStr = tempNode.join('')
        if (arrStr === end) return count + 1
        if (!visited.has(arrStr)) {
          queue.push(tempNode)
          visited.add(arrStr)
        }
      }
    }
    count++
  }
  return -1
};

// console.log(slidingPuzzle([[4,1,2],[5,0,3]]))
console.log(slidingPuzzle([[1,2,3],[5,4,0]]))