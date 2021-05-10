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

  let dict = []
  for (let i = 97; i < 123; i++) {
    dict.push(String.fromCharCode(i))
  }

  let retMap = new Map()
  let isFound = false
  bfs()
  if (!isFound) {
    return []
  }
  let ret = []
  dfs(beginWord, [beginWord])
  return ret

  function bfs() {
    let visited = new Set([beginWord])
    let queue = [beginWord]
    let nextVisited = new Set()

    while (queue.length > 0) {
      let length = queue.length
      while (length-- > 0) {
        const node = queue.shift()
        for (let i = 0; i < node.length; i++) {
          for (const letter of dict) {
            const newWord = node.slice(0, i) + letter + node.slice(i + 1)
            if (wordSet.has(newWord)) {
              if (!visited.has(newWord)) {
                if (newWord === endWord) {
                  isFound = true
                }
                if (!nextVisited.has(newWord)) {
                  queue.push(newWord)
                  nextVisited.add(newWord)
                }
                retMap.has(node) ? retMap.get(node).add(newWord) : retMap.set(node, new Set([newWord]))
              }
            }
          }
        }
      }
      if (isFound) {
        break
      }
      visited = union(visited, nextVisited)
      nextVisited = new Set()
    }

    function union(setA, setB) {
      let set = setA
      for (const s of setB) {
        set.add(s)
      }
      return set
    }
  }

  function dfs(begin, list) {
    if (begin === endWord) {
      ret.push([...list])
      return
    }
    // a c ['a', 'b', 'c'] 一次就找到了，word === b 时，set 就是 undefined
    const set = retMap.get(begin)
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
