/* 
  https://leetcode-cn.com/problems/word-ladder-ii/
*/
/**
 * bfs 找到所有的可能存入 map {begin: new Set(后续所有)}
 * dfs 根据 begin 对应的 Set，组合成最终结果
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return []

  const letterDict = []
  for (let i = 97; i < 123; i++) {
    letterDict.push(String.fromCharCode(i))
  }

  let isFound = false
  let retMap = new Map()

  bfs()
  if (!isFound) {
    return []
  }

  let retList = []
  dfs(beginWord, [beginWord])
  return retList


  function bfs() {
    let visited = new Set([beginWord])
    let nextVisited = new Set()

    let queue = [beginWord]
    while (queue.length > 0) {
      let length = queue.length
      while (length-- > 0) {
        const word = queue.shift()
        for (let i = 0; i < word.length; i++) {
          for (const letter of letterDict) {
            const newWord = word.slice(0, i) + letter + word.slice(i+1)
            if (wordSet.has(newWord)) {
              if (!visited.has(newWord)) {
                if (newWord === endWord) {
                  isFound = true
                }
                // 避免下层元素重复加入，因为可能当前层的多个元素的下层元素都是同一个
                if (!nextVisited.has(newWord)) {
                  queue.push(newWord)
                  nextVisited.add(newWord)
                }
                retMap.has(word) ? retMap.get(word).add(newWord) : retMap.set(word, new Set([newWord]))
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
      let _union = setA
      for (const s of setB) {
        _union.add(s)
      }
      return _union
    }
  }

  function dfs(word, list) {
    if (word === endWord) {
      retList.push([...list])
      return
    }
    const set = retMap.get(word)
    // a c ['a', 'b', 'c'] 一次就找到了，word === b 时，set 就是 undefined
    if (!set) {
      return
    }
    for (const w of set) {
      list.push(w)
      dfs(w, list)
      list.pop(w)
    }
  }
}

// console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
// console.log(findLadders('hot', 'dog', ["hot","dog","dot"]))
// console.log(findLadders('a', 'c', ["a","b","c"]))
console.log(findLadders('hot', 'dog', ["hot","dog"]))
