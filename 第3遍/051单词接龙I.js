/* 
  https://leetcode-cn.com/problems/word-ladder/description/
  BFS + DFS 2种方法
*/
/**
 * BFS
 * 最小基因变化和该题是一模一样的，区别在于返回值的不同，
 * 前者返回变化的次数，后者返回总长度（也就是变化次数+1）
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  let strDict = ''
  for (let i = 0; i < 26; i++) {
    strDict += String.fromCharCode(97+i)
  }
  let queue = [beginWord], count = 0
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      let node = queue.shift()
      if (node === endWord) return count + 1

      for (let i = 0; i < node.length; i++) {
        for (const letter of strDict) {
          const str = node.slice(0, i) + letter + node.slice(i+1)
          if (wordSet.has(str)) {
            queue.push(str)
            wordSet.delete(str)
          }
        }
      }
    }
    count++
  }
  return 0
}


console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))