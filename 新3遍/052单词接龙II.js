/* 
  https://leetcode-cn.com/problems/word-ladder-ii/
*/
/**
 * bfs 找到所有的可能存入 map {begin: new Set(begin 可变化的)}
 * dfs 根据 begin 对应的 Set，组合成最终结果
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return []

  const dict = []
  for (let i = 97; i < 123; i++) {
    dict.push(String.fromCharCode(i))
  }

  let isFound = false
  let findMap = new Map()
  
  bfs()
  
  if (!isFound) {
    return []
  }

  let ret = []
  dfs(beginWord, [beginWord])
  return ret

  function bfs() {
    let queue = [beginWord]
    let visited = new Set([beginWord])
    let nextVisited = new Set()

    while (queue.length > 0) {
      let length = queue.length
      while (length-- > 0) {
        const node = queue.shift()
        for (let i = 0; i < node.length; i++) {
          for (const letter of dict) {
            const nextWord = node.slice(0, i) + letter + node.slice(i + 1)
            if (wordSet.has(nextWord)) {
              if (nextWord === endWord) isFound = true;

              if (!visited.has(nextWord)) {
                if (!nextVisited.has(nextWord)) {
                  queue.push(nextWord)
                  nextVisited.add(nextWord)
                }
                findMap.has(node) ? findMap.get(node).add(nextWord) : findMap.set(node, new Set([nextWord]))
              }
            }
          }
        }
      }
      if (isFound) {
        break;
      }
      visited = union(visited, nextVisited)
      nextVisited = new Set()
    }

    function union(setA, setB) {
      let set = setA
      for (const item of setB) {
        set.add(item)
      }
      return set
    }
  }

  function dfs(node, list) {
    if (node === endWord) {
      ret.push([...list])
      return 
    }
    const set = findMap.get(node)
    if (!set) return

    for (const word of set) {
      list.push(word)
      dfs(word, list)
      list.pop(word)
    }
  }
}

console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
// console.log(findLadders('hot', 'dog', ["hot","dog","dot"]))