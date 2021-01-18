/* 
  https://leetcode-cn.com/problems/word-ladder-ii/
*/
/**
 * dfs 会超时，bfs 不知道如何将所有的都拿出来
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return []

  // let wordStr = new Set(wordList.join(''))
  let wordStr = ''
  for (let i = 0; i < 26; i++) {
    wordStr += String.fromCharCode(i+97)
  }
  let ret = [], list = [beginWord], count = Infinity
  dfs(beginWord, 1)

  ret = ret.filter(item => item.length === count)
  return ret

  function dfs(beginWord, level) {
    if (beginWord === endWord) {
      count = Math.min(count, level)
      if (level <= count) {
        ret.push([...list])
      }
      return
    }

    for (let i = 0; i < beginWord.length; i++) {
      for (const letter of wordStr) {
        const str = beginWord.slice(0, i) + letter + beginWord.slice(i+1)
        if (wordSet.has(str)) {
          list.push(str)
          wordSet.delete(str)
          dfs(str, level+1)
          list.pop(str)
          wordSet.add(str)
        }
      }
    }
  }
}

// console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
console.log(findLadders('hot', 'dog', ["hot","dog","dot"]))
